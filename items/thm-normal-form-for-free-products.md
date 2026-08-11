---
id: thm-normal-form-for-free-products
kind: theorem
title: "Normal form theorem for free products"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-reduced-syllable-words-form-the-free-product, def-reduced-syllable-word-in-a-family-of-groups, def-free-product-of-a-family-of-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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
## Statement

Every element of $\ast_{i\in I}G_i$ has a unique reduced syllable expression. The identity is represented by the empty word, and no nonempty reduced word represents the identity.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] The reduced syllable words in $(G_i)_{i\in I}$ form a group under concatenation followed by seam reduction. The one-syllable maps $G_i\to W$ make this group a free product of the family. ([[thm-reduced-syllable-words-form-the-free-product]]).

[L2] For groups as in def-group, a **syllable** is a tagged pair $(i,g)$ with $i\in I$ and $g\in G_i\setminus\{e_i\}$. A **reduced syllable word** is a finite list of syllables, indexed by a natural length as in def-natural-numbers, in which adjacent tags differ. The empty list is allowed. At a concatenation seam, adjacent syllables from the same factor are multiplied and an identity result is deleted; this elementary reduction is repeated until the seam is reduced. ([[def-reduced-syllable-word-in-a-family-of-groups]]).

[L3] For a family $(G_i)_{i\in I}$, a **free product** is a group $F$ with homomorphisms $\iota_i:G_i\to F$ in the sense of def-group-homomorphism, such that for every group $H$ and every family of homomorphisms $f_i:G_i\to H$, there is a unique homomorphism $f:F\to H$ satisfying $f\circ\iota_i=f_i$ for all $i$. It is denoted $\ast_{i\in I}G_i$. Injectivity of the maps $\iota_i$ is not part of this definition. ([[def-free-product-of-a-family-of-groups]]).

## Proof

**Proof technique:** direct.

1.1 Let $F$ be any free product and $W$ the reduced-word model. Their universal properties give factor-compatible homomorphisms $F\to W$ and $W\to F$. Each composite agrees with the identity on every factor, so uniqueness in the universal property makes the maps inverse isomorphisms. [given, L1, L2, L3]

2.1 In the model every element is literally one reduced word. Distinct reduced words act differently on the empty word, so they are distinct elements. [step 1.1]

3.1 Consequently the empty word is the identity, every nonempty reduced word is nonidentity, and the reduced expression is unique. [step 2.1] ∎
