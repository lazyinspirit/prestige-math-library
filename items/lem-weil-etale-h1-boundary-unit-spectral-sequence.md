---
id: lem-weil-etale-h1-boundary-unit-spectral-sequence
kind: lemma
title: Weil–étale H1 as boundary-unit coinvariants and geometric Picard invariants
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-weil-etale-class-group-and-cohomology-in-function-field-tower
- thm-cartier-weil-divisors-curves-agree
- thm-global-functions-proper-integral-variety
- thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Stephen Lichtenbaum, The Weil–étale topology on schemes over finite fields
    url: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/E70A59FA79C01CDBCD940699A72A6F59/S0010437X04001150a.pdf/the-weil-etale-topology-on-schemes-over-finite-fields.pdf
    locator: §2, Weil–étale spectral sequence; the low-degree and boundary-unit calculations are given below.
dependency_level: 3
proof_strategy: direct
axiom_use: AC and DC are inherited from the stated Weil-site and curve inputs.
---

## Statement

Assume AC and DC. Let k=F_q, let C/k be a smooth proper geometrically integral curve, let T be a finite nonempty set of closed points, and put U=C\T. Let φ be arithmetic Frobenius on `C̄=C×_k k̄`. Let `P_T` be the subgroup of `Div(C̄)` consisting of principal divisors supported on the finite geometric set `T̄`. Then there is a canonical short exact sequence

`0 → P_T/(φ−1)P_T → H¹_W(U,G_m) → Pic(Ū)^φ → 0`.

If T has m closed points over k, the first term is a finitely generated abelian group of rank m−1. This is a finite-level low-degree description. It does not assert a perfect-complex presentation, compatibility with tower corestrictions, Weil–étale duality, or Iwasawa descent.

## Facts & Assumptions

**Given:** AC, DC, finite field k, curve C and finite nonempty boundary T as in the Statement.

[F1] The supplied Weil–étale convention has a spectral sequence from the cohomology of the infinite cyclic arithmetic-Frobenius group acting on the geometric étale cohomology of G_m. [[def-weil-etale-class-group-and-cohomology-in-function-field-tower]]

[F2] Weil and Cartier divisors agree on smooth curves, and principal divisors have degree zero. [[thm-cartier-weil-divisors-curves-agree]]

[F3] Global regular functions on a proper geometrically integral curve over an algebraically closed field are constants. [[thm-global-functions-proper-integral-variety]]

[F4] The degree-zero divisor class group of a smooth proper geometrically integral curve over any finite field is finite. [[thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field]]

[F5] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** cyclic-group cohomology and boundary divisors.

1.1 The infinite cyclic group W=⟨φ⟩ has the free group-ring resolution `0→Z[W] --(φ−1)→ Z[W]→Z→0`. Thus its cohomology on any W-module B is `H⁰(W,B)=B^φ`, `H¹(W,B)=B/(φ−1)B`, and zero in degrees at least two. The low-degree exact sequence of [F1] gives `0→Γ(Ū,O^×)/(φ−1)Γ(Ū,O^×)→H¹_W(U,G_m)→H¹_et(Ū,G_m)^φ→0`. Here `H¹_et(Ū,G_m)=Pic(Ū)`: an étale G_m-torsor is a line bundle with its zero section removed, and conversely its transition units glue a line bundle; the constructions and Frobenius action are inverse by ordinary faithfully flat descent. [F1, F5, given, construct, algebra]

2.1 By [F2] and [F3], a unit on Ū has a principal divisor supported on T̄, and the kernel of this divisor map is `k̄^×`. Conversely, a principal divisor supported on T̄ is represented by a rational function with no zero or pole on Ū and hence by a unit there. Thus `0→k̄^×→Γ(Ū,O^×)→P_T→0` is exact and φ-equivariant. Coinvariants are right exact; the coinvariants of k̄^× vanish because `x↦x^(q−1)` is surjective on the algebraically closed field. Therefore the first term in step 1.1 is canonically `P_T/(φ−1)P_T`, proving the short exact sequence. [F2, F3, F5, step 1.1, given, construct, algebra]

3.1 Assume T nonempty. The geometric boundary is finite, and its divisor group D is a finite free abelian group permuted by φ. Let D⁰ be the kernel of the sum of coefficients. By [F2], `P_T⊂D⁰`. Every D⁰ divisor is defined over some finite extension k'/k. Its degree-zero class on C_(k') is torsion by [F4], so a positive multiple is principal and belongs to P_T. Hence `P_T⊗Q=D⁰⊗Q`, and P_T is a finitely generated free abelian group. Frobenius acts through a finite permutation group on D and P_T. Its rational invariant subspace in D has one basis vector per closed point of T; the degree map on these orbit sums has nonzero image, so `(D⁰⊗Q)^φ` has dimension m−1. For a finite-order linear map, invariant and coinvariant dimensions agree. Thus the finitely generated coinvariant group `P_T/(φ−1)P_T` has rank m−1. [F2, F4, F5, step 2.1, given, construct, algebra] ∎

## Source and authoring record

This proves the stated finite-level low-degree exact sequence. It neither constructs the BDL derived duality complex nor supplies projection-formula descent, square presentations, determinant identities, or tower compatibility.
