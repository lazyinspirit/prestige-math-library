---
id: ex-simultaneous-diagonalisation-of-two-commuting-matrices
kind: example
title: "Two commuting non-scalar matrices simultaneously diagonalised in one explicit basis"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The matrices

$$A=\begin{pmatrix}1&1\\0&2\end{pmatrix},\qquad B=\begin{pmatrix}3&1\\0&4\end{pmatrix}$$

commute and are simultaneously diagonalised by the ordered basis $((1,0),(1,1))$.

## Facts & Assumptions

**Given:** The displayed matrices and $P=\begin{pmatrix}1&1\\0&1\end{pmatrix}$.

[L1] Pairwise commuting diagonalisable endomorphisms have a common eigenbasis ([[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]).

## Verification

**Proof technique:** direct.

1.1 With $P^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}$, direct multiplication gives $A=P\operatorname{diag}(1,2)P^{-1}$ and $B=P\operatorname{diag}(3,4)P^{-1}$. [algebra]

2.1 Thus the columns of $P$, namely $(1,0)$ and $(1,1)$, are a common eigenbasis. The two diagonal matrices commute, so their conjugates commute as well, agreeing with [L1]. [step 1.1, L1, algebra] ∎
