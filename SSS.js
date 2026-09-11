let planes = [ {tipo: "exclusivo", precio: "0€ / mes", badgname: "perfil basico", inclone: "perfil completo", incltwo: "Aparición basica", incltree: "Exclusivo", link: "https://www.apple.com/es-es"},
 {tipo: "premium", precio: "24,99€ / mes", badgname: "perfil premium", inclone: "perfil completo", incltwo: "Aparición prioritaria", incltree: "destacado", link: "https://www.apple.com/es-es"},
 {tipo: "business", precio: "59,99€ / mes", badgname: "perfil elite", inclone: "Hasta targeta exclusiva", incltwo: "Aparición de prioredad", incltree:"atencion  exclusivo"}];
 let plan = planes.map(function(suscription){
	 return `<div class="Holabuenas ${suscription.tipo}"><span class="perfilBadgs">${suscription.badgname}</span><h2>${suscription.precio}</h2><hr><p class="inclotodo">-${suscription.inclone}</p><p class="inclotodo">-${suscription.incltwo}</p><p class="inclotodo">-${suscription.incltree}</p><a href="${suscription.link}">Prueba 7 días gratis</a></div>`;
});
planesCool = document.getElementById("planesCool").innerHTML = plan.join("");

let offers = [{name: "john smith", image: "foto.jpg", oldPrice: "electricidad", newPrice: "terrassa", link: "https://wa.me/34635188642"},
{name: "maria lopiz", image: "fotos.jpg", oldPrice: "psicologa", newPrice: "barcelona", link: "https://Www.netflix.com/inicio"},
{name: "ahmed benhiba", image: "III.jpg", oldPrice: "abogado", newPrice: "badalona", link: "https://www.primevideo.com/offers/nonprimehomepage?_ssoLoop=1"},
{name: "hbomax", image: "hbomax.jpg", oldPrice: "electrista", newPrice: "sabadell", link: "https//www.hbomax.com/es/es?gclsrc=aw.ds&gad_source=1&gad_campaignid=22339523404"},
{name: "apple", image: "apple.jpg", oldPrice: "psicologa", newPrice: "rubí", link: "https://www.apple.com/es-es"},
{name: "disney", image: "dsn.jpg", oldPrice: "abogado", newPrice: "gerona", link: " https://www.disney.com/es-es"}];
let cardoffers = offers.map( function(offer){
	return `<div class="colorOffer"><h2>${offer.name}</h2> <img class="FFF" src ="${offer.image}"> <p class="oldPrice">${offer.oldPrice}</p> <p class="newPrice">${offer.newPrice}</p> <a href ="${offer.link}">contactar</a></div>`;
});
document.getElementById("ofertCards").innerHTML = cardoffers.join("");
let buttonSelect = document.getElementById("buttonSelect");
buttonSelect.addEventListener("click", function(){
let result = document.getElementById("servicioSelect").value;
let resultados = offers.filter(name => name.oldPrice === result);
modofil.classList.add("hidden");
let cardoffers = resultados.map( function(offer){
	return `<div class="colorOffer"><h2>${offer.name}</h2> <img class="FFF" src ="${offer.image}"> <p class="oldPrice">${offer.oldPrice}</p> <p class="newPrice">${offer.newPrice}</p> <a href ="${offer.link}">contactar</a></div>`;
});
document.getElementById("ofertCards").innerHTML = cardoffers.join("");
});
const ofertCardsView = document.getElementById("ofertCards");
const serchLink = document.getElementById("serchLink");
const serchView = document.getElementById("serchView");
const perfilLink = document.getElementById("perfilLink");
const perfilView = document.getElementById("perfilView");
const inicioLink = document.getElementById("inicioLink");
const hola = document.getElementById("hola");
const buenas = document.getElementById("buenas");
const premiumBtn = document.getElementById("premiumBtn");
const planesCools = document.getElementById("planesCool");
const modofil = document.getElementById("modofiltrar");

serchLink.addEventListener("click", function(event){
	event.preventDefault();
let cardoffers = offers.map( function(offer){
	return `<div class="colorOffer"><h2>${offer.name}</h2> <img class="FFF" src ="${offer.image}"> <p class="oldPrice">${offer.oldPrice}</p> <p class="newPrice">${offer.newPrice}</p> <a href ="${offer.link}">contactar</a></div>`;
});
perfilView.classList.add("hidden");
ofertCardsView.classList.remove("hidden");
serchView.classList.remove("hidden");
	hola.classList.add("hidden");
	buenas.classList.add("hidden");
	premiumBtn.classList.add("hidden");
	planesCools.classList.add("hidden");
	modofil.classList.add("hidden");
});
inicioLink.addEventListener("click", function(event){
	event.preventDefault();
let cardoffers = offers.map( function(offer){
	return `<div class="colorOffer"><h2>${offer.name}</h2> <img class="FFF" src ="${offer.image}"> <p class="oldPrice">${offer.oldPrice}</p> <p class="newPrice">${offer.newPrice}</p> <a href ="${offer.link}">contactar</a></div>`;
});
document.getElementById("ofertCards").innerHTML = cardoffers.join("");
	ofertCardsView.classList.remove("hidden");
	perfilView.classList.add("hidden");
	serchView.classList.add("hidden");
    hola.classList.remove("hidden");
    buenas.classList.remove("hidden");
    premiumBtn.classList.add("hidden");
    planesCools.classList.add("hidden");
    modofil.classList.add("hidden");
  
});
	
perfilLink.addEventListener("click", function(event){
	event.preventDefault();
	ofertCardsView.classList.add("hidden");
	serchView.classList.add("hidden");
	perfilView.classList.remove("hidden");
	hola.classList.add("hidden");
	buenas.classList.remove("hidden");
	premiumBtn.classList.remove("hidden");
	planesCools.classList.add("hidden");
	modofil.classList.add("hidden");
});
premiumBtn.addEventListener("click", function(event){
	event.preventDefault();
	ofertCardsView.classList.add("hidden");
	serchView.classList.add("hiddden");
	perfilView.classList.add("hidden");
	hola.classList.add("hidden");
	buenas.classList.remove("hidden");
	planesCools.classList.remove("hidden");
	premiumBtn.classList.add("hidden");
});
hola.addEventListener("click", function() {
	modofil.classList.remove("hidden");
});
