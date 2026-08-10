---
id: cor-change-of-variables-on-bounded-open-jordan-sets
kind: corollary
title: "Change of variables on bounded open Jordan sets when both integrands are bounded and Riemann integrable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-bounded-open-jordan-sets-have-compact-grid-exhaustions, thm-change-of-variables-for-compact-jordan-sets, thm-multidimensional-integral-properties]
justified_by: []
aliases: []
landmark: false
proof_strategy: exhaustion
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, Theorem 6.1.4"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $W\subseteq\mathbb R^n$ be open, let $U$ be a bounded open Jordan set with $\overline U\subseteq W$, and let $g:W\to\mathbb R^n$ be injective and $C^1$, with invertible derivative throughout $W$. Put $V=g(U)$ and assume $V$ is a bounded open Jordan set. If $f:V\to\mathbb R$ and
$$h(x)=f(g(x))|\det Dg(x)|\quad(x\in U)$$
are both bounded and Riemann integrable on their respective Jordan sets, then
$$\int_Vf(y)\,dy=\int_Uh(x)\,dx.$$
No improper-integral convention is implicit in this statement.

## Facts & Assumptions

**Given:** The bounded open Jordan sets, map, and two bounded integrable functions in the statement.

[L1] A bounded open Jordan set has a compact grid exhaustion with vanishing-content remainder ([[lem-bounded-open-jordan-sets-have-compact-grid-exhaustions]]).

[L2] Compact-Jordan change of variables applies to every member of that exhaustion ([[thm-change-of-variables-for-compact-jordan-sets]]).

[L3] The absolute value of an integral over a Jordan set is bounded by the supremum of the integrand times the set's content ([[thm-multidimensional-integral-properties]]).

## Proof

**Proof technique:** exhaustion.

1.1 Choose the compact grid exhaustion $K_j\uparrow U$ from [L1]. For every $j$, [L2] gives the compact-set identity below. [L1, L2]
$$\int_{g(K_j)}f=\int_{K_j}h.$$

2.1 The source error is bounded by $\sup_U|h|\operatorname{cont}(U\setminus K_j)$ and tends to zero by [L1] and [L3]. [L1, L3, step 1.1]

3.1 Apply [L2] to the compact Jordan remainder $\overline U\setminus\operatorname{int}K_j$ with the constant-one function. Since $|\det Dg|$ is bounded on $\overline U$, it follows that $\operatorname{cont}(V\setminus g(K_j))\to0$. Hence [L3] makes the image error tend to zero as well. Passing to the limit in step 1.1 proves the formula. [L2, L3, step 1.1, step 2.1] ∎
