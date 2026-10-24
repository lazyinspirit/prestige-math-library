---
id: cor-trivial-amalgamation-is-the-free-product
kind: corollary
title: "Amalgamation over the trivial group is the ordinary free product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-free-product-with-amalgamation, def-free-product-of-a-family-of-groups, cor-free-products-are-unique-up-to-unique-isomorphism]
justified_by: []
aliases: []
landmark: false
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

The free product with amalgamation over the trivial group is canonically isomorphic to the ordinary free product.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] If $f:K\to G$ and $h:K\to H$ are injective homomorphisms, their pushout is called the **free product with amalgamation** and is denoted $G\ast_KH$. The quotient construction is thm-group-pushout-as-an-amalgamated-quotient, and injectivity means the trivial-kernel condition of thm-group-homomorphism-injective-iff-trivial-kernel. The notation anticipates identifying $K$ with its two images, but injectivity of the canonical maps $G,H\to G\ast_KH$ is a theorem, not part of this definition. ([[def-free-product-with-amalgamation]]).

[L2] For a family $(G_i)_{i\in I}$, a **free product** is a group $F$ with homomorphisms $\iota_i:G_i\to F$ in the sense of def-group-homomorphism, such that for every group $H$ and every family of homomorphisms $f_i:G_i\to H$, there is a unique homomorphism $f:F\to H$ satisfying $f\circ\iota_i=f_i$ for all $i$. It is denoted $\ast_{i\in I}G_i$. Injectivity of the maps $\iota_i$ is not part of this definition. ([[def-free-product-of-a-family-of-groups]]).

[L3] Any two free products of the same family are connected by a unique isomorphism commuting with every canonical factor map. ([[cor-free-products-are-unique-up-to-unique-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 For maps from the trivial group, the compatibility equation in the pushout property is automatic. [given, L1, L2, L3]

2.1 Thus the amalgamated pushout and the ordinary free product satisfy the same universal property, and uniqueness supplies the canonical isomorphism. Trivial factors cause no exception. [step 1.1] ∎
