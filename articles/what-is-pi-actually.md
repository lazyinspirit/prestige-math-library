---
slug: what-is-pi-actually
title: "What is π, actually?"
status: draft
date: null
description: "The school definition of π assumes two things nobody proved. The library defines π with no circle in it, then earns the circle back."
purpose: "Define π without presupposing circles, and recover circumference over diameter as a theorem."
series: circle-area
seriesTitle: "Why is the area of a circle πr²?"
part: 2
---

The school definition of π is the ratio of a circle's circumference to its diameter, about $3.14159$. As a definition this assumes two things. It assumes a circle's boundary has a length, which is a real claim about a curved object and needs a proof. And it assumes the ratio comes out the same for every circle, large or small, which needs a proof too. Until both are proved, "the ratio" does not name a number.

## A definition with no circle in it

Sine and cosine are defined by their power series ([[def-sine-and-cosine-by-power-series]]), with no triangles and no angles: two functions built from series that converge at every real number. Cosine starts at $\cos 0 = 1$, and the library proves it has a smallest positive zero, lying strictly between $0$ and $2$ ([[thm-cosine-has-a-smallest-positive-zero]]). π is defined as twice that zero ([[def-pi-via-first-positive-cosine-zero]]).

That is the whole definition. It names one specific real number, it presupposes nothing about circles or lengths, and every ingredient in it is proved.

```anim cosine-first-zero
```

## Earning the circle back

A definition is a choice, and this one must agree with what everyone means by π. The library defines the circumference of a circle as the arc length of the curve tracing it ([[def-circular-arcs-circumference-and-diameter]]) and proves that for every centre and every radius $r$ the circumference is $2\pi r$ ([[thm-circle-circumference-diameter-ratio-is-pi]]). Divide by the diameter $2r$: the ratio is π, the same number for every circle. The school definition comes back as a theorem, with both of its hidden assumptions proved on the way.

## One number, many doors

π is over-determined. The library keeps a ledger proving nine further characterizations give the same constant ([[thm-pi-equivalent-characterizations-ledger]]): the first positive zero of sine ([[cor-pi-is-the-first-positive-sine-zero]]), half the least common period of sine and cosine ([[thm-pi-zero-and-period-characterizations]]), the length of a unit semicircle ([[thm-unit-semicircle-arc-length-is-pi]]), the area of the unit disc ([[thm-disc-area-is-pi-r-squared]]), the limit of Archimedes' inscribed and circumscribed polygon perimeters ([[thm-archimedean-polygon-perimeter-characterization-of-pi]]), and series and product formulas besides. Any of them could serve as the definition; the library takes the cosine zero and proves the rest agree.

## One assumption left

"Circumference" leaned on a phrase this article never examined: the arc length of a curve. A circle is curved, a ruler is straight, and it is not obvious that a curved line has a length at all. Some curves have none ([[cex-the-koch-curve-is-not-rectifiable]]). That is the next part of this rabbit hole: how long is a curve?
