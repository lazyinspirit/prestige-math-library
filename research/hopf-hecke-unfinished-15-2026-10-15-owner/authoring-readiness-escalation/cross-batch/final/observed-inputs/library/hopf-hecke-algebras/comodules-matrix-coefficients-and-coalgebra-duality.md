---
page: comodules-matrix-coefficients-and-coalgebra-duality
title: "Comodules, Matrix Coefficients, and Coalgebra Duality"
status: draft
items:
  - def-hh-right-comodule-and-comodule-morphism
  - def-hh-dual-algebra-and-rational-module
  - lem-hh-comodule-kernels-quotients-and-coefficient-identities
  - lem-hh-every-comodule-element-lies-in-a-finite-subcomodule
  - thm-hh-comodules-and-rational-dual-modules
  - thm-hh-finite-algebra-coalgebra-duality
examples: []
---

Right coactions have the form $\rho:M\to M\otimes C$. Matrix coefficients depend on a chosen finite basis, while their comatrix identities express basis-independent coaction equations. For infinite-dimensional $C$, modules over the full dual $C^*$ correspond to comodules only on the rational subcategory. Full algebra-coalgebra duality is stated for finite-dimensional objects.

## Development

[[def-hh-right-comodule-and-comodule-morphism]] fixes the right-handed structure maps, comodule maps, and embedded subcomodules. [[lem-hh-comodule-kernels-quotients-and-coefficient-identities]] constructs kernels, images, and quotients under its explicit AC hypothesis, checks the regular comodule, and derives the finite-basis coefficient identities in both directions.

[[lem-hh-every-comodule-element-lies-in-a-finite-subcomodule]] proves local finiteness element-by-element and separates the arbitrary-coalgebra AC argument from the finite-dimensional choice-free case. [[def-hh-dual-algebra-and-rational-module]] fixes the convolution and rationality conventions; [[thm-hh-comodules-and-rational-dual-modules]] supplies the reconstruction, uniqueness, coaction axioms, and morphism proof.

[[thm-hh-finite-algebra-coalgebra-duality]] transposes multiplication and unit only for finite-dimensional algebras, proves map reversal and biduality, and distinguishes finite algebra/coalgebra objects from finite-dimensional comodules over an infinite coalgebra.

Prerequisites: [[tensor-coherence-and-algebraic-descent]] and [[coalgebras-counits-and-the-fundamental-coalgebra-theorem]]. The current HH-2 draft supplies the coalgebra and coalgebra-map definition and a finite comatrix coalgebra with its coassociativity and counit proof; these exact interfaces were checked against this page's uses. The batch evidence records the reviewed excerpts and does not imply independent approval. The companion [[comodules-matrix-coefficients-and-coalgebra-duality-examples]] develops the group-like and two-dimensional calculations and the infinite-dimensional nonrational counterexample.
