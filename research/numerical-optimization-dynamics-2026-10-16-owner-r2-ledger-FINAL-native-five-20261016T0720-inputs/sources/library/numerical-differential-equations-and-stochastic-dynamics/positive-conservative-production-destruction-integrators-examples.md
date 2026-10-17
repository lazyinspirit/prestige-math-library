---
page: positive-conservative-production-destruction-integrators-examples
title: Positive Conservative Production Destruction Integrators — Examples
status: draft
items: []
examples:
  - ex-two-compartment-stiff-reversible-transfer
  - ex-three-species-weighted-stoichiometric-conservation
  - ex-zero-denominator-corner-and-factorized-extension
  - cex-small-residual-does-not-certify-positivity
  - cex-forward-euler-negative-concentration-despite-stability
---

## Summary

The examples compute one step for a fast reversible two-compartment transfer and a three-species reaction after converting molecule counts into weighted mass variables. They show how a source-factor representation handles an initially empty compartment without a zero denominator. Two counterexamples mark separate limits: a scalar-stable, first-order forward Euler step can produce a negative concentration, and an arbitrarily small linear residual does not certify that a computed vector is nonnegative.
