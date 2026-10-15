---
page: smc-clts-error-and-degeneracy-examples
title: "Finite-horizon SMC error, CLTs, and degeneracy — Examples"
status: draft
items: []
examples:
  - ex-smc-multinomial-ancestry-collapse
  - ex-smc-dominant-weight-and-ess
  - cex-smc-clt-class-does-not-ensure-target-moment
  - cex-smc-residual-clt-fails-at-integer-weight-boundary
  - cex-smc-zero-residual-fraction-can-have-random-offspring
  - cex-smc-time-bound-fails-with-varying-proposals
  - ex-smc-bounded-weights-with-mixing
  - ex-smc-fixed-horizon-clt-does-not-give-time-uniform-accuracy
---

## Objective

Use finite models to show ancestry collapse, dominant weights and low weight-based ESS, the target-moment gap in the source test class, instability of residual offspring floors at positive integers, and the failure of proposal-density ratio bounds to control time-uniform SMC variance when proposals vary. Contrast the fixed-horizon variance growth with a bounded-weight, explicitly contracting filter. These examples state the limits of the accompanying CLT and variance claims.
