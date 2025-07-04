'use client'

import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className='py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48 w-full max-w-7xl mx-auto'>
      <div className='bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200'>
        <div className='flex flex-col md:flex-row'>

          {/* Left Illustration */}
          <div className='md:w-1/2 bg-blue-100 p-8 flex items-center justify-center'>
            <img
              src='/images/contact-form.png'
              alt='Contact us'
              className='w-full max-w-sm object-contain'
            />
          </div>

          {/* Right Form */}
          <div className='md:w-1/2 p-8 sm:p-10'>
            <h2 className='text-4xl font-extrabold text-gray-800 mb-3'>Get in Touch</h2>
            <p className='text-gray-600 mb-6 text-base'>
              Fill out the form and we will contact you soon.
            </p>

            {submitStatus === 'success' && (
              <div className='mb-6 p-4 bg-green-100 text-green-800 rounded-md font-medium'>
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className='mb-6 p-4 bg-red-100 text-red-800 rounded-md font-medium'>
                There was an error submitting your form. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-5'>
              <div>
                <label htmlFor='name' className='block text-sm font-semibold text-gray-700 mb-1'>
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition'
                  placeholder='Your name'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-1'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition'
                  placeholder='your@email.com'
                />
              </div>

              <div>
                <label htmlFor='phone' className='block text-sm font-semibold text-gray-700 mb-1'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition'
                  placeholder='+91 1234567890'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-semibold text-gray-700 mb-1'>
                  Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition'
                  placeholder='Tell us about your project...'
                ></textarea>
              </div>

              <div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-xl text-white font-semibold text-lg transition duration-200 transform
                    ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] active:scale-95'}
                  `}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
