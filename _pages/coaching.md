---
title: Coaching
layout: page
nav: left
order: 1
feature-image: "/uploads/Andy-Cochrane_IMG_2498.JPG"
feature-credit: Andy Cochrane
feature-credit-link: https://www.andrewfitts.com
cards:
- name: Premium
  subtitle: Personalized Monthly Coaching
  description: Flexible, unique training plan personalized for your busy schedule
  price: "$350"
  perks:
  - All of the bells & whistles of the Standard Program
  - Two monthly 45 minute calls to discuss training
  - Race schedule planning calls each season (Twice a year)
  - Daily check-ins on Coaching Platform
  - Text communication as needed
  url: "/coaching/private"
- name: Standard
  subtitle: Personalized Monthly Coaching
  description: 'The whole package: Unlimited emails, text, phone and Skype calls'
  price: "$200"
  perks:
  - Daily training updated in training document
  - Monthly 30 minute call to discuss training
  - Access to core strength and weight vest strength training guides
  - Race schedule planning
  - Weekly check-ins on coaching platform
  url: "/coaching/consultation"
- name: Consultation
  subtitle: 1-on-1 Training Call
  description: Build a 12-week training plan tailored to you
  price: "$70"
  perks:
  - One Hour call to discuss training concepts, weekly training, race schedule, race
    day nutrition program, proper thermoregulation/topical cooling for hot weather
    races, or any other ultra running specific topics you may have.
  url: "/coaching/plans"
---

<section>
  <div class="inner row gutter-l width-l space">
    <div class="image col col-1of2">
      <img src="/uploads/Howie-Stern_03.jpg">
      <div class="photo-credit">
        Photo: <a href="https://www.howiestern.com" target="_blank">Howie Stern</a>
      </div>
    </div>
    <div class="info col col-1of2">
      <h1>Patrick Reagan</h1>

      <p>Patrick has ten years of coaching experience and twenty years of running experience.  Patrick began coaching endurance athletes in 2011 at the collegiate level.  He served as a head cross country and track coach from 2012-2019 in the NAIA.  In 2016, Patrick started coaching ultrarunners to guide them towards accomplishing their goals.</p>

      <p>The athletes Patrick coaches have finished on the podium at the USATF 100 Mile Road National Championships, Yeti 100, Ultravasan, and the Javelina Jundred. He has also coached athletes to finishes at Western States 100, UTMB, Comrades, and Hardrock 100.</p>

      <p>At the collegiate level in the NAIA, Patrick coached athletes to twelve All-American awards, including three national runner-up finishes.  He also coached ten cross country conference championships teams and was named the USTFCCCA Cross Country Southeastern Coach of the Year.</p>
    </div>
  </div>
</section>

{% assign counter = 0 %}
{% for card in page.cards %}
  {% assign counter = counter | plus: 1%}
{% endfor %}

<section class="cards-container coaching" style="--card-count: {% if counter > 4 %}4{% else %}{{ counter }}{% endif %}">
  {% for card in page.cards %}
    <a class="tier" href="{{ card.url }}">
      <div class="card-info">
        <div class="card-title">
          <h2>{{ card.name }}</h2>
          <h3>{{ card.subtitle }}</h3>
        </div>
        <div class="card-price">
          <span>{{ card.price }}</span>
        </div>
        <div class="card-description">
          {% if card.perks %}
            <ul class="perks">
              {% for perk in card.perks %}
                <li>{{ perk }}</li>
              {% endfor %}
            </ul>
          {% endif %}
        </div>
        <div class="card-more">
          <span class="more-text">Sign Up</span>
          <span class="arrow">
            <svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5H20" stroke="black"/><path d="M16 1L20 5L16 9" stroke="black"/></svg>
          </span>
          <div class="coach">with Patrick</div>
        </div>
      </div>
    </a>
  {% endfor %}
</section>

<section>
  <div class="inner row gutter-l width-l space">
    <div class="image col col-1of2">
      <img src="/uploads/Nicole-Monette_Portrait.jpg">
      <div class="photo-credit">
        Photo: <a href="" target="_blank">Photo credit needed</a>
      </div>
    </div>
    <div class="info col col-1of2">
      <h1>Nicole Monette</h1>

      <p>Nicole is a native of Southeastern Michigan and currently resides in Brandon, Michigan with her husband, Patrick, and their three children: Peter, Jacob, and Madelyn. She attended Indiana University of Pennsylvania, earning a B.S. in exercise science, while also competing in crosscountry and track and field. She then went on to Slippery Rock University, earning a Doctorate of Physical Therapy. She currently runs ultramarathons for Hoka One One.</p>

      <p>In 2009, Nicole placed 4th at the US Marathon Championships, running 2:35:09, qualifying for the Olympic track and field trials. In 2017 she started competing in both trail and road ultramarathon distances, with notable performances including 3rd at the 2017 Ice Age 50k, 1st place at the 2018 Tunnel Hill 50 mile, and 1st place with a course record at the 2020 Yeti 100 mile. In 2021 Nicole placed second at the Hoka One One Carbon X 100k event, running 7:43:09 and becoming the 9th fastest US women of all-time in that event.</p>

      <p>Nicole has worked as an outpatient physical therapist in sports medicine and orthopedics for over ten years, and when not running, working, or coaching enjoys spending time with her young family exploring the outdoors.</p>
    </div>
  </div>
</section>

<section class="cards-container coaching" style="--card-count: {% if counter > 4 %}4{% else %}{{ counter }}{% endif %}">
  {% for card in page.cards %}
    <a class="tier" href="{{ card.url }}">
      <div class="card-info">
        <div class="card-title">
          <h2>{{ card.name }}</h2>
          <h3>{{ card.subtitle }}</h3>
        </div>
        <div class="card-price">
          <span>{{ card.price }}</span>
        </div>
        <div class="card-description">
          {% if card.perks %}
            <ul class="perks">
              {% for perk in card.perks %}
                <li>{{ perk }}</li>
              {% endfor %}
            </ul>
          {% endif %}
        </div>
        <div class="card-more">
          <span class="more-text">Sign Up</span>
          <span class="arrow">
            <svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5H20" stroke="black"/><path d="M16 1L20 5L16 9" stroke="black"/></svg>
          </span>
          <div class="coach">with Nicole</div>
        </div>
      </div>
    </a>
  {% endfor %}
</section>

{:.width-l}
# Don’t know where to start?

{:.text-center}
No problem. Send us an email with any questions your have and then we can determine what’s the best fit for you.

<div class="button">
  <a href="/coaching">Contact Us</a>
</div>
