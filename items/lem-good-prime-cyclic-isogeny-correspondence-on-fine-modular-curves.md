---
id: lem-good-prime-cyclic-isogeny-correspondence-on-fine-modular-curves
kind: lemma
title: Good-prime cyclic isogeny correspondence on a fine modular curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-prime-order-subgroups-of-an-elliptic-curve-form-a-finite-etale-scheme
- lem-quotient-elliptic-curve-by-prime-to-characteristic-cyclic-subgroup
- lem-full-level-refinement-is-finite-etale
- lem-multiplication-by-n-on-abelian-scheme
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Modular Functions and Modular Forms
    url: https://www.jmilne.org/math/CourseNotes/MF.pdf
    locator: Chapter 5, cyclic-isogeny correspondences; the relative open correspondence is constructed below.
dependency_level: 3
proof_strategy: direct
axiom_use: AC is assumed by the named geometry inputs.
---

## Statement

Assume AC. Let N≥3 and q be a prime coprime to N. Let B be a locally Noetherian `Z[1/Nq]`-scheme and Y_N/B a fine full-level-N moduli curve with universal framed elliptic curve E. There is a canonical open cyclic q-isogeny correspondence `Y_N ← H_q → Y_N`, where H_q represents rank-q subgroup schemes of E[q], and both arrows are finite étale of degree q+1. For any M divisible by N and coprime to q, the correspondence is compatible with the finite étale level-refinement Y_M→Y_N. This statement does not construct compactified correspondences or a Hecke action on cohomology.

## Facts & Assumptions

**Given:** AC, N, q, B and Y_N with its universal frame as in the Statement.

[F1] Rank-q subgroups of the q-torsion of an elliptic family form a finite étale scheme of degree q+1 with universal subgroup. [[lem-prime-order-subgroups-of-an-elliptic-curve-form-a-finite-etale-scheme]]

[F2] Quotient by a cyclic finite étale rank-q subgroup gives an elliptic curve and a finite étale q-isogeny, inducing an isomorphism on N-torsion when q and N are coprime. [[lem-quotient-elliptic-curve-by-prime-to-characteristic-cyclic-subgroup]]

[F3] Full-level refinement is finite étale and the forgetful maps compose. [[lem-full-level-refinement-is-finite-etale]]

[F4] Multiplication by q on an elliptic family is finite étale of degree q² with kernel E[q]. [[lem-multiplication-by-n-on-abelian-scheme]]

[F5] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** subgroup parameter, quotient isogeny and dual reversal.

1.1 By [F1], the rank-q subgroup parameter H_q→Y_N is finite étale of degree q+1 and carries its universal subgroup C⊂E[q]. By [F2], the quotient φ:E→E'=E/C is a finite étale q-isogeny and carries the N-frame isomorphically to a full N-frame on E'. The fine moduli property therefore gives a second map H_q→Y_N. Both constructions commute with base change. [F1, F2, F5, given, construct, algebra]

2.1 Since C⊂ker[q], the quotient property in [F2] factors `[q]:E→E` uniquely as `ψ∘φ` for a homomorphism ψ:E'→E. By [F4] multiplication by q is finite étale of degree q²; since φ is finite étale of degree q, ψ is finite étale of degree q. Its kernel C' is the finite étale rank-q subgroup `E[q]/C` inside E'[q]. Conversely quotienting E' by C' recovers E. The target frame α'=φ∘α on E' determines the original frame by `α=[q^(-1) mod N]·ψ∘α'`, so taking the dual kernel C' gives a functorial inverse between H_q over the second projection and the rank-q subgroup parameter over Y_N. By [F1], the second projection is therefore finite étale of degree q+1. [F1, F2, F4, F5, step 1.1, given, construct, algebra]

3.1 Let N|M with gcd(M,q)=1. By [F3], Y_M→Y_N pulls the universal elliptic curve back with its refined frame. The subgroup parameter and quotient constructions in [F1] and [F2] commute with base change, so the first projection is the base change of the level-N one. Multiplication `M/N` on torsion commutes with the quotient homomorphism φ, so the second projections commute with level forgetting as well. This gives the asserted compatibility of open correspondences without claiming a compactification or cohomological action. [F1, F2, F3, F5, step 1.1, step 2.1, given, algebra] ∎

## Source and authoring record

This constructs geometric cyclic-isogeny correspondences at q invertible and prime to the level. Extensions to cusps, trace maps and Hecke actions on cohomology remain separate.
