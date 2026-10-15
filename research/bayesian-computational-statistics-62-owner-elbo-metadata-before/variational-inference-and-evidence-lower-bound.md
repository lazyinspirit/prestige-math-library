---
page: variational-inference-and-evidence-lower-bound
title: Variational inference and the evidence lower bound
status: draft
items:
  - def-variational-family-and-elbo
  - thm-elbo-kl-decomposition
  - alg-coordinate-ascent-variational-inference
  - cex-mean-field-variational-inference-underestimates-correlated-gaussian-variance
  - thm-exact-coordinate-ascent-does-not-decrease-elbo
  - rem-high-elbo-alone-does-not-certify-posterior-calibration
examples: []
---

Fixing a measurable nonnegative target density $\gamma$ with finite positive
normalizer $Z$ gives the normalized target $\pi=\gamma/Z$ and the ELBO for
admissible densities $q$. The exact identity is
$\log Z=\operatorname{ELBO}(q)+D(q\mu\|\pi\mu)$ under AC, with the reverse-KL direction
shown explicitly. Mean-field densities factor over a finite product reference
space. A coordinate formula is used only when its conditional log expectation,
normalizer, and resulting density are all well-defined; an attained exact
update does not decrease the ELBO. This page makes no convergence, global-optimum,
posterior-calibration, or generic downstream-error claim. The correlated
Gaussian counterexample shows the variance loss possible under a restricted
mean-field family.

For an admissible product with the stated measurable expected-log version, the coordinate exponential has a finite positive normalizer. Updated-product admissibility remains a separate check; finite evidence and pointwise finite expected logs alone do not replace it.
