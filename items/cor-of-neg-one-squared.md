---
id: cor-of-neg-one-squared
kind: corollary
title: "$(-1)(-1) = 1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-of-mult-neg]
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

In any field $F$, the identity $(-1)(-1) = 1$ holds.

## Facts & Assumptions

**Given:** A field $F$ with multiplicative identity $1$.

[L1] For all elements $a, b$ of a field, $(-a)(-b) = ab$ ([[lem-of-mult-neg]]).

[L2] The element $1$ is the multiplicative identity, so $1 \cdot 1 = 1$ (field axiom).

## Proof

**Proof technique:** direct.

1.1 Setting $a = b = 1$ in the sign rule gives $(-1)(-1) = 1 \cdot 1$. [L1]

2.1 Since $1 \cdot 1 = 1$, we conclude $(-1)(-1) = 1$. [step 1.1, L2] ∎
