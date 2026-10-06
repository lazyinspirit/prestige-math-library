---
page: bialgebras-convolution-and-antipode-identities
title: "Bialgebras, Convolution, and Antipode Identities"
status: draft
items: []
examples: []
---

The diagonal action of a group on two representations uses g↦g⊗g, while a primitive symmetry uses x↦x⊗1+1⊗x. Requiring this splitting to respect multiplication leads to the bialgebra axioms. Inversion is then encoded by convolution, a multiplication on linear maps that differs from composition.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-bialgebra-and-bialgebra-map.** Define a coalgebra and a unital k-algebra on H with Δ and ε unital algebra maps, using the published multiplication on H⊗H. Equivalently m and u are coalgebra maps; prove the equivalence by writing all diagrams.

**lem-hh-convolution-algebra-associativity-and-unit.** On Hom(C,A) set f*g=m(f⊗g)Δ. HH-1 descent gives a linear map; associativity follows from the threefold tensor diagram and uε is the two-sided unit. This works without finite dimensions.

**def-hh-hopf-algebra-and-antipode.** A Hopf algebra is a bialgebra for which id_H has a two-sided convolution inverse S. The two equations are m(S⊗id)Δ=uε=m(id⊗S)Δ. This does not assert compositional bijectivity of S.

**thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication.** Prove uniqueness in a unital associative convolution algebra; then use convolution on Hom(H⊗H,H) and Hom(H,H⊗H) to prove S(ab)=S(b)S(a), ΔS=(S⊗S)τΔ, S(1)=1 and εS=ε. Supply both inverse calculations, not a citation to antipode folklore.

**lem-hh-group-and-polynomial-hopf-algebras-exist.** Construct kG as the free vector space on the supplied group, and k[x] with primitive x. Verify all identities on bases or generators after algebra descent. For finite G construct k^G using finite-set tensor identification; infinite all-functions Hopf structure is not claimed.

**lem-hh-commutative-or-cocommutative-antipode-is-involutive.** Show S²=id under either specified hypothesis via convolution inverse uniqueness. Neither this conclusion nor antipode bijectivity is part of the general definition.

## Reading and applications

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]], [[coalgebras-counits-and-the-fundamental-coalgebra-theorem]], [[comodules-matrix-coefficients-and-coalgebra-duality]]. The companion [[bialgebras-convolution-and-antipode-identities-examples]] develops the calculations and failures needed to test these constructions.
