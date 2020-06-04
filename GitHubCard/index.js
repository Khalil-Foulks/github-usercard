/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

cards = document.querySelector('.cards')

axios.get(`https://api.github.com/users/khalil-foulks`)
.then(response =>{
  console.log(response)

  const gitCard = gitCardMaker(response.data)
  cards.appendChild(gitCard)
})
.catch(error =>{
  debugger
  console.log('Error MSG:', error)
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['MaryamMosstoufi', 'Elisa-Alvarez', 'stephaniegatt', 'james-coulter', 'Devin44G'];

followersArray.forEach(element => {
  axios.get(`https://api.github.com/users/${element}`)
  .then(response =>{
    const gitFollowersCard = gitCardMaker(response.data)
    cards.appendChild(gitFollowersCard)
  })
  .catch(error =>{
    debugger
    console.log('Error MSG for followers:', error)
  })
});


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitCardMaker(dataObj){
  const {avatar_url, name, login, location, html_url, followers, following, bio} = dataObj

  const card = document.createElement('div') ;
  const image = document.createElement('img') ;
  const cardInfo = document.createElement('div') ;
  const realName = document.createElement('h3') ;
  const username = document.createElement('p') ;
  const locationGit = document.createElement('p') ;
  const profile = document.createElement('p') ;
  const address = document.createElement('a') ;
  const followersGit = document.createElement('p') ;
  const followingGit = document.createElement('p') ;
  const bioGit = document.createElement('p') ;

  card.appendChild(image)
  card.appendChild(cardInfo)
  cardInfo.appendChild(realName)
  cardInfo.appendChild(username)
  cardInfo.appendChild(locationGit)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followersGit)
  cardInfo.appendChild(followingGit)
  cardInfo.appendChild(bioGit)
  profile.appendChild(address)

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  realName.classList.add('name')
  username.classList.add('username')
  
  image.setAttribute("src", avatar_url)
  address.setAttribute("href", html_url)
  realName.textContent= `Name: ${name}`
  username.textContent =`Username: ${login}`
  locationGit.textContent = `Location: ${location}`
  address.textContent = html_url 
  followersGit.textContent = `Followers: ${followers}`
  followingGit.textContent = `Following: ${following}`

  return card;
}

//------------------Testing-------------------
// const test = gitCardMaker('afsdaf','asfsadf','safasf','asfdasf','safasf','sadfasfasdf','asfasfasf','sadfsdfaf','asfasfasfsfas','safsdafasfdsaf','saffsafsadfasdfsafasfasfsafsafasfas')
// console.log(test)

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
