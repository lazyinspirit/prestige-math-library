## Assigned repair — `thm-infinite-product-criterion`

Item path: `items/thm-infinite-product-criterion.md`

Normalized final-text SHA-256 at dispatch: `f06362e6e85a0cdd12ea0ddd951f8eba54914d0c9f43dac3e96d0a669a34f27e`

Split reasons: ["body text"]

Provenance ledger: `wave8-real-analysis-absolute-convergence.provenance.jsonl`

The three Wave 8 findings ledgers and wave8-A3.md record the original defect and approved repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-infinite-product",
    "declared_target": "def-infinite-product",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-series-tail-invariance",
    "declared_target": "lem-series-tail-invariance",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-nonnegative-series-bounded-partial-sums",
    "declared_target": "thm-nonnegative-series-bounded-partial-sums",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-monotone-convergence",
    "declared_target": "thm-monotone-convergence",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "cor-monotone-converges-iff-bounded",
    "declared_target": "cor-monotone-converges-iff-bounded",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-monotone-sequence",
    "declared_target": "def-monotone-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-algebra-of-limits",
    "declared_target": "thm-algebra-of-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-limit-preserves-order",
    "declared_target": "lem-limit-preserves-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-squeeze",
    "declared_target": "thm-squeeze",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-reals-cauchy-complete",
    "declared_target": "thm-reals-cauchy-complete",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-divergence-to-infinity",
    "declared_target": "def-divergence-to-infinity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-infinite-product-criterion",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: thm-infinite-product-criterion
kind: theorem
title: "For $p_k \\ge 0$ the product $\\prod (1 + p_k)$ converges iff $\\sum p_k$ converges, with $1 + \\sum_{k<n} p_k \\le \\prod_{k<n}(1+p_k) \\le 1/\\bigl(1 - \\sum_{k<n} p_k\\bigr)$ when $\\sum_{k<n} p_k < 1$; for $0 \\le p_k < 1$ the product $\\prod (1 - p_k)$ converges iff $\\sum p_k$ converges and its partial products tend to $0$ otherwise; and $\\sum |p_k|$ convergent implies $\\prod (1+p_k)$ convergent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-infinite-product, def-series, lem-series-tail-invariance, thm-nonnegative-series-bounded-partial-sums, thm-monotone-convergence, cor-monotone-converges-iff-bounded, def-monotone-sequence, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, lem-of-inverse-positive, lem-of-abs-value, thm-algebra-of-limits, lem-limit-preserves-order, thm-squeeze, thm-reals-cauchy-complete, def-divergence-to-infinity, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Infinite product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infinite_product"
    - title: "Weierstrass product inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Weierstrass_product_inequality"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://ejwingler.people.ysu.edu/TBB-Real.pdf"
    - title: "D. Dikranjan, Analysis 478, Chapter 6"
      url: "https://people.math.binghamton.edu/dikran/478/Ch6.pdf"
pipeline_run: null
---

## Statement

Write $S_n := \sum_{k<n} p_k$ and $\Pi_n := \prod_{k<n}(1+p_k)$,
$Q_n := \prod_{k<n}(1-p_k)$ ([[def-finite-sum]], [[def-series]],
[[def-infinite-product]]).

1. **Elementary inequalities.** Let $p_k \ge 0$ for every $k$. Then for every
   $n \in \mathbb{N}$:
   $$1 + S_n \;\le\; \Pi_n, \qquad\text{and}\qquad \Pi_n \;\le\; \frac{1}{1 - S_n} \ \text{ whenever } S_n < 1 ;$$
   and if in addition $p_k \le 1$ for every $k$, then
   $$1 - S_n \;\le\; Q_n \qquad\text{and}\qquad Q_n\,\Pi_n \le 1, \ \text{ hence } \ Q_n \le \frac{1}{1 + S_n} .$$
2. **The nonnegative criterion.** Let $p_k \ge 0$ for every $k$. Then
   $\prod (1 + p_k)$ converges if and only if $\sum p_k$ converges.
3. **The $(1-p_k)$ form.** Let $0 \le p_k < 1$ for every $k$. Then
   $\prod (1 - p_k)$ converges if and only if $\sum p_k$ converges; and if
   $\sum p_k$ diverges then $Q_n \to 0$, so that no tail of the product has
   partial products with a nonzero limit.
4. **Absolute convergence.** Let $(p_k)$ be an arbitrary sequence of reals with
   $\sum |p_k|$ convergent. Then $\prod (1 + p_k)$ converges.

