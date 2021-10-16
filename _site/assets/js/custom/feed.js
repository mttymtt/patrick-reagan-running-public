fetch('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ftortoiseandtheharepodcast.libsyn.com%2Frss')
   .then((res) => res.json())
   .then((data) => {
      const allposts = data.items
      const posts = allposts.slice(0, 3);

      // Functions to create a short text out of whole blog's content
      function toText(node) {
         let tag = document.createElement('div')
         tag.innerHTML = node
         node = tag.innerText
         return node
      }
      function shortenText(text,startingPoint,maxLength) {
         return text.length > maxLength?
         text.slice(startingPoint, maxLength):
         text
      }
      function parseISOString(date) {
        var b = date.split(/\D+/);
        return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
      }

      // Put things in right spots of markup
      let output = '';
      posts.forEach((item) => {
        var date = item.pubDate;
        var formattedDate = moment(date).format("MMMM Do, YYYY");
        var title = item.title.split(": ");
         output += `
         <li class="episode-card">
            <a href="${item.link}">
              <div class="episode-details">
                <h2 class="title">${title[1]}</h2>
                <p class="description">${item.description}</p>
              </div>
              <div class="episode-meta">
                <div class="number">${title[0]}</div>
                <time>${formattedDate}</time>
              </div>
            </a>
         </li>`

      })
      document.querySelector('.TH-episodes').innerHTML = output;
    })

// ${shortenText(item.pubDate,0 ,10)}
