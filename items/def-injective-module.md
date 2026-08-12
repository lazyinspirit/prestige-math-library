---
id: def-injective-module
kind: definition
title: "Injective modules and the extension property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-module-homomorphism-kernel-image-and-cokernel, def-injection-surjection-bijection]
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

A left $R$-module $I$ is **injective** if it has the extension property for monomorphisms: whenever $u:A\to B$ is an injective module homomorphism and $f:A\to I$ is a module homomorphism, there exists a module homomorphism $\tilde f:B\to I$ with $\tilde f\circ u=f$ ([[def-module-homomorphism-kernel-image-and-cokernel]], [[def-injection-surjection-bijection]]).

The extension need not be unique. Injectivity asks for an extension along every module embedding.
