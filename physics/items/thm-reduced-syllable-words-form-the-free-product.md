---
id: thm-reduced-syllable-words-form-the-free-product
kind: theorem
title: "Reduced syllable words form the free product of a family of groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-free-product-of-a-family-of-groups, def-reduced-syllable-word-in-a-family-of-groups, lem-factor-elements-act-on-reduced-syllable-words, def-group-homomorphism]
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

The reduced syllable words in $(G_i)_{i\in I}$ form a group under concatenation followed by seam reduction. The one-syllable maps $G_i\to W$ make this group a free product of the family.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] For a family $(G_i)_{i\in I}$, a **free product** is a group $F$ with homomorphisms $\iota_i:G_i\to F$ in the sense of def-group-homomorphism, such that for every group $H$ and every family of homomorphisms $f_i:G_i\to H$, there is a unique homomorphism $f:F\to H$ satisfying $f\circ\iota_i=f_i$ for all $i$. It is denoted $\ast_{i\in I}G_i$. Injectivity of the maps $\iota_i$ is not part of this definition. ([[def-free-product-of-a-family-of-groups]]).

[L2] For groups as in def-group, a **syllable** is a tagged pair $(i,g)$ with $i\in I$ and $g\in G_i\setminus\{e_i\}$. A **reduced syllable word** is a finite list of syllables, indexed by a natural length as in def-natural-numbers, in which adjacent tags differ. The empty list is allowed. At a concatenation seam, adjacent syllables from the same factor are multiplied and an identity result is deleted; this elementary reduction is repeated until the seam is reduced. ([[def-reduced-syllable-word-in-a-family-of-groups]]).

[L3] For each $i\in I$ and $g\in G_i$, left multiplication at the first syllable defines a permutation $P_{i,g}$ of the set of reduced words. One has $P_{i,g}^{-1}=P_{i,g^{-1}}$ and $P_{i,gh}=P_{i,g}\circ P_{i,h}$, so $g\mapsto P_{i,g}$ is a group homomorphism. ([[lem-factor-elements-act-on-reduced-syllable-words]]).

[L4] Let $(M,\cdot,e)$ and $(M',\cdot',e')$ be monoids (def-semigroup-and-monoid). A **monoid homomorphism** from $M$ to $M'$ is a function $f : M \to M'$ such that - **(H1)** $f(x \cdot y) = f(x) \cdot' f(y)$ for all $x, y \in M$; - **(H2)** $f(e) = e'$. Let $G$ and $G'$ be groups (def-group). A **group homomorphism** from $G$ to $G'$ is a function $f : G \to G'$ satisfying (H1) alone: $$f(xy) \;=\; f(x)\, f(y) \qquad \text{for all } x, y \in G .$$ Condition (H2) is not imposed for groups because it follows: a group homomorphism automatically satisfies $f(e) = e'$ and $f(x^{-1}) = f(x)^{-1}$ (lem-group-homomorphism-basic-properties). For monoids it does **not** follow and must be assumed, which is why the two definitions differ. A homomorphism from a structure to itself is an **endomorphism**. The identity map of $M$ is a monoid homomorphism, and a composite of monoid homomorphisms is one, since $(g \circ f)(xy) = g(f(x)f(y)) = g(f(x))\,g(f(y))$ and $(g \circ f)(e) = g(e') = e''$; the same computation, without the second clause, shows a composite of group homomorphisms is a group homomorphism. ([[def-group-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Let a reduced word $u$ act by the composition $P_u$ of the factor permutations attached to its syllables, and define $u\cdot v=P_u(v)$. The seam calculation gives both concatenation followed by reduction and $P_{u\cdot v}=P_u\circ P_v$. [given, L1, L2, L3, L4]

2.1 Composition of permutations makes the operation associative; the empty word is the identity, and reversing a word while inverting its syllables gives the inverse. [step 1.1]

3.1 Given homomorphisms $f_i:G_i\to H$, send $(i_1,g_1)\cdots(i_n,g_n)$ to $f_{i_1}(g_1)\cdots f_{i_n}(g_n)$. The seam rules and homomorphism laws make this a homomorphism. [step 2.1]

4.1 It extends every $f_i$, and any extension must take the displayed value on every reduced word, so it is unique. For an empty family, only the empty word remains and the group is trivial. [step 3.1] ∎
