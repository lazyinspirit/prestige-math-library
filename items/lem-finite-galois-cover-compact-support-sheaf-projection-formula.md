---
id: lem-finite-galois-cover-compact-support-sheaf-projection-formula
kind: lemma
title: Finite Galois cover projection formula for compact-support sheaves
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-open-immersion-exact-extension-on-normalized-adic-towers-in-zf
- lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: David Burns, Alexandre Daoud, and Dingli Liang, On Non-Noetherian Iwasawa Theory
    url: https://arxiv.org/pdf/2401.02946
    locator: §3.2.2, derived projection formula; this item proves only the finite-coefficient sheaf-level input.
dependency_level: 10
proof_strategy: direct
axiom_use: AC is assumed by the étale geometric-stalk input.
---

## Statement

Assume AC. Let `j:U→X` be an open immersion of Noetherian schemes. Let `f:V→U` be a finite étale Galois torsor under a finite abelian group Γ, let H≤Γ, and put `V'=V/H` with `f':V'→U`. For a prime p and r≥1 put `Λ_r=Z/p^r`, `A_r=Λ_r[Γ]`, `B_r=Λ_r[Γ/H]`, and regard `F_r=j_! f_*Λ_r` as a sheaf of A_r-modules. Then F_r is A_r-flat and the canonical map induced by summing over H-orbits is an isomorphism in the étale derived category of B_r-module sheaves:

`B_r⊗^L_(A_r) F_r ≅ j_! f'_*Λ_r`.

The maps are compatible with every coefficient reduction `r+1→r`; in particular `A_r⊗^L_(A_(r+1)) F_(r+1)≅F_r`. No condition that |H| be invertible is imposed. This is a sheaf-level formula; it does not assert that derived global sections commute with this base change, identify a Weil–étale duality complex, or give the BDL module descent.

## Facts & Assumptions

**Given:** AC, the Noetherian open immersion, finite abelian Galois torsor and quotient, p and r as in the Statement.

[F1] Étale extension by zero for an open immersion is exact and compatible with coefficient tensor products. [[lem-open-immersion-exact-extension-on-normalized-adic-towers-in-zf]]

[F2] For finite coefficient rings, geometric stalks on the étale site are exact and conservative under AC. [[lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives]]

[F3] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** regular-representation stalks and finite orbit sums.

1.1 On an étale cover of U trivializing the Γ-torsor f, the sheaf `f_*Λ_r` is the product of copies of Λ_r indexed by Γ. The deck action permutes these copies regularly, so it is a free rank-one A_r-module sheaf locally on U. Under this identification the sheaf map `f_*Λ_r→f'_*Λ_r` that sums the components in each H-orbit is the group-ring quotient `A_r→B_r`. It is independent of a chosen torsor trivialization because the orbit sum is Γ-equivariant. Consequently `B_r⊗_(A_r)f_*Λ_r→f'_*Λ_r` is an isomorphism on U. [F2, F3, given, construct, algebra]

2.1 By [F1], extension by zero is exact and compatible with coefficient tensor. Its geometric stalks are the original stalks over U and zero outside U. By step 1.1, every stalk of F_r is therefore either a free A_r-module or zero. Exactness and conservativity of stalks [F2] show tensoring F_r over A_r preserves every short exact sequence of A_r-module sheaves: F_r is A_r-flat. Thus it may itself be used as a flat representative for derived tensor, and the ordinary isomorphism of step 1.1 extends by zero to the derived isomorphism in the Statement. This argument does not divide by |H|. [F1, F2, F3, step 1.1, given, construct, algebra]

3.1 The orbit-sum maps are defined integrally on the finite component sets, so they commute with `Λ_(r+1)→Λ_r`. The same stalk calculation makes `F_(r+1)` flat over `A_(r+1)`; coefficient reduction therefore gives `A_r⊗^L_(A_(r+1))F_(r+1)≅F_r`. The quotient-cover isomorphisms commute with these reduction maps because both are the canonical quotient and orbit sum on each trivialized fibre. This proves the stated levelwise compatibility without making a derived global-sections or Weil–étale duality assertion. [F1, F2, F3, step 1.1, step 2.1, given, algebra] ∎

## Source and authoring record

This is the compact-support sheaf-level finite Galois projection formula, including noninvertible subgroup order and changing constants. It does not supply the derived global projection formula for the BDL complexes or the Weil–étale duality identification.
