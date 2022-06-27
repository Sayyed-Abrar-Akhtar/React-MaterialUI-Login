import React from 'react';

import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      margin: '25px 0',
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
  })
);

const LoginPage = () => {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(
      'email: ',
      email,
      ', Password: ',
      password,
      ' and Confirm Password: ',
      confirmPassword
    );
  };

  return (
    <Box component='form' className={classes.box} onSubmit={handleSubmit}>
      <Typography variant='h2' className={classes.heading}>
        Login
      </Typography>
      <TextField
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
      <TextField
        className={classes.formControl}
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
        type='submit'
        variant='contained'
        color='primary'
        className={`${classes.btn} ${classes.formControl}`}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
