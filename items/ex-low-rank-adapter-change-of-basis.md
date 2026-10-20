---
id: ex-low-rank-adapter-change-of-basis
kind: example
title: "A change of basis gives different factors with the same adapter update"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [thm-low-rank-adapter-factorization-ambiguity]
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Take $d=k=2$, $r=1$, $c=1$, $W_0=0$, $B=(1,2)^{\mathsf T}$, and $A=(3,4)$. Then

$$BA=\begin{pmatrix}3&4\\6&8\end{pmatrix}.$$

The invertible one-dimensional change of basis $M=(3)$ gives $B'=BM=(3,6)^{\mathsf T}$ and $A'=M^{-1}A=(1,4/3)$. These different factors produce the same adapter update.

## Facts & Assumptions

**Given:** The specified matrices and the invertible scalar $M=3$.

[F1] [[thm-low-rank-adapter-factorization-ambiguity]]: for every invertible $M$, the transformed factors $BM$ and $M^{-1}A$ represent the same update.

## Verification

1.1 Direct multiplication gives $BA=\begin{pmatrix}3&4\\6&8\end{pmatrix}$. [given, algebra]

2.1 Since $M=3$ is invertible, $B'=(3,6)^{\mathsf T}$ and $A'=(1,4/3)$, and direct multiplication gives $B'A'=\begin{pmatrix}3&4\\6&8\end{pmatrix}=BA$, as also guaranteed by [F1]. [given, F1, step 1.1, algebra] ∎
