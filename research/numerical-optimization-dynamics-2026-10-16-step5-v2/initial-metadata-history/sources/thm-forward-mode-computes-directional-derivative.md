---
id: thm-forward-mode-computes-directional-derivative
kind: theorem
title: "Forward mode computes the exact directional derivative of the real-arithmetic graph"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program, lem-finite-straight-line-program-defines-c1-map, alg-forward-mode-automatic-differentiation, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §§8.3–8.4.1"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
dependency_level: 2
---

## Statement

Let $f:\Omega\to\mathbb R$ be the output of a finite $C^1$ program on a fixed strict branch. For every admissible $x\in\Omega$ and direction $v\in\mathbb R^n$, the forward-mode algorithm returns $Df(x)v$.

## Facts & Assumptions

**Given:** The graph, admissible input, fixed strict branch, and direction $v$.

[F1] [[def-finite-straight-line-computational-program]]: each operation node is a primitive applied to its earlier parent values; the scalar output is either an input coordinate or an operation value.

[F2] [[lem-finite-straight-line-program-defines-c1-map]]: every node is $C^1$ on the fixed branch, with derivative given by the chain rule through its parents.

[F3] [[alg-forward-mode-automatic-differentiation]]: input tangents are $v_i$, and each node tangent is the local derivative applied to its parent tangents.

[F4] [[thm-chain-rule-for-total-derivatives]]: $D(g\circ h)(x)=Dg(h(x))Dh(x)$ under the stated finite-dimensional differentiability hypotheses.

## Proof

**Proof technique:** induction on the topological order.

1.1 For each input coordinate map $x\mapsto x_i$, its directional derivative in direction $v$ is $v_i$, exactly the initialized tangent in [F3]. [F1, F3, given, algebra]

2.1 Suppose the tangent at every parent of node $j$ equals the derivative of that parent value in direction $v$. The node map is the composition of its primitive with the tuple of parent maps. By [F2] and [F4], its directional derivative is $D\phi_j$ applied to that parent-direction tuple, which is exactly the tangent assigned by [F3]. Finite induction proves this identity for every node. [F1, F2, F3, F4, step 1.1, algebra]

3.1 If $o$ is an operation node, step 2.1 gives $\dot z_o=Df(x)v$. If $o$ is input coordinate $i$, then $f(x)=x_i$ and step 1.1 gives the returned tangent $\dot x_i=v_i=Df(x)v$. Thus in either case the algorithm returns the asserted directional derivative. [F1, step 1.1, step 2.1] ∎
