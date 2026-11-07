---
id: lem-ordinary-lisse-sheaf-on-smooth-curve-has-finite-etale-trivialization
kind: lemma
title: "Finite étale trivialization of an ordinary locally constant sheaf on a normal curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - thm-integral-closure-finite-finite-type-domain-over-field
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf
  - thm-krull-intersection-theorem
proof_strategy: direct
axiom_use: "The proof uses finite field extensions, finite groups, and finitely many local algebra choices; it does not invoke a choice-qualified fundamental-group classification."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stacks Project, Locally constant sheaves and the fundamental group, Lemma 59.65.2"
      url: "https://stacks.math.columbia.edu/tag/0GIY"
      locator: "Finite-type locally constant module sheaves on normal schemes and the finite Galois étale trivialization; the choice-free curve proof below is independently reconstructed."
---

## Statement

Let k be an algebraically closed field, U a normal integral separated finite-type k-curve, and V an ordinary étale-locally constant sheaf of finite-dimensional vector spaces over a field E on U. Then there is a connected finite étale Galois cover q:T→U for which q*V is a constant sheaf. No assertion is made here for a general rational adic sheaf.

## Facts & Assumptions

**Given:** k, U, E and V as in the statement.

[F1] The normalization of any finite-type domain over a field in its own fraction field is finite. [[thm-integral-closure-finite-finite-type-domain-over-field]]

[F2] Height-one localizations of normal Noetherian domains are discrete valuation rings. [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]

[F3] An étale map has local standard-étale charts and is universally open without a choice premise; at each point its fibre is a finite separable residue extension, and étaleness includes flatness. [[lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf]]

[F4] If R is Noetherian and I is an ideal, every element of ∩ IⁿR is killed by 1−a for some a∈I. In a local ring with I in the maximal ideal, 1−a is a unit; thus this first, choice-free clause gives zero intersection. [[thm-krull-intersection-theorem]]

## Proof

1.1 The given U is integral and normal; its local rings at closed points are DVRs by [F2]. Let K=k(U). By local constancy, one étale object V₀→U carrying a trivialization has a point over the generic point. Shrink around that point to a finite-presentation affine chart; its residue field M at that point is a finite separable extension of K by [F3]. Choose a finite Galois extension L/K containing M. These choices are finite. [F2, F3, given, algebra, choose]

1.2 Normalize U in L. To see finiteness on an affine Spec A⊂U, take a primitive element of L/K and multiply it by one nonzero element of A to make it integral over A. Then A[θ] is a finite A-algebra and a finite-type k-domain with fraction field L. By [F1] its normalization in L is finite, and by transitivity of integrality it is exactly the integral closure of A in L. The integral closures commute with localization and glue to a finite normal integral curve T₀→U. The finite Galois group G=Gal(L/K) acts on T₀. At each closed point the normal local ring is a DVR by [F2]. The corresponding local ring of U is also a DVR; a finite torsion-free module over a DVR is free by finite row elimination, so T₀→U is finite locally free. [F1, F2, step 1.1, algebra]

1.3 The generic map from the chosen affine étale chart to Spec L is specified by finitely many elements satisfying finitely many relations. Clearing denominators gives a map from a dense open T₁⊂T₀ into that chart, and hence a frame of V on T₁. Shrink T₁ to the finite-étale locus of T₀→U: the trace determinant is nonzero generically because L/K is separable. [step 1.1, step 1.2, algebra]

2.1 The frame extends uniquely over T₀. For this, let W be a quasi-compact étale T₀-scheme on which the pullback of V is constant. W is Noetherian and has finitely many connected components. At a point over the generic point of T₀ its local ring is a field. At a point over a closed point, let t be a uniformizer of the T₀-local DVR. Étaleness and the algebraically closed residue field give maximal ideal tO_{W,w}, and flatness makes t a non-zero-divisor by [F3]. The choice-free clause [F4] and the local unit argument give ∩ₙtⁿO_{W,w}=0; every nonzero element is consequently a power of t times a unit, so O_{W,w} is a DVR. Thus W is normal; its connected components are irreducible. Flatness makes each component dominant over T₀, so W×T₀T₁ is dense and connected on each component. Relative to the chosen frame on W, the frame over T₁ is a locally constant invertible matrix, hence one matrix on each dense connected component. Extend that matrix constantly to the component. Such extensions agree on overlaps by density and glue uniquely. This yields an isomorphism V|T₀≅underline(E^r). [F3, F4, given, step 1.2, step 1.3, algebra]

3.1 Transport of the global frame by G gives a homomorphism ρ:G→GL_r(E). Let H=kerρ. Every stabilizer G_t of a closed point t∈T₀ lies in H: its image x∈U and t both have residue field k, and an automorphism over U fixing t acts as the identity on the pullback stalk V_x. In the frame this is ρ. [step 2.1, algebra]

3.2 Form T=T₀/H by invariants over each affine Spec A⊂U. If B is the finite integral closure of A in L, then B^H is a finite A-module as a submodule of the finite module B over Noetherian A; localization makes the affine quotients glue. The scheme T is integral, finite and torsion-free over U and therefore finite locally free. Its generic rank is [L^H:K]=|G/H|. [step 1.2, step 3.1, algebra]

3.3 At each closed point x∈U, G acts transitively on the points of T₀ over x: otherwise the Chinese remainder theorem gives an element equal to 0 on one orbit and 1 on another, while its Galois norm lies in A and would take two different values at x. The corresponding statement for H shows that points of T over x are H-orbits. By step 3.1, G/H acts freely on those orbits, hence there are |G/H| of them. They are k-rational. Since the finite-flat fibre has this same length, all its local lengths are one, so it is reduced and étale over k. The generic fibre L^H/K is separable. The finite module of differentials therefore vanishes on every fibre and hence vanishes by Nakayama; consequently T→U is finite étale. Its G/H action is free and transitive on each geometric fibre, so this connected cover is Galois. [step 3.1, step 3.2, algebra]

4.1 Over the dense locus where T₀→U is étale, the map T₀→T is an H-torsor. The frame of step 2.1 is H-invariant by definition of H, so the sheaf equalizer for that finite étale cover descends it to the corresponding dense open of T. The dense-open extension argument of step 2.1 applies to the normal curve T and extends the descended frame uniquely over all T. Thus q*V is constant. [step 2.1, step 3.1, step 3.3, algebra] ∎

## Scope

This proof constructs a cover only for an ordinary locally constant sheaf on the specified normal curve. It does not assert finite monodromy for general lisse adic sheaves. It depends on the explicitly unqualified étale local-chart supplier [F3], whose scoped readiness is recorded. It does not supply a general rational-adic compact-support construction.
