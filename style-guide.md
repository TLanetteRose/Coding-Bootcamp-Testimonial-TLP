# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Dark Blue: hsl(240, 38%, 20%)
- Grayish Blue: hsl(240, 18%, 77%)

## Typography

### Body Copy

- Font size: 32px

### Font

- Family: [Inter](https://fonts.google.com/specimen/Inter)
- Weights: 300, 500, 700

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap');





[data-component="slideshow"] .slide {
    display: none;
}

[data-component="slideshow"] .slide.active {
    display: block;
}

h3, 
span {
    white-space: nowrap;
}

h3 {
    color: hsl(240, 38%, 20%);
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 2rem;
}

span {
    color: hsl(240, 18%, 77%);
    font-size: 0.65em;
    margin-left: .5rem;

}

/* Slide Style */

.slideshow__container {
    max-width: 95%;
    height: 75vh;
    background: url(/images/pattern-curve.svg) no-repeat bottom left;
    margin: auto;
    position: relative;
    padding: 2rem;
    background-color: #ffffff;
    box-shadow: 5px 5px 30px hsl(240, 18%, 77%);
    
}

.testimonial {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    background: url(/images/pattern-bg.svg) no-repeat right;
    background-size: contain;
    transition: opacity .5s ease-in-out;
    -moz-transition: opacity .5s ease-in-out;
}

.text__container {
    display: flex;
    flex-direction: column; 
    width: 58%;
    padding: 3.5rem;
    padding-right: 0;
    background: url(/images/pattern-quotes.svg) no-repeat;
    background-position-x: 280px;
    color: hsl(240, 38%, 20%);
}

.slide__text {
    font-size: 32px;
    position: relative;
    z-index: 1;
    font-weight: 300;
    width: 95%;
    right: -130px;
}

.slide__credit {
    right: -130px;
    position: relative;
}


.slide__image {
    width: 35%;
    height: 35%;
    z-index: 0;
    border-radius: 5px;
    position: relative;
    right: -30px;
    top: 10px;
    box-shadow: 5px 5px 30px hsl(240, 18%, 77%);
}

.slide__buttons {
    width: 100px;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 50px;
    height: 50px;
    margin-top: -55px;
    margin-left: 66%;
    position: relative;
    box-shadow: 5px 5px 30px hsl(240, 18%, 77%);
    cursor: pointer;
}

.slide__buttons svg {
    width: 15px;
    height: 30px;
}