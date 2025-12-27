export function validateRegister({ username, mobileNumber, password }) {
  const errors = {
    username: "",
    mobileNumber: "",
    password: "",
  };

  let isValid = true;

  // Name validation
  if (!username || !username.trim()) {
    errors.username = "Name cannot be empty.";
    isValid = false;
  } else if (username.trim().length < 3) {
    errors.username = "Name must be at least 3 characters.";
    isValid = false;
  }

  // Mobile validation
  if (!mobileNumber || !mobileNumber.trim()) {
    errors.mobileNumber = "Mobile number is required.";
    isValid = false;
  } else if (!/^[0-9]{10}$/.test(mobileNumber)) {
    errors.mobileNumber = "Enter a valid 10-digit number.";
    isValid = false;
  }

  // Password validation
  if (!password) {
    errors.password = "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
    isValid = false;
  }

  return { isValid, errors };
}

export function validateLogin({ mobileNumber, password }) {
  const errors = {
    mobileNumber: "",
    password: "",
  };

  let isValid = true;

  if (!/^[0-9]{10}$/.test(mobileNumber)) {
    errors.mobileNumber = "Enter a valid 10-digit mobile number";
    isValid = false;
  }

  if (!password) {
    errors.password = "Password is required";
    isValid = false;
  }

  return { isValid, errors };
}
