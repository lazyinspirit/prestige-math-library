---
id: fs-cauchy-product-of-convergent-series-converges
kind: false-statement
title: "FALSE: the Cauchy product of two convergent series converges"
status: published
origin: session
deps: [def-cauchy-product, thm-mertens, thm-alternating-series-test, thm-of-square-roots, thm-am-gm, lem-nth-term-test, lem-alternating-sequence, def-monotone-sequence, def-finite-sum, lem-finite-sum-laws, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, cor-archimedean-reciprocal, thm-induction-principle, def-series, def-real-limit]
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
    - title: "Cauchy product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_product"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

**False claim:** if $\sum a_k$ and $\sum b_k$ both converge ([[def-series]]) then
their Cauchy product $\sum c_n$ converges ([[def-cauchy-product]]).

What is true is [[thm-mertens]], which requires one of the two factors to
converge **absolutely**. Convergence of both is not enough, and the standard
witness is a single series multiplied by itself.

Let $(\varepsilon_k)$ be the alternating sequence ([[lem-alternating-sequence]])
and put

$$a_k \;=\; b_k \;:=\; \frac{\varepsilon_k}{\sqrt{\iota(k+1)}} \qquad (k \in \mathbb{N}),$$

with $\sqrt{\ }$ the nonnegative square root ([[thm-of-square-roots]]) and
$\iota(k+1)$ the canonical natural, positive for every $k$
([[lem-of-naturals-positive]]). Then $\sum a_k$ converges, by the alternating
series test, while the Cauchy product satisfies

$$|c_n| \;\ge\; \frac{2\,\iota(n+1)}{\iota(n+2)} \;\ge\; 1 \qquad \text{for every } n \in \mathbb{N},$$

so $(c_n)$ does not converge to $0$ and $\sum c_n$ diverges
([[lem-nth-term-test]]).

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_k)$, the sequence $\beta_k := 1/\sqrt{\iota(k+1)}$, the sequence $a_k = b_k = \varepsilon_k \beta_k$, and their Cauchy product $c_n = \sum_{k=0}^{n} a_k b_{n-k}$ ([[def-cauchy-product]]).

[A1] The refuted claim: the Cauchy product of two convergent series of reals converges.

[L1] The alternating sequence: $\varepsilon_0 = 1$, $\varepsilon_{k+1} = -\varepsilon_k$, and $|\varepsilon_k| = 1$ ([[lem-alternating-sequence]]).

[L2] Square roots: every $t \ge 0$ has a unique $\sqrt{t} \ge 0$ with $(\sqrt t)^2 = t$ ([[thm-of-square-roots]]).

[L3] The canonical naturals: $\iota(n) > 0$ for $n \ge 1$, $\iota$ is strictly increasing, and $\iota(m+n) = \iota(m) + \iota(n)$ ([[lem-of-naturals-positive]]).

[L4] If $0 < u < v$ then $0 < 1/v < 1/u$ ([[lem-of-inverse-positive]]).

[L5] For every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/\iota(n) < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L6] The alternating series test ([[thm-alternating-series-test]], [[def-monotone-sequence]]).

[L7] AM-GM for two nonnegative reals, in the product form: $u v \le \bigl((u+v)/2\bigr)^{2}$ ([[thm-am-gm]]).

[L8] Finite sums: the sum of a constant, monotonicity in the terms, and $\sum_{k=0}^{n} x_k = \sum_{k<n+1} x_k$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L9] Absolute value: $|xy| = |x|\,|y|$ and $|x| \ge 0$ ([[lem-of-abs-value]]).

[L10] If $\sum x_n$ converges then $x_n \to 0$ ([[lem-nth-term-test]], [[def-real-limit]]).

[L11] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L12] Mertens' theorem, which requires one factor to converge absolutely ([[thm-mertens]]).

## Refutation

**Proof technique:** direct.

1.1 Square roots are strictly increasing on the nonnegative reals: if $0 \le u < v$ and $\sqrt u \ge \sqrt v$ then $u = (\sqrt u)^2 \ge (\sqrt v)^2 = v$, which is false; so $\sqrt u < \sqrt v$. Also $\sqrt{uv} = \sqrt u \sqrt v$ for $u, v \ge 0$, since $(\sqrt u \sqrt v)^2 = uv$ and $\sqrt u \sqrt v \ge 0$, and $\sqrt{t^2} = t$ for $t \ge 0$. [L2]

