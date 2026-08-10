---
id: thm-free-product-of-free-groups-on-disjoint-bases
kind: theorem
title: "Free groups on disjoint bases freely multiply to the free group on their union"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-free-group, thm-free-groups-unique-up-to-unique-isomorphism, def-free-product-of-a-family-of-groups, cor-free-products-are-unique-up-to-unique-isomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

For pairwise disjoint sets $X_i$, the free product of the free groups $F(X_i)$ is a free group on $\bigsqcup_iX_i$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] A **free group on a set $X$** is a group $F(X)$ together with a map $i:X\to F(X)$ such that, for every group $G$ and every function $u:X\to G$, there is a unique group homomorphism $\widehat u:F(X)\to G$ satisfying $$\widehat u\circ i=u.$$ The reduced-word construction supplies such a group; the construction and its universal property are established in thm-reduced-words-form-the-free-group. When no ambiguity arises, $x\in X$ is identified with its image $i(x)$. ([[def-free-group]]).

[L2] If $(F,i)$ and $(F',i')$ are free groups on the same set $X$, then there is a unique group isomorphism $\phi:F\to F'$ such that $$\phi\circ i=i'.$$ ([[thm-free-groups-unique-up-to-unique-isomorphism]]).

[L3] For a family $(G_i)_{i\in I}$, a **free product** is a group $F$ with homomorphisms $\iota_i:G_i\to F$ in the sense of def-group-homomorphism, such that for every group $H$ and every family of homomorphisms $f_i:G_i\to H$, there is a unique homomorphism $f:F\to H$ satisfying $f\circ\iota_i=f_i$ for all $i$. It is denoted $\ast_{i\in I}G_i$. Injectivity of the maps $\iota_i$ is not part of this definition. ([[def-free-product-of-a-family-of-groups]]).

[L4] Any two free products of the same family are connected by a unique isomorphism commuting with every canonical factor map. ([[cor-free-products-are-unique-up-to-unique-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 A function from the disjoint union $\bigsqcup_iX_i$ to a group $H$ is exactly a family of functions $X_i\to H$. [given, L1, L2, L3, L4]

2.1 Freeness extends each member uniquely to a homomorphism $F(X_i)\to H$, and free-product universality extends that family uniquely to one homomorphism from $\ast_iF(X_i)$. [step 1.1]

3.1 Thus the free product has the universal property of $F(\bigsqcup_iX_i)$, and uniqueness gives the isomorphism. Empty bases and an empty family are included. [step 2.1] ∎
