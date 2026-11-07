---
id: thm-full-level-three-modular-curve-over-integers-with-three-inverted
kind: theorem
title: The full-level-three open modular curve over Z[1/3]
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-smooth-genus-one-curve-with-section-has-canonical-group-law
- lem-full-level-structures-form-a-finite-etale-cover
- lem-full-level-structure-rigidifies-geometric-elliptic-curves
- lem-full-level-structure-rigidifies-elliptic-families
- lem-relative-pointed-elliptic-weierstrass-presentation
- lem-order-three-point-normalizes-a-weierstrass-equation
- lem-free-mu3-actions-on-affines-have-finite-etale-quotients
- cor-genus-degree-smooth-plane-curve
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Elliptic Curves
    url: https://www.jmilne.org/math/Books/ectext6.pdf
    locator: Chapter II, generalized Weierstrass equations; the explicit level-three construction is given below.
dependency_level: 2
proof_strategy: direct
axiom_use: AC is assumed and used by the named geometry suppliers.
---

## Statement

Assume AC. There is a smooth relative curve `Y(3)` over `Z[1/3]` with an elliptic curve and full level-three structure, such that for every locally Noetherian `Z[1/3]`-scheme S, pullback induces a natural equivalence between `Hom(S,Y(3))` and the groupoid of elliptic curves over S equipped with a full level-three structure. This groupoid is discrete. The model has nonempty geometric fibres in every residue characteristic different from three, including characteristic two. It does not assert a proper compactification or representability at levels other than three.

## Facts & Assumptions

**Given:** AC and the base `Z[1/3]`.

[F1] A smooth proper genus-one curve with section has the canonical relative divisor-class group law. [[lem-smooth-genus-one-curve-with-section-has-canonical-group-law]]

[F2] Full level-three structures on a given elliptic family form a finite étale frame scheme, and a level-three automorphism is trivial on geometric fibres and on locally Noetherian families. [[lem-full-level-structures-form-a-finite-etale-cover]] [[lem-full-level-structure-rigidifies-geometric-elliptic-curves]] [[lem-full-level-structure-rigidifies-elliptic-families]]

[F3] A pointed family whose marked section is fibrewise distinct from its inverse and identity admits a tangent-normalized Weierstrass model, unique up to scaling. [[lem-relative-pointed-elliptic-weierstrass-presentation]]

[F4] An order-three section in that model admits the normalized equation after finite étale cube-root base change, with exactly μ₃ residual scalings. [[lem-order-three-point-normalizes-a-weierstrass-equation]]

[F5] A free μ₃ action on a finite-type affine scheme over a Noetherian ring with 3 invertible has an affine quotient and is a finite étale μ₃-torsor. [[lem-free-mu3-actions-on-affines-have-finite-etale-quotients]]

[F6] Smooth plane cubics have genus one. [[cor-genus-degree-smooth-plane-curve]]

[F7] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** explicit normalized cubic, finite frames and a free diagonalizable quotient.

1.1 Put `B=Spec Z[1/3,t,(t³−27)^(-1)]` and consider `E_t: y²z+txyz+yz²=x³`, O=[0:1:0] and P=(0,0). Its generalized Weierstrass discriminant is `t³−27`; the Jacobian criterion for the displayed equation, equivalently elimination of its two affine partial derivatives, says its affine geometric fibres are smooth when this element is a unit. At infinity the z-partial derivative is 1. The projective hypersurface is flat because its defining cubic stays nonzero in every fibre, and its smooth plane fibres are connected of genus one by [F6]. Thus E_t/B is smooth proper of relative genus one. By [F1] it has the canonical elliptic group law. The divisor of y is `3P−3O` because y=0 cuts out x³=0, so `3P=O` as a section; P is disjoint from O and has exact order three on every geometric fibre. [F1, F6, F7, given, construct, algebra]

2.1 By [F2], the full-level-three frame scheme is finite étale over B. Let V be the clopen locus where the first basis vector is P. It is finite étale of degree six over B because any nonzero element of `(Z/3)²` extends to a basis in exactly six ways. It is affine since B is affine. The coordinate scaling `t↦u t`, `x↦u²x`, `y↦y` for `u³=1` preserves the equation and P and transports frames, defining a μ₃ action on V. If a geometric point of V has a stabilizer, its coordinate scaling induces an automorphism preserving the full frame. By [F2] that automorphism is identity; its action on the tangent at O is multiplication by a nontrivial cube root when u≠1, a contradiction. Thus the action is free on geometric points. [F2, F7, step 1.1, given, construct, algebra]

3.1 By [F5], the invariant affine Y=V/μ₃ exists and V→Y is a finite étale μ₃-torsor. Write V=Spec B' and Y=Spec A; the proof of [F5] gives a strong `Z/3`-grading `B'=⊕ B'_i` with `B'_0=A`. The homogeneous coordinate algebra `C=B'[X,Y,Z]/(Y²Z+tXYZ+YZ²−X³)` has the ordinary projective grading and a compatible μ₃ character grading, because the scaling of step 2.1 preserves its equation. Let C₀ be its character-zero subalgebra. Strong grading gives `B'⊗_A C₀≅C`, degree by degree: writing `1=∑ b_i c_(−i)` expresses every character component as the corresponding B'_i multiple of C₀. Hence `Proj_A C₀` pulls back to E_t×_B V. The same grading argument descends the identity, the group-law morphisms and the finite level frame: on affine charts and their overlaps a compatible equivariant map is uniquely reconstructed by taking degree-zero parts, and the resulting morphisms satisfy the group identities after faithfully flat pullback to V. Thus Y carries an elliptic curve with a full level-three frame. [F1, F2, F5, F7, step 2.1, given, construct, algebra]

4.1 Let S be a locally Noetherian `Z[1/3]`-scheme with a framed elliptic curve, and let P be its first frame vector. It satisfies `3P=O` as a section and is fibrewise distinct from O and −P. By [F3] there is a tangent Weierstrass presentation Zariski locally; [F4] supplies a finite étale cube-root cover on which it is the equation of step 1.1. Transport the frame to get a map to V. Any two normalized choices differ by a μ₃ scaling by [F3] and [F4], so the corresponding maps agree in Y. Faithfully flat descent of these maps yields a unique map S→Y. Conversely pulling back the descended elliptic curve and frame gives the original family, since this holds after the finite étale normalization cover and framed isomorphisms are unique by [F2]. This gives the natural equivalence and makes the groupoid discrete. [F2, F3, F4, F5, F7, step 3.1, given, construct, algebra]

5.1 V is finite étale over the open affine line B, so it is smooth of relative dimension one over `Z[1/3]`. Since V→Y is finite étale and surjective, smoothness and relative dimension descend to Y. Each characteristic different from three admits a geometric value of t with `t³−27≠0`; V has nonempty finite étale fibres there, so Y does too, including in characteristic two. No proper compactification is asserted. [F5, F7, step 3.1, step 4.1, given, algebra] ∎

## Source and authoring record

This constructs only the fine open level-three model on locally Noetherian bases over Z[1/3]. Proper compactification and the original all-level modular-curve supplier remain separate.
