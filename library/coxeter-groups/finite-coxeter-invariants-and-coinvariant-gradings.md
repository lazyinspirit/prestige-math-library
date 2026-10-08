---
page: finite-coxeter-invariants-and-coinvariant-gradings
title: "Finite Coxeter Invariants and Coinvariant Gradings"
status: published
requires: [finite-coxeter-diagrams-and-complete-classification, finite-weyl-invariants-bruhat-and-kostant-harmonics, relations-functions-and-quotients, bipartite-coxeter-elements-and-ordered-root-complexes, complexification-realification-and-real-structures, reductive-affine-invariant-theory-and-geometric-quotients]
items:
  - lem-cg-complexification-satisfies-reflection-invariant-hypotheses
  - def-cg-coxeter-basic-degrees-and-graded-coinvariants
  - lem-cg-classical-coxeter-spectra-from-reflection-models
  - lem-cg-basic-degrees-independent-and-coinvariant-series
  - lem-cg-formal-rational-differentials-and-invariant-jacobian
  - thm-cg-coinvariant-top-degree-and-discriminant
  - lem-cg-exceptional-coxeter-spectra-from-exact-certificates
  - thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees
examples: []
---

This page applies finite complex reflection invariant theory to finite Coxeter groups, including noncrystallographic types. It proves the representation hypotheses needed by the published invariant-theory results, then develops the Coxeter-specific links among basic degrees, coinvariants, discriminants and Coxeter spectra.

The construction begins with [[lem-cg-complexification-satisfies-reflection-invariant-hypotheses]] and [[def-cg-coxeter-basic-degrees-and-graded-coinvariants]]. The definition’s well-definedness is established by [[lem-cg-basic-degrees-independent-and-coinvariant-series]], which proves multiset independence, the invariant and coinvariant Hilbert series, the degree product, and Molien’s identity. [[lem-cg-formal-rational-differentials-and-invariant-jacobian]] proves the invariant Jacobian is nonzero by an explicit characteristic-zero argument.

The discriminant branch continues with [[thm-cg-coinvariant-top-degree-and-discriminant]], which proves the total exponent sum, the Jacobian-discriminant identity, the anti-invariant description, and the one-dimensional top sign class. The spectral branch is proved from reflection models and exact matrices: [[lem-cg-classical-coxeter-spectra-from-reflection-models]] handles the classical types, while [[lem-cg-exceptional-coxeter-spectra-from-exact-certificates]] gives the exceptional certificates. [[thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees]] brings the Coxeter-plane eigenvector, the discriminant degree and both spectrum lists together to identify all basic degrees, including reducible and low-rank cases.

## Prerequisites and reading

Required earlier pages: [[bipartite-coxeter-elements-and-ordered-root-complexes]], [[finite-coxeter-diagrams-and-complete-classification]], [[finite-weyl-invariants-bruhat-and-kostant-harmonics]], and [[relations-functions-and-quotients]]. The published [[complexification-realification-and-real-structures]] supplies scalar extension of the reflection representation. The remaining prerequisite pages provide root-system, polynomial-algebra and invariant-theory background. The companion [[finite-coxeter-invariants-and-coinvariant-gradings-examples]] applies these results and is a dependency leaf.
