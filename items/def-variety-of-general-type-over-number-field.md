---
id: def-variety-of-general-type-over-number-field
kind: definition
title: Variety of general type over a number field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-field
  - def-projective-variety-classical
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - def-sheaf-cohomology-derived-global-sections
  - cor-projective-cohomology-finite-dimensional-field
  - def-invertible-sheaf
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Bjorn Poonen, Rational Points on Varieties, Chapter 9 §9.5.3
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
      locator: Chapter 9 §9.5.3, the Bombieri–Lang conjecture for varieties of general type.
    - title: Junyi Xie, arXiv:2607.02165
      url: https://arxiv.org/pdf/2607.02165
      locator: Introduction, Conjecture 1.1 and the separate function-field results.
---

## Definition

Let $K$ be a number field, let $X/K$ be a smooth projective geometrically integral variety of dimension $n\ge1$, and let $\omega_{X/K}=\bigwedge^n\Omega^1_{X/K}$ be its canonical line bundle. For each integer $m\ge1$, put
$$P_m(X)=\dim_K H^0(X,\omega_{X/K}^{\otimes m}).$$
The variety $X$ is **of general type** if
$$\limsup_{m\to\infty}\frac{P_m(X)}{m^n}>0.$$

## Definition references

[[def-number-field]]

[[def-projective-variety-classical]]

[[def-smooth-projective-dualizing-line-bundle-and-trace]]

[[def-sheaf-cohomology-derived-global-sections]]

[[cor-projective-cohomology-finite-dimensional-field]]

[[def-invertible-sheaf]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** AC; a number field $K$; and a smooth projective geometrically integral variety $X/K$ of dimension $n\ge1$.

[A1] AC is the stated assumption of the canonical-line-bundle and sheaf-cohomology interfaces used to define $\omega_{X/K}$ and $H^0(X,-)$. ([[def-axiom-of-choice]], [[def-smooth-projective-dualizing-line-bundle-and-trace]], [[def-sheaf-cohomology-derived-global-sections]])

[F1] For a proper scheme over a field and a coherent sheaf, $H^0$ is finite-dimensional over the field. ([[cor-projective-cohomology-finite-dimensional-field]])
