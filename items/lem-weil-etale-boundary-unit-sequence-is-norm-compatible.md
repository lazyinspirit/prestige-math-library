---
id: lem-weil-etale-boundary-unit-sequence-is-norm-compatible
kind: lemma
title: Weil–étale boundary-unit sequence under finite étale norms
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-weil-etale-class-group-and-cohomology-in-function-field-tower
- lem-weil-etale-h1-boundary-unit-spectral-sequence
- lem-function-field-class-group-injects-into-weil-etale-cohomology
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Stephen Lichtenbaum, The Weil–étale topology on schemes over finite fields
    url: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/E70A59FA79C01CDBCD940699A72A6F59/S0010437X04001150a.pdf/the-weil-etale-topology-on-schemes-over-finite-fields.pdf
    locator: §2, the Weil–étale spectral sequence; the finite étale norm compatibility is proved below.
dependency_level: 4
proof_strategy: direct
axiom_use: AC and DC are inherited from the named Weil-site and divisor inputs.
---

## Statement

Assume AC and DC. Let k=F_q. For i=1,2 let C_i/k be a smooth proper geometrically integral curve, let T_i be a finite nonempty set of closed points, and put U_i=C_i\T_i. Let `f:C_2→C_1` be finite and assume `T_2=f^(-1)(T_1)` as sets and `f|_(U_2):U_2→U_1` is finite étale. Write φ for arithmetic Frobenius and P_(T_i) for the boundary-supported principal-divisor lattice on C̄_i. The short exact sequences

`0→P_(T_i)/(φ−1)P_(T_i)→H¹_W(U_i,G_m)→Pic(Ū_i)^φ→0`

commute with divisor pushforward on the left, Weil–étale corestriction in the middle, and line-bundle norm on the right. The construction uses the same full constant field k for both curves. It does not assert descent for a tower with changing constants or prove a derived projection formula.

## Facts & Assumptions

**Given:** AC, DC, k, the curves, boundaries and finite map f as in the Statement.

[F1] The finite-level boundary-unit short exact sequence is induced by the Weil–étale spectral sequence and the geometric divisor map. [[lem-weil-etale-h1-boundary-unit-spectral-sequence]]

[F2] Finite étale norm on units and rational functions is compatible with divisor pushforward and Weil–étale corestriction; the same local transfer is natural on divisor classes. [[lem-function-field-class-group-injects-into-weil-etale-cohomology]]

[F3] The supplied Weil–étale convention includes the arithmetic-Frobenius spectral sequence. [[def-weil-etale-class-group-and-cohomology-in-function-field-tower]]

[F4] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** naturality of the low-degree spectral sequence and local norms.

1.1 Over U₁ the map f is finite étale. Étale locally it is a disjoint union of finite copies, so multiplication of their units defines `N_f:f_*G_m→G_m`; it commutes with restriction and with φ. On a line bundle its induced H¹ map is the usual norm: locally multiply the transition units, equivalently use `det(f_*L)⊗det(f_*O)^(-1)`. The map is compatible with the Weil–étale corestriction of [F2]. [F2, F3, F4, given, construct, algebra]

2.1 Finite étale pushforward is exact: on a common étale splitting cover it is a finite product of sheaves, hence it preserves exact sequences; its stalks therefore have no higher direct images. Thus the Weil–étale cohomology of U₂ is that of `f_*G_m` on U₁. Apply the natural spectral sequence of [F3] to the morphism N_f. On geometric H⁰ it is the norm of units, and on geometric H¹ it is the line-bundle norm of step 1.1. Naturality of the low-degree exact sequence gives a commutative diagram with the middle and right maps of the Statement. [F1, F2, F3, F4, step 1.1, given, construct, algebra]

3.1 On rational functions, `div(N_f h)=f_*div(h)`; the local formula counts residue-field degrees and includes ramification over T₁. Since f^(-1)(T₁)=T₂, this carries P_(T₂) to P_(T₁). The map commutes with φ, so it descends to boundary-divisor coinvariants. Under the unit-to-divisor identification of [F1] it is exactly the left map in step 2.1, proving the diagram. No changing-constant or derived tower descent is asserted. [F1, F2, F4, step 2.1, given, algebra] ∎

## Source and authoring record

This proves finite étale norm compatibility when both curves have the same full finite constant field. It does not construct a Weil–étale duality complex, changing-constant transfer, a square presentation, or infinite-tower descent.
