---
id: ex-existence-and-uniqueness-of-multilinear-extension
kind: example
title: "Interpolating a two-bit table over F_5"
status: draft
origin: pipeline
deps: [thm-existence-and-uniqueness-of-multilinear-extension]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct calculation
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), Figure 3.2 p.31"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Example

Over $\mathbb F_5$, let $f(0,0)=1$, $f(0,1)=2$, $f(1,0)=1$, and $f(1,1)=4$. Its unique multilinear extension is $\widetilde f(X,Y)=1+Y+2XY$. In particular $\widetilde f(2,3)=1$ in $\mathbb F_5$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Every field-valued Boolean table has the unique multilinear extension given by the product-basis interpolation sum ([[thm-existence-and-uniqueness-of-multilinear-extension]]).

## Verification

1.1 The interpolation formula gives $(1-X)(1-Y)+2(1-X)Y+X(1-Y)+4XY$. Expanding and combining coefficients yields $1+Y+2XY$, which has degree at most one in each variable. [F1, algebra]

2.1 Its values at $(0,0),(0,1),(1,0),(1,1)$ are respectively $1,2,1,4$, so it agrees with the table; uniqueness follows from the interpolation theorem. At $(2,3)$ its integer expression is $1+3+2\cdot2\cdot3=16$, which reduces to one modulo five. [F1, step 1.1, algebra] ∎