**No logarithm occurs anywhere.** The exponential and the logarithm, through which
these criteria are usually derived, are later in the reading order; every
inequality above is an induction on finite products. The refinement that decides
$\prod(1+p_k)$ for signed $p_k$ with $\sum p_k$ convergent, in terms of the
convergence of $\sum p_k^2$, does need the logarithm and is not stated here; see
[[rem-sums-proved-to-exist-but-not-evaluated]].

## Facts & Assumptions

**Given:** A sequence $(p_k)$ of reals, with $S_n = \sum_{k<n}p_k$, $\Pi_n = \prod_{k<n}(1+p_k)$ and $Q_n = \prod_{k<n}(1-p_k)$.

[L1] Finite sums and products: $\sum_{k<0}x_k = 0$, $\prod_{k<0}x_k = 1$, $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$, $\prod_{k<n+1}x_k = \bigl(\prod_{k<n}x_k\bigr)x_n$, splitting at an intermediate index, and $\prod_{k<n}(x_ky_k) = \bigl(\prod_{k<n}x_k\bigr)\bigl(\prod_{k<n}y_k\bigr)$; a finite product of nonnegative factors is nonnegative and of positive factors is positive ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L3] For a series of nonnegative terms: convergence is equivalent to the range of the partial sums being bounded above, the sum is then the supremum and every partial sum is at most the sum, and if the range is unbounded the partial sums diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]], [[def-divergence-to-infinity]]).

[L4] A series converges if and only if some tail series converges, and then the sum equals the initial partial sum plus the tail sum ([[lem-series-tail-invariance]]).

[L5] A nondecreasing sequence bounded above converges, and a nonincreasing sequence bounded below converges; a monotone sequence converges if and only if it is bounded ([[thm-monotone-convergence]], [[cor-monotone-converges-iff-bounded]], [[def-monotone-sequence]]).

[L6] Order and inverses: $0 < a < b$ implies $0 < 1/b < 1/a$, and $a > 0$ implies $1/a > 0$ ([[lem-of-inverse-positive]]).

[L7] Absolute value: $|xy| = |x|\,|y|$, $|x| \ge 0$, $-|x| \le x \le |x|$, and $|x + y| \le |x| + |y|$ ([[lem-of-abs-value]]).

[L8] Algebra of limits, and limits preserve non-strict inequalities holding eventually ([[thm-algebra-of-limits]], [[lem-limit-preserves-order]], [[def-real-limit]]).

[L9] The squeeze theorem ([[thm-squeeze]]).

[L10] Every Cauchy sequence of reals converges ([[thm-reals-cauchy-complete]], [[def-real-limit]]).

[L11] Convergence of an infinite product: some tail has nonvanishing factors and partial products with a nonzero limit ([[def-infinite-product]]).

## Proof

**Proof technique:** direct.

1.1 Assume $p_k \ge 0$ for every $k$. An induction gives $1 + S_n \le \Pi_n$: at $n = 0$ both sides are $1$; and if $1 + S_n \le \Pi_n$ then, since $1 + S_n \ge 1 > 0$ and $1 + p_n \ge 1 > 0$, $\Pi_{n+1} = \Pi_n(1+p_n) \ge (1+S_n)(1+p_n) = 1 + S_n + p_n + S_n p_n \ge 1 + S_{n+1}$. [given, L1, L2]

1.2 Assume further $p_k \le 1$ for every $k$. An induction gives $1 - S_n \le Q_n$: at $n=0$ both sides are $1$; and if $1 - S_n \le Q_n$ then, since $1 - p_n \ge 0$, $Q_{n+1} = Q_n(1-p_n) \ge (1-S_n)(1-p_n) = 1 - S_n - p_n + S_np_n \ge 1 - S_{n+1}$. [given, L1, L2]

1.3 Assume $p_k \ge 0$ and $\sum p_k$ convergent, with sum $L$. By [L3] and [L4] the tail sums $L - S_N$ tend to $0$, so fix $N$ with $\sum_{k \ge N} p_k < 1/2$. [given, L3, L4, choose]

1.4 Three inductions on finite products, valid for arbitrary reals $x_k, y_k, z_k$: first, $\bigl|\prod_{k<n}x_k\bigr| = \prod_{k<n}|x_k|$, from $|xy| = |x||y|$ and $|1| = 1$; second, if $0 \le x_k \le y_k$ for all $k<n$ then $\prod_{k<n}x_k \le \prod_{k<n}y_k$, since the products are nonnegative and $\prod_{k<n+1}x_k = (\prod_{k<n}x_k)x_n \le (\prod_{k<n}y_k)x_n \le (\prod_{k<n}y_k)y_n$; third, $\bigl|\prod_{k<n}(1+z_k) - 1\bigr| \le \prod_{k<n}(1+|z_k|) - 1$, since at $n=0$ both sides are $0$ and $\bigl|\prod_{k<n+1}(1+z_k) - 1\bigr| = \bigl|(\prod_{k<n}(1+z_k) - 1)(1+z_n) + z_n\bigr| \le (\prod_{k<n}(1+|z_k|) - 1)(1+|z_n|) + |z_n| = \prod_{k<n+1}(1+|z_k|) - 1$. [L1, L2, L7]

