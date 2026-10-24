---
id: lem-of-mult-cancel
kind: lemma
title: "Multiplicative cancellation: $c \\ne 0$ and $ac = bc \\Rightarrow a = b$"
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
    - title: "Tom Denton, Introduction to Algebraic Structures: The Problem of Division"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Introduction_to_Algebraic_Structures_%28Denton%29/08%3A_Rings_II/8.01%3A_The_Problem_of_Division"
pipeline_run: null
---

## Statement

In any field $F$ ([[def-field]]), if $a, b, c \in F$ with $c \ne 0$ and $ac = bc$, then $a = b$.

## Facts & Assumptions

**Given:** A field $F$ and elements $a, b, c \in F$ with $c \ne 0$ and $ac = bc$.

[L1] Field axioms ([[def-field]]): since $c \ne 0$, the inverse $c^{-1}$ exists with $c \cdot c^{-1} = 1$; multiplication is associative; and $1$ is the multiplicative identity, so $x \cdot 1 = x$.

## Proof

**Proof technique:** direct.

1.1 Since $c \ne 0$, the inverse $c^{-1}$ exists with $c \cdot c^{-1} = 1$. [L1]

1.2 We are given $ac = bc$. [given]

2.1 Using $c \cdot c^{-1} = 1$ and associativity, $a = a \cdot 1 = a(c \cdot c^{-1}) = (ac) c^{-1}$. [step 1.1, L1]

2.2 Using $c \cdot c^{-1} = 1$ and associativity, $b = b \cdot 1 = b(c \cdot c^{-1}) = (bc) c^{-1}$. [step 1.1, L1]

2.3 Since $ac = bc$, we have $(ac) c^{-1} = (bc) c^{-1}$. [step 1.2]

3.1 Combining, $a = (ac) c^{-1} = (bc) c^{-1} = b$. [step 2.1, step 2.2, step 2.3] ∎
