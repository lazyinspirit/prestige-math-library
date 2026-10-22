---
id: def-free-product-with-amalgamation
kind: definition
title: "Free products with amalgamation along monomorphisms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-pushout-of-group-homomorphisms, thm-group-pushout-as-an-amalgamated-quotient, thm-group-homomorphism-injective-iff-trivial-kernel]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "George D. Torres, Combinatorial Group Theory, §2"
      url: "https://web.ma.utexas.edu/users/gdavtor/notes/comb_group_theory.pdf"
    - title: "B. H. Neumann, Lectures on Topics in the Theory of Infinite Groups, Ch. 9"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr21.pdf"
pipeline_run: null
---
## Definition

If $f:K\to G$ and $h:K\to H$ are injective homomorphisms, their [[def-pushout-of-group-homomorphisms|pushout]] is called the **free product with amalgamation** and is denoted $G\ast_KH$. The quotient construction is [[thm-group-pushout-as-an-amalgamated-quotient]], and injectivity means the trivial-kernel condition of [[thm-group-homomorphism-injective-iff-trivial-kernel]]. The notation anticipates identifying $K$ with its two images, but injectivity of the canonical maps $G,H\to G\ast_KH$ is a theorem, not part of this definition.
