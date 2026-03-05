
document.addEventListener("DOMContentLoaded", async () => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const res = await fetch("/footer.html");
    footer.innerHTML = await res.text();

    const year = footer.querySelector("#copyrightYear");
    if (year) year.textContent = new Date().getFullYear();

    


    // Tawk chat
     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5f93df6f2915ea4ba09654e9/1g4v5rvkn';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();



});



window.addEventListener("DOMContentLoaded", () => {

  const loader = document.getElementById("elevate-load");

  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("hide");
    document.documentElement.classList.remove("preloading");
  }, 500);

});