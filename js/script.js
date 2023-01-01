//affichage courses
var content2 = document.querySelector('.content2'),
    listCat = document.querySelector('#listCat');

function creationCours(image, titre, prix) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2');
    let img = document.createElement('img');
    //img.setAttribute('src',image)
    img.src = image;

    let p = document.createElement('p');
    p.setAttribute('class', 'card-title');
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);

    let span = document.createElement('span');
    span.setAttribute('class', 'card-text');
    span.appendChild(document.createTextNode(prix + '$'));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    content2.append(div)
}
courses.forEach((el) => {
    creationCours(el.image, el.title, el.price);
})
//affichage categories
function creationCategories(cat) {
    let a=document.createElement("a");
    a.id=cat;
    a.style.cursor="pointer";
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(cat));
    li.setAttribute('class', 'list-group-item');
    a.appendChild(li);
    listCat.append(a);
}
var categories = ['all', ...new Set(courses.map((v) => v.category.toLowerCase()))]
categories.forEach((v) => {
    creationCategories(v);
});

//SEARCH BY VALUE

let slider =document.querySelector(".range");
let val =document.querySelector(".value");
slider.addEventListener("change",()=>{
    val.textContent= slider.value;
    content2.innerHTML="";
    let c=0;
    courses.forEach((e) => {
        if(e.price<slider.value){
            creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
            c++;
        }
    })
    if(c===0)
        content2.innerHTML="<h3><b><u><i>try another price my friend</i></u></b></h3>";


})



//function search by title
let search=document.getElementById("search");

search.addEventListener("keyup",()=>{
        content2.innerHTML="";
    let c=0;
    courses.forEach((e) => {
        if(e.title.toLowerCase().search(search.value.toLowerCase())>=0){
            creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
            c++;
        }
    })
    if(c===0)
        content2.innerHTML="<h3><b><u><i>try another name my friend</i></u></b></h3>";
    }
)


// search by category
let all=document.getElementById("all");
let js=document.getElementById("js");
let html=document.getElementById("html");
let css=document.getElementById("css");
let php=document.getElementById("php");

all.addEventListener("click",()=>{
    content2.innerHTML="";
   courses.forEach((e) => {
        creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
    })
})
js.addEventListener("click",()=>{
    content2.innerHTML="";
    courses.forEach((e) => {
        if(e.category==="JS")
            creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
    })
})
html.addEventListener("click",()=>{
    content2.innerHTML="";
    courses.forEach((e) => {
        if(e.category==="HTML")
            creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
    })
})
css.addEventListener("click",()=>{
    content2.innerHTML="";
    courses.forEach((e) => {
        if(e.category==="CSS")
            creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
    })
})
php.addEventListener("click",()=>{
    content2.innerHTML="";
    courses.forEach((e) => {
        if(e.category==="PHP")
            creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
    })
})


/*let price=document.getElementById("price");
let pricevalue=document.getElementById("pricevalue");
pricevalue.innerHTML=price.value;*/

/*slider.addEventListener("change",()=>{
    val.textContent= this.value;
    content2.innerHTML="";
    let c=0;
    courses.forEach((e) => {
        if(e.price<price.value){
            creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
            c++;
        }
    })
    if(c===0)
        content2.innerHTML="<h3>sorry! no courses with this price</h3>";


})
/*let slider =document.querySelector(".range");
let val =document.querySelector(".value");
val.textContent = slider.value ;

slider.oninput = function(){
    val.textContent= this.value;
}*/