1.5 Assume $\sum |p_k|$ converges, with sum $L$, and fix $N$ with $\tau_N := \sum_{k \ge N}|p_k| < 1/2$; write $\tau_{N+n} = \sum_{k \ge N+n}|p_k|$, so $\tau_{N+n} \to 0$ and $\sum_{j<m}|p_{N+j}| \le \tau_N$ for every $m$. For $k \ge N$ we get $|p_k| \le \tau_N < 1/2$, so $1 + p_k \ge 1/2 > 0$ and every factor from $N$ on is nonzero. [given, L3, L4, L7, choose]

2.1 An induction gives: for every $n$ with $S_n < 1$, $\Pi_n(1 - S_n) \le 1$. At $n = 0$ this reads $1 \cdot 1 \le 1$. Suppose it holds at $n$ and $S_{n+1} < 1$; then $S_n \le S_{n+1} < 1$, so $\Pi_n \le 1/(1-S_n)$ by [L6], and $\Pi_{n+1} = \Pi_n(1+p_n) \le (1+p_n)/(1-S_n)$. Multiplying out, $(1+p_n)(1 - S_n - p_n) = 1 - S_n - p_nS_n - p_n^2 \le 1 - S_n$, and dividing by the positive $(1-S_n)(1-S_{n+1})$ turns this into $(1+p_n)/(1-S_n) \le 1/(1-S_{n+1})$. [given, step 1.1, L1, L2, L6]

2.2 Under the same assumption, $Q_n \Pi_n = \prod_{k<n}(1-p_k)(1+p_k) = \prod_{k<n}(1 - p_k^2) \le 1$, the last step by the induction: the empty product is $1$, and multiplying a value in $[0,1]$ by a factor $1 - p_n^2 \in [0,1]$ again gives a value in $[0,1]$. Since $\Pi_n \ge 1 + S_n \ge 1 > 0$, dividing gives $Q_n \le 1/\Pi_n \le 1/(1+S_n)$. This completes claim 1. [step 1.1, step 1.2, L1, L2, L6]

2.3 Assume $0 \le p_k < 1$ and $\sum p_k$ convergent. Fix $N$ with $\sum_{k \ge N}p_k < 1/2$ as in step 1.3. By step 1.2 applied to the shifted sequence, $U_n := \prod_{j<n}(1 - p_{N+j}) \ge 1 - \sum_{j<n}p_{N+j} \ge 1/2$ for every $n$; and $(U_n)$ is nonincreasing, each factor lying in $(0,1]$. So $(U_n)$ converges to a limit $\ge 1/2 > 0$, and every factor $1 - p_k$ is positive, hence nonzero; $\prod(1-p_k)$ converges. [step 1.2, step 1.3, L1, L5, L8, L11]

3.1 For the shifted sequence $j \mapsto p_{N+j}$, whose partial sums are at most $1/2 < 1$, step 2.1 gives $T_n := \prod_{j<n}(1+p_{N+j}) \le 1/(1 - 1/2) = 2$ for every $n$, and step 1.1 gives $T_n \ge 1$. The sequence $(T_n)$ is nondecreasing, each factor being at least $1$, so it converges to a limit $\ell$ with $1 \le \ell \le 2$; in particular $\ell \ne 0$, and every factor $1 + p_k$ is at least $1$, hence nonzero. So $\prod(1+p_k)$ converges. [step 1.1, step 2.1, step 1.3, L1, L5, L8, L11]

3.2 Assume instead $0 \le p_k < 1$ and $\sum p_k$ divergent. Then $S_n \to +\infty$ by [L3], so given a real $\varepsilon > 0$ there is $K$ with $S_n > 1/\varepsilon$ for $n \ge K$, whence $0 < 1/(1+S_n) < \varepsilon$; thus $1/(1+S_n) \to 0$. By step 2.2, $0 \le Q_n \le 1/(1+S_n)$, so $Q_n \to 0$ by the squeeze. [step 2.2, L3, L6, L9]

