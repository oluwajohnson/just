document.addEventListener('DOMContentLoaded', () => {
 const form = document.querySelector('form[name="register-dares"]')
 const phoneInput = document.getElementById('phone')

 const loadingModal = document.getElementById('loadingModal')

 phoneInput.addEventListener('input', () => {
  const phoneValue = phoneInput.value.trim()
  const phoneRegex = /^[0-9]{0,15}$/ // Allows up to 15 digits

  if (!phoneRegex.test(phoneValue)) {
   phoneInput.value = phoneValue.slice(0, -1) // Remove the last invalid character
  }
 })

 form.addEventListener('submit', async (e) => {
  e.preventDefault() // Prevent default form submission

  loadingModal.style.display = 'flex'

  const formData = new FormData(form) // Collect form data
  const data = Object.fromEntries(formData.entries()) // Convert to JSON object

  try {
   const response = await fetch(
    'https://nep-backend.onrender.com/api/v1/auth/sasgrant',
    {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
    }
   )

   const result = await response.json()
   if (result.status === 200) {
    form.reset()
    window.scrollTo({ top: 0, behavior: 'smooth' })
   }
  } catch (error) {
   console.error('Error:', error)
  } finally {
   loadingModal.style.display = 'none' // Hide the loading modal
  }
 })
})
