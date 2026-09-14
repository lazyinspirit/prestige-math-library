---
id: cor-suslin-tree-yields-nonproductive-ccc
kind: corollary
title: "A Suslin tree yields nonproductive ccc"
status: published
origin: pipeline
deps: [lem-suslin-tree-normal-splitting-refinement, thm-splitting-suslin-tree-poset-square-not-ccc, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Proposition 9.34, printed pp. 86-87 (sibling-selection argument); product deduction supplied by the cited local theorem"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

In ZFC, if a Suslin tree exists, then there is a ccc poset $P$ whose coordinatewise square $P\times P$ is not ccc.

## Facts & Assumptions

**Given:** A Suslin tree $T$ and AC.

[F1] Every Suslin tree yields a normal splitting Suslin tree. [[lem-suslin-tree-normal-splitting-refinement]]

[F2] The reverse-order poset of a normal splitting Suslin tree is ccc, but its coordinatewise square is not ccc. [[thm-splitting-suslin-tree-poset-square-not-ccc]]

[A1] AC is available and its use by both constructions is propagated. [[def-axiom-of-choice]]

## Proof

1.1 Apply F1 to $T$ and call the resulting normal splitting Suslin tree $S$. The normalization retains height $\omega_1$ and the Suslin prohibitions, so its output is not an empty or singleton degeneration. [F1, A1, given]

2.1 Let $P$ be $S$ with the reverse tree order. By F2, $P$ is ccc and the explicitly coordinatewise product $P\times P$ has an uncountable antichain, so it is not ccc. Thus this $P$ witnesses the assertion. No new choice is made here beyond the choices already declared by the cited suppliers. [F2, A1, step 1.1] ∎
