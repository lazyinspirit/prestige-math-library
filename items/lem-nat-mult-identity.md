---
id: lem-nat-mult-identity
kind: lemma
title: "Zero and one under multiplication"
status: published
origin: session
deps: [def-nat-multiplication, def-nat-addition, lem-nat-add-identity, thm-induction-principle]
aliases: []
landmark: false
short: "$0\\cdot n=0,\\ 1\\cdot n=n=n\\cdot1$"
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
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
proof_strategy: induction
---

## Statement

For all $n \in \mathbb{N}$: $0 \cdot n = 0$, $1 \cdot n = n$, and $n \cdot 1 = n$. Here $1 = \sigma(0)$, and the clause $n \cdot 0 = 0$ is definitional.

## Facts & Assumptions

**Given:** multiplication $m \cdot 0 = 0$ and $m \cdot \sigma(n) = m \cdot n + m$ ([[def-nat-multiplication]]), and addition with $m + 0 = m$ and $m + \sigma(k) = \sigma(m + k)$ ([[def-nat-addition]]).

[L1] $0 + k = k$ for all $k \in \mathbb{N}$ ([[lem-nat-add-identity]]).

[L2] The induction principle ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction on $n$.

1.1 Right unit $n \cdot 1 = n$: $n \cdot 1 = n \cdot \sigma(0) = n \cdot 0 + n = 0 + n = n$, using the multiplication recursion then [L1]. [given, L1]

1.2 Base of the left inductions: $0 \cdot 0 = 0$ and $1 \cdot 0 = 0$ by the clause $m \cdot 0 = 0$. [base]

1.3 Inductive hypothesis: $0 \cdot n = 0$ and $1 \cdot n = n$. [ih]

2.1 Step: $0 \cdot \sigma(n) = 0 \cdot n + 0 = 0 + 0 = 0$, using the hypothesis $0 \cdot n = 0$ and $0 + 0 = 0$ (the instance $k = 0$ of [L1]); and $1 \cdot \sigma(n) = 1 \cdot n + 1 = n + 1 = \sigma(n)$, where $n + 1 = n + \sigma(0) = \sigma(n + 0) = \sigma(n)$ by the addition recursion $m + \sigma(k) = \sigma(m + k)$ and $n + 0 = n$. [step 1.3, given, L1]

3.1 By induction [L2], $0 \cdot n = 0$ and $1 \cdot n = n$ for all $n$; together with step 1.1, $n \cdot 1 = n$ for all $n$. [step 1.1, step 2.1, discharge-induction] ∎
