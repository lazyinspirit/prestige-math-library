---
id: def-krylov-galerkin-iterate-for-a-hermitian-positive-definite-system
kind: definition
title: "The $m$th Krylov Galerkin iterate in the affine space $x_0+K_m(A,r_0)$ for a Hermitian positive-definite system"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-krylov-subspace-of-a-matrix-and-start-vector,
       def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix,
       def-matrix-product-and-identity-matrix]
verification:
  audited: 2026-09-01
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Magnus R. Hestenes and Eduard Stiefel, Methods of Conjugate Gradients for Solving Linear Systems"
      url: "https://math.nist.gov/mcsd/Reports/2002/hestenes-steifel-52.pdf"
---

## Definition

Let $A$ be Hermitian positive definite, let $Ax=b$, let $x_0$ be an initial
guess, and put

$$r_0:=b-Ax_0.$$

For $m\ge 0$, an element $x_m\in x_0+K_m(A,r_0)$ is the **$m$th Krylov
Galerkin iterate** when its residual

$$r_m:=b-Ax_m$$

is orthogonal to $K_m(A,r_0)$ in the standard inner product. The next
proposition identifies this residual condition with $A$-orthogonality of the
error $x_*-x_m$.
