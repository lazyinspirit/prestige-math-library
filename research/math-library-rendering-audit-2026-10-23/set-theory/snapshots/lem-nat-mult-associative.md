---
id: lem-nat-mult-associative
kind: lemma
title: "Multiplication is associative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nat-multiplication, def-nat-addition, lem-nat-mult-distributive, thm-induction-principle]
aliases: []
landmark: false
short: "$(ab)c=a(bc)$"
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
    - title: "Mathematics 144: Set Theory (UC Riverside lecture notes)"
      url: "https://math.ucr.edu/~res/math153-2019/set-theory-notes.pdf"
pipeline_run: null
proof_strategy: induction
---

## Statement

For all $a, b, c \in \mathbb{N}$: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.

## Facts & Assumptions

**Given:** multiplication and addition ([[def-nat-multiplication]], [[def-nat-addition]]).

[L1] Left distributivity $a \cdot (b + c) = a \cdot b + a \cdot c$ ([[lem-nat-mult-distributive]]).

[L2] The induction principle ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction on $c$, with $a, b$ fixed.

1.1 Base $c = 0$: $(a \cdot b) \cdot 0 = 0$ and $a \cdot (b \cdot 0) = a \cdot 0 = 0$, so the two sides are equal. [base]

1.2 Inductive hypothesis: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$. [ih]

2.1 Step: $(a \cdot b) \cdot \sigma(c) = (a \cdot b) \cdot c + a \cdot b = a \cdot (b \cdot c) + a \cdot b = a \cdot (b \cdot c + b) = a \cdot (b \cdot \sigma(c))$, using the multiplication recursion, the hypothesis, left distributivity [L1], and $b \cdot \sigma(c) = b \cdot c + b$. [step 1.2, L1]

3.1 By induction [L2], $(a \cdot b) \cdot c = a \cdot (b \cdot c)$ for all $c$, hence for all $a, b, c \in \mathbb{N}$. [step 1.1, step 2.1, discharge-induction] ∎
