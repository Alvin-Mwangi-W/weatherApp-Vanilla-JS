const form = document.querySelector(".top-banner form");
const apiKey = "96a1c5e7625acdf56a1c786c63b9e1d9";


form.addEventListener("submit", e => {
    e.preventDefault()
    const inputVal = input.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    

})


