//that is AJAX code for get API (it's always stable)

//object help us to make connect with json
let myhttp =new XMLHttpRequest();
let data=``;

//thats code mean when chages happen on ready state do function(check that request done succssefully) 
myhttp.onreadystatechange=function () {
    if(myhttp.readyState==4 && myhttp.status==200){
        
        data = JSON.parse(myhttp.responseText).articles;//add .articles in last because we have more than array in json link
    }
}

//open connect with link & send request (like make your order and conform when you call resturnt)
myhttp.open("GET","https://newsapi.org/v2/top-headlines?country=us&apiKey=8f96ebf17d07408ba9cffee0a981b463");

//recive respond from server (recive order from delivery man )
myhttp.send();

console.log(myhttp);

function showdata(){

    let parent = document.getElementById("bucket");
    let result = ` `;
    for(let i=0;i<data.length;i++){
        result += `
        <div class="child" id="child">
        <h2>${data[i].author}</h2>
        <p class="title">${data[i].title}</p>
        <p class="desrp">${data[i].description}</p>
        <a href="${data[i].url}">view more</a>
        </div>
        `; 
    }
        
        parent.innerHTML = result;
        parent.style.display='inline';
}
function hidedata(){
    let child = document.getElementById("bucket");
    child.style.display='none';
}