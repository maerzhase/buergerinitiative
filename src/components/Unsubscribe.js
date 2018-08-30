/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss'; // eslint-disable-line

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
  }
  handleSubmit = () => {

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
    } = this.state;
    return (
      <div className={classes.container}>
        <h4>Newsletter Abmelden</h4>
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
      </div>
    );
  }
}

export default injectSheet(styles)(Unsubscribe);