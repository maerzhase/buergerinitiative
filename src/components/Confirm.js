/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss'; // eslint-disable-line
import { confirm } from '../api';

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

class Confirm extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }
  componentDidMount(){
    confirm(this.props.uid);
  }
  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.container}>
        <h4>Anmeldung Abgeschlossen!</h4>
        <p>
          Sie haben sich erfolgreich zum Newsletter angemeldet. Vielen Dank für Ihre Unterstützung.<br/>
          <a href="/">Zurück zur Startseite</a>
        </p>
      </div>
    );
  }
}

export default injectSheet(styles)(Confirm);