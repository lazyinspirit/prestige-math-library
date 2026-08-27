---
id: fs-polar-isometry-is-unique-for-singular-operators
kind: false-statement
title: "FALSE: The isometry in the polar decomposition is unique even for singular operators"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-polar-decomposition-of-a-singular-matrix, thm-polar-decomposition]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

The isometry in the polar decomposition is unique even for singular operators.

## Facts & Assumptions

**Given:** The singular matrix $T=\begin{pmatrix}1&0\\0&0\end{pmatrix}$.

[L1] This matrix has two distinct polar isometric factors $S_1$ and $S_2$ with the same non-negative factor $U$ ([[ex-polar-decomposition-of-a-singular-matrix]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the singular matrix $T$ admits both decompositions $T=S_1U$ and $T=S_2U$, with $S_1\ne S_2$. [L1]

2.1 Therefore the isometry in a polar decomposition need not be unique for a singular operator. This refutes the claim. [L1] ∎
