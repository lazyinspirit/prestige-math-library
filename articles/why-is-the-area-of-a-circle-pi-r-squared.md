---
slug: why-is-the-area-of-a-circle-pi-r-squared
title: "Why is the area of a circle πr²?"
status: draft
date: null
description: "The familiar formula only means something once area itself is defined. Three axioms pin it down, and the integral makes them precise."
purpose: "Show that area needs a definition before the formula can be true, and hand the reader the library's definition."
series: circle-area
seriesTitle: "Why is the area of a circle πr²?"
part: 1
---

Everyone meets the formula at about age ten: the area of a circle is $\pi r^2$. Ask why it is true and the question turns out to be harder than it looks, because before anything can be proved, every word in it needs a meaning. What exactly is a circle? What is $\pi$? What is area?

## What is area?

Area feels primitive. It is taught as a list of rules: a rectangle has area base times height, a triangle half of that, and the circle gets its own formula. But if area just *means* whatever the formulas say, then asking why the circle formula is true runs in a circle.

Four requirements pin the concept down without any formulas at all:

1. Area is never negative.
2. The unit square has area $1$.
3. Congruent regions have equal area. Moving a shape without stretching it changes nothing.
4. Area adds up. Cut a region into finitely many non-overlapping pieces and the areas of the pieces sum to the area of the whole.

These four already force the familiar rules. A $3 \times 2$ rectangle is six unit squares, so its area is $6$. Chopping squares into strips forces base times height for every rectangle with rational sides, and requirements 1 and 4 together make area monotone: a region carries no more area than any region containing it. Now take a rectangle with irrational sides $b$ and $h$. Every rational rectangle placed inside it has area less than $bh$, every rational rectangle enclosing it has area greater than $bh$, and both can be chosen with area as close to $bh$ as you like. The rectangle's own area sits between every such pair, so it differs from $bh$ by less than any positive amount. Only $bh$ is left.

```anim rectangle-squeeze
```

The same squeeze works on curved shapes. Fill a region from inside with rectangles and cover it from outside with slightly more; if the inner total and the outer total close in on one common value, then by the same argument as before, that value is the only area the four requirements permit.

## From rectangles to graphs

The integral is this squeeze run systematically. Take the region under the graph of a continuous function $f \ge 0$ on $[a,b]$: chop $[a,b]$ into strips, and on each strip stand two rectangles, the tallest that fits under the graph and the shortest that covers it. On each strip the tallest inner rectangle has height $\min f$ and the shortest covering one $\max f$, so the two rectangle totals are precisely the lower and upper sums of the [[def-darboux-integral|Darboux integral]]. The rectangle squeeze is the definition of integration. For a continuous function the two totals do meet at a single value ([[thm-continuous-implies-integrable|continuous functions are integrable]]), written $\int_a^b f(x)\,dx$, and that value is the one area the four requirements allow the region under the graph to carry.

```anim darboux-sums
```

## The library's definition

The library builds area on this. [[def-riemann-area-between-continuous-graphs|Riemann area between two continuous graphs]] defines, for continuous functions $g \le f$ on $[a,b]$, the area between their graphs as $\int_a^b (f(x) - g(x))\,dx$: above each base point $x$ the region has height $f(x) - g(x)$, and the definition runs the squeeze on that height. The disc qualifies: the closed disc of radius $r$ is exactly the region trapped between $y = -\sqrt{r^2 - x^2}$ and $y = +\sqrt{r^2 - x^2}$.

```anim disc-between-graphs
```

The definition is honest about its scope. It assigns an area to regions between continuous graphs and stays silent about arbitrary sets of points in the plane. Whether *every* set can be given an area is a deep question; this hole reaches it in a later part.

With area defined, the claim in the title finally means something, and the library proves it: [[thm-disc-area-is-pi-r-squared]] states that the disc of radius $r$ has Riemann area $\pi r^2$. You could go and read the proof right now.

## But we skipped a symbol

You would hit a wall in the first line, because the formula contains a symbol this article never defined. What is $\pi$? "About $3.14159$" is a value, and "the ratio of a circle's circumference to its diameter" quietly assumes things we have not earned yet. Pinning $\pi$ down is the next part of this rabbit hole: what is $\pi$, actually?
