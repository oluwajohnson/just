



document.addEventListener("DOMContentLoaded", async () => {
    const header = document.getElementById("header");
    if (!header) return;

    const res = await fetch("/header.html");
    header.innerHTML = await res.text();

     // initialize MetisMenu after injection
    const menu = header.querySelector("#mobile-menu-active");
    if (menu) {
        $(menu).metisMenu(); // this attaches all click/hover events
    }


});