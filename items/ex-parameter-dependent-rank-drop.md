---
id: ex-parameter-dependent-rank-drop
kind: example
title: "The rank and solution behaviour of a parameterised matrix change at one exceptional parameter"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-row-rank-equals-column-rank, thm-rref-consistency-and-free-variable-parametrisation, thm-reals-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. One, exercises after §III.2"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Example

For
$$A_t=\begin{pmatrix}1&1\\1&t\end{pmatrix},\qquad b=\begin{pmatrix}2\\2\end{pmatrix},$$
the real system $A_tx=b$ has rank $2$ and the unique solution $(2,0)$ when $t\ne1$, while at $t=1$ it has rank $1$ and the affine line of solutions $(2-s,s)$.

## Facts & Assumptions

**Given:** A real parameter $t$ and the displayed system.

[L1] Matrix rank is the number of pivots ([[thm-row-rank-equals-column-rank]]).

[L2] RREF gives consistency and the free-variable parametrisation ([[thm-rref-consistency-and-free-variable-parametrisation]]).

[L3] The real numbers form a field ([[thm-reals-field]]).

## Verification

**Proof technique:** cases.

1.1 Subtract row $0$ from row $1$ without dividing by the parameter; the augmented matrix becomes $\begin{pmatrix}1&1&2\\0&t-1&0\end{pmatrix}$. [L1, L2, L3, cases]

2.1 If $t\ne1$, the second row has a pivot, so the rank is $2$, $y=0$, and $x=2$. [step 1.1, assume-case generic]

2.2 If $t=1$, the second row is zero, so the rank is $1$ and $y=s$ is free with $x=2-s$. [step 1.1, assume-case exceptional]

3.1 The alternatives $t=1$ and $t\ne1$ are exhaustive and give the stated solution behaviour. [step 2.1, step 2.2, cases-exhaustive] ∎

