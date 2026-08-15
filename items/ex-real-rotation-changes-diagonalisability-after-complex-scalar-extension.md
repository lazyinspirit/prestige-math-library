---
id: ex-real-rotation-changes-diagonalisability-after-complex-scalar-extension
kind: example
title: "Quarter-turn rotation is not diagonalisable over $\\mathbb R$ but is diagonalisable over $\\mathbb C$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots, def-complex-numbers-and-arithmetic, lem-x-squared-plus-one-is-irreducible-over-the-reals]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, Potential Diagonalizability, Example 1'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/potdiagonalizable.pdf'
pipeline_run: null
---

## Example

The quarter-turn matrix

$$R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$$

is not diagonalisable over $\mathbb R$, but it is diagonalisable over $\mathbb C$.

## Facts & Assumptions

**Given:** The displayed real matrix $R$.

[L1] An endomorphism is diagonalisable exactly when its minimal polynomial is a product of distinct linear factors over the base field ([[thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]]).

[L2] The polynomial $x^2+1$ is irreducible over $\mathbb R$ ([[lem-x-squared-plus-one-is-irreducible-over-the-reals]]).

[L3] In $\mathbb C$, the element $i$ satisfies $i^2=-1$ ([[def-complex-numbers-and-arithmetic]]).

## Verification

**Proof technique:** direct.

1.1 Direct multiplication gives $R^2=-I$, while no linear polynomial annihilates $R$, so $\mu_R=x^2+1$. By [L2] and [L1], $R$ is not diagonalisable over $\mathbb R$. [L1, L2, algebra]

2.1 Over $\mathbb C$, [L3] gives $x^2+1=(x-i)(x+i)$ with distinct roots. By [L1] the extended matrix is diagonalisable; explicitly $(i,1)$ and $(-i,1)$ are eigenvectors for $i$ and $-i$ and form a basis. [L1, L3, algebra] ∎
