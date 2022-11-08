console.log(domo.env) //gives access to user environment variable

//print the users name
const username = domo.env.userName.split('')[0]

const welcome = document.getElementById('welcome')

//Available globals
const domo = window.domo
const datasets = window.datasets


welcome.insertAdjacentText('beforeend', `${username}`)