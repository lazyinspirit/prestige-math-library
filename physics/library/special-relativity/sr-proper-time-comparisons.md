---
page: sr-proper-time-comparisons
title: "Proper Time Comparisons"
status: published
library: physics
items:
  - def-sr-inertial-and-piecewise-inertial-worldline
  - lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors
  - cor-sr-reverse-triangle-and-future-cone-convexity
  - lem-sr-rest-frame-of-a-future-timelike-displacement
  - lem-sr-endpoint-displacement-of-a-future-timelike-worldline
  - thm-sr-endpoint-proper-time-bound-and-flat-maximum
  - pthm-sr-same-endpoint-clock-comparison
  - texp-sr-piecewise-inertial-twin-reunion
  - rem-sr-twin-acceleration-and-synchronization-caveats
examples: []
---

This page compares elapsed proper times of worldlines with the same endpoints
in the flat classical model. The mathematical layer starts from the reversed
Cauchy-Schwarz inequality for same-orientation timelike vectors, with its exact
equality case, and its consequence the reversed triangle inequality and the
convexity of the future timelike cone, including finite sums
([[lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors]],
[[cor-sr-reverse-triangle-and-future-cone-convexity]]); it fixes the vocabulary
of inertial and piecewise inertial worldlines of the affine model
([[def-sr-inertial-and-piecewise-inertial-worldline]]), constructs an inertial
frame whose time axis is a prescribed future timelike direction
([[lem-sr-rest-frame-of-a-future-timelike-displacement]]), and proves that the
displacement of any weak piecewise $C^1$ future timelike worldline is future
timelike ([[lem-sr-endpoint-displacement-of-a-future-timelike-worldline]]).

The central mathematical theorem is the endpoint bound and the flat maximum:
for a weak piecewise $C^1$ future timelike worldline between events $p$ and $q$,
$c\,\Delta\tau\le\sqrt{-\eta(q-p,q-p)}$, with equality exactly for the strictly
increasing reparametrizations of the straight segment from $p$ to $q$, strict
inequality whenever the image leaves that segment, and the straight value
attained by every future-directed traversal of the segment
([[thm-sr-endpoint-proper-time-bound-and-flat-maximum]]). The regularity class
is the weak piecewise one, whose improper piecewise integrals are supplied by
the worldlines-and-clocks page; the ordinary Riemann case (H) is included as a
special case, and no curvature statement is made here.

The physical layer is conditional on the adopted postulates: an ideal clock
carried between the same two events along any future timelike history of the
class reads no more than the straight inertial clock, with equality only for
the straight segment and strict inequality whenever the image is not the
segment ([[pthm-sr-same-endpoint-clock-comparison]]). The piecewise inertial
twin reunion is then computed as a conditional thought experiment: two ideal
clocks prepared at one event, compared at their common reunion event, read
$2T$ and $2T/\gamma$ ([[texp-sr-piecewise-inertial-twin-reunion]]). The final
remark delimits the interpretation: acceleration is not an aging term, the two
histories are not related by an inertial change of description, and the
traveler's momentary-frame bookkeeping is reconciled by the simultaneity gap
$2Tv^2/c^2$, with no empirical content asserted
([[rem-sr-twin-acceleration-and-synchronization-caveats]]).
