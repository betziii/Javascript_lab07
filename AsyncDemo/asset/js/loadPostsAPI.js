// UI Vars 
const postDiv3 = document.getElementById('thePosts');
const load = document.querySelector('#loadd');
const filter = document.querySelector('#filter');
//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    loadDataNew();
});
filter.addEventListener('keyup', filterTasks);
function filterTasks() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(res) {
        return res.json(); //return the JSON Promise
    })
    .then(function(posts) {
        //iterate over each post [100 posts]
        let searchArray = Array();
        posts.forEach(function(post) {
            searchArray.push({title:post.title.toUpperCase(), body: post.body});
        });
        let output = '';
        for (let i = 0; i < searchArray.length; i++) {
            const userInput = filter.value.toUpperCase();
            
            if (searchArray[i].title.toUpperCase().indexOf(userInput) > -1) {
                
        
            output += `
    
            <div class="item">
            <div class="image">
                <img src=" https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
            </div>
            <div class="content">
                <a class="header" href="#" id="bTitle">
                ${searchArray[i].title.toUpperCase()}
                </a>
                <div class="description">
                    <p id="bDesc">
                    ${searchArray[i].body}
                    </p>
                </div>
                <div class="extra">
                    <a class="ui floated basic violet button" href="#">Read Mores</a>
                </div>
            </div>
        </div>`;
            }
            
        }

        postDiv3.innerHTML = output;
     
    })
    .catch(function(err) {
        console.log(err);
    });

}

//load post from fake api function 
function load_fromPlaceHolder() {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(res){
      return res.json();
  })
  .then (function(posts){
      let output = '';
      posts.forEach(function(post){
          output += `<div class="item">
          <div class="image"> <img src="${post.image}"> </div>
          <div class="content">
              <a class="header" href="#" id="bTitle"> ${post.postTitle} </a>
              <div class="meta">
                  <span id="bDate">${post.date} </span>
                  <span>By: <a href="#" id="bAuthor"> ${post.name}</a></span>
              </div>
              <div class="description">  <p id="bDesc">  ${post.postText} </p  </div>
              <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
          </div>
      </div>`;


      });
      postDiv3.innerHTML = output;
  }) 
  .catch(function (err) {
      console.log(err);
  });


}
//async await
async function load_fromPlaceHolder_new() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    return data;


}

function loadDataNew() {
    
    load_fromPlaceHolder_new().then(function(posts){
        let output = '';
      posts.forEach(function(post){
          output += `<div class="item">
          <div class="image"> <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"> </div>
          <div class="content">
              <a class="header" href="#" id="bTitle"> ${post.postTitle} </a>
              <div class="meta">
                  <span id="bDate">${post.date} </span>
                  <span>By: <a href="#" id="bAuthor"> ${post.name}</a></span>
              </div>
              <div class="description">  <p id="bDesc">  ${post.postText} </p  </div>
              <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
          </div>
      </div>`;


      });
      load.classList.remove('active');
      postDiv3.innerHTML = output;
  }).catch(function (err) {
      console.log(err);
      
  });
  /*
  load_fromPlaceHolder_new().then(function(posts) {
    //iterate over each post [100 posts]
    let output = '';
    posts.forEach(function(post) {
        output += `
<div class="item">
<div class="image">
    <img src=" https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
</div>
<div class="content">
    <a class="header" href="#" id="bTitle">
    ${post.title.toUpperCase()}
    </a>
    <div class="description">
        <p id="bDesc">
        ${post.body}
        </p>
    </div>
    <div class="extra">
        <a class="ui floated basic violet button" href="#">Read Mores</a>
    </div>
</div>
</div>
`;
    });
    postDiv3.innerHTML = output;
})
.catch(function(err) {
    console.log(err);
});*/

}
    //}

