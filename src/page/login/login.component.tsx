import React from 'react';

import Box from '@material-ui/core/Box';
import { Button, TextField, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './login.styles';
import { Alert } from '@material-ui/lab';

const LoginPage = () => {
  const classes = useStyles();

  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const userCredentialsFromLocalStrorage =
    localStorage.getItem('userCredentials');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userCredentials =
      userCredentialsFromLocalStrorage !== null
        ? JSON.parse(userCredentialsFromLocalStrorage)
        : null;

    if (
      userCredentials.email === email &&
      userCredentials.password === password
    ) {
      history.push('/abc');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Box component='form' className={classes.box} onSubmit={handleSubmit}>
      <Typography variant='h2' className={classes.heading}>
        Login
      </Typography>
      <div className={classes.error_box}>
        {error && (
          <Alert severity='error' className={classes.error}>
            {error}
          </Alert>
        )}
      </div>
      <TextField
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
        type='submit'
        variant='contained'
        color='primary'
        className={`${classes.btn} ${classes.formControl}`}
      >
        Login
      </Button>
      <Box
        sx={{ display: 'flex', justifyContent: 'flex-start' }}
        className={classes.no_account}
      >
        <Typography variant='body1'>Do not have an account?</Typography>
        <Link to='/sign-up'>
          <Button color='primary' className={classes.link}>
            Create one
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default LoginPage;
