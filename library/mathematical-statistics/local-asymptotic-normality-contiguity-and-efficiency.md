---
page: local-asymptotic-normality-contiguity-and-efficiency
title: "LAN, Contiguity and Efficiency"
status: published
items:
  - def-contiguous-sequences-of-measures
  - lem-boundary-of-convex-set-is-lebesgue-null
  - def-lan-experiment
  - thm-brunn-minkowski-for-compact-convex-sets
  - thm-mean-one-likelihood-ratio-limit-implies-contiguity
  - def-regular-estimator-under-local-alternatives
  - lem-compact-uniform-lan-posterior-approximation
  - lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss
  - thm-le-cam-third-lemma
  - lem-bowl-shaped-loss-has-centered-lipschitz-minorants
  - lem-qmd-score-centered-and-finite-information
  - thm-convolution-bound-for-regular-estimators
  - lem-qmd-singular-and-zero-overlap-masses
  - lem-finite-prior-lan-bayes-envelope-convergence
  - lem-finite-priors-approximate-gaussian-shift-bayes-risk
  - lem-qmd-normalized-product-likelihood-expansion
  - thm-local-asymptotic-minimax-bound
  - thm-qmd-implies-lan-for-iid
examples: []
---

This page defines contiguity and pointwise LAN using mean-one likelihood proxies, then proves the matching-mean criterion for contiguity and Le Cam's third lemma. For dominated iid models, QMD yields LAN after the local alternative is restricted to the base-law support and normalized; the proof separately controls singular and zero-overlap mass, so it never asserts a full Radon–Nikodym derivative when one may not exist. The page also defines regularity under each fixed local alternative and proves the convolution bound under the stated LAN and regularity hypotheses.

The local asymptotic minimax theorem uses only pointwise LAN. Its proof passes through finite priors, approximates diffuse Gaussian Bayes values by finite-support priors, and approximates a bounded Borel bowl-shaped loss from below by bounded Lipschitz minorants. A separate posterior approximation lemma states an explicit compact-uniform likelihood-field condition; that stronger condition is not used by the minimax proof. Brunn–Minkowski and Gaussian centering are proved locally as supporting results.
