---
id: def-validated-eigenvalue-enclosures-for-an-index-one-hessian
kind: definition
title: "Validated ordered eigenvalue enclosures for an index-one Hessian"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - cor-hessian-is-symmetric
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-hessian-and-euclidean-critical-point
  - def-regular-minimum-energy-path-in-a-collision-free-tube
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Graeme Henkelman, Blas P. Uberuaga, and Hannes Jónsson, A climbing image nudged elastic band method for finding saddle points and minimum energy paths"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect04/climbimageNEB.pdf"
      locator: "§I: a first-order saddle has one negative-curvature mode; the interval-certificate format and proof obligations are defined here"
---

## Definition

Let $V$ and $U$ be as in [[def-regular-minimum-energy-path-in-a-collision-free-tube]], let $x\in U$, and let $H=\nabla^2V(x)$ use the convention of [[def-hessian-and-euclidean-critical-point]]. Since $V\in C^4(U)$, it is $C^2$; [[cor-hessian-is-symmetric]] gives $H^T=H$. In the standard Euclidean inner product this makes the endomorphism represented by $H$ self-adjoint. Therefore the real spectral theorem [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] applies, and $H$ has ordered eigenvalues $\lambda_1(H)\le\cdots\le\lambda_d(H)$.

A **validated ordered eigenvalue enclosure** is a list of intervals $I_j=[\ell_j,u_j]$ together with an independently checked certificate proving $\lambda_j(H)\in I_j$ for every $j$ and preserving the stated ordering. The exact Hessian $H$, interval arithmetic or another validated spectral method, and all rounding assumptions used by the certificate are part of that external certificate; a Ritz value or residual alone is not, by definition, such a certificate.

For $d\ge2$ and $\gamma>0$, the enclosure certifies **index one with gap $\gamma$** when $u_1\le-\gamma$ and $\ell_j\ge\gamma$ for every $j\ge2$. For $d=1$, the condition is $u_1\le-\gamma$, with no positive-eigenvalue clauses. A validated enclosure records the input evidence; this definition does not assert that any particular eigensolver produces it.
