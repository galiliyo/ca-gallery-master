'use strict'

$(document).ready(function() {
  createPorjects()
  renderProjThumbs()
})

function renderProjThumbs() {
  var projets = getProjects()
  var htmlStr = 
  projets.map(proj => {
  return `
  <div class="col-md-4 col-sm-6 portfolio-item"
  data-id = "${proj.id}" onclick=" onRenderProjModal(this)">
  <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
    <div class="portfolio-hover">
      <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img class="img-fluid" src="${proj.imgUrl}" alt="" />
  </a>
  <div class="portfolio-caption">
    <h4>${proj.name}</h4>
    <p class="text-muted">${proj.tagLine}</p>
  </div>
</div>`})
  $('.thumbs-gallery').html(htmlStr)
}


function renderProjModal(id) {
  var proj = getProjById(id)
  var tagsStr = proj.tags
    .map(tag => {
      return `<span class="badge badge-pill badge-warning">${tag}</span>`
    })
    .join('')

  var htmlStr = `
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
              <!-- Project Details Go Here -->
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">
                    ${proj.tagLine}
                </p>
                <a href="{proj.liveUrl}"><img class="img-fluid d-block mx-auto"
                src="${proj.imgUrl}" alt=""/></a>
                <p> ${proj.desc} </p>
                <ul class="list-inline">
                  <li>Date: ${new Date(proj.publishedAt).toDateString()}</li>
                  <li>Tags: ${tagsStr}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                <i class="fa fa-times"></i>Close Project</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>`
  console.log(htmlStr)
  $('#portfolioModal').html(htmlStr)
}

function onRenderProjModal(el) {
  let id = $(el).data('id')
  renderProjModal(id)
}




