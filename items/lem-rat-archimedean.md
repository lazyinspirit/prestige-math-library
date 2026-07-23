---
id: lem-rat-archimedean
kind: lemma
title: "The rationals are Archimedean"
status: draft
origin: session
deps: [def-rat-order, thm-rat-ordered-field, lem-nat-embeds-int, lem-int-embeds-rat]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

For every rational $x$ there is a natural number $n$ with $x < n$.
Consequently, for every rational $\varepsilon > 0$ there is a natural
$n \ge 1$ with $1/n < \varepsilon$.

## Facts & Assumptions

**Given:** A rational $x = [(a,b)]$ with $b > 0$.

[L1] The order and arithmetic of $\mathbb{Q}$ ([[thm-rat-ordered-field]]).

[L2] Integer facts: positive integers are exactly $\iota(m)$ with $m \ge 1$ natural; nonnegative integers are the image of $\mathbb{N}$; the embeddings preserve arithmetic and order ([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[thm-int-ordered-ring]]).

## Proof

**Proof technique:** direct.

1.1 Since $b > 0$, $b$ lies in the image of $\mathbb{N}$ and $b \ge 1$. [L2]

1.2 If $a \le 0$ set $k = 0$; otherwise $a$ is a positive integer, so $a = \iota(k)$ for some natural $k \ge 1$. In both cases $a \le k$ (as integers). [L2]

2.1 Then $a < k + 1$ and, since $b \ge 1$ and $k+1 > 0$, also $k + 1 \le (k+1)b$. [step 1.1, step 1.2, L2]

3.1 Hence $a < (k+1)b$, and dividing by $b > 0$ (order-scaling in the definition of the rational order), $x = [(a,b)] < [( (k+1)b,\, b)] = k+1 =: n$. [step 2.1, L1]

4.1 For rational $\varepsilon > 0$: apply the above to $x = 1/\varepsilon$ to get $n$ with $1/\varepsilon < n$, hence $1/n < \varepsilon$. [step 3.1, L1] ∎
