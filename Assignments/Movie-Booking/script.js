const form = document.getElementById("bookingForm");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();

        localStorage.setItem(
            "name",
            document.getElementById("name").value
        );

        localStorage.setItem(
            "email",
            document.getElementById("email").value
        );

        localStorage.setItem(
            "mobile",
            document.getElementById("mobile").value
        );

        window.location.href = "success.html";
    });
}

if(document.getElementById("bookingId")){

    const bookingId =
        "BK" + Math.floor(Math.random() * 100000);

    document.getElementById("bookingId").innerText =
        "Booking ID: " + bookingId;

    document.getElementById("userName").innerText =
        "Name: " + localStorage.getItem("name");

    document.getElementById("userEmail").innerText =
        "Email: " + localStorage.getItem("email");

    document.getElementById("userMobile").innerText =
        "Mobile: " + localStorage.getItem("mobile");
}