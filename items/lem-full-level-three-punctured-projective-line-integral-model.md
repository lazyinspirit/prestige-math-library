---
id: lem-full-level-three-punctured-projective-line-integral-model
kind: lemma
title: Full level three as a punctured projective line over Z[1/3]
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-smooth-genus-one-curve-with-section-has-canonical-group-law
- lem-relative-pointed-elliptic-weierstrass-presentation
- lem-full-level-structure-rigidifies-elliptic-families
- lem-proper-flat-fp-cohomology-perfect-complex
- thm-full-riemann-roch-divisor
- cor-genus-degree-smooth-plane-curve
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Modular Functions and Modular Forms
    url: https://www.jmilne.org/math/CourseNotes/MF.pdf
    locator: Chapter 5, modular curves; the projective-frame construction is given below.
dependency_level: 2
proof_strategy: direct
axiom_use: AC is assumed by the geometric inputs.
---

## Statement

Assume AC. Set `R=Z[1/3,a]/(a²−a+1)` and `b=1−a`. Let `X=P¹_R` with homogeneous parameters `[λ:μ]`, and remove the four disjoint sections `λ=0`, `μ=0`, `μ=λ`, and `μ=bλ`. The resulting open scheme Y carries a universal elliptic curve with full level-three structure and represents the full-level-three moduli functor on locally Noetherian `Z[1/3]`-schemes. Thus X is a smooth proper integral compactification of this fine open model over `Z[1/3]`, with boundary the four displayed disjoint sections over R. The elliptic curve is asserted only over Y; no extension over the boundary is claimed.

## Facts & Assumptions

**Given:** AC and R, a, b, X and Y as in the Statement.

[F1] A smooth proper genus-one curve with section has the canonical relative divisor-class group law. [[lem-smooth-genus-one-curve-with-section-has-canonical-group-law]]

[F2] The proper coherent cohomology complex and fibrewise Riemann–Roch give locally free, base-change-compatible spaces of sections of `O(nO)` on an elliptic family; full level-three automorphisms are trivial. [[lem-proper-flat-fp-cohomology-perfect-complex]] [[thm-full-riemann-roch-divisor]] [[lem-full-level-structure-rigidifies-elliptic-families]]

[F3] The relative Weierstrass construction embeds a pointed elliptic family by `|3O|` as a smooth plane cubic, compatibly with base change. [[lem-relative-pointed-elliptic-weierstrass-presentation]]

[F4] A smooth plane cubic has genus one. [[cor-genus-degree-smooth-plane-curve]]

[F5] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** the projective frame of four torsion sections and its cubic pencil.

1.1 Let E/S be a framed elliptic curve over a locally Noetherian `Z[1/3]`-scheme, with first frame vector P and second Q. By [F2] and [F3], `|3O|` gives a relative plane cubic. On every geometric fibre the four sections O, P, Q, P+Q have no three collinear: three points on a line sum to O by [F1], and the corresponding sums of these four distinct vectors in `(Z/3)²` are nonzero. Therefore they form a projective frame, and their fibrewise nonzero determinants are units on S. The frame trivializes the projective plane uniquely and sends them to `[1:0:0]`, `[0:1:0]`, `[0:0:1]`, `[1:1:1]`, respectively. [F1, F2, F3, F5, given, construct, algebra]

2.1 Write `2P=[1:a:0]` and `2Q=[1:0:b]`; these normalizations are valid because the indicated coordinates are units by the same noncollinearity. The group-law collinearity relation from [F1] gives the remaining sections `P+2Q=[1:a:1]`, `2P+Q=[1:1:b]`, and `2P+2Q=[0:1:1]`. The collinear triples `(2P,2Q,P+Q)` and `(2P,2P+Q,2P+2Q)` give `ab=a+b` and `a+b=1`. Thus `ab=1` and `a²−a+1=0` as identities on S, including nilpotents. In particular a and b are units, and the frame canonically makes S an R-scheme. [F1, F2, F5, step 1.1, given, construct, algebra]

3.1 Put `U=y(x−z)(a x−y+z)` and `V=z(x−y)(b x+y−z)`. The nine sections from step 2.1 are their transverse complete intersection. Every plane cubic through them has a unique expression `λU+μV`: solving the ten homogeneous cubic coefficients using the nine section equations leaves exactly the two displayed generators; the calculation uses only the units a, b and a−b where needed. Consequently the cubic of E determines a unique parameter `[λ:μ]∈P¹_R(S)`, and this construction is compatible with base change. [F1, F2, F5, step 2.1, given, construct, algebra]

4.1 The pencil has four triangle members. Besides U and V themselves, direct multiplication gives `bU+b²V=(y−z)(b x−z)(a x−y)` and `bU+bV=x(y−a z)(x−b y−a z)`. The parameters are exactly `μ/λ=0,∞,b,1`; their sections are disjoint because a, b and 3 are units. Each triangle has three transverse nodes, none at a base section, and the other pencil generator is a unit at each node. The resultant of the three quadratic partial derivatives is a homogeneous polynomial of degree twelve in λ,μ; because 3 is a unit, Euler's identity makes its vanishing equivalent to singularity of the cubic. At each node choose affine coordinates in which the triangle equation is `xy` times a unit and the other pencil generator is a unit. The Jacobian matrix of its two first derivatives has unit determinant, even in characteristic two; formal implicit elimination solves those derivative equations uniquely, and substitution leaves a local singularity equation with a simple zero in the pencil parameter. The three disjoint nodes therefore give three simple factors in the resultant. These four distinct parameters account for degree twelve, so every other pencil member is smooth, in every residue characteristic different from three, including characteristic two. [F4, F5, step 3.1, given, algebra]

5.1 For a smooth pencil member the nine base sections are disjoint. Direct substitution of the tangent equations into `λU+μV` at O, P and Q shows intersection multiplicity three; for instance at O the tangent is `λ a y+μ b z=0`, and its quadratic term vanishes because `a+b=ab=1` and `a²−a+1=0`. Thus O, P and Q are flexes. By [F1], choosing O as identity makes P and Q 3-torsion. They are independent because O, P and Q are not collinear, so their generated subgroup has nine points and equals the nine base sections. By [F4] and [F1] the smooth cubic with O is an elliptic curve, now equipped with its full frame. [F1, F4, F5, step 4.1, given, construct, algebra]

6.1 Steps 1.1–3.1 assign every framed family its unique R-valued parameter, and steps 4.1–5.1 construct the inverse family on Y. Both assignments commute with pullback and are inverse on locally Noetherian bases, including nonreduced ones; [F2] supplies uniqueness of framed isomorphisms. Since R is finite étale over `Z[1/3]` with discriminant −3, `P¹_R` is smooth and proper over `Z[1/3]`. The four removed sections are disjoint, proving the asserted integral compactification. [F1, F2, F5, step 3.1, step 4.1, step 5.1, given, algebra] ∎

## Source and authoring record

This supplies a full-level-three compactification over `Z[1/3]`, including the prime 2. It does not supply a full-level-four compactification, modular cohomology comparison or Weil II.
