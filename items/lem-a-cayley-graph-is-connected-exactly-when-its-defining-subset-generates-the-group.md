---
id: lem-a-cayley-graph-is-connected-exactly-when-its-defining-subset-generates-the-group
kind: lemma
title: "A Cayley graph is connected if and only if the subset generates the group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-walks-paths-and-connectedness-in-a-simple-graph, def-cayley-graph, def-generated-subgroup, def-alphabet-words-and-reduction]
aliases: []
landmark: true
proof_strategy: direct
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
## Statement

A Cayley graph is connected if and only if the subset generates the group.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[F2] A walk of length $\ell$ in a simple graph is a finite vertex list $(v_0,\dots,v_\ell)$ with consecutive vertices adjacent; a path is a walk with distinct vertices; the graph is connected when it is nonempty and every two vertices are joined by a path ([[def-walks-paths-and-connectedness-in-a-simple-graph]]).

[L1] $$\langle S \rangle \;:=\; \bigcap \{\, H \;:\; H \le G \text{ and } S \subseteq H \,\}.$$ ([[def-generated-subgroup]]).

[L2] An **elementary cancellation** deletes two adjacent letters $xx^{-1}$ or $x^{-1}x$. A word is **reduced** if no elementary cancellation applies. ([[def-alphabet-words-and-reduction]]).


## Proof

**Proof technique:** direct.

1.1 A walk from the identity to $g$ spells an expression for $g$ as a product of elements of $S$ and their inverses, and each such expression is a walk. [F1, F2, L1, L2]

2.1 So the component of the identity is exactly the generated subgroup, and left translation carries it onto the component of any vertex; connectedness therefore means the subgroup is everything. [F1, F2, L1, step 1.1] ∎
