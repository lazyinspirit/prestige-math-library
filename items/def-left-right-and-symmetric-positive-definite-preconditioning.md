---
id: def-left-right-and-symmetric-positive-definite-preconditioning
kind: definition
title: "Left preconditioning, right preconditioning, and symmetric preconditioning of a linear system"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-invertible-matrix-and-general-linear-group,
       def-cholesky-factorisation-with-positive-diagonal,
       thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]
verification:
  audited: 2026-09-01
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods"
      url: "https://www.netlib.org/templates/templates.html"
    - title: "Jonathan Richard Shewchuk, An Introduction to the Conjugate Gradient Method Without the Agonizing Pain"
      url: "https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf"
---

## Definition

Let $Ax=b$ be a linear system.

If $P\in\operatorname{GL}_n(\mathbb F)$ is invertible, the **left-preconditioned
system** is

$$P^{-1}Ax=P^{-1}b.$$

If $P\in\operatorname{GL}_n(\mathbb F)$ is invertible and $y:=Px$, the
**right-preconditioned system** is

$$AP^{-1}y=b,\qquad x=P^{-1}y.$$

If $M$ is Hermitian positive definite, then by
[[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]
it has a Cholesky factor $M=CC^*$ with $C$ invertible. The corresponding
**symmetric preconditioning** is

$$C^{-1}AC^{-*}y=C^{-1}b,\qquad x=C^{-*}y.$$
