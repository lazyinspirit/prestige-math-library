---
id: lem-relative-pointed-elliptic-weierstrass-presentation
kind: lemma
title: Relative Weierstrass presentation with a non-two-torsion point
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
    locator: Chapter II, Weierstrass equations; the relative construction is reconstructed below.
dependency_level: 0
proof_strategy: direct
axiom_use: AC implies the DC consumed by the proper coherent cohomology input.
---

## Statement

Assume AC. Let S be locally Noetherian, E→S an elliptic curve with identity O, and P a section such that P, −P and O are pairwise distinct on every geometric fibre. Zariski locally on S there are coordinates in which E is the smooth projective completion of

`y²+a₁xy+a₃y=x³+a₂x²`

with O=[0:1:0], P=(0,0), and tangent line y=0 at P; a₃ is a unit. Any two such coordinates over the same local base differ by `x=u²x'`, `y=u³y'` for a unit u. These statements include nonreduced bases.

## Facts & Assumptions

**Given:** AC, locally Noetherian S, an elliptic curve E/S, its identity O, and the section P as in the Statement.

[F1] Proper flat finitely presented coherent cohomology is computed by a bounded nonnegative complex of finite projectives compatible with arbitrary algebra base change. [[lem-proper-flat-fp-cohomology-perfect-complex]]

[F2] Riemann–Roch computes sections of divisors on smooth proper curves. [[thm-full-riemann-roch-divisor]]

[F3] AC implies the DC used by [F1]. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F4] A proper quasi-finite morphism is finite. [[thm-proper-quasi-finite-is-finite]]

## Proof

**Proof technique:** relative Riemann–Roch and normalized pole bases.

1.1 Work over a Noetherian affine open of S. The identity section is an effective Cartier divisor, because E/S is a smooth relative curve. For n≥1 the sheaf `O(nO)` is invertible and flat over S. Each geometric fibre is a genus-one curve, so [F2] gives `h⁰(O(nO))=n` and `H¹(O(nO))=0`. Applying [F1] and successively cancelling unit entries in its finite-free complex over a local base ring leaves a minimal complex. Its reduction has no positive-degree cohomology, so the minimal complex has no positive terms. Consequently `π_*O(nO)` is locally free of rank n, higher cohomology vanishes, and its formation commutes with arbitrary base change. In particular the inclusions of sections with pole order at most n−1 have locally free rank-one quotients for n≥2. [F1, F2, F3, given, construct, algebra]

2.1 Locally trivialize the conormal line of O and choose a parameter along the section. Use step 1.1 to choose x with leading pole `t^(−2)` and y with leading pole `t^(−3)`. The six functions `1,x,y,x²,xy,x³` form a basis of `π_*O(6O)` by their distinct pole orders 0,2,3,4,5,6. Since y² has the same leading term as x³, there are unique coefficients aᵢ giving the generalized Weierstrass relation `y²+a₁xy+a₃y=x³+a₂x²+a₄x+a₆`. The sections `1,x,y` give a map to P²; on every geometric fibre Riemann–Roch gives the usual degree-three embedding as the displayed cubic. The cubic is flat over the base: its defining homogeneous polynomial remains a nonzero cubic in every fibre, so the relative hypersurface local flatness criterion applies. The map from E to it is proper and fibrewise an isomorphism, hence quasi-finite and finite by [F4]. At each local ring of the cubic the induced finite algebra map is surjective by Nakayama, since it is so on the fibre. Its kernel also vanishes by Nakayama: tensoring the resulting exact sequence with the residue field preserves exactness because E is flat over S, and the fibre map is an isomorphism. Thus the map is an isomorphism including over nonreduced bases. [F1, F2, F3, F4, step 1.1, given, construct, algebra]

3.1 The assumption P≠O makes P lie in the affine chart. Translate x and y so P becomes (0,0), forcing a₆=0. The inverse is `(x,−y−a₁x−a₃)`, so P≠−P on every geometric fibre makes the y-partial derivative at P a unit. A unique shear of y by a multiple of x makes the tangent horizontal; the x-linear coefficient then vanishes. The resulting equation has the required shape and its y-partial derivative a₃ is a unit. All operations use sections and units on the base and commute with base change. [F2, F3, step 2.1, given, construct, algebra]

4.1 Let x',y' be another such coordinate choice. The pole filtrations of step 1.1 imply `x=u²x'+r` and `y=u³y'+su²x'+t` for a unit u and sections r,s,t: the pole orders exclude every other term, and the equality of leading coefficients in the cubic fixes the common u. Since both presentations take P to (0,0), r=t=0. Since both take the tangent line at P to y=0, s=0. Thus only the stated scaling remains. [F1, F3, step 1.1, step 3.1, given, algebra] ∎

## Source and authoring record

This proposed local construction does not construct the group law on a universal cubic or a moduli quotient. Its fibre-to-family isomorphism and coordinate uniqueness are explicit proof obligations; it is not installed or recorded.
