---
id: thm-reals-ordered-field
kind: theorem
title: "The reals form a totally ordered field"
status: published
origin: session
deps: [def-real-order, def-real-numbers, thm-reals-field, lem-cauchy-away-from-zero, thm-rat-ordered-field, def-null-sequence]
aliases: []
landmark: true
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
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

The relation of [[def-real-order]] is well defined and makes $\mathbb{R}$
([[thm-reals-field]]) a totally ordered field.

## Facts & Assumptions

**Given:** Reals $x, y$ with representatives $(a_n), (b_n)$.

[L1] Null definition: a null perturbation is eventually smaller than any positive rational ([[def-null-sequence]]).

[L2] Ordered-field arithmetic in $\mathbb{Q}$: $\delta/2 > 0$; sums and products of eventual lower bounds ([[thm-rat-ordered-field]]).

[L3] Dichotomy for non-null Cauchy sequences: eventually $> \delta$ or eventually $< -\delta$ ([[lem-cauchy-away-from-zero]]).

[L4] $\mathbb{R}$ is a field ([[thm-reals-field]]).

[L5] In $\mathbb{R} = \mathcal{C}/\mathcal{N}$, $x = 0$ iff a representative is null; so $x \ne 0$ iff every representative is non-null ([[def-real-numbers]]).

## Proof

**Proof technique:** direct.

1.1 Positivity is independent of the representative: if $a_n > \delta$ for $n \ge N$ and $(a'_n - a_n)$ is null, then beyond some $N' \ge N$ also $|a'_n - a_n| < \delta/2$, so $a'_n > \delta/2$: the defining property holds for $(a'_n)$ with $\delta/2$. [L1, L2]

1.2 Trichotomy: if $x \ne 0$, any representative is non-null, so by the dichotomy either $a_n > \delta$ eventually ($x$ positive) or $a_n < -\delta$ eventually ($-x$ positive); the two exclude each other, and exactly one of $x$ positive, $x = 0$, $-x$ positive holds. [L1, L3, L5]

1.3 Positives are closed under $+$ and $\cdot$: from $a_n > \delta$ and $b_n > \delta'$ eventually, $a_n + b_n > \delta + \delta'$ and $a_n b_n > \delta\delta'$ eventually, with $\delta + \delta', \delta\delta' > 0$. [L2]

2.1 Consequently $\le$ is a total order (trichotomy plus transitivity from closure under sums), compatible with addition (translation preserves the difference) and with multiplication by positives: $\mathbb{R}$ is a totally ordered field. [step 1.1, step 1.2, step 1.3, L4] ∎
