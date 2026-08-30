---
id: ex-householder-reduction-to-hessenberg-form-for-a-three-by-three-matrix
kind: example
title: "A single Householder similarity reduces a $3\\times3$ matrix to Hessenberg form"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form]
aliases: []
landmark: false
proof_strategy: computation
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references: []
---

## Example

Let

$$ A= \begin{bmatrix} 1 & 2 & 0\\ 3 & 4 & 5\\ 4 & 6 & 7 \end{bmatrix}, \qquad Q= \begin{bmatrix} 1 & 0 & 0\\ 0 & \tfrac35 & \tfrac45\\ 0 & \tfrac45 & -\tfrac35 \end{bmatrix}. $$

Then $Q$ is a Householder reflector and

$$ Q^TAQ= \begin{bmatrix} 1 & \tfrac65 & \tfrac85\\ 5 & \tfrac{56}5 & \tfrac35\\ 0 & -\tfrac25 & -\tfrac15 \end{bmatrix}, $$

which is upper Hessenberg.

## Facts & Assumptions

**Given:** The matrix $A$ and reflector $Q$ in the statement.

[L1] Every real or complex square matrix can be reduced to Hessenberg form by a
sequence of Householder similarities
([[thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form]]).

## Verification

**Proof technique:** computation.

1.1 The lower part of the first column of $A$ is $(3,4)^T$, whose Euclidean norm is $5$. The reflector $Q$ fixes the first basis vector and sends $(3,4)^T$ to $(5,0)^T$. [algebra]

2.1 Direct multiplication gives the displayed matrix $Q^TAQ$, whose $(3,1)$ entry is $0$. Therefore it has no entries below the first subdiagonal, so it is upper Hessenberg. This is the $3\times3$ instance of [L1]. [L1, step 1.1, algebra] ∎
