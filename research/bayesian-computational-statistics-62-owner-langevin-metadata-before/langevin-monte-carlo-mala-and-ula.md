---
page: langevin-monte-carlo-mala-and-ula
title: "Langevin algorithms: ULA bias and MALA exactness"
status: draft
items:
  - def-v-weighted-total-variation-distance
  - lem-ula-potential-coercivity-from-radial-drift
  - lem-langevin-potential-exponential-generator-drift
  - alg-unadjusted-langevin-algorithm
  - lem-weighted-pinsker-inequality-for-probability-laws
  - lem-langevin-gaussian-proposal-kernel
  - thm-ula-gaussian-target-invariant-law-and-stationary-variance
  - lem-ula-fixed-step-gaussian-kernel-exponential-drift
  - alg-metropolis-adjusted-langevin-algorithm
  - thm-metropolis-adjusted-langevin-target-invariant
  - thm-ula-quantitative-invariant-law-weighted-tv-bias
examples: []
---

ULA applies a noisy gradient step without correction, so its invariant law can
differ from the target. This page defines the ULA Gaussian proposal, proves a
Gaussian-target variance calculation, and proves local potential and one-step
drift estimates. MALA uses the same proposal with the Hastings correction and
rejected self-transitions; its target invariance follows from the general
Metropolis–Hastings flow theorem. The quantitative weighted-TV bias theorem is
stated under the source's full smoothness and radial-drift hypotheses, but its
diffusion-to-Euler proof still needs local suppliers for diffusion weighted
geometric ergodicity, the pathwise Girsanov/KL block estimate, and the
Euler-kernel small-set/drift ergodicity step. That theorem is explicitly
escalated; the Gaussian example does not replace it.
