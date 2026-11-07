---
id: lem-smooth-genus-one-curve-with-section-has-canonical-group-law
kind: lemma
title: A smooth genus-one curve with section has a canonical group law
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- lem-proper-flat-fp-cohomology-perfect-complex
- thm-full-riemann-roch-divisor
- thm-proper-quasi-finite-is-finite
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Elliptic Curves
    url: https://www.jmilne.org/math/Books/ectext6.pdf
    locator: Chapter II, the degree-one divisor construction of an elliptic group law; the relative construction is given below.
dependency_level: 0
proof_strategy: direct
axiom_use: AC supplies DC for the proper coherent cohomology input.
---

## Statement

Assume AC. Let S be locally Noetherian and let C→S be smooth and proper with geometrically connected genus-one curve fibres, equipped with a section O. There is a unique commutative S-group-scheme structure on C with identity O whose operation on every locally Noetherian S-scheme T is the relative divisor-class law: `P+Q=R` if and only if `O(P+Q−O)≅O(R)⊗π^*M` for a line bundle M on T. Its construction commutes with arbitrary base change of S. This applies to a verified smooth projective Weierstrass cubic with its point at infinity; it does not itself prove such a cubic smooth or construct a modular curve.

## Facts & Assumptions

**Given:** AC, locally Noetherian S, the smooth proper genus-one curve C/S and section O.

[F1] Proper flat finitely presented coherent cohomology is computed by a bounded finite-projective complex compatible with arbitrary algebra base change. [[lem-proper-flat-fp-cohomology-perfect-complex]]

[F2] Riemann–Roch gives one section up to scalar and no H¹ for every degree-one line bundle on a smooth proper genus-one curve. [[thm-full-riemann-roch-divisor]]

[F3] A proper quasi-finite morphism is finite. [[thm-proper-quasi-finite-is-finite]]

[F4] AC supplies DC for [F1]. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** relative degree-one divisors and tensor products of line bundles.

1.1 Let T be a locally Noetherian S-scheme and L an invertible sheaf on C_T of degree one on each geometric fibre. Apply [F1] to the proper flat curve C_T/T and L. By [F2], each fibre has h⁰=1 and H¹=0. Locally choose a finite-free cohomology complex and cancel differential entries that are units. The remaining minimal complex has zero differential modulo the local maximal ideal, so the fibre dimensions force it to have exactly one rank-one term in degree zero and no other terms. Hence `π_*L` is invertible, higher cohomology vanishes and its formation commutes with arbitrary base change. [F1, F2, F4, given, construct, algebra]

2.1 The evaluation `π^*π_*L→L` is a map of line bundles. On every geometric fibre its unique nonzero section has an effective divisor of degree one by [F2]; this divisor is a single reduced point. Thus its zero scheme D is a relative effective Cartier divisor, smooth of relative dimension zero over T. It is proper and quasi-finite, hence finite by [F3], and finite étale of degree one, hence canonically isomorphic to T. It defines a section R:T→C_T, and the evaluation gives `L≅O(R)⊗π^*π_*L`. This construction and its isomorphism commute with arbitrary base change. Conversely, for any section R, the canonical section of O(R) gives R back; therefore R is unique for the class of L modulo pullback of a line bundle on T. [F1, F2, F3, F4, step 1.1, given, construct, algebra]

3.1 For sections P,Q of C_T, take `L=O(P+Q−O)`, which has degree one on every fibre. Step 2.1 gives a unique section R; call it P+Q. It is functorial in locally Noetherian T, commutative, has O as identity, and has inverse given by the degree-one bundle `O(2O−P)`. Tensor-product associativity and uniqueness of the degree-one representative prove associativity. Applying this functorial rule to T=C×_S C gives an S-morphism `C×_S C→C`; applying the inverse construction to T=C gives an inverse morphism. The group identities hold on C³, C² and C, which are locally Noetherian, and hence are identities of S-morphisms. Thus C is a commutative S-group scheme. [F1, F2, F4, step 2.1, given, construct, algebra]

4.1 The finite-projective complex and divisor construction in steps 1.1–2.1 commute with arbitrary algebra base change, so the defining group morphisms commute with arbitrary S-base change. Their geometric-fibre operation is the stated divisor-class law. Any other morphism with this operation is equal on every geometric fibre; to obtain equality over nonreduced bases, require the same relative divisor-class identity: step 2.1 makes its value on the universal pair unique. The canonical construction is therefore unique with that relative identity. [F1, F2, F4, step 2.1, step 3.1, given, algebra] ∎

## Source and authoring record

The uniqueness asserted and proved is for the relative divisor-class operation. A claim that geometric fibres alone determine a morphism over a nonreduced base is not used. Smoothness of a particular cubic, moduli representability and compactification remain separate.
