## Selection reasons

- critical risk (18): 18 declared dependencies; 18 cited facts; 15 numbered proof steps; biconditional / both-direction claim; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `thm-infinite-product-criterion`

Normalized current SHA-256: `f06362e6e85a0cdd12ea0ddd951f8eba54914d0c9f43dac3e96d0a669a34f27e`

The complete current item follows, including frontmatter:

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

## Wave 8 provenance row for the target

```json
{
  "id": "thm-infinite-product-criterion",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://ejwingler.people.ysu.edu/TBB-Real.pdf",
    "https://people.math.binghamton.edu/dikran/478/Ch6.pdf"
  ],
  "rationale": "Thomson–Bruckner–Bruckner supports the positive product/series criterion, while Binghamton Chapter 6 supplies the logarithmic comparison behind the signed refinement. The item adds quantitative Weierstrass bounds, a (1-p_k) form, and an elementary local proof.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-real-analysis-absolute-convergence.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the",
      "uses": [
        "1.1",
        "1.2",
        "1.4",
        "2.1",
        "2.2",
        "2.3",
        "3.1",
        "3.3",
        "4.1",
        "4.2",
        "4.3"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "finite products as in [[def-finite-sum]]. Then:",
      "uses": [
        "1.1",
        "1.2",
        "1.4",
        "2.1",
        "2.2",
        "2.3",
        "3.1",
        "3.3",
        "4.1",
        "4.2",
        "4.3"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "1.1",
        "1.2",
        "1.4",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "3. if $S$ is not bounded above then $s_n \\to +\\infty$",
      "uses": [
        "1.3",
        "1.5",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-divergence-to-infinity",
      "source_section": "Definition",
      "quote": "- $(x_k)$ **diverges to $+\\infty$**, written $x_k \\to +\\infty$, when for every",
      "uses": [
        "1.3",
        "1.5",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-series-tail-invariance",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with partial sums $s_n = \\sum_{k<n} a_k$, let",
      "uses": [
        "1.3",
        "1.5"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-monotone-convergence",
      "source_section": "Statement",
      "quote": "2. If $(x_k)$ is nonincreasing and $S$ is bounded below, then $(x_k)$ converges",
      "uses": [
        "2.3",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "cor-monotone-converges-iff-bounded",
      "source_section": "Statement",
      "quote": "[[def-monotone-sequence]]). Then $(x_k)$ converges if and only if it is bounded,",
      "uses": [
        "2.3",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-monotone-sequence",
      "source_section": "Definition",
      "quote": "above, and for a nonincreasing sequence whether it is bounded below. The range of",
      "uses": [
        "2.3",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and",
      "uses": [
        "2.1",
        "2.2",
        "3.2",
        "4.3"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "$|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "1.4",
        "1.5",
        "3.3",
        "4.3"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-algebra-of-limits",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to",
      "uses": [
        "2.3",
        "3.1",
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-limit-preserves-order",
      "source_section": "Statement",
      "quote": "$x$ and $y$ respectively ([[def-real-limit]]). If $x_k \\le y_k$ eventually, that",
      "uses": [
        "2.3",
        "3.1",
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for",
      "uses": [
        "2.3",
        "3.1",
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L9",
      "source": "thm-squeeze",
      "source_section": "Statement",
      "quote": "theorem, and it is why the squeeze is a tool for *establishing* convergence",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L10",
      "source": "thm-reals-cauchy-complete",
      "source_section": "Statement",
      "quote": "Every Cauchy sequence of real numbers ([[def-real-limit]]) converges to a real",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L10",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L11",
      "source": "def-infinite-product",
      "source_section": "Definition",
      "quote": "**Convergence.** The infinite product $\\prod a_k$ **converges** when there exists",
      "uses": [
        "2.3",
        "3.1",
        "4.1",
        "4.2",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Verified the stated inference at step 1.1.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Verified the stated inference at step 1.2.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "Verified the stated inference at step 1.3.",
      "step": "1.3",
      "inputs": [
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-1-4",
      "claim": "Verified the stated inference at step 1.4.",
      "step": "1.4",
      "inputs": [
        "L1",
        "L2",
        "L7"
      ]
    },
    {
      "id": "step-1-5",
      "claim": "Verified the stated inference at step 1.5.",
      "step": "1.5",
      "inputs": [
        "L3",
        "L4",
        "L7"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Verified the stated inference at step 2.1.",
      "step": "2.1",
      "inputs": [
        "L6",
        "1.1",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Verified the stated inference at step 2.2.",
      "step": "2.2",
      "inputs": [
        "1.1",
        "1.2",
        "L1",
        "L2",
        "L6"
      ]
    },
    {
      "id": "step-2-3",
      "claim": "Verified the stated inference at step 2.3.",
      "step": "2.3",
      "inputs": [
        "1.3",
        "1.2",
        "L1",
        "L5",
        "L8",
        "L11"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Verified the stated inference at step 3.1.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "1.1",
        "1.3",
        "L1",
        "L5",
        "L8",
        "L11"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "Verified the stated inference at step 3.2.",
      "step": "3.2",
      "inputs": [
        "L3",
        "2.2",
        "L6",
        "L9"
      ]
    },
    {
      "id": "step-3-3",
      "claim": "Verified the stated inference at step 3.3.",
      "step": "3.3",
      "inputs": [
        "1.4",
        "2.1",
        "1.2",
        "1.5",
        "L1",
        "L7"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Verified the stated inference at step 4.1.",
      "step": "4.1",
      "inputs": [
        "L11",
        "1.1",
        "3.1",
        "L1",
        "L3",
        "L5"
      ]
    },
    {
      "id": "step-4-2",
      "claim": "Verified the stated inference at step 4.2.",
      "step": "4.2",
      "inputs": [
        "2.3",
        "3.2",
        "L1",
        "L8",
        "L11"
      ]
    },
    {
      "id": "step-4-3",
      "claim": "Verified the stated inference at step 4.3.",
      "step": "4.3",
      "inputs": [
        "2.1",
        "1.4",
        "1.5",
        "3.3",
        "L1",
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Verified the stated inference at step 5.1.",
      "step": "5.1",
      "inputs": [
        "4.3",
        "3.3",
        "L8",
        "1.5",
        "L10",
        "L11"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and step 2.2 account for the empty-index case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement and step 1.1 include the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement and step 1.1 include the unit boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement and step 1.1 retain all admissible degenerate cases."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement and step 1.2 retain the threshold endpoints."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.3 supplies its choice."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Statement and step 1.1 establish the forward direction."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Statement and step 5.1 establish the reverse direction."
    }
  ]
}
```

## Generated audit-manifest relationships for the target

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

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (19)

### `cor-monotone-converges-iff-bounded`

````markdown
---
id: cor-monotone-converges-iff-bounded
kind: corollary
title: "A monotone sequence converges if and only if it is bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-monotone-convergence, lem-convergent-implies-bounded, def-monotone-sequence, def-bounded-set, def-sequence, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-06
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.14)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, Sequences and limits (Theorem 2.1.10)"
      url: "https://www.jirka.org/ra/html/sec_seqsandlims.html"
---

## Statement

Let $(x_k)$ be a monotone sequence of reals ([[def-sequence]],
[[def-monotone-sequence]]). Then $(x_k)$ converges if and only if it is bounded,
that is if and only if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
$k \in \mathbb{N}$.

The forward implication holds for every sequence and is
[[lem-convergent-implies-bounded]]. What monotonicity buys is the converse, which
is false for sequences in general.

## Facts & Assumptions

**Given:** A monotone sequence $(x_k)$ of reals, with range $S = \{x_k : k \in \mathbb{N}\}$.

[L1] Monotone means nondecreasing or nonincreasing ([[def-monotone-sequence]]).

[L2] Monotone convergence: a nondecreasing sequence whose range is bounded above converges, to the supremum of its range; a nonincreasing sequence whose range is bounded below converges, to the infimum ([[thm-monotone-convergence]]).

[L3] Every convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

[L4] A sequence is bounded when some $M$ satisfies $|x_k| \le M$ for every $k$; its range is bounded above by $u$ when $x_k \le u$ for every $k$, and bounded below by $\ell$ when $\ell \le x_k$ for every $k$ ([[def-sequence]], [[def-bounded-set]]).

[L5] Absolute value: $|t| \le M$ exactly when $-M \le t \le M$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(x_k)$ converges. Then it is bounded by [L3], and this direction uses neither the monotonicity hypothesis nor any case distinction. [given, L3]

1.2 Suppose instead that $(x_k)$ is bounded, and fix $M$ with $|x_k| \le M$ for every $k$; then $-M \le x_k \le M$ for every $k$, so the range $S$ is bounded above by $M$ and bounded below by $-M$. [given, L4, L5, assume-hyp]

2.1 If $(x_k)$ is nondecreasing then its range is bounded above by step 1.2, so $(x_k)$ converges, to $\sup S$. [step 1.2, L2, assume-case nondec]

2.2 If $(x_k)$ is nonincreasing then its range is bounded below by step 1.2, so $(x_k)$ converges, to $\inf S$. [step 1.2, L2, assume-case noninc]

3.1 A monotone sequence is nondecreasing or nonincreasing, so those two cases exhaust the hypothesis, and in both a bounded monotone sequence converges. [step 2.1, step 2.2, L1, cases: nondecreasing or nonincreasing, cases-exhaustive]

4.1 Both directions are established: a monotone sequence converges if and only if it is bounded. [step 1.1, step 3.1] ∎

## Remarks

- **The limit is named, not merely asserted to exist.** In the nondecreasing case
  it is $\sup S$ and in the nonincreasing case $\inf S$, by
  [[thm-monotone-convergence]]. The equivalence is stated without the value only
  because the value depends on which of the two cases holds.

- **This is the form in which the result is used.** Bolzano-Weierstrass
  ([[thm-bolzano-weierstrass]]) extracts a monotone subsequence of a bounded
  sequence and then needs exactly this corollary, since what is available about
  the subsequence is boundedness, inherited from the sequence, and not a bound on
  a particular side.

