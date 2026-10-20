---
id: def-energy-based-density-and-partition-function
kind: definition
title: Energy-based density and partition function
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-measure-space, def-measurable-function-between-measurable-spaces, def-nonnegative-lebesgue-integral, def-measure-with-density, def-probability-measure]
justified_by: [lem-energy-based-density-is-a-probability-measure]
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Aapo Hyvärinen, Estimation of Non-Normalized Statistical Models by Score Matching, Sections 1–2"
      url: "https://jmlr.csail.mit.edu/papers/volume6/hyvarinen05a/hyvarinen05a.pdf"
    - title: "Kevin P. Murphy, Probabilistic Machine Learning: Advanced Topics, Chapter 24"
      url: "https://github.com/probml/pml2-book/releases/download/2025-dec-10/book2.pdf"
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space, let $\Theta$ be a parameter set,
and for each $\theta\in\Theta$ let $E_\theta:X\to\mathbb R$ be a measurable
energy function. Its **partition function relative to $\mu$** is
$$Z_\theta:=\int_X e^{-E_\theta(x)}\,d\mu(x).$$
The admissible parameter set is
$$\Theta_\mu:=\{\theta\in\Theta:0<Z_\theta<\infty\}.$$
For $\theta\in\Theta_\mu$, the **energy-based probability measure** is the
measure with density $e^{-E_\theta}/Z_\theta$ relative to $\mu$:
$$P_\theta(A):=\frac{1}{Z_\theta}\int_A e^{-E_\theta(x)}\,d\mu(x),\qquad A\in\mathcal A.$$
The restriction $0<Z_\theta<\infty$ is part of the definition; parameters
outside $\Theta_\mu$ do not define a normalized model by this formula.

## Definition references

[[def-measure-space]] defines the triple $(X,\mathcal A,\mu)$ used here.

[[def-measurable-function-between-measurable-spaces]] defines measurability of $E_\theta$.

[[def-nonnegative-lebesgue-integral]] defines the integral used for $Z_\theta$.

[[def-measure-with-density]] defines the measure with density $e^{-E_\theta}$ relative to $\mu$.

[[def-probability-measure]] defines a probability measure as a measure of total mass one.

[[lem-energy-based-density-is-a-probability-measure]] establishes the normalization's well-definedness.
