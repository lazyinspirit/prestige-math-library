---
id: lem-factor-elements-act-on-reduced-syllable-words
kind: lemma
title: "Factor elements act by mutually inverse permutations on reduced syllable words"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-reduced-syllable-word-in-a-family-of-groups, lem-symmetric-group-is-a-group, def-group-homomorphism]
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

For each $i\in I$ and $g\in G_i$, left multiplication at the first syllable defines a permutation $P_{i,g}$ of the set of reduced words. One has $P_{i,g}^{-1}=P_{i,g^{-1}}$ and $P_{i,gh}=P_{i,g}\circ P_{i,h}$, so $g\mapsto P_{i,g}$ is a group homomorphism.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] For groups as in def-group, a **syllable** is a tagged pair $(i,g)$ with $i\in I$ and $g\in G_i\setminus\{e_i\}$. A **reduced syllable word** is a finite list of syllables, indexed by a natural length as in def-natural-numbers, in which adjacent tags differ. The empty list is allowed. At a concatenation seam, adjacent syllables from the same factor are multiplied and an identity result is deleted; this elementary reduction is repeated until the seam is reduced. ([[def-reduced-syllable-word-in-a-family-of-groups]]).

[L2] For every set $X$, the triple $(\operatorname{Sym}(X), \circ, \mathrm{id}_X)$ of def-symmetric-group is a group (def-group); the inverse of a permutation $f$ is its inverse function $f^{-1}$. If $X$ contains three distinct elements $a$, $b$, $c$, then $\operatorname{Sym}(X)$ is not abelian: the transpositions $\tau = (a\,b)$ and $\rho = (b\,c)$ satisfy $\tau \circ \rho \ne \rho \circ \tau$. ([[lem-symmetric-group-is-a-group]]).

[L3] Let $(M,\cdot,e)$ and $(M',\cdot',e')$ be monoids (def-semigroup-and-monoid). A **monoid homomorphism** from $M$ to $M'$ is a function $f : M \to M'$ such that - **(H1)** $f(x \cdot y) = f(x) \cdot' f(y)$ for all $x, y \in M$; - **(H2)** $f(e) = e'$. Let $G$ and $G'$ be groups (def-group). A **group homomorphism** from $G$ to $G'$ is a function $f : G \to G'$ satisfying (H1) alone: $$f(xy) \;=\; f(x)\, f(y) \qquad \text{for all } x, y \in G .$$ Condition (H2) is not imposed for groups because it follows: a group homomorphism automatically satisfies $f(e) = e'$ and $f(x^{-1}) = f(x)^{-1}$ (lem-group-homomorphism-basic-properties). For monoids it does **not** follow and must be assumed, which is why the two definitions differ. A homomorphism from a structure to itself is an **endomorphism**. The identity map of $M$ is a monoid homomorphism, and a composite of monoid homomorphisms is one, since $(g \circ f)(xy) = g(f(x)f(y)) = g(f(x))\,g(f(y))$ and $(g \circ f)(e) = g(e') = e''$; the same computation, without the second clause, shows a composite of group homomorphisms is a group homomorphism. ([[def-group-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Define $P_{i,e_i}$ to be the identity map, since $(i,e_i)$ is not a syllable and prepending it would leave a word that is not reduced. For $g\ne e_i$, define $P_{i,g}$ by prepending $(i,g)$ when the word is empty or begins in another factor; when it begins $(i,h)$, replace that syllable by $(i,gh)$ and delete it if $gh=e_i$. Every value is again a reduced word. [given, L1, L2, L3]

2.1 The three seam cases, different first tag, nonidentity product, and identity product, show directly that applying $P_{i,g^{-1}}$ reverses applying $P_{i,g}$. Hence every $P_{i,g}$ is a permutation. [step 1.1]

3.1 The same seam check gives $P_{i,gh}(w)=P_{i,g}(P_{i,h}(w))$ and $P_{i,e_i}=\mathrm{id}$, which is exactly the homomorphism law into the symmetric group. [step 2.1] ∎
