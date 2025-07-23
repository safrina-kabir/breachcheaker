# BreachChecker User Manual

## Table of Contents
1. [Getting Started](#getting-started)
2. [Interface Overview](#interface-overview)
3. [Email Breach Checking](#email-breach-checking)
4. [Password Security Checking](#password-security-checking)
5. [Understanding Results](#understanding-results)
6. [Security Features](#security-features)
7. [Settings & Customization](#settings--customization)
8. [Troubleshooting](#troubleshooting)
9. [Security Best Practices](#security-best-practices)
10. [FAQ](#faq)

---

## Getting Started

### What is BreachChecker?
BreachChecker is a security tool that helps you determine if your email addresses or passwords have been compromised in known data breaches. It uses the Have I Been Pwned (HIBP) database, which contains information about billions of compromised accounts from various security incidents.

### Accessing the Application
1. Open your web browser
2. Navigate to the BreachChecker application URL
3. The application will load with the main interface

### System Requirements
- **Web Browser**: Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+
- **Internet Connection**: Required for breach checking
- **JavaScript**: Must be enabled
- **Screen Resolution**: Optimized for all screen sizes (mobile to desktop)

---

## Interface Overview

### Header Section
- **Logo & Title**: BreachChecker branding with security shield icon
- **HIBP API Link**: Direct link to Have I Been Pwned website
- **Theme Toggle**: Switch between light and dark modes

### Main Navigation
The application features two primary tabs:
- **Email Check**: For checking email address breaches
- **Password Check**: For checking password security

### Footer Section
- **Resources**: Links to HIBP documentation and security information
- **Privacy Information**: Details about data handling and security measures

---

## Email Breach Checking

### How to Check an Email Address

1. **Select Email Check Tab**
   - Click on the "Email Check" tab in the main navigation
   - The email checking interface will appear

2. **Enter Email Address**
   - Type your email address in the input field
   - The system validates email format in real-time
   - Invalid formats will show an error message

3. **Submit Check**
   - Click the "Check Email" button
   - A loading spinner will appear while checking
   - Results will display within a few seconds

### Email Input Validation
- Must be a valid email format (user@domain.com)
- Cannot be empty
- Special characters are properly handled
- Case-insensitive checking

### What Happens During Checking
1. Email is validated for proper format
2. Request is sent to the breach database
3. Results are processed and formatted
4. Detailed breach information is displayed

---

## Password Security Checking

### How to Check a Password

1. **Select Password Check Tab**
   - Click on the "Password Check" tab
   - The password checking interface will appear

2. **Enter Password**
   - Type your password in the secure input field
   - Use the eye icon to toggle password visibility
   - Password is processed locally for security

3. **Submit Check**
   - Click the "Check Password" button
   - Your password is hashed locally using SHA-1
   - Only the first 5 characters of the hash are sent to the API

### Password Security Features
- **Local Hashing**: Passwords are hashed on your device
- **K-Anonymity**: Only hash prefixes are transmitted
- **No Storage**: Passwords are never stored or logged
- **Secure Transmission**: All communications use HTTPS

### Privacy Protection Notice
The application displays a blue information box explaining:
- Passwords are hashed locally using SHA-1
- Only the first 5 characters of the hash are sent to the API
- This ensures your actual password never leaves your device

---

## Understanding Results

### Email Breach Results

#### No Breaches Found
- **Green Success Box**: Indicates no breaches were found
- **Checkmark Icon**: Visual confirmation of safety
- **Recommendation**: Continue using strong, unique passwords

#### Breaches Found
- **Red Alert Box**: Indicates compromised accounts
- **Breach Count**: Number of breaches affecting your email
- **Detailed Information** for each breach:
  - **Breach Name**: Company or service affected
  - **Date**: When the breach occurred
  - **Description**: Details about what happened
  - **Affected Accounts**: Number of accounts compromised
  - **Data Types**: What information was stolen

#### Download Results
- **Download Button**: Available when breaches are found
- **JSON Format**: Results saved as structured data
- **Filename**: Includes email and date for organization

### Password Breach Results

#### Password Secure
- **Green Success Box**: Password not found in breaches
- **Security Confirmation**: Password appears to be safe
- **Reminder**: Always use unique passwords for each account

#### Password Compromised
- **Red Alert Box**: Password found in breach databases
- **Breach Count**: How many times the password appeared
- **Immediate Action Required**: Change password immediately
- **Security Recommendations**:
  - Change this password immediately
  - Use unique passwords for each account
  - Consider using a password manager
  - Enable two-factor authentication

---

## Security Features

### Data Protection
- **No Data Storage**: No emails or passwords are stored
- **Ephemeral Processing**: Data is processed and immediately discarded
- **Local Hashing**: Passwords are hashed on your device
- **HTTPS Encryption**: All communications are encrypted

### Privacy Measures
- **K-Anonymity**: Password checking uses privacy-preserving techniques
- **No Logging**: User inputs are never logged or tracked
- **Client-Side Validation**: Input validation happens on your device
- **Secure Headers**: Proper security headers implemented

### API Security
- **Rate Limiting**: Respects HIBP's rate limiting requirements
- **Proper Headers**: Uses appropriate user-agent and API headers
- **Error Handling**: Graceful handling of API errors and timeouts

---

## Settings & Customization

### Theme Selection
1. **Light Mode**: Default bright theme for daytime use
2. **Dark Mode**: Dark theme for low-light environments

#### How to Change Theme
- Click the sun/moon icon in the header
- Theme preference is automatically saved
- System theme detection on first visit

### Responsive Design
- **Mobile Optimized**: Touch-friendly interface on phones
- **Tablet Support**: Optimized layout for medium screens
- **Desktop Experience**: Full-featured interface for large screens

---

## Troubleshooting

### Common Issues

#### "Invalid email format" Error
- **Cause**: Email doesn't match required format
- **Solution**: Ensure email follows user@domain.com format
- **Example**: Use "john@example.com" not "john@example"

#### "Unable to check email" Error
- **Cause**: Network connectivity or API issues
- **Solution**: 
  - Check internet connection
  - Wait a moment and try again
  - Refresh the page if problem persists

#### "Rate limit exceeded" Message
- **Cause**: Too many requests in short time
- **Solution**: Wait 1-2 minutes before trying again
- **Prevention**: Avoid rapid successive checks

#### Loading Takes Too Long
- **Cause**: Slow network or API response
- **Solution**:
  - Wait up to 30 seconds for response
  - Check network connection
  - Refresh page and try again

### Browser Compatibility Issues
- **Clear Cache**: Clear browser cache and cookies
- **Update Browser**: Ensure you're using a supported browser version
- **Disable Extensions**: Some ad blockers may interfere
- **JavaScript**: Ensure JavaScript is enabled

---

## Security Best Practices

### Password Security
1. **Use Strong Passwords**
   - Minimum 12 characters
   - Mix of letters, numbers, and symbols
   - Avoid dictionary words and personal information

2. **Unique Passwords**
   - Different password for each account
   - Never reuse passwords across services
   - Change passwords if compromised

3. **Password Managers**
   - Use reputable password managers
   - Generate random, strong passwords
   - Enable auto-fill for convenience

### Account Security
1. **Two-Factor Authentication (2FA)**
   - Enable on all important accounts
   - Use authenticator apps over SMS
   - Keep backup codes secure

2. **Regular Monitoring**
   - Check accounts regularly for suspicious activity
   - Set up breach notifications
   - Review account permissions periodically

3. **Email Security**
   - Use secure email providers
   - Enable email encryption when possible
   - Be cautious with email attachments and links

### General Security Tips
- Keep software and browsers updated
- Use secure networks (avoid public Wi-Fi for sensitive activities)
- Be cautious of phishing attempts
- Regularly backup important data

---

## FAQ

### General Questions

**Q: Is BreachChecker free to use?**
A: Yes, the basic breach checking functionality is free to use.

**Q: How often is the breach database updated?**
A: The Have I Been Pwned database is regularly updated as new breaches are discovered and verified.

**Q: Can I check multiple emails at once?**
A: Currently, the application supports checking one email at a time to ensure accuracy and prevent abuse.

### Privacy & Security

**Q: Do you store my email addresses or passwords?**
A: No, we do not store, log, or retain any email addresses or passwords. All processing is ephemeral.

**Q: How do you ensure my password is secure during checking?**
A: Passwords are hashed locally on your device using SHA-1, and only the first 5 characters of the hash are sent to the API using k-anonymity techniques.

**Q: Is my data encrypted during transmission?**
A: Yes, all communications use HTTPS encryption to protect data in transit.

### Technical Questions

**Q: What browsers are supported?**
A: Modern browsers including Chrome 90+, Firefox 88+, Safari 14+, and Edge 90+.

**Q: Why do I need JavaScript enabled?**
A: JavaScript is required for the interactive interface, form validation, and API communications.

**Q: Can I use this application offline?**
A: No, an internet connection is required to check against the breach databases.

### Results & Interpretation

**Q: What does it mean if my email is found in a breach?**
A: It means your email address was included in a data breach. You should change passwords for affected accounts and monitor for suspicious activity.

**Q: My password shows as "pwned" - what should I do?**
A: Change this password immediately on all accounts where you use it. Create a new, unique password for each account.

**Q: How accurate are the results?**
A: Results are based on the Have I Been Pwned database, which is highly accurate and regularly updated with verified breach data.

**Q: Why might my email not show breaches I know about?**
A: Some breaches may not be included in the HIBP database if they haven't been verified or if the affected company hasn't disclosed the breach publicly.

### Troubleshooting

**Q: The application won't load - what should I do?**
A: Try refreshing the page, clearing your browser cache, or using a different browser. Ensure JavaScript is enabled.

**Q: I'm getting a "rate limit" error - what does this mean?**
A: You've made too many requests in a short time. Wait 1-2 minutes before trying again.

**Q: The results seem to be taking a long time - is this normal?**
A: Checking can take a few seconds depending on network speed and API response time. Wait up to 30 seconds for results.

---

## Support & Resources

### Additional Resources
- [Have I Been Pwned Website](https://haveibeenpwned.com)
- [HIBP API Documentation](https://haveibeenpwned.com/API/v3)
- [Password Security Guide](https://www.troyhunt.com/passwords-evolved-authentication-guidance-for-the-modern-era/)
- [Two-Factor Authentication Guide](https://authy.com/what-is-2fa/)

### Security Education
- [NIST Password Guidelines](https://pages.nist.gov/800-63-3/sp800-63b.html)
- [OWASP Security Guidelines](https://owasp.org/www-project-top-ten/)
- [Cybersecurity Best Practices](https://www.cisa.gov/cybersecurity-best-practices)

---

*This manual is regularly updated to reflect new features and improvements. For the most current information, please refer to the application's built-in help system and official documentation.*

**Version**: 1.0  
**Last Updated**: January 2025  
**Application**: BreachChecker v1.0
