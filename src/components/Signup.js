/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss'; // eslint-disable-line
import { subscribe } from '../api';


const styles = theme => ({ // eslint-disable-line
  container: {
    marginBottom: theme.spacing.unit * 3,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    // maxWidth: '50%',
    '& > *': {
      marginBottom: '0.5rem',
    },
  },
  input: {
    display: 'flex',
    '@global': {
      input: {
        flexGrow: 1,
      },
      span: {
        fontSize: '1.2rem',
        fontFamily: theme.font,
        marginLeft: theme.spacing.unit * 1,
      },
    },
  },
  info: {
    fontSize: '1rem',
    alignSelf: 'flex-end',
  },
  success: {
    // fontSize: '1.8rem',
    // lineHeight: '2.5rem',
    color: '#43A047',
  },
});


const RequiredInput = injectSheet(styles)(({ classes, ...props}) => { // eslint-disable-line
  return (
    <div className={classes.input}>
      <input {...props} />
    </div>
  );
});

class Signup extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }
  state = {
    email: '',
    confirmemail: '',
    name: '',
    checkConfirmation: false,
    success: false,
  }
  get isConfirmed() {
    const {
      email,
      confirmemail,
      checkConfirmation,
    } = this.state;
    if (!checkConfirmation) return true;
    if (email.length === 0) return true;
    if (confirmemail.length === 0) return true;
    return email === confirmemail;
  }
  get isValid() {
    return this.isConfirmed && this.state.name.length > 0;
  }
  handleConfirmBlur = () => {
    this.setState({
      checkConfirmation: true,
    });
  }
  handleInputChange = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    subscribe('markus@nand.io', 'Markus').then((response) => {
      console.log(response);
      if (response.status === 200) {
        this.setState({

          success: true,
        });
      }
    }).catch((err) => {
      console.error(err);
    });
  }
  render() {
    const {
      classes,
    } = this.props;
    const {
      email,
      confirmemail,
      name,
      success,
    } = this.state;
    return (
      <div className={classes.container}>
        <h4>
          Newsletter Anmeldung
        </h4>
        <p>
          Sie sind Anwohner der Lilienthalstraße und konnten beim ersten Treffen am 28. August nicht teilnehmen?
          Dann können Sie sich hier zum Newsletter anmelden.
        </p>
        {
          !success &&
          <form
            className={classes.form}
            onSubmit={this.handleSubmit}
          >
            <RequiredInput
              required
              type="email"
              value={email}
              placeholder="E-Mail Adresse *"
              onChange={(e) => {
                this.handleInputChange(e, 'email');
              }}
            />
            <RequiredInput
              required
              type="email"
              value={confirmemail}
              placeholder="E-Mail Adresse bestätigen *"
              onChange={(e) => {
                this.handleInputChange(e, 'confirmemail');
              }}
              onBlur={this.handleConfirmBlur}
            />
            {
              !this.isConfirmed &&
              <div>
                Bitte überprüfen Sie ihre Eingabe. Die E-Mail Adressen stimmen nicht überein.
              </div>
            }
            <RequiredInput
              required
              type="text"
              value={name}
              placeholder="Name *"
              onChange={(e) => {
                this.handleInputChange(e, 'name');
              }}
            />
            <button
              type="submit"
              disabled={!this.isValid}
            >
              Zum Newsletter anmelden
            </button>
          </form>
        }
        {
          success &&
          <p className={classes.success}>
            Vielen Dank für Ihr Interesse! <br />
            Sie erhalten eine E-Mail zur Bestätigung der Anmeldung.
          </p>
        }
        <p className={classes.info}>
          Ihre Informationen werden nicht an Dritte weitergeben und dienen lediglich zur Koordination der Bürgerinitiative. <a href="?page=unsubscribe">Sie können sich hier auch vom Newsletter abmelden.</a>
        </p>
      </div>
    );
  }
}

export default injectSheet(styles)(Signup);
