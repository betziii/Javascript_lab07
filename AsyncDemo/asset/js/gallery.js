

const picDiv = document.getElementById('pic');

document.addEventListener("DOMContentLoaded", () => {
    
    load();
});
function load() {

    //open the request 
    fetch('https://picsum.photos/v2/list?page=2&limit=100')
        .then(function(res) {
            return res.json(); //return the JSON Promise
        })
        .then(function(picture) {
            /*for(var i=0; i<picture.length;i++){
                 
                var  img_el =  '<img src = "'+pic[1]+'"/>';
                var img_div = picture[i].download_url;
                let output = $("#pic").append(img_el);
                picDiv.innerHTML = output;
               
              }*/
            let output = '';
            for(let i= 0;i<picture.length;i++) {
                if(i==0){
        
                output +=
                 `
                  <div class="carousel-item active pp" >
                  <img class="d-block w-100 " src="${picture[i].download_url}">
                  </div>    `;
                continue
            }
            output+= ` <div class="carousel-item pp">
            <img class="d-block w-100" src="${picture[i].download_url}">
            </div>`
        }
           /* let output = '';
            for(let i= 0;i<pic.length;i++) {
                if(i==0){
        
                output +=
                 `
                  <div class="carousel-item active">
                  <img class="d-block w-100" id = "p" src="${pic[i].download_url}">
                  </div>    `;
                continue
            }

            
            output+= ` <div class="carousel-item active ">
            <img class="d-block w-100" id="p" src="${pic[i].download_url}">
            </div>`;}
        }*/
           
            picDiv.innerHTML = output;
            })
            
        .catch(function(err) {
            console.log(err);
        });



}/*
function displayCarousel(data){
    console.log("data inside display function....", data);
    for(var i=0; i<data.length;i++){
      var  img_url =  _spPageContextInfo.webAbsoluteUrl + '' + data[i].ServerRelativeUrl;
      var img_div = '<div class="mySlides fade"><img src="'+img_url+'"> </div>';
      $("#slideshow-container").append(img_div);
    }
}
*/
