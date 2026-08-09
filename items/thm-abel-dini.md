---
id: thm-abel-dini
kind: theorem
title: "For a divergent series of positive terms with partial sums $s_k$, the series $\\sum a_k/s_k$ diverges and $\\sum a_k/s_k^2$ converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-series, thm-nonnegative-series-bounded-partial-sums, thm-series-cauchy-criterion, lem-telescoping-series, thm-direct-comparison-test, def-monotone-sequence, lem-monotone-unbounded-diverges, def-divergence-to-infinity, def-integer-power, lem-reciprocal-of-null-diverges, lem-of-inverse-positive, lem-series-tail-invariance, def-finite-sum, lem-finite-sum-laws, def-real-limit]
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
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "Abel-Dini-Pringsheim theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abel%E2%80%93Dini%E2%80%93Pringsheim_theorem"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k > 0$ for every $k \in \mathbb{N}$
and suppose $\sum a_k$ **diverges** ([[def-series]]). Write

$$S_n \;:=\; \sum_{k=0}^{n} a_k \qquad (n \in \mathbb{N})$$

for the **inclusive** partial sums, so that $S_n = s_{n+1}$ in the notation
$s_n = \sum_{k<n} a_k$ of [[def-series]]. Then $S_n > 0$ for every
$n \in \mathbb{N}$, and:

1. $\displaystyle\sum_{n} \frac{a_n}{S_n}$ diverges;
2. $\displaystyle\sum_{n} \frac{a_n}{S_n^{2}}$ converges.

**Why the divisor is the inclusive partial sum.** The exclusive partial sum of
[[def-series]] has $s_0 = 0$, the empty sum, so $a_0/s_0$ has no value and a
series divided by $s_n$ would have to begin at $n = 1$. The inclusive sum has
$S_0 = a_0 > 0$, so both series above are series of sequences on $\mathbb{N}$
with no shift and no excluded index. The classical statement, which writes
$s_n = a_1 + \dots + a_n$ and starts at $n = 1$, is this one with the indices
moved by one.

**What the theorem says.** No divergent series of positive terms is slowest:
dividing its terms by the running total produces a series that still diverges but
whose terms are eventually strictly smaller. Dividing by the square of the
running total overshoots and produces a convergent series. Claim 1 is what
refutes the existence of a universal comparison series
([[fs-universal-comparison-series]]).

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$, with $\sum a_k$ divergent; the exclusive partial sums $s_n = \sum_{k<n} a_k$ and the inclusive partial sums $S_n = \sum_{k=0}^{n} a_k = s_{n+1}$ ([[def-series]], [[def-finite-sum]]).

[L1] For a series of nonnegative terms: the partial sums are nondecreasing, the series converges if and only if their range is bounded above, and otherwise they diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]], [[lem-monotone-unbounded-diverges]], [[def-monotone-sequence]], [[def-divergence-to-infinity]]).

[L2] Splitting of finite sums: for $m \le n$, $\sum_{k=0}^{n} a_k = \sum_{k=0}^{m} a_k + \sum_{k=m+1}^{n} a_k$, so $\sum_{k=m+1}^{n} a_k = S_n - S_m$; and monotonicity of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L3] The Cauchy criterion: $\sum d_k$ converges if and only if for every real $\varepsilon > 0$ there is $N$ with $\big|\sum_{k=m+1}^{n} d_k\big| < \varepsilon$ for all $n > m \ge N$ ([[thm-series-cauchy-criterion]]).

[L4] For positive terms, $x_n \to 0$ if and only if $1/x_n \to +\infty$ ([[lem-reciprocal-of-null-diverges]], [[def-real-limit]]).

[L5] $\sum (b_n - b_{n+1})$ converges whenever $(b_n)$ converges ([[lem-telescoping-series]]).

[L6] Direct comparison ([[thm-direct-comparison-test]]), and a series converges if and only if each of its tail series converges ([[lem-series-tail-invariance]]).

