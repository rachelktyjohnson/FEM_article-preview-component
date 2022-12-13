const share_button_open = document.querySelector(".share-arrow-open");
const share_button_close = document.querySelector(".share-arrow-close");

share_button_open.addEventListener("click", (event)=>{
    const share = document.querySelector(".share");
    if (window.innerWidth < 600){
        document.querySelector(".article-footer").style.display = "none";
        document.querySelector(".share").style.display = "flex";
        share.classList.remove("desktop");
        share_button_close.style.display = "flex";
    } else {
        share.classList.add("desktop");
        share_button_close.style.display = "none";
        if (share.style.display === "flex"){
            share.style.display = "none";
        } else {
            share.style.display = "flex";
        }

    }
})

share_button_close.addEventListener("click", (event)=>{
    if (window.innerWidth < 600){
        document.querySelector(".article-footer").style.display = "flex";
        document.querySelector(".share").style.display = "none";
    }

})
