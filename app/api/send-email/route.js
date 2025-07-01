import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Configure Nodemailer transporter (Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Your Gmail (e.g., no-reply@yourdomain.com)
        pass: process.env.EMAIL_PASSWORD,  // App Password
      },
    });

    // Email content (sent to ADMIN)
    const mailOptions = {
      from: `"Website Form" <${process.env.EMAIL_USER}>`,  // Sender alias
      to: "skylene.official.services@gmail.com",  // ADMIN EMAIL (FIXED)
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Message: ${message}
      `,
      html: `
        <h3>New Customer Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}