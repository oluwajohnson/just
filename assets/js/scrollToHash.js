;(() => {
 document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash
  if (hash) {
   const collapseElement = document.querySelector(hash)
   const collapseInstance = new bootstrap.Collapse(collapseElement, {
    toggle: true,
   })
  }
 })
})()
