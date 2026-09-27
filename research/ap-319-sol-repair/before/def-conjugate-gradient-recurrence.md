---
id: def-conjugate-gradient-recurrence
kind: definition
title: "The conjugate-gradient recurrence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-krylov-subspace-of-a-matrix-and-start-vector,
       def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]
justified_by: [prop-conjugate-gradient-denominators-are-positive-before-convergence]
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
    - title: "Jonathan Richard Shewchuk, An Introduction to the Conjugate Gradient Method Without the Agonizing Pain"
      url: "https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf"
---

## Definition

Let $A$ be Hermitian positive definite, let $Ax=b$, and fix an initial guess
$x_0$. Set

$$r_0:=b-Ax_0,\qquad p_0:=r_0.$$

For every index $k$ with $r_k\ne0$, define

$$\alpha_k:=\frac{\langle r_k,r_k\rangle}{\langle Ap_k,p_k\rangle},\qquad x_{k+1}:=x_k+\alpha_kp_k,\qquad r_{k+1}:=r_k-\alpha_kAp_k,$$

and then

$$\beta_k:=\frac{\langle r_{k+1},r_{k+1}\rangle}{\langle r_k,r_k\rangle},\qquad p_{k+1}:=r_{k+1}+\beta_kp_k.$$

This is the **conjugate-gradient recurrence**.
