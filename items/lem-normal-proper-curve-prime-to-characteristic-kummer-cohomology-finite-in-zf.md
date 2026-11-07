---
id: lem-normal-proper-curve-prime-to-characteristic-kummer-cohomology-finite-in-zf
kind: lemma
title: "Finite Kummer cohomology of a normal proper curve without choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - lem-generic-point-leray-and-kummer-curve-cohomology-in-zf
  - lem-normal-proper-integral-curves-finite-over-p1-in-zf
  - lem-finite-p1-curve-picard-torsion-and-divisibility-in-zf
  - thm-cartier-divisors-mod-principal-to-picard
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - cor-noether-normalisation-module-finiteness
  - def-algebraically-closed-field
  - def-proper-morphism
  - def-separated-morphism-schemes
proof_strategy: direct
axiom_use: "No ambient choice principle is assumed. The cited Picard result transports finite algebraic witnesses from its coded ZFC inner model."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, cohomology of curves"
      url: "https://stacks.math.columbia.edu/tag/03SC"
      locator: "Finiteness is deduced below from the valuation sequence and the separately reconstructed choice-free Picard input."
---

## Statement

Let k be algebraically closed, C a normal integral proper finite-type k-curve, ℓ≠char(k) prime and r≥1. In the choice-free finite-hypercover étale model, every H^q(C,μ_{ℓ^r}) is finite. More precisely H⁰(C,μ_{ℓ^r})=μ_{ℓ^r}(k), H¹(C,μ_{ℓ^r})≅Pic⁰(C)[ℓ^r], H²(C,μ_{ℓ^r})≅Z/ℓ^rZ by degree, and H^q(C,μ_{ℓ^r})=0 for q>2. No ambient choice axiom is assumed. This statement treats constant prime-to-characteristic coefficients only.

## Facts & Assumptions

**Given:** k, C, ℓ and r as stated; write N=ℓ^r.

[F1] The generic-point Leray calculation gives the valuation exact sequence and vanishing in degrees q>2 for μ_N on a normal curve. [[lem-generic-point-leray-and-kummer-curve-cohomology-in-zf]]

[F2] Every specified transcendental t∈k(C) induces a finite C→P¹_k, with finite affine and gluing presentations, without a choice premise. [[lem-normal-proper-integral-curves-finite-over-p1-in-zf]]

[F3] For a normal integral curve with such a finite P¹ presentation, Pic⁰(C)[N] is finite and multiplication by N on Pic⁰(C) is surjective without an ambient choice premise. [[lem-finite-p1-curve-picard-torsion-and-divisibility-in-zf]]

[F4] On an integral scheme, Cartier divisors modulo principal divisors give Pic. [[thm-cartier-divisors-mod-principal-to-picard]]

[F5] Normal curve local rings at closed points are DVRs, and a nonzero finite-type k-algebra has a finite Noether normalization. [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]] [[cor-noether-normalisation-module-finiteness]]

[F6] k is algebraically closed, and properness gives universal closedness and separatedness. [[def-algebraically-closed-field]] [[def-proper-morphism]] [[def-separated-morphism-schemes]]

## Proof

1.1 Every nonempty finite-type k-scheme has a k-point: on one nonzero affine algebra A, use [F5] to make A finite over k[z₁,…,z_d], quotient by (z₁,…,z_d), and use finite-module Nakayama to see the quotient is a nonzero finite-dimensional k-algebra. An ideal of maximal vector-space dimension gives a finite field quotient, equal to k by [F6]. In particular C has a closed k-point P. [F5, F6, given, algebra]

1.2 By [F5], each closed local ring of C is a DVR. Cartier divisors therefore identify with finite sums of closed points: each local equation has finitely many zeros and poles, and conversely finitely many prescribed orders are represented by local uniformizer powers, gluing with unit ratios. By [F4], their quotient by rational-function divisors is Pic(C). Every closed point is k-rational. For a nonconstant h∈k(C)×, algebraic closedness makes h transcendental over k, so [F2] gives the finite map h:C→P¹. Over the DVRs at 0 and ∞, its finite algebra is torsion-free and hence finite free of the same generic rank. The two fibres therefore have the same total length, equal to the sum of the zero orders and of the pole orders, respectively. Thus every principal divisor has degree zero. The degree map Pic(C)→Z is well defined and is split by the class of P. [F2, F4, F5, F6, step 1.1, given, algebra]

1.3 A rational function h with zero divisor is a nonzero constant. Its local DVR valuations are all zero, so h and h⁻¹ are regular on all of C and give a map C→G_m. Since C is proper and P¹ is separated, the graph is closed and the projection C×P¹→P¹ is proper; hence the image in P¹ is closed. It is irreducible and avoids 0 and ∞, so it is one closed k-point, proving h∈k×. Algebraic closedness makes k× N-divisible. [F5, F6, given, algebra]

2.1 The kernel of the valuation map k(C)×/k(C)×N→⊕_x Z/N consists of classes of h with div(h)=ND. Sending h to the divisor class [D] gives a map to Pic(C)[N]. It is surjective by the definition of torsion. If [D]=0, write D=div(g); step 1.3 gives h/g^N∈k×, an N-th power. Thus the map is an isomorphism. A torsion divisor class has degree zero by step 1.2, so it is Pic⁰(C)[N], finite by [F3]. The valuation exact sequence [F1] therefore identifies H¹(C,μ_N) with this finite group. [F1, F3, step 1.2, step 1.3, given, algebra]

2.2 The cokernel of the valuation map in [F1] is Pic(C)/N. By step 1.2, degree gives a split exact sequence 0→Pic⁰(C)→Pic(C)→Z→0. Multiplication by N is surjective on Pic⁰(C) by [F3], so Pic(C)/N≅Z/N. Thus H²(C,μ_N)≅Z/N. H⁰(C,μ_N)=μ_N(k) is finite because C is integral and k contains all N-th roots, and [F1] gives zero in higher degrees. [F1, F3, step 1.2, algebra] ∎

## Scope

The result depends on the exact choice-free finite-code Picard supplier [F3]; it does not use the ambient AC/DC Picard theorem directly and does not yet establish finite cohomology for arbitrary constructible sheaves.
