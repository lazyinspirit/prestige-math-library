---
id: ex-rank-one-svd-truncation
kind: example
title: "The rank-one truncation of an SVD realises the Eckart-Young minimiser"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-singular-value-decomposition-of-a-two-by-three-matrix, thm-eckart-young-best-rank-k-approximation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Example

For the matrix

$$A=\begin{pmatrix}2&0&0\\0&1&0\end{pmatrix},$$

the rank-one truncation

$$A_1=\begin{pmatrix}2&0&0\\0&0&0\end{pmatrix}$$

is a best rank-at-most-one approximation in operator norm, and the error is
$1$.

## Facts & Assumptions

**Given:** The matrix $A$ above and its rank-one truncation $A_1$.

[L1] The matrix $A$ has singular values $2,1,0$ ([[ex-singular-value-decomposition-of-a-two-by-three-matrix]]).

[L2] The rank-$1$ truncation of an SVD is a best rank-at-most-$1$ approximation, with error equal to the next singular value ([[thm-eckart-young-best-rank-k-approximation]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], deleting the second singular direction replaces $A$ by $A_1=\begin{pmatrix}2&0&0\\0&0&0\end{pmatrix}$, which has rank $1$, and $A-A_1=\begin{pmatrix}0&0&0\\0&1&0\end{pmatrix}$ has operator norm $1$. [L1, algebra]

2.1 The next singular value after the retained one is $1$, so [L2] says exactly that no rank-at-most-one matrix lies closer to $A$ in operator norm than $A_1$. Therefore $A_1$ is the Eckart-Young minimiser. [L2, step 1.1] ∎
