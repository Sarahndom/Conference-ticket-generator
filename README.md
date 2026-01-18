# Frontend Mentor - Conference Ticket Generator Solution

This is a solution to the Conference ticket generator challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
    - Any field is missed
    - The email address is not formatted correctly
    - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Solution Screenshot]![alt text](image.png)

### Links

-Solution on Frontend Mentor:[https://www.frontendmentor.io/solutions/conference-ticket-generator-_VPApWtFrQ]

- Solution URL: [https://github.com/Sarahndom/Conference-ticket-generator]
- Live Site URL: [https://ticket-gene.netlify.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (DOM Manipulation & File API)

### What I learned

Working on this project helped me master handling file uploads and real-time data binding without a framework.

**Hiding/Showing specific UI states:** I learned how to use a `show-error` class on a parent container to trigger both the red input borders and the visibility of error messages simultaneously.

```css
.form-group.show-error .error-msg {
  display: block;
}
Handling Image Previews: I learned how to use URL.createObjectURL() to create a temporary link for the uploaded avatar to display it instantly on the ticket.

JavaScript

const imageUrl = URL.createObjectURL(chosenFile);
document.querySelector('.user-avatar').src = imageUrl;
Dynamic Time Generation: I implemented a real-time clock to show the exact moment the ticket was issued.

Continued development
In future projects, I want to focus on:

Advanced Regex: To create even stricter validation for usernames and email formats.

Web Components: To try building the ticket as a reusable custom element.

Animation Libraries: Adding smoother transitions (like GSAP) when swapping between the form and the ticket.

Author
Website - [https://my-portfolio-website-two-pied.vercel.app/]

Frontend Mentor - [@Sarahndom]

Acknowledgments
A big thanks to the Frontend Mentor community and the AI thought partners who helped me debug the "sticky footer" attribution and the real-time date logic!