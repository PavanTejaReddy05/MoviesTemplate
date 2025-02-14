let url= fetch("https://jsonplaceholder.typicode.com/photos")
url.then(Response=>Response.json())
   .then(data=>displaymovies(data)) 
   .catch((error)=>console.error(error));

function displaymovies(data){
    let a=document.getElementById("Movies");
    data.slice(0,50).forEach(x=>{
        let movietemplate=document.getElementById("movies-div");
        let movieCard=movietemplate.content.cloneNode(true);
        let h3=movieCard.querySelector("h3");
        let img=movieCard.querySelector("img");
        let atag=movieCard.querySelector("a");

        h3.innerText=x.title;
        img.setAttribute("src","image_2025_02_11T08_03_25_272Z.png");
        atag.setAttribute("href",x.url)
        atag.innerText="View Image"
        
        a.appendChild(movieCard);
    })
}



   // function displaymovies(data){
//     let a=document.getElementById("Movies");
//     data.slice(0,500).forEach(x=>{
//         let div=document.createElement("div");
//         div.style.border="1px solid azure";
//         div.style.borderRadius="5px";
//         div.style.display="flex"; 
//         div.style.flexDirection="column";
//         div.style.alignItems="center"
//         div.style.justifyContent="space-between"
//         div.style.height="300px"
//         div.style.width="250px"
//         div.style.boxShadow="0px 0px 10px 5px rgba(163, 58, 75, 0.5)"
//         div.innerHTML=`
//         <img src="image_2025_02_11T08_03_25_272Z.png" alt="Movieimages" style="height: 190px; width: 200px;">
//         <h3>${x.title}</h3>
//         <a href=${x.url} target="_blank">View Images</a>`
//         a.insertAdjacentElement("beforeend",div);
//     });
// }

function findmovies(){
    let searchInput=document.getElementById("Search");
    let movies=document.getElementById("Movies");
    let divs=Array.from(movies.getElementsByTagName("div"));
    let searchInputVal=searchInput.value.toLowerCase();

    let hasmovies=false;
    
    let existingMessage = document.getElementById("no-movie-message");
    if (existingMessage) {
        existingMessage.remove();
    }
    divs.forEach(div=>{
        let titleElement=div.querySelector("h3");
        let title = titleElement ? titleElement.textContent.toLowerCase() : ""; 
        if(title.includes(searchInputVal)){
            div.style.display = "flex"; // Show the movie div
            hasmovies=true;
        } else {
            div.style.display = "none"; // Hide the movie div
        }
    })
    if(!hasmovies){
        let movies = document.getElementById("Movies");
        let p = document.createElement("h3");
        p.id = "no-movie-message";
        p.textContent = "No Movie Found";
        p.style.color = "red";
        p.style.textAlign = "center";
        p.style.width = "100%"; 
        p.style.display = "flex";
        p.style.justifyContent = "center";
        p.style.alignItems = "center";
        p.style.height = "50px"; // Adjust height for better visibility
        p.style.position = "absolute"; // Absolute position to prevent breaking layout
        p.style.top = "50%"; // Moves it to the middle of the container
        p.style.left = "50%";
        p.style.transform = "translate(-50%, -50%)"; // Centers both horizontally & vertically
        p.style.fontSize = "20px";
        movies.appendChild(p);
    }
}