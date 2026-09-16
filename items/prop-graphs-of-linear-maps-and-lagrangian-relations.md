---
id: prop-graphs-of-linear-maps-and-lagrangian-relations
kind: proposition
title: Graphs of linear maps and Lagrangian relations
status: published
origin: pipeline
deps: ["thm-equivalent-characterizations-of-lagrangian-subspaces"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §4.4, Example 4.21, pp. 51--52
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Let $A:(V,\omega_V)\to(W,\omega_W)$ be linear. Its graph is Lagrangian in
$V^-\oplus W$, equipped with $-\omega_V\oplus\omega_W$, if and only if
$A$ is a symplectic isomorphism. In particular, a symplectic embedding into a
strictly larger symplectic space has an isotropic, but not Lagrangian, graph.

## Facts & Assumptions

**Given:** Symplectic vector spaces $(V,\omega_V)$ and $(W,\omega_W)$ and a linear map $A:V\to W$.

[F1] In a $2N$-dimensional symplectic space, an isotropic subspace is Lagrangian exactly when it has dimension $N$. [[thm-equivalent-characterizations-of-lagrangian-subspaces]].

## Proof

**Proof technique:** direct.

1.1 On graph vectors one has $(-\omega_V\oplus\omega_W)((u,Au),(v,Av))=-\omega_V(u,v)+\omega_W(Au,Av)$. Thus the graph is isotropic exactly when $A^*\omega_W=\omega_V$. [algebra]

2.1 If the graph is Lagrangian, [F1] and $\dim\operatorname{graph}A=\dim V$ give $2\dim V=\dim V+\dim W$, hence $\dim V=\dim W$. Step 1.1 also says $A$ preserves the forms, which makes $A$ injective by nondegeneracy; equal dimensions make it an isomorphism. [F1, step 1.1, algebra]

3.1 Conversely, if $A$ is a symplectic isomorphism, step 1.1 makes its graph isotropic and its dimension is half that of $V^-\oplus W$, so [F1] makes it Lagrangian. If instead $A$ is a symplectic embedding with $\dim W>\dim V$, step 1.1 still gives isotropy but the half-dimension equality fails. The zero spaces cause no exception. [F1, step 1.1, step 2.1] ∎
