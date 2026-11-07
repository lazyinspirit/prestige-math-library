---
id: lem-injective-torsion-sheaves-on-projective-line-have-acyclic-closed-fibre
kind: lemma
title: Closed-fibre acyclicity for injective torsion sheaves on the projective line
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
- def-axiom-of-choice
- thm-jacobian-criterion-smooth-morphism
- thm-etale-equivalent-flat-unramified-fp
- def-henselian-pair-and-henselian-local-ring
- lem-henselian-pair-affine-torsion-cohomology-rigidity
- lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses
- lem-torsion-etale-cohomology-classes-have-finite-constructible-coefficient-witnesses
- lem-constructible-etale-module-sheaves-embed-in-finite-constant-pushforwards
- lem-finite-morphism-etale-direct-image-calculus
- lem-site-slice-restriction-locality-and-composition
- lem-proper-henselian-restriction-for-sections-and-finite-etale-covers
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Lemmas59.82.8 and59.85.2
    url: https://stacks.math.columbia.edu/tag/0A5H
    locator: Full0A51 and0A5H displayed proofs read; the pair henselization and dependent degree-one argument are reconstructed locally.
axiom_use: Explicit AC inherited from finite witnesses, rigidity and coefficient embeddings; actual injective I is given. The proper-henselian cover-equivalence supplier is separately staged at AC scope.
---

## Statement

Assume the Axiom of Choice. Let A be henselian local, let X=P1_A and let X0 be its closed fibre. If ℓ is a prime and I is an injective sheaf of Z/ℓ-modules on X_et, then H^q_et(X0,I|X0)=0 for every q>0. No invertibility of ℓ is required.

## Statement references

[The Stacks Project, Lemma59.85.2](https://stacks.math.columbia.edu/tag/0A5H)

## Facts & Assumptions

**Given:** AC and the actual henselian ring, projective line, closed fibre and injective coefficient sheaf of the Statement. Fix actual cohomology models.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] The affine henselian-pair theorem at explicit AC scope gives restriction isomorphisms for all torsion sheaves in all degrees; its proof includes finite-algebra idempotent and factorization uniqueness. [[lem-henselian-pair-affine-torsion-cohomology-rigidity]] [[def-henselian-pair-and-henselian-local-ring]]

[F2] Corrected explicit-AC continuity for qcqs inverse limits with affine transition maps is available. [[lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses]]

[F3] Finite constructible coefficient witnesses exist at explicit AC scope, with maps not assumed monic, and may be taken over Z/ℓ for Z/ℓ-coefficients. [[lem-torsion-etale-cohomology-classes-have-finite-constructible-coefficient-witnesses]]

[F4] Actual slice restriction and derived composition are used on supplied resolutions. [[lem-site-slice-restriction-locality-and-composition]]

[F5] At explicit AC scope finite constructible Z/ℓ-module sheaves embed in finite sums of finite constant pushforwards. [[lem-constructible-etale-module-sheaves-embed-in-finite-constant-pushforwards]]

[F6] Finite direct image is exact and commutes with arbitrary base change for all abelian sheaves. [[lem-finite-morphism-etale-direct-image-calculus]]

[F7] At explicit AC scope, proper henselian finite-étale-cover equivalence and finite-constant H1 restriction provide the degree-one lift used in steps 8.1–9.1. [[lem-proper-henselian-restriction-for-sections-and-finite-etale-covers]]

[F8] At explicit AC scope a finitely presented square system with invertible Jacobian is smooth of relative dimension zero and hence étale. [[thm-jacobian-criterion-smooth-morphism]] [[thm-etale-equivalent-flat-unramified-fp]]

## Proof

**Proof technique:** affine pair henselization, two-chart Mayer–Vietoris, then a finite-coefficient lift in degree one.

1.1 An étale restriction of an injective sheaf of constant Z/ℓ-modules is injective. Indeed restriction to an étale object is the slice inverse-image functor. Its left adjoint is extension by zero along that étale object: locally a section is a finite sum of sections labelled by maps into the object, with the usual restriction identifications and sheafification. On an étale trivializing neighbourhood these are direct sums, so the left adjoint is exact. Equivalently kernels and local lifts are checked independently on each labelled component. The adjunction therefore sends an injective under restriction to an injective. This is the actual module slice calculus of [F4], not preservation of injectives by an arbitrary inverse-image functor. [A1, F1, F2, F3, F4, F5, F6, F7, F8, given, construct, algebra]

2.1 We construct the pair henselization needed for an affine closed subscheme. For a ring R and ideal J consider all étale finitely presented R-algebras B equipped with B/JB≅R/J compatible with R. Tensor products provide common successors. Parallel maps are equal after a further étale localization retaining that quotient: their equalizer is an open containing the entire closed fibre, since the diagonal of an étale map is open. Its complement is closed in an affine fp source; the prescribed closed fibre is disjoint from it, so the ideal of that complement together with JB is the unit ideal. A finite unit equation produces a principal open, still containing that entire closed fibre, inside the equalizer. Thus the system is filtered. Write Rʰ for its colimit. Then Rʰ/JRʰ=R/J. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, given, construct, algebra]

