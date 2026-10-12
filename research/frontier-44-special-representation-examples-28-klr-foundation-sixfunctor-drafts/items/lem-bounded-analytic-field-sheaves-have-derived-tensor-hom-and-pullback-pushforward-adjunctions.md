---
id: lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions
kind: lemma
title: Derived tensor–Hom and inverse/direct image for field sheaves
status: draft
origin: pipeline
deps:
- lem-ringed-space-module-sheaves-enough-injectives
- lem-bounded-below-complexes-admit-injective-replacements
- thm-injective-complexes-model-the-bounded-below-derived-category
- lem-stalk-inverse-image-sheaf
- thm-exactness-of-sheaves-stalkwise
- thm-inverse-direct-image-adjunction
- def-sheaf-hom
- thm-extension-by-zero-adjunction-exactness
- def-axiom-of-choice
- lem-flasque-kernel-lifts-quotient-sections
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Verdier, Dualité dans la cohomologie des espaces localement compacts, exposé300
    url: https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf
  - title: Stacks Project, Cohomology of Sheaves §§16–18
    url: https://stacks.math.columbia.edu/download/cohomology.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume AC. For a continuous map $f:X\to Y$, inverse image of $k$-sheaves is exact and $f^*\dashv Rf_*$. For bounded complexes $A,B$, their derived tensor over $k$ is their signed total tensor, and for bounded $A$ and bounded-below $B$, $R\mathcal Hom(A,B)$ is computed by $\mathcal Hom^\bullet(A,I_B)$ in a $k$-linear bounded-below injective model. Flasque $k$-sheaves are acyclic for sections on every open set. The tensor–Hom adjunction and their dg associativity, evaluation and symmetry identities are natural. No bounded-constructibility claim for internal Hom is made without the local geometric supplier.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, with k-linear sheaves and the declared Axiom of Choice.

[F1] The exact supplier [[lem-ringed-space-module-sheaves-enough-injectives]] is used with its stated hypotheses.

[F2] The exact supplier [[lem-bounded-below-complexes-admit-injective-replacements]] is used with its stated hypotheses.

[F3] The exact supplier [[thm-injective-complexes-model-the-bounded-below-derived-category]] is used with its stated hypotheses.

[F4] The exact supplier [[lem-stalk-inverse-image-sheaf]] is used with its stated hypotheses.

[F5] The exact supplier [[thm-exactness-of-sheaves-stalkwise]] is used with its stated hypotheses.

[F6] The exact supplier [[thm-inverse-direct-image-adjunction]] is used with its stated hypotheses.

[F7] The exact supplier [[def-sheaf-hom]] is used with its stated hypotheses.

[F8] The exact supplier [[thm-extension-by-zero-adjunction-exactness]] is used with its stated hypotheses.

[F9] The exact supplier [[def-axiom-of-choice]] is used with its stated hypotheses.

[F10] Under AC a short exact sequence of underlying abelian sheaves with flasque kernel lifts every section, and a flasque middle term has flasque quotient ([[lem-flasque-kernel-lifts-quotient-sections]]).

## Proof

1.1 The inverse-image stalk is (f^{-1}F)_x=F_{f(x)}. Thus f*=f^{-1} is exact, sends quasi-isomorphisms to quasi-isomorphisms, and gives an exact functor on derived categories. The sheaf inverse/direct image adjunction is k-linear: its two transpositions send a section to its restriction/colimit class, preserving scalar multiplication. Therefore f*⊣f_* in k-sheaves. For an injective I on X, Hom_Y(-,f_*I)=Hom_X(f*(-),I) is exact, so f_*I is injective. Applying the chain-Hom adjunction to injective target complexes gives f*⊣Rf_* on D^+. The triangle identities are the section-level restriction/gluing identities; no separate choices of derived unit or counit are made. [given, construct, algebra]

1.2 Define F⊗_kG by sheafifying the sectionwise tensor presheaf. Its stalk is F_x⊗_kG_x: filtered colimits commute with finite tensor expressions. Define internal Hom on U by k-linear sheaf morphisms F|U→G|U. The elementary sheaf adjunction Hom_X(H⊗F,G)=Hom_X(H,Hom(F,G)) follows locally from the vector-space tensor-Hom transposition and gluing; the unit is h↦(f↦h⊗f), and evaluation sends h⊗φ to φ(h). All k-vector spaces are flat, hence tensoring sheaves is exact on stalks. A bounded complex A is K-flat: filter the finite-column total tensor with an acyclic complex by A-degree, whose successive columns are acyclic exact tensors; finite induction makes the total complex acyclic. Therefore A⊗^L B is the ordinary signed total tensor of bounded representatives, independent of those representatives. [given, construct, algebra]

1.3 Let B→I be a bounded-below injective replacement and A a bounded representative. Define RHom(A,B)=Hom•(A,I), with degree-n term the finite product of Hom(A^p,I^{p+n}) and differential d(φ)=d_Iφ−(−1)^nφd_A. Each sheaf Hom(A^p,I^q) is injective, since it is right adjoint to the exact functor −⊗A^p. The total complex is bounded below and termwise injective (only finitely many p occur). It is therefore K-injective. Changing A by a quasi-isomorphism changes this total Hom by a quasi-isomorphism: for every open U, its cone's sections are Hom•_X(j_U!Cone(A)|U,I), which is acyclic because j_U! is exact and I is K-injective. A sectionwise acyclic complex is stalkwise acyclic because stalks are exact filtered colimits. Changing I is handled by its homotopy-equivalence comparison. Thus this is the actual internal derived Hom, not sectionwise Hom of stalks. [given, construct, algebra]

1.4 For flasque acyclicity in the k-linear category, an injective k-sheaf is flasque because Hom(j_U!k_U,I)=I(U) and the stalkwise monomorphism j_U!k_U→j_V!k_V for U⊂V lets injectivity extend every section. Embed a flasque F into such an I. The underlying exact sequence has flasque kernel; [F10] shows that the quotient Q is flasque and I(U)→Q(U) is onto for every open U. The k-linear derived long exact sequence gives H^1(U,F)=0 and H^{n+1}(U,F)=H^n(U,Q) for n≥1. Repeating with Q and inducting on the requested degree proves all positive groups vanish. For a bounded-below flasque complex, the same degreewise acyclic-resolution comparison computes derived sections on each open by its ordinary section complex. No injective k-sheaf is assumed injective as an abelian-group sheaf. [F10, given, construct, algebra]

2.1 The signed chain transposition Hom•(C⊗A,I)=Hom•(C,Hom•(A,I)) is an isomorphism: a degree-n map out of C^r⊗A^p corresponds to the same bilinear map with its Koszul reordering; both differentials are d_Iφ−(−1)^nφd_source. Since I and Hom•(A,I) are K-injective and bounded C is K-flat, H^0 gives tensor⊣RHom in D^b, with D^+ target. Restriction to opens gives the internal version. Associativity, symmetry, evaluation and currying commute because they send pure tensors to the same maps with the same permutation sign. Pentagon, symmetry and triangle identities hold on pure tensors, hence on sheaves and their derived complexes. This supplies an actual dg model for these operations. [given, construct, algebra] ∎

