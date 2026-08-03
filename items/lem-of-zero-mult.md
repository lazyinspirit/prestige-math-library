---
id: lem-of-zero-mult
kind: lemma
title: "Multiplication by zero: $0 \\cdot a = 0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field]
aliases: []
landmark: false
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "Janssen and Lindsey, Rings with Inquiry: Fields"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Rings_with_Inquiry_%28Janssen_and_Lindsey%29/02%3A_Fields_and_Rings/2.01%3A_Fields"
pipeline_run: null
---

## Statement

In any field $F$ ([[def-field]]), for every $a \in F$ we have $0 \cdot a = 0$.

## Facts & Assumptions

**Given:** A field $F$ and an element $a \in F$.

[L1] Field axioms ([[def-field]]): $0$ is the additive identity, so $0 + 0 = 0$ and $x + 0 = x$ for all $x$; multiplication distributes over addition, $(y + z) \cdot x = y \cdot x + z \cdot x$.

[L2] Field axioms ([[def-field]]): every element has an additive inverse, so addition admits cancellation: if $x + z = y + z$ then $x = y$.

## Proof

**Proof technique:** direct.

1.1 Since $0 + 0 = 0$, we have $0 \cdot a = (0 + 0) \cdot a$. [L1]

1.2 By distributivity, $(0 + 0) \cdot a = 0 \cdot a + 0 \cdot a$. [L1]

1.3 Since $0$ is the additive identity, $0 \cdot a = 0 \cdot a + 0$. [L1]

2.1 Combining the two expressions for $(0 + 0) \cdot a$ gives $0 \cdot a = 0 \cdot a + 0 \cdot a$. [step 1.1, step 1.2]

3.1 From steps 1.3 and 2.1, $0 \cdot a + 0 = 0 \cdot a + 0 \cdot a$. [step 1.3, step 2.1]

4.1 Cancelling $0 \cdot a$ from both sides yields $0 = 0 \cdot a$, that is $0 \cdot a = 0$. [step 3.1, L2] ∎
