---
id: thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree
kind: theorem
title: "The Cayley graph of a free group with respect to a free basis is a tree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cycles-trees-and-forests-in-a-simple-graph, thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path, def-cayley-graph, lem-a-cayley-graph-is-connected-exactly-when-its-defining-subset-generates-the-group, def-free-group, def-free-basis, def-alphabet-words-and-reduction, thm-reduced-words-form-the-free-group, thm-normal-form-for-the-word-quotient-model]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement

The Cayley graph of a free group with respect to a free basis is a tree.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L1] A Cayley graph is connected if and only if its defining subset generates the group ([[lem-a-cayley-graph-is-connected-exactly-when-its-defining-subset-generates-the-group]]).

[L2] A cycle is a closed walk of length at least three with distinct vertices apart from its endpoints; a forest is a simple graph with no cycle and a tree is a connected forest ([[def-cycles-trees-and-forests-in-a-simple-graph]]).

[L3] A simple graph is a tree if and only if every two of its vertices are joined by exactly one path ([[thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path]]).

[L4] A **free group on a set $X$** is a group $F(X)$ together with a map $i:X\to F(X)$ such that, for every group $G$ and every function $u:X\to G$, there is a unique group homomorphism $\widehat u:F(X)\to G$ satisfying ([[def-free-group]]).

[L5] The subset $B$ is a **free basis** of $F$ if $(F,i)$ is a free group on the set $B$ in the sense of. ([[def-free-basis]]).

[L6] An **elementary cancellation** deletes two adjacent letters $xx^{-1}$ or $x^{-1}x$. A word is **reduced** if no elementary cancellation applies. ([[def-alphabet-words-and-reduction]]).

[L7] The reduced words on $X\sqcup X^{-1}$ form a group when the product of reduced words is their concatenation followed by free reduction. ([[thm-reduced-words-form-the-free-group]]).

[L8] Every class in $W(X)/{\sim}$ contains exactly one reduced word. ([[thm-normal-form-for-the-word-quotient-model]]).


## Proof

**Proof technique:** contradiction.

1.1 A free basis generates, so the Cayley graph is connected. [F1, L1, L4, L5]

1.2 Suppose it contains a cycle $g_0,\dots,g_{n-1}$ of length $n\ge3$, with $g_n=g_0$. On each right Cayley edge, the quotient $g_j^{-1}g_{j+1}$ is a basis letter or its inverse. No two consecutive labels cancel, including the last and first: such cancellation would immediately return to the preceding vertex, contrary to the distinct vertices in a simple cycle. Thus the cyclic sequence of edge labels is a nonempty reduced word. [F1, L2, L6, L7, assume-contra]

2.1 The product of its labels telescopes to $g_0^{-1}g_n=e$. A nonempty reduced word cannot represent the identity by uniqueness of normal form, a contradiction. The graph is connected and has no cycle, hence is a tree. [L2, L8, step 1.1, step 1.2, discharge-contradiction] ∎
