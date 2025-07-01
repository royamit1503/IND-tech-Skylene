import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  // Rate Limiting Check
  const rateLimit = await checkRateLimit(request);
  if (rateLimit.limited) {
    return NextResponse.json(
      { success: false, error: 'Too many requests' },
      { status: 429 }
    );
  }

  try {
    const { name, email, phone, message } = await request.json();

    // Input Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      // Added for better compatibility
      pool: true,
      maxConnections: 1,
      rateDelta: 20000,
      rateLimit: 5
    });

    const mailOptions = {
      from: `"Skylene Contact" <${process.env.EMAIL_USER}>`,
      to: 'skylene.official.services@gmail.com',
      replyTo: email,
      subject: `New Contact: ${name}`,
      text: `${message}\n\nFrom: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>` : ''}
          </table>
          <p style="margin-top: 20px;"><strong>Message:</strong><br>${message}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Mail Error:', {
      message: error.message,
      stack: error.stack,
      response: error.response
    });
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to send message',
        details: process.env.NODE_ENV === 'development' ? error.message : null
      },
      { status: 500 }
    );
  }
}

// Basic rate limiting function
async function checkRateLimit(request) {
  // Implement your rate limiting logic here
  return { limited: false };
}