---
id: lem-nat-add-associative
kind: lemma
title: "Addition is associative"
status: published
origin: session
deps: [def-nat-addition, thm-induction-principle]
aliases: []
landmark: false
short: "$(a+b)+c=a+(b+c)$"
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

For all $a, b, c \in \mathbb{N}$: $(a + b) + c = a + (b + c)$.

## Facts & Assumptions

**Given:** Addition with $m + 0 = m$ and $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] Induction principle ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 Base $c = 0$: $(a + b) + 0 = a + b$ and $a + (b + 0) = a + b$, so they are equal. [base]

1.2 Inductive hypothesis: $(a + b) + c = a + (b + c)$. [ih]

2.1 Step: $(a + b) + \sigma(c) = \sigma((a + b) + c) = \sigma(a + (b + c)) = a + \sigma(b + c) = a + (b + \sigma(c))$, using $m + \sigma(n) = \sigma(m + n)$ twice and the hypothesis. [step 1.2]

3.1 By induction [L1], $(a + b) + c = a + (b + c)$ for all $c$, hence for all $a, b, c \in \mathbb{N}$. [step 1.1, step 2.1, discharge-induction] ∎
