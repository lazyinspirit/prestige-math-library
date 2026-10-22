---
id: thm-alexander-polynomial-one-implies-topologically-slice
kind: theorem
title: "Alexander polynomial one implies topological sliceness"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-alexander-one-knot-produces-a-good-group-disk-obstruction
  - thm-freedman-disk-embedding-for-good-groups
  - thm-infinite-cyclic-group-is-good-for-disk-embedding
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
dependency_level: 15
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Michael H. Freedman and Frank Quinn, Topology of 4-Manifolds"
      url: "https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf"
      locator: "§§11.6–11.7, printed pp.205–211"
    - title: "Stavros Garoufalidis and Peter Teichner, On Knots with Trivial Alexander Polynomial"
      url: "https://people.math.gatech.edu/~stavros/publications/teichner1.pdf"
      locator: "Appendix A, complete disk-embedding application, printed pp.12–13"
---

## Statement

Assume full AC. If a smooth oriented knot $K\subset S^3$ has Alexander polynomial $\Delta_K(t)\doteq1$, where $\doteq$ denotes equality up to multiplication by a unit $\pm t^k$ of $\mathbb Z[t^{\pm1}]$, then there is a locally flat proper embedding $D^2\hookrightarrow B^4$ whose boundary is $K$. Here **topologically slice** means bounding such a locally flat proper disk; the conclusion asserts no smooth slice disk.

## Statement references

[[lem-alexander-one-knot-produces-a-good-group-disk-obstruction|The Alexander-one immersed disks and algebraic dual spheres]]

[[thm-freedman-disk-embedding-for-good-groups|Freedman's disk-embedding theorem for good groups]]

[[thm-infinite-cyclic-group-is-good-for-disk-embedding|Goodness of the cyclic group arising in the construction]]

[[def-locally-flat-proper-surface-and-concordance-collars|Locally flat proper surfaces and boundary collars]]

Stavros Garoufalidis and Peter Teichner, “On Knots with Trivial Alexander Polynomial,” Appendix A, https://people.math.gatech.edu/~stavros/publications/teichner1.pdf

Michael H. Freedman and Frank Quinn, *Topology of 4-Manifolds*, §§11.6–11.7, https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf

## Facts & Assumptions

**Given:** Full AC and an oriented knot $K$ with $\Delta_K(t)\doteq1$.

[A1] [[def-axiom-of-choice]]: Full AC is used by the present Alexander-polynomial/seifert-matrix dependency branch.

[F1] [[def-locally-flat-proper-surface-and-concordance-collars]]: A proper locally flat disk has boundary exactly its preimage of the ambient boundary and has the prescribed boundary collar.

## Proof

1.1 The intended route is to construct a good-group disk-embedding problem with boundary circles and framings corresponding to basis curves on a pushed-in Seifert surface, then replace its immersed disks by locally flat disks. The required construction and replacement theorems are not established in this draft. [given, A1]

1.2 If those supplier results are supplied, the remaining geometric step is to compress the pushed-in Seifert surface along the disks and verify that the result is a single proper locally flat disk with boundary $K$. This local surgery argument is also not completed here. [F1, step 1.1]

## Unresolved proof obligation

Complete the cyclic-good-group proof, the general disk-embedding proof, the Alexander-one complement/dual-sphere construction, and the embedded surface-surgery argument. The exact unresolved suppliers are [[lem-alexander-one-knot-produces-a-good-group-disk-obstruction]], [[thm-freedman-disk-embedding-for-good-groups]], and [[thm-infinite-cyclic-group-is-good-for-disk-embedding]]. Do not infer smooth sliceness from this locally flat conclusion.
