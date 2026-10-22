---
id: lem-normal-vertex-disk-certificate-verification
kind: lemma
title: "Polynomial verification of a primitive normal vertex-disk certificate"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-normal-surface-coordinate-box
  - lem-normal-coordinate-matching-equations-and-finite-bounds
  - lem-fundamental-normal-surfaces-are-connected
  - lem-normal-disk-candidate-check-characterization
  - lem-small-integer-matrix-linear-algebra-in-quadratic-logarithmic-space
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
      locator: "§§4–8; complete relevant passages on knot exteriors, normal coordinates, finite bounds, triangulations and unknot searches."
    - title: "Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture notes (2009)"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf"
      locator: "§§14.1–14.4, complete six-page notes on normal disks, matching, normal surfaces and knots."
---

## Statement

Let $T$ be a good triangulation of a knot exterior with $t$ tetrahedra and a marked meridian path in its triangulated boundary torus. A certificate consists of a nonnegative integer vector $v$ with $7t$ binary-encoded coordinates, a set of active matching and zero-coordinate constraints, a nonzero $(7t-1)$-minor witnessing their rank, and the marked boundary data. A deterministic verifier can check the certificate in time polynomial in the certificate bit length. Acceptance verifies that $v$ is a primitive admissible extreme-ray vector of the Haken cone and that its associated normal surface is a properly embedded disk with non-null-homotopic boundary. The verifier uses arithmetic on the compressed coordinates and does not expand the normal surface into its potentially exponentially many normal disks.

## Statement references

[[def-normal-surface-coordinate-box]] — admissible vectors, primitive vertex vectors and normal surfaces.

[[lem-normal-coordinate-matching-equations-and-finite-bounds]] — coordinate bounds and matching equations.

[[lem-fundamental-normal-surfaces-are-connected]] — connectedness from fundamentalness.

[[lem-normal-disk-candidate-check-characterization]] — finite disk and essential-boundary tests.

[Hass–Lagarias–Pippenger, §8](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — the active-constraint certificate and polynomial-bit verification strategy.

## Facts & Assumptions

**Given:** A finite triangulation $T$, its integer matching matrix, a marked meridian path of finite length in the boundary triangulation, and the binary certificate described in the statement.

[F1] [[def-normal-surface-coordinate-box]]: the Haken cone is the nonnegative solution set of the matching equations; admissibility adds the quadrilateral condition.

[F2] [[lem-normal-coordinate-matching-equations-and-finite-bounds]]: matching rows have four coefficients $\pm1$, and primitive extreme-ray coordinates have $O(t)$ bits.

[F3] [[lem-fundamental-normal-surfaces-are-connected]]: every nonempty fundamental normal surface is connected.

[F4] [[lem-normal-disk-candidate-check-characterization]]: connectedness, nonempty boundary, Euler characteristic $1$, and odd meridian intersection characterize a connected essential disk.

[F5] [[lem-small-integer-matrix-linear-algebra-in-quadratic-logarithmic-space]]: specified minors of small-entry integer matrices have deterministic polynomial-bit-time exact determinants via streamed prime-field elimination and bounded Chinese remaindering.

## Proof

1.1 The verifier first checks the vector length, nonnegativity, matching equations, and the at-most-one-quadrilateral condition by scanning $7t$ coordinates and the finite face-matching rows. It computes the gcd of the coordinates by Euclid's algorithm and checks that it is $1$. These operations use polynomially many integer operations on integers whose bit lengths are bounded by the certificate length. [given, F1, F2, construct]

1.2 For Euler characteristic, let $F(v)=\sum_i v_i$ count normal disks and let $A(v)=\sum_i q_i v_i$ count their normal-arc sides, where $q_i$ is $3$ for a triangle type and $4$ for a quadrilateral type. Let $B(v)$ count arcs on boundary faces; this is a fixed linear form in the coordinates. The number of surface edges is $(A(v)+B(v))/2$, since each interior-face arc side is paired and each boundary arc is unpaired. For each edge $e$ of the triangulation, choose one incident tetrahedron and let $N_e(v)$ be its local linear count of normal disk intersections with $e$; matching makes this count independent of the incident tetrahedron. Then $V(v)=\sum_e N_e(v)$ counts surface vertices and $\chi(v)=V(v)-(A(v)+B(v))/2+F(v)$. The boundary is nonempty exactly when $B(v)>0$. Put the marked meridian in transverse position to the finite list of boundary arc types; each type has a fixed intersection count, so parity of total intersections is another linear form modulo $2$. These local coefficients are computed once from constant-size face and tetrahedron templates; arithmetic on their compressed coordinate sums is polynomial in $t$ and the certificate bit length. [given, F1, F2, construct]

2.1 The certificate lists active zero-coordinate rows and matching rows. The verifier checks every listed zero coordinate is actually zero, chooses the stated $(7t-1)$ square minor, and computes its determinant by the explicit prime-field/CRT algorithm [F5]. The minor has dimension $7t-1$ and entries in $\{-1,0,1\}$, so that algorithm takes polynomial time in $t$, hence in the certificate length. Its determinant is reconstructed as an integer, not accepted from a claimed numerical value in the witness. A nonzero determinant certifies that the listed rows have rank at least $7t-1$; because the nonzero vector $v$ lies in their common kernel, the rank is at most $7t-1$, hence exactly that value. The face of the nonnegative matching cone containing $v$ therefore has dimension one, so $v$ lies on an extreme ray. The gcd check makes it the primitive integer generator of that ray. [given, F1, F5, step 1.1, algebra]

3.1 A primitive integer vector on an extreme ray is fundamental among admissible integer vectors. If $v=x+y$ with nonzero admissible integer vectors, then $x,y$ lie in the cone and their sum lies on an extreme ray. By extremality each summand lies on that same ray; since $v$ is the primitive integer generator, each nonzero integral summand is a positive integer multiple of $v$, which cannot sum to $v$. Thus $v$ is fundamental and [F3] makes its normal surface connected without expanding it. [F1, F3, step 2.1, contradiction]

4.1 If the boundary is nonempty, the Euler characteristic is $1$, and the meridian intersection is odd, [F4] identifies the surface as a properly embedded disk with non-null-homotopic boundary. Conversely, acceptance has checked admissibility, a primitive extreme ray, connectedness from step 3.1, and these three disk tests, so it certifies exactly such a disk. [F4, step 3.1, step 1.2, algebra]

5.1 The certificate has $7t$ coordinates with their binary expansions, at most $O(t)$ constraint indices, and one determinant minor of dimension $7t-1$. Determinants have the polynomial bit-time implementation [F5]. Ordinary binary gcd descent has at most a constant times the input bit length many divisions (two remainder steps at least halve the positive remainder); each division is polynomial in the input bit length. Thus determinant and gcd computations, coordinate checks, and local linear-form evaluations all take polynomial time in the total encoded length. At no point is a disk copy expanded; arithmetic acts directly on its coordinate multiplicity. [given, F5, step 1.1, step 2.1, step 1.2, algebra] ∎
