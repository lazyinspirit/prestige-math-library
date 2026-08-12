---
id: def-normal-algebraic-extension
kind: definition
title: 'A normal algebraic extension is one in which every minimal polynomial with a root in the extension splits there'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebraic-and-transcendental-elements, thm-evaluation-kernel-and-minimal-polynomial, def-polynomials-that-split-and-splitting-fields]
justified_by: []
aliases: [normal extension]
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Section 9.15: Normal extensions'
      url: 'https://stacks.math.columbia.edu/tag/09HL'
    - title: 'J. S. Milne, Fields and Galois Theory, Chapter 2'
      url: 'https://www.jmilne.org/math/CourseNotes/FT.pdf'
pipeline_run: frontier-12
---

## Definition

An algebraic field extension $E/F$ is **normal** if, for every $\alpha\in E$, the minimal polynomial of $\alpha$ over $F$ splits over $E$.

Equivalently, every irreducible polynomial $p\in F[x]$ that has one root in $E$ splits over $E$. Indeed, the monic associate of such a $p$ is the minimal polynomial of any one of its roots in $E$, and multiplying by a nonzero scalar does not change whether a polynomial splits.
