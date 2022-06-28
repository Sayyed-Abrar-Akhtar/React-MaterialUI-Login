class SignUpValidation {
  email: string;
  password: string;
  confirmPassword: string;
  message: string[];
  constructor(email: string, password: string, confirmPassword: string) {
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.message = [];
  }

  validateEmptyFields = () => {
    if (this.email === '') {
      this.message.push('Email is required!');
    }
    if (this.password === '') {
      this.message.push('Password is required!');
    }
  };

  validatePasswordLength = () => {
    if (this.password.length < 8) {
      this.message.push('password must be at least 8 characters long!');
    }
  };

  validatePasswordStrength = () => {
    if (!(/\d/.test(this.password) && /[a-zA-Z]/.test(this.password))) {
      this.message.push(
        'Password must include at least a number and an alphabet!'
      );
    }
  };

  matchPassword = () => {
    if (this.password !== this.confirmPassword) {
      this.message.push('Password and confirm password did not matched!');
    }
  };

  result = () => {
    this.validateEmptyFields();
    this.validatePasswordLength();
    this.validatePasswordStrength();
    this.matchPassword();

    if (this.message.length > 0) {
      return { validated: false, errors: this.message };
    } else {
      return { validated: true, errors: [] };
    }
  };
}

export default SignUpValidation;
