---
id: lem-finite-jordan-cover-sum-bounds
kind: lemma
title: "Finite Jordan covers bound upper integrals, while interior-disjoint Jordan subfamilies bound lower integrals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-riemann-integral-over-a-jordan-set, thm-multidimensional-integral-properties, cor-jordan-content-finite-additivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, §§5.2 and 6.1"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $E\subseteq\mathbb R^n$ be a bounded Jordan set and let $h:E\to[0,\infty)$ be bounded and Riemann integrable.

1. If Jordan sets $E_1,\ldots,E_N$ cover $E$, and $M_i\ge\sup_{E\cap E_i}h$ whenever that intersection is nonempty, then
   $$\int_Eh\le\sum_{i=1}^N M_i\operatorname{cont}(E_i).$$
2. If Jordan sets $F_1,\ldots,F_N$ lie in $E$ and have pairwise disjoint interiors, and $m_i\le\inf_{F_i}h$, then
   $$\sum_{i=1}^N m_i\operatorname{cont}(F_i)\le\int_Eh.$$

For an arbitrary bounded integrable real $h$ and a Jordan set $F\subseteq E$,
$$\left|\int_Fh\right|\le \sup_F|h|\operatorname{cont}(F).$$

## Facts & Assumptions

**Given:** The Jordan sets and bounded integrable function in the statement.

[L1] The Riemann integral over Jordan sets is linear, monotone, and bounded by the integral of the absolute value ([[thm-multidimensional-integral-properties]]).

[L2] Jordan content and integration are finitely additive across Jordan pieces whose overlaps have content zero ([[cor-jordan-content-finite-additivity]]).

## Proof

**Proof technique:** direct.

1.1 Extend all functions by zero to one bounding rectangle and compare the cover indicators pointwise. [L1, given]
$$h\le\sum_{i=1}^N M_i\mathbf1_{E_i}.$$
Monotonicity and finite linearity from [L1] give the cover bound, since the integral of each indicator is the content of its Jordan set. Overlaps only make the right side larger.

1.2 Pairwise interior-disjoint Jordan sets can intersect only on their boundaries, so their overlaps have content zero. On their union, $h\ge\sum_i m_i\mathbf1_{F_i}$ outside those null overlaps. Finite additivity [L2] and monotonicity [L1] yield the lower bound. [L1, L2]

2.1 For signed $h$, the pointwise inequalities $-|h|\le h\le|h|\le(\sup_F|h|)\mathbf1_F$ on $F$ give the last estimate by [L1]. This separate estimate is why the cover clauses need no invalid signed-supremum comparison. [L1] ∎
