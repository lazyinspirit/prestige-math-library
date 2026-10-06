---
slug: how-deep-does-the-hole-go
title: "How deep does the hole go?"
status: published
date: "2026-08-19"
description: "The squeeze that defines area has a proved boundary: a set of points with no Jordan content, followed by the locally proved measure-theory extension."
purpose: "Mark the exact boundary of the series' definition of area: a proved set the squeeze cannot trap, and the locally proved measure-theory road past it."
series: circle-area
seriesTitle: "Why is the area of a circle πr²?"
part: 5
---

Part 1 defined area by a squeeze: a region earns an area when inner and outer rectangle totals meet. One question was left open on purpose. Which sets does that cover, and what happens to the ones it misses? This last part maps the edge.

## The squeeze, for any set

The library formalizes Part 1's squeeze for an arbitrary bounded set: [[def-jordan-inner-and-outer-content|inner and outer Jordan content]]. Fill the set from inside with finitely many boxes and take the supremum of their totals; cover it from outside and take the infimum. When the two agree, the set is Jordan measurable and the common value is its content. Content and the Riemann integral are two faces of one notion ([[thm-jordan-content-and-indicator-integrability]]), and content adds over finitely many pieces ([[cor-jordan-content-finite-additivity]]), so Part 1's requirements hold on everything the squeeze traps.

## A set the squeeze cannot trap

Take the rational points of the unit square: every point whose two coordinates are both rational. The set is countable, so it can be covered by squares of arbitrarily small total size, and by that standard it should be negligible. But it is also dense, and so is its complement, so its boundary is the entire unit square, and the boundary criterion makes it non-measurable ([[cex-rational-points-in-unit-square-have-no-jordan-content]]): the inner and outer totals never meet. This is proved in the library, and the set is not exotic. The squeeze has a real boundary.

```anim rationals-no-content
```

## The road past the squeeze

The repair is to allow countably many covering boxes instead of finitely many. That road is [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra|Lebesgue measure]], with a locally proved construction. Assuming Countable Choice, the rational points above become measurable with measure zero ([[prop-countable-subsets-of-rn-are-lebesgue-null]]). The library develops the [[def-borel-sigma-algebra|Borel σ-algebra]] and proves that Lebesgue measure is a complete measure ([[thm-lebesgue-measure-is-a-complete-measure]]).

## A further boundary

Even this extension leaves sets behind. Under the Axiom of Choice, representatives for rational-difference classes form a Vitali set ([[thm-vitali-sets-exist-under-choice-on-r-over-q]]), and the library proves that this set is not Lebesgue measurable ([[thm-a-vitali-set-is-not-lebesgue-measurable]]). The selection assumption and the nonmeasurability argument are stated separately, with their prerequisites.

## What the answer rests on

One of Part 1's requirements was a choice: the unit square has area $1$. Change the unit and every area rescales with it. The theorem's content is the ratio between the disc and the square, and the series showed that ratio is π, a number defined with no circle in it and recovered in the circle's length, its polygons, and its area.

Area is earned by a squeeze, the squeeze has a proved boundary, and Lebesgue measure extends it through another locally proved construction. The Vitali argument gives a further boundary under its stated choice assumption. The question that opened Part 1 is answered, and every step of the answer can be checked. Other holes start with other innocent questions.
