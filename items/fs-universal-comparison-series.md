---
id: fs-universal-comparison-series
kind: false-statement
title: "FALSE: there is a divergent series of positive terms that diverges more slowly than every other, hence a universal comparison test"
status: published
origin: session
deps: [thm-abel-dini, def-series, thm-nonnegative-series-bounded-partial-sums, lem-monotone-unbounded-diverges, def-divergence-to-infinity, def-monotone-sequence, lem-of-inverse-positive, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
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
pipeline_run: null
---

## Statement

**False claim:** there is a sequence $(b_k)$ of reals with $b_k > 0$ for every
$k \in \mathbb{N}$ such that $\sum b_k$ diverges ([[def-series]]) and such that
**every** sequence $(a_k)$ of reals with $a_k > 0$ for every $k$ and $\sum a_k$
divergent satisfies

$$b_k \le a_k \quad \text{for all } k \text{ from some index on.}$$

Such a $(b_k)$ would be a *slowest* divergent series of positive terms, and it
would give a universal comparison test: a positive series would diverge exactly
when its terms eventually dominate those of $(b_k)$.

**No such sequence exists.** The refutation is direct and uses no choice: given
any divergent $\sum b_k$ with positive terms, the Abel-Dini theorem
([[thm-abel-dini]]) manufactures a divergent series of positive terms whose terms
are eventually strictly smaller than the $b_k$, so $(b_k)$ fails its own defining
property.

## Facts & Assumptions

**Given:** An arbitrary sequence $(b_k)$ of reals with $b_k > 0$ for every $k$ and $\sum b_k$ divergent; its inclusive partial sums $B_n = \sum_{k=0}^{n} b_k$ ([[def-series]], [[def-finite-sum]]).

[L1] For a series of nonnegative terms: the partial sums are nondecreasing, and if the series diverges their range is not bounded above and they diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]], [[lem-monotone-unbounded-diverges]], [[def-monotone-sequence]], [[def-divergence-to-infinity]]).

[L2] Abel-Dini: if $(a_k)$ has positive terms and $\sum a_k$ diverges, then with $S_n = \sum_{k=0}^{n} a_k$ the series $\sum_n a_n/S_n$ diverges ([[thm-abel-dini]]).

[L3] Order and reciprocals: for $x > 0$ and $y > 1$ one has $0 < x/y < x$ ([[lem-of-inverse-positive]]); and a sum of positive terms is positive ([[lem-finite-sum-laws]]).

[L4] The refuted claim: some divergent series of positive terms is eventually dominated by every divergent series of positive terms.

## Refutation

**Proof technique:** direct.

1.1 Let $(b_k)$ be any sequence of positive reals with $\sum b_k$ divergent, and put $B_n = \sum_{k=0}^{n} b_k$; every $B_n$ is positive, being a sum of positive terms. [given, L3]

1.2 Since $\sum b_k$ diverges and its terms are nonnegative, its exclusive partial sums $s_n = \sum_{k<n} b_k$ diverge to $+\infty$; and $B_n = s_{n+1}$, so $B_n \to +\infty$ as well, any index bound for $(s_n)$ serving for $(B_n)$. [given, L1, algebra]

2.1 Define $c_n := b_n / B_n$ for $n \in \mathbb{N}$. Each $c_n$ is positive, and by Abel-Dini applied to $(b_k)$ the series $\sum c_n$ diverges. [step 1.1, L2, L3]

2.2 Since $B_n \to +\infty$ there is $N \in \mathbb{N}$ with $B_n > 1$ for every $n \ge N$; for such $n$, $c_n = b_n/B_n < b_n$. [step 1.2, L3, choose]

3.1 So $(c_n)$ is a sequence of positive reals with $\sum c_n$ divergent, and there is no index from which $b_n \le c_n$ holds onwards: given any $K$, at every index $n$ that is at least both $K$ and $N$ one has $c_n < b_n$. [step 2.1, step 2.2]

4.1 Therefore the sequence $(b_k)$ does not have the property demanded of it, and since $(b_k)$ was an arbitrary divergent series of positive terms, no such sequence exists and the claim is false. [step 3.1, L4] ∎

## Remarks

- **What this rules out.** There is no fixed series against which comparison decides divergence for all positive series, so the direct comparison test is unavoidably a family of tests, one for each comparison series, with none of them final. The refutation is constructive in the strong sense: it does not merely show that a slowest series cannot exist, it exhibits, for each candidate, a specific divergent series that beats it.

- **The scale of tests on this page inherits the same limitation.** Ratio, Raabe and Gauss are successive refinements, each deciding series the previous one cannot, and the argument above says the sequence of refinements can never terminate in a universal criterion. What Kummer's test adds is a uniform way of describing the whole family, by naming the weights; it does not escape the obstruction, since each choice of weights is still a comparison against the single series $\sum 1/\zeta_k$.
