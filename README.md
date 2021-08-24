# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![image](https://user-images.githubusercontent.com/81781093/130620909-2c6ddd8b-6331-40d1-9e60-d9a27c0da47f.png)
![image](https://user-images.githubusercontent.com/81781093/130621201-568f1f77-baa5-4f94-b0bf-94ea415075f4.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

1. Analyse the brief
2. Draft the classes, IDs, and logic before I began coding
3. Started segmenting the HTML code 
4. Apply css properties
5. Start javascript interactions
6. Drew logic tree to understand what functions would be required 

### Built with

- HTML5
- CSS
- Flexbox grid
- Javascript
- VS Studio Code


### What I learned

Lots of learning and development in this first project of mine. Most notable included:
- How to remove class properties as a way to reset styles upon event listeners.

        if (button.classList.contains("customTip")) {
            button.classList.add("customtipActive")
            updateTipAmt();
        } else {
            button.classList.add("active")
            button.classList.remove("customtipActive")
        }

- Another fun learning was toggling CSS classes, hiding elements until called on, and manipulate css styles using javascript during events:  

      numInput.addEventListener("change", function() {
          let req = false;
          if (numInput.value <= 0) {
              numInput.style.border = "1px solid red";
              zeroSpan.hidden = false;
          } else {
              numInput.style.border = "none"
              req = true;
              zeroSpan.hidden = true;
          }

      })

- Lastly, this one was a lightbult moment for me where it finally clicked that I needed to check whether a condition was true, in order to execute the final calculations.
    if (billVal && numVal) {
        const finalTip = ((billVal*(tipVal/100)) / numVal);
        const finalTotal = ((billVal/numVal) + finalTip);
        tipAmount.innerText = `$${Math.round(finalTip*100) / 100}`;
        tipTotal.innerText = `$${Math.round(finalTotal*100) / 100}`;
    }
    
## Author

- Twitter - https://twitter.com/michbot7
- Frontend Mentor - https://www.frontendmentor.io/profile/michy-p
