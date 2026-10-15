---
page: quasi-monte-carlo-discrepancy-and-rules
title: "Deterministic quasi-Monte Carlo and discrepancy"
status: draft
items:
  - def-star-discrepancy-and-digital-net
  - def-hardykrause-variation
  - lem-bounded-coordinatewise-monotone-is-riemann-integrable
  - def-hardykrause-variation-lower-anchor
  - alg-digital-net-and-lattice-rule
  - lem-hk-smooth-mixed-derivative-formula
  - lem-anchored-box-summation-by-parts-hk-variation
  - thm-uniform-distribution-integrates-riemann-functions
  - lem-finite-hardykrause-variation-implies-riemann-integrability
  - thm-koksma-hlawka-integration-bound
examples: []
---

## Summary

For a finite nonempty multiset of points in the half-open unit cube, star discrepancy measures the largest error on an anchored box. Cube quadrature replaces the integral by the average of the integrand at those points. The Hardy–Krause variation used here is anchored at the upper corner; finite variation implies bounded Riemann integrability, proved locally with a lower-anchor variation decomposition. With the same upper-anchor convention, the finite-grid summation-by-parts argument gives Koksma–Hlawka for every finite nonempty point set and finite-variation integrand. Uniformly distributed sequences integrate Riemann-integrable functions. Discrepancy and variation can be hard to establish or give a pessimistic bound; an unbounded or infinite-variation transform has no generic guarantee from Koksma–Hlawka. Digital nets and rank-one lattice rules specify point constructions, but this page asserts no construction-specific rate. In the error-ledger convention, deterministic quadrature has no replicate-based error estimate unless the rule is randomized ([[def-statistical-and-computational-error-ledger]]).
