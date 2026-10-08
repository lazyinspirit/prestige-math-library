---
page: coalgebras-counits-and-the-fundamental-coalgebra-theorem
title: "Coalgebras, Counits, and the Fundamental Coalgebra Theorem"
status: published
items: []
examples: []
---

A coalgebra reverses the structure arrows of an associative algebra: one input is split into two outputs. Associativity becomes coassociativity, and the scalar-valued counit deletes either output. These are equations of linear maps with the tensor constraints supplied by HH-1, rather than equations of fictional uniquely determined Sweedler components.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-coalgebra-and-coalgebra-map.** Specify Δ:C→C⊗C, ε:C→k, (Δ⊗id)Δ=(id⊗Δ)Δ, and (ε⊗id)Δ=id=(id⊗ε)Δ. Coalgebra maps preserve both maps. This is a property-defined class, with existence established by the explicit examples below.

**lem-hh-counit-uniqueness-and-finite-sweedler-calculus.** If ε and ε′ are counits, apply ε⊗ε′ to Δ to prove equality. Explain Sweedler notation as a finite tensor sum; every subsequent contraction must be a linear map and invariant under changing that sum.

**def-hh-subcoalgebras-coideals-and-quotient-coalgebras.** Define subcoalgebra, and coideal I with Δ(I)⊆I⊗C+C⊗I and ε(I)=0. The quotient formula is conditional until the following descent theorem proves existence.

**thm-hh-coalgebra-quotient-and-kernel-descent.** Use the tensor-kernel lemma to prove Δ descends to C/I and the two coalgebra identities descend. A coalgebra-map kernel is a coideal over a field. Give the universal property and prove sums of subcoalgebras are subcoalgebras.

**lem-hh-finite-comatrix-coalgebra-exists.** On basis c_ij set Δ(c_ij)=Σ_l c_il⊗c_lj and ε(c_ij)=δ_ij. Verify both coalgebra axioms by finite index reordering. The one-dimensional group-like coalgebra Δ(c)=c⊗c, ε(c)=1 supplies a nonzero entrance example. Defer polynomial primitive examples until the polynomial construction and bialgebra descent in HH-4; no later construction is assumed here.

**thm-hh-fundamental-theorem-of-coalgebras.** For c, choose Δ(c)=Σa_i⊗b_i with b_i independent. Coassociativity and coefficient functionals give Δ(span a_i)⊆span a_i⊗C. Its finite matrix coefficients c_ij satisfy Δ(c_ij)=Σ_l c_il⊗c_lj; counitality puts c in their span. Sum these subcoalgebras for a finite set. Prove coefficient functionals extend if C is infinite; declare AC exactly there, or reconstruct the required finite coefficient maps by a quotient separation supplier.

## Reading and applications

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]]. The companion [[coalgebras-counits-and-the-fundamental-coalgebra-theorem-examples]] develops the calculations and failures needed to test these constructions.
