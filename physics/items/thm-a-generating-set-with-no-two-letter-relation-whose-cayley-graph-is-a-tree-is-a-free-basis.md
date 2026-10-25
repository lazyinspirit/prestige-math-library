---
id: thm-a-generating-set-with-no-two-letter-relation-whose-cayley-graph-is-a-tree-is-a-free-basis
kind: theorem
title: "If no product of two members of a generating set is the identity and the Cayley graph is a tree, the set is a free basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cycles-trees-and-forests-in-a-simple-graph, thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path, def-cayley-graph, thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree, def-free-group, def-free-basis, thm-reduced-words-form-the-free-group, thm-normal-form-for-the-word-quotient-model, def-alphabet-words-and-reduction]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement

If no product of two members of a generating set is the identity and the Cayley graph is a tree, the set is a free basis.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L1] A cycle is a closed walk of length at least three with distinct vertices apart from its endpoints; a forest is a simple graph with no cycle and a tree is a connected forest ([[def-cycles-trees-and-forests-in-a-simple-graph]]).

[L2] A simple graph is a tree if and only if every two of its vertices are joined by exactly one path ([[thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path]]).

[L3] The Cayley graph of a free group with respect to a free basis is a tree ([[thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree]]).

[L4] A **free group on a set $X$** is a group $F(X)$ together with a map $i:X\to F(X)$ such that, for every group $G$ and every function $u:X\to G$, there is a unique group homomorphism $\widehat u:F(X)\to G$ satisfying ([[def-free-group]]).

[L5] The subset $B$ is a **free basis** of $F$ if $(F,i)$ is a free group on the set $B$ in the sense of. ([[def-free-basis]]).

[L6] The reduced words on $X\sqcup X^{-1}$ form a group when the product of reduced words is their concatenation followed by free reduction. ([[thm-reduced-words-form-the-free-group]]).

[L7] Every class in $W(X)/{\sim}$ contains exactly one reduced word. ([[thm-normal-form-for-the-word-quotient-model]]).

[L8] An **elementary cancellation** deletes two adjacent letters $xx^{-1}$ or $x^{-1}x$. A word is **reduced** if no elementary cancellation applies. ([[def-alphabet-words-and-reduction]]).


## Proof

**Proof technique:** contradiction.

1.1 The universal property gives a surjection from the free group on $S$ onto $G$ restricting to the identity on $S$. [L3, L4, L5, L6]

2.1 Assume, for contradiction, that the kernel is nontrivial, and take a shortest nonempty reduced word in it; its length is at least two, since the map is injective on $S$. [L6, L7, L8, step 1.1, choose, assume-contra]

3.1 Length exactly two is excluded by the hypothesis that no product of two members of $S$ is the identity. [F1, step 2.1, cases]

4.1 Length at least three gives distinct partial products, by minimality, and these form a cycle in the Cayley graph, contradicting that it is a tree; so the kernel is trivial. [F1, L1, L2, L4, L5, step 2.1, step 3.1, cases-exhaustive, discharge-contradiction] ∎
