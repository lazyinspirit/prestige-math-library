---
id: thm-descending-diagram-is-unknot-and-finite-bounds
kind: theorem
title: Descending diagrams are unknotted and unknotting number is finite
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-bridge-position-and-unknotting-number
  - alg-descending-diagram-unknotting-sequence
  - thm-descending-diagram-is-unknot
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth, Stipsicz, and Szabó, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "§2.3, Exercise 2.3.8(a) and discussion of unknotting number, printed pp. 23–25"
    - title: "Jennifer Schultens, Additivity of Bridge Numbers of Knots"
      url: "https://www.math.ucdavis.edu/~jcs/pubs/addbri15.pdf"
      locator: "Definition 1 and the bridge-position discussion, printed pp. 1–2"
---

## Statement

Assume the Axiom of Countable Choice. Let $K$ be a smooth oriented knot and let $D$ be an admissible finite planar code for a regular diagram of a representative of $K$, based at an interior point of an edge. The descending-diagram procedure changes at most $c(D)$ crossings, where $c(D)$ is the number of crossing records in the code, and its output diagram represents the standard unknot. Consequently the set of unknotting-sequence lengths for $K$ is a nonempty subset of $\mathbb N$, so the unknotting number $u(K)$ is finite and satisfies $u(K)\le c(D)$.

## Statement references

[[def-knot-bridge-position-and-unknotting-number|The unknotting number and crossing-change convention]]

[[alg-descending-diagram-unknotting-sequence|The finite based traversal and crossing-change procedure]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth oriented knot $K$, a finite regular diagram code $D$, and a basepoint in the interior of an edge.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$. [[def-countable-choice]]

[F1] The algorithm scans the finite crossing set once and returns the list of crossings whose first encounter is under, together with the updated code. [[alg-descending-diagram-unknotting-sequence]]

[F2] A code whose first encounter at every crossing is an overpass represents the standard unknot. [[thm-descending-diagram-is-unknot]]

[F3] The unknotting number is the minimum length of a crossing-change sequence from some regular diagram of a representative to the standard unknot diagram. [[def-knot-bridge-position-and-unknotting-number]]

## Proof

**Given:** $\mathrm{AC}_\omega$, a knot $K$, and an admissible finite code $D$ for a regular diagram of a representative of $K$, with a basepoint in an edge interior.


1.1 Apply [F1] to $D$. Since $D$ has $c(D)$ crossing records, the algorithm terminates after that finite scan and returns at most $c(D)$ crossing changes. [A1, F1, given, algebra]

2.1 After those changes every crossing is first encountered as an overpass, so [F2] says the updated code represents the standard unknot. It follows from [F3] that the returned list witnesses $u(K)\le c(D)$. In particular the set defining $u(K)$ is nonempty and its minimum is finite. [F2, F3, step 1.1, algebra] ∎

## Sources

[[def-countable-choice]]

[[alg-descending-diagram-unknotting-sequence]]

[[thm-descending-diagram-is-unknot]]

[[def-knot-bridge-position-and-unknotting-number]]
