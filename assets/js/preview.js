document.addEventListener('DOMContentLoaded', () => {
 const images = document.querySelectorAll('.gallery-image')
 const modal = document.getElementById('image-preview-modal')
 const previewedImage = document.getElementById('previewed-image')
 const closeButton = document.querySelector('.close-button')
 const prevButton = document.getElementById('prev-button')
 const nextButton = document.getElementById('next-button')

 let currentIndex = 0

 // Open modal
 const openModal = (index) => {
  currentIndex = index
  previewedImage.src = images[currentIndex].src
  modal.style.display = 'flex'
  document.body.style.overflow = 'hidden' // Disable scrolling while modal is open
 }

 // Close modal
 const closeModal = () => {
  modal.style.display = 'none'
  document.body.style.overflow = 'auto' // Re-enable scrolling
 }

 // Navigate images
 const navigate = (direction) => {
  currentIndex += direction
  if (currentIndex < 0) currentIndex = images.length - 1
  if (currentIndex >= images.length) currentIndex = 0
  previewedImage.src = images[currentIndex].src
 }

 // Event Listeners for Images
 images.forEach((image, index) => {
  image.addEventListener('click', () => openModal(index))
 })

 // Close modal on click
 closeButton.addEventListener('click', closeModal)
 modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal()
 })

 // Navigate with buttons
 prevButton.addEventListener('click', () => navigate(-1))
 nextButton.addEventListener('click', () => navigate(1))

 // Keyboard navigation
 document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'flex') {
   switch (e.key) {
    case 'ArrowLeft':
     navigate(-1)
     break
    case 'ArrowRight':
     navigate(1)
     break
    case 'Escape':
     closeModal()
     break
    default:
     break
   }
  }
 })
})
