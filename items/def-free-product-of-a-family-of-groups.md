---
id: def-free-product-of-a-family-of-groups
kind: definition
title: "The free product of an arbitrary family of groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-homomorphism]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
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

For a family $(G_i)_{i\in I}$, a **free product** is a group $F$ with homomorphisms $\iota_i:G_i\to F$ in the sense of [[def-group-homomorphism]], such that for every group $H$ and every family of homomorphisms $f_i:G_i\to H$, there is a unique homomorphism $f:F\to H$ satisfying $f\circ\iota_i=f_i$ for all $i$. It is denoted $\ast_{i\in I}G_i$. Injectivity of the maps $\iota_i$ is not part of this definition.
