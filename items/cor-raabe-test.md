---
id: cor-raabe-test
kind: corollary
title: "Raabe is Kummer with $\\zeta_k = k+1$: for positive terms, $\\liminf\\, (k+1)(a_k/a_{k+1} - 1) > 1$ gives convergence and $\\limsup < 1$ gives divergence"
status: draft
origin: session
deps: [thm-kummer-test, thm-p-series-rational, def-limsup-liminf, lem-limsup-exists, def-series, def-extended-reals, lem-extended-reals-complete, lem-of-naturals-positive, def-rational-power, thm-nth-roots-exist, def-integer-power]
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
sources:
  scraped: []
  references:
    - title: "Raabe's test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Raabe%27s_test"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k > 0$ for every $k \in \mathbb{N}$.
Write $k+1$ for the canonical natural $\iota(k+1) \in \mathbb{R}$, which is
positive ([[lem-of-naturals-positive]]), take the weights
$\zeta_k := k+1$ in [[thm-kummer-test]], and put

$$R_k \;:=\; (k+1)\left(\frac{a_k}{a_{k+1}} - 1\right) \qquad (k \in \mathbb{N}),$$

so that Kummer's expression for these weights is $K_k = R_k - 1$. Then:

1. if $\liminf_{k} R_k > 1$ then $\sum a_k$ converges;
2. if $\limsup_{k} R_k < 1$ then $\sum a_k$ diverges.

The weights are $k+1$ rather than $k$ because $\zeta_0$ has to be positive and
$\mathbb{N}$ contains $0$; the classical statement, indexed from $1$, is the same
criterion read along the shift $k = j+1$.

**Nothing is claimed when $\liminf_k R_k \le 1 \le \limsup_k R_k$.** The Gauss
test proved next is exactly the tool for the borderline case $R_k \to 1$, where
Raabe's test is silent.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$; the weights $\zeta_k = \iota(k+1)$; and $R_k = (k+1)(a_k/a_{k+1} - 1)$ ([[def-limsup-liminf]], [[lem-of-naturals-positive]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound there, and $\limsup_k x_k = \inf\{s_n\}$, $\liminf_k x_k = \sup\{i_n\}$ for the tail bounds $s_n, i_n$, both existing for every sequence ([[lem-extended-reals-complete]], [[def-extended-reals]], [[def-limsup-liminf]], [[lem-limsup-exists]]).

[L2] Kummer's test in both halves, for positive terms and positive weights ([[thm-kummer-test]]).

[L3] $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$; at $p = 1$ it therefore diverges ([[thm-p-series-rational]]). Moreover $k^{1} = \iota(k)$, the rational power at exponent $1$ being the element itself ([[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]]).

[L4] The canonical naturals $\iota(k+1)$ are positive, and $\iota(k+2) = \iota(k+1) + 1$ ([[lem-of-naturals-positive]]).

[L5] The series $\sum_{k \ge 1} x_k$ from the starting index $1$ is by definition the series of the sequence $j \mapsto x_{j+1}$ ([[def-series]]).

## Proof

**Proof technique:** direct.

1.1 The weights $\zeta_k = \iota(k+1)$ are positive for every $k \in \mathbb{N}$, and the terms $a_k$ are positive, so Kummer's test applies with these data. [given, L4, L2]

1.2 Suppose $\liminf_k R_k > 1$. The real $1$ is not an upper bound of the set of tail infima of $(R_k)$, so there is $N$ with $i_N > 1$, and $i_N$ is real because $i_N \le R_N$. [given, L1, choose]

1.3 Suppose instead $\limsup_k R_k < 1$. The real $1$ is not a lower bound of the set of tail suprema of $(R_k)$, so there is $N$ with $s_N < 1$, and then $R_k \le s_N < 1$ for every $k \ge N$. [given, L1, choose]

2.1 Kummer's expression for these weights is $K_k = (k+1)\dfrac{a_k}{a_{k+1}} - (k+2) = (k+1)\left(\dfrac{a_k}{a_{k+1}} - 1\right) - 1 = R_k - 1$. [step 1.1, L4, algebra]

2.2 The weight series is $\sum_k 1/\zeta_k = \sum_k 1/\iota(k+1)$, which is precisely the series $\sum_{k \ge 1} 1/k$ from the starting index $1$, and that is the case $p = 1$ of the $p$-series, hence divergent. [step 1.1, L3, L5]

3.1 Put $c := i_N - 1 > 0$. For every $k \ge N$ we have $R_k \ge i_N$, hence $K_k = R_k - 1 \ge i_N - 1 = c$. [step 1.2, step 2.1, L1, algebra]

3.2 Hence $K_k = R_k - 1 < 0$, in particular $K_k \le 0$, for every $k \ge N$. [step 1.3, step 2.1, algebra]

4.1 So $c$ is a lower bound of $\{K_k : k \ge N\}$, whence $\liminf_k K_k \ge c > 0$, and Kummer's convergence criterion gives convergence of $\sum a_k$, which is claim 1. [step 3.1, step 1.1, L1, L2]

5.1 Together with the divergence of the weight series, Kummer's divergence criterion gives divergence of $\sum a_k$, which is claim 2. [step 3.2, step 2.2, step 1.1, L2] ∎

## Remarks

- **Raabe's test is a genuine strengthening of the ratio test.** Whenever the ratios $a_{k+1}/a_k$ converge to $1$ the ratio test is silent, while $R_k$ may still be bounded away from $1$ on either side; the companion page carries a series with ratio limit exactly $1$ that Raabe decides. The reason is visible in the weights: the divergent comparison series behind the test has moved from $\sum 1$ to the harmonic series, which diverges far more slowly.

- **The threshold is $1$ and not $0$, and step 2.1 says why.** Kummer's criterion is a statement about $K_k = R_k - 1$; the shift by $1$ between the two expressions is the whole difference between the two thresholds, and it comes from $\zeta_{k+1} - \zeta_k = 1$ for these weights.
