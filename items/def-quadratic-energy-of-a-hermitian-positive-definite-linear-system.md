---
id: def-quadratic-energy-of-a-hermitian-positive-definite-linear-system
kind: definition
title: "The quadratic energy $\\phi(x)=\\tfrac12\\langle Ax,x\\rangle-\\operatorname{Re}\\langle b,x\\rangle$ of a Hermitian positive-definite linear system"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix,
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
    - title: "Jonathan Richard Shewchuk, An Introduction to the Conjugate Gradient Method Without the Agonizing Pain"
      url: "https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf"
---

## Definition

Let $A\in M_n(\mathbb C)$ be Hermitian positive definite, and let
$b\in\mathbb C^n$. The **quadratic energy** of the linear system $Ax=b$ is the
real-valued function

$$\phi:\mathbb C^n\to\mathbb R,\qquad \phi(x):=\tfrac12\langle Ax,x\rangle-\operatorname{Re}\langle b,x\rangle,$$

where the coordinate inner product is the one from
[[prop-standard-coordinate-inner-products]]. The diagonal term is real because
$\langle Ax,x\rangle=\|x\|_A^2$ by
[[def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]].

