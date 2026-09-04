---
id: fs-reverse-order-pseudoinversion-holds-without-hypotheses
kind: false-statement
title: "For arbitrary matrices, $(AB)^+=B^+A^+$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-moore-penrose-pseudoinverse-exists-and-is-unique]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Roger Penrose, A generalized inverse for matrices"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0305004100030929"
---

## Statement

**False claim:** for arbitrary compatible matrices $A$ and $B$,

$$ (AB)^+=B^+A^+. $$

## Facts & Assumptions

**Given:** The matrices

$$ A= \begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}, \qquad B= \begin{bmatrix} 1 & 0 \\ 1 & 0 \end{bmatrix}. $$

[L1] Every finite real or complex matrix has a unique Moore--Penrose pseudoinverse ([[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]).

## Refutation

**Proof technique:** direct.

1.1 The three matrices are rank one: $$ AB= \begin{bmatrix} 2 & 0 \\ 0 & 0 \end{bmatrix}, \qquad A^+=\frac12 \begin{bmatrix} 1 & 0 \\ 1 & 0 \end{bmatrix}, \qquad B^+=\frac12 \begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}. $$ [L1, algebra]

2.1 Therefore $$ (AB)^+= \begin{bmatrix} \tfrac12 & 0 \\ 0 & 0 \end{bmatrix}, \qquad B^+A^+= \frac14 \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}. $$ [step 1.1, algebra]

3.1 The two matrices in step 2.1 are different, so the displayed matrices refute the claim $(AB)^+=B^+A^+$. [step 2.1] ∎