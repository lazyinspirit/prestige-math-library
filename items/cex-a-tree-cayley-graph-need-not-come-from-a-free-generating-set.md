---
id: cex-a-tree-cayley-graph-need-not-come-from-a-free-generating-set
kind: counterexample
title: "The Cayley graphs of $\\mathbb Z/2$ for $\\{1\\}$ and of $\\mathbb Z$ for $\\{-1,1\\}$ are trees, and neither generating set is free"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cayley-graph, def-cycles-trees-and-forests-in-a-simple-graph, thm-a-generating-set-with-no-two-letter-relation-whose-cayley-graph-is-a-tree-is-a-free-basis, def-free-basis, thm-classification-of-cyclic-groups]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement refuted

Whenever a Cayley graph is a tree, the chosen generating set is a free basis.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[F1] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L1] A cycle is a closed walk of length at least three with distinct vertices apart from its endpoints; a forest is a simple graph with no cycle and a tree is a connected forest ([[def-cycles-trees-and-forests-in-a-simple-graph]]).

[L2] If no product of two members of a generating set is the identity and the Cayley graph is a tree, the set is a free basis ([[thm-a-generating-set-with-no-two-letter-relation-whose-cayley-graph-is-a-tree-is-a-free-basis]]).

[L3] The subset $B$ is a **free basis** of $F$ if $(F,i)$ is a free group on the set $B$ in the sense of. ([[def-free-basis]]).

[L4] If $G=\langle g\rangle$ is cyclic, then exactly one of the following applies: ([[thm-classification-of-cyclic-groups]]).


## Counterexample

**Proof technique:** constructive.

1.1 The Cayley graph of the group of order two for its nonidentity element is a single edge, a tree, and that group is not free. [F1, L1, L4, construct]

2.1 The Cayley graph of the integers for the generating set $\{-1,1\}$ is the line, a tree, and that set is not a free basis. [F1, L1, L4, step 1.1]

3.1 In both cases a product of two members of the generating set is the identity, which is exactly the hypothesis the converse theorem adds. [L2, L3, step 1.1, step 2.1, discharge-construct] ∎