3.3 Put $T_n := \prod_{j<n}(1+p_{N+j})$. By step 1.4 and step 2.1 applied to the nonnegative sequence $j \mapsto |p_{N+j}|$, $|T_n| \le \prod_{j<n}(1+|p_{N+j}|) \le 1/(1-\tau_N) \le 2$; and by step 1.4 and step 1.2, $T_n \ge \prod_{j<n}(1 - |p_{N+j}|) \ge 1 - \tau_N \ge 1/2$, each factor $1 + p_{N+j} \ge 1 - |p_{N+j}| \ge 0$. [step 2.1, step 1.2, step 1.4, step 1.5, L1, L7]

4.1 Conversely assume $p_k \ge 0$ and $\prod(1+p_k)$ convergent, with $N$ as in [L11]. Since $\Pi_n = \bigl(\prod_{k<N}(1+p_k)\bigr) T_{n-N}$ for $n \ge N$ and $(T_m)$ converges, the sequence $(\Pi_n)$ converges, hence is bounded, say $\Pi_n \le M$ for all $n$. By step 1.1, $1 + S_n \le M$ for every $n$, so the partial sums of the nonnegative series $\sum p_k$ are bounded above and $\sum p_k$ converges. Claim 2 is step 3.1 together with this. [step 1.1, step 3.1, L1, L3, L5, L11]

4.2 In that situation the product diverges: for any $N$, $Q_{N+n} = \bigl(\prod_{k<N}(1-p_k)\bigr)U_n$ with $\prod_{k<N}(1-p_k) > 0$, so $U_n = Q_{N+n}/\prod_{k<N}(1-p_k) \to 0$ and no tail has partial products with a nonzero limit. With step 2.3 this proves claim 3. [step 2.3, step 3.2, L1, L8, L11]

4.3 For $m > n$, splitting the product gives $T_m = T_n \prod_{j=n}^{m-1}(1+p_{N+j})$, so $|T_m - T_n| = |T_n|\,\bigl|\prod_{j=n}^{m-1}(1+p_{N+j}) - 1\bigr| \le 2\Bigl(\prod_{j=n}^{m-1}(1+|p_{N+j}|) - 1\Bigr) \le 2\Bigl(\frac{1}{1 - \tau_{N+n}} - 1\Bigr) = \frac{2\tau_{N+n}}{1 - \tau_{N+n}} \le 4\,\tau_{N+n}$, using step 2.1 for the shifted sequence from $N+n$, whose partial sums are at most $\tau_{N+n} \le \tau_N < 1/2$. [step 2.1, step 1.4, step 1.5, step 3.3, L1, L6, L7]

5.1 Since $\tau_{N+n} \to 0$, step 4.3 makes $(T_n)$ a Cauchy sequence, so it converges, to a limit $\ell$; and $\ell \ge 1/2 > 0$ by step 3.3 and [L8]. Hence $\prod(1+p_k)$ converges, which is claim 4. [step 1.5, step 3.3, step 4.3, L8, L10, L11] ∎

## Remarks

- **Why the two bounds of claim 1 are the right pair.** The lower bound $1 + S_n \le \Pi_n$ is the Weierstrass product inequality and forces divergence of the product when $\sum p_k$ diverges; the upper bound $\Pi_n \le 1/(1-S_n)$, available once the partial sums are below $1$, forces convergence when $\sum p_k$ converges. Between them they prove claim 2 with no further input, and they are exactly what a logarithm would otherwise supply.

- **The strict inequality $p_k<1$ keeps this proof uniform, but the tail-based definition allows a slightly stronger statement.** Claim 3 remains true for $0\le p_k\le1$. If only finitely many $p_k$ equal $1$, start the product after the last zero factor; if infinitely many do, then $\sum p_k$ diverges and no tail has all factors nonzero. The stated strict form avoids this finite/infinite split.

- **Claim 4 does not identify the value, and the converse fails.** Absolute convergence of $\sum p_k$ gives convergence of $\prod(1+p_k)$, but convergence of $\sum p_k$ alone does not: the companion examples page exhibits $\sum_{j\ge0}(-1)^j/\sqrt{j+2}$ convergent while the corresponding partial products tend to $0$. What separates the two cases is the convergence of $\sum p_k^2$, a criterion that needs the logarithm and is deferred.

- **Where the Cauchy criterion enters and why nothing cheaper would do.** In claim 4 the factors have no sign, so the partial products are not monotone and [[thm-monotone-convergence]] is unavailable; the estimate of step 4.3 is a Cauchy estimate and is closed by completeness of $\mathbb{R}$.
````