3.1 The pair (Rʰ,JRʰ) is henselian. First every 1+a with a∈JRʰ becomes a unit: descend a to a stage and invert 1+a, an étale principal localization which leaves the quotient unchanged. For a monic polynomial over Rʰ with a prescribed coprime monic factorization modulo JRʰ, descend its coefficients and the finitely many factorization equations to a stage. The universal monic factorization algebra localized at its resultant is étale: in monic coefficients its linearized multiplication map is (δg,δh)↦hδg+gδh, a square map with Sylvester determinant equal up to sign to the resultant, so [F8] applies; its specified quotient factorization is a section over R/J. Isolate this section in that quotient: an affine étale separated section is open and closed, hence is cut out by an idempotent. Lift that idempotent as an element of the chart algebra and invert it, discarding the complementary quotient component. This localization has quotient exactly R/J and belongs to our system. Its universal factors give the required factorization in Rʰ. The resultant is a unit because its reduction is a unit and JRʰ is radical-small by the preceding unit test. Uniqueness follows by the idempotent/Bezout calculation in [F1]. This proves the defining henselian property directly. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 2.1, given, construct, algebra]

4.1 Let T=Spec(R) be affine and W=Spec(R/J) its closed subscheme. Let K be an injective Z/ℓ-module sheaf on T. Rigidity [F1] on the constructed henselian pair and continuity [F2] give H^q(W,K|W)=H^q(Spec(Rʰ),K|Rʰ)=colim_B H^q(Spec(B),K|B). For q>0 every term on the right is zero by step 1.1 and the defining acyclicity of an actual injective. Hence H^q(W,K|W)=0. In particular this conclusion is valid for every affine open of X and every closed subscheme of that open; no assumption that the original affine pair was henselian is made. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 3.1, given, construct, algebra, step 1.1]

5.1 Cover X=P1_A by its two standard affine opens U,V; their intersection is affine. The restrictions of I to all three are injective by step 1.1. Their intersections with X0 are closed subschemes, so step 4.1 gives positive cohomology zero there. The Mayer–Vietoris sequence, obtained by applying an actual injective resolution to this two-open cover, consequently gives H^q(X0,I|X0)=0 for q>1. Its unresolved degree-one term is the cokernel of the difference of degree-zero restrictions, which must be handled separately. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 4.1, given, construct, algebra, step 1.1]

6.1 Take ξ∈H1(X0,I|X0). The coefficient witness construction [F3], applied with coefficient ring Z/ℓ, supplies a finite constructible Z/ℓ-module sheaf G on X, a map a:G→I and ζ∈H1(X0,G|X0) mapping to ξ. The map a need not be monic. By [F5] choose a monomorphism G→E=⊕ f_i,*constant(M_i), with finitely many finite finitely presented f_i:Y_i→X and finite Z/ℓ-modules M_i. Injectivity of I extends a across this monomorphism to b:E→I. Let ζ_E be the image of ζ. Then b sends ζ_E to ξ. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 5.1, given, construct, algebra]

7.1 Finite pushforward [F6] is exact and commutes with restriction to X0. Thus H1(X0,E|X0)=⊕ H1(Y_i,0,constant(M_i)), and H1(X,E)=⊕ H1(Y_i,constant(M_i)), naturally for the actual restriction maps. Here Y_i,0 denotes Y_i×A A/m. The equality of cohomology follows either from the exact direct-image derived composition in [F4], or directly because the inverse-image adjunction is exact, so finite direct image preserves injectives as well as being exact. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 6.1, given, construct, algebra]

8.1 Each Y_i is proper over the henselian local base A, since it is finite over the projective A-scheme X. The proper henselian finite-cover interface [F7] identifies H1(Y_i,constant(M_i))→H1(Y_i,0,constant(M_i)) with a bijection. To specify the application: H1 of a finite constant abelian group classifies its torsors by the actual degree-one sheaf comparison. Each such torsor is a finite étale cover with an M_i-action; conversely equivariant descent gives the torsor. The equivalence on finite étale covers lifts the object, the finitely many action maps and all their equations, and reflects the torsor identity. This yields exactly the stated H1 map, including its group law. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 7.1, given, construct, algebra]

9.1 By steps 7.1–8.1 the class ζ_E lifts to a class ζ̃_E∈H1(X,E). Map it by b to H1(X,I), which is zero because I is injective. Naturality of restriction identifies its image on X0 with b(ζ_E)=ξ. Hence ξ=0. Together with step 5.1 this proves every positive-degree vanishing, with no invertibility condition on ℓ in A. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 8.1, given, construct, algebra, step 7.1, step 5.1]

10.1 All maps used above are the actual restriction, finite adjunction and coefficient maps on the fixed supplied cohomology models. An empty closed fibre gives the zero groups directly. The zero injective and all residue characteristics are included. Only the degree-one argument uses [F7]. The present dependent derivation does not prove the separate original batch25 proper-base-change theorem. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 9.1, given, construct, algebra] ∎

## Authoring status

The affine restriction argument (steps 1–5) is independent of proper henselian comparison. The F7 provider is a separate research-stage proof; this copy is not installed or recorded, and no source import or independent acceptance is claimed.
