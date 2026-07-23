---
id: fs-rationals-complete
kind: false-statement
title: "FALSE: the rationals are complete"
status: published
origin: session
deps: [fs-sqrt2-rational, def-rational-cauchy-sequence, def-null-sequence, lem-rat-archimedean, thm-rat-ordered-field, lem-rat-triangle, lem-null-ideal, lem-cauchy-bounded]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

**False claim:** every Cauchy sequence of rationals converges to a rational
(where $(a_n) \to q$ means $(a_n - q)$ is null).

This is precisely the defect the construction of $\mathbb{R}$ repairs.

## Facts & Assumptions

**Given:** The decimal truncations of $\sqrt 2$, built below.

[A1] In $\mathbb{N}$: for each $n$ there is a largest natural $k$ with $k^2 \le 2 \cdot 10^{2n}$ (only finitely many candidates, since $k > 2 \cdot 10^n$ already fails); and $n < 10^n$.

[L1] Ordered-field arithmetic in $\mathbb{Q}$ ([[thm-rat-ordered-field]], [[lem-rat-triangle]]).

[L2] No rational squares to $2$ ([[fs-sqrt2-rational]]).

[L3] A constant sequence is null only if the constant is $0$; sums of null sequences are null; a Cauchy multiple of a null sequence is null ([[def-null-sequence]], [[lem-null-ideal]]).

[L4] Archimedean property, so $10^{-n}$ falls below any positive rational ([[lem-rat-archimedean]]).

## Refutation

**Proof technique:** direct.

1.1 For each $n$ let $k_n$ be the largest natural with $k_n^2 \le 2 \cdot 10^{2n}$, and set $s_n = k_n / 10^n$; then $s_n^2 \le 2 < (s_n + 10^{-n})^2$, and $s_n \le 2$ (since $k_n^2 \le 2\cdot 10^{2n} < (2 \cdot 10^n)^2$). [A1, L1]

2.1 $(s_n)$ is Cauchy: for $m \ge n$, $(10^{m-n} k_n)^2 \le 2 \cdot 10^{2m}$ gives $10^{m-n} k_n \le k_m$, so $s_n \le s_m$; and $s_m^2 \le 2 < (s_n + 10^{-n})^2$ forces $s_m < s_n + 10^{-n}$; hence $0 \le s_m - s_n < 10^{-n}$, and $10^{-n}$ eventually falls below any $\varepsilon > 0$. [step 1.1, L1, L4]

2.2 $(s_n^2 - 2)$ is null: $0 \le 2 - s_n^2 < (s_n + 10^{-n})^2 - s_n^2 = 10^{-n}(2 s_n + 10^{-n}) \le 5 \cdot 10^{-n}$. [step 1.1, L1, L4]

3.1 If $(s_n)$ converged to a rational $q$, then $(s_n - q)$ would be null; since $(s_n + q)$ is Cauchy, $(s_n^2 - q^2) = (s_n - q)(s_n + q)$ would be null; adding the null $(2 - s_n^2)$, the constant $2 - q^2$ would be null, forcing $q^2 = 2$. [step 2.1, step 2.2, L3, L1]

4.1 No rational squares to $2$, so $(s_n)$ is a Cauchy sequence of rationals with no rational limit: the claim is refuted. [step 3.1, step 2.1, L2] ∎
