---
page: spectral-sequences
title: Spectral Sequences
status: draft
items:
- lem-spectral-sequence-subquotient-and-local-lifting-calculus
- def-increasing-and-decreasing-filtration-of-an-object
- def-exhaustive-separated-bounded-and-finite-filtration
- def-associated-graded-object-of-a-filtered-object
- lem-associated-graded-quotients-are-well-defined-subquotients
- def-filtered-chain-complex
- def-filtered-chain-map
- prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex
- def-induced-filtration-on-homology
- lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data
- def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex
- lem-r-boundaries-embed-in-r-cycles
- def-r-page-of-the-spectral-sequence-of-a-filtered-complex
- lem-the-filtered-differential-induces-d-r-on-the-r-page
- prop-the-rth-differential-has-bidegree-minus-r-r-minus-one
- lem-the-rth-differential-squares-to-zero
- thm-the-next-page-is-the-homology-of-the-current-page
- prop-e-zero-is-the-associated-graded-complex
- prop-e-one-is-homology-of-the-associated-graded-complex
- def-limiting-cycles-boundaries-and-e-infinity
- def-homological-spectral-sequence
- def-cohomological-spectral-sequence
- def-morphism-of-spectral-sequences
- prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences
- def-spectral-sequence-stabilization-at-a-bidegree
- def-collapse-at-a-page
- prop-degree-reasons-force-stabilization-in-a-bounded-region
- prop-a-spectral-sequence-supported-in-one-row-or-column-collapses
- def-abutment-to-a-filtered-object
- thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology
- def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence
- lem-edge-homomorphisms-are-natural
- def-extension-problem-of-a-convergent-spectral-sequence
- lem-abelian-group-model-for-spectral-sequence-computations
- cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects
- prop-collapse-does-not-in-general-split-the-abutment
- thm-the-cohomological-filtered-complex-construction
- prop-shifting-a-filtered-complex-reindexes-its-spectral-sequence
- fs-e-infinity-is-the-abutment-object
- fs-e-r-plus-one-is-literally-equal-to-the-homology-of-e-r
- fs-a-spectral-sequence-collapses-when-one-differential-is-zero
- fs-collapse-solves-all-extension-problems
- fs-the-filtration-on-homology-is-h-n-of-the-filtered-subcomplex
- fs-e-zero-and-e-one-page-conventions-are-universal-across-sources
examples: []
---

A filtered chain complex gives a sequence of increasingly restrictive cycle and boundary quotients. This page constructs those quotients in an arbitrary abelian category, proves that their differentials are well defined, and constructs the natural next-page homology isomorphism. Local epic pullbacks justify representative calculations without a module embedding or a choice of global lifts.

We use increasing filtrations and homological bidegrees $d^r:(p,q)\mapsto(p-r,q+r-1)$, with $E^0=\operatorname{gr}C$ and $E^1=H(\operatorname{gr}C)$. The cohomological version uses decreasing filtrations and negates both indices. Degreewise finite filtrations give pointwise stabilization and an abutment to the image-filtered homology; the stable terms are its associated graded pieces. Stabilization, collapse, and reconstruction of the filtered target are distinct questions. The edge maps retain the necessary subobject and quotient intermediates, and explicit nonsplit extensions explain the missing reconstruction data.
