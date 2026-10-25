---
id: def-projective-module
kind: definition
title: "Projective modules and the lifting property"
status: published
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
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
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

A left $R$-module $P$ is **projective** if it has the lifting property for epimorphisms: whenever $q:E\to M$ is a surjective module homomorphism and $f:P\to M$ is a module homomorphism, there exists a module homomorphism $\tilde f:P\to E$ such that $q\circ\tilde f=f$ ([[def-module-homomorphism-kernel-image-and-cokernel]], [[def-injection-surjection-bijection]]).

The lift need not be unique. Projectivity asks for a lift in every such square.
