function connect() {

    var searchanime = document.getElementById("animebox").value ;

   

    var url= `https://kitsu.io/api/edge/anime?filter[text]=${searchanime}`;

    fetch (url)
    .then (res => res.json() )
    .then( animedata => {console.log(animedata); show(animedata);})  }
    
function show (animedata) {
    console.log(animedata)

        var oldContent = document.getElementById("container2");
    
       oldContent.textContent = " "; 
       
        for (var i=0; i< animedata.data.length; i++)
        
        {
       
           var newDiv = document.createElement("div");
    
           newDiv.innerHTML = `<h3> Anime Name: <b>${animedata.data[i].attributes.canonicalTitle}</b> </h3><br>
                <img src= "${animedata.data[i].attributes.coverImage.large}"> <br> <br>`;
    
           newDiv.classList.add("innerStyle");
    
           oldContent.appendChild(newDiv); 
           
        }
    }