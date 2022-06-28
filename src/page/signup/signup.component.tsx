import React, { useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import { Button, Snackbar, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import useStyles from './signup.styles';
import SignUpValidation from '../../utils/SignUpValidation';
import { error } from 'console';

const SignUpPage = () => {
  const history = useHistory();
  const classes = useStyles();

  const errorState: string[] = [];
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errors, setErrors] = React.useState(errorState);
  const [showAlert, setShowAlert] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (errors.length > 0) {
      setShowAlert(true);
      const alertTimer = setTimeout(() => setShowAlert(false), 3000);

      return () => clearTimeout(alertTimer);
    }
  }, [errors]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const signUpValidation = new SignUpValidation(
      email,
      password,
      confirmPassword
    );

    const signUpValidationResult = signUpValidation.result();

    if (!signUpValidationResult.validated) {
      setErrors([...signUpValidationResult.errors]);
      return;
    }

    localStorage.setItem(
      'userCredentials',
      JSON.stringify({ email: email, password: password })
    );
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    setOpen(true);
    const successDisplayTimer = setTimeout(() => {
      history.push('/');
    }, 2000);

    return () => clearTimeout(successDisplayTimer);
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
          Account Created Successfully
        </Alert>
      </Snackbar>
      <Box component='form' onSubmit={handleSubmit} className={classes.box}>
        <Typography variant='h2' className={classes.heading}>
          Sign Up
        </Typography>
        <div className={classes.error_box}>
          {showAlert &&
            errors &&
            errors.map((error, idx) => (
              <Alert severity='error' className={classes.error} key={idx}>
                {error}
              </Alert>
            ))}
        </div>
        <TextField
          className={classes.form_control}
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
          className={classes.form_control}
          variant='outlined'
          id='outlined-name'
          type='password'
          label='Password'
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <TextField
          className={classes.form_control}
          variant='outlined'
          id='outlined-name'
          label='Confirm Password'
          type='password'
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
        />
        <Button
          className={`${classes.btn} ${classes.form_control}`}
          type='submit'
          variant='contained'
          color='primary'
        >
          Sign Up
        </Button>
        <Box className={classes.account_exist}>
          <Typography variant='body1'>Already have an account?</Typography>
          <Link to='/login'>
            <Button color='primary' className={classes.link}>
              Login
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default SignUpPage;
