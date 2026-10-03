---
page: the-bgg-resolution
title: "The BGG Resolution"
status: draft
requires: [homomorphisms-between-verma-modules-and-linkage, finite-weyl-invariants-bruhat-and-kostant-harmonics, chain-complexes-and-homology, category-o-finiteness-duality-and-blocks]
items: [
  lem-positive-root-pairings-of-a-dominant-integral-weight,
  lem-bruhat-covers-are-reflection-covers,
  def-bgg-bruhat-verma-sum-in-degree-k,
  lem-dominant-integral-dot-translates-embed-in-the-verma-module,
  lem-bruhat-covers-give-unique-verma-embeddings,
  lem-bruhat-rank-two-intervals-are-diamonds,
  def-verma-type-of-a-module-with-a-standard-filtration,
  lem-induced-modules-from-finite-dimensional-b-modules-have-type-the-weights,
  lem-tensoring-a-verma-module-by-a-finite-dimensional-module-shifts-types,
  lem-central-character-cuts-of-a-typed-module-are-typed,
  lem-weight-subsets-with-equal-root-sums-are-unique,
  def-standard-induced-resolution-of-the-trivial-module,
  thm-standard-induced-resolution-is-exact,
  lem-compatible-signs-exist-on-the-bruhat-graph,
  def-bgg-differential-from-signed-verma-maps,
  prop-the-bgg-differential-squares-to-zero,
  lem-the-bgg-augmentation-has-image-the-simple-module,
  lem-weak-bgg-base-case-for-the-trivial-module,
  thm-weak-bgg-resolution,
  lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules,
  lem-jordan-holder-factors-of-verma-modules-lie-above-the-head,
  lem-kernel-generators-for-the-weak-bgg-complex,
  lem-nonzero-highest-weight-images-survive-modulo-n-minus,
  lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential,
  lem-verma-filtered-objects-are-acyclic-for-n-minus-coinvariants,
  lem-tor-with-the-trivial-module-is-computed-by-the-weak-bgg-resolution,
  lem-dimension-of-the-kernel-modulo-n-minus-equals-the-next-term,
  thm-bgg-resolution-of-a-finite-dimensional-simple-module,
  cor-bgg-euler-character-identity,
  cor-bgg-resolution-has-length-the-number-of-positive-roots
]
examples: []
---

This page constructs and proves the BGG resolution of a finite-dimensional simple module — the resolution by Verma modules that computes its formal character and the dimensions of its $\mathfrak n^-$-coinvariant Tor groups. The construction begins with the Bruhat graph of the Weyl group, its cover maps and their canonical Verma embeddings, and the rank-two diamond combinatorics that governs the signs; a compatible sign function makes the signed edge sums into a complex, and the weak BGG resolution (obtained from the standard induced complex by tensoring and central-character projection) supplies the Verma filtration types that the strong complex must match.

The exactness proof is an induction on the degree, in the style of Bernstein–Gelfand–Gelfand: exactness at the base is the statement that the augmentation kernel is the sum of the simple-reflection Verma submodules; the coinvariant lemmas (BGG 10.5–10.7) identify the dimension of the kernel modulo $\mathfrak n^-$ with the size of the next Bruhat layer and force each differential onto its kernel. The page ends with the Euler-character numerator identity, the statement that the resolution has length the number of positive roots, and the two explicit rank-one and A2 examples, together with the counterexamples that show why the signs and the dominance hypothesis are essential.

The page is a local, self-contained presentation: the weak resolution is built from the standard induced complex rather than assumed, and the strong resolution is proved by the coinvariant dimension count rather than by quoting it. The Weyl character formula itself is deferred to the successor page.
