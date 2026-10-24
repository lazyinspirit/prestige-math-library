---
page: blocking-and-paired-designs
title: "Blocking, pairs, and Latin squares"
status: published
items:
  - def-randomized-complete-block-design
  - lem-rcbd-nested-contrast-model-and-projection
  - def-randomized-latin-square-design
  - thm-paired-randomization-contrast-moments
  - lem-randomly-selected-unit-effect-moments
  - prop-rcbd-treatment-block-interaction-confounded-with-residual
  - thm-rcbd-treatment-contrast-f-law
examples: []
---

This page separates three sources of structure. A randomized complete-block
design randomizes a treatment permutation independently inside each complete
block. With fixed no-interference potential outcomes, a randomized pair's
treated-minus-control contrast is unbiased for the pair average effect, and
its variance depends on the difference between the two possible observed
contrasts, including baseline outcomes. A separate lemma distinguishes this
observed contrast from the latent effect of the randomly selected treated
unit. A separate additive
Gaussian error model gives the exact RCBD treatment-contrast F law under its
stated common-variance and independence assumptions. A Latin square balances
treatments across both rows and columns with a restricted assignment law.
Randomization alone supplies no Gaussian error law. With one observation per
block-treatment cell, an unrestricted treatment-by-block interaction uses the
same residual subspace as projected error.
