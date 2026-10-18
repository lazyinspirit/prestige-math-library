---
id: def-symmetric-two-grid-error-operator
kind: definition
title: "The symmetric two-grid error map from a pre-smoother and Galerkin correction"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-galerkin-coarse-grid-correction,
       thm-galerkin-coarse-correction-is-energy-orthogonal-projector,
       def-adjoint-of-a-linear-map-between-inner-product-spaces,
       def-matrix-product-and-identity-matrix,
       def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
  - title: "Susanne C. Brenner and L. Ridgway Scott, The Mathematical Theory of Finite Element Methods, 3rd ed., Chapter 6"
    url: "https://webs.um.es/eliseo/um/uploads/Main/Brenner_Scott_The_Mathematical_Theory_Of_Finite_Element%20Methods_2008.pdf"
  - title: "Numerical Methods II, University of Heidelberg lecture notes, Chapter 10"
    url: "https://conan.iwr.uni-heidelberg.de/data/teaching/finiteelements_ws2021/num2_updated.pdf"
---

## Definition

Let $A_h$ be symmetric positive definite, let $C$ be the Galerkin projector
of [[thm-galerkin-coarse-correction-is-energy-orthogonal-projector]], and let
$S\in\mathbb R^{n\times n}$ be a linear pre-smoothing error map. For the
energy inner product of [[def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]],
define the **$A_h$-adjoint** of $S$ by

$$S^{*_{A_h}}:=A_h^{-1}S^{\mathsf T}A_h.$$

This is well-defined because $A_h$ is invertible. For all $x,y$,
$\langle Sx,y\rangle_{A_h}=x^{\mathsf T}S^{\mathsf T}A_hy
=\langle x,S^{*_{A_h}}y\rangle_{A_h}$, so it is the adjoint with respect to
that energy inner product. The **symmetric two-grid error map** is

$$E:=S^{*_{A_h}}CS.$$

It maps an input error through pre-smoothing $S$, exact coarse correction $C$,
and the $A_h$-adjoint post-smoother.
