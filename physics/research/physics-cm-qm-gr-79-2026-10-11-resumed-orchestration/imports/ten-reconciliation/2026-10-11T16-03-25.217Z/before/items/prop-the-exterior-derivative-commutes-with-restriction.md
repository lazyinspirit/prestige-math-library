---
id: prop-the-exterior-derivative-commutes-with-restriction
kind: proposition
title: "The exterior derivative commutes with restriction"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exterior-derivative-by-the-invariant-vector-field-formula, prop-the-exterior-derivative-is-local, lem-manifold-bump-for-a-compact-set-inside-an-open-set]
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

Let $M$ be a smooth manifold, $U\subseteq M$ open, $k\ge0$,
$\omega\in\Omega^k(M)$, and $j:U\hookrightarrow M$ the inclusion. Then
$j^*(d_M\omega)=d_U(j^*\omega)$, where the subscripts specify the manifold.

## Facts & Assumptions

**Given:** The smooth manifold $M$, open subset $U$, and smooth $k$-form $\omega$ in the statement.


[F2] The invariant vector-field formula defines $d$ locally from the values of a form, vector fields, and their brackets ([[def-exterior-derivative-by-the-invariant-vector-field-formula]]).

[F3] A smooth bump equal to one near a point and supported inside a chosen chart exists ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

## Proof

**Proof technique:** direct.

1.1 Fix $p\in U$ and tangent vectors $v_0,\ldots,v_k\in T_pM=T_pU$. Choose a chart around $p$ contained in $U$, extend each vector using constant coordinate coefficients there, multiply by a bump equal to one near $p$, and extend by zero. This gives smooth fields $Y_0,\ldots,Y_k$ on $M$ with $Y_i(p)=v_i$. [F3, given, construct]

2.1 Evaluate the invariant formula for $d_M\omega$ on $Y_i$ and the formula for $d_U(\omega|_U)$ on $Y_i|_U$. Each scalar evaluation of the form restricts to the same smooth function on $U$, so its directional derivatives agree there. Brackets restrict as well: their commutators on smooth functions have identical local expressions. Thus every term in the two formulas has the same value at $p$. [F2, step 1.1, algebra]

3.1 The arbitrary tangent vectors in step 1.1 show equality of the two $(k+1)$-covectors at $p$, and arbitrary $p$ gives $d_U(\omega|_U)=(d_M\omega)|_U$. Pullback by the open inclusion is restriction because its tangent map is the identity under $T_pU=T_pM$, proving the claim. The assertion is vacuous if $U$ is empty. [step 1.1, step 2.1, given] ∎
