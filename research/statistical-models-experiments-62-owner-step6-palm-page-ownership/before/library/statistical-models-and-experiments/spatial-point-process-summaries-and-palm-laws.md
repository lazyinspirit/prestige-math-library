---
page: spatial-point-process-summaries-and-palm-laws
title: "Spatial summaries and Palm laws"
status: draft
items:
  - lem-convex-windows-admit-rectangle-approximations-and-are-folner
  - lem-translation-invariant-locally-finite-borel-measure-on-rd
  - thm-choice-free-l1-mean-limit-for-stationary-sequences
  - def-spatial-recentering-action
  - def-stationary-point-process-and-intensity
  - lem-joint-measurability-of-spatial-recentering
  - def-full-palm-distribution
  - def-second-factorial-and-reduced-moment-measures
  - thm-poisson-mecke-identity
  - thm-stationary-point-process-intensity-measure-is-rho-lebesgue
  - thm-refined-campbell-formula-and-palm-law-existence
  - thm-second-factorial-and-reduced-measures-are-locally-finite
  - thm-stationary-point-process-counts-converge-to-spatial-intensity
  - thm-reduced-second-factorial-moment-palm-identity
  - def-pair-correlation-and-ripleys-k-function
  - alg-border-corrected-ripleys-k-estimator
  - thm-homogeneous-poisson-ripleys-k-is-ball-volume
  - thm-pair-correlation-integrates-to-ripleys-k
examples:
  - ex-uniformly-translated-lattice-palm-and-multiplicities
  - ex-window-edge-border-estimator
---

For a stationary locally finite point process on $\mathbb R^d$ with finite positive intensity, this page fixes the recentering convention and constructs the full Palm law from the refined Campbell identity. Under local square integrability it defines occurrence-indexed second factorial and reduced measures, proves their local finiteness and the one-occurrence Palm deletion identity, and defines pair correlation only when the reduced measure has a Lebesgue density. Ripley's $K$ uses closed balls and removes one distinguished occurrence at the origin. Finite positive intensity alone suffices for the $L^1$ spatial count limit over dilates of compact convex windows; under ergodicity the limit is the intensity. The border estimator is stated as a finite-window procedure and carries no unbiasedness or asymptotic claim. Multiplicities are retained throughout.
