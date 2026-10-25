---
id: fs-operator-norm-is-the-largest-eigenvalue-modulus
kind: false-statement
title: "FALSE: The operator norm is always the largest modulus of an eigenvalue"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-operator-norm-is-the-largest-singular-value]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

The operator norm is always the largest modulus of an eigenvalue.

## Facts & Assumptions

**Given:** The nilpotent matrix $N=\begin{pmatrix}0&2\\0&0\end{pmatrix}$ on $\mathbb R^2$.

[L1] The operator norm equals the largest singular value ([[thm-operator-norm-is-the-largest-singular-value]]).

## Refutation

**Proof technique:** direct.

1.1 The characteristic polynomial of $N$ is $x^2$, so every eigenvalue of $N$ has modulus $0$. [algebra]

2.1 For a unit vector $(x,y)^{\mathsf T}$, one has $\lVert N(x,y)^{\mathsf T}\rVert=2|y|\le2$, with equality at $(0,1)^{\mathsf T}$. Thus $\lVert N\rVert=2$, which by [L1] is also its largest singular value. Because $2\ne0$, the operator norm is not the largest eigenvalue modulus. [L1, step 1.1, algebra] ∎
