---
id: cor-ends-commute-with-ends
kind: corollary
title: "Iterated ends may be taken in either order"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fubini-for-ends, def-end-and-coend, def-parametrised-end-and-parametrised-coend, def-product-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (2.9)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Statement

Let $T:(\mathcal C\times\mathcal D)^{\mathrm{op}}\times(\mathcal C\times\mathcal D)\to\mathcal E$
be a functor, reindexed as in [[thm-fubini-for-ends]], and assume chosen
families of inner ends in each order together with the functor structures in
their remaining parameters
([[def-parametrised-end-and-parametrised-coend]],
[[def-product-category]]).

If either iterated end exists, so does the other, and there is exactly one
isomorphism

$$\int_{c}\int_{d}T(c,d,c,d)\;\cong\;\int_{d}\int_{c}T(c,d,c,d)$$

commuting with every component of the two wedges over the product index
category that they induce ([[def-end-and-coend]]). The hypotheses are exactly
those of [[thm-fubini-for-ends]] and nothing is added.

## Facts & Assumptions

**Given:** A functor $T$ on $(\mathcal C\times\mathcal D)^{\mathrm{op}}\times(\mathcal C\times\mathcal D)$ with chosen inner-end families in both orders and their functor structures in the remaining parameters.

[F1] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

[F3] A parametrised end of $T$ is a choice, for every object $p$ of the parameter category, of an end taken in the two dinatural variables with the remaining variables held fixed ([[def-parametrised-end-and-parametrised-coend]]).

[F4] The product category has objects the pairs, componentwise identities, and componentwise composition $(f',g')\circ(f,g)=(f'\circ f,g'\circ g)$ ([[def-product-category]]).

[L1] Under chosen families of inner ends in each order carrying their functor structures in the remaining parameters, an end over a product index category and the two iterated ends exist together and agree, any two of the three being joined by the unique isomorphism commuting with every component ([[thm-fubini-for-ends]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] each of the two iterated ends exists exactly when the end over the product index category $\mathcal C\times\mathcal D$ exists, and each is then joined to it by exactly one isomorphism commuting with every component of the induced wedge. [F1, F3, F4, L1]

2.1 Hence if either iterated end exists, so does the end over the product index category and therefore the other iterated end; composing the isomorphism attached to one with the inverse of the isomorphism attached to the other gives an isomorphism between the two iterated ends commuting with every component, and it is the only such, since a second one would give a second isomorphism to the product-index end. [L1, step 1.1] ∎

## Remarks

The corollary is a statement about two objects that are each characterised by a universal property, so the isomorphism it produces is canonical in the strong sense: it is determined by the requirement that it commute with the components, and no choice is involved beyond the two chosen families of inner ends already assumed by [[thm-fubini-for-ends]].

Nothing here says that either iterated end exists. What makes the interchange usable in practice is a separate existence statement, such as [[cor-ends-and-coends-exist-when-the-index-category-is-small-and-the-target-is-complete-or-cocomplete]] applied to each inner integrand.
