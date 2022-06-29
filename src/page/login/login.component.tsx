import React, { useEffect } from 'react';

import Box from '@material-ui/core/Box';
import { Button, Snackbar, TextField, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './login.styles';
import { Alert } from '@material-ui/lab';

const LoginPage = () => {
  const classes = useStyles();

  const history = useHistory();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  const userCredentialsFromLocalStrorage =
    localStorage.getItem('userCredentials');

  useEffect(() => {
    if (error.length > 0) {
      setShowAlert(true);
      const alertTimer = setTimeout(() => setShowAlert(false), 2000);

      return () => clearTimeout(alertTimer);
    }
  }, [error]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userCredentials =
      userCredentialsFromLocalStrorage !== null
        ? JSON.parse(userCredentialsFromLocalStrorage)
        : null;

    if (userCredentials === null) {
      setError('Invalid credentials');
      return;
    }

    if (
      userCredentials.email === email &&
      userCredentials.password === password
    ) {
      setEmail('');
      setPassword('');
      setOpen(true);

      localStorage.setItem('authenticated', JSON.stringify({ auth: true }));
      const successDisplayTimer = setTimeout(() => {
        history.push('/profile');
      }, 2000);

      return () => clearTimeout(successDisplayTimer);
    } else {
      setError('Invalid credentials');
      return;
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success'>
          {`Greeting from Okhati!`}
        </Alert>
      </Snackbar>
      <Box component='form' className={classes.box} onSubmit={handleSubmit}>
        <Typography variant='h2' className={classes.heading}>
          Login
        </Typography>
        <div className={classes.error_box}>
          {showAlert && error && (
            <Alert severity='error' className={classes.error}>
              {error}
            </Alert>
          )}
        </div>
        <TextField
          data-testid='email'
          name='email'
          className={classes.formControl}
          variant='outlined'
          id='outlined-name'
          label='Email'
          type='email'
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <TextField
          data-testid='password'
          name='password'
          className={classes.formControl}
          variant='outlined'
          id='outlined-name'
          type='password'
          label='Password'
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />

        <Button
          data-testid='login'
          type='submit'
          variant='contained'
          color='primary'
          className={`${classes.btn} ${classes.formControl}`}
        >
          Sign In
        </Button>
        <Box
          sx={{ display: 'flex', justifyContent: 'flex-start' }}
          className={classes.no_account}
        >
          <Typography variant='body1'>Do not have an account?</Typography>
          <Link to='/sign-up'>
            <Button
              color='primary'
              className={classes.link}
              data-testid='create-one'
            >
              Create one
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
