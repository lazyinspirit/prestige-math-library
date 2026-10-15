---
page: sequential-likelihood-ratio-tests
title: Sequential likelihood-ratio tests
status: published
items:
  - alg-sequential-likelihood-ratio-test
  - lem-iid-sequential-likelihood-ratio-factorization
  - thm-sequential-likelihood-ratio-test-error-bounds
  - thm-sequential-likelihood-ratio-test-terminates-under-drift
examples: []
---

## Objective

For two specified laws $P_0$ and $P_1$ whose restrictions to each finite-time sigma-algebra are equivalent, this page defines a two-boundary sequential likelihood-ratio rule. It proves the terminal type-I and type-II error bounds without assuming the rule stops almost surely. Separately, for IID observations with mutually equivalent one-observation laws, finite absolute log-likelihood means, and strictly negative and positive drift under $P_0$ and $P_1$, it proves almost-sure termination. The procedure need not terminate outside those drift hypotheses. No expected sample-size bound, Wald optimality result, or exact Wald approximate-boundary formula is asserted.
