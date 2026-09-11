---
page: singular-cohomology-and-coefficient-theorems
title: Singular Cohomology and Coefficient Theorems
status: draft
items:
  - def-singular-cochain-complex-with-coefficients
  - lem-the-singular-coboundary-squares-to-zero
  - def-singular-cohomology-with-coefficients
  - prop-singular-cohomology-is-contravariantly-functorial
  - thm-homotopic-maps-induce-equal-maps-in-singular-cohomology
  - def-relative-singular-cochain-complex
  - thm-long-exact-sequence-of-a-pair-in-singular-cohomology
  - thm-naturality-of-the-singular-cohomology-pair-sequence
  - thm-excision-for-singular-cohomology
  - thm-mayer-vietoris-sequence-in-singular-cohomology
  - def-kronecker-evaluation-pairing
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - lem-singular-uct-extension-from-cycle-projections
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
  - prop-the-cohomology-universal-coefficient-sequence-splits-nonnaturally
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - cor-integral-cohomology-detects-adjacent-homology-torsion
  - lem-singular-product-chain-equivalence-by-simplex-models
  - thm-topological-kunneth-short-exact-sequence-for-homology
  - prop-the-homology-kunneth-sequence-splits-nonnaturally
  - cor-field-kunneth-isomorphism-for-homology-of-products
  - def-additive-singular-cohomology-cross-product
  - lem-additive-singular-cohomology-cross-product-is-well-defined
  - thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses
  - cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms
  - lem-real-projective-space-cellular-homology-and-pinch-map
---

Singular cochains assign coefficient values to singular simplices and evaluate finite chains by finite sums. The positive convention $\delta\varphi=\varphi\partial$ controls every connecting map and cross-product sign on this page. Relative cochains are Hom on the relative chain quotient, equivalently cochains vanishing on the subspace. Their degreewise exact sequence gives the pair sequence; cover-small chain homotopies give excision and the ordered Mayer–Vietoris sequence with restriction difference $U$ minus $V$.

Evaluation connects cohomology to homology, but its kernel can contain adjacent-degree torsion. The local cycle-projection lemma constructs the UCT injection, proves its quotient independence and exactness, and compares length-one projective resolutions. Its topological specialization covers arbitrary spaces and pairs. The splitting is an existence result after choices. Over a field, evaluation instead identifies cohomology with the full algebraic dual, with no dimension restriction; a direct sum of homology classes can therefore produce a product of cohomology coordinates.

The product calculations use an explicit singular chain equivalence built from simplex models, including its inverse and both homotopies. This transports the PID Kunneth sequence with its actual singular cross-product arrow. The additive cohomology cross product is then checked on representatives and independently of the chosen inverse. Finite-free homology in each degree of one factor permits the Hom–tensor interchange used in the cohomological Kunneth theorem. The finite-free restriction belongs to that theorem, not to field homology Kunneth or unrestricted field duality.

AC is stated exactly where arbitrary-rank cycle projections, projective comparison or degreewise choices enter, and is propagated to their consumers. The cochain, homotopy, excision and representative calculations themselves are choice-free. The final axioms assertion records the AC use for arbitrary coproducts. The projective-space supplier calculates the attaching degrees and the actual pinch map on homology, then uses natural singular field duality to determine its mod-two cohomology pullback.

The [[singular-cohomology-and-coefficient-theorems-examples|companion examples]] compute projective and lens spaces, an infinite wedge and products. They also exhibit a nonzero class invisible to integral evaluation and a continuous quotient that prevents a natural UCT splitting. Multiplicative cup and cap products and ring calculations belong to the later product track; the cross product here is the additive interface proved above.
