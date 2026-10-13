---
page: sequences-and-limits-examples
title: "Sequences and Limits: Examples and Counterexamples"
status: published
items: []
examples: [ex-the-reciprocal-of-k-plus-one-is-null,
           ex-a-rational-expression-limit,
           ex-an-alternating-null-sequence,
           ex-square-roots-diverge-to-infinity,
           ex-successive-root-differences,
           ex-changing-finitely-many-terms,
           ex-two-squeeze-computations,
           ex-subsequences-of-a-null-sequence,
           ex-absolute-value-limit,
           cex-sum-of-divergent-sequences-converges,
           cex-null-times-unbounded-need-not-be-null,
           cex-quotient-rule-needs-a-nonzero-limit,
           cex-squeeze-with-unequal-bound-limits,
           ex-geometric-sequences-all-real-ratios]
---

This companion computes with the toolkit of [[sequences-and-limits]]. It
opens with the reference null sequence $1/(k+1)$ of
[[ex-the-reciprocal-of-k-plus-one-is-null]], proved from density of
$\mathbb{Q}$ and the Archimedean property of $\mathbb{Q}$ alone, and then
spends it: a rational expression evaluated by the algebra of limits, an
oscillating null sequence that separates the sign pattern from the size of
the terms, the Archimedean divergence of $\sqrt{k}$, and the successive
differences $\sqrt{k+1}-\sqrt{k}$, which converge although both terms diverge.
Tail invariance is worked out on the classical instance of changing the first
hundred terms, and the two squeeze computations cover the standard root
squeeze and a quotient that is not presented as a sum of two known limits.

The boundary cases are carried by counterexamples, one per load-bearing
hypothesis: a null sequence times an unbounded one need not be null
(boundedness cannot be dropped from [[lem-null-times-bounded]]); the sum of
two divergent sequences can converge, so the sum rule may not be read
backwards; the quotient rule needs a nonzero limit in the denominator; and the
squeeze theorem needs the two bounds to share their limit. Two further
examples isolate the sharply true halves of the surrounding statements:
subsequences of a null sequence inherit the limit, and the absolute value of
the limit is recovered from the limit of the absolute values while the
converse fails at every nonzero limit.

The page closes with the complete classification of the geometric sequence
$r^k$ for every real ratio, from integer-power recursion and the Bernoulli and
Archimedean estimates proved on [[roots-and-rational-powers]]: null for
$|r| < 1$, constant for $r = 1$, bounded but divergent at $r = -1$, growing to
$+\infty$ for $r > 1$, and sign-alternating with $|r^k| \to +\infty$ for
$r < -1$, so that $(r^k)$ converges exactly for $-1 < r \le 1$.
