---
id: lem-full-level-four-punctured-projective-line-integral-model
kind: lemma
title: Full level four as a punctured projective line over Z[1/2]
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- thm-full-level-four-modular-curve-over-integers-with-two-inverted
- lem-full-level-structure-rigidifies-elliptic-families
- lem-relative-pointed-elliptic-weierstrass-presentation
- lem-order-four-point-normalizes-a-weierstrass-equation
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Elliptic Curves
    url: https://www.jmilne.org/math/Books/ectext6.pdf
    locator: Chapter II, Weierstrass equations and doubling; the explicit level-four parametrization is derived below.
dependency_level: 3
proof_strategy: direct
axiom_use: AC is assumed by the level-four and relative geometry suppliers.
---

## Statement

Assume AC. Put `R=Z[1/2,i]/(i²+1)` and let X be `P¹_R` with coordinate w. Remove the six disjoint sections `w=0`, `w=∞`, and `w⁴=1`. The resulting open scheme Y carries a universal elliptic curve with full level-four structure and represents the full-level-four moduli functor on locally Noetherian `Z[1/2]`-schemes. Thus X is a smooth proper integral compactification of the fine open model over `Z[1/2]`, including residue characteristic three. The elliptic curve is asserted only over Y; no extension over the boundary is claimed.

## Facts & Assumptions

**Given:** AC and the schemes R, X and Y in the Statement.

[F1] The fine level-four open model exists over `Z[1/2]`; locally every framed family has the unique normalized equation `y²+xy−by=x³−bx²` with its first frame vector P=(0,0), and b and `1+16b` units. [[thm-full-level-four-modular-curve-over-integers-with-two-inverted]] [[lem-relative-pointed-elliptic-weierstrass-presentation]] [[lem-order-four-point-normalizes-a-weierstrass-equation]]

[F2] Full level-four automorphisms on locally Noetherian families are trivial. [[lem-full-level-structure-rigidifies-elliptic-families]]

[F3] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** halve the nontrivial 2-torsion point in normalized coordinates.

1.1 Let E/S be a framed elliptic family over a locally Noetherian `Z[1/2]`-scheme. By [F1], its first basis vector is P=(0,0) on the unique normalized model, and `2P=(b,0)`. Put `Y=2y+x−b`; then the curve equation becomes `Y²=(x−b)(4x²+x−b)`. Let V be the second frame vector and let R₀=2V. It is a nonzero 2-torsion section distinct from 2P. Write its affine x-coordinate as r. Since a 2-torsion point has Y=0 and R₀ is distinct from (b,0), `4r²+r−b=0`. Set `d=8r+1` and `s=(−1−d)/8`; then `d²=1+16b`, `r=(d−1)/8`, and `Y²=4(x−b)(x−r)(x−s)`. The elements d and d±1 are units because d² and `(d−1)(d+1)=16b` are units. [F1, F3, given, construct, algebra]

2.1 Set `c=(d−1)/4`, `D=d/4`, and `h=x(V)−r`. The x-coordinate of V differs fibrewise from r: the only point above r is R₀, while 2V=R₀≠O. Hence h is a unit. The tangent at V passes through R₀ because its third intersection is −2V=R₀. Substituting the tangent slope `Y(V)/h` into the completed-square equation and using the derivative relation gives `h²=−c²D=−d(d−1)²/64`. Also `Y(V)` is a unit, since its vanishing would make V a 2-torsion point. Put `t=Y(V)/(2h)`. Then the curve equation yields `t²=2h+D−c²`. [F1, F3, step 1.1, given, construct, algebra]

3.1 Define `e=(D+h)/t`, `w=2e` and `i=h/(ce)`. The element e is well defined and a unit, since `e²=D` follows by expanding `(D+h)²−D t²=h²+c²D=0`. Consequently `i²=−1` and `w⁴=d²=1+16b`; both w and `w⁴−1=16b` are units. The definitions are intrinsic in the unique normalized coordinates, so they glue and give a unique map `S→Spec R[w,w^(-1),(w⁴−1)^(-1)]`. [F1, F3, step 2.1, given, construct, algebra]

4.1 Conversely start with i,w satisfying `i²=−1` and w, `w⁴−1` units. Put `d=w²`, `b=(w⁴−1)/16`, `c=(d−1)/4`, `e=w/2`, `r=(d−1)/8`, and `h=i c e`. On the normalized curve of [F1], define V by `x(V)=r+h` and `Y(V)=2h(e+i c)`, with `y(V)=(Y(V)−x(V)+b)/2`. Direct substitution uses `h²=−c²e²` to verify the curve equation. The tangent at V passes through `(r,0)` in completed-square coordinates, hence `2V=(r,0)` in those coordinates. This is a nonzero 2-torsion point distinct from `2P=(b,0)` because d and d±1 are units. Thus P,V form a basis of the finite étale group E[4] on every geometric fibre, and hence a full level-four structure. [F1, F3, step 3.1, given, construct, algebra]

5.1 The two constructions are inverse: in step 4.1 the definitions give `t=e+i c`, so step 3.1 recovers e,w,i; conversely the identities in steps 2.1–3.1 reconstruct the original x(V) and Y(V). They commute with base change and, by [F2], give the full-level-four moduli equivalence including nonreduced locally Noetherian bases. The six boundary sections of `P¹_R` are pairwise disjoint because 2 and 1±i are units. R is finite étale over `Z[1/2]`; hence `P¹_R` is smooth proper over that base and is the claimed integral compactification. [F1, F2, F3, step 3.1, step 4.1, given, algebra] ∎

## Source and authoring record

This supplies the level-four compactification over `Z[1/2]`, including p=3. It does not prove the modular cohomology comparison, parabolic finiteness or Weil II.
