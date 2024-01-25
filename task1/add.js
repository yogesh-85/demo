const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function (event) {

    event.preventDefault();
    const fruit_to_add = document.getElementById('fruit-to-add');
    const newli = document.createElement('li');

    newli.innerHTML = fruit_to_add.value + '<button class="delete-btn">x</button>';
    fruits.appendChild(newli);
})
fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const del_ete = event.target.parentElement;
        fruits.removeChild(del_ete);
    }
});