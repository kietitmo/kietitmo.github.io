window.addEventListener("load", async function loadUrl() {
    const container = document.getElementById('shipper-information');
    let users_list = []

    function getRandomElementsInArray() {
        const shuffled = [...users_list].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.floor(Math.random() * 10));
    }
   
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        users_list = await response.json();
        users_list = getRandomElementsInArray();
    } catch (e) {
        const message = document.createElement("p")
        message.innerHTML = "Cannot load shipper list"
        message.classList.add("error_message")
        container.appendChild(message)
        return
    } finally {
        document.getElementsByClassName("preloader")[0].style.display = "none"
    }

    if (users_list.length === 0) {
        const message = document.createElement("p")
        message.innerHTML = "There is not free shipper now!"
        message.classList.add("shipper-information__shipper-not-available-message")
        container.appendChild(message)
        return
    }

    users_list.forEach(function (user) {
        const shipper_card = document.createElement("div");
        const name = document.createElement("div");
        const id = document.createElement("div");
        const phone = document.createElement("div");
        const email = document.createElement("div");
        const address = document.createElement("div");

        id.innerHTML = 'ID:\t' + user.id;
        name.innerHTML = user.name;
        phone.innerHTML = 'Phone:\t' + user.phone;
        email.innerHTML = 'Email:\t' + user.email;
        address.innerHTML = 'Address:\t' + user.address.zipcode + ', ' + user.address.street + ', ' + user.address.city;

        shipper_card.classList.add("shipper-information__shipper-card")
        id.classList.add("shipper-information__shipper-card__id")
        name.classList.add("shipper-information_shipper-card_name")
        phone.classList.add("shipper-information_shipper-card_phone")
        email.classList.add("shipper-information_shipper-card_email")
        address.classList.add("shipper-information_shipper-card_address")

        id.classList.add("shipper-information__shipper-card__element")
        name.classList.add("shipper-information__shipper-card__element")
        phone.classList.add("shipper-information__shipper-card__element")
        email.classList.add("shipper-information__shipper-card__element")
        address.classList.add("shipper-information__shipper-card__element")

        shipper_card.appendChild(name)
        shipper_card.appendChild(id)
        shipper_card.appendChild(phone)
        shipper_card.appendChild(email)
        shipper_card.appendChild(address)
        container.appendChild(shipper_card)
    });
})
