---
id: lem-finite-straight-line-program-defines-c2-map
kind: lemma
title: "A finite straight-line C2 program defines a C2 map on each fixed branch"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program, lem-finite-straight-line-program-defines-c1-map, thm-chain-sum-product-and-composition-rules-for-banach-derivatives]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §8.4.1"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
dependency_level: 2
---

## Statement

If every primitive of a finite straight-line program is $C^2$ on the selected open branch domains, then the real-arithmetic scalar output is $C^2$ on each fixed strict branch.

## Facts & Assumptions

**Given:** The finite graph has $C^2$ primitive maps on its selected open branch domains.

[F1] [[def-finite-straight-line-computational-program]]: nodes are finite and topologically ordered; each primitive is a finite-dimensional map, and $C^2$ means that its derivative map is $C^1$.

[F2] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: compositions of differentiable maps obey the chain rule, and products under bounded bilinear maps obey the product rule. In particular this applies to multiplication of finite-dimensional linear maps.

[F3] [[lem-finite-straight-line-program-defines-c1-map]]: the admissible input domain is open on each fixed strict branch.

## Proof

**Proof technique:** induction on the operation order.

1.1 Each input coordinate map is linear and has constant derivative, so it is $C^2$. Suppose all parent-node maps of operation $j$ are $C^2$. The tuple $g_j$ of parent values is $C^2$, since it is a finite product of their coordinate maps; its domain is open by [F3]. [F1, F3, given, algebra]

2.1 Write $z_j=\phi_j\circ g_j$. By [F2], $Dz_j=(D\phi_j\circ g_j)Dg_j$. The map $D\phi_j$ is $C^1$ by the $C^2$ hypothesis, and $g_j$ is $C^1$, so $D\phi_j\circ g_j$ is $C^1$ by the chain rule. The derivative map $Dg_j$ is $C^1$ because $g_j$ is $C^2$. Matrix multiplication is a bounded bilinear map in finite dimensions, so the product rule in [F2] makes $Dz_j$ $C^1$. Thus $z_j$ is $C^2$ by the definition in [F1]. [F1, F2, step 1.1]

3.1 Induction through the finite operation list gives $C^2$ for every operation value. The scalar output is therefore $C^2$ whether it is one of these values or an input coordinate projection. On a strict branch the selected primitive maps stay fixed on an open neighborhood; no claim is made at branch switches. [F1, step 1.1, step 2.1] ∎
