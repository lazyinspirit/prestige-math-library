---
id: thm-local-coordinate-formula-for-the-exterior-derivative
kind: theorem
title: "The local coordinate formula for the exterior derivative"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exterior-derivative-by-the-invariant-vector-field-formula, prop-the-exterior-derivative-is-local, prop-local-coordinate-expression-for-a-differential-form, prop-coordinate-vector-fields-commute]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

Let $(U,x^1,\ldots,x^n)$ be a smooth chart on a smooth manifold and
$\omega$ a smooth $k$-form on $U$, with $k\ge0$. Summing over increasing
$k$-tuples $I$, and writing $dx^I=dx^{i_1}\wedge\cdots\wedge dx^{i_k}$, if $\omega=\sum_I\omega_I\,dx^I$, then $$d\omega=\sum_I d\omega_I\wedge dx^I.$$

## Facts & Assumptions

**Given:** The chart and smooth form in the statement; for k=0 the empty wedge is 1.


[F2] The exterior derivative is given by the invariant vector-field formula ([[def-exterior-derivative-by-the-invariant-vector-field-formula]]).

[F3] Coordinate vector fields commute ([[prop-coordinate-vector-fields-commute]]).

[F4] The increasing coordinate wedges give a unique expansion of each smooth differential form ([[prop-local-coordinate-expression-for-a-differential-form]]).

## Proof

**Proof technique:** direct.

1.1 Evaluate the invariant formula on coordinate vector fields. By [F3] their brackets vanish. On an increasing $(k+1)$-tuple $J=(j_0,\ldots,j_k)$ the resulting value is $\sum_{a=0}^k(-1)^a\partial_{j_a}\omega_{J\setminus j_a}$. [F2, F3, F4, given]

2.1 For a function $f$, [F2] in degree zero gives $df(\partial_j)=\partial_jf$, hence $df=\sum_j\partial_jf\,dx^j$. Evaluating $\sum_I d\omega_I\wedge dx^I$ on $J$ gives exactly the alternating sum in step 1.1. Uniqueness in [F4] proves the formula. For $k\ge n$ both sides vanish in degree $k+1$; for $k=0$ it is the function formula just established. [F2, F4, step 1.1, algebra] ∎
