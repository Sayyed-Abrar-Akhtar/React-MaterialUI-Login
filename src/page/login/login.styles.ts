import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      margin: '25px 0',
    },

    error_box: {
      margin: '10px 0',
    },
    error: {
      margin: '5px 0',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      width: '90%',
      margin: '10ch 5%',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        width: '50ch',
        margin: '10ch auto',
      },
    },
    formControl: {
      margin: '10px 0',
    },
    btn: {
      height: '7ch',
    },
    no_account: {
      alignItems: 'center',
      marginTop: '10px',
    },
    link: {
      marginLeft: '5px',
    },
  })
);

export default useStyles;
