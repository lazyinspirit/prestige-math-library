---
id: lem-of-inverse-unique
kind: lemma
title: "Identities and inverses in a field are unique"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field]
aliases: []
landmark: false
short: "$0,1,-x,x^{-1}$ unique"
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
    - title: "Field (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Field_(mathematics)"
    - title: "Janssen and Lindsey, Rings with Inquiry: Fields"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Rings_with_Inquiry_%28Janssen_and_Lindsey%29/02%3A_Fields_and_Rings/2.01%3A_Fields"
pipeline_run: null
proof_strategy: direct
---

## Statement

In a field $F$ ([[def-field]]) the additive identity, the multiplicative
identity, each additive inverse, and each multiplicative inverse are unique.
Hence the notations $0$, $1$, $-x$, and $x^{-1}$ denote well-defined elements, as
the field definition and its consequences assume.

## Facts & Assumptions

**Given:** A field $F$ satisfying the axioms (A), (M), (D) ([[def-field]]).

[L1] $(F, +)$ is an abelian group with identity $0$: addition is associative and commutative and $x + 0 = x$ for all $x$; and $(F \setminus \{0\}, \cdot)$ is an abelian group with identity $1$: multiplication is associative and commutative and $x \cdot 1 = x$ for all $x \ne 0$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 The additive identity is unique: if $0$ and $0'$ both satisfy $x + 0 = x$ and $x + 0' = x$ for all $x$, then $0' = 0' + 0 = 0 + 0' = 0$, using that $0$ is an identity, commutativity, and that $0'$ is an identity. [L1]

1.2 Additive inverses are unique: if $a$ and $b$ both satisfy $x + a = 0$ and $x + b = 0$, then $a = a + 0 = a + (x + b) = (a + x) + b = 0 + b = b$, using associativity and commutativity. [L1]

1.3 The same two arguments in the abelian group $(F \setminus \{0\}, \cdot)$ give uniqueness of the multiplicative identity, $1' = 1' \cdot 1 = 1 \cdot 1' = 1$, and of multiplicative inverses: if $x a = 1$ and $x b = 1$ with $x \ne 0$, then $a = a \cdot 1 = a (x b) = (a x) b = 1 \cdot b = b$ (using $a x = x a = 1$). [L1]

2.1 Therefore $0$, $1$ and, for each $x$, its additive inverse $-x$ and (for $x \ne 0$) its multiplicative inverse $x^{-1}$ are the unique elements with their defining properties, so all four notations are well-defined. [step 1.1, step 1.2, step 1.3] ∎
