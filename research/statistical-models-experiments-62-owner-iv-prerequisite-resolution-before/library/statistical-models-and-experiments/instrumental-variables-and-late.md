---
page: instrumental-variables-and-late
title: "IV and LATE"
status: draft
items:
  - def-instrumental-variable-potential-outcomes
  - def-principal-strata-and-late
  - def-wald-ratio
  - lem-iv-observed-contrasts-equal-potential-outcome-contrasts
  - lem-binary-monotonicity-excludes-defiers
  - lem-iv-first-stage-is-complier-proportion
  - lem-iv-reduced-form-is-complier-effect
  - thm-wald-identifies-a-homogeneous-effect
  - thm-wald-identifies-the-complier-average-effect
examples: []
---

For a binary instrument $Z$, binary treatment receipt $A$, and integrable
outcome $Y$, this page fixes unit-level potential treatments and outcomes,
consistency, exclusion, joint instrument independence, relevance and
monotonicity. Each assumption has its own role; relevance makes the observed
ratio defined, while exclusion, independence and monotonicity are substantive
conditions on the causal model. Their satisfaction is not established by a
proof of the algebraic consequences.

The local lemmas derive the observed treatment and outcome contrasts from
potential outcomes, then show that under monotonicity the first stage is the
complier proportion and the reduced form is the complier-weighted treatment
effect. The resulting [[thm-wald-identifies-the-complier-average-effect]]
identifies the LATE from the observed law. With an additional constant
additive effect, [[thm-wald-identifies-a-homogeneous-effect]] identifies the
common effect without requiring monotonicity.

The LATE is an effect among units whose treatment receipt changes with the
instrument. It need not equal the population ATE. The page makes no claim about
finite-sample stability, estimator uncertainty, or empirical validity of the
IV assumptions.
