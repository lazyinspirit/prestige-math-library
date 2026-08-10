---
id: def-normal-form-data-for-amalgamated-free-products
kind: definition
title: "Transversal normal-form data for an amalgamated free product"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-free-product-with-amalgamation, def-coset, def-axiom-of-choice, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
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

Let $K$ be embedded in $G$ and $H$ as in [[def-free-product-with-amalgamation]]. By [[def-axiom-of-choice]], choose left-[[def-coset|coset]] transversals $S_G,S_H$ containing the identity. A **normal word** is $$s_1\cdots s_nk,$$ where $n\in\mathbb N$ ([[def-natural-numbers]]), $k\in K$, every $s_j$ is a nonidentity representative from $S_G$ or $S_H$, and consecutive representatives come from different factors. Length zero means the word is just $k$. The written form depends on the transversals.
