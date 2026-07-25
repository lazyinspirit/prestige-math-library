---
id: thm-weighted-am-gm-rational
kind: theorem
title: "Weighted AM-GM inequality with rational weights"
status: draft
origin: session
deps: [thm-am-gm, def-rational-power, lem-rational-power-laws, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, lem-rat-positive-denominator, def-rationals, def-rat-operations, def-rat-order, lem-of-q-embeds, def-integer-power, thm-nth-roots-exist, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "AM-GM inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/AM%E2%80%93GM_inequality"
    - title: "Young's inequality for products (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Young%27s_inequality_for_products"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $x_0, \dots, x_{n-1} \in \mathbb{R}$
with $x_k > 0$, and let $w_0, \dots, w_{n-1} \in \mathbb{Q}$ be **rational**
weights with $w_k \ge 0$ ([[def-rat-order]]) and $\sum_{k<n} w_k = 1$. Then

$$\prod_{k<n} x_k^{\,w_k} \;\le\; \sum_{k<n} w_k x_k,$$

where $x_k^{\,w_k}$ is the rational power of [[def-rational-power]] and a rational
weight multiplies a real through the canonical embedding $\iota$
([[lem-of-q-embeds]]).

**Why the weights are rational.** The restriction is not laziness and it cannot
be relaxed here. For a real weight $w$ the symbol $x^{w}$ has no meaning in this
library at all: [[def-rational-power]] defines $x^{r}$ only for $r \in \mathbb{Q}$,
and every proof on this page is a finite chain of field operations together with
the least-upper-bound property. Real exponents require the exponential function
and its inverse, which are built much later and by different means; the closing
remark of this page records the situation in full. Taking $n = 2$ and
$w_0 = w_1 = 1/2$ recovers the two-term case $\sqrt{x_0 x_1} \le (x_0 + x_1)/2$ of
[[thm-am-gm]].

## Facts & Assumptions

**Given:** A natural $n \ge 1$, reals $x_0, \dots, x_{n-1} > 0$, and rationals $w_0, \dots, w_{n-1} \ge 0$ with $\sum_{k<n} w_k = 1$.

[L1] AM-GM ([[thm-am-gm]]): for $c_0, \dots, c_{N-1} \ge 0$ with $N \ge 1$, $\big(\prod_{i<N} c_i\big)^{1/N} \le \frac{1}{N}\sum_{i<N} c_i$.

[L2] Laws of finite sums and products ([[lem-finite-sum-laws]], [[def-finite-sum]]): splitting of sums and products at any index, scaling, and the constant sum $\sum_{i<m}\lambda = m\lambda$.

[L3] Constant product: $\prod_{i<m}\lambda = \lambda^{m}$, by induction on $m$ from the recursion clauses $\prod_{i<m+1}\lambda = \big(\prod_{i<m}\lambda\big)\lambda$ and $\lambda^{m+1} = \lambda^{m}\lambda$, with both sides equal to $1$ at $m = 0$ ([[def-finite-sum]], [[def-integer-power]], [[thm-induction-principle]]).

[L4] Rational power laws ([[lem-rational-power-laws]], [[def-rational-power]], [[thm-nth-roots-exist]]): for $u, v > 0$ and rationals $r, s$: $u^{r} > 0$, $(uv)^{r} = u^{r}v^{r}$ (hence, by induction on the number of factors, $\big(\prod_{j<n} u_j\big)^{r} = \prod_{j<n} u_j^{\,r}$, using also the constant product for the empty case), and $\big(u^{r}\big)^{s} = u^{rs}$.

[L5] Rational arithmetic and the embedding ([[lem-rat-positive-denominator]], [[def-rationals]], [[def-rat-operations]], [[lem-of-q-embeds]], [[lem-of-naturals-positive]]): finitely many rationals can be written over a common positive denominator, $\iota$ is an injective order-preserving field homomorphism, and $\iota(m) > 0$ for a natural $m \ge 1$.

[L6] Induction principle ([[thm-induction-principle]]), used for the routine inductions on the number of terms below.

## Proof

**Proof technique:** direct.

1.1 Common denominator: by induction on $n$, taking the product of the denominators, there are a natural $N \ge 1$ and integers $m_0, \dots, m_{n-1}$ with $w_k = m_k/N$ for every $k < n$; since $w_k \ge 0$ and $N > 0$, each $m_k \ge 0$ and is therefore a natural number. [L5, L6]

2.1 The numerators sum to $N$: multiplying $\sum_{k<n} w_k = 1$ by $N$ in $\mathbb{Q}$ gives $\sum_{k<n} m_k = N$, an identity between naturals because the embedding of $\mathbb{N}$ in $\mathbb{Q}$ is injective. [step 1.1, L2, L5]

3.1 The expanded list: put $M_0 := 0$ and $M_{j+1} := M_j + m_j$, so $M_n = N$, and define $c : \mathbb{N} \to \mathbb{R}$ by $c_i := x_j$ whenever $M_j \le i < M_{j+1}$ for some $j < n$, and $c_i := 1$ for $i \ge N$; every $c_i$ with $i < N$ is positive. [step 1.1, step 2.1, L5, construct]

4.1 Its sum and product: splitting at $M_1, \dots, M_{n-1}$ and using the constant sum and the constant product on each block, an induction on $n$ gives $\sum_{i<N} c_i = \sum_{j<n} m_j x_j$ and $\prod_{i<N} c_i = \prod_{j<n} x_j^{\,m_j}$. [step 3.1, L2, L3, L6]

5.1 Applying AM-GM to $c_0, \dots, c_{N-1}$ and substituting: $\Big(\prod_{j<n} x_j^{\,m_j}\Big)^{1/N} = \Big(\prod_{i<N} c_i\Big)^{1/N} \le \frac{1}{N}\sum_{i<N} c_i = \frac{1}{N}\sum_{j<n} m_j x_j = \sum_{j<n} w_j x_j$, the last equality because $\iota(m_j)/\iota(N) = \iota(m_j/N) = \iota(w_j)$. [step 3.1, step 4.1, L1, L2, L5]

5.2 Rewriting the left-hand side with the rational power laws: $\Big(\prod_{j<n} x_j^{\,m_j}\Big)^{1/N} = \prod_{j<n} \Big(x_j^{\,m_j}\Big)^{1/N} = \prod_{j<n} x_j^{\,m_j/N} = \prod_{j<n} x_j^{\,w_j}$, each $x_j^{\,m_j}$ being positive. [step 4.1, L4, L6]

6.1 Combining the two displays gives $\prod_{j<n} x_j^{\,w_j} \le \sum_{j<n} w_j x_j$, which is the assertion. [step 5.1, step 5.2] ∎
