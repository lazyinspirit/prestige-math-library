---
id: def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue
kind: definition
title: "Compatible left and right eigenvectors for a simple eigenvalue"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-eigenvalue-eigenvector-eigenspace-and-spectrum,
       cor-a-simple-eigenvalue-has-one-dimensional-eigenspace,
       thm-matrix-of-the-adjoint-is-the-conjugate-transpose]
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Matrix Computations - Perturbation theory"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-22.html"
---

## Definition

Let $A\in\mathbb C^{n\times n}$, equipped with the standard Hermitian inner
product, and let $\lambda\in\mathbb C$ be a simple eigenvalue of $A$. A nonzero vector
$x$ is a **right eigenvector** for $\lambda$ if

$$Ax=\lambda x.$$

A nonzero vector $y$ is a **left eigenvector** for $\lambda$ if

$$y^\ast A=\lambda y^\ast,$$

equivalently $A^\ast y=\overline{\lambda}\,y$.

Such $x$ and $y$ are called **compatible left and right eigenvectors** for the
simple eigenvalue $\lambda$.
