---
id: thm-jaco-tollefson-vertex-search-correctness
kind: theorem
title: "Correctness and finite bounds of the Jaco–Tollefson vertex search"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - alg-haken-jaco-tollefson-unknot-recognition
  - lem-normal-coordinate-matching-equations-and-finite-bounds
  - thm-jaco-tollefson-normal-essential-disk-vertex-existence
  - lem-normal-disk-candidate-check-characterization
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

For a valid one-component knot code, the JT primitive extreme-ray search accepts if and only if the triangulated exterior contains a properly embedded disk with non-null-homotopic boundary. It examines at most $2^{7t}$ support subsets for a $t$-tetrahedron exterior, each candidate coordinate has $O(t)$ bits, and its sequential Turing space is $O(t^2\log(t+2))$ bits.

## Statement references

[[alg-haken-jaco-tollefson-unknot-recognition]] — JT support enumeration and its candidate tests.

[[lem-normal-coordinate-matching-equations-and-finite-bounds]] — primitive-ray coordinate bound.

[[thm-jaco-tollefson-normal-essential-disk-vertex-existence]] — existence of an essential disk on a primitive vertex ray.

[[lem-normal-disk-candidate-check-characterization]] — soundness of the disk tests.

## Facts & Assumptions

**Given:** A valid one-component knot code, its $t$-tetrahedron good exterior, and its marked original meridian.

[F1] [[alg-haken-jaco-tollefson-unknot-recognition]]: the JT branch enumerates zero-coordinate supports, computes each one-dimensional nonnegative kernel ray, and accepts exactly when an admissible primitive generator passes the boundary, Euler-characteristic and meridian tests.

[F2] [[lem-normal-coordinate-matching-equations-and-finite-bounds]]: each primitive integer generator on an extreme ray has coordinates at most $2^{7t-1}$.

[F3] [[thm-jaco-tollefson-normal-essential-disk-vertex-existence]]: if a triangulated compact PL $3$-manifold with nonempty boundary contains an essential disk, it contains such a disk represented by a primitive normal vector on an extreme ray. The supplier body states this result but its proof is not supplied.

[F4] [[lem-normal-disk-candidate-check-characterization]]: an admissible normal vector passing nonempty-boundary, Euler-characteristic-one and odd-meridian tests represents a properly embedded disk with essential boundary; a fundamental vector is connected.

## Proof

1.1 If the JT search accepts, its vector is an admissible normal vector passing the candidate tests by [F1]. The vector is primitive on an extreme ray, hence fundamental: a sum of two nonzero cone vectors on an extreme ray would have each summand on that ray, and the primitive integer generator cannot split into two positive integer multiples. By [F4], the associated surface is a properly embedded disk with essential boundary. [given, F1, F4, algebra]

2.1 If $E$ contains an essential disk, [F3] supplies such a disk whose vector lies on a primitive extreme ray. By [F2], each coordinate is at most $2^{7t-1}$ and therefore has at most $7t$ bits. Let $Z$ be exactly the set of zero coordinates of this vector. The support loop in [F1] examines this subset, the combined matrix has nullity one, and its kernel generator is the stated vector. The vector is admissible and its normal disk passes the remaining tests by [F4], so the JT search accepts. This direction depends on the unproved JT existence supplier [F3]. [given, F1, F2, F3, F4, construct]

2.2 There are $2^{7t}$ coordinate supports, so [F1] examines at most that many candidates and stores no list of prior rays because each ray is found at its unique exact zero support. Each candidate has $7t$ coordinates of $O(t)$ bits by [F2]. The matching and active-coordinate matrices have $O(t)$ rows and columns with entries in $\{0,1,-1\}$; all minors have $O(t\log(t+2))$ bits by Hadamard's bound. Exact rank and kernel calculations therefore use a polynomial number of bit operations and $O(t^2\log(t+2))$ bits for one matrix, one candidate, and its support counter. The finite boundary tests use linear forms in the compressed vector and fit within the same space. [F1, F2, step 2.1, algebra]

3.1 Steps 1.1 and 2.1 prove acceptance exactly when an essential disk exists. Step 2.2 proves the stated candidate, bit-length and space bounds. [step 1.1, step 2.1, step 2.2, algebra] ∎
