---
title: Training Plans
layout: page
permalink: "/coaching/plans-archived"
feature-image: "/uploads/107846252_1478107939044005_3502678647649020939_o.jpg"
plans:
- title: 100mi
  subtitle: 6-Month Training Plan
  feature-image: "/uploads/67098415_1178652272322908_4426996145457201152_o.jpg"
  description: Patrick focuses on coaching athletes looking to run ultramarathons. As one of Patrick’s clients, athletes can expect detailed weekly training prescriptions, one on one support to help determine race scheduling, training load and nutrition guidance, and receive discounts to some of Patrick’s sponsors.
  price: $79
  url: /coaching/private
- title: 100km
  subtitle: 6-Month Training Plan
  feature-image: "/uploads/84561534_2780225315367670_1043716235914641408_o.jpg"
  description: Patrick focuses on coaching athletes looking to run ultramarathons. As one of Patrick’s clients, athletes can expect detailed weekly training prescriptions, one on one support to help determine race scheduling, training load and nutrition guidance, and receive discounts to some of Patrick’s sponsors.
  price: $79
  url: /coaching/private
- title: 50mi & 50km
  subtitle: 3-Month Training Plan
  feature-image: "/uploads/IAU 100K Finish Photocredit-Adrienne Berkland.jpg"
  description: Patrick focuses on coaching athletes looking to run ultramarathons. As one of Patrick’s clients, athletes can expect detailed weekly training prescriptions, one on one support to help determine race scheduling, training load and nutrition guidance, and receive discounts to some of Patrick’s sponsors.
  price: $79
  url: /coaching/private
- title: Strength & Recovery
  feature-image: "/uploads/Oy.jpg"
  description: Patrick focuses on coaching athletes looking to run ultramarathons. As one of Patrick’s clients, athletes can expect detailed weekly training prescriptions, one on one support to help determine race scheduling, training load and nutrition guidance, and receive discounts to some of Patrick’s sponsors.
  price: $79
  url: /coaching/private
  notice: Free!
---

{% assign counter = 0 %}
{% for card in page.plans %}
  {% assign counter = counter | plus: 1%}
{% endfor %}

<div class="cards-container training-plans" style="--card-count: {% if counter > 4 %}4{% else %}{{ counter }}{% endif %}">
  {% for card in page.plans %}
    <a class="section" href="{{ card.url }}">
      {% if card.feature-image %}
        <div class="book">
          <div class="card-image">
            <div class="crop crop-4x5">
              <div>
                <img src="{{ card.feature-image }}">
              </div>
            </div>
          </div>

          <div class="card-title">
            <h2>{{ card.title }}</h2>
          </div>

          {% if card.notice %}
            <div class="card-notice">
              {{ card.notice }}
            </div>
          {% endif %}
        </div>
      {% endif %}
      <div class="card-info">
        <div class="card-title">
          <h2>{{ card.title }}</h2>
        </div>
        {% if card.subtitle %}
          <div class="card-subtitle">
            <h3>{{ card.subtitle }}</h3>
          </div>
        {% endif %}
        <div class="card-price">
          {{ card.price }}
        </div>
      </div>
    </a>
  {% endfor %}
</div>
