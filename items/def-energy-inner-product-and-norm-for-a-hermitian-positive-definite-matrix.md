---
id: def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix
kind: definition
title: "The energy inner product $\\langle u,v\\rangle_A=\\langle Au,v\\rangle$ and energy norm $\\|u\\|_A$ for a Hermitian positive-definite matrix"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cholesky-factorisation-with-positive-diagonal,
       prop-standard-coordinate-inner-products]
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

Let $A\in M_n(\mathbb C)$ be Hermitian positive definite in the sense of
[[def-cholesky-factorisation-with-positive-diagonal]]. For vectors
$u,v\in\mathbb C^n$, define the **energy inner product**

$$\langle u,v\rangle_A:=\langle Au,v\rangle,$$

where $\langle \cdot,\cdot\rangle$ is the standard coordinate inner product of
[[prop-standard-coordinate-inner-products]]. Because $A$ is Hermitian positive
definite, this is an inner product on $\mathbb C^n$, and its induced norm

$$\|u\|_A:=\sqrt{\langle u,u\rangle_A}$$

is the **energy norm** of $u$.

Equivalently, if $A=LL^*$ is the Cholesky factorization from
[[def-cholesky-factorisation-with-positive-diagonal]], then
$\langle u,v\rangle_A=\langle L^*u,L^*v\rangle$ and
$\|u\|_A=\|L^*u\|_2$.

