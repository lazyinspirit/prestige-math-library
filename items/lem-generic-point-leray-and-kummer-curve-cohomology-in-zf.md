---
id: lem-generic-point-leray-and-kummer-curve-cohomology-in-zf
kind: lemma
title: "Generic-point Leray comparison and Kummer cohomology of a normal curve without choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - lem-generic-point-prime-to-characteristic-direct-image-bound-in-zf
  - lem-generic-point-kummer-r1-residue-sheaf-on-smooth-curves-in-zf
  - lem-one-variable-function-field-finite-etale-hypercover-cd-one-in-zf
  - lem-qc-etale-hypercover-acyclic-tower-resolutions-in-zf
  - lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf
  - thm-hilbert-90-for-finite-galois-extension
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - thm-krull-intersection-theorem
proof_strategy: direct
axiom_use: "No choice principle or selected separable closure is assumed. Universal hypercover resolutions and finite local calculations are explicit."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, cohomology of torsion sheaves on curves"
      url: "https://stacks.math.columbia.edu/tag/03SC"
      locator: "The generic-point Leray and Kummer calculation is reconstructed in the finite-hypercover model."
---

## Statement

Let k be algebraically closed, C a normal integral finite-type k-curve, j:η=Spec k(C)→C its generic point, ℓ≠char(k) prime, and r≥1. In the choice-free finite-hypercover, unnormalized derived model, the natural composition map RΓ(C,Rj_*F)→RΓ(η,F) is an isomorphism for every bounded-below complex F of A_r=Z/ℓ^rZ-module sheaves on η. For F=μ_{ℓ^r} in degree zero there is a natural exact sequence

    0 → H¹(C,μ_{ℓ^r}) → k(C)×/k(C)×^{ℓ^r} → ⊕_{x∈C_closed} Z/ℓ^rZ → H²(C,μ_{ℓ^r}) → 0,

where the middle arrow is valuation modulo ℓ^r, and H^q(C,μ_{ℓ^r})=0 for q>2. No choice principle or selected separable closure is assumed. Finiteness of H¹ and H² and the bound for arbitrary sheaves are not asserted.

## Facts & Assumptions

**Given:** k, C, j, ℓ, r and F as stated, with fixed small étale sites.

[F1] The generic-point tower Rj_* exists in the unnormalized finite-hypercover model, and its higher direct-image sheaves vanish in degrees q≥2 for finite ℓ-primary coefficients. [[lem-generic-point-prime-to-characteristic-direct-image-bound-in-zf]]

[F2] R¹j_*μ_{ℓ^r} is the direct sum of the closed-point Z/ℓ^r skyscrapers via valuation, and that sum is cohomologically acyclic. [[lem-generic-point-kummer-r1-residue-sheaf-on-smooth-curves-in-zf]]

[F3] Finite-hypercover cohomology of the one-variable generic field with arbitrary finite-coefficient sheaf vanishes in degrees ≥2. [[lem-one-variable-function-field-finite-etale-hypercover-cd-one-in-zf]]

[F4] On finite-type k-schemes the explicit finite-hypercover tower resolution constructs unnormalized derived direct images and global sections. [[lem-qc-etale-hypercover-acyclic-tower-resolutions-in-zf]]

[F5] Étale charts are universally open and quasi-finite at specified points without a choice premise. [[lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf]]

[F6] Finite Galois multiplicative 1-cocycles are coboundaries. [[thm-hilbert-90-for-finite-galois-extension]]

[F7] Height-one localizations of normal Noetherian domains are DVRs. [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]

[F8] The first, choice-free clause of the Krull-intersection theorem kills an element lying in all powers of the maximal ideal of a local ring when that maximal ideal is principal. [[thm-krull-intersection-theorem]]

## Proof

