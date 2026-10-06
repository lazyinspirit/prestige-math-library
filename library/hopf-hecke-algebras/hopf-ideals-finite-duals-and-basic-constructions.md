---
page: hopf-ideals-finite-duals-and-basic-constructions
title: "Hopf Ideals, Finite Duals, and Basic Constructions"
status: draft
items: []
examples: []
---

A quotient Hopf algebra requires three different descents: multiplication, coproduct/counit, and antipode. Linear duals require a different check: transposed multiplication must land in an algebraic tensor product. Keeping these obligations separate prevents both the missing-counit-ideal error and the infinite full-dual error.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-hopf-ideal-and-hopf-subalgebra.** Define a two-sided ideal I with Δ(I)⊆I⊗H+H⊗I, ε(I)=0 and S(I)⊆I. Define Hopf subalgebra by closure under all structural maps; an arbitrary subbialgebra is not silently called Hopf.

**thm-hh-hopf-quotient-kernel-and-tensor-product-constructions.** Prove all quotient maps descend and satisfy the Hopf equations. Over a field, prove kernels of Hopf maps satisfy every condition. Construct tensor products using checked tensor multiplication, flipped middle factors, counit and tensor antipode; prove axioms.

**thm-hh-finite-dimensional-dual-hopf-algebra.** Use HH-1 finite duality and HH-3 algebra/coalgebra duality, then transpose the bialgebra and antipode equations. The antipode is S*; no prior bijectivity assumption is needed.

**def-hh-finite-dual-of-an-associative-algebra.** Set A° to functionals annihilating a finite-codimensional two-sided ideal. It is a vector subspace: use intersection ideals and the finite-dimensional embedding A/(I∩J)→A/I⊕A/J. Define transposed multiplication only after proving its image lies in A°⊗A°.

**thm-hh-finite-dual-coalgebra-and-hopf-descent.** For f factoring through A/I, transpose quotient multiplication by finite duality to obtain a tensor in (A/I)*⊗(A/I)*; evaluation separation proves independence and coalgebra axioms. Prove finite-dual functionals are exactly coefficients of finite representations: a quotient regular representation supplies one direction; ker(ρ) has finite codimension for the other. For bialgebra H, (ρ⊗σ)Δ is a finite representation and gives convolution closure. For Hopf H, h↦ρ(S(h))^t is a representation because S and transpose both reverse products; its coefficients are f∘S and prove antipode closure. This elementary dual-action proof is supplied here, before HH-6. Pairing finite tensors proves every remaining bialgebra/antipode identity.

**lem-hh-taft-algebra-pbw-and-hopf-structure.** Fix N>1 and a given primitive Nth root ζ in a field k, with char(k)∤N. On the supplied basis g^i x^j (0≤i,j<N) define (g^i x^j)(g^a x^b)=ζ^(−aj)g^(i+a mod N)x^(j+b) if j+b<N, and zero otherwise. Check associativity from the exponent cocycle and degree truncation; prove this algebra is exactly the presentation g^N=1, x^N=0, gx=ζxg by spanning and this independent model. Set Δg=g⊗g, Δx=1⊗x+x⊗g, εg=1, εx=0, Sg=g^−1, Sx=−xg^−1. Derive the quantum-binomial recursion for BA=ζAB; the interior Nth coefficients vanish because 1−ζ^N=0 and 1−ζ^j≠0 for 0<j<N. Verify each relation is killed by Δ, ε and the reversing S map, then both antipode equations on generators and their extension to products.

## Reading and applications

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]], [[coalgebras-counits-and-the-fundamental-coalgebra-theorem]], [[comodules-matrix-coefficients-and-coalgebra-duality]], [[bialgebras-convolution-and-antipode-identities]]. The companion [[hopf-ideals-finite-duals-and-basic-constructions-examples]] develops the calculations and failures needed to test these constructions.