- **Monotonicity cannot be dropped.** Without it the converse direction fails,
  by [[fs-bounded-implies-convergent]]. The forward direction is not in the same
  position: it holds for every sequence, monotone or not, so there is no
  hypothesis to drop from it. What monotonicity adds there is sharpness rather
  than validity, and the sharpened form is recorded by
  [[lem-monotone-unbounded-diverges]]: an unbounded nondecreasing sequence does
  not merely fail to converge, it diverges to $+\infty$.
````

### `def-divergence-to-infinity`

````markdown
---
id: def-divergence-to-infinity
kind: definition
title: "Divergence to $+\\infty$ and to $-\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequence, def-real-order, def-real-limit, def-complete-ordered-field, lem-convergent-implies-bounded, thm-of-archimedean, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
short: "$x_k\\to+\\infty$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]].

- $(x_k)$ **diverges to $+\infty$**, written $x_k \to +\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k > M$ for all
  $k \ge K$.
- $(x_k)$ **diverges to $-\infty$**, written $x_k \to -\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k < M$ for all
  $k \ge K$.

Equivalently, in the language of [[def-sequence]]: $x_k \to +\infty$ when the
property $x_k > M$ holds eventually, for every real $M$.

## Remarks

- **This is divergence, not convergence.** The symbols $+\infty$ and $-\infty$
  are **not real numbers**: $\mathbb{R}$ is the complete ordered field
  ([[def-complete-ordered-field]]) and contains no element larger than every
  element of itself. Nothing above claims that $(x_k)$ has a limit in the sense
  of [[def-real-limit]], and nothing above defines an object named $+\infty$.
  The whole phrase "$x_k \to +\infty$" is a single abbreviation for the
  displayed condition, exactly as "$(x_k)$ is Cauchy" is an abbreviation for a
  condition and not a claim that some object called a Cauchy value exists.

- **A sequence diverging to $+\infty$ really does diverge.** Suppose
  $x_k \to +\infty$. Given any real $M$, there is $K$ with $x_k > M$ for all
  $k \ge K$; in particular $x_K > M$, so no real $M$ satisfies $x_k \le M$ for
  all $k$. Since $x_k \le |x_k|$ always ([[lem-of-abs-value]]), a bound
  $|x_k| \le M$ valid for all $k$ would give $x_k \le M$ for all $k$, which has
  just been excluded, so no such $M$ exists either. Thus
  $(x_k)$ is unbounded, and an unbounded sequence cannot converge, since
  convergent sequences are bounded ([[lem-convergent-implies-bounded]]). The
  same argument applies to $-\infty$. So the two notions never overlap: a
  sequence that diverges to $\pm\infty$ has no limit whatever.

- **Consequently $\lim_k x_k$ is not written here.** Many texts write
  $\lim_k x_k = +\infty$. This library does not, for the reason recorded in
  [[rem-sup-conventions]] about $\sup S = +\infty$: writing an equation whose
  right-hand side is not an element of $\mathbb{R}$ silently moves the discussion
  into the extended real line, a structure that is not a field, and every
  subsequent algebraic step then needs its own justification. In particular none
  of the rules of [[thm-algebra-of-limits]] may be applied to a divergence to
  $\pm\infty$; the familiar slogans "$\infty + \infty = \infty$" and
  "$\infty \cdot \infty = \infty$" are separate statements about this definition
  and would need separate proofs.

- **Testing against naturals suffices.** Since $\mathbb{R}$ is Archimedean
  ([[thm-of-archimedean]]), every real $M$ is below some canonical natural $n$,
  so the condition "for every real $M$" may equivalently be read as "for every
  natural $n \ge 1$"; the two formulations of $x_k \to +\infty$ agree.

- **Divergence to $+\infty$ is much stronger than divergence.** A sequence
  alternating between $1$ and $-1$ diverges ([[fs-bounded-implies-convergent]])
  but goes to neither $+\infty$ nor $-\infty$, since it is bounded. Divergence
  is the negation of convergence; divergence to $+\infty$ is a positive
  statement about growth.
````

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
````

### `def-infinite-product`

````markdown
---
id: def-infinite-product
kind: definition
title: "Infinite products: partial products, and convergence to a nonzero limit after finitely many vanishing factors"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-sum, lem-finite-sum-laws, lem-of-no-zero-divisors, def-series, thm-algebra-of-limits, lem-limit-unique, def-real-limit]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Infinite product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infinite_product"
    - title: "W. Rudin, Real and Complex Analysis, 3rd ed., Ch. 15"
      url: "https://en.wikipedia.org/wiki/Walter_Rudin"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://ejwingler.people.ysu.edu/TBB-Real.pdf"
pipeline_run: null
---

## Definition

Let $(a_k)$ be a sequence of reals. Its **partial products** are

$$\Pi_n \;:=\; \prod_{k<n} a_k \qquad (n \in \mathbb{N}),$$

the finite products of [[def-finite-sum]], so that $\Pi_0 = 1$, the empty
product, and $\Pi_{n+1} = \Pi_n\, a_n$. For $N \in \mathbb{N}$ the **$N$-th tail
products** are $T^{(N)}_n := \prod_{j<n} a_{N+j}$, again a sequence in $n$.

**Convergence.** The infinite product $\prod a_k$ **converges** when there exists
$N \in \mathbb{N}$ such that

1. $a_k \ne 0$ for every $k \ge N$, and
2. the sequence $(T^{(N)}_n)_n$ of $N$-th tail products converges
   ([[def-real-limit]]) to a limit $\ell \ne 0$.

Its **value** is then

$$\prod_{k=0}^{\infty} a_k \;:=\; \Bigl(\prod_{k<N} a_k\Bigr)\cdot \ell .$$

If no such $N$ exists, the product **diverges**.

**The value does not depend on $N$, and that is a proof obligation, discharged
here.** First, if $N$ is such an index then so is every $N' \ge N$: condition 1 is
inherited, and splitting the finite product ([[lem-finite-sum-laws]]) gives, for
$n \ge N' - N$,

