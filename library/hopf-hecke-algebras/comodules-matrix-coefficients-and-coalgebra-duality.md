---
page: comodules-matrix-coefficients-and-coalgebra-duality
title: "Comodules, Matrix Coefficients, and Coalgebra Duality"
status: published
items: []
examples: []
---

A right comodule records a vector together with the coalgebra coefficients of its transformation. The definition is the arrow-reversed counterpart of a left module. Matrix coefficients make its axioms explicit and show why dual-algebra descriptions need a rationality restriction in infinite dimension.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-right-comodule-and-comodule-morphism.** Define ρ:M→M⊗C with (ρ⊗id)ρ=(id⊗Δ)ρ and (id⊗ε)ρ=id. Define compatible linear maps and subcomodules. Existence: the regular comodule C and finite matrix-comodules are checked locally.

**lem-hh-comodule-kernels-quotients-and-coefficient-identities.** Use tensor exactness to construct kernel, image and quotient comodules. In a finite basis write ρ(v_j)=Σ_i v_i⊗c_ij; compare coefficients to prove the comatrix identities. No basis coefficient is treated as canonical.

**lem-hh-every-comodule-element-lies-in-a-finite-subcomodule.** Given ρ(m)=Σv_i⊗c_i with c_i independent, coassociativity shows span(v_i) is a finite right subcomodule and counitality puts m in it. As in HH-2, state AC for any extension of finite coordinate functionals.

**def-hh-dual-algebra-and-rational-module.** Give convolution multiplication on C* explicitly. A C*-module is rational when every vector admits a finite tensor whose evaluation gives its entire C*-orbit; existence/uniqueness of this tensor must precede naming its coaction.

**thm-hh-comodules-and-rational-dual-modules.** Prove dual functionals separate finite tensors, reconstruct the unique coaction from rationality, and derive its axioms from the module laws. Conversely obtain the C*-action from a coaction. For finite C every module is rational; no such assertion for general C.

**thm-hh-finite-algebra-coalgebra-duality.** Transpose multiplication and unit under finite tensor duality to make A* a coalgebra; transpose Δ,ε to make C* an algebra. Prove functoriality, reversal and the finite bidual equivalence. Distinguish finite objects from finite-dimensional comodules over an infinite coalgebra.

## Reading and applications

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]], [[coalgebras-counits-and-the-fundamental-coalgebra-theorem]]. The companion [[comodules-matrix-coefficients-and-coalgebra-duality-examples]] develops the calculations and failures needed to test these constructions.
