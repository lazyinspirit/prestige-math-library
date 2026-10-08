---
page: short-loop-polygons-and-quantitative-energy-decrease-examples
title: "Short Loop Polygons and Quantitative Energy Decrease — Examples"
status: draft
items: []
examples: [ex-cg-midpoint-iteration-on-a-spherical-triangle, ex-cg-zero-length-boundary-of-the-energy-criterion, ex-cg-equally-spaced-points-on-a-short-circle-are-stationary, ex-cg-null-homotopy-versus-short-loop-shrinkability]
---

This companion page is a dependency leaf: its examples use only the theory of [[short-loop-polygons-and-quantitative-energy-decrease]] and that page's established prerequisite closure, and no other theory page may depend on a supplier homed here.

The examples test each construction of the theory page against explicit computations. [[ex-cg-midpoint-iteration-on-a-spherical-triangle]] follows the midpoint iteration on a small equilateral spherical triangle, where a side of length $s$ contracts to $\arccos((1+3\cos s)/(2+2\cos s))$ and the iterates converge to the centre with a strict energy drop at every step. [[ex-cg-zero-length-boundary-of-the-energy-criterion]] examines the zero-length boundary: constant tuples, collapsed edges and the degeneracy of the decrement function at both ends of $(0,2\pi)$. [[ex-cg-equally-spaced-points-on-a-short-circle-are-stationary]] shows that, for the stated mesh bound and $n\ge5$, an equally spaced cyclic $n$-tuple on a metric circle of length $0<\ell<2\pi$ rotates by $\ell/(2n)$ at each midpoint step while its length and energy remain stationary outside the basin, realising the equality case on a closed local geodesic. [[ex-cg-null-homotopy-versus-short-loop-shrinkability]] contrasts ordinary null-homotopy with shrinkability through short loops on $S^2$ and on a short circle, where the equator is null-homotopic but not short while the full short circle is a nonshrinkable loop.
