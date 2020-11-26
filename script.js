const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seats:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const ticketPrice = +movieSelect.value;
console.log(typeof ticketPrice);
container.addEventListener('click',(e) =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        
    }
})  