---
id: ex-shared-expression-forward-and-reverse-graph
kind: example
title: "Forward and reverse derivatives on a shared-expression graph"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program, thm-forward-mode-computes-directional-derivative, thm-reverse-mode-computes-gradient]
justified_by: []
proof_strategy: direct
generation:
  role: example
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §8.3"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
dependency_level: 3
---

## Example

Consider the real-arithmetic graph
$$z_1=x+y,\qquad z_2=z_1z_1,\qquad z_3=xy,\qquad f=z_2+z_3.$$
At $(x,y)=(1,2)$ it has output $f=11$. Both forward and reverse mode should give gradient $(8,7)$; the repeated parent slot in $z_2$ tests that its two edge contributions are both accumulated.

## Facts & Assumptions

**Given:** The graph and input $(x,y)=(1,2)$.

[F1] [[def-finite-straight-line-computational-program]]: repeated parent slots count as separate edges in the finite real-arithmetic graph.

[F2] [[thm-forward-mode-computes-directional-derivative]]: forward mode returns $Df(x,y)(u,v)$ for any direction $(u,v)$.

[F3] [[thm-reverse-mode-computes-gradient]]: reverse mode returns the exact input gradient of the scalar graph output.

## Proof

**Proof technique:** direct tape evaluation.

1.1 The primal values are $z_1=1+2=3$, $z_2=3\cdot3=9$, $z_3=1\cdot2=2$, and $f=z_2+z_3=11$. [F1, given, algebra]

2.1 For direction $(u,v)$, forward mode gives $\dot z_1=u+v$, $\dot z_2=z_1\dot z_1+\dot z_1z_1=6(u+v)$, $\dot z_3=yu+xv=2u+v$, hence $\dot f=8u+7v$. By [F2], the gradient is $(8,7)$. [F1, F2, step 1.1, algebra]

2.2 In reverse mode, seed $\bar f=1$, so $\bar z_2=\bar z_3=1$. The product $z_3=xy$ adds $2$ to $\bar x$ and $1$ to $\bar y$. The repeated slots in $z_2=z_1z_1$ add $z_1+z_1=6$ to $\bar z_1$; then $z_1=x+y$ adds $6$ to each input. The total input cotangents are $(8,7)$, consistent with [F3]. [F1, F3, step 1.1, algebra]

3.1 The forward value $11$ and both derivative calculations agree with the stated output and gradient. [step 1.1, step 2.1, step 2.2] ∎
