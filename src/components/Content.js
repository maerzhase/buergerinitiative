/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss"; // eslint-disable-line
import { parse } from "url";
import Html from "./Html";
import Imprint from "./Imprint";
import { subscribe } from "../api";
import Signup from "./Signup";
import Unsubscribe from "./Unsubscribe";
import Confirm from "./Confirm";

function parseQuery(queryString) {
  let query = {};
  let pairs = (
    queryString[0] === "?" ? queryString.substr(1) : queryString
  ).split("&");
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}

const styles = (theme) => ({
  // eslint-disable-line
  content: {
    color: theme.color,
    transition: "color ease-in-out 2500ms",
    maxWidth: "800px",
  },
  more: {
    fontSize: "2.5rem",
  },
  contact: {
    fontSize: "1.5rem",
  },
  imprintLink: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 5,
    fontSize: "1.2rem",
    cursor: "pointer",
    ...theme.fade(),
    "&:hover": {
      color: theme.primary,
    },
  },
});

class Content extends React.Component {
  // eslint-disable-line
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  state = {
    showImprint: false,
    page: null,
    query: {},
  };
  componentDidMount() {
    window.addEventListener("hashchange", this.handleUpdateRouting);
    this.handleUpdateRouting();
  }
  handleUpdateRouting = () => {
    const parsed = parse(window.location.href);
    if (parsed.search) {
      const query = parseQuery(parsed.search);
      this.setState({
        page: query.page,
        query,
      });
    }
  };
  renderPage = () => {
    const { page, query } = this.state;
    switch (page) {
      case "unsubscribe":
        return <Unsubscribe />;
      case "confirm":
        return <Confirm uid={query.uid} />;
      default:
        return (
          <React.Fragment>
            <Signup />
            <h4>Material</h4>
            <p>Hier finden Sie alle Materialien der Bürgerinitiative.</p>
            <ul>
              <li>
                <a download href="/BI-Lilienthalstraße-Protokoll-Juni-2024.pdf">
                  Protokoll Anwohnertreffen Juni 2024
                </a>
              </li>
              <li>
                <a download href="/Offener-Brief-Mai-2023.pdf">
                  Offener Brief Mai 2023
                </a>
              </li>
              <li>
                <a download href="/Protokoll_Hermann_5.6.2023.pdf">
                  Protkoll vom Treffen mit Frau Hermann 5.6.2023
                </a>
              </li>
              <li>
                <a download href="/Umfrage-Meinungsbild-A5.pdf">
                  Umfrage: Ausdrucken und noch bis 29 September abstimmen.
                </a>
              </li>
              <li>
                <a download href="/Aushang-Meinungsbild-A5.pdf">
                  Aushang zur Umfrage.
                </a>
              </li>
              <li>
                <a download href="/Anwohner-Aufruf-Lilienthalstr-Mit-Namen.pdf">
                  Aushang zum Anwohnertreffen am 28. August
                </a>
              </li>
            </ul>
          </React.Fragment>
        );
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <Html />
        <h1>
          <a href="/" resetStyle="true">
            Bürgerinitiative zur Erneuerung der Lilienthal/Züllichauer Str.
          </a>
        </h1>
        <h4>Umfrage</h4>
        <p>
          Die Umfrage ist relevant dafür welche Interessen wir bei unserem
          Termin im Rathaus vertreten werden. Sie läuft bis zum 29. September
          und wird anschließend von uns ausgewertet.{" "}
          <a
            target="_blank"
            href="https://markusmrzhase.typeform.com/to/pjAsXz"
          >
            Hier gehts zur Umfrage
          </a>
        </p>
        {this.renderPage()}
      </div>
    );
  }
}

export default injectSheet(styles)(Content);