$$T^{(N)}_{n} \;=\; \Bigl(\prod_{k=N}^{N'-1} a_k\Bigr)\, T^{(N')}_{\,n - (N'-N)} ,$$

where the bracketed factor is a product of finitely many nonzero reals and so is
itself nonzero. Hence $(T^{(N')}_m)_m$ converges, to
$\ell' = \ell / \prod_{k=N}^{N'-1}a_k$ by the algebra of limits
([[thm-algebra-of-limits]]), and $\ell' \ne 0$ because $\ell \ne 0$. Second, the
two candidate values agree:

$$\Bigl(\prod_{k<N'}a_k\Bigr)\ell' = \Bigl(\prod_{k<N}a_k\Bigr)\Bigl(\prod_{k=N}^{N'-1}a_k\Bigr)\frac{\ell}{\prod_{k=N}^{N'-1}a_k} = \Bigl(\prod_{k<N}a_k\Bigr)\ell ,$$

again by splitting. Finally, any two admissible indices $N_1, N_2$ are both at
most $\max\{N_1,N_2\}$, which is therefore admissible and gives the same value as
each. Since a convergent sequence has exactly one limit
([[lem-limit-unique]]), the displayed value is a single well-determined real
number.

**Why a zero limit is excluded.** The definition demands $\ell \ne 0$, not merely
that the tail products converge. Both parts of the definition are doing work, and
against different naive alternatives. Against the naive "$\Pi_n$ converges", with
no tail clause at all: *every* sequence with a single zero factor has all its
partial products equal to $0$ from that index on, hence convergent to $0$, so
"the product converges" would say nothing whatever about the factors — which is
what condition 1, the restriction to a tail of nonzero factors, repairs. Against
the naive "some tail of the partial products converges", which keeps condition 1
and drops only $\ell \ne 0$, condition 1 no longer helps, and a product like
$\prod_{j \ge 0}\bigl(1 - 1/(j+2)\bigr)$, all of whose factors are nonzero, has
partial products $1/(n+1)$ tending to $0$; calling that convergent would make the
value $0$ without any factor being $0$, and would destroy the analogy with series
in which a convergent product may be divided by. That product is worked out on the companion examples page.

## Remarks

- **The value is $0$ exactly when some factor is $0$.** With $N$ as in the
  definition, the value is $\bigl(\prod_{k<N}a_k\bigr)\ell$ with $\ell \ne 0$, and
  a finite product vanishes exactly when one of its factors does — a field has no
  zero divisors ([[lem-of-no-zero-divisors]]), so an induction on the recursion
  $\prod_{k<n+1}a_k = \bigl(\prod_{k<n}a_k\bigr)a_n$ of [[def-finite-sum]] gives
  both directions. So a convergent product with all factors nonzero has
  nonzero value, and this is the property that makes convergent products behave
  like nonzero numbers.

- **Finitely many factors may be $0$, or negative, or anything at all.** The
  definition looks only at a tail, exactly as [[def-series]] does for series
  through its tail clause; conditions 1 and 2 constrain no initial segment.

- **Notation.** $\prod_{k \ge m} a_k$ denotes the product of the family from $m$,
  that is the product of the sequence $j \mapsto a_{j+m}$, by the same convention
  [[def-series]] uses for series; the two readings agree at $m = 0$.

- **Nothing here presumes a logarithm.** The classical criteria for infinite
  products are usually derived by taking logarithms; the logarithm is not
  available at this point in the reading order, and
  [[thm-infinite-product-criterion]] is proved from elementary inequalities
  instead.
````

### `def-monotone-sequence`

````markdown
---
id: def-monotone-sequence
kind: definition
title: "Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequence, def-real-order, def-complete-ordered-field, def-bounded-set, def-nat-order, thm-nat-linear-order, lem-nat-discrete, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Def. 3.13)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.2"
      url: "https://www.jirka.org/ra/"
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]], and with
$\mathbb{N}$ ordered as in [[def-nat-order]]. The sequence is:

- **nondecreasing** when $x_j \le x_k$ for all $j \le k$;
- **increasing** (or *strictly increasing*) when $x_j < x_k$ for all $j < k$;
- **nonincreasing** when $x_j \ge x_k$ for all $j \le k$;
- **decreasing** (or *strictly decreasing*) when $x_j > x_k$ for all $j < k$;
- **monotone** when it is nondecreasing or nonincreasing;
- **strictly monotone** when it is increasing or decreasing;
- **eventually monotone** when some tail $x^{(K)}$ ([[def-sequence]]) is
  monotone, that is when there is $K \in \mathbb{N}$ such that the restriction of
  the comparison to indices $\ge K$ is one-signed.

An increasing sequence is nondecreasing and a decreasing sequence is
nonincreasing, since $j \le k$ means $j < k$ or $j = k$ and the second case gives
equality. A sequence that is both nondecreasing and nonincreasing is constant.

**Consecutive comparisons suffice, and that is an induction.** The four
conditions above quantify over *all* pairs of indices, but what one checks in
practice, and what a recursive construction delivers, is the comparison of
consecutive terms. The two agree:

> $(x_k)$ is nondecreasing **if and only if** $x_k \le x_{\sigma(k)}$ for every
> $k \in \mathbb{N}$, and $(x_k)$ is increasing **if and only if**
> $x_k < x_{\sigma(k)}$ for every $k \in \mathbb{N}$; likewise, with the
> inequalities reversed, for nonincreasing and decreasing.

The forward implications are the instances $j = k$, $k = \sigma(k)$ of the
definitions, using $k < \sigma(k)$ ([[lem-nat-discrete]]). For the converse,
suppose $x_i \le x_{\sigma(i)}$ for every $i$ and fix $k$; we show by induction
on $k$ ([[thm-induction-principle]]) that $x_j \le x_k$ for every $j \le k$. For
$k = 0$: $j \le 0$ forces $j = 0$, and $x_0 \le x_0$. Assume the statement for
$k$ and let $j \le \sigma(k)$. If $j = \sigma(k)$ then $x_j \le x_{\sigma(k)}$ by
reflexivity. Otherwise $j < \sigma(k)$, and then $j \le k$: were $k < j$ we would
have $k < j < \sigma(k)$, which [[lem-nat-discrete]] excludes, so $j \le k$ by
totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]). The induction
hypothesis gives $x_j \le x_k$, and $x_k \le x_{\sigma(k)}$ by assumption, so
$x_j \le x_{\sigma(k)}$ by transitivity. This completes the induction. The three
remaining equivalences are the same argument with $\le$ replaced by $<$,
$\ge$ or $>$, transitivity of the strict order being used in the same place.

**Boundedness of a monotone sequence is one-sided.** A nondecreasing sequence is
bounded below by its first term $x_0$, and a nonincreasing sequence is bounded
above by $x_0$, both immediately from the definition with $j = 0$. So for a
nondecreasing sequence the only substantive question is whether it is bounded
above, and for a nonincreasing sequence whether it is bounded below. The range of
$(x_k)$ is the set $\{x_k : k \in \mathbb{N}\}$ ([[def-sequence]]), and it is
bounded above, bounded below or bounded in the sense of [[def-bounded-set]]
exactly when the sequence is.

## Remarks

- **The naming is the one that keeps "increasing" strict.** Some texts use
  *increasing* for what is called *nondecreasing* here and *strictly increasing*
  for what is called *increasing*. This library follows the convention in which
  the unqualified word is strict, and always writes *nondecreasing* when
  equality is allowed, so that no statement on this page depends on which
  convention a reader arrives with. Where a proof needs the weak form it says
  *nondecreasing*, and where it needs the strict form it says *increasing*.

- **Eventual monotonicity is exactly monotonicity of a tail**, and by
  [[lem-limit-of-tail]] a sequence and its tails converge to the same limits and
  are Cauchy together. So every convergence statement about monotone sequences on
  this page extends verbatim to eventually monotone sequences, with the limit
  unchanged; only statements about specific terms, such as the identification of
  the limit as the supremum of the *whole* range, need the hypothesis at every
  index. The monotone convergence theorem is a case in point: an eventually
  nondecreasing bounded sequence converges, but to the supremum of the range of
  the monotone tail, which may be smaller than the supremum of the whole range.

- **Monotone is strictly weaker than strictly monotone, and neither is generic.**
  A constant sequence is monotone and not strictly monotone; the sequence with
  terms $1$ and $-1$ alternating ([[lem-alternating-sequence]]) is not monotone
  and not eventually monotone, since every tail contains both values infinitely
  often. That sequence is bounded, so boundedness alone gives neither form of
  monotonicity; what it does give is a monotone *subsequence*
  ([[lem-peak-monotone-subsequence]]), and that is the route to
  Bolzano-Weierstrass.
````

### `def-real-limit`

````markdown
---
id: def-real-limit
kind: definition
title: "Limits and Cauchy sequences of reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## Remarks

- Quantifying over rational $\varepsilon$ loses nothing: below any real
  $\varepsilon > 0$ lies a positive rational ([[lem-rat-embeds-dense]]).
- $|\cdot|$ is the absolute value of [[def-real-order]].
````

### `def-series`

````markdown
---
id: def-series
kind: definition
title: "Series, partial sums, convergence and the sum, divergence, and the tail series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-sum, def-sequence, def-real-limit, def-real-numbers, lem-limit-unique]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and
a **sequence of reals** is a function $a : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), written $(a_k)$; recall that $\mathbb{N}$ contains $0$.

**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial
sums** is

$$s_n \;:=\; \sum_{k < n} a_k \qquad (n \in \mathbb{N}),$$

the finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and
$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses
that define the finite sum. Note that $s_n$ is the sum of the $n$ terms
$a_0, \dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last
one.

**Convergence, the sum, divergence.** The **series** of $(a_k)$, written
$\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges
([[def-real-limit]]), and then the **sum of the series** is

$$\sum_{k=0}^{\infty} a_k \;:=\; \lim_{n} s_n .$$

The series **diverges** when $(s_n)$ does not converge. A convergent sequence of
reals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names
a single real number and nothing further has to be checked for it to be
well defined.

**Series with a general starting index.** Let $m \in \mathbb{N}$ and let $a$ be a
function on $\{\, k \in \mathbb{N} : k \ge m \,\}$, which we call a **family from
$m$** and write $(a_k)_{k \ge m}$. The series

$$\sum_{k \ge m} a_k$$

is by definition the series of the sequence $b_j := a_{j + m}$,
$j \in \mathbb{N}$, which is a genuine sequence of reals; it converges exactly
when that series converges, and its sum is then written
$\sum_{k = m}^{\infty} a_k$. Its partial sums are

$$\sum_{k=m}^{n-1} a_k \;=\; \sum_{j < n-m} a_{m+j} \qquad (n \ge m),$$

in the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum
$0$. A sequence on $\mathbb{N}$ is the case $m = 0$, and the two readings of
$\sum a_k$ agree there, since $b_j = a_j$.

**This clause is not a convenience.** Sequences in this library are functions on
$\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the
classical series are built from expressions that are undefined at the index $0$:
$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \ge 1$. Writing such a series as
$\sum_{k \ge 1} a_k$ names an honest object, whereas writing it as a sequence on
$\mathbb{N}$ would require a value at an index where the defining expression has
none. Every statement on this page says which starting index it uses.

**Tail series.** For $N \in \mathbb{N}$, the **$N$-th tail series** of
$\sum a_k$ is $\sum_{k \ge N} a_k$, that is the series of the $N$-th tail
$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The
$0$-th tail series is the series itself.

## Remarks

- **"Diverges" here means "does not converge", and nothing more.** A divergent
  series may have partial sums that run away to $+\infty$, or to $-\infty$, or
  that oscillate without settling anywhere. The three behaviours are not
  distinguished by the word, and no statement on this page uses "diverges" to
  mean "the partial sums are unbounded" unless it says so.

- **The symbol $\sum_{k=0}^{\infty} a_k$ is defined only for a convergent
  series.** It denotes a real number, not a formal object, and it is illegitimate
  to write it down before convergence has been established. Where a proof needs
  to speak of the series without knowing whether it converges, it speaks of
  $(a_k)$ and of $(s_n)$.

- **Two indices, doing different work.** The index $k$ runs over the terms and is
  bound; the index $n$ runs over the partial sums and is the variable in which the
  limit is taken. Confusing them is the commonest slip in the subject, and it is
  the reason the definition above fixes $s_n = \sum_{k<n} a_k$ rather than
  $\sum_{k \le n} a_k$: with this choice the recursion $s_{n+1} = s_n + a_n$ is
  the one supplied by [[def-finite-sum]], with no shift anywhere.
````

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

### `lem-limit-preserves-order`

````markdown
---
id: lem-limit-preserves-order
kind: lemma
title: "Limits preserve non-strict inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-limit, def-sequence, lem-limit-unique, thm-algebra-of-limits, thm-of-archimedean, lem-of-add-order, lem-rat-embeds-dense, lem-of-inverse-positive, lem-of-abs-value, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x_k\\le y_k$ gives $\\lim x_k\\le\\lim y_k$"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]). If $x_k \le y_k$ eventually, that
is for all $k$ from some index on, then

$$\lim_{k} x_k \;\le\; \lim_{k} y_k .$$

In particular, if $x_k \ge 0$ eventually then $\lim_k x_k \ge 0$, and if
$a \le x_k \le b$ eventually then $a \le \lim_k x_k \le b$.

The conclusion is **not** strict, and cannot be made strict; see the remarks
below and the false statement at the end of this page.

## Facts & Assumptions

**Given:** Sequences $(x_k)$, $(y_k)$ of reals with $(x_k)$ converging to $x$, $(y_k)$ converging to $y$, and an index $K_0 \in \mathbb{N}$ with $x_k \le y_k$ for every $k \ge K_0$ ([[def-sequence]], [[def-real-limit]]). Write $z_k := y_k - x_k$ and $z := y - x$.

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Difference rule: $(z_k) = (y_k - x_k)$ converges to $y - x = z$ ([[thm-algebra-of-limits]]).

[L3] Small rationals: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$ ([[lem-of-inverse-positive]]).

