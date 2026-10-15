---
id: ex-missing-treatment-is-not-a-complete-block
kind: example
title: A missing treatment falls outside the complete-block assignment space
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-randomized-complete-block-design
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 13 §§13.1–13.2"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
---

## Example

There are three treatments $A,B,C$ and one block, but only two units receive
treatments $A$ and $C$. This is not a complete block: the assignment omits
$B$, so it is not an element of the RCBD assignment space.

## Verification


**Given:** A block with treatments $\{A,B,C\}$ whose observed assignments are $A$ and $C$ only.

[F1] In an RCBD assignment, each block receives every treatment exactly once; equivalently its unit-to-treatment map is a permutation ([[def-randomized-complete-block-design]]).

1.1 The image of this block's assignment is $\{A,C\}$, which omits $B$, so the map is not onto $\{A,B,C\}$ and is not a permutation. [F1, given]

2.1 Every assignment in the RCBD sample space is a permutation, while this assignment is not; therefore this block is incomplete and outside that sample space. [F1, step 1.1] ∎