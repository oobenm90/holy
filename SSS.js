const supabase_url = "https://jqttmpwpuiqrjfhhldyu.supabase.co";
const supabase_anonKey = "sb_publishable_xb2J3l5ypfLbYMr_1pi9fg_Bx2WHzgx";
 const db = supabase.createClient(supabase_url, supabase_anonKey);
let planes = [ {tipo: "exclusivo", precio: "9,99€ / mes", badgname: "perfil estander", inclone: "perfil completo", incltwo: "Aparición basica", incltree: "atencion basica", link: "https://www.apple.com/es-es"},
 {tipo: "business", precio: "59,99€ / mes", badgname: "perfil elite", inclone: "Hasta targeta exclusiva", incltwo: "Aparición de prioredad", incltree:"atencion  exclusivo"},
 {tipo: "premium", precio: "99,99€ / mes", badgname: "perfil premium", inclone: "perfil completo", incltwo: "Aparición prioritaria", incltree: "destacado", link: "https://www.apple.com/es-es"}];
 let plan = planes.map(function(suscription){
	 return `<div class="Holabuenas ${suscription.tipo}"><span class="perfilBadgs">${suscription.badgname}</span><h2>${suscription.precio}</h2><hr><p class="inclotodo">-${suscription.inclone}</p><p class="inclotodo">-${suscription.incltwo}</p><p class="inclotodo">-${suscription.incltree}</p><a href="${suscription.link}">Prueba 7 días gratis</a></div>`;
});
planesCool = document.getElementById("planesCool").innerHTML = plan.join("");

