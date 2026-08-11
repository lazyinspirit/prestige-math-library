---
id: lem-riemann-stieltjes-refinement-estimate
kind: lemma
title: "Refinement and tag-change estimates for Stieltjes sums"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       def-bounded-variation-and-total-variation,
       lem-variation-additive-on-subintervals,
       def-partition-and-refinement, def-finite-sum, lem-finite-sum-laws,
       lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: true
short: "Stieltjes refinement estimate"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Ch. 3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Statement

Let $\alpha$ have bounded variation on $[a,b]$, let $P=(n,t)$ be a partition,
and let $Q$ refine $P$. If the oscillation of $f$ on
$[t_i,t_{i+1}]$ is at most $\omega_i$, then any tagged sum on $P$ and any tagged
sum on $Q$ satisfy

$$|S_Q-S_P|\le\sum_{i<n}\omega_i\operatorname{Var}_{[t_i,t_{i+1}]}(\alpha).$$

In particular, if every $\omega_i\le\omega$, the bound is
$\omega\operatorname{Var}_{[a,b]}(\alpha)$. Two tagged sums on arbitrary
partitions whose intervals all have oscillation at most $\omega$ differ by at
most $2\omega\operatorname{Var}_{[a,b]}(\alpha)$.

## Facts & Assumptions

**Given:** Functions $f,\alpha:[a,b]\to\mathbb R$, a partition $P$, a refinement $Q$, and tags on both.

[L1] Stieltjes sums are weighted finite sums of integrator increments ([[def-riemann-stieltjes-sum-and-integral]]).

[L2] Total variation bounds every sum of absolute increments and is additive on adjacent subintervals ([[def-bounded-variation-and-total-variation]], [[lem-variation-additive-on-subintervals]]).

[L3] A refinement groups its subintervals inside the coarse ones, and any two partitions have a common refinement ([[def-partition-and-refinement]]).

[L4] Finite sums group and telescope ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] The absolute value of a finite sum is at most the sum of absolute values ([[lem-of-triangle-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Inside one coarse interval $[t_i,t_{i+1}]$, the refined integrator increments telescope to $\alpha(t_{i+1})-\alpha(t_i)$. Subtract the coarse term by assigning its tag value to every refined increment. Each coefficient difference has absolute value at most $\omega_i$, so the absolute difference contributed by that block is at most $\omega_i$ times the sum of the absolute refined increments, hence at most $\omega_i\operatorname{Var}_{[t_i,t_{i+1}]}(\alpha)$. [L1, L2, L3, L4, L5]

2.1 Summing step 1.1 over the coarse blocks proves the first estimate. If $\omega_i\le\omega$, additivity of variation gives the uniform bound. The conclusions remain $0$ when the variation or the interval is $0$. [step 1.1, L2, L4, L5]

3.1 For two arbitrary partitions, pass to their common refinement and apply the uniform estimate once from each original sum to the refined sum. The triangle inequality gives the factor $2$. [step 2.1, L3, L5] ∎
