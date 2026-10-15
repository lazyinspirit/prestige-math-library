---
page: em-algorithm-and-latent-variable-likelihood-ascent
title: "Latent-variable EM and likelihood ascent"
status: draft
items:
  - alg-expectation-maximization
  - thm-em-observed-log-likelihood-is-nondecreasing
  - thm-generalized-em-is-nondecreasing-under-q-ascent
  - rem-em-ascent-does-not-imply-global-optimality-or-convergence
examples: []
---

For a specified jointly measurable complete-data density, EM alternates a conditional latent-law calculation with maximization of the expected complete-data log density. The ascent theorem is stated on fixed observed-data fibers with positive finite marginals, integrable log densities, current-to-candidate support inclusion, and finite directional KL. It proves the exact likelihood/Q/KL identity and monotonicity for attained exact M-steps or Q-increasing generalized steps. Support-losing proposals fall outside the finite identity. Ascent alone supplies no convergence, stationarity, unique-mode, or global-optimality result.
