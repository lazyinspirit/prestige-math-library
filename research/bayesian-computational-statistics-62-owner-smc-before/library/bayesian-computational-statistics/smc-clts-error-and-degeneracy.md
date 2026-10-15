---
page: smc-clts-error-and-degeneracy
title: "Finite-horizon SMC error, CLTs, and degeneracy"
status: draft
items:
  - def-dobrushin-coefficient-for-probability-kernels
  - lem-dobrushin-contraction-from-density-ratios
  - def-smc-clt-function-classes-and-variance-recursions
  - lem-smc-backward-operator-oscillation-bound
  - lem-smc-finite-horizon-empirical-law
  - lem-smc-multinomial-variance-unrolls
  - lem-smc-mutation-and-weighted-correction-clt
  - lem-smc-multinomial-resampling-clt
  - lem-smc-residual-resampling-clt-away-from-integer-weights
  - thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights
  - thm-smc-multinomial-fixed-horizon-clt
  - thm-smc-residual-fixed-horizon-clt-away-from-integer-weights
examples: []
---

## Objective

Give the finite-horizon empirical-law and particle-count CLTs for sequential importance resampling, with multinomial selection and the residual-selection branch where finite-sample floor counts have a stable limit. State the source weighted-moment class and the stronger recursive target-moment conditions needed for the post-resampling CLTs. The page records the exact variance recursions and a separate time-uniform asymptotic-variance bound under uniform incremental-weight and backward-operator contraction assumptions. It makes no finite-particle accuracy claim uniform in time.
