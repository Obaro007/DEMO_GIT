const sunMoon = document.querySelector('.sun-moon')

document.querySelector('.theme-toggle').addEventListener('click', ()=> {
    document.body.classList.toggle('dark')
    const currentRotation = parseInt(getComputedStyle(sunMoon).getPropertyValue('--rotation'))
    sunMoon.Style.setProperty('--rotation', currentRotation + 180)
});
