---
id: ex-decimal-expansion-nonuniqueness
kind: example
title: "$0.999\\dots = 1$ and $0.4999\\dots = 0.5$: the second expansion of a number is exactly an eventually-all-$(b-1)$ digit sequence"
status: published
origin: session
deps: [thm-decimal-expansions, thm-geometric-series, lem-series-tail-invariance, lem-series-linearity, def-interval, def-canonical-natural, lem-of-naturals-positive, def-integer-power, lem-power-laws, def-finite-sum, lem-finite-sum-laws, def-series, def-real-limit]
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
    - title: "0.999... (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/0.999..."
    - title: "Decimal representation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Decimal_representation"
pipeline_run: null
---

## Example

Take $b = 10$, so $\beta = \iota(10)$, and read a digit sequence $(d_j)$ as the
series $\sum_{j \ge 0}\iota(d_j)/\beta^{\,j+1}$ ([[thm-decimal-expansions]]).

**All nines.** The constant sequence $d_j = 9$ gives, by the geometric series,

$$\sum_{j\ge0}\frac{9}{10^{\,j+1}} \;=\; \frac{9}{10}\cdot\frac{1}{1 - 1/10} \;=\; 1 ,$$

which is the statement usually written $0.999\dots = 1$. Since $1 \notin [0,1)$
([[def-interval]]), this digit sequence is not the expansion of any point of
$[0,1)$ produced by [[thm-decimal-expansions]], and no uniqueness clause is
violated.

**Two expansions of one number.** For $x = 1/2$ the construction of
[[thm-decimal-expansions]] returns $d_0 = 5$ and $d_j = 0$ for $j \ge 1$: the
residue $r_0 = 1/2$ lies in $[5/10, 6/10)$, and $r_1 = 10\cdot\tfrac12 - 5 = 0$,
after which every digit is $0$. But the sequence $d'_0 = 4$, $d'_j = 9$ for
$j \ge 1$ has

$$\frac{4}{10} + \sum_{j\ge1}\frac{9}{10^{\,j+1}} \;=\; \frac{4}{10} + \frac{9}{100}\cdot\frac{1}{1-1/10} \;=\; \frac{4}{10} + \frac{1}{10} \;=\; \frac12 ,$$

which is $0.4999\dots = 0.5$. So two **different** digit sequences have the same
sum, and uniqueness in [[thm-decimal-expansions]] survives only because $(d'_j)$
is terminal, being eventually constantly $b - 1 = 9$.

**This is the whole of the nonuniqueness.** The uniqueness proof shows that two
distinct digit sequences with the same sum must differ by one at the first index
where they differ and then be all $b-1$ against all $0$. So excluding the terminal
sequences excludes exactly one member of each such pair, and nothing else.

## Facts & Assumptions

**Given:** The base $b = 10$ with $\beta = \iota(10)$, the digit sequences $d_j = 9$ for all $j$; $e_0 = 5$ with $e_j = 0$ for $j \ge 1$; and $d'_0 = 4$ with $d'_j = 9$ for $j \ge 1$.

[L1] Geometric series: for $|x| < 1$, $\sum_k x^{k}$ converges with sum $1/(1-x)$, the first term being $x^{0} = 1$ ([[thm-geometric-series]], [[def-series]]).

[L2] Powers and canonical naturals: $\beta^{0} = 1$, $\beta^{n+1} = \beta^{n}\beta$, $(uv)^{n} = u^{n}v^{n}$; $\iota$ is additive and multiplicative on positive naturals and strictly increasing ([[def-integer-power]], [[lem-power-laws]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L3] Linearity of convergent series, and a series converges if and only if each tail series does, the sum splitting as the initial partial sum plus the tail sum ([[lem-series-linearity]], [[lem-series-tail-invariance]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L4] Base-$b$ expansions: for $b \ge 2$ every $x \in [0,1)$ has exactly one non-terminal digit sequence summing to $x$, the digits being produced by the residue recursion with $d(r)$ the unique digit with $\iota(d)/\beta \le r < \iota(d+1)/\beta$ ([[thm-decimal-expansions]], [[def-interval]], [[def-real-limit]]).

## Verification

**Proof technique:** direct.

1.1 Since $\beta = \iota(10) \ge 2 > 1$, one has $0 < 1/\beta < 1$, so $\sum_k (1/\beta)^{k}$ converges with sum $1/(1 - 1/\beta) = \beta/(\beta-1) = 10/9$. [L1, L2]

1.2 For $x = 1/2$ the residue recursion gives $d_0 = 5$, since $\iota(5)/\beta = 1/2 \le 1/2 < 6/10 = \iota(6)/\beta$, and then $r_1 = \beta\cdot\tfrac12 - \iota(5) = 5 - 5 = 0$, whence $d_j = 0$ and $r_{j+1} = 0$ for every $j \ge 1$. This sequence is non-terminal and sums to $5/10 = 1/2$. [L2, L4]

2.1 Hence $\sum_{j\ge0} 9/\beta^{\,j+1} = (9/\beta)\sum_{j\ge0}(1/\beta)^{\,j} = (9/10)(10/9) = 1$, using linearity and $\beta^{\,j+1} = \beta\,\beta^{\,j}$. [step 1.1, L2, L3]

3.1 So the all-nines digit sequence has sum $1$, and $1 \notin [0,1)$; by [L4] it is therefore not the expansion of any $x \in [0,1)$, and it is terminal. [step 2.1, L4]

3.2 The sequence $(d'_j)$ with $d'_0 = 4$ and $d'_j = 9$ for $j \ge 1$ has sum $4/10 + \sum_{j\ge1}9/\beta^{\,j+1}$, and by step 2.1 with the first term removed, $\sum_{j\ge1}9/\beta^{\,j+1} = (1/\beta)\sum_{j\ge0}9/\beta^{\,j+1} = 1/10$; so its sum is $4/10 + 1/10 = 1/2$. [step 2.1, L2, L3]

4.1 Thus $(e_j)$ and $(d'_j)$ are different digit sequences with the same sum $1/2$, so a real number in $[0,1)$ can have two base-$10$ expansions. [step 1.2, step 3.2]

5.1 No uniqueness claim is contradicted: $(d'_j)$ is terminal, being constantly $9 = b-1$ from index $1$ on, and [L4] asserts uniqueness only among non-terminal sequences, of which $(e_j)$ is the one belonging to $1/2$. [step 1.2, step 4.1, L4] ∎

## Remarks

- **"$0.999\dots = 1$" is an identity between a series and a number, and nothing stranger.** The left side denotes the sum of $\sum_{j\ge0}9/10^{\,j+1}$, which step 2.1 computes to be $1$ by the geometric series. There is no approximation and no limiting process beyond the one already in [[def-series]].

- **Which of the two expansions the construction returns.** The residue recursion of [[thm-decimal-expansions]] always takes the largest digit $d$ with $\iota(d)/\beta \le r$, so it produces the expansion ending in zeros rather than the one ending in nines. That is why the constructed sequence is automatically non-terminal, as the theorem records.

- **The same pair exists in every base.** For $b = 2$ the two expansions of $1/2$ are $0.1000\dots$ and $0.0111\dots$; the argument above is the case $b = 10$ of a computation that uses only $\sum_{j\ge0}(b-1)/b^{\,j+1} = 1$.
