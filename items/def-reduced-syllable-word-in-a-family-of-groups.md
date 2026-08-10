---
id: def-reduced-syllable-word-in-a-family-of-groups
kind: definition
title: "Reduced syllable words in a family of groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group, def-natural-numbers]
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

For groups as in [[def-group]], a **syllable** is a tagged pair $(i,g)$ with $i\in I$ and $g\in G_i\setminus\{e_i\}$. A **reduced syllable word** is a finite list of syllables, indexed by a natural length as in [[def-natural-numbers]], in which adjacent tags differ. The empty list is allowed. At a concatenation seam, adjacent syllables from the same factor are multiplied and an identity result is deleted; this elementary reduction is repeated until the seam is reduced.
