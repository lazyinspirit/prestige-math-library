---
id: lem-finite-jordan-cover-sum-bounds
kind: lemma
title: "Finite Jordan covers bound upper integrals, while interior-disjoint Jordan subfamilies bound lower integrals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-riemann-integral-over-a-jordan-set, thm-multidimensional-integral-properties, thm-jordan-content-and-indicator-integrability, thm-jordan-boundary-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, Lemma 5.5.1"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $E\subseteq\mathbb R^n$ be a bounded Jordan set, and let $h:E\to[0,\infty)$ be bounded and Riemann integrable.

1. If Jordan sets $E_1,\ldots,E_N$ cover $E$, and each $M_i\ge0$ satisfies $M_i\ge\sup_{E\cap E_i}h$ whenever that intersection is nonempty, then
   $$\int_Eh\le\sum_{i=1}^N M_i\operatorname{cont}(E_i).$$
2. If Jordan sets $F_1,\ldots,F_N$ lie in $E$ and have pairwise disjoint interiors, and each real $m_i$ satisfies $m_i\le\inf_{F_i}h$ whenever $F_i$ is nonempty, then
   $$\sum_{i=1}^N m_i\operatorname{cont}(F_i)\le\int_Eh.$$

For an arbitrary bounded integrable real $h$ and a **nonempty** Jordan set $F\subseteq E$,
$$\left|\int_Fh\right|\le \sup_F|h|\operatorname{cont}(F).$$

## Facts & Assumptions

**Given:** The Jordan sets and bounded integrable function in the statement.

[L1] On a bounding rectangle, the Riemann integral is linear, monotone, and bounded by the integral of the absolute value ([[thm-multidimensional-integral-properties]]); zero extension transfers these properties to Jordan-set integrals.

[L2] The indicator of a bounded Jordan set is Riemann integrable with integral equal to its content ([[thm-jordan-content-and-indicator-integrability]]), and a bounded set is Jordan measurable exactly when its boundary has content zero ([[thm-jordan-boundary-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Extend all functions by zero to one bounding rectangle. The indicators in [L2] are integrable, and the nonnegativity of every $M_i$ makes the following inequality valid both on and off $E$. Monotonicity and finite linearity from [L1] give the cover bound, because each indicator integral is the content of its Jordan set: $$h\le\sum_{i=1}^N M_i\mathbf1_{E_i}.$$ [L1, L2, given]

1.2 The restriction of $h$ to each $F_i$ is integrable: away from grid cells meeting $\partial F_i$ its Darboux gap is inherited from $h$, while [L2] makes the total volume of boundary cells arbitrarily small. Hence $\int_{F_i}h\ge m_i\operatorname{cont}(F_i)$ by [L1]. Pairwise interior-disjoint Jordan sets intersect only on their content-zero boundaries, so the sum of their zero-extended restrictions equals the restriction to their union outside a content-zero set. The same boundary-cell argument and linearity [L1] therefore add these integrals without overcounting; their union lies in $E$, and $h\ge0$, giving the lower bound. [L1, L2]

2.1 The boundary-cell argument in step 1.2 also makes the restriction of a signed integrable $h$ to $F$ integrable. A nonempty $F$ makes $\sup_F|h|$ a real number, since $h$ is bounded. On $F$, the inequalities $-|h|\le h\le|h|\le\sup_F|h|$ and [L1], together with the indicator identity in [L2], give the last estimate. [L1, L2, step 1.2] ∎