[L4] Absolute value: $|u| < c$ if and only if $-c < u < c$, for $c > 0$ ([[lem-of-abs-value]]).

[L5] Order arithmetic in $\mathbb{R}$: adding a constant preserves $<$ and $\le$; $u \le v$ and $v < w$ give $u < w$; trichotomy, so exactly one of $z < 0$, $z = 0$, $z > 0$ holds and the negation of $z < 0$ is $z \ge 0$; $u \le v$ if and only if $v - u \ge 0$; and $u < u$ is impossible ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

[L6] The order on $\mathbb{N}$ is total, so any two indices admit a common upper bound ([[thm-nat-linear-order]]).

[L7] For $c \in \mathbb{R}$ the constant sequence $(c)$ converges to $c$ ([[def-sequence]], [[def-real-limit]]).

[L8] A sequence of reals has at most one limit ([[lem-limit-unique]]), which is what licenses writing $\lim_k x_k$ and $\lim_k y_k$ for the limits named in the statement; without it those symbols would not denote.

## Proof

**Proof technique:** contradiction.

1.1 By [L2] the sequence $(z_k)$ converges to $z = y - x$, and by hypothesis $z_k = y_k - x_k \ge 0$ for every $k \ge K_0$. [given, L2, L5]

1.2 Suppose, for contradiction, that $z < 0$. [assume-contra]

2.1 Then $-z > 0$, so by [L3] we may choose a rational $\varepsilon$ with $0 < \varepsilon < -z$. [step 1.2, L3, L5, choose]

3.1 Applying convergence of $(z_k)$ to this $\varepsilon$ gives $K_1 \in \mathbb{N}$ with $|z_k - z| < \varepsilon$ for all $k \ge K_1$, hence $z_k - z < \varepsilon$ and so $z_k < z + \varepsilon$ for all such $k$. [step 1.1, step 2.1, L1, L4, L5]

4.1 Fix an index $k$ with $k \ge K_0$ and $k \ge K_1$. Then $0 \le z_k < z + \varepsilon < z + (-z) = 0$, so $0 < 0$, which is impossible. [step 1.1, step 2.1, step 3.1, L5, L6]

5.1 The assumption $z < 0$ is therefore untenable; by trichotomy $z \ge 0$, that is $y - x \ge 0$, that is $x \le y$; since $x$ and $y$ are the unique limits of $(x_k)$ and $(y_k)$ by [L8], that is exactly $\lim_k x_k \le \lim_k y_k$. Since $(x_k)$ and $(y_k)$ were an arbitrary pair satisfying the hypotheses, the conclusion applies to every such pair, and the two stated special cases are instances of it. Let $(w_k)$ be convergent. If $w_k \ge 0$ from some index on, apply the conclusion to the pair consisting of the constant sequence $0$, which converges to $0$ by [L7], and of $(w_k)$: it gives $0 \le \lim_k w_k$. If $a \le w_k \le b$ from some index on, apply it first to the constant sequence $a$ and $(w_k)$, then to $(w_k)$ and the constant sequence $b$: it gives $a \le \lim_k w_k$ and $\lim_k w_k \le b$. [step 4.1, L5, L7, L8, discharge-contradiction] ∎

## Remarks

- The two special cases are instances of the main claim, discharged in step 5.1 by taking one of the two sequences constant; that a constant sequence converges to its value ([[def-sequence]]) is the only extra ingredient they need.

- **The inequality does not become strict.** From $x_k < y_k$ for every $k$ one may conclude only $\lim x_k \le \lim y_k$; the witness $x_k = 0 < 1/(k+1) = y_k$ has equal limits ([[fs-limit-preserves-strict-inequality]]). Intuitively, the order relation $<$ is not preserved by passage to a limit because a strict gap may shrink to nothing, while $\le$ is preserved because it is closed under that shrinking.

- The proof routes through the single sequence $(z_k) = (y_k - x_k)$ and the difference rule of [[thm-algebra-of-limits]]. That is not an economy of writing only: it isolates the one thing being proved, namely that a sequence eventually $\ge 0$ cannot have a negative limit.
````

### `lem-of-abs-value`

````markdown
---
id: lem-of-abs-value
kind: lemma
title: "Basic properties of the absolute value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-abs-value, def-ordered-field, lem-of-mult-neg, lem-of-sign-rules]
aliases: []
landmark: false
short: "|x| properties"
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Absolute value: $|u| = u$ if $u \ge 0$, and $|u| = -u$ if $u < 0$ ([[def-abs-value]]).

[L2] Ordered-field order: trichotomy holds (for each $u$ exactly one of $u > 0$, $u = 0$, $u < 0$), $a < b$ means $b - a$ is positive, and sums and products of positives are positive ([[def-ordered-field]]).

[L3] Signs in products: $(-a)b = -(ab)$ and $(-a)(-b) = ab$ ([[lem-of-mult-neg]]).

[L4] Sign rules: a product of two elements of the same sign is positive, and a product of two elements of opposite sign is negative ([[lem-of-sign-rules]]).

## Proof

**Proof technique:** cases.

1.1 Case $x > 0$: by [L1] $|x| = x > 0$, so $|x| \ge 0$ and $|x| \ne 0$; since $-x < 0$ we get $|-x| = -(-x) = x = |x|$ by [L1], and $-|x| = -x < 0 < x = |x|$, so $-|x| \le x \le |x|$. [assume-case pos, L1, L2, algebra]

1.2 Case $x = 0$: then $|x| = |0| = 0$, so $|x| \ge 0$ holds with $|x| = 0$ and $x = 0$, while $|-x| = |0| = |x|$ and $-|x| = 0 \le 0 \le 0 = |x|$. [assume-case zero, L1]

1.3 Case $x < 0$: by [L1] $|x| = -x$, and [L2] gives $-x > 0$, so $|x| > 0$ and $|x| \ne 0$; here $|-x| = -x = |x|$ by [L1], and $-|x| = -(-x) = x \le x$ while $x < 0 < -x = |x|$, so $-|x| \le x \le |x|$. [assume-case neg, L1, L2, algebra]

1.4 Case $x = 0$ or $y = 0$: then $xy = 0$, so $|xy| = 0$, and one of $|x|, |y|$ is $0$, whence $|x|\,|y| = 0 = |xy|$. [assume-case zerofactor, L1]

1.5 Case $x, y$ have the same sign (both positive or both negative): by [L4] $xy > 0$, so $|xy| = xy$, while $|x|\,|y| = xy$ by [L3] (for $x, y < 0$ this is $(-x)(-y) = xy$), hence $|xy| = |x|\,|y|$. [assume-case same, L1, L3, L4]

1.6 Case $x, y$ have opposite signs (one positive, one negative): by [L4] $xy < 0$, so $|xy| = -(xy)$, while $|x|\,|y| = -(xy)$ by [L3] (namely $x(-y)$ or $(-x)y$), hence $|xy| = |x|\,|y|$. [assume-case opposite, L1, L3, L4]

2.1 By trichotomy [L2] each $x$ lies in exactly one of the cases 1.1-1.3, and in each we verified $|x| \ge 0$, that $|x| = 0 \iff x = 0$, that $|-x| = |x|$, and that $-|x| \le x \le |x|$; hence all four hold for every $x$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

2.2 By trichotomy [L2] each pair $x, y$ lies in exactly one of the cases 1.4-1.6, and in each $|xy| = |x|\,|y|$; hence $|xy| = |x|\,|y|$ for all $x, y$. [step 1.4, step 1.5, step 1.6, cases-exhaustive]

3.1 Let $c > 0$: if $|x| < c$ then $-c < -|x| \le x \le |x| < c$ by [step 2.1] and [L2], so $-c < x < c$; conversely if $-c < x < c$ then both $x < c$ and $-x < c$, and since $|x|$ equals $x$ or $-x$ by [L1], we get $|x| < c$, so $|x| < c \iff -c < x < c$. [step 2.1, L1, L2] ∎
````

### `lem-of-inverse-positive`

````markdown
---
id: lem-of-inverse-positive
kind: lemma
title: "Inverses of positives are positive, and reciprocation reverses order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordered-field, lem-of-sign-rules, cor-of-one-positive]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Innsbruck notes: Ordered fields"
      url: "https://www.uibk.ac.at/media/filer_public/28/02/280225fd-dde6-4e9c-bff6-baad33ff4a05/ragen.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b \in F$.

[L1] $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and for $x \neq 0$ exactly one of $x \in P$, $-x \in P$ holds ([[def-ordered-field]]).

[L2] Sign rules: a product of a positive and a negative is negative, a product of two positives is positive, and for $c > 0$ one has $a < b \iff ac < bc$ ([[lem-of-sign-rules]]).

[L3] $0 < 1$; in particular $1 \neq 0$ ([[cor-of-one-positive]]).

[L4] $P$ is closed under addition, so $<$ is transitive ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$, so $a \neq 0$ and its inverse $a^{-1}$ exists with $a \cdot a^{-1} = 1$; moreover $a^{-1} \neq 0$, since $a^{-1}$ has $a$ as its inverse while $0$ is non-invertible ($1 \neq 0$ by L3). [assume-hyp, L1, L3]

2.1 By trichotomy $a^{-1} \in P$ or $-a^{-1} \in P$; if $-a^{-1} \in P$, then $a > 0$ and $a^{-1} < 0$ give $a \cdot a^{-1} < 0$ by the sign rules, i.e. $1 < 0$, contradicting $0 < 1$; hence $a^{-1} \in P$, i.e. $a^{-1} > 0$, proving claim 1. [step 1.1, L2, L3, L1]

3.1 Assume $0 < a < b$; then $0 < b$ by transitivity, so by claim 1 both $a^{-1} > 0$ and $b^{-1} > 0$, and the sign rules give $a^{-1} b^{-1} > 0$. [assume-hyp, step 2.1, L4, L2, L1]

4.1 Multiplying $a < b$ by the positive $a^{-1} b^{-1}$ via the sign rules gives $a (a^{-1} b^{-1}) < b (a^{-1} b^{-1})$; since $a a^{-1} = 1$ and $b b^{-1} = 1$, this simplifies to $b^{-1} < a^{-1}$. [step 3.1, L2, algebra]

