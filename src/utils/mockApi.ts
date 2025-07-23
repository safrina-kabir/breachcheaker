// Mock API responses for demonstration purposes
// In production, these would be replaced with actual Flask backend calls

export const mockEmailCheck = async (email: string): Promise<any> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock different responses based on email
  if (email.includes('test@example.com')) {
    return {
      breaches: [
        {
          Name: 'Adobe',
          BreachDate: '2013-10-04',
          Description: 'In October 2013, 153 million Adobe accounts were breached with each containing an internal ID, username, email, encrypted password and a password hint in plain text.',
          PwnCount: 152445165,
          DataClasses: ['Email addresses', 'Password hints', 'Passwords', 'Usernames']
        },
        {
          Name: 'LinkedIn',
          BreachDate: '2012-05-05',
          Description: 'In May 2012, LinkedIn was breached and passwords for nearly 6.5 million user accounts were stolen.',
          PwnCount: 164611595,
          DataClasses: ['Email addresses', 'Passwords']
        }
      ]
    };
  } else if (email.includes('breach@')) {
    return {
      breaches: [
        {
          Name: 'Collection #1',
          BreachDate: '2019-01-07',
          Description: 'In January 2019, a large collection of credential stuffing lists (combinations of email addresses and passwords used to hijack accounts on other services) was discovered being distributed on a popular hacking forum.',
          PwnCount: 772904991,
          DataClasses: ['Email addresses', 'Passwords']
        }
      ]
    };
  } else {
    return {
      breaches: []
    };
  }
};

export const mockPasswordCheck = async (hashedPassword: string): Promise<any> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock responses based on common passwords
  const commonPasswords = [
    '5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8', // 'password'
    'B1B3773A05C0ED0176787A4F1574FF0075F7521E', // 'secret'
    'AAF4C61DDC5E8A2DABEDE0F3B482CD9AEA9434D', // 'hello'
    '356A192B7913B04C54574D18C28D46E6395428AB', // '1'
    'DA39A3EE5E6B4B0D3255BFEF95601890AFD80709', // ''
  ];
  
  if (commonPasswords.includes(hashedPassword)) {
    return {
      isPwned: true,
      count: Math.floor(Math.random() * 1000000) + 1000
    };
  } else {
    return {
      isPwned: false,
      count: 0
    };
  }
};