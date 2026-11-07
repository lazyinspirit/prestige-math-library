---
id: lem-full-level-structures-form-a-finite-etale-cover
kind: lemma
title: Full level structures form a finite étale cover
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-abelian-scheme
- lem-multiplication-by-n-on-abelian-scheme
- lem-arith-field-prime-to-characteristic-torsion-and-tate-module
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Finite étale morphisms
    url: https://stacks.math.columbia.edu/tag/0BL6
    locator: Section 58.5, finite étale covers; the frame construction is proved below.
dependency_level: 0
proof_strategy: direct
axiom_use: AC is assumed; it implies the DC used by the cited abelian-scheme and field-torsion results.
---

## Statement

Assume the Axiom of Choice. Let S be a locally Noetherian scheme, E→S an elliptic curve, and N≥2 invertible on S. The functor on S-schemes T sending T to the isomorphisms of T-group schemes `(Z/NZ)^2_T ≅ E[N]_T` is represented by a finite étale surjection `Fr_N(E)→S`. It commutes with arbitrary base change of S. Its geometric fibres are the bases of `(Z/NZ)^2`, so it is a torsor for the constant group `GL_2(Z/NZ)` and has degree `|GL_2(Z/NZ)|`. The pulled-back elliptic curve has its tautological full level-N structure. This result begins with a given elliptic curve and does not assert representability of the moduli problem or a compactification.

## Facts & Assumptions

**Given:** AC, a locally Noetherian scheme S, an elliptic curve E/S, and N≥2 invertible on S.

[F1] Multiplication by N on an abelian scheme over a locally Noetherian base has finite étale kernel E[N] of rank N² when N is invertible. [[def-abelian-scheme]] [[lem-multiplication-by-n-on-abelian-scheme]]

[F2] The prime-power torsion of an elliptic curve over a separably closed field of characteristic different from the prime is a free rank-two module over the corresponding prime-power ring. [[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]]

[F3] AC implies DC, as needed for [F1] and [F2]. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** finite étale torsion and a clopen basis locus.

1.1 By [F1] the group scheme G=E[N] is finite étale of rank N². Form `P=G×_S G`, finite étale over S, with universal pair `(P_1,P_2)`. For each ordered pair of distinct elements a,b of `(Z/NZ)^2`, the equality of the two sections `a_1P_1+a_2P_2` and `b_1P_1+b_2P_2` of G over P is the inverse image of the diagonal of G/S. That diagonal is both open, since G/S is étale, and closed, since it is separated. Delete the finite union of those equality loci. The result F is open and closed in P, hence finite étale over S. [F1, F3, given, construct, algebra]

2.1 The universal pair on F defines a homomorphism from the constant group `(Z/NZ)^2_F` to `G_F`. On every geometric fibre the images of its N² elements are distinct by construction; since G has degree N², they exhaust that fibre. Thus this homomorphism between finite étale F-schemes of equal degree is an isomorphism. Conversely, every full level structure is determined by the images of the two standard generators, which avoid every deleted equality locus. These constructions are inverse and functorial in T, so F represents the stated functor. The construction uses only products, diagonals, finite unions and complements of clopen subschemes; it commutes with arbitrary base change. [F1, step 1.1, given, construct, algebra]

3.1 At a geometric point, [F2] gives the rank-two structure for each prime-power divisor of N. The Chinese remainder decomposition combines these into `G ≅ (Z/NZ)^2`. Consequently F has a nonempty geometric fibre consisting exactly of its ordered bases, acted on freely and transitively by `GL_2(Z/NZ)`. A finite étale morphism with nonempty geometric fibres is surjective; the fibrewise free transitive action gives the torsor isomorphism `F×GL_2(Z/NZ) ≅ F×_S F`. The fibre cardinality is the stated degree. Pulling back E to F gives the universal pair and hence the tautological level structure from step 2.1. [F2, F3, step 2.1, given, algebra] ∎

## Source and authoring record

This local construction supplies level frames for an already given elliptic curve. It does not construct a fine modular curve, its compactification, or a good-reduction moduli model.