5.1 Together with $b^{-1} > 0$ from step 3.1, we conclude $0 < b^{-1} < a^{-1}$, proving claim 2. [step 3.1, step 4.1] ∎
````

### `lem-series-tail-invariance`

````markdown
---
id: lem-series-tail-invariance
kind: lemma
title: "A series converges iff each of its tail series converges, and the sum splits as $s_N$ plus the $N$-th tail"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series, lem-limit-of-tail, def-finite-sum, lem-finite-sum-laws, thm-algebra-of-limits, def-real-limit, def-sequence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with partial sums $s_n = \sum_{k<n} a_k$, let
$N \in \mathbb{N}$, and let $t_j := \sum_{i<j} a_{N+i}$ be the partial sums of the
$N$-th tail series $\sum_{k \ge N} a_k$ ([[def-series]]). Then:

1. $t_j = s_{j+N} - s_N$ for every $j \in \mathbb{N}$;
2. $\sum a_k$ converges **if and only if** its $N$-th tail series converges, and
   in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; s_N \;+\; \sum_{k=N}^{\infty} a_k ;$$
3. hence the following are equivalent: $\sum a_k$ converges; every tail series of
   $\sum a_k$ converges; some tail series of $\sum a_k$ converges.

In words: convergence of a series is a property of its terms from any index on,
and changing finitely many terms changes the sum but not the fact of convergence.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals, a natural number $N$, the partial sums $s_n = \sum_{k<n} a_k$ and the partial sums $t_j = \sum_{i<j} a_{N+i}$ of the $N$-th tail series ([[def-series]], [[def-finite-sum]]).

[L1] Splitting of finite sums: if $m \le n$ then $\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$ ([[lem-finite-sum-laws]]), and $\sum_{k=m}^{n-1} a_k$ is by definition $\sum_{i<n-m} a_{m+i}$ ([[def-finite-sum]]).

[L2] Convergence depends only on the tail: a sequence $(x_n)$ converges to $x$ if and only if its $N$-th tail $(x_{j+N})_{j}$ converges to $x$ ([[lem-limit-of-tail]], [[def-sequence]]).

[L3] Algebra of limits: if $x_j \to x$ and $y_j \to y$ then $x_j + y_j \to x + y$ and $x_j - y_j \to x - y$ ([[thm-algebra-of-limits]]).

[L4] A constant sequence $y_j = c$ converges to $c$, immediately from the definition of a limit ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Fix $j \in \mathbb{N}$ and put $n := j + N$, so that $N \le n$ and $n - N = j$. [given]

1.2 The family $(s_{j+N})_{j \in \mathbb{N}}$ is the $N$-th tail of the sequence $(s_n)$ of partial sums. [given, L2]

2.1 Splitting the partial sum $s_n$ at $N$ gives $s_n = \sum_{k<N} a_k + \sum_{k=N}^{n-1} a_k = s_N + \sum_{i<j} a_{N+i} = s_N + t_j$. [step 1.1, L1]

2.2 Suppose $\sum a_k$ converges, say $s_n \to S$; then the $N$-th tail $(s_{j+N})_j$ converges to $S$. [given, step 1.2, L2]

3.1 Claim 1 follows: $t_j = s_{j+N} - s_N$ for every $j \in \mathbb{N}$. [step 2.1, algebra]

4.1 The constant sequence with value $s_N$ converges to $s_N$, so $t_j = s_{j+N} - s_N \to S - s_N$, and the $N$-th tail series converges with sum $S - s_N$. [step 2.2, step 3.1, L3, L4]

4.2 Conversely, suppose the $N$-th tail series converges, say $t_j \to T$; then $s_{j+N} = s_N + t_j \to s_N + T$ by the same two rules. [step 3.1, L3, L4]

5.1 So the $N$-th tail of $(s_n)$ converges to $s_N + T$, hence $(s_n)$ itself converges to $s_N + T$ and $\sum a_k$ converges. [step 4.2, step 1.2, L2]

6.1 Claim 2 follows: the two convergences are equivalent, and when they hold the sums are related by $S = s_N + T$, which is the displayed identity. [step 4.1, step 5.1, algebra]

7.1 Claim 3 follows as well: if $\sum a_k$ converges then by claim 2 every tail series converges; every tail series converging trivially gives some tail series converging, the family of tails being indexed by all of $\mathbb{N}$; and if some tail series, say the $N$-th, converges then by claim 2 again $\sum a_k$ converges. [step 6.1] ∎

## Remarks

- **Where the hypothesis-free character comes from.** Nothing here assumes the terms have a sign or that any series converges: claim 1 is an identity between finite sums, valid always, and claims 2 and 3 are read off from it by two standard limit rules. That is why the lemma may be used to move between a series and its tails inside proofs that have not yet decided the convergence question.

- **The sum does change.** Only the fact of convergence is tail invariant. The identity in claim 2 is the exact bookkeeping: discarding the first $N$ terms lowers the sum by $s_N$, and no more.
````

### `rem-sums-proved-to-exist-but-not-evaluated`

````markdown
---
id: rem-sums-proved-to-exist-but-not-evaluated
kind: remark
title: "Selected sums and products on this page that are proved to exist without being evaluated, and what their evaluation waits for"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-alternating-series-test, thm-infinite-product-criterion, thm-decimal-expansions, thm-riemann-series-theorem, rem-rearrangement-in-higher-dimensions, def-absolute-and-conditional-convergence]
justified_by: []
aliases: []
landmark: false
sources:
  scraped: []
  references:
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Infinite product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infinite_product"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://ejwingler.people.ysu.edu/TBB-Real.pdf"
    - title: "D. Dikranjan, Analysis 478, Chapter 6"
      url: "https://people.math.binghamton.edu/dikran/478/Ch6.pdf"
pipeline_run: null
---

## Remark

A convergence test proves that a limit exists; it does not produce the limit. On
this page that gap is systematic, and this remark records the principal places
where a familiar value or formula is deferred and what would close it. **Every
scope statement below is relative to the reading
order**: the material named is developed elsewhere in this library, later than
this page, and nothing here says it is absent from the library.

**The alternating harmonic series.** [[thm-alternating-series-test]] proves that
$\sum_{j \ge 0} (-1)^j/(j+1)$ converges, and its error bound pins the sum between
consecutive partial sums; the companion examples page uses that to prove the sum lies
strictly between $1/2$ and $1$. No closed
expression for the sum is given, and none can be given here: the classical value
is a logarithm, and the logarithm is introduced later in the reading order. So the
sum is named, bracketed, and left unevaluated.

**The two-positive-one-negative rearrangement.** The same is true one level up.
The companion examples page proves that taking two
positive terms for each negative one produces a convergent rearrangement whose sum
is $3/2$ times the sum of the original series. That statement is exact and complete
as it stands, and it is deliberately *relative*: it compares two sums rather than
evaluating either. The familiar form of the same fact multiplies a logarithm by
$3/2$, and it becomes available at the same later point.

**The refined criterion for infinite products.** [[thm-infinite-product-criterion]]
settles $\prod(1+p_k)$ completely for $p_k \ge 0$, settles $\prod(1-p_k)$ for
$0 \le p_k < 1$, and proves that $\sum |p_k|$ convergent forces $\prod(1+p_k)$
convergent. It does **not** settle the remaining case: a signed sequence $(p_k)$
with $\sum p_k$ convergent but $\sum |p_k|$ divergent. The classical criterion
there is that $\prod(1+p_k)$ converges exactly when $\sum p_k^{2}$ converges.
A standard proof expands $\log(1+x)$; that route belongs with the logarithm,
later in the reading order. The gap is not hypothetical: the companion
examples page exhibits a signed
sequence with $\sum p_k$ convergent whose partial products tend to $0$.

**Rearrangement beyond $\mathbb{R}$.** [[thm-riemann-series-theorem]] and
[[cor-unconditional-iff-absolute-in-r]] together answer the rearrangement question
for real series completely. The corresponding question for series of vectors is
raised, and left open at this point in the reading order, in
[[rem-rearrangement-in-higher-dimensions]], which states no theorem about it.

**Two places where existence is constructive but no formula is claimed.**
[[thm-decimal-expansions]] produces, for every $x \in [0,1)$, its digit sequence in
base $b$, by a recursion that depends on $x$; it gives no closed expression for
the digits of any particular real, and it claims none. Likewise
[[thm-riemann-series-theorem]] produces, for each prescribed target, a bijection of
$\mathbb{N}$ defined by a recursion over the terms of the series; no formula for
that bijection is given, and the theorem asserts only that one exists. In both
cases the construction is fully determined by the data, with no choice made
anywhere, which is a stronger statement than mere existence and a weaker one than
a formula.

**What this list does not claim.** It is not a census of every convergence result
on the page. In particular, the Dirichlet, alternating-series, and Abel tests and
their worked applications establish additional convergence without evaluating a
numerical sum; their purpose here is to supply convergence criteria, not to flag
a familiar value whose evaluation waits for a later object. Among the structural
comparison theorems, [[thm-dirichlet-rearrangement]], [[thm-mertens]],
[[cor-cauchy-product-absolute]], [[thm-grouping-of-series]] and
[[thm-double-series-fubini]] identify sums with one another and evaluate nothing,
which is exactly what makes them usable wherever the sums themselves are unknown.
````

### `thm-algebra-of-limits`

````markdown
---
id: thm-algebra-of-limits
kind: theorem
title: "Algebra of limits: sums, scalar multiples, products and quotients"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-limit, def-sequence, lem-convergent-implies-bounded, lem-null-times-bounded, lem-of-triangle-inequality, lem-of-abs-value, cor-of-reverse-triangle, thm-of-archimedean, lem-of-inverse-positive, lem-rat-embeds-dense, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, thm-rat-ordered-field, thm-nat-linear-order, def-field, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "limits respect $+$, $\\cdot$, $/$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "OpenStax Calculus Volume 2, §5.1 Sequences"
      url: "https://openstax.org/books/calculus-volume-2/pages/5-1-sequences"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]), and let $c \in \mathbb{R}$. Then

