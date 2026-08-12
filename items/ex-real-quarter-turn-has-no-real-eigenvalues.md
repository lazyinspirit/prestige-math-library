---
id: ex-real-quarter-turn-has-no-real-eigenvalues
kind: example
title: 'A quarter-turn of $\mathbb R^2$ has characteristic polynomial $x^2+1$ and no real eigenvalue'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-spectrum-is-the-root-set-of-the-characteristic-polynomial, lem-of-square-positive]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'M. Khovanov, Linear Algebra II notes, §6'
      url: 'https://www.math.columbia.edu/~khovanov/MA2_2022/files/lin_alg.pdf'
pipeline_run: null
---

## Example

The real quarter-turn

$$A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$$

has $\chi_A(x)=x^2+1$ and empty real spectrum.

## Facts & Assumptions

**Given:** The displayed matrix, acting on $\mathbb R^2$.

[L1] The spectrum over the base field is exactly the root set in that field of the characteristic polynomial ([[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]).

[L2] Every real square is nonnegative ([[lem-of-square-positive]]).

## Verification

**Proof technique:** direct computation.

1.1 Directly, $\chi_A(x)=\det\begin{pmatrix}x&1\\-1&x\end{pmatrix}=x^2+1$. [algebra]

2.1 For every $x\in\mathbb R$, [L2] gives $x^2+1\ge1>0$, so $\chi_A$ has no real root. [step 1.1, L2, algebra]

3.1 By [L1], $A$ has no real eigenvalue, despite acting on a nonzero real space. [step 2.1, L1] ∎
