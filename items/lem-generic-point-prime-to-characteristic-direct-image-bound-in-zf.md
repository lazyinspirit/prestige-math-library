---
id: lem-generic-point-prime-to-characteristic-direct-image-bound-in-zf
kind: lemma
title: "Generic-point higher direct images on a curve without choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - lem-one-variable-function-field-finite-etale-hypercover-cd-one-in-zf
  - def-derived-category-of-etale-sheaves
  - lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf
proof_strategy: direct
axiom_use: "No choice principle or selected separable closure is assumed; all field splitting and hypercover refinements are finite."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Stacks Project, Cohomology of torsion sheaves on curves"
      url: "https://stacks.math.columbia.edu/tag/03SC"
      locator: "The generic-point vanishing is reconstructed from finite hypercovers below."
    - title: "The Stacks Project, Hypercoverings, §25.10"
      url: "https://stacks.math.columbia.edu/tag/01GZ"
---

## Statement

Let k be algebraically closed, let C be an integral finite-type k-curve with generic point j:η=Spec K→C, and let ℓ≠char(k). For every n≥1 and every étale A_n=Z/ℓⁿZ-module sheaf F on η, the unnormalized right-derived direct image Rj_*F exists in the fixed small-site tower model and R^qj_*F=0 for q≥2. The construction uses finite étale hypercovers and no choice axiom or selected separable closure. This is a generic-point direct-image statement; it does not by itself assert a global curve cohomological bound, proper base change, or normalized adic proper pushforward.

## Facts & Assumptions

**Given:** k, C, η, ℓ, n and F as stated, with the specified small-site conventions.

[F1] For every finitely generated one-variable field L/k and arbitrary finite-coefficient sheaf on Spec L, its finite-hypercover cohomology vanishes in degrees q≥2 without a choice premise. [[lem-one-variable-function-field-finite-etale-hypercover-cd-one-in-zf]]

[F2] The tower and finite-coefficient sheaf categories use levelwise exactness and the bounded-below derived localization. [[def-derived-category-of-etale-sheaves]]

[F3] Étale maps are universally open and quasi-finite at specified points without a choice premise. [[lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf]]

## Proof

1.1 A quasi-compact étale η-scheme is a finite disjoint union of spectra of finite separable K-extensions. Every finite truncated hypercover of such an object has finitely many component fields through any fixed degree. One finite Galois extension of K splits all of them; all choices are finite. After this faithfully flat étale base change, each matching map is a surjection of finite sets. Finite cone-filling gives exactness of the normalized free A_m-sheaf hypercover chain through the specified degree. Its relevant image quotients become direct summands of finite free modules, hence free, after the same cover. Thus they are locally finite free, and tensoring their defining short exact sequences with any A_n-module preserves monomorphisms without using geometric points or a selected closure. [F2, F3, given, choose, algebra]

1.2 For a finite hypercover H, a level n and q≥1, form the free tower E(n,W) with level m equal to A_m[h_W] for m≤n and zero above n. As in step 1.1, Q=im(P_q→P_{q−1}) has locally finite-free quotient and Q_n⊗A_m≅Q_m. Hence q-cocycles at level n are exactly maps Q→F•. Let I range over the fixed set of all finite hypercover diagrams, levels and positive degrees, put M_i(F•)=Hom(Q_i,F•), and push out the sum of Q_i⊗M_i(F•)→P_{q−1,i}⊗M_i(F•) along evaluation into F•. The first map is monic by the local flatness just proved. The resulting F•→G(F•) is a natural monomorphism; the rule G is additive and every indexed cocycle is a coboundary in G(F•). [F2, step 1.1, construct, algebra]

1.3 Iterate this specified additive construction and take its countable union I(F•). On a finite étale field object, sections of this union are the union of the sections: each covering has a finite subcover, so finitely many representatives and gluing equalities occur at one finite stage. Every positive hypercover cocycle of I(F•) therefore appears at some stage and dies at the next. Iterating the same construction on the successive cokernels gives a functorial additive exact resolution by towers acyclic for finite-hypercover cohomology on every finite étale η-object. Finite common refinements and finite prism homotopies give the long exact hypercover δ-functor, with H⁰ equal to sections. Applying the resolution to bounded-below complexes and totalizing along finite diagonals gives a right-derived tower direct image: an exact bounded-below complex of such acyclic terms stays exact after j_* by the long exact sequence and dimension shifting on each quasi-compact étale C-object. [F2, step 1.2, construct, algebra]

2.1 Let V→C be a quasi-compact étale object. Its generic fibre V_η is a finite disjoint union of spectra of finite separable extensions K_a/K. Each K_a/k is again finitely generated of transcendence degree one. By [F1], for each a the finite-hypercover cohomology of the restriction of F to Spec K_a is zero in degrees q≥2. Taking the finite product, H^q_fhyp(V_η,F)=0 for q≥2. By the resolution in step 1.3, the cohomology presheaf of Rj_*F on the qc étale basis has precisely these values. It is therefore zero in degrees q≥2, and so is its sheafification R^qj_*F. [F1, step 1.3, given, algebra] ∎

## Scope

The proof constructs unnormalized generic-point direct images only. It does not prove a Leray comparison for the composite C→Spec k, compute R¹j_*, or establish global proper-curve cohomological dimension and finiteness.
