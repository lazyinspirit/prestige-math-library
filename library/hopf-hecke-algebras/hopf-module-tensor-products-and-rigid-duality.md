---
page: hopf-module-tensor-products-and-rigid-duality
title: "Hopf Module Tensor Products and Rigid Duality"
status: published
items: []
examples: []
---

Tensor representations explain why a bialgebra has a coproduct and counit; finite dual representations explain the antipode. This page constructs every action before naming the category structure and proves its natural constraints concretely. It distinguishes a left dual from a right dual and an ordinary vector-space bidual from an H-module bidual.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-module-category-and-tensor-action.** Define the category of left H-modules using the published module objects/maps. Set h(v⊗w)=Σh_1v⊗h_2w and hk=ε(h)k. Balanced descent and Δ multiplicativity prove the action exists.

**thm-hh-bialgebra-module-tensor-coherence.** Check associator and both unit maps are H-linear using coassociativity/counitality, then inherit HH-1 pentagon and triangle. Prove naturality explicitly. Conversely recover the bialgebra axioms from regular-module actions and coherence.

**def-hh-left-dual-of-a-finite-hopf-module.** For finite V define h·f(v)=f(S(h)v). Evaluation V*⊗V→k and coevaluation k→V⊗V* are specified using HH-1; anti-multiplicativity proves it is a module action.

**thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities.** Prove both maps are H-linear by both antipode identities; verify the two triangle compositions in a finite dual basis and show basis independence. Coevaluation for infinite V is not claimed.

**lem-hh-right-dual-and-bidual-conditions.** Under explicit bijective S define the right dual using S^-1 and verify its evaluation/coevaluation. The vector-space identification V≅V** twists action by S²; prove this formula and require S²=id or specified pivotal correction for an H-linear identification.

## Reading and applications

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]], [[comodules-matrix-coefficients-and-coalgebra-duality]], [[bialgebras-convolution-and-antipode-identities]], [[hopf-ideals-finite-duals-and-basic-constructions]]. The companion [[hopf-module-tensor-products-and-rigid-duality-examples]] develops the calculations and failures needed to test these constructions.
