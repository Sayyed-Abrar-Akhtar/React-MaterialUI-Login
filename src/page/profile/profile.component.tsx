import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './profile.styles';

const ProfilePage = () => {
  const history = useHistory();

  const classes = useStyles();

  const authenticated = localStorage.getItem('authenticated');

  useEffect(() => {
    if (!authenticated) history.push('/');
  }, [authenticated, history]);

  const userCredentialsFromLocalStrorage =
    localStorage.getItem('userCredentials');
  const userDetails =
    userCredentialsFromLocalStrorage !== null
      ? JSON.parse(userCredentialsFromLocalStrorage)
      : null;

  const logoutHandler = () => {
    localStorage.removeItem('authenticated');
    history.push('/login');
  };

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Greetings from Okhati
        </Typography>

        <Typography className={classes.pos} color='textSecondary'>
          {userDetails.email}
        </Typography>
      </CardContent>
      <CardActions onClick={logoutHandler}>
        <Button size='small' color='primary'>
          Logout
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfilePage;
