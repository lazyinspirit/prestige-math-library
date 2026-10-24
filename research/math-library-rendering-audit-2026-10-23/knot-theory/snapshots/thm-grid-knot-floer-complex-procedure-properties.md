---
id: thm-grid-knot-floer-complex-procedure-properties
kind: theorem
title: "Termination and exact output of the grid-complex algorithm"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - alg-grid-knot-floer-complex
  - def-grid-diagram-for-an-oriented-knot
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, §§4.1–4.6"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.65–82; finite permutation states, rectangle enumeration, and exact differential matrices"
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §§1 and 3"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Finite generator set and combinatorial rectangle differential"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

For every finite encoded grid and every mode in the allowed mode set of the grid-complex algorithm, execution terminates. If the grid is invalid, the procedure returns exactly the specified invalid-grid or link-input-not-supported branch. If the input is a valid one-component grid, it returns the stated coefficient ring, all grid states in the declared order, and exactly the matrix entries prescribed by the selected rectangle mode, with the declared gradings and filtration data. This theorem asserts no topological invariance or identification with a Floer homology group.
## Statement references

[[alg-grid-knot-floer-complex|The finite grid-complex algorithm and its output specification]]

## Facts & Assumptions

**Given:** A finite encoded grid, a selected mode, and the exact validation and enumeration instructions in the algorithm.

[F1] [[alg-grid-knot-floer-complex]] checks the grid number and disjoint one-per-row/column markings, determines the knot component count, and uses the allowed mode to filter the finite state and empty-rectangle lists and compute the output coefficients exactly as stated.

[F2] [[def-grid-diagram-for-an-oriented-knot]] identifies the state set with the permutations of $\{1,\ldots,n\}$ and defines the torus rectangles used by the algorithm.

## Proof

1.1 The validation stage scans the finite $n\times n$ marking array, counts the markings in each row and column, and traces a permutation on the finite set of $n$ markings. Each scan and each cycle check terminates. A failed size, marking, or disjointness condition returns `invalid-grid`; a valid marking array with more than one component cycle returns `link-input-not-supported`, exactly the two specified rejection branches. [F1, construct]

1.2 On a valid knot input, the algorithm enumerates the $n!$ permutations. There are finitely many ordered state pairs; a pair has at most two candidate torus rectangles by [F2]. Testing whether a candidate is empty and counting its finitely many markings takes finitely many array operations. Every mode filter and coefficient calculation is therefore finite, so all matrix entries and grading lists are produced in finite time. [F1, F2, construct]

2.1 By [F2], every grid state appears exactly once in the permutation enumeration and every rectangle from a pair is among the enumerated torus rectangles. The empty-state test is the definition of $\operatorname{Rect}^{\circ}$; the mode-specific marking test and coefficient are the instructions in [F1]. Summing the accepted terms modulo two therefore gives exactly the specified differential matrix, and the remaining output fields are computed from the stated grading formulas. [F1, F2, step 1.2, algebra] ∎
