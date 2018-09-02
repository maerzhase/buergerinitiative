/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss'; // eslint-disable-line
import { unsubscribe } from '../api';

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
});

class Unsubscribe extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }
  state = {
    email: '',
    sent: false,
  }
  handleSubmit = (e) => {
    e.preventDefault();
    unsubscribe(this.state.email).then(() => {
      this.setState({
        sent: true,
      });
    });
  }
  handleInput = (e) => {
    this.setState({
      email: e.target.value,
    });
  }
  render() {
    const {
      classes,
    } = this.props;
    const {
      email,
      sent,
    } = this.state;
    return (
      <div className={classes.container}>
        { !sent &&
          <React.Fragment>
            <h4>Vom Newsletter Abmelden</h4>
            <form
              onSubmit={this.handleSubmit}
              className={classes.form}
            >
              <input
                required
                type="email"
                value={email}
                placeholder="E-Mail Adresse"
                onChange={this.handleInput}
              />
              <button>
                Vom Newsletter abmelden
              </button>
            </form>
            <p>
              Sie können sich <a href='?'>hier zum Newsletter anmelden</a>.
            </p>
          </React.Fragment>
        }
        { sent &&
          <p>
            Wir haben eine Bestätigung an <b>'{email}'</b> gesendet. <br /> <a href="/">Zurück zur Startseite</a>
          </p>
        }
      </div>
    );
  }
}

export default injectSheet(styles)(Unsubscribe);