[L7] Reciprocation on the positives: $0 < x \le y$ implies $0 < 1/y \le 1/x$ ([[lem-of-inverse-positive]]); and $x^{2} = x \cdot x$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 Every $S_n$ is a sum of positive terms, so $S_n > 0$; and $S_n \le S_{n+1}$ since $S_{n+1} - S_n = a_{n+1} > 0$, so $(S_n)$ is nondecreasing and $S_m \le S_n$ whenever $m \le n$. [given, L2, L1]

1.2 Since $\sum a_k$ diverges and its terms are nonnegative, the exclusive partial sums are unbounded above and $s_n \to +\infty$; hence $S_n = s_{n+1} \to +\infty$, because for a given real $M$ any index bound $K$ working for $(s_n)$ also works for $(S_n)$. [given, L1, algebra]

2.1 For all naturals $n > m$, using $S_k \le S_n$ for $k \le n$ and $a_k > 0$: $\displaystyle\sum_{k=m+1}^{n} \frac{a_k}{S_k} \ \ge \ \sum_{k=m+1}^{n} \frac{a_k}{S_n} \ = \ \frac{S_n - S_m}{S_n} \ = \ 1 - \frac{S_m}{S_n}$. [step 1.1, L2, L7]

2.2 Put $b_n := 1/S_n$, which is positive; since $1/b_n = S_n \to +\infty$, the sequence $(b_n)$ converges to $0$. [step 1.1, step 1.2, L4, L7]

2.3 For every $n \in \mathbb{N}$: $b_n - b_{n+1} = \dfrac{1}{S_n} - \dfrac{1}{S_{n+1}} = \dfrac{S_{n+1}-S_n}{S_n S_{n+1}} = \dfrac{a_{n+1}}{S_n S_{n+1}} \ \ge \ \dfrac{a_{n+1}}{S_{n+1}^{2}} \ > \ 0$, the inequality because $0 < S_n S_{n+1} \le S_{n+1}^{2}$. [step 1.1, L2, L7, algebra]

3.1 Let $N \in \mathbb{N}$ be arbitrary and put $m := N$. Since $S_n \to +\infty$ there is $n > m$ with $S_n > 2 S_m$, and then $S_m/S_n < 1/2$, so the block of step 2.1 satisfies $\sum_{k=m+1}^{n} a_k/S_k > 1/2$. [step 1.2, step 2.1, L7, choose]

3.2 Therefore $\sum_n (b_n - b_{n+1})$ converges. [step 2.2, L5]

4.1 So no $N$ witnesses the Cauchy condition for the tolerance $\varepsilon = 1/2$, and $\sum_n a_n/S_n$ diverges, which is claim 1. [step 3.1, L3]

5.1 By comparison, $\sum_n \dfrac{a_{n+1}}{S_{n+1}^{2}}$ converges; that series is the $1$-st tail series of $\sum_n \dfrac{a_n}{S_n^{2}}$, so the latter converges, which is claim 2. [step 3.2, step 2.3, L6] ∎

## Remarks

- **The two claims are not two theorems but one pair of estimates.** Divergence comes from bounding a block below by $1 - S_m/S_n$, which the Cauchy criterion turns into a refutation of convergence; convergence comes from bounding a single term above by a telescoping difference. The first estimate needs $S_n$ to grow without bound and the second needs it to be nondecreasing, and both facts come from divergence of $\sum a_k$ together with positivity of its terms.

- **The exponent $2$ is not optimal, and this page does not pursue that.** The classical refinement replaces $S_n^{2}$ by $S_n^{1+\delta}$ for a rational $\delta > 0$; the argument is the same in outline but needs an estimate for $S_n^{-\delta} - S_{n+1}^{-\delta}$ that the tools on this page do not supply cleanly. The square is what claim 1 needs a companion for, and it is enough for every use made of the theorem here.

- **Positivity is used at every step.** It gives $S_n > 0$, so the quotients exist; it makes $(S_n)$ nondecreasing, which both estimates use; and it makes the terms of the two derived series nonnegative, which is what lets comparison and the boundedness criterion apply to them.
