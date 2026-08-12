---
id: def-exact-and-short-exact-sequences-of-modules
kind: definition
title: "Exact sequences and short exact sequences of modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-module-homomorphism-kernel-image-and-cokernel, thm-module-kernel-image-and-injectivity]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Definition

A sequence of left $R$-modules and homomorphisms
$$\cdots\longrightarrow M_{i-1}\xrightarrow{d_{i-1}}M_i\xrightarrow{d_i}M_{i+1}\longrightarrow\cdots$$
is **exact at $M_i$** if $\operatorname{im}d_{i-1}=\ker d_i$ ([[def-module-homomorphism-kernel-image-and-cokernel]]). It is **exact** if it is exact at every displayed module at which two arrows meet.

A **short exact sequence** is an exact sequence
$$0\longrightarrow A\xrightarrow{i}B\xrightarrow{p}C\longrightarrow0.$$
Thus $i$ is injective, $p$ is surjective, and $\operatorname{im}i=\ker p$ ([[thm-module-kernel-image-and-injectivity]]).
