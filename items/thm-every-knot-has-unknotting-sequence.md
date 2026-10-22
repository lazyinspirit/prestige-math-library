---
id: thm-every-knot-has-unknotting-sequence
kind: theorem
title: Every smooth knot has a finite crossing-change sequence to the unknot
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - lem-regular-projection-admits-finite-planar-code
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
      locator: "§2.3, Exercise 2.3.8(a) and unknotting-number discussion, printed pp. 23–25"
    - title: "Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram"
      url: "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
      locator: "§§1.2–3.2, printed pp. 2–4, finite diagram records"
---

## Statement

Assume the Axiom of Countable Choice. Every smooth oriented knot in $S^3$ admits a finite rational polygonal code recording a one-component diagram with only finitely many transverse double points and an overpassing choice at each, together with a finite sequence of changes that switch overpassing choices and whose final diagram represents the standard unknot.

## Statement references

[[lem-regular-projection-admits-finite-planar-code|Every smooth knot admits a finite planar diagram code]]

[[thm-descending-diagram-is-unknot|A descending diagram represents the unknot]]

## Facts & Assumptions

**Given:** AC$_\omega$ and a smooth oriented knot $K\subset S^3$.

[A1] The Axiom of Countable Choice, written AC$_\omega$. [[def-countable-choice]]

[F1] Under AC$_\omega$, every smooth oriented knot has an admissible finite rational planar code for a regular diagram. [[lem-regular-projection-admits-finite-planar-code]]

[F2] The finite traversal algorithm outputs a list of crossing changes and changes at most one crossing per finite crossing record. [[alg-descending-diagram-unknotting-sequence]]

[F3] If every first encounter at a crossing is an overpass, the represented diagram is ambient isotopic to the standard unknot. [[thm-descending-diagram-is-unknot]]

## Proof

**Given:** The knot $K$ and AC$_\omega$.


1.1 Apply [F1] to choose an admissible finite code for a regular diagram of a representative of $K$, and choose a basepoint in the interior of one edge away from every crossing and geometric bend. There is such a point: a one-component code has at least one nondegenerate polygonal edge segment, including in the crossing-free case, and only finitely many crossings and bends are forbidden. Choose an interior point of such a segment outside that finite set. [A1, F1, given, choose]

2.1 Apply [F2] to that finite code. The algorithm terminates after the finite crossing records are scanned and produces a finite crossing-change list; after those changes, each crossing is first encountered as an overpass. [F2, step 1.1, algebra]

3.1 By [F3], the code after the listed changes represents the standard unknot. Thus the chosen code and its finite crossing-change list witness the asserted existence for $K$. [F1, F3, step 1.1, step 2.1] ∎

## Sources

[[lem-regular-projection-admits-finite-planar-code]]

[[alg-descending-diagram-unknotting-sequence]]

[[thm-descending-diagram-is-unknot]]
