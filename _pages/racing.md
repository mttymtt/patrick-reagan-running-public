---
title: Racing
layout: page
nav: right
order: 1
feature-image: "/uploads/Howie-Stern_04.jpg"
feature-credit: Howie Stern
feature-credit-link: http://www.howiestern.com
---

{% assign race-schedule = site.data.race-schedule | sort: 'date' | reverse %}

{% assign race-results = site.data.race-results | sort: 'date' | reverse %}

{% assign career-highlights = site.data.career-highlights %}

<div class="row gutter-l width-l space">
  <div class="col col-1of2 sticky">
    <h3>Upcoming Races</h3>
    <div class="list race-table">
      {% for race in race-schedule %}
        {% if race.url %}
          <a class="item" href="{{ race.url }}">
        {% else %}
          <div class="item">
        {% endif %}
            <div class="details">
              <div class="name">{{ race.name }}</div>
              <time>
                {% assign d = race.date | date: "%-d" %}
                {{ race.date | date: "%B" }} {% case d %}{% when "1" or "21" or "31" %}{{ d }}st{% when "2" or "22" %}{{ d }}nd{% when "3" or "23" %}{{ d }}rd{% else %}{{ d }}th{% endcase %}, {{ race.date | date: "%Y" }}
              </time>
            </div>
            <div class="meta">
              <div class="type">{{ race.distance }}</div>
              <div class="type">{{ race.time }}</div>
            </div>
        {% if race.url %}
          </a>
        {% else %}
          </div>
        {% endif %}
      {% endfor %}
    </div>

    <h3>Career Highlights</h3>
    <div class="list">
      {% for highlight in career-highlights %}
        {% if highlight.url %}
          <a class="item" href="{{ highlight.url }}">
        {% else %}
          <div class="item">
        {% endif %}
            <div class="details">
              <div class="name">{{ highlight.name }}</div>
              {% if highlight.place %}
                <div class="place">{{ highlight.place }}</div>
              {% else %}
                <div class="year">{{ highlight.year }}</div>
              {% endif %}
            </div>
            <div class="meta">
              {% if highlight.description %}
                <div class="description">{{ highlight.description }}</div>
              {% endif %}
              {% if highlight.place %}
                <div class="year">{{ highlight.year }}</div>
              {% endif %}
            </div>
        {% if highlight.url %}
          </a>
        {% else %}
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>

  <div class="col col-1of2 sticky">
    <h3>Recent Results</h3>
    <div class="list race-table">
      {% for race in race-results limit:5 %}
        {% if race.url %}
          <a class="item" href="{{ race.url }}">
        {% else %}
          <div class="item">
        {% endif %}
            <div class="details">
              <div class="name">{{ race.name }}</div>
              <time>
                {% assign d = race.date | date: "%-d" %}
                {{ race.date | date: "%B" }} {% case d %}{% when "1" or "21" or "31" %}{{ d }}st{% when "2" or "22" %}{{ d }}nd{% when "3" or "23" %}{{ d }}rd{% else %}{{ d }}th{% endcase %}, {{ race.date | date: "%Y" }}
              </time>
            </div>
            <div class="meta">
              <div class="type">{{ race.distance }}</div>
              <div class="type">{{ race.time }}</div>
            </div>
        {% if race.url %}
          </a>
        {% else %}
          </div>
        {% endif %}
      {% endfor %}
    </div>
    <div class="button">
      <a href="/race-results">View more results</a>
    </div>
  </div>
</div>
