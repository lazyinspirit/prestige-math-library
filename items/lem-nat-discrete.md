---
id: lem-nat-discrete
kind: lemma
title: "Discreteness: $\\sigma(n)$ is the immediate successor"
status: published
origin: session
deps: [def-nat-order, def-nat-addition, lem-nat-nonzero-is-successor, lem-nat-add-successor-left]
aliases: []
landmark: false
short: "$m<n\\iff\\sigma(m)\\le n$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
pipeline_run: null
---

## Statement

For all $m, n \in \mathbb{N}$: $m < n \iff \sigma(m) \le n$ ([[def-nat-order]]). Consequently there is no $k$ with $n < k < \sigma(n)$: the successor $\sigma(n)$ is the immediate successor of $n$.

## Facts & Assumptions

**Given:** The order, where $m < n$ means $m + j = n$ with $j \ne 0$ ([[def-nat-order]]), and addition with $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] Every nonzero natural is a successor: $j \ne 0 \Rightarrow j = \sigma(i)$ ([[lem-nat-nonzero-is-successor]]).

[L2] $\sigma(m) + i = \sigma(m + i)$ (the left successor law, [[lem-nat-add-successor-left]]) and $m + \sigma(i) = \sigma(m + i)$ (the addition recursion).

## Proof

**Proof technique:** direct.

1.1 Forward: if $m < n$ then $m + j = n$ with $j \ne 0$, so $j = \sigma(i)$ and $n = m + \sigma(i) = \sigma(m + i) = \sigma(m) + i$, hence $\sigma(m) \le n$. [given, L1, L2]

1.2 Backward: if $\sigma(m) \le n$ then $\sigma(m) + i = n$, so $n = \sigma(m) + i = \sigma(m + i) = m + \sigma(i)$ with $\sigma(i) \ne 0$, giving $m < n$. [given, L2]

2.1 No $k$ satisfies $n < k < \sigma(n)$: if $n < k$ then $\sigma(n) \le k$ by the equivalence, so $k \ge \sigma(n)$, contradicting $k < \sigma(n)$; thus $\sigma(n)$ is the immediate successor. [step 1.1, step 1.2] ∎
