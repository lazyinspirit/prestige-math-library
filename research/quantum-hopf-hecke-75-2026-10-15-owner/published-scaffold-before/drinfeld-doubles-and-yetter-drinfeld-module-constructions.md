---
page: drinfeld-doubles-and-yetter-drinfeld-module-constructions
title: "Drinfeld Doubles and Yetter–Drinfeld Module Constructions"
status: published
items: []
examples: []
---

The quantum double combines a finite Hopf algebra and its dual into an algebra with controlled cross-relations. Finite dimensionality and bijective antipode have already been established in HH-8, so neither is smuggled into the construction. Its tensor module description is given by an explicit Yetter–Drinfeld compatibility equation.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-finite-double-cross-relations.** Fix finite H with bijective S proved in HH-8. Write * for ordinary convolution and f⊙g=g*f for H*op multiplication. Use vector space D=H*op⊗H in normal order f h. Its crossing map χ(h⊗f)=Σ f_1(S(h_1))f_3(h_3)f_2⊗h_2 uses the ordinary dual coproduct Δf(x,y)=f(xy). Thus (f⊗h)(g⊗k)=Σ g_1(S(h_1))g_3(h_3)(g_2*f)⊗h_2k, with unit ε⊗1. This convention is chosen for direct left-left coaction evaluation; it is not the incompatible H*cop convention. The product is a candidate until the next distributive-law proof.

**lem-hh-double-crossing-map-and-associativity.** Pair χ(h⊗f) with x∈H to obtain Σ f(S(h_1)x h_3)⊗h_2. Check χ(1⊗f)=f⊗1 and χ(h⊗ε)=ε⊗h. The H multiplication distributive law has common paired value f(S(k_1)S(h_1)x h_3k_3)⊗h_2k_2. The H*op multiplication law has common paired value Σ g(S(h_2)x_1h_4)f(S(h_1)x_2h_5)⊗h_3. These equalities establish both crossing laws, hence the two associations of (f h)(g k)(p l) agree by successive crossings. The tensor normal form gives injective subalgebra embeddings; no unproved presented-algebra PBW is used.

**lem-hh-double-coalgebra-and-antipode-descent.** Set Δ_D(fh)=Σ(f_1h_1)⊗(f_2h_2) and ε_D(fh)=f(1)ε(h). Pairing the cross relation with x,y gives f(S(h_1)x h_3S(h_4)y h_6)⊗h_2⊗h_5, which cancels to f(S(h_1)xy h_4)⊗h_2⊗h_3 and proves coproduct multiplicativity. Define bar f=f∘S^−1 and S_D(fh)=S(h)bar f reversing products. Apply the inverse crossing to bar f S(h): its coefficients are f_1(S(h_1))f_3(h_3), so the defining crossing is preserved by reversal. Both antipode contractions on Δ(fh) reduce respectively to S(h_1)(bar f_1⊙f_2)h_2 and f_1h_1S(h_2)bar f_2; dual and H antipode identities give f(1)ε(h)1. Coassociativity and counits follow from the tensor coalgebra. This supplies Hopf structure before YD tensor modules and the canonical R theorem.

**def-hh-left-left-yetter-drinfeld-module.** Specify a left H action and left coaction δ(v)=Σv_-1⊗v_0 satisfying coassociativity/counitality and δ(hv)=Σh_1v_-1S(h_3)⊗h_2v_0. Compatible maps preserve both structures. Direct evaluation f·v=Σf(v_-1)v_0 obeys f·(g·v)=(g*f)·v, explaining why H*op occurs in the double. This definition asserts a property; the next equivalence supplies all double-module models.

**thm-hh-double-modules-and-yetter-drinfeld-modules.** Reconstruct δ(v)=Σh_i⊗f_i v from the H*op action, independently of dual basis. Its module law is exactly left-coaction coassociativity. The inverse crossing identity f h=Σf_1(h_1)f_3(S(h_3))h_2f_2 becomes precisely the displayed YD equation; the forward crossing is recovered by antipode cancellations, so both functors are inverse. Tensor structures use δ(v⊗w)=Σv_-1w_-1⊗v_0⊗w_0 and the diagonal H action; check compatibility by cancelling the middle S(h_3)h_4. Define c(v⊗w)=Σv_-1w⊗v_0 and c^−1(w⊗v)=Σv_0⊗S^−1(v_-1)w. Coassociativity and the inverse antipode identities prove both composites are identity; the YD equation proves H-linearity, and its coaction version proves H-colinearity. The two hexagons respectively expand Δ(v_-1) and the tensor product coaction, proving braiding without a later R theorem.

**thm-hh-finite-double-hopf-structure-and-canonical-r.** After the structural-map and YD equivalence suppliers, set R=Σ(f_i⊗1)⊗(ε⊗h_i), with dual-first leg order. The canonical tensor is basis independent; its inverse replaces h_i by S^−1(h_i), as verified by evaluating the dual leg and cancelling x_2S^−1(x_1) and S^−1(x_2)x_1. On every module τR is the proved YD braiding. Apply this to regular D modules: faithful tensor regular evaluation gives RΔ(d)=Δ^op(d)R and both quasitriangular hexagons from the already proved module identities. Alternatively the two hexagons follow directly by pairing Δf and by the reversed convolution product. No convention is borrowed from the defective extracted source equation.

## Reading and applications

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]], [[comodules-matrix-coefficients-and-coalgebra-duality]], [[bialgebras-convolution-and-antipode-identities]], [[hopf-ideals-finite-duals-and-basic-constructions]], [[hopf-module-tensor-products-and-rigid-duality]], [[finite-hopf-integrals-frobenius-duality-and-maschke]], [[quasitriangular-hopf-algebras-and-braided-module-categories]]. The companion [[drinfeld-doubles-and-yetter-drinfeld-module-constructions-examples]] develops the calculations and failures needed to test these constructions.
