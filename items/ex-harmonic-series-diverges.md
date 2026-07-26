---
id: ex-harmonic-series-diverges
kind: example
title: "The harmonic series $\\sum 1/k$ diverges, by condensation and by Oresme block grouping"
status: published
origin: session
deps: [thm-cauchy-condensation, thm-p-series-rational, def-series, lem-nth-term-test, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-integer-power, lem-power-monotone, lem-of-inverse-positive, lem-of-naturals-positive, thm-of-archimedean, def-monotone-sequence, def-rational-power, def-bounded-set]
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
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Cauchy condensation test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_condensation_test"
pipeline_run: null
---

## Example

The **harmonic series** is $\sum_{k \ge 1} 1/k$, the series from the starting
index $1$ ([[def-series]]) of the family $a_k = 1/\iota(k)$; the index $0$ is
excluded because $1/0$ has no value. It **diverges**, and its partial sums are
unbounded above.

This is the case $p = 1$ of [[thm-p-series-rational]]. The two arguments below do
not use that theorem: the first is the condensation argument, which is how
[[thm-p-series-rational]] itself is proved and which here degenerates to
something one can read off; the second is Oresme's block grouping from the
fourteenth century, which uses no test at all and produces the explicit lower
bound

$$\sum_{k=1}^{2^{n}} \frac{1}{k} \;\ge\; 1 + \frac{n}{2} \qquad (n \in \mathbb{N}) .$$

That bound is worth having on its own: it says the harmonic partial sums grow at
least like a constant multiple of $n$ along the powers of $2$, which is the
slowest divergence any explicit series on this page exhibits.

## Facts & Assumptions

**Given:** The family $a_k := 1/\iota(k)$ for naturals $k \ge 1$, with $\iota(k)$ the canonical natural; its partial sums $A_m = \sum_{k=1}^{m} a_k$ ([[def-series]], [[def-finite-sum]], [[lem-of-naturals-positive]]).

[L1] The canonical naturals are positive and order preserving: $0 < \iota(j) \le \iota(k)$ for $1 \le j \le k$; and reciprocation reverses the order on the positives ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] Condensation: for a nonnegative nonincreasing family from $1$, $\sum_{k \ge 1} x_k$ converges if and only if $\sum_{j \ge 0} 2^{j} x_{2^{j}}$ converges ([[thm-cauchy-condensation]], [[def-monotone-sequence]]).

[L3] A series whose terms do not tend to $0$ diverges ([[lem-nth-term-test]]).

[L4] Powers of $2$: $2^{j} \ge 1$, $2^{j+1} = 2\cdot 2^{j}$, and $2^{j} \cdot (1/2^{j}) = 1$ ([[def-integer-power]], [[lem-power-monotone]]).

[L5] Splitting and monotonicity of finite sums, and the number of terms in $\sum_{k=p}^{q}$, namely $q+1-p$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L6] The principle of induction ([[thm-induction-principle]]); and for every real $x$ there is a natural $n$ with $\iota(n) > x$ ([[thm-of-archimedean]]).

[L7] For a series of nonnegative terms: it converges if and only if the range of its partial sums is bounded above ([[thm-nonnegative-series-bounded-partial-sums]], [[def-bounded-set]]).

[L8] The rational power at exponent $1$ is the element itself, so $k^{1} = \iota(k)$ and the family here is the case $p = 1$ of the $p$-series ([[def-rational-power]], [[thm-p-series-rational]]).

## Verification

**Proof technique:** direct.

1.1 Each $a_k = 1/\iota(k)$ is positive, and $a_j \ge a_k$ whenever $1 \le j \le k$, since $0 < \iota(j) \le \iota(k)$ and reciprocation reverses the order. [given, L1]

1.2 For every $n \in \mathbb{N}$ the block $\sum_{k=2^{n}+1}^{2^{n+1}} 1/k$ has $2^{n+1} - 2^{n} = 2^{n}$ terms, each with index $k \le 2^{n+1}$ and hence each at least $1/2^{n+1}$; so the block is at least $2^{n} \cdot \dfrac{1}{2^{n+1}} = \dfrac{1}{2}$. [L1, L4, L5]

2.1 So the family is nonnegative and nonincreasing, and condensation applies to it. [step 1.1, L2]

2.2 An induction on $n$ gives $A_{2^{n}} \ge 1 + \iota(n)/2$ for every $n \in \mathbb{N}$. At $n = 0$ it reads $A_1 = 1 \ge 1$; and if it holds at $n$ then, splitting at $2^{n}$, $A_{2^{n+1}} = A_{2^{n}} + \sum_{k=2^{n}+1}^{2^{n+1}} 1/k \ge 1 + \iota(n)/2 + 1/2 = 1 + \iota(n+1)/2$. [step 1.2, L5, L6]

3.1 The condensed terms are $2^{j} a_{2^{j}} = 2^{j}\cdot \dfrac{1}{2^{j}} = 1$ for every $j \in \mathbb{N}$. [step 2.1, L4]

3.2 The range of the partial sums is not bounded above: given a real $M$, choose a natural $n$ with $\iota(n) > 2M$; then $A_{2^{n}} \ge 1 + \iota(n)/2 > 1 + M > M$. [step 2.2, L6, choose]

4.1 The condensed series is therefore $\sum_{j \ge 0} 1$, whose terms are constantly $1$ and so do not converge to $0$; it diverges. [step 3.1, L3]

5.1 By condensation, $\sum_{k \ge 1} 1/k$ diverges. That is the first argument. [step 4.1, step 2.1, L2]

6.1 Since the terms are nonnegative, the series diverges and its partial sums are unbounded above. That is the second argument, and it recovers the conclusion of step 5.1 without using any convergence test. [step 3.2, step 1.1, L7] ∎

## Remarks

- **Why the two arguments are the same argument.** Oresme's blocks are the blocks of the condensation proof, grouped from $2^{n}+1$ to $2^{n+1}$, and the constant $1/2$ in step 1.2 is the constant that makes the condensed terms of step 3.1 equal to $1$. The difference is bookkeeping: condensation states the grouping once and for all, for every nonincreasing family, and the block argument performs it for this one family.

- **The divergence is extremely slow, and the bound says how slow.** To make the partial sum exceed $M$ the estimate of step 2.2 asks for about $2^{2M}$ terms. That is why the harmonic series is the standard warning against reading convergence off numerical evidence.

- **The bound in step 2.2 is one sided.** Nothing here says the partial sums are *at most* $1 + n/2$ along powers of $2$, and in fact they are not; the matching upper bound is the other half of the condensation estimate, and it is not needed for divergence.
