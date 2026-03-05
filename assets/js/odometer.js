const createOdometer = (el, value) => {
 const odometer = new Odometer({
  el: el,
  value: 0,
 })

 let hasRun = false

 const options = {
  threshold: [0, 0.9],
 }

 const callback = (entries, observer) => {
  entries.forEach((entry) => {
   if (entry.isIntersecting) {
    if (!hasRun) {
     odometer.update(value)
     hasRun = true
    }
   }
  })
 }

 const observer = new IntersectionObserver(callback, options)
 observer.observe(el)
}

const elementsWithValues = [
 { selector: '.animate-energy-capacity', value: 176 },
 { selector: '.animate-lives-to-be-impacted', value: 7.8 },
 { selector: '.animate-impact-nsmes', value: '237,000' },
 { selector: '.animate-replaced-fuel', value: '288,000' },
 { selector: '.animate-impact-households-provided', value: 21 },
 {
  selector: '.animate-dares-energy-generation-to-be-deployed1',
  value: 236986,
 },
 {
  selector: '.animate-dares-sales-of-standalone-solar-systems',
  value: 1225,
 },
 { selector: '.animate-dares-energy-generation-to-be-deployed2', value: 465 },
 { selector: '.animate-dares-lives-to-be-impacted', value: 17.5 },
 { selector: '.animate-dares-households-to-be-powered', value: 3244900 },
 {
  selector: '.animate-dares-female-headed-households-to-be-powered',
  value: 525731,
 },
]

elementsWithValues.forEach(({ selector, value }) => {
 const element = document.querySelector(selector)
 if (element) createOdometer(element, value)
})
