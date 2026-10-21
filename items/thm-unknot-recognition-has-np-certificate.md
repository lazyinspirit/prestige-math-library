---
id: thm-unknot-recognition-has-np-certificate
kind: theorem
title: Unknot recognition has a polynomial-bit normal-surface certificate
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 16
deps:
  - alg-haken-jaco-tollefson-unknot-recognition
  - lem-normal-vertex-disk-certificate-verification
  - thm-jaco-tollefson-normal-essential-disk-vertex-existence
  - lem-meridian-disk-criterion-for-unknot-exterior
  - lem-good-linear-size-exterior-triangulation-from-diagram
  - lem-normal-coordinate-matching-equations-and-finite-bounds
  - thm-smooth-knot-has-compatible-pl-exterior-model
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational
        Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)
      url: https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf
      locator: §§4–8 and §10, complete disk criterion, normal-surface searches,
        triangulation bounds and certificate analysis.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §§14.1–14.4, complete six-page note on normal surfaces and knot
        recognition.
---

## Statement

Assume countable choice. For a valid finite $n$-crossing one-component knot code $D$, let $T_D$ be the fixed deterministic good exterior triangulation with $t\le C(n+1)$ tetrahedra and the marked original meridian path, recomputed from $D$ by the stated finite construction. The smooth knot represented by $D$ is the unknot if and only if it has a certificate consisting of a nonnegative $7t$-coordinate normal vector $v$, active matching and zero-coordinate constraints, and a nonzero $(7t-1)$-minor witnessing their rank, all relative to $T_D$. A deterministic verifier reconstructs $T_D$ and its meridian path from $D$ and checks the certificate in time polynomial in its bit length, without expanding the represented normal surface.

## Statement references

[[alg-haken-jaco-tollefson-unknot-recognition]] — the fixed finite exterior and JT primitive-ray interface.

[[lem-normal-vertex-disk-certificate-verification]] — polynomial-time sound verification of a primitive normal vertex-disk vector.

[[thm-jaco-tollefson-normal-essential-disk-vertex-existence]] — completeness of primitive vertex-disk certificates.

[[lem-meridian-disk-criterion-for-unknot-exterior]] — the proved conversion between unknotting and compatible PL exterior disks.

[[lem-good-linear-size-exterior-triangulation-from-diagram]] — deterministic $O(n)$ exterior construction.

## Facts & Assumptions

**Given:** Countable choice, a valid finite one-component knot code $D$, and the certificate format in the statement.

[A1] $\mathrm{AC}_\omega$ is inherited through the smooth isotopy-extension and code-to-exterior interfaces.

[F1] [[thm-smooth-knot-has-compatible-pl-exterior-model]]: $D$ has a smooth representative in its diagram type and a deterministic good exterior triangulation of size $t\le C(n+1)$ with a marked original meridian.

[F2] [[lem-normal-vertex-disk-certificate-verification]]: an accepted certificate gives a properly embedded disk with non-null-homotopic boundary, and verification is polynomial in its encoded length.

[F3] [[thm-jaco-tollefson-normal-essential-disk-vertex-existence]]: if an essential disk exists, one is represented by a primitive normal vector on an extreme ray.

[F4] [[lem-meridian-disk-criterion-for-unknot-exterior]]: unknotting is equivalent to an essential disk in the compatible PL exterior, by finite relative rounding and the smooth disk-boundary isotopy.

[F5] [[lem-normal-coordinate-matching-equations-and-finite-bounds]]: each primitive vertex coordinate is at most $2^{7t-1}$.

## Proof

1.1 The given countable-choice hypothesis [A1] is the choice assumption used by [F1]'s exterior model. Reconstruct $T_D$ and the marked path using its fixed code order and local templates. The verifier does not accept a triangulation supplied by the certificate, so the certificate cannot substitute an unrelated manifold. [given, A1, F1, construct]

2.1 If the verifier accepts, [F2] gives an essential disk in the exterior of the represented smooth knot. By [F4], the knot is the unknot. The relative rounding and disk-boundary isotopy in [F4] apply to exactly this compatible exterior model. [F2, F4, step 1.1, construct]

2.2 Conversely, suppose the knot is the unknot. By [F4], its exterior contains an essential disk. By [F3], there is such a disk represented by a primitive vertex vector $v$. By [F5], each coordinate is at most $2^{7t-1}$ and therefore has $O(t)$ bits; the full vector has $O(t^2)$ bits. The active matching and zero-coordinate rows at this extreme ray have rank $7t-1$, so choose $7t-1$ independent rows and a nonzero square minor. Such a minor exists by the rank definition and has polynomial encoded length. The resulting certificate is accepted by the polynomial verifier [F2]. The primitive vertex-disk theorem [F3] supplies completeness, and the disk criterion [F4] supplies both conversion directions. [F2, F3, F4, F5, step 1.1, construct, algebra]

3.1 Since $t=O(n+1)$ by [F1], the vector, row indices and determinant witness all have polynomial bit length in $n$. The verifier reconstructs $T_D$ in polynomial time and checks matching equations, gcd, rank, boundary, Euler characteristic and meridian parity through compressed arithmetic as in [F2]; it never lists the exponentially many normal disks. [F1, F2, step 2.2, algebra] ∎
