const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
    return new Promise((resolve, reject) => {



        const img = document.createElement("img");
        img.src = imgPath;
        console.log(img);
        imgContainer.appendChild(img);
        img.addEventListener("load", () => {
            console.log("img is loaded");
            resolve(img)
        });
        img.addEventListener("error", () => {

            reject("file is not found with reject")
        });



    });
}

const waitFor = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let currentImg;
createImage("./images/img-1.jpg")
    .then((resolvedValue) => {
        currentImg = resolvedValue;
        return waitFor(2000)

    })
    .then((resolvedValue) => {
        currentImg.style.display = "none";

        return createImage("./images/img-2.jpg")

    })
    .then((resolvedValue) => {
        currentImg = resolvedValue;
        return waitFor(2000);
    })
    .then((resolvedValue) => {
        currentImg.style.display = "none";
       
    })

    .catch((rejectedValue) => {
        console.log(rejectedValue);

    });






//call createImage with then and catch



// create a wait function
// // const waitFor = function (second) {


// }