---
id: lem-nat-mult-commutative
kind: lemma
title: "Multiplication is commutative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nat-multiplication, lem-nat-mult-identity, lem-nat-mult-distributive, thm-induction-principle]
aliases: []
landmark: false
short: "$mn=nm$"
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
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
proof_strategy: induction
---

## Statement

For all $m, n \in \mathbb{N}$: $m \cdot n = n \cdot m$.

## Facts & Assumptions

**Given:** multiplication ([[def-nat-multiplication]]).

[L1] $0 \cdot k = 0$ for all $k \in \mathbb{N}$ ([[lem-nat-mult-identity]]).

[L2] The successor-left law $\sigma(n) \cdot m = n \cdot m + m$ ([[lem-nat-mult-distributive]]).

[L3] The induction principle ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction on $n$, with $m$ fixed.

1.1 Base $n = 0$: $m \cdot 0 = 0$ and $0 \cdot m = 0$ by [L1], so $m \cdot 0 = 0 \cdot m$. [base, L1]

1.2 Inductive hypothesis: $m \cdot n = n \cdot m$. [ih]

2.1 Step: $m \cdot \sigma(n) = m \cdot n + m = n \cdot m + m = \sigma(n) \cdot m$, using the multiplication recursion, the hypothesis, then the successor-left law [L2]. [step 1.2, L2]

3.1 By induction [L3], $m \cdot n = n \cdot m$ for all $n$, hence for all $m, n \in \mathbb{N}$. [step 1.1, step 2.1, discharge-induction] ∎
