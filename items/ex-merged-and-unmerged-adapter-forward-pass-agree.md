---
id: ex-merged-and-unmerged-adapter-forward-pass-agree
kind: example
title: "Merged and unmerged adapter forward passes agree"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [thm-low-rank-adapter-merging-and-gradients]
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

Let $d=k=2$, $r=1$, $W_0=I_2$, $c=2$, $A=(1,2)$, $B=(3,4)^{\mathsf T}$, and $x=(1,1)^{\mathsf T}$. The merged matrix is $W_0+cBA=\begin{pmatrix}7&12\\8&17\end{pmatrix}$, and both the merged and unmerged forward passes return $(19,25)^{\mathsf T}$.

## Facts & Assumptions

**Given:** The specified matrices, scale, and input vector.

[F1] [[thm-low-rank-adapter-merging-and-gradients]]: for every input $x$, $W_0x+cB(Ax)=(W_0+cBA)x$.

## Verification

1.1 Multiplication gives $BA=\begin{pmatrix}3&6\\4&8\end{pmatrix}$, so $W_0+2BA=\begin{pmatrix}7&12\\8&17\end{pmatrix}$ and $(W_0+2BA)x=(19,25)^{\mathsf T}$. [given, algebra]

2.1 In the unmerged calculation, $W_0x=(1,1)^{\mathsf T}$ and $Ax=3$, so $W_0x+2B(Ax)=(1,1)^{\mathsf T}+2(3,4)^{\mathsf T}3=(19,25)^{\mathsf T}$, in agreement with [F1]. [given, F1, step 1.1, algebra] ∎
