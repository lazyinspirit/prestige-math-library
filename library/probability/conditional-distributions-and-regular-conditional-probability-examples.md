---
page: "conditional-distributions-and-regular-conditional-probability-examples"
title: "Conditional Distributions and Regular Conditional Probability \u2014 Examples"
status: "draft"
items: []
examples: ["ex-regular-conditional-law-for-a-finite-partition", "ex-conditional-density-of-a-bivariate-normal-law", "ex-conditioning-independent-variables-leaves-the-marginal-law", "ex-bayes-formula-for-a-finite-mixture-with-continuous-observation", "ex-regular-conditional-law-of-one-coordinate-given-another", "ex-a-deterministic-kernel-from-a-measurable-map", "cex-the-density-ratio-is-undefined-on-zero-marginal-fibres", "cex-regular-conditional-laws-are-not-unique-on-null-conditioning-values"]
---

Finite partitions give conditional laws by normalized cell probabilities, with zero-mass cells handled explicitly. Completing the square gives the conditional bivariate normal law, and moment calculations check its parameter interpretation. Independent variables retain their marginal law under conditioning. A two-component normal mixture gives an explicit posterior, while a uniform triangular joint density gives a conditional uniform interval.

A measurable map defines a deterministic kernel, and composing such kernels reproduces composition of the maps. These calculations use specified kernels and hold pointwise.

The counterexamples distinguish two failures of pointwise formulas. A uniform square has an undefined density ratio on zero-marginal fibres even though a constant uniform kernel extends it. A deterministic variable conditioned on a continuous variable has distinct conditional kernels at one null conditioning value. Both witnesses verify the full conditional identities; neither contradicts almost-everywhere uniqueness.
