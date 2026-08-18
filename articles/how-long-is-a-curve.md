---
slug: how-long-is-a-curve
title: "How long is a curve?"
status: draft
date: null
description: "Length is defined by inscribed straight segments, and the definition can refuse: some curves have no length. The circle has one, and it is 2πr."
purpose: "Define arc length, show some curves have none, and prove the circle earns its circumference."
series: circle-area
seriesTitle: "Why is the area of a circle πr²?"
part: 3
---

A ruler measures straight segments, and a circle contains none: no piece of it, however short, is straight. Part 2 leaned on "circumference" anyway. Before that debt is settled, length itself needs a definition that works on curved lines.

## Measure it with straight pieces

Mark points along the curve in order, join consecutive marks by straight segments, and total their lengths. [[def-path-polygonal-length-and-rectifiability-in-rn|Polygonal length and rectifiability]] makes this precise: a path is a continuous map $\gamma:[a,b]\to\mathbb R^n$, every choice of marks gives an inscribed polygonal length, and the **arc length** is the supremum over all choices. A chord is never longer than the arc it cuts ([[cor-chord-length-is-at-most-arc-length]]), and adding a mark never shortens a total, so refinement only pushes the totals up. When they stay bounded, the path is called **rectifiable**, and its length is a real number.

```anim inscribed-polyline
```

## The definition can refuse

The length is a supremum, and a supremum can be infinite. The [[cex-the-koch-curve-is-not-rectifiable|Koch curve]] is the classic refusal: polygonal paths of length $(4/3)^n$ converge uniformly to a path whose inscribed totals grow without bound, so it has no length. It is built to fail, but ordinary-looking curves fail too: the graph of $x\sin(1/x)$ is the graph of a continuous function and is [[cex-graph-of-x-sin-one-over-x-is-not-rectifiable|not rectifiable]] either.

```anim koch-length
```

So "the circumference of a circle" is a claim. Someone has to prove that the circle's inscribed totals stay bounded, or the phrase names nothing.

## The circle pays up

It does stay bounded, and the supremum is an old friend. The upper unit semicircle $\gamma(t) = (\cos t, \sin t)$, $0 \le t \le \pi$, is rectifiable with arc length exactly $\pi$ ([[thm-unit-semicircle-arc-length-is-pi]]): the same number Part 2 defined as twice the first positive zero of cosine, recovered here as a length. In general the circumference of a circle of radius $r$, defined as the arc length of the path tracing it ([[def-circular-arcs-circumference-and-diameter]]), is $2\pi r$ ([[thm-circle-circumference-diameter-ratio-is-pi]]).

## The question is finally well posed

Part 1 defined area. Part 2 defined π. This part defined length and paid circumference's debts. Every word in "the area of a circle of radius $r$ is $\pi r^2$" now has a meaning, and every meaning is proved. What remains is the theorem itself. Next: the proof.