1.1 Use the additive universal hypercover embedding of [F1]. In its construction, for every finite η-hypercover cocycle c:Q→F, the pushout contains the map P⊗Hom(Q,F)→G(F); evaluating at c makes c a coboundary on that same hypercover. Let V→C be a qc étale chart, let H be a finite truncated hypercover of V, and let a cochain of j_*F on H be given. Each H_m×_Cη is a finite étale η-object, these generic fibres form a finite truncated hypercover of V×_Cη, and the cochain sections of j_*F on H_m are exactly the sections of F on H_m×_Cη. If the cochain is a cocycle, it is one of the indexed generic-site cocycles just described. Hence F→G(F) sends its class in H^p(V,j_*F) to zero for every p>0 on the same H. [F1, F4, given, algebra]

1.2 Iterate F→G(F) canonically and put I(F)=colim_tG^t(F), as in [F1]. For any qc étale V→C, V×_Cη is a finite étale η-object. Sections of this finite object in a countable union of sheaf monomorphisms have finite-stage representatives: its finitely many field components and their finite étale covers give finitely many gluing witnesses. The same holds for the finitely many components of a truncated H. Therefore every positive hypercover class of j_*I(F) on V appears at one finite stage and is killed at the next by step 1.1. Thus j_*I(F) is Γ(V,−)-acyclic for every qc étale V→C; the construction also makes I(F) acyclic on every finite étale η-object. [F1, F4, step 1.1, algebra]

2.1 Apply the additive generic-site resolution termwise to F. In each total degree only finitely many terms occur. By [F1] it computes Rj_*F; by step 1.2 its j_*-images are acyclic for curve global sections, so applying Γ(C,−) computes RΓ(C,Rj_*F). On every term Γ(C,j_*−)=Γ(η,−) by definition of direct image, and the same resolution computes RΓ(η,F). The termwise equality gives the claimed natural derived isomorphism. For a sheaf in degree zero, filtering the bounded-below double complex by the generic-resolution degree gives the first-quadrant Leray spectral sequence H^p(C,R^qj_*F)⇒H^{p+q}(η,F); only finitely many terms contribute to a fixed total degree. [F1, F4, step 1.2, algebra]

3.1 Apply step 2.1 to μ=μ_{ℓ^r}. Since k contains every ℓ^r-th root of unity, μ is constant finite. Every connected component of a qc étale C-scheme is a normal integral curve: at a point over a closed point of C, the base local ring is a DVR by [F7]; the étale local ring is flat with maximal ideal generated by its uniformizer, and [F8] makes that local ring a DVR. At a point over the generic point the local ring is a field. The finite-type scheme is therefore normal, and its connected components are irreducible. Each component meets the generic fibre because étale maps are flat and open by [F5]. A locally constant μ-section on its generic fibre therefore extends uniquely as the same constant on that component. Thus j_*μ=μ. By [F1], R^qj_*μ=0 for q≥2; by [F2], R¹j_*μ is the acyclic valuation skyscraper sum. By [F3], H^q(η,μ)=0 for q≥2. The Leray spectral sequence consequently has only rows q=0 and q=1, with all positive p in row q=1 zero. Its edge exact sequence is 0→H¹(C,μ)→H¹(η,μ)→Γ(C,R¹j_*μ)→H²(C,μ)→0, and H^q(C,μ)=0 for q>2. [F1, F2, F3, F5, F7, F8, step 2.1, algebra]

3.2 The finite Galois Čech calculation and [F6] identify H¹(η,μ) with k(C)×/k(C)×^{ℓ^r}: an ℓ^r-th root gives a finite multiplicative cocycle, and finite Hilbert 90 gives the converse and its kernel. Under the residue isomorphism in [F2], the Leray edge sends such a class to the valuations of its defining function modulo ℓ^r. Substitution in the edge sequence of step 3.1 gives the displayed exact sequence. [F2, F6, step 3.1, algebra] ∎

## Scope

The statement proves the unnormalized generic Leray comparison and constant prime-to-characteristic vanishing. It does not prove Jacobian/Picard finiteness, a uniform bound for arbitrary coefficient sheaves, or normalized rational-adic proper pushforward.
