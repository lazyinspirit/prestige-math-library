---
slug: how-deep-does-the-hole-go
title: "How deep does the hole go?"
status: published
date: "2026-08-19"
description: "The squeeze that defines area has a proved boundary: a set of points with no area at all, and past it a road the library records but has not yet built."
purpose: "Mark the exact boundary of the series' definition of area: a proved set the squeeze cannot trap, and the measure-theory road recorded past it."
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

The repair is to allow countably many covering boxes instead of finitely many. That road is Lebesgue measure ([[rem-lebesgue-measure-and-integral]]), under which the rational points above become measurable with measure zero. The library records this theory on its recorded-not-proved page, marked ‡, and has started the foundations it rests on: the [[def-borel-sigma-algebra|Borel σ-algebra]] is published, with proofs.

## The bottom

Even the repaired notion leaves sets behind. With the Axiom of Choice there is a set of real numbers that is not Lebesgue measurable ([[rem-vitali-non-measurable-set]]). And in three dimensions a closed ball can be cut into finitely many pieces and reassembled, by rigid motions alone, into two balls congruent to the original ([[rem-banach-tarski]]). If every piece carried a volume that is nonnegative, survives rigid motions, and adds over pieces, the two sides would force $V = 2V$ with $V > 0$. Some of those pieces can have no volume under any definition meeting Part 1's requirements.

## What the answer rests on

One of Part 1's requirements was a choice: the unit square has area $1$. Change the unit and every area rescales with it. The theorem's content is the ratio between the disc and the square, and the series showed that ratio is π, a number defined with no circle in it and recovered in the circle's length, its polygons, and its area.

That is the bottom of this hole as the library records it today: area is earned by a squeeze, the squeeze has a proved boundary, and the road past the boundary is marked ‡ until its proofs are built. The question that opened Part 1 is answered, and every step of the answer can be checked. Other holes start with other innocent questions.
