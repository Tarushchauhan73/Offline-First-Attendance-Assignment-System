# 🔒 Security Policy

## Supported Versions

We actively support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of our project seriously. If you believe you have found a security vulnerability, please report it to us as described below.

**Please do NOT report security vulnerabilities through public GitHub issues, discussions, or pull requests.**

Instead, please report security vulnerabilities by emailing:
**tarushchauhan73@gmail.com**

Please include the following information in your report:

- A clear description of the vulnerability
- Steps to reproduce the issue
- Potential impact of the vulnerability
- Any suggested fixes or mitigations

## What to Expect

- You will receive an acknowledgment of your report within 48 hours
- We will investigate the issue and provide regular updates on our progress
- We will keep you informed about the timeline for fixing the vulnerability
- Once the vulnerability is fixed, we will publicly disclose the issue

## Our Commitment

- We will respond to security reports within 48 hours
- We will keep reporters informed throughout the investigation and fix process
- We will credit reporters for their findings (unless they wish to remain anonymous)
- We will not pursue legal action against security researchers who follow this policy

## Security Best Practices

When using this attendance system, please follow these security best practices:

### For Administrators
- Regularly update the system and its dependencies
- Use strong, unique passwords for administrative accounts
- Enable HTTPS/TLS encryption in production deployments
- Regularly backup attendance data
- Monitor system logs for suspicious activity

### For Users
- Use strong, unique passwords
- Log out when not using the system
- Be cautious when accessing the system on public networks
- Report any suspicious behavior to administrators

### Data Protection
- Student and attendance data is stored locally in the browser (IndexedDB)
- Data synchronization only occurs when explicitly configured with a trusted server
- No personal data is transmitted without user consent
- All data transmission uses HTTPS encryption

Thank you for helping keep our project and its users safe!