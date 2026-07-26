---
id: ex-raabe-decides-where-ratio-fails
kind: example
title: "A series with ratio limit exactly $1$ that Raabe decides"
status: draft
origin: session
deps: [cor-raabe-test, thm-ratio-test, def-series, def-limsup-liminf, lem-limsup-exists, def-integer-power, thm-p-series-rational, thm-algebra-of-limits, cor-archimedean-reciprocal, lem-extended-reals-complete, def-extended-reals, lem-of-naturals-positive, lem-of-inverse-positive, def-real-limit, lem-power-monotone]
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
sources:
  scraped: []
  references:
    - title: "Raabe's test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Raabe%27s_test"
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
pipeline_run: null
---

## Example

Take $a_k := 1/\iota(k+1)^{2}$ for $k \in \mathbb{N}$, so that $\sum a_k$ is
$\sum_{k \ge 1} 1/k^{2}$ ([[def-series]]). Then:

- its ratios $q_k = a_{k+1}/a_k = \dfrac{(k+1)^{2}}{(k+2)^{2}}$ converge to $1$,
  so **neither half of the ratio test applies** ([[thm-ratio-test]]);
- its Raabe expression is exactly
  $$R_k \;=\; (k+1)\left(\frac{a_k}{a_{k+1}} - 1\right) \;=\; \frac{(k+2)^{2} - (k+1)^{2}}{k+1} \;=\; \frac{2k+3}{k+1} \;=\; 2 + \frac{1}{k+1} ,$$
  which exceeds $2$ at every index, so $\liminf_k R_k \ge 2 > 1$ and **Raabe's
  test gives convergence** ([[cor-raabe-test]]).

This is the smallest honest illustration that Raabe's test decides series the
ratio test cannot. The verdict agrees with [[thm-p-series-rational]] at $p = 2$,
as it must.

## Facts & Assumptions

**Given:** The sequence $a_k := 1/\iota(k+1)^{2}$, $k \in \mathbb{N}$; its ratios $q_k = a_{k+1}/a_k$; and its Raabe expression $R_k = (k+1)(a_k/a_{k+1} - 1)$ ([[cor-raabe-test]], [[def-integer-power]], [[lem-of-naturals-positive]]).

[L1] The canonical naturals are positive, so every $a_k$ is positive; reciprocation on the positives is order reversing; and $x^{2} = x\cdot x$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[def-integer-power]], [[lem-power-monotone]]).

[L2] For every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$, so $1/\iota(k+1) \to 0$ ([[cor-archimedean-reciprocal]], [[def-real-limit]]).

[L3] Algebra of limits: sums, products and quotients of convergent sequences converge, the quotient requiring a nonzero limit and nonzero denominators ([[thm-algebra-of-limits]]).

[L4] The ratio test: its convergence half needs $\limsup_k q_k < 1$ and its divergence half needs $\liminf_k q_k > 1$ ([[thm-ratio-test]]).

[L5] Raabe's test: $\liminf_k R_k > 1$ gives convergence ([[cor-raabe-test]]).

[L6] Limit superior and inferior in $\overline{\mathbb{R}}$, their existence for every sequence, and the descriptions $\limsup_k x_k = \inf\{s_n\}$, $\liminf_k x_k = \sup\{i_n\}$ of the tail bounds ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-extended-reals]]).

[L7] $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$ ([[thm-p-series-rational]]).

## Verification

**Proof technique:** direct.

1.1 Every $a_k = 1/\iota(k+1)^{2}$ is positive, so the ratios and the Raabe expression are defined. [given, L1]

2.1 The ratios are $q_k = \dfrac{1/\iota(k+2)^{2}}{1/\iota(k+1)^{2}} = \dfrac{\iota(k+1)^{2}}{\iota(k+2)^{2}} = \left(1 - \dfrac{1}{\iota(k+2)}\right)^{2}$. [step 1.1, L1, algebra]

2.2 The Raabe expression is $R_k = (k+1)\left(\dfrac{\iota(k+2)^{2}}{\iota(k+1)^{2}} - 1\right) = \dfrac{\iota(k+2)^{2} - \iota(k+1)^{2}}{\iota(k+1)} = \dfrac{2\iota(k)+3}{\iota(k)+1} = 2 + \dfrac{1}{\iota(k+1)}$. [step 1.1, L1, algebra]

3.1 Since $1/\iota(k+2) \to 0$, the product rule gives $q_k \to (1-0)^{2} = 1$. [step 2.1, L2, L3]

3.2 From step 2.2, $R_k > 2$ for every $k \in \mathbb{N}$, the added term $1/\iota(k+1)$ being positive. [step 2.2, L1]

4.1 The convergence half of the ratio test does not apply: if $\limsup_k q_k < 1$, then with $t$ real and $\limsup_k q_k < t < 1$ some tail supremum would be below $t$, putting $q_k \le t < 1$ for all large $k$ and contradicting $q_k \to 1$. [step 3.1, L4, L6]

4.2 The divergence half does not apply either: if $\liminf_k q_k > 1$, some tail infimum would exceed $1$, putting $q_k \ge c > 1$ for all large $k$ and again contradicting $q_k \to 1$. [step 3.1, L4, L6]

4.3 On the other hand $2$ is a lower bound of $\{R_k : k \ge 0\}$, so the tail infimum $i_0 \ge 2$ and $\liminf_k R_k \ge 2 > 1$. [step 3.2, L6]

5.1 Raabe's test therefore gives convergence of $\sum a_k$, that is of $\sum_{k \ge 1} 1/k^{2}$, in agreement with the case $p = 2$ of the $p$-series theorem. [step 4.3, step 1.1, L5, L7] ∎

## Remarks

- **The Raabe expression here is exact, not asymptotic.** Step 1.3 computes $R_k = 2 + 1/(k+1)$ on the nose, so no limit is needed to apply the test: a single inequality $R_k > 2$ at every index already forces $\liminf_k R_k \ge 2$. That is why this witness is the cleanest available one.

- **Why the ratio test must fail here.** The ratios of any $p$-series tend to $1$ whatever $p$ is, so a criterion reading only $\limsup$ and $\liminf$ of the ratios cannot separate the convergent $p$-series from the divergent ones. Raabe reads the *rate* at which the ratios approach $1$, which is exactly the missing information, and that rate is $2/k$ up to smaller terms when $p = 2$.
