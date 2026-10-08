---
page: kazhdans-property-t-and-spectral-gap
title: "Kazhdan's Property T and Spectral Gap"
status: draft
requires: [unitary-representations-positive-type-and-gns, group-c-star-algebras-and-the-fell-unitary-dual, amenability-reiter-nets-and-folner-conditions, sl2-r-principal-and-complementary-series]
items:
  - lem-irreducible-c-star-representations-separate-arbitrary-c-star-algebras
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-kazhdan-pair-and-kazhdan-constant
  - def-kazhdans-property-t
  - lem-almost-invariant-vectors-and-positive-type-functions
  - thm-property-t-is-equivalent-to-the-existence-of-a-kazhdan-pair
  - thm-property-t-is-equivalent-to-isolation-of-the-trivial-representation
  - def-compactly-generated-locally-compact-group
  - lem-quasi-regular-representation-on-a-discrete-coset-space
  - thm-property-t-implies-compact-generation
  - thm-property-t-passes-to-quotients
  - def-spectral-gap-for-a-unitary-representation
  - thm-property-t-is-uniform-spectral-gap-for-representations
  - lem-finite-haar-volume-compactness-criterion
  - thm-an-amenable-property-t-locally-compact-group-is-compact
  - thm-compact-groups-have-property-t
  - def-relative-property-t-for-a-pair
  - def-real-projective-line-and-its-sl2-action
  - lem-sl2-r-has-no-invariant-probability-on-the-projective-line
  - lem-sl2-r-semidirect-r2-has-relative-property-t
  - lem-normal-relative-property-t-controls-distance-to-invariant-vectors
  - lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups
  - thm-sl-n-r-has-property-t-for-n-at-least-three
  - prop-sl2-r-does-not-have-property-t
examples: []
---

This page develops Kazhdan's property (T), Kazhdan pairs and constants, and spectral gap for unitary representations. It begins with almost-invariant vectors and positive-type coefficients, then relates property (T) to compact Kazhdan pairs and to isolation of the trivial representation in the Fell unitary dual. The latter argument uses the separation of arbitrary C*-algebras by irreducible representations ([[lem-irreducible-c-star-representations-separate-arbitrary-c-star-algebras]]).

The structural results show that property (T) passes to Hausdorff quotients, forces compact generation, and is equivalent to a uniform spectral-gap bound. For locally compact Hausdorff groups, an amenable group with property (T) is compact. The page also develops relative property (T), including the distance estimate for normal subgroups and the relative property (T) of $\mathrm{SL}_2(\mathbb R)\ltimes\mathbb R^2$. Its final applications establish property (T) for $\mathrm{SL}_n(\mathbb R)$ when $n\ge3$ by bounded generation with elementary transvections.

The real-projective-line action of $\mathrm{SL}_2(\mathbb R)$ and the absence of an invariant probability for two unipotents provide the measure-theoretic input to the relative-property-(T) proof. Concrete examples and counterexamples accompany the main page on [[kazhdans-property-t-and-spectral-gap-examples]].

For $\mathrm{SL}_2(\mathbb R)$, the complementary series has positive
weighted even $K$-lines and compact-uniform coefficients approaching the
trivial coefficient. A direct sum over parameters tending to the endpoint
has almost invariant vectors and no fixed vector, proving failure of
property (T).
