---
id: fs-singular-values-are-absolute-values-of-the-eigenvalues
kind: false-statement
title: "FALSE: The singular values of an operator are the absolute values of its eigenvalues"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-singular-value-decomposition]
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

The singular values of an operator are the absolute values of its eigenvalues.

## Facts & Assumptions

**Given:** The nilpotent matrix $N=\begin{pmatrix}0&2\\0&0\end{pmatrix}$ on $\mathbb R^2$.

[L1] Every linear map admits a singular value decomposition ([[thm-singular-value-decomposition]]).

## Refutation

**Proof technique:** direct.

1.1 The characteristic polynomial of $N$ is $x^2$, so both eigenvalues are $0$ and their absolute values are $0,0$. [algebra]

2.1 Direct multiplication gives $N^{\mathsf T}N=\operatorname{diag}(0,4)$, so the singular values are $2$ and $0$. Because $2\ne0$, the singular values are not the absolute values of the eigenvalues. [L1, step 1.1, algebra] ∎
