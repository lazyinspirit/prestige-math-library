---
id: thm-benard-florens-rodau-logarithmic-gauss-formula
kind: theorem
title: Bénard–Florens–Rodau logarithmic Gauss formula and ideal-point slope
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 13
deps:
  - thm-adjoint-logarithmic-gauss-slope-and-ideal-point
  - lem-adjoint-twisted-slope-is-rational-on-a-character-component
  - def-character-variety-logarithmic-slope-invariant
  - def-knot-a-polynomial
  - def-boundary-slope-of-an-incompressible-surface
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the
        A-polynomial of knots, Theorems 1.3 and 1.5
      url: https://arxiv.org/pdf/2103.14151
    - title: Allen Hatcher, Boundary slopes of incompressible surfaces
      url: https://www.math.unl.edu/~mbrittenham2/classwk/990s08/public/hatcher.bdyslopes.pdf
---

## Statement

Assume full AC. Let $K\subset S^3$ be a smooth oriented knot, and let $X$ be a one-dimensional irreducible component of its $SL_2(\mathbb C)$ character variety whose peripheral image is a curve in $(\mathbb C^*)^2$. With Bénard–Florens–Rodau's variable order $A_K(L,M)$ and their slope convention, on the admissible smooth locus where the displayed derivatives are nonzero,
$$s_K(\rho)=-\frac{M}{L}\frac{\partial_M A_K}{\partial_L A_K}.$$
At an ideal point of the curve, if the associated Culler-Shalen surface has boundary slope $r$ measured by $a[\lambda]+b[\mu]$ with $r=b/a$, the limiting Bénard–Florens–Rodau slope is $-r$.

## Statement references

[Bénard, Florens, and Rodau, Theorems 1.3 and 1.5](https://arxiv.org/pdf/2103.14151)

[Hatcher, *Boundary Slopes of Incompressible Surfaces*](https://www.math.unl.edu/~mbrittenham2/classwk/990s08/public/hatcher.bdyslopes.pdf)

## Facts & Assumptions

**Given:** Full AC, the exact ordered adjoint-homology basis and slope convention, a one-dimensional peripheral curve, a smooth admissible locus, and the ideal-point surface specified in the statement.

[F1] The affine logarithmic formula and ideal-point statement are the local theorem with explicit boundary-slope conventions ([[thm-adjoint-logarithmic-gauss-slope-and-ideal-point]]).

[F2] Boundary slope $r=b/a$ is defined using the preferred longitude and positive meridian ([[def-boundary-slope-of-an-incompressible-surface]]).

[A1] The complete BFR proof and Culler–Shalen ideal-point construction have not been supplied locally; the source statements do not constitute a local proof.

## Proof obligation

This carrier records the exact BFR variable order and sign so consumers do not import a reciprocal or opposite-sign convention. Its proof must instantiate the local affine and ideal-point arguments in [F1] with the basis from [F2]. Since those arguments remain escalated, this theorem is escalated.
