---
id: def-galerkin-coarse-grid-correction
kind: definition
title: "Galerkin coarse matrices and the exact coarse-correction error map"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-cholesky-factorisation-with-positive-diagonal,
       def-matrix-product-and-identity-matrix,
       def-adjoint-of-a-linear-map-between-inner-product-spaces,
       thm-matrix-of-the-adjoint-is-the-conjugate-transpose,
       prop-standard-coordinate-inner-products]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
  - title: "Susanne C. Brenner and L. Ridgway Scott, The Mathematical Theory of Finite Element Methods, 3rd ed., Chapter 6"
    url: "https://webs.um.es/eliseo/um/uploads/Main/Brenner_Scott_The_Mathematical_Theory_Of_Finite_Element%20Methods_2008.pdf"
  - title: "Numerical Methods II, University of Heidelberg lecture notes, Chapter 10"
    url: "https://conan.iwr.uni-heidelberg.de/data/teaching/finiteelements_ws2021/num2_updated.pdf"
---

## Definition

Work over the real field with standard coordinate inner products. Let
$A_h\in\mathbb R^{n\times n}$ be symmetric positive definite (equivalently,
positive definite in the Cholesky convention of
[[def-cholesky-factorisation-with-positive-diagonal]]) and let
$P\in\mathbb R^{n\times m}$ have full column rank, where $1\le m\le n$.
The map $P$ sends coarse-grid coordinate vectors to fine-grid coordinate
vectors; its Euclidean adjoint is the transpose $P^{\mathsf T}$ by
[[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]. Define the **Galerkin
coarse matrix**

$$A_H:=P^{\mathsf T}A_hP.$$

Whenever $A_H$ is invertible, define the **exact Galerkin coarse-correction
error map**

$$C:=I_n-PA_H^{-1}P^{\mathsf T}A_h.$$

This definition is conditional on invertibility of $A_H$. The next theorem
proves that condition from positive definiteness of $A_h$ and full column rank
of $P$. The formula is in exact real arithmetic; a rediscretized operator is
not identified with $A_H$ unless equality is separately shown.
