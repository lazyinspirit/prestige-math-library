---
id: thm-the-nine-lemma-follows-from-the-snake-lemma
kind: theorem
title: "The nine lemma follows from the snake lemma"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-snake-lemma-in-an-abelian-category]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Exercise VIII.4.5(b)"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Statement

The nine lemma can be proved by applying the snake lemma to the standard quotient
diagram attached to a commutative $3 \times 3$ diagram with short exact
columns.

## Facts & Assumptions

**Given:** A commutative $3 \times 3$ diagram with short exact columns and
middle row short exact.

[L1] The snake lemma supplies the exact six-term sequence for a morphism of
short exact sequences ([[thm-snake-lemma-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Collapse the first two rows of the $3 \times 3$ diagram to their quotient row. The short exact columns identify the needed kernels and cokernels of that quotient diagram with the two outer rows of the original $3 \times 3$ picture. [L1, given, construct]

2.1 Applying [L1] to that quotient diagram yields a snake sequence whose endpoint exactness is exactly the missing exactness of the remaining outer row. Running the same argument in the opposite direction gives the converse implication. [L1, step 1.1]

3.1 Therefore the nine lemma is a direct consequence of the snake lemma. [step 2.1] ∎
