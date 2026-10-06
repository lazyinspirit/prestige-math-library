---
id: rem-euler-class-construction-remains-owned-by-at
kind: remark
title: "The Euler class construction remains owned by algebraic topology"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-euler-class-by-zero-section-pullback-of-the-thom-class, def-thom-class-by-fiberwise-normalization, def-thom-euler-class-of-an-oriented-vector-bundle, thm-thom-isomorphism-for-oriented-vector-bundles, prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual, thm-naturality-orientation-sign-and-whitney-product-for-euler-classes, thm-mod-two-euler-class-is-the-top-stiefel-whitney-class, thm-self-intersection-is-the-euler-number-of-the-normal-bundle]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Princeton University Press, 1974; complete PDF)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Sec. 9 Oriented Bundles and the Euler Class (printed pp. 95-104); Sec. 10 The Thom Isomorphism Theorem (pp. 105-114); Sec. 11 Computations in a Smooth Manifold (pp. 115-137, the dual-class intersection calculus); Sec. 12 Obstructions (pp. 139-146)."
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
dependency_level: 4
---

## Remark

This page proves zero-set and self-intersection applications of characteristic classes. Algebraic topology owns the normalized Thom class [[def-thom-class-by-fiberwise-normalization]], its existence and Thom isomorphism [[thm-thom-isomorphism-for-oriented-vector-bundles]], and the Euler class $e(E)=s_0^*j^*u_E$ [[def-thom-euler-class-of-an-oriented-vector-bundle]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]. Its naturality and ordered Whitney product are proved in [[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]] (with standard unit orientations on rank-zero inputs); the equality of the canonical mod 2 Euler class with the top Stiefel-Whitney class is proved in [[thm-mod-two-euler-class-is-the-top-stiefel-whitney-class]]. Each result retains its stated base, orientation and choice hypotheses. DT-12 cites these constructions and does not introduce competing ones. Conversely, zero-locus duality [[prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual]] and the normal-bundle self-intersection formula [[thm-self-intersection-is-the-euler-number-of-the-normal-bundle]] are DT-owned interfaces for the later Euler/index and immersion/embedding pairs.
