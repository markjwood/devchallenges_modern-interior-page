<!-- Please update value in the {}  -->

<h1 align="center">Modern Interior responsive design project</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://confident-lamarr-1e4b54.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/markjwood/devchallenges_modern-interior-page">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/Jymh2b2FyebRTUljkNcb">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://user-images.githubusercontent.com/71726788/139289094-8606ead5-04f6-4b1f-b303-5dec99c9bf8c.png)

The most challenging aspect of this project was getting the card to overlap the image. I experimented with using `position: absolute` on the card, but then had issues with the footer and card overlapping.

Ultimately I decided `grid` was a better solution, though I had some challenges with it not resizing properly. Using defined `grid-area`s and auto sizing (instead of `fr` units) was the solution that worked.

### Built With

No frameworks, just plain HTML, CSS, and JavaScript

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/Jymh2b2FyebRTUljkNcb) was to build a responsive web page that matched the provided design.

A feature I added was to use JavaScript to change the highlighted nav elements to show the "active" page. Since links don't actually go anywhere, it only changes when the links are clicked (not when the 'back' button is clicked in the browser). There might be a solution to this, but I didn't feel it was worth attempting as I can't think of a reason it would ever be used on a production site.

## Acknowledgements

I relied heavily on the [excellent grid guide/cheat-sheet](https://css-tricks.com/snippets/css/complete-guide-grid/) from [css-tricks.com](https://css-tricks.com/).

## Contact

- Website [MarkJWood.com](https://markjwood.com)
- GitHub [@markjwood](https://github.com/markjwood)
- Twitter [@MarkJasonWood](https://twitter.com/MarkJasonWood)
