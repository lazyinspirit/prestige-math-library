---
id: fs-normal-operators-are-diagonalisable-over-the-base-field
kind: false-statement
title: "FALSE: Every normal operator is diagonalisable over its base field"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-real-normal-endomorphism-classification, ex-quarter-turn-real-normal-form]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Nicholas Hu, The Schur decomposition"
      url: "https://math.ucla.edu/~njhu/notes/nla/eig/schur/"
---

## Statement

Every normal operator is diagonalisable over its base field.

## Facts & Assumptions

**Given:** The quarter-turn matrix $A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ on $\mathbb R^2$.

[L1] The real quarter-turn is normal and has complex eigenvalues $\pm i$ ([[ex-quarter-turn-real-normal-form]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the quarter-turn $A$ is a normal real operator. [L1]

2.1 The same example [L1] shows that $A$ has no real eigenvalue, so it cannot have a real eigenbasis and is not diagonalisable over $\mathbb R$. This refutes the field-free claim. [L1] ∎
