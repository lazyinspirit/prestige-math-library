---
id: lem-quotient-elliptic-curve-by-prime-to-characteristic-cyclic-subgroup
kind: lemma
title: Quotient an elliptic curve by a finite cyclic étale subgroup
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-free-mun-actions-on-affines-have-finite-etale-quotients
- lem-proper-flat-fp-cohomology-perfect-complex
- thm-full-riemann-roch-divisor
- thm-riemann-hurwitz-complete
- lem-multiplication-by-n-on-abelian-scheme
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Elliptic Curves
    url: https://www.jmilne.org/math/Books/ectext6.pdf
    locator: Chapter III, isogenies; the relative finite étale quotient is constructed below.
dependency_level: 1
proof_strategy: direct
axiom_use: AC supplies the named coherent, curve and quotient inputs.
---

## Statement

Assume AC. Let S be locally Noetherian, E/S an elliptic curve, n≥2 invertible on S, and `C⊂E[n]` a finite étale subgroup scheme locally isomorphic to the constant cyclic group `Z/n`. The fppf sheaf quotient E/C is represented by an elliptic curve E'/S, and `φ:E→E'` is a finite étale isogeny of degree n with kernel C. The construction commutes with arbitrary base change. If M is invertible on S and coprime to n, φ induces an isomorphism `E[M]≅E'[M]`. No compactified or cohomological Hecke action is asserted.

## Facts & Assumptions

**Given:** AC, S, E, n and C as in the Statement.

[F1] A free μ_n action on a finite-type affine scheme over a Noetherian base with n invertible has a finite étale μ_n-torsor quotient. [[lem-free-mun-actions-on-affines-have-finite-etale-quotients]]

[F2] Proper coherent cohomology of flat finitely presented sheaves is computed by a universal finite-projective complex, and Riemann–Roch computes the fibrewise section dimensions. [[lem-proper-flat-fp-cohomology-perfect-complex]] [[thm-full-riemann-roch-divisor]]

[F3] Finite étale maps between smooth proper curves satisfy the algebraic Riemann–Hurwitz degree identity. [[thm-riemann-hurwitz-complete]]

[F4] Prime-to-characteristic M-torsion of an elliptic family is finite étale of rank M². [[lem-multiplication-by-n-on-abelian-scheme]]

[F5] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** invariant affine neighborhoods and descent of the cyclic quotient.

1.1 Work étale locally on S so C is constant cyclic and a primitive nth root of unity identifies it with μ_n. The translations by C act freely on E. Form the line bundle `L=⊗_(c∈C) t_c^*O_E(O)`; globally this is the norm of the translated bundle along C×E→E. Translation permutes the factors and gives a canonical C-linearization. Its fibre degree is n. A sufficiently high power is relatively very ample. For a geometric point x of E, choose a power of degree greater than n. By [F2], its evaluation on the n distinct orbit points is surjective: on a fibre the kernel has positive degree and H¹=0, and base change lifts a section taking value 1 at every orbit point. Multiplying the translates of that section gives an invariant section nonzero on the orbit. After shrinking the base, its nonvanishing locus is a C-invariant affine open. Such opens cover E; intersections are again affine after taking the product of sections. [F2, F5, given, construct, algebra]

2.1 Apply [F1] to each invariant affine open. The resulting quotient affines glue on invariant affine intersections, and E→E' is a finite étale C-torsor of degree n. To make the étale-base descent effective, take the relative Proj of the invariant graded algebra `⊕_m (π_*L^m)^C`: the norm construction makes L and its linearization global; averaging by 1/n makes invariants a direct summand commuting with base change; and the invariant affine opens of step 1.1 are precisely its standard Proj charts. Thus this global Proj pulls back to the local quotient and represents E/C. The same graded construction and torsor identity prove compatibility with arbitrary base change. Since C is a subgroup of the commutative group E, addition and inverse descend to E', making φ a group homomorphism with kernel C. Properness of E' follows from the finite surjective map E→E' and properness of E, and smoothness descends through the finite étale surjection. Every geometric fibre of E' is connected. By [F3] the finite étale degree-n map from the genus-one fibre E gives `0=n(2g(E')−2)`, so E' has genus one and its descended identity is a section. Thus E'/S is an elliptic curve. [F1, F3, F5, step 1.1, given, construct, algebra]

3.1 Let M be invertible on S with gcd(M,n)=1. If an M-torsion section lies in the kernel C, Bézout integers u,v with uM+vn=1 show it is zero. Thus φ induces an injection E[M]→E'[M]. Both are finite étale of rank M² by [F4], so the injection is an isomorphism on geometric fibres and hence of finite étale group schemes. [F4, F5, step 2.1, given, algebra] ∎

## Source and authoring record

The proof constructs only the smooth elliptic quotient by a prime-to-characteristic cyclic subgroup. It does not supply quotient extensions at cusps or a Hecke action on cohomology.
