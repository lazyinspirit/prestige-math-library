---
id: prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold
kind: proposition
title: "Every Morse function admits a complete downward gradient-like field on a closed manifold"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-downward-gradient-like-vector-field, def-morse-function-and-excellent-morse-function, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Proposition 13.6"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Statement

If $M$ is a closed smooth manifold and $f:M\to\mathbb R$ is Morse, then
$f$ admits a complete downward gradient-like vector field.

## Facts & Assumptions

**Given:** A closed smooth manifold $M$ and a Morse function $f:M\to\mathbb R$.

[F1] $f$ has finitely many critical points ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

[F2] Every smooth vector field on a compact manifold is complete ([[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]]).

[F3] A downward gradient-like field must have strict descent off the critical set and the stated Morse-coordinate model at every critical point ([[def-downward-gradient-like-vector-field]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], choose pairwise disjoint Morse-coordinate neighbourhoods of the finitely many critical points, and smaller neighbourhoods inside them. On each smaller neighbourhood prescribe the local field in [F3]. [F1, F3, choose]

2.1 On the complement of the smaller neighbourhoods, $df$ is nowhere zero. In each coordinate patch choose a vector $Y$ with $df(Y)<0$; a partition of unity and cutoffs that equal one on the smaller neighbourhoods patch these choices with the prescribed local fields to a smooth $X$ satisfying both clauses of [F3]. [F3, step 1.1, construct]

3.1 The resulting $X$ is smooth on the compact manifold $M$, so [F2] makes it complete. Therefore it is the required complete downward gradient-like field. [F2, step 2.1] ∎
