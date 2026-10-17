---
id: lem-finite-straight-line-program-defines-c1-map
kind: lemma
title: "A finite straight-line C1 program defines a C1 map on each fixed strict branch"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program, def-c-one-map-and-local-inverse, thm-chain-rule-for-total-derivatives, thm-total-differentiability-gives-a-local-linear-bound-and-continuity]
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
dependency_level: 1
---

## Statement

For a finite straight-line program whose primitives are $C^1$, the recursively defined admissible input domain is open on each fixed strict branch. The scalar output $f$ is $C^1$ there, and its total derivative is obtained by the ordinary chain rule through the primitive maps.

## Facts & Assumptions

**Given:** The finite topologically ordered graph and its $C^1$ primitive maps.

[F1] [[def-finite-straight-line-computational-program]]: each node reads only earlier parent slots, each primitive is $C^1$ on an open domain, and the admissible input set requires every parent tuple to lie in that domain.

[F2] [[def-c-one-map-and-local-inverse]]: a map is $C^1$ when it is totally differentiable at every point and its derivative matrix varies continuously.

[F3] [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]: total differentiability at a point implies continuity there.

[F4] [[thm-chain-rule-for-total-derivatives]]: if $g$ is totally differentiable at $f(a)$ and $f$ is totally differentiable at $a$, then $g\circ f$ is totally differentiable at $a$, with derivative $Dg(f(a))Df(a)$.

## Proof

**Proof technique:** induction on the operation order.

1.1 Begin with the open input domain $\mathbb R^n$, whose coordinate maps are continuous and $C^1$. Suppose the values through node $j-1$ are defined and continuous on an open set $\Omega_{j-1}$. The parent tuple $g_j(x)=(z_{p_{j,1}}(x),\ldots,z_{p_{j,r_j}}(x))$ is continuous there. Thus $\Omega_j:=\{x\in\Omega_{j-1}:g_j(x)\in U_j\}$ is open in $\Omega_{j-1}$, hence open in $\mathbb R^n$, because $U_j$ is open. This proves by finite induction that the full admissible domain is open. [F1, F3, given, construct]

2.1 For each operation $j$, assume its parent-node maps are $C^1$ on $\Omega_j$. Their tuple $g_j$ is $C^1$ componentwise. Since $z_j=\phi_j\circ g_j$, [F4] gives $Dz_j(x)=D\phi_j(g_j(x))Dg_j(x)$. Both matrix factors vary continuously because $\phi_j$ and the parent maps are $C^1$; hence $Dz_j$ is continuous and $z_j$ is $C^1$ by [F2]. Thus every operation value is $C^1$; the scalar output is $C^1$ whether it is one of these operation values or an input coordinate projection. [F1, F2, F4, step 1.1, algebra]

3.1 On a strict piecewise branch, the branch label is fixed on the open branch region and its primitive formula is $C^1$; steps 1.1–2.1 therefore apply unchanged on that region. At a boundary the definition in [F1] returns NONDIFFERENTIABLE, so no derivative assertion is made there. [F1, step 2.1] ∎
