---
id: prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor
kind: proposition
title: "The coordinate formula for the Lie derivative of a contravariant tensor"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lie-derivative-is-a-derivation-of-the-tensor-algebra, prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields, prop-coordinate-formula-for-the-lie-bracket, prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components]
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

Let $M$ be a smooth manifold, $(U,x^1,\ldots,x^n)$ a smooth chart,
$X$ a smooth vector field on $M$, and $k\ge0$. For a smooth contravariant
$k$-tensor field $T=T^{i_1\cdots i_k}\partial_{i_1}\otimes\cdots\otimes\partial_{i_k}$ on $U$, $$ (\mathcal L_XT)^{i_1\cdots i_k}=X^j\partial_jT^{i_1\cdots i_k}-\sum_{a=1}^k(\partial_jX^{i_a})T^{i_1\cdots j\cdots i_k}. $$

Repeated coordinate indices are summed from $1$ to $n$; the $j$ in the
$a$th correction term replaces the $a$th index. For $k=0$ the correction
sum is empty and the formula reads $\mathcal L_XT=X(T)$.

## Facts & Assumptions

**Given:** The smooth manifold, chart, smooth vector field $X$, and smooth tensor field $T$ in the statement.

[F1] The preceding result states that The Lie derivative obeys $\mathcal L_X(S\otimes T)=(\mathcal L_XS)\otimes T+S\otimes(\mathcal L_XT)$ and commutes with every natural contraction. ([[thm-lie-derivative-is-a-derivation-of-the-tensor-algebra]]).

[F2] On smooth functions, $\mathcal L_Xf=Xf$, and on vector fields, $\mathcal L_XY=[X,Y]$ ([[prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields]]).

[F3] The coordinate formula for $[X,Y]$ differentiates the coordinate coefficients of $X$ and $Y$ ([[prop-coordinate-formula-for-the-lie-bracket]]).

## Proof

**Proof technique:** direct.

1.1 Apply the tensor derivation law to the coordinate tensor expansion of $T$. [F1, given]

2.1 The coordinate bracket formula and $\mathcal L_X\partial_i=[X,\partial_i]$ give $\mathcal L_X\partial_i=-(\partial_iX^j)\partial_j$.  The coefficient derivative is $X^j\partial_jT^{i_1\cdots i_k}$, and applying the preceding identity in each tensor slot supplies the displayed minus terms. [F2, F3, step 1.1, given] ∎
