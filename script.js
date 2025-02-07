let bgimgesIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const bgimges = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
    const backgroundchanger = () => {
        document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${bgimges[bgimgesIndex]})`;
        bgimgesIndex = (bgimgesIndex + 1) % bgimges.length;
    }
    
    document.querySelector("#bgchange").addEventListener("click", backgroundchanger);    
})

