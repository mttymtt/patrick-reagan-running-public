---
title: Media
layout: page
nav: right
order: 2
feature-image: "/uploads/Alley.jpg"
feature-credit: Luis Escobar
feature-credit-link: https://www.instagram.com/luis_escobar/
custom-js:
- source: feed
---

<div class="podcast-container">
  <div class="podcast-image">
    <div class="crop crop-5x4">
      <div>
        <img src="/uploads/T&H_01.png">
      </div>
    </div>
  </div>

  <div class="podcast-info">
    <div class="podcast-details">
      <div class="podcast-title">
        <h2>Tortoise & The Hare</h2>
      </div>
      <div class="podcast-description">
        <p>Patrick teams up weekly with fellow Savannah, GA ultrarunner Mike Nadeau, to talk all things running on the Tortoise & The Hare Podcast.</p>
      </div>
      <div class="button">
        <a href="https://tortoiseandtheharepodcast.libsyn.com">Listen to the podcast</a>
      </div>
    </div>
  </div>
</div>

{% assign features_list = site.data.features | sort: 'date' | reverse %}

<div class="width-l row space gutter-l">
  <div class="col col-1of2 sticky">
    <h3>Recent Episodes</h3>
    <ul class="TH-episodes">
      Loading Podcasts…
    </ul>
    <div class="button">
      <a href="https://tortoiseandtheharepodcast.libsyn.com">View All Episodes</a>
    </div>
  </div>

  <div class="col col-1of2 sticky">
    <h3>Featured On</h3>
    <div class="list features">
      {% for feature in features_list limit:5 %}
        {% if feature.url %}
          <a class="item" href="{{ feature.url }}">
        {% else %}
          <div class="item">
        {% endif %}
          <div class="details">
            <div class="name">{{ feature.name }}</div>
          </div>
          <div class="meta">
            <div class="type">{{ feature.type }}</div>
            <time>
              {% assign d = feature.date | date: "%-d" %}
              {{ feature.date | date: "%B" }} {% case d %}{% when "1" or "21" or "31" %}{{ d }}st{% when "2" or "22" %}{{ d }}nd{% when "3" or "23" %}{{ d }}rd{% else %}{{ d }}th{% endcase %}, {{ feature.date | date: "%Y" }}
            </time>
          </div>

        {% if feature.url %}
          </a>
        {% else %}
          </div>
        {% endif %}
      {% endfor %}
    </div>
    <div class="button">
      <a href="">View More</a>
    </div>
  </div>
</div>