$$x_k + y_k \to x + y, \qquad c\,x_k \to c\,x, \qquad x_k - y_k \to x - y, \qquad x_k y_k \to x y,$$

and if in addition $y \ne 0$ and $y_k \ne 0$ for every $k \in \mathbb{N}$, then

$$\frac{1}{y_k} \to \frac{1}{y} \qquad \text{and} \qquad \frac{x_k}{y_k} \to \frac{x}{y}.$$

The quotient case rests on an eventual lower bound for $|y_k|$, proved below
rather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.

## Facts & Assumptions

**Given:** Sequences $(x_k)$, $(y_k)$ of reals with $(x_k)$ converging to $x$ and $(y_k)$ converging to $y$, and a real $c$ ([[def-sequence]], [[def-real-limit]]). For the last two claims we assume in addition $y \ne 0$ and $y_k \ne 0$ for every $k$.

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Absolute value and the triangle inequality: $|uv| = |u|\,|v|$, $|u| \ge 0$, $|u| = 0$ if and only if $u = 0$, $|-u| = |u|$, and $|a + b| \le |a| + |b|$ ([[lem-of-abs-value]], [[lem-of-triangle-inequality]]).

[L3] Real versus rational $\varepsilon$: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$ ([[lem-of-inverse-positive]]); consequently the convergence test of [[def-real-limit]] may equivalently be run with real $\varepsilon > 0$ ([[def-sequence]]).

[L4] Convergent sequences are bounded ([[lem-convergent-implies-bounded]]), and a constant sequence $(c)$ is bounded by $|c|$ ([[def-sequence]]).

[L5] A null sequence times a bounded sequence is null ([[lem-null-times-bounded]]).

[L6] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$, hence $|u| \ge |v| - |v - u|$ ([[cor-of-reverse-triangle]]).

[L7] Inverses and order: $a > 0$ implies $a^{-1} > 0$; $0 < a < b$ implies $0 < b^{-1} < a^{-1}$; $(u^{-1})^{-1} = u$ for $u \ne 0$ ([[lem-of-inverse-positive]], [[def-field]]).

[L8] Order arithmetic in $\mathbb{R}$: adding a constant and adding inequalities preserve the order, multiplying a strict inequality by a positive factor preserves it, and $\le$ and $<$ compose transitively; trichotomy holds, and since $u \ge 0$ means $u > 0$ or $u = 0$, an element with $u \ge 0$ and $u \ne 0$ satisfies $u > 0$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-complete-ordered-field]], [[def-ordered-field]]). Moreover $2 = 1 + 1 > 0$ and $2$ is invertible: $0 < 1$ in any ordered field ([[cor-of-one-positive]]) and the positives are closed under addition, so $2 > 0$ and in particular $2 \ne 0$ ([[def-ordered-field]]), whence $2^{-1}$ exists ([[def-field]]).

[L9] Rational arithmetic: $\varepsilon/2$ is a rational $> 0$ whenever $\varepsilon$ is, and $\varepsilon/2 + \varepsilon/2 = \varepsilon$ ([[thm-rat-ordered-field]]); the order on $\mathbb{N}$ is total, so finitely many thresholds admit a common index ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Reduction to null sequences: for any sequence $(z_k)$ of reals and any real $z$, the statements "$(z_k)$ converges to $z$" and "$(z_k - z)$ converges to $0$" are literally the same condition, because $|(z_k - z) - 0| = |z_k - z|$ for every $k$. [L1, L2]

1.2 Sum rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$ be any convergent sequences of reals and let $\varepsilon > 0$ be rational; take $K_1$ with $|u_k - u| < \varepsilon/2$ for $k \ge K_1$ and $K_2$ with $|v_k - v| < \varepsilon/2$ for $k \ge K_2$, and let $K$ be an index at least as large as both. For $k \ge K$, $|(u_k + v_k) - (u + v)| = |(u_k - u) + (v_k - v)| \le |u_k - u| + |v_k - v| < \varepsilon/2 + \varepsilon/2 = \varepsilon$; hence $u_k + v_k \to u + v$, and in particular $x_k + y_k \to x + y$. [L1, L2, L8, L9, algebra]

1.3 Boundedness: every convergent sequence of reals is bounded, and every constant sequence $(d)$ is bounded by $|d|$. [L4]

1.4 Quotient preparation. Assume $y \ne 0$ and $y_k \ne 0$ for every $k$. Then $|y| > 0$ by [L2], so $|y|/2 > 0$; running the convergence test of $(y_k)$ with the real number $|y|/2$ as tolerance, which [L3] licenses, produces $K_0 \in \mathbb{N}$ with $|y_k - y| < |y|/2$ for all $k \ge K_0$. [L1, L2, L3, L7, L8, choose]

2.1 Scalar rule, in general form. Let $(u_k) \to u$ and let $d \in \mathbb{R}$. By step 1.1 the sequence $(u_k - u)$ is null and by step 1.3 the constant sequence $(d)$ is bounded, so $(d(u_k - u)) = (d u_k - d u)$ is null by [L5]; by step 1.1 again, $d u_k \to d u$, and in particular $c x_k \to c x$. [step 1.1, step 1.3, L5, algebra]

2.2 Product rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$, and write $u_k v_k - u v = u_k(v_k - v) + v(u_k - u)$. By step 1.1 both $(v_k - v)$ and $(u_k - u)$ are null; by step 1.3 both $(u_k)$ and the constant sequence $(v)$ are bounded; so both $(u_k(v_k - v))$ and $(v(u_k - u))$ are null by [L5], and their sum is null by step 1.2 applied with both limits equal to $0$. By step 1.1, $u_k v_k \to u v$, and in particular $x_k y_k \to x y$. [step 1.1, step 1.2, step 1.3, L5, algebra]

2.3 Eventual lower bound. For every $k \ge K_0$, the reverse triangle inequality gives $|y_k| \ge |y| - |y - y_k| = |y| - |y_k - y| > |y| - |y|/2 = |y|/2 > 0$; so $|y_k| > |y|/2$ for all $k \ge K_0$, and in particular $|y_k| \ne 0$ there. [step 1.4, L2, L6, L8]

3.1 Difference rule. Applying step 2.1 to the sequence $(y_k)$ with $d = -1$ gives $-y_k \to -y$; the sum rule of step 1.2 applied to $(x_k)$ and $(-y_k)$ then gives $x_k - y_k = x_k + (-y_k) \to x + (-y) = x - y$. [step 1.2, step 2.1, L8, algebra]

3.2 Reciprocal estimate. For $k \ge K_0$ we have $y_k \ne 0$ and $|y_k| > |y|/2 > 0$, so [L7] applied to $0 < |y|/2 < |y_k|$ gives $0 < |y_k|^{-1} < 2/|y|$, and therefore $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| = \dfrac{|y - y_k|}{|y_k|\,|y|} \le \dfrac{2}{|y|^2}\,|y_k - y|$. [step 2.3, L2, L7, L8, algebra]

4.1 Reciprocal rule. Let $\varepsilon > 0$ be an arbitrary real and put $\eta := \varepsilon |y|^2/2$, a real $> 0$; by [L3] there is $K_1$ with $|y_k - y| < \eta$ for all $k \ge K_1$. For every $k$ at least as large as both $K_0$ and $K_1$, step 3.2 gives $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| \le \dfrac{2}{|y|^2}|y_k - y| < \dfrac{2}{|y|^2}\,\eta = \varepsilon$; hence $1/y_k \to 1/y$. [step 3.2, L1, L3, L7, L8, L9, algebra]

5.1 Quotient rule. By step 4.1 the sequence $(1/y_k)$ converges to $1/y$, so the product rule of step 2.2 applied to $(x_k)$ and $(1/y_k)$ gives $x_k/y_k = x_k \cdot (1/y_k) \to x \cdot (1/y) = x/y$. [step 2.2, step 4.1, algebra]

6.1 All the claims are established: the sum rule in step 1.2, the scalar rule in step 2.1, the difference rule in step 3.1, the product rule in step 2.2, and the reciprocal and quotient rules in steps 4.1 and 5.1. [step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- **The quotient case is where proofs usually cheat.** The estimate $|1/y_k - 1/y| = |y - y_k| / (|y_k||y|)$ is worthless until $|y_k|$ is known to stay away from $0$: without a lower bound the denominator can be arbitrarily small and the fraction arbitrarily large, even while $|y - y_k|$ shrinks. Step 2.3 supplies that bound, $|y_k| > |y|/2$ for $k \ge K_0$, and it is proved from the reverse triangle inequality, not assumed.

- The hypothesis $y_k \ne 0$ for every $k$ is only there so that $1/y_k$ is defined for every index. It is not needed for the limit: step 2.3 shows $|y_k| > |y|/2 > 0$ from $K_0$ on, so a sequence with $y \ne 0$ has at most finitely many zero terms, and by [[lem-limit-of-tail]] one may pass to the $K_0$-th tail and read the conclusion there.

- The hypothesis $y \ne 0$ cannot be dropped. With $x_k = 1$ and $y_k = 1/(k+1)$, both sequences converge: the first is constant ([[def-sequence]]) and the second is null ([[fs-limit-preserves-strict-inequality]]), so $y = 0$. Yet $x_k/y_k = k+1$, and no real $M$ bounds every $k+1$, by the Archimedean property ([[thm-of-archimedean]]); so the quotient sequence is unbounded, hence not convergent by [[lem-convergent-implies-bounded]].

- Nothing in the proof uses completeness of $\mathbb{R}$ beyond the Archimedean property invoked in [L3], so the same rules hold verbatim for sequences of rationals.
````

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
````

### `thm-monotone-convergence`

````markdown
---
id: thm-monotone-convergence
kind: theorem
title: "A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monotone-sequence, def-sequence, def-real-limit, def-complete-ordered-field, def-bounded-set, lem-sup-epsilon, lem-sup-unique, lem-inf-epsilon, thm-infimum-property, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.14)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.3 (Prop. 6.3.8)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.2 (Thm 2.2.5)"
      url: "https://www.jirka.org/ra/"
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let
$S = \{x_k : k \in \mathbb{N}\}$ be its range.

1. If $(x_k)$ is nondecreasing ([[def-monotone-sequence]]) and $S$ is bounded
   above ([[def-bounded-set]]), then $(x_k)$ converges ([[def-real-limit]]) and
   $$\lim_{k} x_k = \sup S .$$
2. If $(x_k)$ is nonincreasing and $S$ is bounded below, then $(x_k)$ converges
   and $$\lim_{k} x_k = \inf S .$$

Both suprema and infima exist under the stated hypotheses: $S$ is nonempty, so
the least-upper-bound property ([[def-complete-ordered-field]]) supplies the
first and [[thm-infimum-property]] the second, and each is unique
([[lem-sup-unique]]).

This is the first place in this track where the least-upper-bound property
produces a **limit**. Everything on the sequences page held in any Archimedean
ordered field; the theorem below does not, and the sequence of decimal
truncations of $\sqrt 2$ inside $\mathbb{Q}$ is the standard witness of its
failure there.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals with range $S = \{x_k : k \in \mathbb{N}\}$, which is nonempty since $x_0 \in S$.

[L1] Least-upper-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ that is bounded above has a unique supremum, which is an upper bound of it ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L2] Greatest-lower-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ that is bounded below has a unique infimum, which is a lower bound of it ([[thm-infimum-property]], [[lem-sup-unique]]).

