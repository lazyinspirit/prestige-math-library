---
id: fs-the-characteristic-polynomial-determines-diagonalisability
kind: false-statement
title: "FALSE: The characteristic polynomial determines whether an endomorphism is diagonalisable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-characteristic-polynomial-of-block-triangular-matrix, thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, Example 4.2 and Theorem 4.11'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Statement

**False claim.** Two endomorphisms with the same characteristic polynomial are either both diagonalisable or both non-diagonalisable.

## Facts & Assumptions

**Given:** The matrices $I_2$ and $J=\begin{pmatrix}1&1\\0&1\end{pmatrix}$.

[L1] A block-triangular characteristic polynomial is the product of those of its diagonal blocks ([[lem-characteristic-polynomial-of-block-triangular-matrix]]).

[L2] Diagonalisability is controlled by the minimal polynomial being a product of distinct linear factors ([[thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], both matrices have characteristic polynomial $(x-1)^2$. [L1]

2.1 The identity is diagonal. For $J$, $(J-I)^2=0$ but $J-I\ne0$, so $\mu_J=(x-1)^2$ and [L2] says $J$ is not diagonalisable. Thus the shared characteristic polynomial does not decide diagonalisability. [L2, algebra] ∎
