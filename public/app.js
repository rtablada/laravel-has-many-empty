(function() {
  const app = document.querySelector('.js-app')
  function createElement(string) {
    const toss = document.createElement('div')
    toss.innerHTML = string

    return toss.firstElementChild
  }

  const postTemplate = `
    <div class="post">
      <h2 class="post__title"></h2>
      <p class="post__body"></p>

      <div class="post__comments"></div>
    </div>
  `

  const commentTemplate = `
    <div class="comment">
      <h4 class="comment__username"></h2>
      <p class="comment__body"></p>
    </div>
  `

  fetch('/api/posts').then(res => res.json())
    .then((posts) => {
      posts.forEach((post) => {
        const postEl = createElement(postTemplate)
        app.appendChild(postEl)

        postEl.querySelector('.post__title').innerText = post.title
        postEl.querySelector('.post__body').innerText = post.body

        post.comments.forEach((comment) => {
          const commentEl = createElement(commentTemplate)
          postEl.appendChild(commentEl)

          commentEl.querySelector('.comment__username').innerText = comment.username
          commentEl.querySelector('.comment__body').innerText = comment.body
        })
      })
    })
}())
