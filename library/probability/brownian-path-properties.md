---
page: brownian-path-properties
title: Brownian Path Properties
status: draft
items:
  - thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval
  - thm-brownian-paths-are-nowhere-differentiable
  - cor-brownian-paths-have-infinite-total-variation-on-every-interval
  - def-quadratic-variation-along-a-partition-sequence
  - thm-brownian-quadratic-variation-along-dyadic-partitions
  - thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes
  - cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation
  - lem-brownian-motion-has-a-jointly-measurable-continuous-version
  - def-brownian-zero-set
  - lem-brownian-zero-set-has-lebesgue-measure-zero
  - thm-brownian-zero-set-has-no-isolated-points
  - cor-brownian-zero-set-is-uncountable
  - lem-two-sided-mills-bounds-for-standard-normal-tail
  - thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity
  - cor-brownian-law-of-the-iterated-logarithm-at-zero
  - cor-critical-holder-boundary-at-zero-from-the-brownian-lil
  - rem-quadratic-variation-depends-on-the-approximating-partitions-without-regularity
  - thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law
  - lem-brownian-step-potential-resolvent-at-zero
  - thm-brownian-positive-occupation-proportion-has-the-arcsine-law
examples: []
---

This page studies the sample paths of the Brownian motion of
[[brownian-motion-construction-and-continuity]] and
[[brownian-motion-markov-properties-and-hitting-times]], as paths rather than
as a Markov process or a martingale.

The roughness of the paths is quantified first: no nondegenerate interval
admits a finite one-half Hölder constant
[[thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval]], the
paths are nowhere differentiable [[thm-brownian-paths-are-nowhere-differentiable]],
and their total variation is infinite on every nondegenerate interval
[[cor-brownian-paths-have-infinite-total-variation-on-every-interval]]. Against
this, the quadratic sums along a named partition sequence behave regularly: the
definition [[def-quadratic-variation-along-a-partition-sequence]] fixes the two
conventions and the partition dependence, the dyadic sums converge to elapsed
time [[thm-brownian-quadratic-variation-along-dyadic-partitions]] and even
uniformly in time [[thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes]],
yielding the one- versus two-variation dichotomy
[[cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation]].
The quantifier boundary of that construction is recorded separately
[[rem-quadratic-variation-depends-on-the-approximating-partitions-without-regularity]].

The all-path continuous jointly measurable version
[[lem-brownian-motion-has-a-jointly-measurable-continuous-version]] makes the
zero set a well-behaved random closed set
[[def-brownian-zero-set]], which is Lebesgue-null
[[lem-brownian-zero-set-has-lebesgue-measure-zero]] yet has no isolated points
[[thm-brownian-zero-set-has-no-isolated-points]] and is therefore uncountable
[[cor-brownian-zero-set-is-uncountable]].

Growth at infinity and at zero is governed by the two-sided Mills bounds
[[lem-two-sided-mills-bounds-for-standard-normal-tail]], the law of the
iterated logarithm at infinity
[[thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity]], its
time-inverted form at zero
[[cor-brownian-law-of-the-iterated-logarithm-at-zero]], and the resulting
critical Hölder boundary at the origin
[[cor-critical-holder-boundary-at-zero-from-the-brownian-lil]].

Finally the page proves the first arcsine law for the last zero before a fixed
time [[thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law]] and the
second arcsine law for the occupation time of the positive half-line
[[thm-brownian-positive-occupation-proportion-has-the-arcsine-law]], the latter
through the step-potential resolvent
[[lem-brownian-step-potential-resolvent-at-zero]].

Choice is declared wherever the Brownian, conditional-expectation, Borel-Cantelli
or integration-by-parts interfaces require it, and the countable-choice use in
the monotone-differentiability step is declared at the $p$-variation computation.
The companion page [[brownian-path-properties-examples]] carries the dyadic
moment computations, the $p$-variation threshold, the LIL consequence for
square-root bounds, and the three counterexamples.
