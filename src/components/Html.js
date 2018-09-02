import injectSheet from 'react-jss';
import Media from './mediaQueries';

const styles = theme => ({ // eslint-disable-line
  '@global': {
    [Media.xs]: {
      html: {
        fontSize: '13px',
      },
    },
    [Media.s]: {
      html: {
        fontSize: '13px',
      },
    },
    [Media.m]: {
      html: {
        fontSize: '14px',
      },
    },
    [Media.l]: {
      html: {
        fontSize: '16px',
      },
    },
    [Media.xl]: {
      html: {
        fontSize: '16px',
      },
    },
    html: {
      fontFamily: "'IBM Plex Sans', sans-serif",
      fontWeight: 400,
      width: '100%',
      minHeight: '100%',
      background: theme.background,
      transition: 'background-color ease-in-out 2500ms',
    },
    'h1, h2, h3, h4, h5, h6': {
      marginTop: 0,
    },
    h1: {
      fontSize: '3rem',
      marginBottom: theme.spacing.unit * 4,
      textDecoration: 'underline',
    },
    h2: {
      fontSize: '2.7rem',
      fontWeight: 400,
      marginBottom: theme.spacing.unit * 4,
    },
    h3: {
      fontSize: '2.3rem',
      marginBottom: theme.spacing.unit * 4,
    },
    h4: {
      fontSize: '2rem',
      marginBottom: theme.spacing.unit * 2,
    },
    h5: {
      fontSize: '1.8rem',
      marginBottom: theme.spacing.unit * 2,
    },
    h6: {
      fontSize: '1.5rem',
      marginBottom: theme.spacing.unit * 2,
    },
    p: {
      fontSize: '1.2rem',
      lineHeight: '1.8rem',
      marginTop: 0,
    },
    a: {
      textDecoration: 'underline',
      color: theme.primary,
      cursor: 'pointer',
      ...theme.fade(),
      '&:hover': {
        color: '#0277BD',
      },
      '&[resetStyle]': {
        color: 'inherit',
        '&:hover': {
          color: 'inherit',
        },
      },
    },
    'input, button': {
      fontSize: '1.2rem',
      fontFamily: "'IBM Plex Sans', sans-serif",
      fontWeight: 400,
      padding: '0.3rem',
    },
    input: {
      '&:after': {
        content: '"asdasdasds"',
        width: '20px',
        height: '20px',
      },
    },
    li: {
      marginBottom: theme.spacing.unit * 2,
    },
  },
});

const Html = () => null;

export default injectSheet(styles)(Html);
