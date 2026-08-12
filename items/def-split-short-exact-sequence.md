---
id: def-split-short-exact-sequence
kind: definition
title: "Split short exact sequences, sections, and retractions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-exact-and-short-exact-sequences-of-modules]
justified_by: [thm-splitting-lemma-for-modules]
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

In a short exact sequence
$$0\to A\xrightarrow iB\xrightarrow pC\to0,$$
a **section** of $p$ is a homomorphism $s:C\to B$ with $p\circ s=\operatorname{id}_C$, and a **retraction** of $i$ is a homomorphism $r:B\to A$ with $r\circ i=\operatorname{id}_A$.

The sequence **splits** if it has a section, equivalently, as proved in [[thm-splitting-lemma-for-modules]], if it has a retraction or if its middle term is isomorphic to $A\oplus C$ compatibly with $i$ and $p$.
