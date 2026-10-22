---
id: thm-adjoint-logarithmic-gauss-slope-and-ideal-point
kind: theorem
title: "Adjoint logarithmic Gauss slope on an affine character component"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - lem-adjoint-twisted-slope-is-rational-on-a-character-component
  - def-character-variety-logarithmic-slope-invariant
  - def-knot-a-polynomial
  - def-adjoint-twisted-homology-and-culler-shalen-data
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the A-polynomial of knots, Theorems 1.3 and 1.5 and §§4–5"
      url: "https://arxiv.org/html/2103.14151"
    - title: "Marc Culler and Peter B. Shalen, Varieties of group representations and splittings of 3-manifolds, §3"
      url: "https://marc-culler.info/static/home/papers/CharacterVarieties.pdf"
---

## Statement

Assume full AC. Let $X$ be an irreducible one-dimensional character component whose peripheral eigenvalue image is a curve component $A_X(M,L)=0$ of the ordinary A-polynomial. At a smooth point where $M,L\ne0$, $\partial_M A_X\ne0$, and $\partial_L A_X\ne0$, the rational adjoint-twisted slope is
$$s_K=-\frac{M}{L}\frac{\partial_M A_X}{\partial_L A_X}.$$
If $x$ is an ideal point of the smooth projective completion of this curve and the associated Culler-Shalen construction yields an essential surface of boundary slope $r$ in the fixed meridian-longitude convention, the limiting slope at $x$ is $-r$.

## Statement references

[Bénard, Florens, and Rodau, Theorems 1.3 and 1.5 and §§4–5](https://arxiv.org/html/2103.14151)

[Culler and Shalen, §3](https://marc-culler.info/static/home/papers/CharacterVarieties.pdf)

## Facts & Assumptions

**Given:** Full AC, a one-dimensional character component, an admissible generic locus, its peripheral eigenvalue curve, and an ideal point with the associated surface specified in the statement.

[F1] The slope is a rational function on the stated character component once the rationality lemma is proved ([[lem-adjoint-twisted-slope-is-rational-on-a-character-component]]).

[F2] The Bénard–Florens–Rodau convention orders the boundary basis as $(v\otimes\lambda,v\otimes\mu)$ and defines $s=-b/a$ for a kernel generator $a(v\otimes\lambda)+b(v\otimes\mu)$ ([[def-character-variety-logarithmic-slope-invariant]]).

[A1] The Fox-matrix/torsion argument identifying the slope with the logarithmic derivative is not proved locally; the ideal-point conclusion also needs the valuation-to-tree and tree-to-essential-surface construction ([[def-adjoint-twisted-homology-and-culler-shalen-data]]).

## Proof obligation

The affine formula requires the complete BFR chain-complex calculation, including the change-of-basis sign in the torsion ratio and passage from the peripheral restriction map to the cotangent map. The ideal-point clause additionally requires the full Culler–Shalen valuation action and boundary-slope calculation. These are not discharged by the cited theorem names alone, so the theorem is escalated.
