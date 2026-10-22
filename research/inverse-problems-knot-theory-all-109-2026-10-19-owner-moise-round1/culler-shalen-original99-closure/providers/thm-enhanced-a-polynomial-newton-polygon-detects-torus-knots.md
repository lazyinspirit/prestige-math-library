---
id: thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots
kind: theorem
title: The enhanced A-polynomial Newton polygon detects torus knots
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 15
deps:
  - lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs
  - def-knot-a-polynomial
  - def-enhanced-a-polynomial
  - def-sl-two-character-variety-and-peripheral-eigenvalues
  - def-boundary-slope-of-an-incompressible-surface
  - thm-jsj-decomposition-of-knot-exteriors
  - thm-thurston-hyperbolic-dehn-filling
  - def-singular-instanton-knot-and-sutured-closure-data
  - thm-sutured-instanton-khi-rank-detects-unknot
  - lem-torus-knot-enhanced-a-polynomial
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and
        SL(2,C), Theorem 1.2 and §4
      url: https://arxiv.org/pdf/2405.19197v2
    - title: Yi Ni and Xingru Zhang, Characterizing slopes for torus knots, §2
      url: https://arxiv.org/pdf/1712.04012
---

## Statement

Assume full AC and let $K\subset S^3$ be a smooth knot. For a nonzero Laurent polynomial $f(M,L)$, its Newton polygon is the convex hull in $\mathbb R^2$ of exponent pairs $(a,b)$ for which the coefficient of $M^bL^a$ is nonzero. The enhanced A-polynomial is **thin** when this polygon is contained in an affine line; the constant polynomial $1$ has a one-point Newton polygon and is thin. Then the enhanced A-polynomial of $K$ is thin if and only if $K$ is a torus knot, including the unknot.

## Statement references

[[def-enhanced-a-polynomial|Enhanced A-polynomial and reducible component]]

[[def-coprime-torus-knot|Coprime torus-knot convention]]

[Baldwin and Sivek, Theorem 1.2 and §4](https://arxiv.org/pdf/2405.19197v2)

[Ni and Zhang, §2](https://arxiv.org/pdf/1712.04012)

## Facts & Assumptions

**Given:** Full AC and a knot in $S^3$ with the stated enhanced A-polynomial convention.

[F1] The Newton polygon of a nontrivial torus knot's enhanced A-polynomial is a line segment of slope $pq$; the unknot has enhanced polynomial $1$ (Baldwin–Sivek, Example 2.13 and Corollary 2.10).

[A1] The converse uses the hyperbolic-filling obstruction to thin hyperbolic knots, the JSJ reduction to satellites, the satellite genus formula, and instanton L-space/KHI Alexander restrictions to rule out thin satellites. The hyperbolic filling metric theorem is now locally supplied; its SL2 lifting and character-variety thinness implications and the full JSJ supplier still require their actual local proofs.

[A2] The exact torus-knot enhanced A-polynomial formulas needed for the forward direction, including the separate $|q|=2$ and $|q|>2$ cases and sign conventions, are not proved by the current torus-knot group and Alexander suppliers.

## Proof obligation

The source proof first computes the torus-knot enhanced A-polynomial, then shows a thin knot is not hyperbolic, assumes a minimal-genus thin satellite, identifies its pattern closure and companion as torus knots, and contradicts the instanton L-space Alexander restrictions. The local torus formula, hyperbolic-filling implication, JSJ classification, and instanton/KHI satellite obstruction remain open. This theorem is escalated.
