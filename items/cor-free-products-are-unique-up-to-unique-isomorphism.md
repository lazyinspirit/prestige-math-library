---
id: cor-free-products-are-unique-up-to-unique-isomorphism
kind: corollary
title: "Free products are unique up to a unique factor-compatible isomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-free-product-of-a-family-of-groups, def-group-isomorphism-and-automorphism]
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

Any two free products of the same family are connected by a unique isomorphism commuting with every canonical factor map.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] For a family $(G_i)_{i\in I}$, a **free product** is a group $F$ with homomorphisms $\iota_i:G_i\to F$ in the sense of def-group-homomorphism, such that for every group $H$ and every family of homomorphisms $f_i:G_i\to H$, there is a unique homomorphism $f:F\to H$ satisfying $f\circ\iota_i=f_i$ for all $i$. It is denoted $\ast_{i\in I}G_i$. Injectivity of the maps $\iota_i$ is not part of this definition. ([[def-free-product-of-a-family-of-groups]]).

[L2] Group isomorphisms, automorphisms and the set $\operatorname{Aut}(G)$. An **isomorphism** $f:G\to H$ is a bijective group homomorphism (def-group-homomorphism, def-injection-surjection-bijection). When $G=H$, it is an **automorphism** of $G$. Write $$\operatorname{Aut}(G):=\{f:G\to G:f\text{ is an automorphism}\}.$$ ([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 The universal properties give unique factor-compatible homomorphisms $u:F\to F'$ and $v:F'\to F$. [given, L1, L2]

2.1 Both $v\circ u$ and $\mathrm{id}_F$ agree with every factor map, so uniqueness gives $v\circ u=\mathrm{id}_F$; similarly $u\circ v=\mathrm{id}_{F'}$. [step 1.1]

3.1 Hence $u$ is the unique compatible isomorphism. For the empty family both free products are trivial. [step 2.1] ∎
