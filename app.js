// let redVal = Math.random() * 255;
// let greenVal = Math.random() * 255;
// let blueVal = Math.random() * 255;

let btnPress = document.getElementById("press");
let colorBox = document.getElementById("circle");
let txtClr = document.getElementById("txtClr");

btnPress.addEventListener("click", function () {
    let redVal = Math.floor(Math.random() * 255);
    let greenVal = Math.floor(Math.random() * 255);
    let blueVal = Math.floor(Math.random() * 255);

    colorBox.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
    colorBox.style.border = `2px solid rgb(${redVal}, ${greenVal}, ${blueVal})`;
    colorBox.style.boxShadow = `0px 0px 10px 10px rgb(${redVal}, ${greenVal}, ${blueVal})`;
    txtClr.value = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
    btnPress.style.transform = `scale(0)`;
    setTimeout(()=>{
        btnPress.style.transform = `scale(1)`;
    }, 80)
})