---
id: lem-nat-add-identity
kind: lemma
title: "Left identity for addition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nat-addition, thm-induction-principle]
aliases: []
landmark: false
short: "$0+n=n$"
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
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
proof_strategy: induction
---

## Statement

For all $n \in \mathbb{N}$: $0 + n = n$. The right identity $n + 0 = n$ is definitional, so together with this law $0$ is a two-sided identity for addition.

## Facts & Assumptions

**Given:** Addition with $m + 0 = m$ and $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] Induction principle ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 Base $n = 0$: $0 + 0 = 0$ by the clause $m + 0 = m$ at $m = 0$. [base]

1.2 Inductive hypothesis: $0 + n = n$. [ih]

2.1 Step: $0 + \sigma(n) = \sigma(0 + n) = \sigma(n)$, using $m + \sigma(n) = \sigma(m + n)$ at $m = 0$, then the hypothesis. [step 1.2, given]

3.1 By induction [L1], $0 + n = n$ for all $n \in \mathbb{N}$. [step 1.1, step 2.1, discharge-induction] ∎
