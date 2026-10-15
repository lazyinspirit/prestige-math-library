---
id: cor-two-sample-permutation-exact-under-equal-distributions
kind: corollary
title: Finite-sample exactness under equal distributions
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-studentized-two-sample-u-statistic
  - thm-finite-group-permutation-validity
  - def-identically-distributed-and-iid-random-variables
  - def-independent-random-elements
  - def-probability-measure
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - lem-coordinate-maps-and-permutations-are-measurable-on-finite-products
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, §3"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Statement

For the studentized statistic in [[def-studentized-two-sample-u-statistic]],
assume $P=Q$, $m,n\ge r$, and use the convention there when a permuted
denominator is zero. For every such finite $m,n$, the inclusive permutation
p-value is superuniform under this null. If an independent uniform $[0,1]$
variable randomizes within the tied boundary rank, the resulting permutation
p-value is exactly uniform.

## Facts & Assumptions

**Given:** Independent IID samples of sizes $m,n$ from a common probability law, the measurable coordinate-permutation action on their pooled vector, and the studentized statistic with its zero-denominator convention.

[F1] [[def-identically-distributed-and-iid-random-variables]]: the pooled observations are IID when $P=Q$.

[F2] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: the finite product law is determined by its rectangle values.

[F3] [[lem-coordinate-maps-and-permutations-are-measurable-on-finite-products]]: each coordinate permutation is measurable.

[F4] [[def-studentized-two-sample-u-statistic]]: the statistic is a measurable real function, including on zero-denominator inputs.

[F5] [[thm-finite-group-permutation-validity]]: under an invariant law, every measurable statistic on a finite measurable group action has a superuniform inclusive orbit-rank p-value and an exactly uniform tie-randomized p-value.

## Proof

**Given:** $P=Q$, independent IID samples with $m,n\ge r$, all coordinate permutations of the pooled sample, and the rank conventions in [F5].

1.1 By [F1], the pooled vector has product law $P^{\otimes N}$. On every measurable rectangle $A_1\times\cdots\times A_N$, its probability is $\prod_{i=1}^N P(A_i)$; permuting coordinates merely reorders these factors. By uniqueness in [F2], the product law is invariant under every coordinate permutation. [F1, F2, given, algebra]

2.1 The symmetric group on $N$ coordinates is finite and acts by measurable maps by [F3]. The statistic is measurable on the entire pooled sample space by [F4], including any zero-denominator permutation. Thus the hypotheses of [F5] hold for this action and invariant law. [F3, F4, F5, step 1.1]

3.1 Apply [F5] to conclude that the inclusive p-value is superuniform and the independent-uniform tie-randomized p-value is uniform on $[0,1]$. The result is finite-sample and does not require a nondegenerate first projection. [F5, step 2.1] ∎