[L3] Epsilon characterisation of the supremum: if $u$ is an upper bound of a nonempty $S$, then $u = \sup S$ exactly when for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L4] Epsilon characterisation of the infimum: if $\ell$ is a lower bound of a nonempty $T$, then $\ell = \inf T$ exactly when for every $\varepsilon > 0$ there is $t \in T$ with $t < \ell + \varepsilon$ ([[lem-inf-epsilon]]).

[L5] Monotonicity: nondecreasing means $x_j \le x_k$ whenever $j \le k$, and nonincreasing means $x_j \ge x_k$ whenever $j \le k$ ([[def-monotone-sequence]]).

[L6] Convergence, tested against a real $\varepsilon$: $(x_k)$ converges to $x$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and producing such a $K$ for every *real* $\varepsilon > 0$ establishes this, since every positive rational is a positive real ([[def-real-limit]], [[def-sequence]]).

[L7] Absolute value: for $c > 0$, $|t| < c$ exactly when $-c < t < c$ ([[lem-of-abs-value]]).

[L8] Bounded above and bounded below, for a subset of $\mathbb{R}$ ([[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 Assume $(x_k)$ is nondecreasing and $S$ is bounded above. Since $S$ is nonempty, $u := \sup S$ exists, is unique, and is an upper bound of $S$. [given, L1, L8]

1.2 Assume $(y_k)$ is nonincreasing with range $T$ bounded below. Since $T$ is nonempty, $\ell := \inf T$ exists, is unique, and is a lower bound of $T$. [given, L2, L8]

2.1 Every term satisfies $x_k \le u$, because $x_k \in S$ and $u$ is an upper bound of $S$. [step 1.1, L1]

2.2 Every term satisfies $\ell \le y_k$, because $y_k \in T$ and $\ell$ is a lower bound of $T$. [step 1.2, L2]

2.3 Let $\varepsilon > 0$ be an arbitrary real. By [L3] there is $s \in S$ with $u - \varepsilon < s$, and every element of $S$ is a term, so $s = x_K$ for some $K \in \mathbb{N}$. [step 1.1, L3, choose]

2.4 Let $\varepsilon > 0$ be an arbitrary real. By [L4] there is $t \in T$ with $t < \ell + \varepsilon$, and $t = y_L$ for some $L \in \mathbb{N}$. [step 1.2, L4, choose]

3.1 For every $k \ge K$ we have $x_K \le x_k$ by monotonicity, hence $u - \varepsilon < x_K \le x_k$. [step 2.3, L5]

3.2 For every $k \ge L$ we have $y_k \le y_L$ by monotonicity, hence $y_k \le y_L < \ell + \varepsilon$. [step 2.4, L5]

4.1 For every $k \ge K$: subtracting $u$ from $u - \varepsilon < x_k \le u$ gives $-\varepsilon < x_k - u \le 0 < \varepsilon$, so $|x_k - u| < \varepsilon$. [step 2.1, step 3.1, L7, algebra]

4.2 For every $k \ge L$: subtracting $\ell$ from $\ell \le y_k < \ell + \varepsilon$ gives $-\varepsilon < 0 \le y_k - \ell < \varepsilon$, so $|y_k - \ell| < \varepsilon$. [step 2.2, step 3.2, L7, algebra]

5.1 The real $\varepsilon > 0$ was arbitrary and $K$ was produced from it, so $(x_k)$ converges to $u = \sup S$, which is claim 1. [step 4.1, L6]

5.2 The real $\varepsilon > 0$ was arbitrary and $L$ was produced from it, so $(y_k)$ converges to $\ell = \inf T$, which is claim 2. [step 4.2, L6]

6.1 Both claims are established, so a nondecreasing sequence bounded above converges to the supremum of its range and a nonincreasing sequence bounded below converges to the infimum of its range. [step 5.1, step 5.2] ∎

## Remarks

- **Only one half is proved twice.** Claim 2 could instead be deduced from claim
  1 by reflection, since $(-y_k)$ is nondecreasing and bounded above and
  $\inf T = -\sup(-T)$ ([[thm-infimum-property]]). The direct argument is written
  out because it is no longer, and because it puts [[lem-inf-epsilon]] to work in
  the place it was proved for, rather than routing an infimum statement through a
  supremum statement and a sign change.

- **The limit is the supremum of the range, not merely some upper bound.** That
  identification is what [[lem-sup-epsilon]] supplies and it is the useful part
  of the theorem: it is how a limit is *computed* from a monotone construction,
  as in the recursive sequences of the examples page, rather than merely shown to
  exist.

- **Boundedness on the other side is automatic and is not a hypothesis.** A
  nondecreasing sequence is bounded below by $x_0$ ([[def-monotone-sequence]]),
  so "nondecreasing and bounded above" already means "nondecreasing and bounded";
  this is what makes [[cor-monotone-converges-iff-bounded]] an equivalence rather
  than a one-sided statement.

- **Without the hypothesis of boundedness the conclusion fails completely, and
  fails in a describable way**: a nondecreasing sequence that is not bounded
  above diverges to $+\infty$ ([[lem-monotone-unbounded-diverges]]), so a
  nondecreasing sequence either converges to the supremum of its range or runs
  away, with no third possibility.
````

### `thm-nonnegative-series-bounded-partial-sums`

````markdown
---
id: thm-nonnegative-series-bounded-partial-sums
kind: theorem
title: "A series of nonnegative terms converges iff its partial sums are bounded, and then the sum is their supremum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-monotone-sequence, thm-monotone-convergence, cor-monotone-converges-iff-bounded, lem-monotone-unbounded-diverges, def-bounded-set, def-finite-sum, lem-finite-sum-laws, def-sequence, def-divergence-to-infinity, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-comparison-needs-nonnegativity]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.24)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k \ge 0$ for every $k \in \mathbb{N}$,
let $s_n = \sum_{k<n} a_k$ be its partial sums and let
$S = \{\, s_n : n \in \mathbb{N} \,\}$ be the range of $(s_n)$ ([[def-series]]).
Then:

1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \ge 0$ for every
   $n$;
2. $\sum a_k$ converges **if and only if** $S$ is bounded above
   ([[def-bounded-set]]), and in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; \sup S ,$$
   so in particular $s_n \le \sum_{k=0}^{\infty} a_k$ for every $n$;
3. if $S$ is not bounded above then $s_n \to +\infty$
   ([[def-divergence-to-infinity]]) and $\sum a_k$ diverges.

This is the theorem that makes the nonnegative theory work: for terms of one
sign, convergence is a boundedness question and no candidate limit is ever
needed. Every comparison test on this page is an application of it.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k \ge 0$ for every $k$, its partial sums $s_n = \sum_{k<n} a_k$, and the range $S = \{s_n : n \in \mathbb{N}\}$ ([[def-series]], [[def-finite-sum]], [[def-sequence]]).

[L1] The recursion clause of the finite sum: $s_{n+1} = s_n + a_n$ ([[def-finite-sum]]).

[L2] Consecutive comparisons suffice for monotonicity: $(x_k)$ is nondecreasing if and only if $x_k \le x_{k+1}$ for every $k$; and a nondecreasing sequence is bounded below by its first term ([[def-monotone-sequence]]).

[L3] Monotonicity of finite sums: if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$ ([[lem-finite-sum-laws]]).

[L4] A monotone sequence converges if and only if it is bounded, that is if and only if there is $M$ with $|x_k| \le M$ for every $k$ ([[cor-monotone-converges-iff-bounded]], [[def-sequence]]).

[L5] A nondecreasing sequence bounded above converges to the supremum of its range, which exists by the least-upper-bound property ([[thm-monotone-convergence]], [[def-complete-ordered-field]], [[def-bounded-set]]).

[L6] A nondecreasing sequence whose range is not bounded above diverges to $+\infty$ ([[lem-monotone-unbounded-diverges]], [[def-divergence-to-infinity]]).

## Proof

**Proof technique:** direct.

1.1 For every $n$, $s_{n+1} - s_n = a_n \ge 0$, so $s_n \le s_{n+1}$ and $(s_n)$ is nondecreasing. [given, L1, L2]

1.2 For every $n$, $s_n = \sum_{k<n} a_k \ge 0$, all terms being nonnegative. [given, L3]

2.1 Claim 1 is steps 1.1 and 1.2 together. [step 1.1, step 1.2]

2.2 Since $s_n \ge 0$ we have $|s_n| = s_n$, so $(s_n)$ is bounded in the sense of [L4] if and only if $S$ is bounded above. [step 1.2, L4]

3.1 By [L4] applied to the monotone sequence $(s_n)$, the series converges if and only if $(s_n)$ is bounded, hence if and only if $S$ is bounded above. [step 1.1, step 2.2, L4]

4.1 If $S$ is bounded above then $(s_n)$ converges to $\sup S$, so $\sum a_k$ converges with sum $\sup S$; and since $\sup S$ is an upper bound of $S$, $s_n \le \sup S$ for every $n$. [step 1.1, step 3.1, L5]

4.2 If $S$ is not bounded above then $s_n \to +\infty$, and by step 3.1 the series diverges. [step 1.1, step 3.1, L6]

5.1 The equivalence and the identification of the sum as the supremum together make claim 2, and the divergence statement is claim 3. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **"Bounded" and "bounded above" coincide here, and only here.** The equivalence used in step 2.2 rests on $s_n \ge 0$, which rests on every term being nonnegative. For a series with terms of both signs the partial sums can be bounded above and still fail to converge, so nothing in this theorem survives the loss of the sign hypothesis. That failure is exhibited by [[cex-comparison-needs-nonnegativity]] on the companion page.

- **Claim 3 is a strictly stronger statement than "diverges".** Divergence alone permits oscillation ([[def-series]]); for nonnegative terms it cannot occur, and the partial sums necessarily run to $+\infty$. This is what licenses the phrase "the series diverges to $+\infty$" for nonnegative terms, and it is what the Abel-Dini theorem later on this page uses.

- **This criterion is the monotone convergence property, worn differently.** The proof above is monotone convergence for $\mathbb{R}$ applied to the nondecreasing sequence of partial sums, and nothing is lost going back the other way. Given a nondecreasing sequence $(x_n)$ of reals, put $y_n := x_n - x_0 \ge 0$ and let $a_0 := 0$, $a_{k+1} := y_{k+1} - y_k \ge 0$; then $s_{n+1} = y_n$ ([[def-series]]), the partial sums are bounded exactly when $(x_n)$ is bounded above, and claim 1 returns the convergence of $(y_n)$ and so of $(x_n)$. Testing boundedness of partial sums is therefore not a device special to series. Read in the vocabulary of [[def-completeness-properties]] it is the property (MCT), which in an arbitrary ordered field already forces the Archimedean property on its own ([[lem-mct-implies-archimedean]]) and with it the least-upper-bound property ([[lem-mct-implies-lub]]). The translation just given is carried out in $\mathbb{R}$, since [[def-series]] is stated for sequences of reals and this library defines no series over a general ordered field.
````

### `thm-reals-cauchy-complete`

````markdown
---
id: thm-reals-cauchy-complete
kind: theorem
title: "The reals are complete"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-limit, lem-rat-embeds-dense, lem-rat-archimedean, thm-reals-ordered-field, def-real-numbers, def-rational-cauchy-sequence, def-real-order]
aliases: []
landmark: true
short: "ℝ complete"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "L. S. Krapp, Constructions of the real numbers: a set theoretical approach (Oxford, 2014)"
      url: "https://www.math.uni-konstanz.de/~krapp/research/Constructions_of_the_real_numbers.pdf"
pipeline_run: null
---

## Statement

Every Cauchy sequence of real numbers ([[def-real-limit]]) converges to a real
number. Together with [[thm-reals-ordered-field]], this completes the
construction: $\mathbb{R}$ is a complete totally ordered field.

## Facts & Assumptions

**Given:** A Cauchy sequence $(x_k)_{k \ge 1}$ of reals.

[L1] Rational approximation: for any real $z$ and rational $\eta > 0$ there is $q$ with $|z - \hat q| < \hat\eta$ ([[lem-rat-embeds-dense]]).

[L2] Archimedean property: for rational $\varepsilon > 0$ there is $k$ with $1/k < \varepsilon$ ([[lem-rat-archimedean]]).

[L3] Cauchy definitions in $\mathbb{Q}$ and $\mathbb{R}$ ([[def-rational-cauchy-sequence]], [[def-real-limit]]).

[L4] The embedding preserves and reflects order and arithmetic; triangle inequality in $\mathbb{R}$ ([[lem-rat-embeds-dense]], [[thm-reals-ordered-field]], [[def-real-order]]).

[L5] Reals are classes of rational Cauchy sequences ([[def-real-numbers]]).

## Proof

**Proof technique:** direct.

1.1 For each $k \ge 1$ pick a rational $q_k$ with $|x_k - \hat q_k| < \widehat{1/k}$. [L1, choose]

2.1 $(q_k)$ is Cauchy in $\mathbb{Q}$: given rational $\varepsilon > 0$, pick $k_0$ with $1/k_0 < \varepsilon/3$ and $K$ with $|x_k - x_l| < \widehat{\varepsilon/3}$ for $k, l \ge K$; then for $k, l \ge \max(k_0, K)$, $\widehat{|q_k - q_l|} \le |\hat q_k - x_k| + |x_k - x_l| + |x_l - \hat q_l| < \widehat{1/k} + \widehat{\varepsilon/3} + \widehat{1/l} \le 3\,\widehat{\varepsilon/3} = \hat\varepsilon$, and the embedding reflects order, so $|q_k - q_l| < \varepsilon$. [step 1.1, L2, L3, L4]

3.1 Set $x := [(q_k)] \in \mathbb{R}$, the class of this rational Cauchy sequence. [step 2.1, L5]

4.1 $x_k \to x$: given rational $\varepsilon > 0$, pick $k_1$ with $1/k_1 < \varepsilon/3$ and $K_2$ with $|q_k - q_l| < \varepsilon/3$ for $k, l \ge K_2$; for $k \ge \max(k_1, K_2)$, the difference $\hat q_k - x$ has representative $(q_k - q_l)_l$, whose absolute values $|q_k - q_l|$ are eventually below $\varepsilon/3$, so $|\hat q_k - x| \le \widehat{\varepsilon/3}$, and $|x_k - x| \le |x_k - \hat q_k| + |\hat q_k - x| < \widehat{1/k} + \widehat{\varepsilon/3} \le 2\,\widehat{\varepsilon/3} < \hat\varepsilon$. [step 1.1, step 2.1, step 3.1, L4]

5.1 Every Cauchy sequence of reals converges in $\mathbb{R}$: the reals are complete. [step 4.1] ∎
````

### `thm-squeeze`

````markdown
---
id: thm-squeeze
kind: theorem
title: "The squeeze theorem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [def-real-limit, def-sequence, lem-of-add-order, lem-of-abs-value, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [sandwich-theorem]
landmark: true
short: "squeeze"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Squeeze theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Squeeze_theorem"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(a_k)$, $(x_k)$ and $(b_k)$ be sequences of reals ([[def-sequence]]) with

$$a_k \le x_k \le b_k \quad \text{eventually},$$

and suppose $(a_k)$ and $(b_k)$ both converge to the same real $L$
([[def-real-limit]]). Then $(x_k)$ converges to $L$.

The middle sequence is not assumed to converge; that is the point of the
theorem, and it is why the squeeze is a tool for *establishing* convergence
rather than for computing a limit already known to exist.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(x_k)$, $(b_k)$ of reals, an index $K_0 \in \mathbb{N}$ with $a_k \le x_k \le b_k$ for every $k \ge K_0$, and a real $L$ such that $(a_k)$ converges to $L$ and $(b_k)$ converges to $L$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Absolute value: for $c > 0$, $|u| < c$ if and only if $-c < u < c$ ([[lem-of-abs-value]]).

[L3] Order arithmetic in $\mathbb{R}$: adding a constant preserves $<$ and $\le$; $u < v \le w$ and $u \le v < w$ both give $u < w$; and $\le$ is transitive ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

[L4] The order on $\mathbb{N}$ is total and transitive, so three indices $K_0, K_1, K_2$ admit an index $K$ with $K \ge K_0$, $K \ge K_1$ and $K \ge K_2$, and then $k \ge K$ gives $k \ge K_0$, $k \ge K_1$, $k \ge K_2$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be rational. By convergence of $(a_k)$ there is $K_1$ with $|a_k - L| < \varepsilon$ for all $k \ge K_1$, and by convergence of $(b_k)$ there is $K_2$ with $|b_k - L| < \varepsilon$ for all $k \ge K_2$. [L1]

2.1 By [L2], $|a_k - L| < \varepsilon$ gives $-\varepsilon < a_k - L$, that is $L - \varepsilon < a_k$, for all $k \ge K_1$; and $|b_k - L| < \varepsilon$ gives $b_k - L < \varepsilon$, that is $b_k < L + \varepsilon$, for all $k \ge K_2$. [step 1.1, L2, L3]

3.1 Choose $K$ with $K \ge K_0$, $K \ge K_1$ and $K \ge K_2$. For every $k \ge K$ the hypothesis gives $a_k \le x_k \le b_k$, so $L - \varepsilon < a_k \le x_k \le b_k < L + \varepsilon$, hence $L - \varepsilon < x_k < L + \varepsilon$, hence $-\varepsilon < x_k - L < \varepsilon$, hence $|x_k - L| < \varepsilon$. [step 2.1, given, L2, L3, L4, choose]

4.1 The rational $\varepsilon > 0$ was arbitrary, so for every rational $\varepsilon > 0$ there is an index $K$ beyond which $|x_k - L| < \varepsilon$; that is, $(x_k)$ converges to $L$. [step 3.1, L1] ∎

## Remarks

- The proof is direct from the definition and does not route through [[lem-limit-preserves-order]]. It could not: that lemma assumes the middle sequence converges, which is what is being proved here.

- Both bounding sequences must have the **same** limit. With $a_k = -1$, $b_k = 1$ and any $(x_k)$ taking values in $[-1, 1]$ the hypothesis $a_k \le x_k \le b_k$ holds and nothing whatever follows, since a bounded sequence need not converge ([[fs-bounded-implies-convergent]]).

- The most common use is with $a_k = -c_k$ and $b_k = c_k$ for a null sequence $(c_k)$: if $|x_k| \le c_k$ eventually and $c_k \to 0$, then $x_k \to 0$. That special case also follows from [[lem-null-times-bounded]] whenever $x_k$ is presented as a product of a null sequence and a bounded one, but the squeeze needs no such presentation.
````

