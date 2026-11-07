---
id: lem-elliptic-geometric-fibre-h1-finite-system
kind: lemma
title: Finite étale H1 of a geometric elliptic fibre
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-arith-dual-and-poincare-bundle-finite-field-descent
- lem-arith-field-prime-to-characteristic-torsion-and-tate-module
- thm-global-functions-proper-integral-variety
- thm-full-riemann-roch-divisor
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, The Picard scheme of a curve
    url: https://stacks.math.columbia.edu/tag/0B9R
    locator: Section 44.6 introduction read for Picard background; the finite-level Kummer calculation is reconstructed locally.
dependency_level: 0
proof_strategy: direct
axiom_use: AC is explicit and supplies DC for the dual-Picard and Tate-module suppliers.
---

## Statement

Assume the Axiom of Choice. Let k be algebraically closed, let E/k be an elliptic curve, and let ℓ be a prime different from the characteristic of k. For every n≥1 the étale cohomology group `H¹(E,Z/ℓ^n)` is free of rank two over Z/ℓ^n, and the natural maps from level n+1 to level n identify the lower group with reduction modulo ℓ^n. The cohomology and reduction maps are functorial for isomorphisms of pointed elliptic curves, and base change along an algebraically closed field extension is an isomorphism.

## Facts & Assumptions

**Given:** AC, the algebraically closed field, elliptic curve and prime of the Statement.

[F1] The algebraically trivial rigidified Picard functor of an abelian variety is represented by its dual, compatibly with field extension. [[lem-arith-dual-and-poincare-bundle-finite-field-descent]]

[F2] For ℓ invertible, the ℓ-adic Tate module of an elliptic curve is free rank two, and its finite reductions are its torsion groups. [[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]]

[F3] Global functions on a proper integral scheme over an algebraically closed field are the ground field. [[thm-global-functions-proper-integral-variety]]

[F4] Riemann–Roch holds for divisors on a smooth proper curve. [[thm-full-riemann-roch-divisor]]

[F5] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** finite-level Kummer and the dual Tate module.

1.1 Put m=ℓ^n. The étale Kummer sequence `1→μ_m→G_m --(m)→ G_m→1` is exact: adjoining a root of a unit via `T^m−u` is finite étale since m and T are units. By [F3], the global units are k×, and their mth-power map is surjective. The long exact sequence therefore identifies `H¹(E,μ_m)` with `Pic(E)[m]`; the usual isomorphism `H¹(G_m)=Pic` is the direct gluing of line bundles from G_m torsors. [F1, F3, F5, given, construct, algebra]

2.1 The degree of an m-torsion line bundle is zero. By Riemann–Roch [F4], every degree-zero line bundle on the pointed genus-one curve is uniquely `O(P−O)` for a point P: tensor with O(O), whose degree-one class has one effective representative. Varying P in the connected curve makes that class algebraically trivial. Thus [F1] identifies `Pic(E)[m]` with `E^∨[m](k)`. The construction commutes with isomorphisms, algebraically closed field extension, and the multiplication-by-ℓ transition maps. [F1, F4, F5, step 1.1, given, construct, algebra]

3.1 The dual E^∨ is an elliptic curve. By [F2], its finite ℓ-power torsion groups are free rank two with the standard reduction maps. Over algebraically closed k choose one compatible system of primitive ℓ-power roots; this identifies μ_(ℓ^n) with the constant Z/ℓ^n system. Step 2.1 then gives the claimed finite groups and reduction maps. The rank and transition assertion is independent of that root choice, and the Picard/Kummer identification itself is natural before choosing roots. [F1, F2, F5, step 2.1, given, construct, algebra] ∎

## Source and authoring record

This local AC-scoped finite-fibre prerequisite does not assert relative lissity or construct a rational-adic direct image. No independent review is asserted.
