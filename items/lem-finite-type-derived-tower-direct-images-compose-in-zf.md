---
id: lem-finite-type-derived-tower-direct-images-compose-in-zf
kind: lemma
title: "Composition of finite-type derived étale tower direct images without choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - lem-qc-etale-hypercover-acyclic-tower-resolutions-in-zf
  - def-derived-category-of-etale-sheaves
  - lem-finite-morphism-etale-direct-image-calculus
proof_strategy: direct
axiom_use: "No choice axiom is assumed; the universal hypercover resolution is additive and its cochain witnesses are finite."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Stacks Project, Derived Categories of Sheaves, composition of derived functors"
      url: "https://stacks.math.columbia.edu/tag/015N"
      locator: "The acyclicity and composition comparison are reconstructed below in the finite-hypercover tower model."
---

## Statement

Let k be algebraically closed and let Y→^f S→^g T be morphisms of finite-type k-schemes. In the bounded-below unnormalized A_•=Z/ℓ^•-module étale tower categories, the choice-free finite-hypercover derived direct images satisfy a natural isomorphism

    Rg_* Rf_* K ≅ R(g∘f)_* K

for every bounded-below tower complex K. In particular, for a finite morphism f:Y→S, RΓ(S,f_*K)≅RΓ(Y,K), since finite direct image is exact. No choice axiom is assumed. The statement does not assert normalized constructibility, finite Tor amplitude or proper base change.

## Facts & Assumptions

**Given:** k, f, g and K as in the statement, with the fixed small étale sites.

[F1] The finite-hypercover construction gives an additive universal acyclic tower resolution on finite-type k-sites and uses it to construct right-derived direct image on bounded-below complexes. [[lem-qc-etale-hypercover-acyclic-tower-resolutions-in-zf]]

[F2] The tower categories have levelwise exactness and bounded-below derived localizations. [[def-derived-category-of-etale-sheaves]]

[F3] Direct image by a finite morphism is exact on finite-coefficient étale sheaves without a choice premise. [[lem-finite-morphism-etale-direct-image-calculus]]

## Proof

1.1 Let F be a tower on Y and I(F) the canonical acyclic tower from [F1]. Fix a qc étale object W→T and a finite truncated hypercover H of S_W=S×_T W. Each component of H is qc étale over S, so pulling it back along f gives a qc étale object of Y. The generic-free base change H_Y is a finite truncated hypercover of Y_W=Y×_T W. A cochain of f_*F on H is exactly a cochain of F on H_Y. The universal pushout defining F→G(F) in [F1] includes this particular finite H_Y-cocycle, and its canonical cochain makes it a boundary on the same diagram. Thus every positive hypercover class of f_*F on S_W is killed by f_*F→f_*G(F). [F1, given, algebra]

1.2 The construction I(F) is the countable union of its canonically iterated monomorphisms. For a qc étale component V of H, f^{-1}V is a qc étale Y-object, so sections of that union over f^{-1}V have finite-stage representatives by the finite-cover argument of [F1]. A cochain on H has finitely many components in the relevant degrees; taking the maximum of their finitely many stage indices and applying step 1.1 at the next stage proves H^p(S_W,f_*I(F))=0 for every p>0. Therefore f_*I(F) is g_*-acyclic on the qc étale basis of T. The same argument applies to each term of the successively constructed acyclic resolution I^•(F). [F1, step 1.1, algebra]

2.1 Apply the additive resolution I^• termwise to K and totalize. It computes Rf_*K by [F1]; its f_*-image is a bounded-below complex with g_*-acyclic terms by step 1.2. Applying g_* directly therefore computes Rg_*Rf_*K. Term by term g_*f_*=(gf)_*, and the same resolution computes R(gf)_*K by [F1]. The identity on this common total complex gives the natural isomorphism. Finite direct image is exact by [F3], so for finite f its derived action is f_* itself; taking T=Spec k gives the displayed global-sections case. [F1, F2, F3, step 1.2, algebra] ∎

## Scope

This proves composition only in the unnormalized tower model. It does not show that either derived output lies in the normalized constructible finite-Tor subcategory.
