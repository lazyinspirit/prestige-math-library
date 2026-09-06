---
id: prop-proper-morse-slabs-give-complete-connecting-trajectories
kind: proposition
title: "Proper Morse slabs prevent finite-time escape of connecting trajectories"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-proper-smooth-function-and-compact-morse-slab, def-negative-gradient-trajectory-of-a-morse-function, lem-negative-gradient-energy-identity, thm-unique-maximal-integral-curve-through-each-point, thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, §13.1"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Statement

Let $\gamma:I\to M$ be a maximal negative-gradient trajectory. If its image is
contained in a compact Morse slab $f^{-1}([a,b])$, then $I=\mathbb R$.
Consequently, this applies to any trajectory already known to have endpoint
levels in $[a,b]$ and to remain in that slab; it is not a blanket
noncompact-completeness assertion.

## Facts & Assumptions

**Given:** A maximal negative-gradient trajectory $\gamma:I\to M$ with image in the compact slab $K=f^{-1}([a,b])$.

[F1] A compact Morse slab is a compact inverse image $f^{-1}([a,b])$ ([[def-proper-smooth-function-and-compact-morse-slab]]).

[F2] The energy identity makes $f\circ\gamma$ nonincreasing ([[lem-negative-gradient-energy-identity]]).

[F3] Near every point of $M$, the vector field has unique integral curves on a uniform local time interval ([[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]).

[F4] A maximal integral curve cannot have a genuine extension ([[thm-unique-maximal-integral-curve-through-each-point]]).

## Proof

**Proof technique:** direct.

1.1 Suppose the right endpoint $T$ of $I$ were finite. The local flow neighbourhoods supplied by [F3] cover the compact set $K$ in [F1], so finitely many suffice; their time radii have a positive minimum $\varepsilon$. [F1, F3, assume-contra]

2.1 Choose $t\in I$ with $T-t<\varepsilon$. Since $\gamma(t)\in K$, the corresponding local solution from [F3] extends $\gamma$ beyond $T$; uniqueness identifies it with $\gamma$ on the overlap, contradicting [F4]. [F3, F4, step 1.1, choose, discharge-contradiction]

3.1 The same argument at the left endpoint proves $I=\mathbb R$. If endpoint levels lie in $[a,b]$, [F2] verifies the usual monotone trapping in that slab once the trajectory is known to remain between those levels. [F2, step 2.1] ∎
