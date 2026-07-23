---
id: lem-null-is-cauchy
kind: lemma
title: "Null sequences are Cauchy"
status: draft
origin: session
deps: [def-null-sequence, def-rational-cauchy-sequence, lem-rat-triangle, thm-rat-field]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Every null sequence ([[def-null-sequence]]) is a Cauchy sequence
([[def-rational-cauchy-sequence]]).

## Facts & Assumptions

**Given:** A null sequence $(a_n)$ and a rational $\varepsilon > 0$.

[A1] Null: for every rational $\delta > 0$ there is $N$ with $|a_n| < \delta$ for all $n \ge N$.

[A2] Cauchy: for every rational $\delta > 0$ there is $N$ with $|a_m - a_n| < \delta$ for all $m,n \ge N$.

[L1] Field arithmetic in $\mathbb{Q}$: $\varepsilon/2 > 0$ and $\varepsilon/2 + \varepsilon/2 = \varepsilon$ ([[thm-rat-field]], [[thm-rat-ordered-field]]).

[L2] Triangle inequality ([[lem-rat-triangle]]).

## Proof

**Proof technique:** direct.

1.1 $\varepsilon/2$ is a positive rational. [L1]

2.1 Fix $N$ with $|a_n| < \varepsilon/2$ for all $n \ge N$. [step 1.1, A1]

3.1 For $m, n \ge N$: $|a_m - a_n| \le |a_m| + |a_n| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 2.1, L1, L2]

4.1 $(a_n)$ is Cauchy. [step 3.1, A2] ∎
