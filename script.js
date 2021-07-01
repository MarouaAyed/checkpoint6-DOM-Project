const text = document.querySelector(".title");
//const text = document.getElementsByClassName("title");
//console.log(text[0]);
const changeColor = document.querySelector(".changeColor");
//text.style.color =" red";
//text.style.backgroundColor = "yellow";

//text.classList.add("nameofaclass"); //ajouter classe avec DOM
//text.classList.remove("nameofaclass"); // supprimer le classe

//console.log(plus.innerHTML);

var quantite = document.querySelector(".quantite").value;
var plus = document.querySelector(".plus");
var moins = document.querySelector(".moins");
var price = document.querySelector(".prix").value;

var total = document.querySelector(".total");
let quan = 0;

plus.addEventListener("click", () => {
	quan = quantite++;
	console.log(quan);
	quantite.toString();

	//document.getElementById("quantite").innerHTML = quan;

	var tot = quantite * price;
	console.log(tot);
	total.value = tot;
});

moins.addEventListener("click", () => {
	quantite--;
	var tot = quantite * price;
	console.log(tot);
	total.value = tot;
});
