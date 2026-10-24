---
id: fs-a-split-minimal-polynomial-always-gives-diagonalisability
kind: false-statement
title: "FALSE: If the minimal polynomial splits, then the endomorphism is diagonalisable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots, def-polynomials-that-split-and-splitting-fields]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, Theorem 4.11'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Statement

**False claim.** If the minimal polynomial of an endomorphism splits over the base field, then the endomorphism is diagonalisable.

## Facts & Assumptions

**Given:** The matrix $J=\begin{pmatrix}1&1\\0&1\end{pmatrix}$.

[L1] Diagonalisability requires the minimal polynomial to be a product of **distinct** linear factors ([[thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]]).

[L2] Splitting permits repeated linear factors ([[def-polynomials-that-split-and-splitting-fields]]).

## Refutation

**Proof technique:** direct.

1.1 One has $(J-I)^2=0$ but $J-I\ne0$, so $\mu_J=(x-1)^2$. This polynomial splits by [L2], but its root is repeated. [L2, algebra]

2.1 By [L1], $J$ is not diagonalisable. Thus splitting alone is insufficient; squarefreeness is the missing condition. [step 1.1, L1] ∎
