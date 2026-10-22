---
id: lem-knot-decomposing-sphere-realizes-connected-sum
kind: lemma
title: "A decomposing sphere realizes a connected sum of knots"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Burde and Zieschang, Knots, 2nd revised and extended edition"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf"
      locator: "Chapter 7, §§7.14–7.15, printed pp.96–97"
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3Mdoublepage.pdf"
      locator: "§1.1, Theorem 1.1, printed pp.1–3"
---

## Statement

Let $K$ be a smooth oriented knot in $S^3$, and let $S\subset S^3$ be a smoothly embedded sphere transverse to $K$ in exactly two points. Cutting along $S$ gives two properly embedded arcs; cap each arc by an orientation-compatible simple arc on the corresponding side of $S$ to obtain oriented knots $K_1$ and $K_2$. Then the oriented isotopy class of $K$ is the connected sum $K_1\#K_2$.

## Statement references

[[def-knot-connected-sum-and-prime-knot|The connected-sum construction and orientation convention]]

## Facts & Assumptions

**Given:** A smooth oriented knot $K$ and a smooth sphere $S$ meeting it transversely in two points.

[F1] A connected-sum datum deletes trivial local arcs from two knots and glues their standard ball boundaries with the fixed orientation-matching map. ([[def-knot-connected-sum-and-prime-knot]])

[A1] To identify the two sides cut off by an arbitrary smooth sphere in $S^3$ with standard three-balls, one needs the smooth Schoenflies theorem in dimension three. The expected supplier `thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three` is not present in the current library or run manifest; no proof excerpt is available to cite.

## Proof

**Given:** The knot, the transverse sphere, and the connected-sum convention.

1.1 The intersection $S\cap K$ has two points, so $K\setminus S$ consists of two open arcs whose closures have endpoints at those points. The orientations on $K$ induce compatible orientations on these arcs. [given, construct]

2.1 To identify each capped arc as a knot in a standard $S^3$ and to identify the cut-and-reglued ambient manifold with the standard $S^3$, one must know that the embedded sphere bounds standard smooth balls. The required smooth Schoenflies supplier listed in [A1] is absent, so this identification and the theorem conclusion are not proved here. [given, F1, A1, step 1.1]

## Owner escalation

Supply and inspect a complete smooth Schoenflies proof for an embedded $S^2\subset S^3$, with the ball-side and boundary-identification conventions used above. This is the exact unresolved step; the statement is retained at full strength.

## Proof references

[[def-knot-connected-sum-and-prime-knot]]

[[lem-knot-connected-sum-well-defined]]

[[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]]
