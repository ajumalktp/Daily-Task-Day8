function add(num1, num2) {
    let sum = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
  
    while (i >= 0 || j >= 0 || carry !== 0) {
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
      const currentSum = digit1 + digit2 + carry;
      const digitSum = currentSum % 10;
      carry = Math.floor(currentSum / 10);
      sum = digitSum + sum;
      i--;
      j--;
    }
  
    return sum;
  }
  console.log(add("123", "321"));
  console.log(add("11", "99")); 
    