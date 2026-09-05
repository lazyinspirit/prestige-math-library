---
id: thm-three-sat-reduces-to-clique
kind: theorem
title: "3SAT polynomial-time many-one reduces to CLIQUE"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-reduction-gadget-and-interface-invariant, def-clique-independent-set-and-vertex-cover-problems, def-polynomial-time-many-one-reduction, thm-three-sat-is-np-complete]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Fabrizio Iozzi and Luca Trevisan, Handout NP3"
      url: "https://lucatrevisan.github.io/30540/notes-np3.pdf"
verification:
  precheck: pass
---

## Statement

There is a polynomial-time many-one reduction from $3$-SAT to CLIQUE.
Explicitly, for every $3$-CNF formula
$$ \varphi=C_1\land\cdots\land C_m $$
one can construct in polynomial time a graph $G_\varphi$ such that
$$ \varphi\in 3\text{-}SAT \iff (G_\varphi,m)\in CLIQUE. $$

## Facts & Assumptions

**Given:** A $3$-CNF formula
$$ \varphi=C_1\land\cdots\land C_m, \qquad C_j=(\ell_{j1}\lor \ell_{j2}\lor \ell_{j3}). $$

[L1] A polynomial-time many-one reduction is a total polynomial-time function preserving membership in both directions, by [[def-polynomial-time-many-one-reduction]].

[L2] A gadget reduction is correct only after the construction cost and both directions of the witness translation are proved, by [[def-reduction-gadget-and-interface-invariant]].

[F1] A CLIQUE instance asks for $k$ pairwise adjacent vertices in a finite simple graph, by [[def-clique-independent-set-and-vertex-cover-problems]].

## Proof

**Proof technique:** direct.

1.1 Construct a graph $G_\varphi$ with one vertex $v_{jr}$ for each literal occurrence $\ell_{jr}$ in clause $C_j$. Join $v_{jr}$ and $v_{j'r'}$ by an edge exactly when $j\ne j'$ and the literals $\ell_{jr}$ and $\ell_{j'r'}$ are not complementary. Output the CLIQUE instance $(G_\varphi,m)$. [L2, F1, given, construct]

2.1 Assume that $\varphi$ is satisfiable, and choose a satisfying assignment. For each clause $C_j$, pick one literal made true by that assignment and take the corresponding vertex of $G_\varphi$. This gives $m$ chosen vertices, one from each clause. Two chosen literals cannot be complementary because one assignment cannot make a variable and its negation both true, so step 1.1 makes every chosen pair adjacent. Therefore the chosen vertices form an $m$-clique. [step 1.1, given, construct]

2.2 Assume conversely that $G_\varphi$ has a clique $K$ of size $m$. By step 1.1, no two vertices from the same clause are adjacent, so $K$ contains exactly one vertex from each clause. Again by step 1.1, the literals represented by those vertices are pairwise noncomplementary. Assign truth values so that every chosen literal is true, and extend arbitrarily to variables not yet assigned. Then each clause contains its chosen true literal, so $\varphi$ is satisfiable. [F1, step 1.1, construct]

2.3 The graph $G_\varphi$ has $3m$ vertices and at most $9m^2$ candidate edges, so the map in step 1.1 is computable in polynomial time. Steps 2.1 and 2.2 prove
$$ \varphi\in 3\text{-}SAT \iff (G_\varphi,m)\in CLIQUE. $$
By [L1] and [L2], this is a polynomial-time many-one reduction. [L1, L2, step 1.1, step 2.1, step 2.2] ∎
