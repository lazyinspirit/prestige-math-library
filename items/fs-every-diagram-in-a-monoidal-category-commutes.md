---
id: fs-every-diagram-in-a-monoidal-category-commutes
kind: false-statement
title: "Every diagram in a monoidal category commutes"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-every-diagram-commutes-is-false-as-stated, thm-a-category-with-finite-products-is-monoidal]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.2"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

**False claim:** every diagram in a monoidal category commutes.

## Facts & Assumptions

**Given:** The scope warning attached to the coherence theorem.

[L1] Coherence only covers formal diagrams of canonical morphisms between parenthesised tensor words ([[rem-every-diagram-commutes-is-false-as-stated]]).

[L2] A category with finite products is monoidal under its cartesian product ([[thm-a-category-with-finite-products-is-monoidal]]).

## Refutation

**Proof technique:** direct.

1.1 Let $A=\{0,1\}$ in the cartesian monoidal category of sets supplied by [L2], and let $c:A\to A$ be the constant-zero map. Consider the square with all four vertices $A$, top edge $c$, and the other three edges $1_A$. [given, L2, construct]

2.1 The composite along the top and right edges is $c$, while the composite along the left and bottom edges is $1_A$. These maps differ because $c(1)=0\ne1=1_A(1)$, so the square does not commute. [step 1.1, algebra]

3.1 This noncanonical square lies outside the scope described in [L1] and is a diagram in a monoidal category that does not commute. Therefore the claim is false. [L1, step 2.1] ∎
