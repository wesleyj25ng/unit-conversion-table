/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.getElementById("input")
const length = document.getElementById("length-txt")
const volume = document.getElementById("volume-txt")
const mass = document.getElementById("mass-txt")
const btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    let val = input.value;
    let lengthStr = `${val} meters = ${(val * 3.281).toFixed(3)} feet | ${val} feet = ${(val * (1 / 3.281)).toFixed(3)} meters`
    let volumeStr = `${val} liters = ${(val * 0.264).toFixed(3)} gallons | ${val} gallons = ${(val * (1 / 0.264)).toFixed(3)} liters`
    let massStr = `${val} kilos = ${(val * 2.204).toFixed(3)} pounds | ${val} pounds = ${(val * (1 / 2.204)).toFixed(3)} kilos`
    
    length.textContent = lengthStr
    volume.textContent = volumeStr
    mass.textContent = massStr
})

input.addEventListener('input', function () {
    const valueLength = input.value.length;
    const charWidth = 40; // Approximate character width, adjust as needed
    const padding = 20;   // Total padding on both sides
    input.style.width = `${Math.max(charWidth * valueLength + padding, 80)}px`;
});