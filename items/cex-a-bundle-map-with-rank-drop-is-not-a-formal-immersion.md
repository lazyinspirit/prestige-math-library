---
id: cex-a-bundle-map-with-rank-drop-is-not-a-formal-immersion
kind: counterexample
title: "A bundle map with rank drop is not a formal immersion"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-formal-immersion-between-smooth-manifolds, def-vector-bundle-map-over-a-smooth-base-map, def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-differential-of-a-smooth-map]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery, Ch. 7 §7.4 “The Smale–Hirsch classification of immersions”, printed pp. 142–146 (Theorem 7.35, Proposition 7.39)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
dependency_level: 1
---

## Statement refuted

Let $M=N=\mathbb R^2$, $f=\mathrm{id}$, and let $F:T\mathbb R^2\to T\mathbb R^2$ be the constant bundle map over the identity given in the standard trivializations by the matrix $\mathrm{diag}(1,0)$. Then $F$ is smooth and covers $f$, but $F_x$ has rank one at every point $x$, so $(f,F)$ is not a formal immersion: fibrewise injectivity is a pointwise condition on every fibre, and it fails at every point. In particular a bundle map that is injective on a dense open set, or injective outside a proper closed subset, or of maximal rank outside a point, is not a formal immersion unless injectivity holds at every point; surjectivity of the base map or linearity of the bundle map do not substitute for the fibrewise condition.

## Facts & Assumptions

**Given:** $M=N=\mathbb R^2$, $f=\operatorname{id}_{\mathbb R^2}$, and the bundle map $F:T\mathbb R^2\to T\mathbb R^2$ over $f$ given in the standard trivializations $T\mathbb R^2\cong\mathbb R^2\times\mathbb R^2$ by the constant matrix $\operatorname{diag}(1,0)$.

[F1] A formal immersion is a pair $(f,F)$ with $f$ smooth and $F$ a smooth bundle map over $f$ whose restriction $F_x:T_xM\to T_{f(x)}N$ is injective for every $x$ ([[def-formal-immersion-between-smooth-manifolds]]).

[F2] A bundle map over $f$ is a smooth map covering $f$ and linear on each fibre; in a trivialization it is given by a matrix function of the base point ([[def-vector-bundle-map-over-a-smooth-base-map]], [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

## Counterexample

**Proof technique:** direct.

1.1 In the standard trivializations $T\mathbb R^2\cong\mathbb R^2\times\mathbb R^2$ the map $F$ reads $(x,\xi)\mapsto(x,\operatorname{diag}(1,0)\xi)=(x,(\xi_1,0))$, a smooth map covering the identity whose restriction to each fibre is linear; by [F2] it is a smooth bundle map over $f=\operatorname{id}_{\mathbb R^2}$. [F2, given]

1.2 At every $x\in\mathbb R^2$ the fibre map is $F_x=\operatorname{diag}(1,0):\mathbb R^2\to\mathbb R^2$, whose kernel contains the nonzero vector $(0,1)$; hence $F_x$ is not injective at any point. [given, algebra]

2.1 By [F1] the pair $(\operatorname{id},F)$ therefore fails the defining fibrewise-injectivity condition at every point and is not a formal immersion, although the base map is even a diffeomorphism. Injectivity on a dense open set or off a proper closed subset gives no conclusion at the remaining points: if any such fibre is noninjective, [F1] excludes a formal immersion; if all fibres are injective, the condition is satisfied. Neither surjectivity of the base map nor linearity of $F$ replaces that condition. [F1, step 1.1, step 1.2] ∎
