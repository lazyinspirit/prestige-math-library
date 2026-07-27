---
id: ex-alternating-harmonic-rearranged-to-three-halves
kind: example
title: "Taking two positive terms for each negative one rearranges the alternating harmonic series to $3/2$ times its sum, by the identity $T_{3n} = S_{4n} + \\tfrac12 S_{2n}$"
status: published
origin: session
deps: [ex-alternating-harmonic-series, def-rearrangement-and-unconditional-convergence, thm-alternating-series-test, lem-alternating-sequence, lem-subsequence-inherits-limit, thm-algebra-of-limits, thm-recursion, thm-well-ordering-principle, thm-induction-principle, def-injection-surjection-bijection, def-monotone-sequence, def-finite-sum, lem-finite-sum-laws, lem-of-naturals-positive, lem-of-inverse-positive, cor-archimedean-reciprocal, def-series, def-real-limit]
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
pipeline_run: null
---

## Example

Let $a_j := (-1)^j/\iota(j+1)$ be the terms of the alternating harmonic series,
whose sum $S$ satisfies $1/2 < S < 1$ ([[ex-alternating-harmonic-series]]), and
let $S_N := \sum_{j<N} a_j$ be its partial sums.

Rearrange it by taking **two positive terms for each negative one**:

$$1 + \tfrac13 - \tfrac12 \;+\; \tfrac15 + \tfrac17 - \tfrac14 \;+\; \tfrac19 + \tfrac1{11} - \tfrac16 \;+\; \cdots$$

Formally, define $\sigma : \mathbb{N} \to \mathbb{N}$ by

$$\sigma(3m) = 4m, \qquad \sigma(3m+1) = 4m+2, \qquad \sigma(3m+2) = 2m+1 \qquad (m \in \mathbb{N}),$$

which is a bijection ([[def-injection-surjection-bijection]]), so that
$\sum_k a_{\sigma(k)}$ is a rearrangement of the alternating harmonic series
([[def-rearrangement-and-unconditional-convergence]]). Writing
$T_n := \sum_{k<n} a_{\sigma(k)}$, the identity

$$T_{3n} \;=\; S_{4n} \;+\; \tfrac12\,S_{2n} \qquad (n \in \mathbb{N})$$

holds, and consequently

$$\sum_{k=0}^{\infty} a_{\sigma(k)} \;=\; \tfrac32\,S .$$

**The value is stated relative to $S$, and deliberately so.** Texts that already
have the logarithm state this example as a multiple of $\log 2$; that expression
is not available at this point in the reading order, and the identity above needs
none
([[rem-sums-proved-to-exist-but-not-evaluated]]). Since $1/2 < S < 1$, the
rearranged sum lies strictly between $3/4$ and $3/2$, and in particular differs
from $S$: a concrete instance of [[thm-riemann-series-theorem]].

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_j)$ with index maps $e_j = 2j$ and $o_j = 2j+1$; the terms $a_j = \varepsilon_j/\iota(j+1)$; the partial sums $S_N = \sum_{j<N}a_j$ of the alternating harmonic series, with sum $S$; and $T_n = \sum_{k<n}a_{\sigma(k)}$.

[L1] The alternating sequence and its index maps: $e_0 = 0$, $e_{j+1} = e_j+2$, $o_0 = 1$, $o_{j+1} = o_j+2$; $\mathbb{N}$ is the disjoint union of the ranges of $e$ and $o$, each element occurring for exactly one index; $\varepsilon_{e_j} = 1$ and $\varepsilon_{o_j} = -1$ ([[lem-alternating-sequence]]).

[L2] The alternating harmonic series converges, with sum $S$ satisfying $1/2 < S < 1$ ([[ex-alternating-harmonic-series]], [[thm-alternating-series-test]], [[def-monotone-sequence]]).

[L3] The canonical naturals are positive for $n \ge 1$ and strictly increasing; reciprocation reverses the order on the positives; and for every real $\varepsilon > 0$ there is $n \ge 1$ with $1/\iota(n) < \varepsilon$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]]).

[L4] The recursion theorem and the principle of induction ([[thm-recursion]], [[thm-induction-principle]]); every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] Finite sums: $\sum_{k<0}x_k = 0$, $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$, additivity, scaling and splitting ([[def-finite-sum]], [[lem-finite-sum-laws]], [[def-series]]).

[L6] A subsequence of a convergent sequence converges to the same limit ([[lem-subsequence-inherits-limit]]).

[L7] Algebra of limits ([[thm-algebra-of-limits]], [[def-real-limit]]).

[L8] A rearrangement is the composite of the terms with a bijection of $\mathbb{N}$ ([[def-rearrangement-and-unconditional-convergence]], [[def-injection-surjection-bijection]]).

## Verification

**Proof technique:** direct.

1.1 An induction gives $e_j = 2j$ and $o_j = 2j+1$ for every $j$, from $e_0 = 0$, $o_0 = 1$ and the two recursions; so by [L1] every natural number is $2i$ for exactly one $i$ or $2i+1$ for exactly one $i$. [L1, L4]

1.2 Every natural $n$ is $3m + r$ for exactly one pair $(m, r)$ with $r < 3$: for existence, the set $\{\, m' : 3m' > n \,\}$ is nonempty, containing $n+1$, so it has a least element $m_0$, which is not $0$ since $3 \cdot 0 = 0 \le n$; put $m := m_0 - 1$, so $3m \le n < 3m+3$ and $r := n - 3m$ satisfies $r < 3$. For uniqueness, if $3m + r = 3m' + r'$ with $r, r' < 3$ and $m < m'$, then $3m + r < 3m + 3 \le 3m' \le 3m' + r'$, a contradiction; so $m = m'$ and then $r = r'$. [L4]

