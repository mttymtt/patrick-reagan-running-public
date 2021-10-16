fetch('https://ultrasignup.com/service/events.svc/history/Patrick/Reagan/')
   .then((res) => res.json())
   .then((data) => {
      const allposts = data.items

      // Functions to create a short text out of whole blog's content
      function toText(node) {
         let tag = document.createElement('div')
         tag.innerHTML = node
         node = tag.innerText
         return node
      }
      function shortenText(text,startingPoint ,maxLength) {
         return text.length > maxLength?
         text.slice(startingPoint, maxLength):
         text
      }

      // Put things in right spots of markup
      let output = '';
      posts.forEach((item) => {
         output += `
         <li class="blog__post">
            <a href="${item.link}">
               <div class="blog__content">
                  <div class="blog_preview">
                     <h2 class="blog__title">${item.title}</h2>
                     <p class="blog__intro">${item.description}</p>
                  </div>
                  <div class="blog__info">
                     <span class="blog__date">${shortenText(item.pubDate,0 ,10)}</span>
                  </div>
               </div>
            <a/>
         </li>`

      })
      document.querySelector('.results').innerHTML = output
})
