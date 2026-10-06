---
page: hopf-modules-coinvariants-and-the-fundamental-theorem
title: "Hopf Modules, Coinvariants, and the Fundamental Theorem"
status: draft
items: []
examples: []
---

A Hopf module carries both an action and a coaction with an exact compatibility equation. Its decomposition is the elementary engine for integrals and finite-dimensional antipode bijectivity, so it must be proved before those consequences. Coinvariants are a kernel-defined subspace, not an assumed complement.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-right-right-hopf-module-and-coinvariants.** Define right action and right coaction with ρ(mh)=Σm_0h_1⊗m_1h_2. Set M^coH={m:ρ(m)=m⊗1}; prove it is a subspace, and construct the free Hopf module V⊗H with both maps.

**lem-hh-hopf-module-coinvariant-projection.** Define P(m)=Σm_0S(m_1). Use coassociativity, antipode anti-coalgebra and cancellation to prove ρ(P(m))=P(m)⊗1 and P is the identity on coinvariants. Individual Sweedler terms need not be coinvariant.

**thm-hh-fundamental-theorem-of-hopf-modules.** Construct α:M^coH⊗H→M, n⊗h↦nh, and β(m)=ΣP(m_0)⊗m_1. Prove β lands in M^coH⊗H by applying the range-valued linear map P:M→M^coH in the first tensor factor; compute both composites explicitly. α and β respect action/coaction. No bijective-antipode hypothesis is used.

**cor-hh-hopf-module-functor-equivalence.** Describe both functors and natural unit/counit using the explicit maps, then prove they are inverse equivalences. This requires only the concrete category/functor definitions supplied in this item, not general category-equivalence folklore.

## Reading and applications

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]], [[comodules-matrix-coefficients-and-coalgebra-duality]], [[bialgebras-convolution-and-antipode-identities]], [[hopf-module-tensor-products-and-rigid-duality]]. The companion [[hopf-modules-coinvariants-and-the-fundamental-theorem-examples]] develops the calculations and failures needed to test these constructions.
