//fetch search element
const searchUser = document.querySelector('.searchuser');

//fetch div that will display the data
const cardinfo = document.querySelector('.userinfocard');

//Click Search
searchUser.addEventListener('click', (e) =>{

   //fetch data from the text input field
   let username = document.querySelector('.username').value;
   const xhRequest = new XMLHttpRequest();

   //Use the data to fetch user information from Github API
   xhRequest.open("GET",`https://api.github.com/users/${username}`);
   xhRequest.onreadystatechange = function() {
       if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
           const response = JSON.parse(this.response);

           //Display the user info

           cardinfo.innerHTML = `
           <div>
             <img src='${response.avatar_url}'height ="300"/>
           </div>
           <div class ="cardBody">
             <h1>${response.name}</h1>
             <h2>${response.login}</h2>
             <p>${response.bio}</p>

           <div class="cardRow spaceBetweenitem">
              <div class="cardItem">
                 <h4>Public Repos</h4>
                 <p>${response.public_repos}</p>
              </div>
              <div class="cardItem">
                <h4>Follower</h4>
                <p>${response.followers}</p>
              </div>
           </div>
           <a target="blank" href="${response.html_url}" class="btnBlue">Visit Profile</a>
           </div>
           `

       }
   }
   xhRequest.send();
})