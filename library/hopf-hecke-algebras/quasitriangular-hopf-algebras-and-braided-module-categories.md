---
page: quasitriangular-hopf-algebras-and-braided-module-categories
title: "Quasitriangular Hopf Algebras and Braided Module Categories"
status: draft
items: []
examples: []
---

An ordinary flip generally fails to intertwine a noncocommutative tensor action. An R-matrix corrects the flip and must satisfy compatibility with all tensor products, not merely a Yang–Baxter equation on one representation. Leg embeddings and all tensor formulas are defined before the quasitriangular axioms are introduced.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-leg-notation-and-quasitriangular-hopf-algebra.** Define R_12,R_13,R_23 by the unit embeddings and checked flips. A quasitriangular structure is invertible R∈H⊗H with RΔ(h)=Δ^op(h)R, (Δ⊗id)R=R_13R_23, (id⊗Δ)R=R_13R_12. The finite algebraic tensor setting is explicit.

**lem-hh-quasitriangular-counit-and-yang-baxter-identities.** Derive both counit normalizations from the hexagons and invertibility, then derive R_12R_13R_23=R_23R_13R_12 by the exact leg calculations. QYBE alone does not imply quasitriangularity.

**def-hh-braiding-and-triangular-structure.** Define braiding as a natural family of invertible module maps c_VW:V⊗W→W⊗V satisfying the two stated hexagons. Define triangular by R_21R=1. The next theorem supplies existence of the family τR.

**thm-hh-r-matrix-constructs-a-module-braiding.** Prove τR is well-defined, H-linear, natural, invertible and satisfies both hexagons; then triangular gives c_WV c_VW=id. Conversely recover algebraic R from braiding on regular modules only with the full naturality/detection hypotheses proved locally.

**lem-hh-local-braiding-operators-obey-braid-relations.** On a fixed tensor power prove adjacent braid relations from QYBE or the hexagons and distant commutation from disjoint factors. This local operator lemma is sufficient for the later Hecke action and does not relocate the Braid Groups category.

## Reading and applications

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]], [[bialgebras-convolution-and-antipode-identities]], [[hopf-module-tensor-products-and-rigid-duality]]. The companion [[quasitriangular-hopf-algebras-and-braided-module-categories-examples]] develops the calculations and failures needed to test these constructions.
