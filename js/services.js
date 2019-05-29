'use strict'
var gProjects = []

function createPorjects() {
  gProjects = [
    createPoject(
      'Minesweep',
      'The classic game we all love and dread',
      'Lorem Ipsum',
      '#',
      ['Matrixes', 'keyboard events']
    ),
    createPoject(
      'Proj2',
      'The classic game we all love and dread',
      'Lorem Ipsum',
      '#',
      ['Matrixes', 'keyboard events']
    ),
    createPoject(
      'Proj3',
      'The classic game we all love and dread',
      'Lorem Ipsum',
      '#',
      ['Matrixes', 'keyboard events']
    )
  ]
}

function createPoject(name, tagLine = '', desc = '', liveUrl, tags = []) {
  var id = name.substring(0, 1).toLowerCase() + name.substring(1)
  return {
    id,
    name: name.substring(0, 1).toUpperCase() + name.substring(1),
    tagLine,
    desc,
    imgUrl: './img/portfolio/' + id +'.png',
    liveUrl,
    publishedAt: new Date().getTime(),
    tags
  }
}

function getProjById(id) {
  let proj = gProjects.find(proj => {
    console.log('id :', proj.id)
    return id === proj.id
  })
  return proj
}


function getProjects(){
  return gProjects
}