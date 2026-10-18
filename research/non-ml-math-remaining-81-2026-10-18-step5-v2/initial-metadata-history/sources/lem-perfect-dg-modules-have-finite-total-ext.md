---
id: lem-perfect-dg-modules-have-finite-total-ext
kind: lemma
title: "Perfect dg modules have finite total Ext"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-toen-locally-finite-dg-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §3"
      url: "https://arxiv.org/pdf/math/0501343v4"
---

## Statement

Let $\mathcal T$ be a locally finite dg-category over $\mathbb F_q$ in the sense of [[def-toen-locally-finite-dg-category]]. For any two perfect right dg $\mathcal T$-modules $x,y$, the graded vector space
$$
\bigoplus_{i\in\mathbb Z}\operatorname{Ext}^i_{\mathcal T}(x,y)
$$
is finite-dimensional. In particular, every Ext group is finite and all but finitely many vanish.

## Facts & Assumptions

**Given:** A locally finite dg-category $\mathcal T$ and perfect modules $x,y$.

[F1] The complexes $\mathcal T(a,b)$ have finite-dimensional cohomology in only finitely many degrees; perfect modules are formed from representables by finitely many shifts, finite sums, cones, and retracts ([[def-toen-locally-finite-dg-category]]).

## Proof

1.1 For representables $h_a=\mathcal T(-,a)$ and $h_b=\mathcal T(-,b)$, evaluation at $1_a$ identifies the dg Hom complex $\underline{\operatorname{Hom}}(h_a,h_b)$ with $\mathcal T(a,b)$. Indeed, a module map $\phi:h_a\to h_b$ is determined by $\phi_a(1_a)$, and for any $\gamma:c\to a$ naturality forces $\phi_c(\gamma)=\phi_a(1_a)\circ\gamma$; conversely composition by any homogeneous element of $\mathcal T(a,b)$ defines such a map and respects the differential. The standard projective presentation in [F1] computes derived Hom by this dg Hom complex, so $\bigoplus_i\operatorname{Ext}^i(h_a,h_b)$ is finite-dimensional. [F1, construct]

2.1 Fix $x=h_a$. Shifts and finite sums of the second argument preserve finite total Ext. If $y_1\to y_2\to y_3\to y_1[1]$ is a triangle, applying $\operatorname{Hom}_{\mathcal D(\mathcal T)}(h_a,-[i])$ gives an exact sequence; each $\operatorname{Ext}^i(h_a,y_2)$ is a subquotient of the neighboring finite groups, and outside their finite degree range it is zero. Direct summands give subgroups. Induction through the finite construction of a perfect $y$ proves the claim for $(h_a,y)$. [F1, step 1.1, algebra]

3.1 For fixed perfect $y$, the contravariant long exact Hom sequence gives the same closure under shifts, finite sums, cones, and retracts in the first argument. Induction through the finite construction of $x$ extends step 2.1 to every pair of perfect modules. The finite support in degrees is preserved at each finite construction step, proving the statement without a choice of resolutions or simultaneous representatives. [F1, step 2.1, algebra] ∎
