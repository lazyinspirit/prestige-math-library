---
id: thm-holder-finite
kind: theorem
title: "Hölder's inequality for finite sums (rational exponents)"
status: draft
origin: session
deps: [thm-young-inequality, def-finite-sum, lem-finite-sum-laws, def-rational-power, lem-rational-power-laws, thm-nth-roots-exist, thm-cauchy-schwarz-finite, lem-of-abs-value, def-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, lem-of-q-embeds, def-rat-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Hölder's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder%27s_inequality"
    - title: "Young's inequality for products (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Young%27s_inequality_for_products"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$, let $a_0, \dots, a_{n-1}$ and $b_0, \dots, b_{n-1}$ be
reals, and let $p, q \in \mathbb{Q}$ with $p, q > 1$ and $\frac1p + \frac1q = 1$
be conjugate exponents ([[thm-young-inequality]]). Then

$$\sum_{k<n} |a_k b_k| \;\le\; \Big(\sum_{k<n} |a_k|^{p}\Big)^{1/p}\Big(\sum_{k<n} |b_k|^{q}\Big)^{1/q}.$$

All powers here are rational powers of nonnegative bases
([[def-rational-power]]): the exponents $p, q, 1/p, 1/q$ are positive rationals,
so the supplementary clause $0^{r} = 0$ covers the vanishing bases and no
expression is left undefined. Taking $p = q = 2$ recovers the root form of
[[thm-cauchy-schwarz-finite]], since $x^{1/2} = \sqrt{x}$.

## Facts & Assumptions

**Given:** A natural $n$, reals $a_0, \dots, a_{n-1}$ and $b_0, \dots, b_{n-1}$, and conjugate rationals $p, q > 1$. Write $S := \sum_{k<n}|a_k|^{p}$, $T := \sum_{k<n}|b_k|^{q}$, $P := S^{1/p}$ and $Q := T^{1/q}$.

[L1] Young's inequality ([[thm-young-inequality]]): $uv \le \frac{u^{p}}{p} + \frac{v^{q}}{q}$ for all reals $u, v \ge 0$.

[L2] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, and the fact that a sum of nonnegative terms is nonnegative and vanishes only if every term vanishes.

[L3] Rational power laws ([[lem-rational-power-laws]], [[def-rational-power]], [[thm-nth-roots-exist]]): for $u > 0$ and rationals $r, s$: $u^{r} > 0$, $\big(u^{r}\big)^{s} = u^{rs}$, $u^{1} = u$, $u^{-r} = \big(u^{r}\big)^{-1}$, and $(uv)^{r} = u^{r}v^{r}$, the last also for $u, v \ge 0$ when $r > 0$; and $0^{r} = 0$ for rational $r > 0$, while $u > 0$ gives $u^{r} > 0$.

[L4] Absolute values ([[lem-of-abs-value]], [[def-abs-value]]): $|x| \ge 0$, $|xy| = |x||y|$, and $|x| = 0$ only for $x = 0$.

[L5] Order arithmetic: adding inequalities, that is $u \le v$ and $u' \le v'$ imply $u + u' \le v + v'$ ([[lem-of-add-order]]); scaling an inequality by a positive element ([[lem-of-sign-rules]]); and inverses of positives being positive ([[lem-of-inverse-positive]]). Rational exponents are read in $\mathbb{R}$ through the order-preserving embedding of $\mathbb{Q}$ ([[lem-of-q-embeds]], [[def-rat-order]]).

## Proof

**Proof technique:** direct.

1.1 All the quantities are defined and nonnegative: each $|a_k|^{p} \ge 0$ and each $|b_k|^{q} \ge 0$, so $S \ge 0$ and $T \ge 0$, and since $1/p > 0$ and $1/q > 0$ the powers $P = S^{1/p}$ and $Q = T^{1/q}$ are defined and nonnegative. [L2, L3, L4]

2.1 Degenerate cases: if $S = 0$ then every $|a_k|^{p} = 0$, so every $|a_k| = 0$ (a positive base has positive powers) and hence every $a_k = 0$, making the left-hand side $\sum_{k<n}|a_k b_k| = 0$, while $P = 0^{1/p} = 0$ makes the right-hand side $0$ as well; the case $T = 0$ is symmetric, so the inequality holds and we may assume $S > 0$ and $T > 0$, hence $P > 0$ and $Q > 0$. [step 1.1, L2, L3, L4]

3.1 Normalisation identities: $P^{p} = \big(S^{1/p}\big)^{p} = S^{(1/p)p} = S^{1} = S$, and likewise $Q^{q} = T$; moreover for each $k$, $\big(|a_k| P^{-1}\big)^{p} = |a_k|^{p}\big(P^{-1}\big)^{p} = |a_k|^{p}\big(P^{p}\big)^{-1} = |a_k|^{p} S^{-1}$, and likewise $\big(|b_k| Q^{-1}\big)^{q} = |b_k|^{q} T^{-1}$. [step 2.1, L3]

4.1 Termwise Young, applied to $u = |a_k| P^{-1} \ge 0$ and $v = |b_k| Q^{-1} \ge 0$: for every $k < n$, $|a_k| |b_k| P^{-1} Q^{-1} \le \frac{1}{p}|a_k|^{p} S^{-1} + \frac{1}{q}|b_k|^{q} T^{-1}$. [step 3.1, L1, L3, L5]

5.1 Summing over $k < n$ and using additivity and scaling: $P^{-1}Q^{-1}\sum_{k<n}|a_k||b_k| \le \frac{1}{p}S^{-1}\sum_{k<n}|a_k|^{p} + \frac{1}{q}T^{-1}\sum_{k<n}|b_k|^{q} = \frac{1}{p} + \frac{1}{q} = 1$, the middle equality because $S^{-1}S = 1$ and $T^{-1}T = 1$. [step 4.1, step 2.1, L2, L5]

6.1 Multiplying by $PQ > 0$ and using $|a_k b_k| = |a_k||b_k|$ gives $\sum_{k<n}|a_k b_k| \le PQ$, which together with the degenerate cases is the assertion. [step 5.1, step 2.1, L4, L5] ∎
