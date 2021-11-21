---
title: Standard Monthly Coaching with Patrick
cover:
  image: "/uploads/wormsloe_sunira-moses.jpg"
  credit: Sunira Moses
  credit-link: https://unsplash.com/@sunira
  mobile-position:
    horizontal: 30%
permalink: /coaching/patrick/standard-monthly-coaching
cards:
- card:
  description: |-
    ## Let’s get to know each other

    Before you send along your first payment, we should get to know each other first. If you haven’t already, go to the [contact](/contact) page and tell me about yourself, your goals, and your running history.
  cta:
  cta-link:
- card:
  description: |-
    ## Initial Set Up & Manual Monthly Payments

    Ready to get started? You can pay for your first month below. Once we are up and running, you will have to continue making manual payments here, or you can sign up for the subscription below for automated monthly payments.
  cta: One-time $200
  cta-link:
- card:
  description: |-
    ## Automated Subscription

    Tired of manual monthly payments? Well you’re in luck! Use the checkout link below to sign up for automated monthly payments. You can stop these payments at any point with a month’s notice.
  cta: Recurring $200/month
  cta-link:
layout: default
---

{% for card in page.cards %}
  <div class="width-s bg-white padding--m corner--all mb-l">
    {{ card.description | markdownify }}
    {% if card.cta %}
      <div class="button">
        <a href="{{ card.cta-link }}">{{ card.cta }}</a>
      </div>
    {% endif %}
  </div>
{% endfor %}
