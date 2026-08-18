---
slug: where-does-pi-r-squared-come-from
title: "Where does πr² come from?"
status: published
date: "2026-08-19"
description: "The proof itself: two substitutions reduce the disc to an integral, the r² falls out as pure scaling, and π enters through the limits."
purpose: "Walk the actual proof of the disc-area theorem and show exactly where π and r² each enter."
series: circle-area
seriesTitle: "Why is the area of a circle πr²?"
part: 4
---

Part 1 defined area, Part 2 defined π, Part 3 defined length. The claim "the disc of radius $r$ has area $\pi r^2$" now names a specific number on each side, and the library proves the two are equal ([[thm-disc-area-is-pi-r-squared]]) in five numbered steps. This part walks them.

## The area is an integral

By Part 1's definition, the closed disc of radius $r$ is the region between the graphs $y = -\sqrt{r^2 - x^2}$ and $y = +\sqrt{r^2 - x^2}$, so its area is the integral of the height ([[def-riemann-area-between-continuous-graphs]]):

$$\operatorname{area} = 2\int_{-r}^{r}\sqrt{r^2 - x^2}\,dx.$$

## The r² is pure scaling

Substitute $x = ru$ ([[thm-substitution]]). The radius factors out of the square root and the $dx$, leaving $r^2$ times the unit-disc integral. The theorem splits in two: $r^2$ measures nothing but scale, and the entire question is why the unit disc has area $\pi$.

## Where π enters

Substitute $x = \sin t$ on $[-\pi/2, \pi/2]$. There cosine is nonnegative, so $\sqrt{1 - \sin^2 t} = \cos t$ by the Pythagorean identity ([[cor-trigonometric-parity-and-pythagorean-identity]]), and the area becomes $2\int_{-\pi/2}^{\pi/2}\cos^2 t\,dt$. The addition formulas ([[thm-sine-and-cosine-addition-formulas]]) split $\cos^2 t$ into $\tfrac12 + \tfrac12\cos 2t$. The $\cos 2t$ half integrates to zero by the fundamental theorem ([[thm-ftc-second-part]]), since $\tfrac12\sin 2t$ vanishes at both endpoints. The constant half integrates to half the length of the interval ([[lem-integral-elementary-bounds]]), and the leading factor of $2$ turns that into the full length. The unit disc has area π.

That is where π enters: as the length of $[-\pi/2, \pi/2]$. The substitution's limits are $\pm\pi/2$, and $\pi/2$ is exactly the first positive zero of cosine, which Part 2 took as the definition of π.

## The same answer by hand

Archimedes ran the inner-and-outer squeeze on the circle two thousand years before integrals. The library proves the polygon squeeze: regular $n$-gons inscribed in and circumscribed about the unit circle have perimeters $I_n = 2n\sin(\pi/n)$ and $O_n = 2n\tan(\pi/n)$ with $I_n < 2\pi < O_n$, increasing and decreasing respectively, both converging to the circumference $2\pi$ ([[thm-archimedean-polygon-perimeter-characterization-of-pi]]). The number itself can be computed from proved series and products: Gregory-Leibniz with an explicit remainder bound ([[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]), Wallis ([[thm-wallis-product-for-pi]]), Viète ([[thm-viete-product-for-pi]]).

```anim archimedes-polygons
```

## One door left

The four requirements of Part 1 assign an area to every region the squeeze can trap. Which sets is that, and is there a set the squeeze can never trap? That is the last part of this rabbit hole: how deep does it go?