1.3 The maps $n \mapsto 4n$ and $n \mapsto 2n$ are strictly increasing, so $(S_{4n})_n$ and $(S_{2n})_n$ are subsequences of $(S_N)$ and both converge to $S$. [L2, L6]

2.1 Applying step 1.1 twice, every natural number is exactly one of $4i$, $4i+2$ or $2i+1$, for exactly one $i$: an even number $2m$ is $4i$ when $m = 2i$ and $4i+2$ when $m = 2i+1$, and these two cases are exclusive and exhaustive by step 1.1 applied to $m$. [step 1.1]

3.1 The map $\sigma$ is therefore a well-defined function on $\mathbb{N}$, given on the unique representation $n = 3m+r$ by the three clauses of the statement; it may equally be produced by the recursion theorem applied to the state set $\mathbb{N} \times \{0,1,2\}$ with the cycle $(m,0) \mapsto (m,1) \mapsto (m,2) \mapsto (m+1,0)$. It is a bijection: by step 1.2 the pairs $(m,r)$ with $r<3$ correspond exactly to the naturals $n = 3m+r$, and by step 2.1 the three clauses send those pairs bijectively onto $\mathbb{N}$. [step 2.1, step 1.2, L4, L8]

4.1 By [L1] and step 1.1, $\varepsilon_{4m} = \varepsilon_{4m+2} = 1$ and $\varepsilon_{2m+1} = -1$, so $a_{\sigma(3m)} = 1/\iota(4m+1)$, $a_{\sigma(3m+1)} = 1/\iota(4m+3)$ and $a_{\sigma(3m+2)} = -1/\iota(2m+2)$. [step 1.1, step 3.1, L1]

5.1 An induction on $n$ gives $T_{3n} = S_{4n} + \tfrac12 S_{2n}$. At $n = 0$ all three sums are empty, hence $0$. For the step, by step 4.1 and [L5], $T_{3(n+1)} - T_{3n} = 1/\iota(4n+1) + 1/\iota(4n+3) - 1/\iota(2n+2)$, while $S_{4(n+1)} - S_{4n} = 1/\iota(4n+1) - 1/\iota(4n+2) + 1/\iota(4n+3) - 1/\iota(4n+4)$ and $\tfrac12\bigl(S_{2(n+1)} - S_{2n}\bigr) = \tfrac12\bigl(1/\iota(2n+1) - 1/\iota(2n+2)\bigr) = 1/\iota(4n+2) - 1/\iota(4n+4)$; adding the last two gives $1/\iota(4n+1) + 1/\iota(4n+3) - 2/\iota(4n+4)$, and $2/\iota(4n+4) = 1/\iota(2n+2)$. [step 4.1, L3, L4, L5]

5.2 For $3n \le m \le 3n+2$ the difference $T_m - T_{3n}$ is a sum of at most the two positive terms $1/\iota(4n+1)$ and $1/\iota(4n+3)$, so $0 \le T_m - T_{3n} \le 2/\iota(4n+1)$. [step 4.1, L3, L5]

6.1 Hence $T_{3n} \to S + \tfrac12 S = \tfrac32 S$ by step 5.1 and the algebra of limits. [step 5.1, step 1.3, L7]

7.1 Let $\varepsilon > 0$ be rational. By step 6.1 fix $N_1$ with $|T_{3n} - \tfrac32 S| < \varepsilon/2$ for $n \ge N_1$, and by [L3] fix $N_2 \ge 1$ with $2/\iota(4N_2+1) < \varepsilon/2$, which then holds with $n$ in place of $N_2$ for every $n \ge N_2$; put $N := \max\{N_1, N_2\}$. [step 6.1, L3, choose]

8.1 Let $m \ge 3N$ and write $m = 3n + r$ with $r < 3$ as in step 1.2; then $3N \le m < 3n+3$, so $N < n+1$ and $n \ge N$. Hence $|T_m - \tfrac32 S| \le |T_m - T_{3n}| + |T_{3n} - \tfrac32 S| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 1.2, step 5.2, step 7.1]

9.1 Therefore $T_m \to \tfrac32 S$: the rearranged series $\sum_k a_{\sigma(k)}$ converges with sum $\tfrac32 S$, and since $1/2 < S < 1$ that sum lies strictly between $3/4$ and $3/2$, so in particular it is not $S$. [step 3.1, step 8.1, L2] ∎

## Remarks

- **Why the identity is the right thing to prove.** It compares the rearranged partial sums with two subsequences of the original partial sums, and both subsequences converge to $S$ for free. No estimate of $S$ is needed anywhere, and no closed form for it; the whole computation is an exact identity between finite sums, checked at $n = 1$ as $1 + 1/3 - 1/2 = 5/6$ against $7/12 + 1/4 = 5/6$.

- **The rearrangement is explicit, unlike the one produced by [[thm-riemann-series-theorem]].** There the bijection is built by a greedy recursion depending on the whole series; here it is given by three formulas. The price is that its sum is whatever the identity says it is, rather than a prescribed target.

- **The three residual index classes are handled, not waved through.** The identity constrains $T_m$ only at multiples of $3$; step 5.2 and step 8.1 close the gap, using that the two intervening terms are positive and tend to $0$. An argument stopping at step 6.1 would have proved convergence of a subsequence only.
