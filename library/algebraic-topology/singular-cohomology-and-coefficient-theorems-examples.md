---
page: singular-cohomology-and-coefficient-theorems-examples
title: Singular Cohomology and Coefficient Theorems — Examples
status: draft
examples:
  - ex-integral-cohomology-of-real-projective-space-from-uct
  - ex-cohomology-of-lens-spaces-from-uct
  - ex-field-cohomology-of-an-infinite-wedge-of-circles
  - ex-homology-of-a-product-of-spheres-by-kunneth
  - ex-tor-term-in-the-homology-of-a-product-of-real-projective-spaces
  - ex-kronecker-pairing-for-a-cellular-circle-generator
  - cex-the-integral-kronecker-map-need-not-be-an-isomorphism
  - cex-the-uct-splitting-is-not-natural
---

These calculations use the UCT and Kunneth sequences from [[singular-cohomology-and-coefficient-theorems|Singular Cohomology and Coefficient Theorems]], with AC inherited from those arguments. Every computation distinguishes the coefficient group and the two adjacent homology degrees in UCT.

Real projective space illustrates the alternating cellular boundary and the shift of homology torsion into cohomology. The lens-space example constructs its quotient cell structure and computes the attaching winding number before applying UCT, including the case $p=1$. For the countable CW wedge of circles, homology is a direct sum while field cohomology is a full product; over $\mathbb F_2$, binary enumeration and diagonalization distinguish their cardinalities.

Products of spheres have four cross-product generators, with two independent middle generators when the sphere dimensions agree. The product of two three-dimensional real projective spaces adds a nonzero order-two Tor class in degree three, outside the tensor image. These examples identify the actual maps as well as the abstract groups.

The circle calculation obtains a singular cocycle class evaluating to one on the oriented cellular homology generator. The final counterexamples show the limits of that behavior: integral evaluation on $\mathbb{RP}^2$ has a nonzero kernel, and the pinch map $\mathbb{RP}^2\to S^2$ makes any proposed natural mod-two UCT section fail its naturality square. The latter uses the proved singular cohomology pullback of the quotient, so no identification of cellular and singular cochains is assumed.
