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

2.1 Let $g\ne e_i$, so also $g^{-1}\ne e_i$, and let $w$ be reduced. Three seam cases exhaust the definition. (a) $w$ empty or with first tag other than $i$: $P_{i,g}(w)=(i,g)w$, which begins $(i,g)$, so $P_{i,g^{-1}}$ replaces that syllable by $(i,g^{-1}g)=(i,e_i)$ and deletes it, returning $w$. (b) $w=(i,h)w'$ with $gh\ne e_i$: $P_{i,g}(w)=(i,gh)w'$, and $P_{i,g^{-1}}$ replaces $(i,gh)$ by $(i,g^{-1}gh)=(i,h)$, kept because $h\ne e_i$, returning $w$. (c) $w=(i,h)w'$ with $gh=e_i$, that is $h=g^{-1}$: $P_{i,g}(w)=w'$, and $w'$ is empty or has first tag other than $i$ because $w$ is reduced, so $P_{i,g^{-1}}(w')=(i,g^{-1})w'=(i,h)w'=w$. Exchanging $g$ and $g^{-1}$ gives the other composite, so $P_{i,g^{-1}}$ is a two-sided inverse of $P_{i,g}$; with $P_{i,e_i}=\mathrm{id}$ this makes every $P_{i,g}$ a permutation of the reduced words and $P_{i,g}^{-1}=P_{i,g^{-1}}$ [L2]. [step 1.1, L1, L2]

3.1 For $P_{i,gh}=P_{i,g}\circ P_{i,h}$ both sides are immediate when $g=e_i$ or $h=e_i$, so let $g,h\ne e_i$ and take $w$ reduced. (a) $w$ empty or with first tag other than $i$: $P_{i,h}(w)=(i,h)w$, and $P_{i,g}$ sends it to $(i,gh)w$ when $gh\ne e_i$ and to $w$ when $gh=e_i$, which is $P_{i,gh}(w)$ in both subcases. (b) $w=(i,a)w'$ with $ha\ne e_i$: $P_{i,h}(w)=(i,ha)w'$, and $P_{i,g}$ sends it to $(i,gha)w'$ or, when $gha=e_i$, to $w'$; $P_{i,gh}(w)$ splits on the same product $(gh)a=gha$ and gives the same word. (c) $w=(i,a)w'$ with $ha=e_i$: $P_{i,h}(w)=w'$, empty or with first tag other than $i$, so $P_{i,g}(w')=(i,g)w'$; and $gha=g\ne e_i$, so $P_{i,gh}$ replaces $(i,a)$ by $(i,g)$ and also gives $(i,g)w'$. Hence $g\mapsto P_{i,g}$ satisfies (H1) of [L3] into the symmetric group of [L2], and is a group homomorphism. [step 2.1, L1, L2, L3] ∎
