---
id: thm-left-translation-is-a-free-action-by-labelled-graph-automorphisms-of-a-cayley-graph
kind: theorem
title: "Left translation acts on a Cayley graph by label-preserving automorphisms, freely on vertices"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-labelled-directed-graph-and-labelled-graph-isomorphism, def-directed-labelled-cayley-graph, def-cayley-graph, def-group-action, def-free-group-action]
aliases: []
landmark: false
proof_strategy: direct
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

Left translation acts on a Cayley graph by label-preserving automorphisms, freely on vertices.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] The directed labelled Cayley graph of a group $G$ and a subset $S$ has vertex set $G$ and an arc from $g$ to $gs$ labelled $s$ for each $g\in G$ and $s\in S$ ([[def-directed-labelled-cayley-graph]]).

[F2] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L1] A labelled directed graph is a vertex set with a set of arcs each carrying a label, and a labelled isomorphism is a vertex bijection preserving arcs and labels ([[def-labelled-directed-graph-and-labelled-graph-isomorphism]]).

[L2] A **left action** of $G$ on $X$ is a function $G\times X\to X$, written $(g,x)\mapsto g\cdot x$, such that ([[def-group-action]]).

[L3] A left action of a group $G$ on a set $X$ is **free** when ([[def-free-group-action]]).


## Proof

**Proof technique:** direct.

1.1 Left multiplication by $h$ sends the arc from $g$ to $gs$ to the arc from $hg$ to $hgs$, which carries the same label. [F1, F2, L1]

2.1 It is bijective on vertices with inverse left multiplication by $h^{-1}$, and the assignment is a homomorphism into the label-preserving automorphism group. [F1, L1, L2, step 1.1]

3.1 It fixes a vertex only when $hg=g$, that is only when $h$ is the identity, so the action is free. [L3, step 2.1] ∎
