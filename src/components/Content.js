/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss'; // eslint-disable-line
import { parse } from 'url';
import Html from './Html';
import Imprint from './Imprint';
import { subscribe } from '../api';
import Signup from './Signup';
import Unsubscribe from './Unsubscribe';

function parseQuery(queryString) {
  let query = {};
  let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

const styles = theme => ({ // eslint-disable-line
  content: {
    color: theme.color,
    transition: 'color ease-in-out 2500ms',
    maxWidth: '800px',
  },
  more: {
    fontSize: '2.5rem',
  },
  contact: {
    fontSize: '1.5rem',
  },
  imprintLink: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 5,
    fontSize: '1.2rem',
    cursor: 'pointer',
    ...theme.fade(),
    '&:hover': {
      color: theme.primary,
    },
  },
});

class Content extends React.Component { // eslint-disable-line
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }
  state = {
    showImprint: false,
    page: null,
  }
  componentDidMount() {
    window.addEventListener("hashchange", this.handleUpdateRouting);
    this.handleUpdateRouting();
  }
  handleUpdateRouting = () => {
    const parsed = parse(window.location.href);
    if (parsed.search) {
      const query = parseQuery(parsed.search)
      this.setState({
        page: query.page,
      });
    }
  }
  renderPage = () => {
    const {
      page,
    } = this.state;
    switch(page) {
      case 'unsubscribe':
        return <Unsubscribe />
      default:
        return <Signup />
    }
  }

  render() {
    const {
      classes,
    } = this.props;
    console.log(this.state.page);
    return (
      <div className={classes.content}>
        <Html />
        <h1>
          Bürgerinitiative zur Erneuerung der Lilienthalstraße
        </h1>
        {
          this.renderPage()
        }
        <h4>Material</h4>
        <p>
          Hier finden Sie alle Materialien der Bürgerinitiative.
        </p>
        <ul>
          <li>
            <a download href="/static/Unterschriftenliste.pdf">
              Unterschriftenliste: Ausdrucken und Unterschriften sammeln.
            </a>
          </li>
          <li>
            <a download href="/static/Anwohner-Aufruf-Lilienthalstr-Mit-Namen.pdf">
              Aushang zum Anwohnertreffen am 28. August
            </a>
          </li>
        </ul>
      </div>
    );
  }
}


export default injectSheet(styles)(Content);