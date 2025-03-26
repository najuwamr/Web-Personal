const button = document.getElementById("mode");
const body = document.querySelector("body"); 
const picture = document.getElementById("my-pics")


console.log(button, body);

button.addEventListener("click", function() {
    console.log("Tombol diklik!"); 
    body.classList.toggle('dark-mode');
});

picture.addEventListener("click", function(){
    if (this.src.includes("pictures/my-pic1.png")) {
        this.src = "pictures/my-pic2.png";
    } else {
        this.src = "pictures/my-pic1.png";
    }
})