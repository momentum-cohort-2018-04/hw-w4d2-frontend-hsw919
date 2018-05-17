import request from 'superagent'

function run () {
  request.get('https://api.github.com/users/hsw919')
    .then(function (data) {
      document.querySelector('.header').innerHTML = `<h1 class="header__name">${data.body.name}</h1>`

      document.querySelector('.basics__contain').innerHTML = `<div class="basics__name"><span class="basics__green">Name</span> ${data.body.name}</div>
      <div class="basics__url"><span class="basics__green">GitHub URL</span><a href="${data.body.html_url}" class="basics__link"> ${data.body.login}</a></div>
      <div class="basics__location"><span class="basics__green">Location</span> ${data.body.location}</div>`

      document.querySelector('.story__contain').innerHTML = `<p class="story__text">${data.body.bio}</p>`

      document.querySelector('.img').innerHTML = `<img class="img__me" src="${data.body.avatar_url}">`
    })
}

window.addEventListener('DOMContentLoaded', run)
