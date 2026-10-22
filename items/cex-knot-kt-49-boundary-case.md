---
id: cex-knot-kt-49-boundary-case
kind: counterexample
title: A boundary-parallel disk fails the meridian test
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-normal-surface-coordinate-box
  - lem-normal-disk-candidate-check-characterization
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational
        Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)
      url: https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf
      locator: §§4–7; the unknot exterior, normal-surface disk tests and triangulation
        convention.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §§14.1–14.4, complete six-page note on normal disks and knot exteriors.
---

## Statement refuted

Every connected admissible normal surface in a finite triangulated knot exterior with nonempty boundary and Euler characteristic one passes the odd-meridian-intersection test for an essential normal disk.

## Statement references

[[def-normal-surface-coordinate-box]] — normal vertex-link triangles and normal-coordinate conventions.

[[lem-normal-disk-candidate-check-characterization]] — the essential-boundary test in the normal-disk filter.

[Hass–Lagarias–Pippenger, Lemma 4.2 and §5](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — disk recognition and the meridian-intersection condition.

[Erickson, “Normal Surfaces and Knots,” §§14.2–14.4](https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf) — boundary-parallel disks and normal-surface filtering.

## Facts & Assumptions

**Given:** A finite simplicial triangulation of a compact knot exterior with torus boundary and a marked meridian curve in its boundary triangulation.

Let $E$ be any finite simplicially triangulated knot exterior with boundary torus $T$ and marked meridian $\mu$. For a boundary vertex $v$, its normal link is a properly embedded boundary-parallel disk: its boundary is the link of $v$ in $T$, a contractible simple closed curve. The link is connected, has nonempty boundary and Euler characteristic one, but its boundary has even mod-two intersection with $\mu$, so the normal-surface filter rejects this candidate. Rejecting this one boundary-parallel disk does not determine whether the knot is nontrivial.

[F1] [[def-normal-surface-coordinate-box]]: a normal surface meets each tetrahedron in a union of triangle and quadrilateral disks, and its face arcs match. In a simplicial triangulation of a PL $3$-manifold, the link of a boundary vertex is a triangulated disk.

[F2] [[lem-normal-disk-candidate-check-characterization]]: an admissible vector is an essential disk candidate exactly when it is connected, has nonempty boundary, Euler characteristic one, and odd mod-two meridian intersection.

## Counterexample

1.1 The link $Lk_E(v)$ of a boundary vertex in a triangulated $3$-manifold is a closed disk: its local link is a $2$-ball. In each tetrahedron containing $v$ the link meets that tetrahedron in the small triangle parallel to the opposite face; it misses tetrahedra not containing $v$. Across each shared face these triangles have matching normal arcs, so [F1] makes the link a normal surface. Its boundary is $Lk_T(v)$, a simple closed curve in the small boundary-star disk of $v$, hence contractible in $T$. The local half-ball star shows the disk is boundary-parallel. [given, F1, construct]

2.1 The link disk is connected, has nonempty boundary, and has Euler characteristic one. Its boundary is null-homotopic, so its projection to the product-circle factor has degree zero. After a transverse PL perturbation, the parity of intersections with a fibre meridian equals the parity of preimages of a regular point under that projection; a lift with zero net degree crosses the level an even number of times. Hence the intersection parity is zero. [step 1.1, algebra, construct]

3.1 The disk therefore passes the first three tests in [F2] but fails the odd-intersection test, so the filter rejects this candidate. This conclusion concerns this boundary-parallel disk only; it does not rule out any other normal essential disk in $E$ and therefore does not classify the knot. [F2, step 2.1, algebra] ∎

