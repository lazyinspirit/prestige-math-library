---
id: lem-full-level-structure-rigidifies-geometric-elliptic-curves
kind: lemma
title: Full level structure rigidifies a geometric elliptic curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- lem-arith-dual-and-poincare-bundle-finite-field-descent
- thm-full-riemann-roch-divisor
- lem-degree-pullback-divisor-finite-morphism-curves
- lem-arith-dual-isogeny-kernel-and-abelian-biduality
- thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism
- thm-proper-quasi-finite-is-finite
- lem-arith-field-prime-to-characteristic-torsion-and-tate-module
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Elliptic Curves
    url: https://www.jmilne.org/math/Books/ectext6.pdf
    locator: Chapter III, endomorphism degrees and torsion; the short argument is reconstructed below.
dependency_level: 0
proof_strategy: direct
axiom_use: AC supplies the DC used by the named suppliers.
---

## Statement

Assume the Axiom of Choice. Let k be an algebraically closed field, E/k an elliptic curve, and N≥3 an integer invertible in k. An automorphism of E as a pointed group scheme which fixes all points of E[N](k) is the identity. Thus every full level-N structure has trivial automorphism group on each geometric fibre. No conclusion about automorphisms over nonreduced bases or representability is asserted.

## Facts & Assumptions

**Given:** AC, k, E, N and the automorphism u as in the Statement.

[F1] The dual abelian variety represents the rigidified algebraically trivial Picard functor; dual homomorphisms are additive and induced by pullback. [[lem-arith-dual-and-poincare-bundle-finite-field-descent]] [[lem-arith-dual-isogeny-kernel-and-abelian-biduality]]

[F2] Riemann–Roch on smooth proper curves computes the spaces of sections of degree-one line bundles on E. [[thm-full-riemann-roch-divisor]]

[F3] Nonconstant maps of smooth proper integral curves are finite flat, and pullback multiplies divisor degree by the degree of the map. A pointed map between the present group varieties is a homomorphism. [[lem-degree-pullback-divisor-finite-morphism-curves]] [[thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism]]

[F4] Proper quasi-finite morphisms are finite. [[thm-proper-quasi-finite-is-finite]]

[F5] The prime-power torsion of E over k is free of rank two; AC supplies DC for these inputs. [[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]] [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** positivity of the elliptic endomorphism degree.

1.1 Put `L=O_E(O)`. By [F1] and [F2], the map `x↦[O_E(x−O)]` identifies E with its dual: every degree-one line bundle has a unique effective divisor by Riemann–Roch, and the tangent map is the connecting map in `0→O_E→O_E(O)→O_E(O)|_O→0`, hence an isomorphism. The pointed map is a homomorphism by [F3]; it is proper and quasi-finite and hence finite by [F4], so the degree-one étale morphism is an isomorphism. For any line bundle M of degree d, translating a divisor representing M shows `φ_M=[d]φ_L`, where `φ_M(x)=t_x^*M⊗M^(-1)`. [F1, F2, F3, F4, F5, given, construct, algebra]

2.1 Let `a†=φ_L^(-1) a^∨ φ_L` for an endomorphism a. Naturality of pullback and [F3] give `a†a=[deg(a)]`, taking the degree of the zero homomorphism to be zero. Additivity of duality then gives `a+a†=[t]`, where `t=deg(1+a)−1−deg(a)` is an integer. For every integers r,s, `deg(r−sa)=r²−trs+s²deg(a)`; it is nonnegative. Taking a=u, whose degree is one, and applying this inequality to rational r/s shows `t²≤4`. Hence `deg(1−u)=2−t≤4`. [F1, F3, F5, step 1.1, given, algebra]

3.1 If u is not the identity then `1−u` is a nonzero endomorphism, hence a finite map by [F3]. Its fibre over O contains all N² distinct geometric N-torsion points, by [F5] and the Chinese remainder decomposition. A finite map of degree d has at most d distinct points in a geometric fibre, so `deg(1−u)≥N²≥9`, contrary to step 2.1. Therefore u is the identity. A full level structure identifies E[N](k) with `(Z/NZ)^2`, so any automorphism preserving it fixes that torsion and is trivial. [F3, F5, step 2.1, given, algebra] ∎

## Source and authoring record

The proof concerns geometric fibres. Extending rigidity to arbitrary nonreduced bases and constructing the moduli quotient remain separate obligations.
