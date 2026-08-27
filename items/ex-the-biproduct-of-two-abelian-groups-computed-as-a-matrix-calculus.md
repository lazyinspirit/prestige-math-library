---
id: ex-the-biproduct-of-two-abelian-groups-computed-as-a-matrix-calculus
kind: example
title: "The biproduct of two abelian groups computed as a matrix calculus"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-morphisms-between-finite-biproducts-correspond-to-matrices, thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.2"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-20
---

## Example

In $\mathbf{Ab}$, the endomorphism

$$f:\mathbb Z\oplus\mathbb Z\to\mathbb Z\oplus\mathbb Z,\qquad f(x,y)=(2x-y,3x),$$

has matrix

$$\begin{pmatrix}2&-1\\3&0\end{pmatrix},$$

and if

$$g(x,y)=(x+4y,-y),$$

then the matrix of $g\circ f$ is the product

$$\begin{pmatrix}1&4\\0&-1\end{pmatrix}\begin{pmatrix}2&-1\\3&0\end{pmatrix}=\begin{pmatrix}14&-1\\-3&0\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The biproduct $\mathbb Z\oplus\mathbb Z$ in $\mathbf{Ab}$ and the
two displayed homomorphisms $f$ and $g$.

[L1] Morphisms between finite biproducts correspond to matrices of their
component maps ([[thm-morphisms-between-finite-biproducts-correspond-to-matrices]]).

[L2] Composition of such morphisms is matrix multiplication
([[thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication]]).

## Verification

**Proof technique:** direct.

1.1 The four component maps of $f$ are $x\mapsto2x$, $y\mapsto-y$, $x\mapsto3x$, and $y\mapsto0$, so [L1] gives the displayed matrix for $f$. Likewise $g$ has matrix $\begin{pmatrix}1&4\\0&-1\end{pmatrix}$. [L1]

2.1 Applying [L2] yields the matrix product $\begin{pmatrix}14&-1\\-3&0\end{pmatrix}$ for $g\circ f$. Evaluating the composite directly gives $(g\circ f)(x,y)=(14x-y,-3x)$, which matches the same matrix. [L2, step 1.1] ∎
