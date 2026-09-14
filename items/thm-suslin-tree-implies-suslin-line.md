---
id: thm-suslin-tree-implies-suslin-line
kind: theorem
title: "A Suslin tree yields a Suslin line"
status: draft
origin: pipeline
deps: [def-suslin-line-order-interface, lem-suslin-tree-normal-splitting-refinement, lem-suslin-tree-branch-first-difference-order, lem-linear-order-completion-existence-uniqueness-and-density, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Lemma 9.12 through Corollary 9.16, printed pp. 65-72"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

In ZFC, if a Suslin tree exists, then a Suslin line exists in the strong published convention.

## Facts & Assumptions

**Given:** A Suslin tree $T$. Assume AC.

[F1] A strong-convention Suslin line is nonempty, dense, has no endpoints, is boundedly complete, has no countable order-dense subset, and has only countable families of pairwise disjoint nonempty open intervals. [[def-suslin-line-order-interface]]

[F2] Every Suslin tree has an infinitely splitting normal Suslin refinement in ZFC. [[lem-suslin-tree-normal-splitting-refinement]]

[F3] The maximal branches of that refinement carry a dense no-endpoint ccc first-difference order in which every nonempty open interval is nonseparable. [[lem-suslin-tree-branch-first-difference-order]]

[F4] Completing such an order and deleting possible endpoints preserves density, bounded completeness, ccc, and absence of separable nonempty intervals. [[lem-linear-order-completion-existence-uniqueness-and-density]]

[A1] AC is the choice principle used by the refinement, branch, and completion constructions. [[def-axiom-of-choice]]

## Proof

1.1 Apply F2 to $T$ and obtain an infinitely splitting normal Suslin refinement $S$. [F2, A1, given]

2.1 By F3, the maximal branches of $S$, ordered at their first differing successor, form a nonempty dense linear order $L$ without endpoints. The order has no uncountable pairwise disjoint family of nonempty open intervals, and every nonempty open interval of $L$ is nonseparable. [F3, A1, step 1.1]

3.1 Take the exact completion of $L$ and delete its possible first and last points. By F4 the resulting order $M$ is nonempty, dense, has no endpoints, is boundedly complete, satisfies the interval ccc, and has no separable nonempty open interval. In particular $M$ itself has no countable order-dense subset: if such a set existed, it would be dense in every nonempty open subinterval, contradicting the preceding property. Thus every clause of F1 holds, so $M$ is a Suslin line in the published convention. All three constructions are in ZFC and their uses of choice are exactly those recorded by the supplying lemmas; the implication is not asserted in ZF. [F1, F4, A1, step 2.1] ∎
