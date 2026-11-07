---
id: lem-generic-point-kummer-r1-residue-sheaf-on-smooth-curves-in-zf
kind: lemma
title: "The generic-point Kummer residue sheaf on a normal curve without choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - lem-generic-point-prime-to-characteristic-direct-image-bound-in-zf
  - lem-etale-closed-point-stalks-conservative-over-algebraically-closed-field-in-zf
  - lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf
  - lem-finite-morphism-etale-direct-image-calculus
  - thm-hilbert-90-for-finite-galois-extension
  - lem-qc-etale-hypercover-acyclic-tower-resolutions-in-zf
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - thm-krull-intersection-theorem
proof_strategy: direct
axiom_use: "No choice principle is assumed. Each root, pointed étale chart and finite Galois extension is selected for one specified finite calculation."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, cohomology of curves"
      url: "https://stacks.math.columbia.edu/tag/03SC"
      locator: "The generic valuation calculation is reconstructed from finite field cochains and pointed local rings."
---

## Statement

Let k be algebraically closed, C a normal integral finite-type k-curve, j:η=Spec k(C)→C its generic point, ℓ a prime different from char(k), and r≥1. In the finite-hypercover, unnormalized derived étale model, there is a canonical isomorphism

    R¹j_*μ_{ℓ^r} ≅ ⊕_{x∈C_closed} i_{x,*}(Z/ℓ^rZ),

where i_x:Spec k→C is the closed k-point and the component is the valuation modulo ℓ^r. This direct-sum sheaf has zero positive étale cohomology on C. No choice principle or selected separable closure is assumed. The statement does not assert the Leray comparison or a global cohomological bound for arbitrary coefficients.

## Facts & Assumptions

**Given:** k, C, j, ℓ and r as stated.

[F1] The generic-point unnormalized right-derived direct image exists and its coefficient-level cohomology on a qc étale chart is computed by finite-hypercover cohomology of the generic fibre. [[lem-generic-point-prime-to-characteristic-direct-image-bound-in-zf]]

[F2] Closed k-point étale stalks are exact and conservative on finite-coefficient sheaves on C, without a choice premise. [[lem-etale-closed-point-stalks-conservative-over-algebraically-closed-field-in-zf]]

[F3] Étale charts are locally standard, flat, quasi-finite and open without a choice premise. [[lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf]]

[F4] Direct image under a finite morphism is exact, without a choice premise. [[lem-finite-morphism-etale-direct-image-calculus]]

[F5] Every multiplicative 1-cocycle for a finite Galois extension is a coboundary. [[thm-hilbert-90-for-finite-galois-extension]]

[F6] The choice-free tower resolution on finite-type k-schemes computes its cohomology by finite truncated hypercovers. [[lem-qc-etale-hypercover-acyclic-tower-resolutions-in-zf]]

[F7] A height-one localization of a normal Noetherian domain is a DVR. [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]

[F8] The first clause of the Krull-intersection theorem is choice-free: an element in all powers of an ideal is killed by 1−a for some a in that ideal. [[thm-krull-intersection-theorem]]

## Proof

1.1 Let L/k be a finite extension of k(C). Every finite hypercover of Spec L through degree two is refined there by the Čech nerve of a finite Galois E/L: split its finitely many finite étale components in E and fill the finitely many matching boundaries. A μ_{ℓ^r}-valued Čech 1-cocycle c is a multiplicative cocycle G=Gal(E/L)→E×. By [F5], c_g=g(a)/a for some a∈E×. Since c_g^{ℓ^r}=1, a^{ℓ^r} lies in L×. Enlarging E and multiplying a by an ℓ^r-th root of unity does not change its class modulo L×ℓ^r. Conversely, for u∈L× choose one finite Galois field containing an ℓ^r-th root a of u; g↦g(a)/a is μ_{ℓ^r}-valued. It is a coboundary after finite enlargement exactly when u is an ℓ^r-th power in L. Hence the canonical Kummer map identifies finite-hypercover H¹(Spec L,μ_{ℓ^r}) with L×/L×ℓ^r. [F5, given, choose, algebra]

2.1 Fix a closed point x of C. Its local ring is a DVR by [F7]; choose one uniformizer t. In a pointed étale neighbourhood of x, [F3] gives a flat local ring B whose maximal ideal is tB and whose residue field is the finite separable extension k itself. The element t is a non-zero-divisor. By [F8], the intersection of all powers of tB is zero, since every 1−a with a∈tB is a unit. Thus each nonzero element of B is a finite power of t times a unit, so B is a DVR with uniformizer t. The filtered union R of these local rings is again a DVR: each nonzero element is represented at a finite stage in that form, and its valuation is unchanged at later stages. R has residue k and fraction field the filtered union of the corresponding generic fields. [F3, F7, F8, given, choose, algebra]

2.2 Every unit u of R has an ℓ^r-th root in R. Represent u at one pointed local chart and choose one ℓ^r-th root of its residue in k. The derivative of T^{ℓ^r}−u is nonzero at that residue root, so adjoining it defines a further pointed étale neighbourhood by [F3]. Thus R×=(R×)^{ℓ^r}. Step 1.1 and the exact filtered-colimit description of a stalk identify (R¹j_*μ_{ℓ^r})_x with Frac(R)×/Frac(R)×ℓ^r≅Z/ℓ^r through the t-valuation. The isomorphism is independent of the uniformizer, since a different uniformizer differs by a unit. [F1, F3, step 1.1, step 2.1, given, algebra]

3.1 On a qc étale V→C, the generic fibre is a finite disjoint union of fields. Step 1.1 identifies its degree-one classes with tuples of rational functions modulo ℓ^r-th powers. For each such tuple, reduce its finite divisor on the regular curve V modulo ℓ^r. This gives a natural map from the presheaf computing R¹j_*μ_{ℓ^r} to ⊕_x i_{x,*}(Z/ℓ^r): every divisor has finite support, and the construction commutes with étale restriction. By step 2.2 this map is an isomorphism at every closed k-point stalk. It is therefore an isomorphism of sheaves by [F2]. [F1, F2, step 1.1, step 2.2, algebra]

4.1 For each x the closed immersion i_x is finite, so i_{x,*} is exact by [F4]. Restrict any finite truncated étale hypercover of C to Spec k at x. Each level becomes a finite disjoint union of k-points and its matching maps are surjections of finite sets. The finite cone construction makes the resulting simplicial set contractible through the specified degree, so the corresponding cochain complex for i_{x,*}(Z/ℓ^r) has zero positive cohomology. By [F6] this proves the individual skyscraper is cohomologically acyclic. Finite hypercover cochain complexes on the qc curve have finitely many components in each relevant degree, so their cohomology and the filtered hypercover colimit commute with arbitrary direct sums: local finite support becomes finite on a finite étale cover. Therefore the direct sum in step 3.1 has zero positive cohomology. [F4, F6, step 3.1, algebra] ∎

## Scope

This is the prime-to-characteristic Kummer residue calculation for normal curves. The global Leray comparison and cohomological finiteness or boundedness for arbitrary constructible sheaves remain separate.
