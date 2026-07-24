---
id: lem-nat-add-commutative
kind: lemma
title: "Addition is commutative"
status: published
origin: session
deps: [def-nat-addition, lem-nat-add-identity, lem-nat-add-successor-left, thm-induction-principle]
aliases: []
landmark: false
short: "$m+n=n+m$"
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
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
pipeline_run: null
proof_strategy: induction
---

## Statement

For all $m, n \in \mathbb{N}$: $m + n = n + m$.

## Facts & Assumptions

**Given:** Addition ([[def-nat-addition]]).

[L1] $0 + k = k$ for all $k$ ([[lem-nat-add-identity]]).

[L2] Left successor law: $\sigma(a) + k = \sigma(a + k)$ for all $a, k$ ([[lem-nat-add-successor-left]]).

[L3] Induction principle ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 Base $n = 0$: $m + 0 = m$ and $0 + m = m$ by [L1], so $m + 0 = 0 + m$. [base, L1]

1.2 Inductive hypothesis: $m + n = n + m$. [ih]

2.1 Step: $m + \sigma(n) = \sigma(m + n) = \sigma(n + m)$ by the recursion and the hypothesis; and the left successor law [L2] gives $\sigma(n) + m = \sigma(n + m)$, so $m + \sigma(n) = \sigma(n + m) = \sigma(n) + m$. [step 1.2, given, L2]

3.1 By induction [L3], $m + n = n + m$ for all $n$, hence for all $m, n \in \mathbb{N}$. [step 1.1, step 2.1, discharge-induction] ∎
