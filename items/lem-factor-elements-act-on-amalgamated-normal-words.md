---
id: lem-factor-elements-act-on-amalgamated-normal-words
kind: lemma
title: "Factor elements act consistently by permutations on amalgamated normal words"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normal-form-data-for-amalgamated-free-products, lem-symmetric-group-is-a-group, def-group-homomorphism]
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

With fixed transversal data, every element of $G$ and $H$ acts by a permutation on normal words. The two actions agree on $K$, inverses act inversely, and with the library's composition convention one has $P_{xy}=P_x\circ P_y$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Let $K$ be embedded in $G$ and $H$ as in def-free-product-with-amalgamation. By def-axiom-of-choice, choose left-coset transversals $S_G,S_H$ containing the identity. A **normal word** is $$s_1\cdots s_nk,$$ where $n\in\mathbb N$ (def-natural-numbers), $k\in K$, every $s_j$ is a nonidentity representative from $S_G$ or $S_H$, and consecutive representatives come from different factors. Length zero means the word is just $k$. The written form depends on the transversals. ([[def-normal-form-data-for-amalgamated-free-products]]).

[L2] For every set $X$, the triple $(\operatorname{Sym}(X), \circ, \mathrm{id}_X)$ of def-symmetric-group is a group (def-group); the inverse of a permutation $f$ is its inverse function $f^{-1}$. If $X$ contains three distinct elements $a$, $b$, $c$, then $\operatorname{Sym}(X)$ is not abelian: the transpositions $\tau = (a\,b)$ and $\rho = (b\,c)$ satisfy $\tau \circ \rho \ne \rho \circ \tau$. ([[lem-symmetric-group-is-a-group]]).

[L3] Let $(M,\cdot,e)$ and $(M',\cdot',e')$ be monoids (def-semigroup-and-monoid). A **monoid homomorphism** from $M$ to $M'$ is a function $f : M \to M'$ such that - **(H1)** $f(x \cdot y) = f(x) \cdot' f(y)$ for all $x, y \in M$; - **(H2)** $f(e) = e'$. Let $G$ and $G'$ be groups (def-group). A **group homomorphism** from $G$ to $G'$ is a function $f : G \to G'$ satisfying (H1) alone: $$f(xy) \;=\; f(x)\, f(y) \qquad \text{for all } x, y \in G .$$ Condition (H2) is not imposed for groups because it follows: a group homomorphism automatically satisfies $f(e) = e'$ and $f(x^{-1}) = f(x)^{-1}$ (lem-group-homomorphism-basic-properties). For monoids it does **not** follow and must be assumed, which is why the two definitions differ. A homomorphism from a structure to itself is an **endomorphism**. The identity map of $M$ is a monoid homomorphism, and a composite of monoid homomorphisms is one, since $(g \circ f)(xy) = g(f(x)f(y)) = g(f(x))\,g(f(y))$ and $(g \circ f)(e) = g(e') = e''$; the same computation, without the second clause, shows a composite of group homomorphisms is a group homomorphism. ([[def-group-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 For a normal word, multiply the terminal $K$ coefficient on the right by $x^{-1}$, rewrite the affected factor element uniquely as a chosen left-coset representative times an element of $K$, and merge or delete the final syllable when its factor matches. This defines $P_x$. [given, L1, L2, L3]

2.1 Uniqueness of the transversal decomposition checks every seam and gives $P_{x^{-1}}P_x=\mathrm{id}$, so $P_x$ is a permutation. [step 1.1]

3.1 Performing the rewrite first for $y$ and then for $x$ is the unique rewrite for $xy$, hence $P_{xy}=P_x\circ P_y$. If $x\in K$, the two factor computations are the same terminal-coefficient operation, so the actions agree on $K$. [step 2.1] ∎
