---
id: cex-an-irrational-real-action-on-the-torus-that-is-free-but-not-proper
kind: counterexample
title: A free irrational torus action that is not proper
status: published
origin: pipeline
deps: [def-free-and-proper-lie-group-actions, lem-irrational-torus-flow-is-free-with-dense-orbits, thm-finite-products-of-compact-spaces, lem-unit-interval-circle-is-a-nonempty-compact-metric-space, thm-compactness-under-continuous-maps]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Example 21.3, printed page 542
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: constructive
---

## Statement refuted

**False claim:** every smooth free action of a Lie group on a manifold is
proper and has a Hausdorff orbit quotient.

## Facts & Assumptions

**Given:** An irrational number $\alpha$ and
$\mathbb T^2=S^1\times S^1$ with its usual smooth structure.

[F1] A left action is free when all stabilizers are trivial, and it is proper
when $(t,x)\mapsto(t\cdot x,x)$ has compact inverse images of compact sets.
[[def-free-and-proper-lie-group-actions]].

[F2] For irrational $\alpha$, the displayed action is smooth and free and all
its orbits are dense. [[lem-irrational-torus-flow-is-free-with-dense-orbits]].

[F3] The wrap-metric circle $\mathbb T=[0,1)$ is compact, and finite products
of compact spaces are compact.
[[lem-unit-interval-circle-is-a-nonempty-compact-metric-space]],
[[thm-finite-products-of-compact-spaces]].

[F4] Continuous images of compact spaces are compact.
[[thm-compactness-under-continuous-maps]].

## Counterexample

**Proof technique:** constructive.

1.1 Define the $\mathbb R$-action on $\mathbb T^2$ by $$t\cdot(z,w)=\left(e^{2\pi i t}z,e^{2\pi i\alpha t}w\right).$$ By [F2], it is a smooth free left action. [given, F1, F2, construct]

2.1 Every orbit is dense by [F2]. [F2, step 1.1]

2.2 The action is not proper. The map $u\mapsto e^{2\pi i u}$ identifies the wrap-metric circle in [F3] with the complex unit circle $S^1$: their chordal distance is $|e^{2\pi i u}-e^{2\pi i v}|=2\sin(\pi d(u,v))$, so the map is a homeomorphism. Thus [F3] makes $S^1$, then $\mathbb T^2\times\mathbb T^2$, compact. The full inverse image of this compact target under the action-graph map is $\mathbb R\times\mathbb T^2$. Were it compact, its continuous projection onto $\mathbb R$ would make $\mathbb R$ compact by [F4], contrary to the open cover $\{(-n,n):n\ge1\}$, which has no finite subcover. [F1, F3, F4, step 1.1]

3.1 The quotient is not Hausdorff. Each orbit is a proper dense subset: it is dense by step 2.1. For a point $(z,w)$, choose $\theta\in\mathbb R$ with $z=e^{2\pi i\theta}$. Its orbit meets $\{1\}\times S^1$ only at the countable set $\{(1,e^{2\pi i\alpha(n-\theta)}w):n\in\mathbb Z\}$, so it cannot contain the whole circle $\{1\}\times S^1$ and is therefore proper. If the quotient were Hausdorff, a singleton orbit class would be closed and its inverse image under the quotient map would be a closed orbit, contradicting density and properness. This free, nonproper action therefore refutes both conclusions, without using any choice principle. [F1, step 2.1, step 2.2, discharge-construct: counterexample complete] ∎
