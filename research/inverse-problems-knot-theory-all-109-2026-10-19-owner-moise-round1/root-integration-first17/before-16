---
id: lem-knot-decomposing-sphere-realizes-connected-sum
kind: lemma
title: A decomposing sphere realizes a connected sum of knots
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Burde and Zieschang, Knots, 2nd revised and extended edition
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf
      locator: Chapter 7, §§7.14–7.15, printed pp.96–97
    - title: Allen Hatcher, Notes on Basic 3-Manifold Topology
      url: https://pi.math.cornell.edu/~hatcher/3M/3Mdoublepage.pdf
      locator: §1.1, Theorem 1.1, printed pp.1–3
---

## Statement

Assume the Axiom of Countable Choice. Let $K$ be a smooth oriented knot in $S^3$, and let $S\subset S^3$ be a smoothly embedded sphere transverse to $K$ in exactly two points. Cutting along $S$ gives two properly embedded arcs; cap each arc by an orientation-compatible simple arc on $S$, pushed slightly into the corresponding boundary collar to obtain oriented knots $K_1$ and $K_2$. Then the oriented isotopy class of $K$ is the connected sum $K_1\#K_2$.

## Statement references

[[def-knot-connected-sum-and-prime-knot|The connected-sum construction and orientation convention]]

## Facts & Assumptions

**Given:** AC$_\omega$, a smooth oriented knot $K$, and a smooth sphere $S$ transverse to $K$ in two points.

[F1] Smooth Schoenflies supplies an ambient isotopy taking $S$ to the equator; its endpoint identifies both ball sides simultaneously, with the same equatorial boundary parametrization. ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]])

[F2] The fixed standard ball-arc connected-sum construction is independent of its local choices under AC$_\omega$. ([[def-knot-connected-sum-and-prime-knot]], [[lem-knot-connected-sum-well-defined]], [[def-countable-choice]])

## Proof

**Given:** The stated knot, sphere, and AC$_\omega$.

1.1 Apply [F1] and carry the knot through the same ambient isotopy. We now have the two standard hemispherical balls, each containing one proper arc of the knot. Cap each arc by a simple boundary arc, pushed slightly into a boundary collar; orient the cap to close the oriented original arc. Boundary caps give the same capped knot class: two simple arcs in a two-sphere joining the same two points are isotopic keeping the endpoints, with no other marked points to avoid. One explicit reduction puts the arcs transverse, removes an outermost bigon successively, and then slides the resulting disjoint arcs across the disk they cobound; all moves take place in surface disks and extend to their ball collars. [given, F1, construct]

2.1 A small collar neighbourhood of each cap arc is a ball meeting the capped knot in one trivial arc. Delete these two ball-arc neighbourhoods. The remaining arcs are precisely the original two knot pieces, with endpoint collars on the common equator. Gluing by the fixed orientation-matching two-ball convention recovers $K$; the simultaneous boundary parametrization in [F1] makes the two sides agree. Straighten the cap collar and its positive local frame before gluing, which is a change of the local data allowed by [F2]. Hence this is the connected sum $K_1\#K_2$ in the stated convention. Transporting back through the original ambient isotopy proves the assertion. No extension of an arbitrary prescribed sphere diffeomorphism is used. [F1, F2, step 1.1, construct] ∎

## Proof references

[[lem-knot-connected-sum-well-defined]]

[[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]]
