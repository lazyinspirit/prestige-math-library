---
id: lem-crouzeix-raviart-local-face-unisolvence
kind: lemma
title: Face averages are unisolvent for the local Crouzeix–Raviart element
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-crouzeix-raviart-local-p1-element
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "§36.2.1, equations (36.4)–(36.5) and the shape functions on PDF p. 2."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 276–290: the affine P1 space is specified by face-midpoint values in two dimensions."
---

## Statement

For the element of [[def-crouzeix-raviart-local-p1-element]], the face-average
functionals form an isomorphism
$\mathbb P_1(K)\to\mathbb R^{d+1}$. In particular,
$$\frac1{|F_j|}\int_{F_j}\phi_{K,F_i}\,dS=\delta_{ij},\qquad \phi_{K,F_i}=1-d\lambda_i,$$
so every $p\in\mathbb P_1(K)$ has the unique expansion
$p=\sum_{i=0}^d\sigma_{K,F_i}(p)\phi_{K,F_i}$.

## Facts & Assumptions

**Given:** A nondegenerate affine $d$-simplex $K$, its facets $F_i$, barycentric coordinates $\lambda_i$, and the face-average functionals and candidate shape polynomials of [[def-crouzeix-raviart-local-p1-element]].

[F1] The barycentric coordinates are affine, satisfy $\lambda_i(a_j)=\delta_{ij}$, and sum to one on $K$. ([[def-crouzeix-raviart-local-p1-element]])

[F2] The average of an affine function over a simplex facet equals its value at that facet's barycenter; this follows by integrating each affine coordinate in the affine parametrization of the facet. ([[def-crouzeix-raviart-local-p1-element]])

## Proof
1.1 Let $b_j$ be the barycenter of $F_j$. By [F2], the face average of an affine polynomial $p$ on $F_j$ is $p(b_j)$. At $b_j$, the barycentric coordinates of the $d$ vertices of $F_j$ are all $1/d$, while the coordinate opposite $F_j$ is zero. Therefore $\lambda_i(b_j)=0$ if $i=j$ and $\lambda_i(b_j)=1/d$ if $i\ne j$. Hence $(1-d\lambda_i)(b_j)=\delta_{ij}$, which proves the displayed duality identities. [F1, F2, given, algebra]

2.1 The $d+1$ polynomials $\phi_{K,F_i}$ are linearly independent: applying $\sigma_{K,F_j}$ to $\sum_i c_i\phi_{K,F_i}=0$ gives $c_j=0$ by step 1.1. Since $\mathbb P_1(K)$ has dimension $d+1$, they form a basis. Applying the same functionals to $p-\sum_i\sigma_{K,F_i}(p)\phi_{K,F_i}$ gives zero for every face; expansion in this basis then gives zero coefficients. This proves existence and uniqueness of the stated expansion. [step 1.1, algebra] ∎