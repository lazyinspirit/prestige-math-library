---
id: rem-sir-finite-particle-error-bound-scope
kind: remark
title: Finite-particle SIR absolute and relative error scope
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - thm-fixed-level-sir-estimator-unbiased
  - thm-fixed-level-sir-absolute-mse-bound
  - thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights
  - def-axiom-of-choice
axiom_use: "The remark cites canonical SIR and conditional-variance results under their stated AC assumptions; it adds no theorem."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Frédéric Cérou, Pierre Del Moral, and Arnaud Guyader, A nonasymptotic theorem for unnormalized Feynman–Kac particle models, Theorem 1.5 and §5"
      url: "https://www.numdam.org/item/10.1214/10-AIHP358.pdf"
---

## Remarks

Under positive prefixes and full multinomial resampling, [[thm-fixed-level-sir-absolute-mse-bound]] proves the absolute bound $\mathbb E[(\widehat p-P(A_L))^2]\le(L+1)/(4N)$ for event potentials $0\le G_\ell\le1$. This does not control relative error uniformly in rarity, because relative error divides by $P(A_L)$ (equivalently, relative variance divides by $P(A_L)^2$). The published [[thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights]] concerns fixed-horizon CLT variances and does not establish a finite-particle bound. Cérou–Del Moral–Guyader's Theorem 1.5 is a distinct finite-particle result with additional potential-ratio and iterated-kernel domination hypotheses.
