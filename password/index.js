function handleFormSubmit(event) {
    event.preventDefault();




    const ProductDetails = {
        title: event.target.title.value,
        password: event.target.password.value,



    };
    axios
        .post(
            "https://crudcrud.com/api/d372fc4eb729471397b7271c314f3843/passwords",
            ProductDetails)

        .then((response) => {

            ShowUserOnScreen(response.data)

        })
        .catch((err) => {
            console.log(err)
        })

    function displayUserOnScreen(user) {
        document.getElementById("title").value = "";
        document.getElementById("password").value = "";




        const parentNode = document.getElementById('listofpassword');

        const childHTML = `<li id = "${user._id}">${user.title}-${user.password}
                           <button class="delete" class="delete" data-id="${user._id}" >Delete</button>
                           </li >

            `

        parentNode.innerHTML = parentNode.innerHTML + childHTML;
    }


    document.getElementById('listofpassword').addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('delete')) {
            const id = event.target.dataset.id;
            DeleteUser(id);
        }
    });






    function DeleteUser(id) {

        axios.delete(`https://crudcrud.com/api/d372fc4eb729471397b7271c314f3843/passwords/${id}`)
            .then((response) => {
                console.log(response)
                removeUserfromScreen(id)
            }).catch((err) => {
                console.log(err)
            })

    }

    function removeUserfromScreen(id) {
        const parentNoden = document.getElementById("listofpassword")
        const chile = document.getElementById(id)
        if (chile) {
            parentNoden.removeChild(chile)

        }
    }








}


document.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/d372fc4eb729471397b7271c314f3843/passwords")


        .then((response) => {
            console.log(response)

            for (var i = 0; i < response.data.length; i++) {
                ShowUserOnScreen(response.data[i])
            }
        }).catch((err) => {
            console.log(err)

        })
})

function ShowUserOnScreen(user) {
    document.getElementById("title").value = "";
    document.getElementById("password").value = "";






    const parentNode = document.getElementById('listofpassword');

    const childHTML = `<li id = "${user._id}">${user.title}-${user.password}
                       <button class="delete" class="delete" data-id="${user._id}" >Delete</button>
                       </li >

        `

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible =
            user.title.includes(value) ||
            user.password.includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
})

fetch("https://crudcrud.com/api/d372fc4eb729471397b7271c314f3843/passwords")
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            header.textContent = user.title
            body.textContent = user.password
            userCardContainer.append(card)
            return { name: user.title, email: user.password, element: card }
        })
    })

const numOfLis = document.getElementById("listofpassword").length;
console.log(numOfLis)



















// Clearing the input fields