let offers = [{name: "john smith bieber", image: "foto.jpg", servicio: "electricidad", newPrice: "terrassa", tipoServicio: "en local", link: "https://wa.me/34635188642"},
{name: "maria lopiz gomez ", image: "fotos.jpg", servicio: "psicologa", newPrice: "barcelona", tipoServicio: "a domiclio", link: "https://Www.netflix.com/inicio"},
{name: "ahmed benhiba", image: "III.jpg", servicio: "abogado", newPrice: "badalona", link: "https://www.primevideo.com/offers/nonprimehomepage?_ssoLoop=1"},
{name: "mohamed benhiba", image: "hbomax.jpg", servicio: "electrista", newPrice: "sabadell", link: "https//www.hbomax.com/es/es?gclsrc=aw.ds&gad_source=1&gad_campaignid=22339523404"},
{name: "apple", image: "apple.jpg", servicio: "psicologa", newPrice: "rubí", link: "https://www.apple.com/es-es"},
{name: "disney", image: "dsn.jpg", servicio: "abogado", newPrice: "gerona", link: " https://www.disney.com/es-es"}];
let cardoffers = offers.map( function(offer){
	return `<div class="colorOffer"><h2>${offer.name}</h2> <img class="FFF" src ="${offer.image}"> <p class="oldPrice">${offer.servicio}</p> <p class="newPrice">${offer.newPrice}</p><p class="servicio">${offer.tipoServicio}</p> <a href ="${offer.link}">contactar</a></div>`;
});
let filterResult = [{name: "john smith", image: "foto.jpg", servicio: "electricidad", newPrice: "terrassa", link: "https://wa.me/34635188642"},
{name: "maria lopiz", image: "fotos.jpg", servicio: "psicologa", newPrice: "barcelona", link: "https://Www.netflix.com/inicio"},
{name: "ahmed benhiba", image: "III.jpg", servicio: "abogado", newPrice: "badalona", link: "https://www.primevideo.com/offers/nonprimehomepage?_ssoLoop=1"},
{name: "mohamed benhiba", image: "hbomax.jpg", servicio: "electrista", newPrice: "sabadell", link: "https//www.hbomax.com/es/es?gclsrc=aw.ds&gad_source=1&gad_campaignid=22339523404"},
{name: "apple", image: "apple.jpg", servicio: "psicologa", newPrice: "rubí", link: "https://www.apple.com/es-es"},
{name: "disney", image: "dsn.jpg", servicio: "abogado", newPrice: "gerona", link: " https://www.disney.com/es-es"}];
document.getElementById("ofertCards").innerHTML = cardoffers.join("");
let buttonSelect = document.getElementById("buttonSelect");
buttonSelect.addEventListener("click", function(){
let result = document.getElementById("servicioSelect").value;
let resultados = filterResult.filter(name => name.servicio === result);
modofil.classList.add("hidden");
let cardoffers = resultados.map( function(offer){
	return `<div class="colorOffer"><h2>${offer.name}</h2> <img class="FFF" src ="${offer.image}"> <p class="oldPrice">${offer.servicio}</p> <p class="newPrice">${offer.newPrice}</p> <a href ="${offer.link}">contactar</a></div>`;
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
const sesionBtn = document.getElementById("sesionBtn");
const Btnsesion = document.getElementById("Btnsesion");
const optSMS = document.getElementById("otpSMS");
const bien = document.getElementById("bien");

serchLink.addEventListener("click", function(event){
	event.preventDefault();
perfilView.classList.add("hidden");
ofertCardsView.classList.remove("hidden");
serchView.classList.remove("hidden");
	hola.classList.add("hidden");
	buenas.classList.add("hidden");
	premiumBtn.classList.add("hidden");
	planesCools.classList.add("hidden");
	modofil.classList.add("hidden");
	cancelar.classList.add("hidden");
	sesionBtn.classList.add("hidden");
});
let serch = document.getElementById("serch");

    
	serch.addEventListener("input", function(event){
	let filter = serch.value.toLowerCase();
	let result = offers.filter(profi => (profi.servicio.toLowerCase().includes(filter)) ||
	(profi.newPrice.toLowerCase().includes(filter)) ||
	(profi.name.toLowerCase().includes(filter)));
let cardFilter = result.map( function(offer){
	return `<div class="colorOffer"><h2>${offer.name}</h2> <img class="FFF" src ="${offer.image}"> <p class="oldPrice">${offer.servicio}</p> <p class="newPrice">${offer.newPrice}</p> <a href ="${offer.link}">contactar</a></div>`;
});
document.getElementById("ofertCards").innerHTML = cardFilter.join("");
});

inicioLink.addEventListener("click", function(event){
	event.preventDefault();
let cardoffers = offers.map( function(offer){
	return `<div class="colorOffer"><h2>${offer.name}</h2> <img class="FFF" src ="${offer.image}"> <p class="oldPrice">${offer.servicio}</p> <p class="newPrice">${offer.newPrice}</p> <a href ="${offer.link}">contactar</a></div>`;
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
    cancelar.classList.add("hidden");
    sesionBtn.classList.add("hidden");
   
  
});
	
perfilLink.addEventListener("click", function(event){
	event.preventDefault();
	ofertCardsView.classList.add("hidden");
	serchView.classList.add("hidden");
	perfilView.classList.add("hidden");
	hola.classList.add("hidden");
	buenas.classList.add("hidden");
	premiumBtn.classList.add("hidden");
	planesCools.classList.add("hidden");
	modofil.classList.add("hidden");
	sesionBtn.classList.remove("hidden");
	cancelar.classList.add("hidden");
	bien.classList.add("hidden");
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
let buttonCerrar = document.getElementById("buttonCerrar");
buttonCerrar.addEventListener("click", function(){
	modofil.classList.add("hidden");
});
let cancelarBtn = document.getElementById("cancelarBtn");
cancelarBtn.addEventListener("click", function(){
	perfilView.classList.add("hidden");
	serchView.classList.add("hidden");
	ofertCardsView.classList.add("hidden");
	planesCools.classList.add("hidden");
	cancelar.classList.remove("hidden");
	buenas.classList.add("hidden");
	hola.classList.add("hidden");
	cancelarBtn.classList.add("hidden");
	modofil.classList.add("hidden");
});
Btnsesion.addEventListener("click", function(){
	sesionBtn.classList.add("hidden");
	optSMS.classList.remove("hidden");
});
googleLoginBtn = document.getElementById("googleLoginBtn");
googleLoginBtn.addEventListener("click", async () => {
const  {data, error} = await db.auth.signInWithOAuth({
		provider: "google",
		options: {
			redirectTo: "https://oobenm90.github.io/holy"
}
});
});
async function checkUser() {
	const {data: {user} } = await db.auth.getUser();
	const hiddenSession = document.getElementById("sesionBtn");
	const hiddenPerfil = document.getElementById("perfilView");
		if(user){
			let sesionLink = document.getElementById("perfilLink");
			sesionLink.addEventListener("click", function(){
			hiddenPrefil.classList.remove("hidden");
		});
		}else{
			hiddenSession.classList.add("hidden");
		};
	};
checkUser();
db.auth.getSession().then(res => console.log(res));
