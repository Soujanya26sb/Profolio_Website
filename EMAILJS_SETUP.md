# EmailJS Setup Instructions

To receive email notifications when someone submits the contact form, follow these steps:

## 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account (allows 200 emails/month)

## 2. Add Email Service
- Go to "Email Services" in the dashboard
- Click "Add New Service"
- Choose Gmail (or your preferred email provider)
- Connect your email: sbsoujanyasbsb@gmail.com
- Note down the SERVICE ID

## 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template:

Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

- Save the template and note down the TEMPLATE ID

## 4. Get Public Key
- Go to "Account" > "General"
- Copy your Public Key

## 5. Update Footer.jsx
Replace these values in src/components/Footer.jsx:
- YOUR_SERVICE_ID → Your Service ID from step 2
- YOUR_TEMPLATE_ID → Your Template ID from step 3
- YOUR_PUBLIC_KEY → Your Public Key from step 4

Example:
```javascript
emailjs.send(
  'service_abc123',      // Replace YOUR_SERVICE_ID
  'template_xyz789',     // Replace YOUR_TEMPLATE_ID
  {...},
  'user_def456'          // Replace YOUR_PUBLIC_KEY
)
```

## Done!
Now when someone fills out your contact form, you'll receive an email at sbsoujanyasbsb@gmail.com
