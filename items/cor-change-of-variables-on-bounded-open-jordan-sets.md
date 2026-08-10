---
id: cor-change-of-variables-on-bounded-open-jordan-sets
kind: corollary
title: "Change of variables on bounded open Jordan sets when both integrands are bounded and Riemann integrable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-bounded-open-jordan-sets-have-compact-grid-exhaustions, thm-change-of-variables-for-compact-jordan-sets, thm-multidimensional-integral-properties, def-c-one-map-and-local-inverse, cor-determinant-is-a-polynomial-in-the-matrix-entries, thm-componentwise-limits-and-continuity, thm-extreme-value-metric]
justified_by: []
aliases: []
landmark: false
proof_strategy: exhaustion
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, Theorem 5.5.7"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $W\subseteq\mathbb R^n$ be open, let $U$ be a bounded open Jordan set with $\overline U\subseteq W$, and let $g:W\to\mathbb R^n$ be injective and $C^1$, with invertible derivative throughout $W$. Put $V=g(U)$ and assume $V$ is a bounded open Jordan set. If $f:V\to\mathbb R$ and
$$h(x)=f(g(x))|\det Dg(x)|\quad(x\in U)$$
are both bounded and Riemann integrable on their respective Jordan sets, then
$$\int_Vf(y)\,dy=\int_Uh(x)\,dx.$$
No improper-integral convention is implicit in this statement.

## Facts & Assumptions

**Given:** The bounded open Jordan sets, map, and two bounded integrable functions in the statement.

[L1] A bounded open Jordan set has a compact grid exhaustion with vanishing-content remainder ([[lem-bounded-open-jordan-sets-have-compact-grid-exhaustions]]).

[L2] Compact-Jordan change of variables applies to every member of that exhaustion ([[thm-change-of-variables-for-compact-jordan-sets]]).

[L3] On a bounding rectangle, the absolute value of an integral is bounded by the integral of the absolute value ([[thm-multidimensional-integral-properties]]); zero extension gives the corresponding supremum-times-content bound on a Jordan subset.

[L4] For a $C^1$ map the derivative entries are continuous ([[def-c-one-map-and-local-inverse]]); the determinant is a polynomial in those entries ([[cor-determinant-is-a-polynomial-in-the-matrix-entries]]), finite algebra preserves continuity ([[thm-componentwise-limits-and-continuity]]), and a continuous real function on a nonempty compact metric space is bounded ([[thm-extreme-value-metric]]).

## Proof

**Proof technique:** exhaustion.

1.1 If $U=\emptyset$, then $V=\emptyset$ and both integrals are $0$. Otherwise choose the compact grid exhaustion $K_j\uparrow U$ from [L1]. For every $j$, [L2] gives $$\int_{g(K_j)}f=\int_{K_j}h.$$ [L1, L2, given]

2.1 A bound $M_h$ for $|h|$ gives source error at most $M_h\operatorname{cont}(U\setminus K_j)$, which tends to zero by [L1] and [L3]. [L1, L3, given, step 1.1]

3.1 The compact set $\overline U$ is nonempty, and [L4] gives a bound $M_D$ for $|\det Dg|$ on it. Apply [L2] to the compact Jordan remainder $\overline U\setminus\operatorname{int}K_j$ with the constant-one function. Its content tends to zero with $\operatorname{cont}(U\setminus K_j)$, so $\operatorname{cont}(V\setminus g(K_j))\le M_D\operatorname{cont}(\overline U\setminus\operatorname{int}K_j)\to0$. A bound for $|f|$ and [L3] make the image error tend to zero as well. Passing to the limit in step 1.1 proves the formula. [L2, L3, L4, given, step 1.1, step 2.1] ∎
