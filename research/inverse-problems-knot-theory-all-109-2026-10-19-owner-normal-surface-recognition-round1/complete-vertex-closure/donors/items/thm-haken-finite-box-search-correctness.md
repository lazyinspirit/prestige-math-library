---
id: thm-haken-finite-box-search-correctness
kind: theorem
title: "Correctness of the Haken finite-box disk search"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - alg-haken-jaco-tollefson-unknot-recognition
  - lem-normal-coordinate-matching-equations-and-finite-bounds
  - lem-fundamental-normal-surfaces-are-connected
  - thm-haken-normal-essential-disk-existence
  - lem-normal-disk-candidate-check-characterization
  - lem-no-closed-nonorientable-pl-surface-in-s-three
  - lem-good-linear-size-exterior-triangulation-from-diagram
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)"
      url: "https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf"
      locator: "§§5–8, theorem statements, finite normal-coordinate bounds, triangulation and search complexity."
    - title: "Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture notes (2009)"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf"
      locator: "§§14.1–14.4, complete six-page note; independent normal-surface search treatment."
---

## Statement

For a valid one-component knot code, the Haken finite-box search accepts if and only if the triangulated exterior contains a properly embedded disk with non-null-homotopic boundary. On acceptance it returns a normal-coordinate vector for such a disk; after exhaustive rejection, no such disk exists.

## Statement references

[[alg-haken-jaco-tollefson-unknot-recognition]] — Haken finite-box search and its acceptance tests.

[[lem-normal-coordinate-matching-equations-and-finite-bounds]] — matching characterization and fundamental-vector bound.

[[thm-haken-normal-essential-disk-existence]] — existence of a fundamental normal essential disk, with its no-projective-plane hypothesis.

[[lem-normal-disk-candidate-check-characterization]] — soundness and the exact normal-disk tests.

[[lem-no-closed-nonorientable-pl-surface-in-s-three]] — the knot exterior contains no embedded projective plane.

[[lem-good-linear-size-exterior-triangulation-from-diagram]] — triangulated knot exterior used by the search.

## Facts & Assumptions

**Given:** A valid one-component knot code, its good triangulated exterior $E$, and the marked original meridian.

[F1] [[alg-haken-jaco-tollefson-unknot-recognition]]: the Haken branch enumerates every admissible fundamental vector in the coordinate box and accepts exactly when the boundary, Euler-characteristic and meridian tests pass.

[F2] [[lem-normal-coordinate-matching-equations-and-finite-bounds]]: every fundamental normal vector for a triangulation with $t$ tetrahedra has each coordinate at most $t2^{7t+2}$.

[F3] [[thm-haken-normal-essential-disk-existence]]: if a compact triangulated PL $3$-manifold with nonempty boundary has no embedded projective plane and contains an essential disk, it contains a fundamental normal essential disk.

[F4] [[lem-normal-disk-candidate-check-characterization]]: an admissible normal vector passes the nonempty-boundary, Euler-characteristic-one and odd-meridian tests exactly when its surface is a disk with essential boundary; fundamentalness supplies connectedness.

[F5] [[lem-no-closed-nonorientable-pl-surface-in-s-three]]: no closed nonorientable PL surface embeds in $S^3$.

## Proof

1.1 If the Haken search accepts, [F1] says the vector is admissible and passes the candidate tests. By [F4], its normal surface is a properly embedded disk with non-null-homotopic boundary. [given, F1, F4, construct]

1.2 Conversely, suppose $E$ contains such a disk. Any embedded projective plane in $E$ would also be a closed nonorientable PL surface in $S^3$, contradicting [F5]. The exterior has nonempty boundary by its construction. Thus the hypotheses of [F3] hold, and [F3] gives a fundamental normal disk $S$ with essential boundary. Let $v(S)$ be its normal-coordinate vector. By [F2], each coordinate is at most $t2^{7t+2}$, so the Haken box enumerates $v(S)$. Its boundary is nonempty, it is connected by fundamentalness, its Euler characteristic is one, and its boundary has odd meridian intersection by [F4]. Therefore the algorithm accepts no later than when it reaches $v(S)$. [given, F2, F3, F4, F5, construct]

2.1 Steps 1.1 and 1.2 prove that acceptance is equivalent to existence of an essential disk. If the finite search exhausts without acceptance, step 1.2 shows no such disk can exist. [F1, F3, step 1.1, step 1.2, algebra] ∎
