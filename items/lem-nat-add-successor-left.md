---
id: lem-nat-add-successor-left
kind: lemma
title: "Left successor law for addition"
status: published
origin: session
deps: [def-nat-addition, thm-induction-principle]
aliases: []
landmark: false
short: "$\\sigma(m)+n=\\sigma(m+n)$"
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.2 (Addition)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
pipeline_run: null
proof_strategy: induction
---

## Statement

For all $m, n \in \mathbb{N}$: $\sigma(m) + n = \sigma(m + n)$. (The recursion defines addition on the second argument; this is the matching law for adding on the first.)

## Facts & Assumptions

**Given:** Addition with $m + 0 = m$ and $m + \sigma(k) = \sigma(m + k)$ ([[def-nat-addition]]).

[L1] Induction principle ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 Base $n = 0$: $\sigma(m) + 0 = \sigma(m)$ by $x + 0 = x$, and $\sigma(m + 0) = \sigma(m)$ by $m + 0 = m$, so $\sigma(m) + 0 = \sigma(m + 0)$. [base]

1.2 Inductive hypothesis: $\sigma(m) + n = \sigma(m + n)$. [ih]

2.1 Step: $\sigma(m) + \sigma(n) = \sigma(\sigma(m) + n) = \sigma(\sigma(m + n)) = \sigma(m + \sigma(n))$, applying $x + \sigma(k) = \sigma(x + k)$ at the outer sum, then the hypothesis, then $m + \sigma(n) = \sigma(m + n)$ backward inside $\sigma$. [step 1.2, given]

3.1 By induction [L1], $\sigma(m) + n = \sigma(m + n)$ for all $n$, and since $m$ was arbitrary, for all $m, n \in \mathbb{N}$. [step 1.1, step 2.1, discharge-induction] ∎
