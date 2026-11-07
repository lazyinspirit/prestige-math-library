---
id: thm-full-level-four-modular-curve-over-integers-with-two-inverted
kind: theorem
title: The full-level-four open modular curve over Z[1/2]
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-smooth-genus-one-curve-with-section-has-canonical-group-law
- lem-full-level-structures-form-a-finite-etale-cover
- lem-full-level-structure-rigidifies-elliptic-families
- lem-relative-pointed-elliptic-weierstrass-presentation
- lem-order-four-point-normalizes-a-weierstrass-equation
- cor-genus-degree-smooth-plane-curve
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Elliptic Curves
    url: https://www.jmilne.org/math/Books/ectext6.pdf
    locator: Chapter II, generalized Weierstrass equations; the level-four model is constructed below.
dependency_level: 2
proof_strategy: direct
axiom_use: AC is assumed and used by the named geometry suppliers.
---

## Statement

Assume AC. Put `B=Spec Z[1/2,b,b^(-1),(1+16b)^(-1)]`. There is a finite étale surjection `Y(4)→B` of degree eight, and an elliptic curve with full level-four structure over Y(4), such that for every locally Noetherian `Z[1/2]`-scheme S, pullback induces a natural equivalence between `Hom(S,Y(4))` and the groupoid of elliptic curves over S equipped with a full level-four structure. The groupoid is discrete. The scheme Y(4) is smooth of relative dimension one over `Z[1/2]`, and this construction includes good open models in every odd residue characteristic. It does not assert a proper compactification, a model in characteristic two, or representability at levels other than four.

## Facts & Assumptions

**Given:** AC and the base B of the Statement.

[F1] A smooth proper genus-one curve with section over a locally Noetherian base has the canonical relative divisor-class group law. [[lem-smooth-genus-one-curve-with-section-has-canonical-group-law]]

[F2] Full level-four structures on a given elliptic family form a finite étale frame scheme; a level-four automorphism over a locally Noetherian base is trivial. [[lem-full-level-structures-form-a-finite-etale-cover]] [[lem-full-level-structure-rigidifies-elliptic-families]]

[F3] A pointed elliptic family whose marked point is fibrewise distinct from its inverse and from the identity admits a tangent-normalized Weierstrass equation, unique up to scaling. [[lem-relative-pointed-elliptic-weierstrass-presentation]]

[F4] In such a tangent equation, a section P with `4P=O` and fibrewise exact order four normalizes uniquely to the stated level-four equation, with b and `1+16b` invertible. [[lem-order-four-point-normalizes-a-weierstrass-equation]]

[F5] A smooth plane cubic has genus one. [[cor-genus-degree-smooth-plane-curve]]

[F6] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** an explicit normalized cubic and its finite étale frame scheme.

1.1 Over B consider the projective cubic `E_b: y²z+xyz−byz²=x³−bx²z`, with O=[0:1:0] and P=(0,0). On z=1, completing the square with `Y=2y+x−b` gives `Y²=4x³+(1−4b)x²−2bx+b²`. Direct expansion gives discriminant `16b⁴(1+16b)` for the polynomial on the right. It is a unit on B, so every affine geometric fibre is smooth. The point at infinity is smooth since the z-partial derivative there is 1. The cubic is proper, and its hypersurface is flat over B because its equation remains a nonzero cubic on every fibre. Its geometric fibres are connected smooth plane cubics and have genus one by [F5]. By the fibrewise smoothness criterion it is smooth over B, and [F1] equips it with the canonical elliptic group law. [F1, F5, F6, given, construct, algebra]

2.1 The divisor of the affine function y is `2P+Q−3O`, where Q=(b,0): the equation y=0 becomes `x²(x−b)=0`, and b is a unit, so P and Q are disjoint. The divisor of x−b is `2Q−2O`, since at x=b the equation becomes y²=0. These identities hold relatively by the displayed local equations and their pole orders at O. The divisor-class group law [F1] therefore gives `2P=−Q` and `2Q=O`. Q is disjoint from O, so P has exact order four on every geometric fibre and `4P=O` as an equality of sections. [F1, F6, step 1.1, given, algebra]

3.1 By [F2], the full-level frame scheme `Fr_4(E_b)` is finite étale over B. Require its first basis vector to be P. This is the equalizer of two sections of the finite étale E_b[4], hence a clopen subscheme Y(4), still finite étale. Geometrically E_b[4] is `(Z/4)²`, and P has exact order four by step 2.1, so P is primitive and extends to a basis. For each fixed primitive vector there are eight choices of the second basis vector; hence Y(4) has degree eight and is surjective over B. The pulled-back curve and its tautological frame give the required object over Y(4). [F2, F6, step 2.1, given, construct, algebra]

4.1 Let S be a locally Noetherian `Z[1/2]`-scheme and let E/S have a full level-four frame. Its first basis vector P has `4P=O` as a scheme section and is fibrewise distinct from O and −P. By [F3], Zariski locally on S there are tangent-normalized Weierstrass coordinates at P; [F4] gives a unique normalized equation E_b with b and `1+16b` units. The uniqueness clauses of [F3] and [F4] make b and the pointed isomorphisms agree on overlaps, including over nonreduced S. Thus they glue to a unique morphism S→B and a pointed isomorphism `E≅E_b×_B S`. Transporting the given full frame produces a unique lift S→Y(4). Conversely, pullback of the tautological curve and frame from Y(4) gives the starting object. The constructions are inverse and natural; [F2] makes all automorphisms of a framed family trivial. [F2, F3, F4, F6, step 3.1, given, construct, algebra]

5.1 B is an open subscheme of the affine line over `Z[1/2]`, hence smooth of relative dimension one. Finite étale Y(4)→B preserves smoothness and relative dimension. Since every odd prime is invertible relative to the excluded prime 2 and the fibres of B are nonempty, the displayed family supplies the claimed open model at each odd residue characteristic. The construction has made no claim about a compactification or characteristic two. [F6, step 3.1, step 4.1, given, algebra] ∎

## Source and authoring record

This proof supplies only the fine open level-four model on locally Noetherian bases over Z[1/2]. The level-three model needed at characteristic two, proper compactification, and the original all-level modular-curve supplier remain separate.
