---
page: certified-geometric-predicates
title: Certified geometric predicates
status: published
items:
  - def-certified-geometric-predicate-determinants
  - alg-interval-geometric-predicate-filter
  - alg-symbolic-geometric-determinant-tie-break
  - lem-dyadic-determinant-integer-clearance-preserves-sign
  - lem-leibniz-determinant-forward-error-bound
  - lem-two-and-three-by-three-nonsingular-dyadic-system-solvable
  - alg-exact-dyadic-determinant-sign
  - alg-floating-filter-for-geometric-determinants
  - lem-nondegenerate-dyadic-simplex-determines-unique-sphere
  - thm-interval-geometric-predicate-filter-sound
  - lem-lifted-determinant-sign-matches-sphere-side
  - thm-floating-filter-sign-is-exact
  - lem-exact-dyadic-determinant-sign-correct-and-terminates
  - alg-certified-dyadic-geometric-predicate
  - thm-symbolic-geometric-determinant-tie-break-consistent
  - thm-certified-dyadic-geometric-predicate-sound-and-terminates
requires:
  - outward-rounded-interval-and-ball-arithmetic
---

## Objective

This page defines exact determinant predicates for orientation and lifted
circle/sphere tests on finite dyadic coordinates. A floating filter returns a
sign only with a proved forward error enclosure; for exact dyadic point inputs,
inconclusive and unsafe filter cases use exact integer arithmetic. Interval-valued
coordinates retain their uncertainty and return `indeterminate` whenever a
uniform sign is not certified.

The exact predicates preserve zero. A separate formal tie-break is available
only to an algorithm that declares the same point-index ordering and common
perturbation. It does not replace exact zero in the ordinary predicate.

