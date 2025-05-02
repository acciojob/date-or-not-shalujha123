var isDate = function (input) {
  //   write your code here
	if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // Try to parse if it's a string or number
  if (typeof input === 'string' || typeof input === 'number') {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate);
  }
	

  // Everything else is not a valid date
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));