1.2 An induction on $j$ gives $\varepsilon_m \varepsilon_j = \varepsilon_{m+j}$ for all $m, j$: at $j = 0$ this is $\varepsilon_m \cdot 1 = \varepsilon_m$, and $\varepsilon_m \varepsilon_{j+1} = \varepsilon_m(-\varepsilon_j) = -\varepsilon_{m+j} = \varepsilon_{m+j+1}$. [L1, L11]

2.1 Each $\beta_k = 1/\sqrt{\iota(k+1)}$ is a positive real, and $(\beta_k)$ is nonincreasing, since $0 < \iota(k+1) < \iota(k+2)$ gives $0 < \sqrt{\iota(k+1)} < \sqrt{\iota(k+2)}$ and inverting reverses the inequality. [step 1.1, L3, L4]

2.2 $(\beta_k)$ converges to $0$: given a rational $\varepsilon > 0$, fix a natural $n \ge 1$ with $1/\iota(n) < \varepsilon^2$; then for $k \ge n$ one has $\iota(k+1) \ge \iota(n) > 1/\varepsilon^2 = (1/\varepsilon)^2$, so $\sqrt{\iota(k+1)} > 1/\varepsilon$ and $\beta_k < \varepsilon$. [step 1.1, L3, L4, L5]

2.3 For $k \le n$, [L7] applied to $u = \iota(k+1)$ and $v = \iota(n-k+1)$, whose sum is $\iota(n+2)$ by [L3], gives $\iota(k+1)\iota(n-k+1) \le \bigl(\iota(n+2)/2\bigr)^2$; taking square roots and using step 1.1, $\sqrt{\iota(k+1)}\sqrt{\iota(n-k+1)} \le \iota(n+2)/2$. [step 1.1, L3, L7]

3.1 By the alternating series test $\sum a_k = \sum \varepsilon_k \beta_k$ converges; the same series is taken as both factors. [step 2.1, step 2.2, L6]

3.2 Hence for every $n$ and every $k \le n$, $a_k b_{n-k} = \varepsilon_k \varepsilon_{n-k} \beta_k \beta_{n-k} = \varepsilon_n \beta_k \beta_{n-k}$, so $c_n = \varepsilon_n \sum_{k=0}^{n} \beta_k \beta_{n-k}$ and $|c_n| = \sum_{k=0}^{n} \beta_k \beta_{n-k}$, the terms being positive. [step 2.1, step 1.2, L1, L8, L9]

3.3 Inverting, $\beta_k \beta_{n-k} \ge 2/\iota(n+2)$ for every $k \le n$. [step 2.3, L4]

4.1 Summing the $n+1$ terms and using monotonicity of finite sums and the sum of a constant, $|c_n| \ge \iota(n+1)\cdot 2/\iota(n+2) = 2\iota(n+1)/\iota(n+2)$. [step 3.2, step 3.3, L8]

5.1 Moreover $2\iota(n+1) = \iota(2n+2) \ge \iota(n+2)$, since $2n + 2 \ge n + 2$ and $\iota$ is increasing; so $|c_n| \ge 1$ for every $n$. [step 4.1, L3]

6.1 The sequence $(c_n)$ therefore does not converge to $0$: the tolerance $\varepsilon = 1$ admits no index $K$ with $|c_n - 0| < 1$ for all $n \ge K$. Hence $\sum c_n$ diverges. [step 5.1, L10]

7.1 So both factors converge while their Cauchy product diverges, and the claim [A1] is false; what is true is [L12], which asks one factor to converge absolutely, and this witness cannot satisfy that hypothesis, since otherwise Mertens' theorem would make $\sum c_n$ convergent, contrary to step 6.1. [step 3.1, step 6.1, A1, L12] ∎

## Remarks

- **The lower bound is not merely nonzero: it grows to $2$.** Step 4.1 gives $|c_n| \ge 2\iota(n+1)/\iota(n+2) = 2 - 2/\iota(n+2)$, and that bound increases to $2$; so the terms of the Cauchy product do not shrink at all, and the divergence is detected by the crudest test available. What the size of $|c_n|$ itself tends to is not determined here and is not needed.

- **Where the failure comes from.** In $c_n$ every one of the $n+1$ products $a_k b_{n-k}$ carries the same sign $\varepsilon_n$, so no cancellation occurs *within* $c_n$: the alternation that makes each factor converge is exactly what aligns the terms of the product. Absolute convergence of one factor, as in [[thm-mertens]], prevents this by making the total mass finite.

- **The claim becomes true under other hypotheses.** If all three series $\sum a_k$, $\sum b_k$ and $\sum c_n$ are assumed to converge, then the sum of the product is the product of the sums; but that theorem is proved through power series and Abel's limit theorem, which are later in the reading order. The companion examples page records the same witness from the other side.
