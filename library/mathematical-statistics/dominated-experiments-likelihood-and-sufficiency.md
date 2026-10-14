---
page: dominated-experiments-likelihood-and-sufficiency
title: "Domination and Likelihood Ratios"
status: draft
items:
  - lem-positive-lebesgue-components-of-a-positive-measure
  - lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative
  - def-dominated-statistical-experiment
  - def-likelihood-ratio-as-rn-derivative
  - def-likelihood-density
  - thm-likelihood-ratio-change-of-measure
  - thm-equivalent-dominators-give-equivalent-likelihood-ratios
examples: []
---

Domination fixes one sigma-finite positive reference measure for every law in
an experiment. Under AC, its Radon–Nikodym classes admit selected
nonnegative representatives, but those versions are only determined almost
everywhere and need not be measurable in the parameter. A likelihood holds
the observed data fixed; it is not a probability distribution on the
parameter labels.

For two probability laws, the likelihood-ratio class is the derivative of
the absolutely continuous part relative to the denominator law. A singular
part must be retained separately. Under absolute continuity, integration
against the likelihood ratio changes measure. Equivalent dominating
measures multiply every parameter density by the same positive data-only
factor, with each fixed parameter pair's equality holding almost everywhere.
