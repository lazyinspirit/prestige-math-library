---
id: ex-same-characteristic-polynomial-different-minimal-polynomials
kind: example
title: "The identity and a nontrivial Jordan block have the same characteristic polynomial but different minimal polynomials"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-minimal-polynomial-is-well-defined-and-controls-annihilators, lem-characteristic-polynomial-of-block-triangular-matrix]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, Example 4.2'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Example

Over any field, let

$$I=\begin{pmatrix}1&0\\0&1\end{pmatrix},\qquad J=\begin{pmatrix}1&1\\0&1\end{pmatrix}.$$

Both matrices have characteristic polynomial $(x-1)^2$, but $\mu_I=x-1$ while $\mu_J=(x-1)^2$.

## Facts & Assumptions

**Given:** The matrices $I,J$ in the Example.

[L1] A block-triangular characteristic polynomial is the product of the characteristic polynomials of its diagonal blocks ([[lem-characteristic-polynomial-of-block-triangular-matrix]]).

[L2] The minimal polynomial is the monic polynomial of least degree that annihilates the matrix ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], both characteristic polynomials are $(x-1)^2$. [L1]

2.1 The polynomial $x-1$ annihilates $I$. For $N=J-I\ne0$, one has $N^2=0$, so $(J-I)^2=0$ but $J-I\ne0$. Hence [L2] gives $\mu_I=x-1$ and $\mu_J=(x-1)^2$. [L2, algebra] ∎
