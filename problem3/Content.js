//array of images
let dogGifs = [
    "https://media4.giphy.com/media/l4FGI8GoTL7N4DsyI/giphy.gif",
    "https://media3.giphy.com/media/3ndAvMC5LFPNMCzq7m/giphy-downsized-large.gif",
    "https://media2.giphy.com/media/xUOxf8izqVvHEBhRO8/giphy-downsized-large.gif",
	"https://media3.giphy.com/media/yvgaJzI8Q01Ow/200w.gif?cid=82a1493bh7tl2asidtf6zf217xl3ms7rfz6nq3fr36z6ufw6&rid=200w.gif&ct=g"
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
 

var audio = document.createElement("AUDIO")
document.body.appendChild(audio);

audio.src = "https://upload.wikimedia.org/wikipedia/commons/5/58/Barking_of_a_dog_2.ogg";

window.onclick = function(event)  {
    audio.play();
}

const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * dogGifs.length)
    imgs[i].src = dogGifs[randomImg]
}

for(let count = 0; count < 5; count++) {
	const headers = document.getElementsByTagName("h" + count);

	for (let i = 0; i < headers.length; i++){
		headers[i].innerText = "Bark";
	}
}

document.body.style.backgroundImage = "url('https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-03/black-lab-favorite-dog-main-220315-e8e0ee.jpg')";
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "woof woof woof woof.";
}








