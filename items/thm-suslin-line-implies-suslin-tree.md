---
id: thm-suslin-line-implies-suslin-tree
kind: theorem
title: "A Suslin line yields a Suslin tree"
status: published
origin: pipeline
deps: [lem-suslin-line-nowhere-separable-quotient, lem-nowhere-separable-suslin-line-nested-interval-tree, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Theorems 9.17-9.18, printed pp. 72-75"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

In ZFC, if a Suslin line exists, then a Suslin tree exists.

## Facts & Assumptions

**Given:** A Suslin line $S$. Assume AC.

[F1] The nowhere-separable quotient and exact completion of $S$ is a dense no-endpoint ccc line with no separable nonempty interval. [[lem-suslin-line-nowhere-separable-quotient]]

[F2] Reverse nesting of recursively selected closed intervals in such a line gives an $\omega_1$-height tree with countable levels, no cofinal branch, and no uncountable antichain. [[lem-nowhere-separable-suslin-line-nested-interval-tree]]

[A1] Both constructions declare their uses of AC. [[def-axiom-of-choice]]

## Proof

1.1 Apply F1 to $S$ and obtain a dense no-endpoint ccc line $L$ in which every nonempty open interval is nonseparable. [F1, A1, given]

2.1 Apply F2 to $L$. Its recursively nested closed intervals form a tree of height exactly $\omega_1$ with countable levels, no cofinal branch, and no uncountable antichain; thus it is a Suslin tree. The source lemma derives the height and every forbidden-set conclusion, so this composition does not assume that construction stage equals tree level. Its inherited choice principle is AC, and no implication over ZF is asserted. [F2, A1, step 1.1] ∎
