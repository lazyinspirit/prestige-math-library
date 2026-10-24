---
id: fs-nonisomorphic-groups-cannot-have-isomorphic-cayley-graphs
kind: false-statement
title: "FALSE: groups with isomorphic Cayley graphs are isomorphic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cayley-graph, def-standard-complete-bipartite-path-and-cycle-graphs, thm-classification-of-cyclic-groups, def-graph-isomorphism-and-complement]
aliases: []
landmark: false
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
## Statement refuted

groups with isomorphic Cayley graphs are isomorphic.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[F1] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L1] On a finite vertex set $V$, the **empty graph** has edge set $\varnothing$ and the **complete graph** $K_V$ has edge set $[V]^2$. When $V$ is an $n$-element labelled set, these are also denoted $\overline K_n$ and $K_n$. ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L2] If $G=\langle g\rangle$ is cyclic, then exactly one of the following applies: ([[thm-classification-of-cyclic-groups]]).

[L3] A **graph isomorphism** is a bijection $\varphi:V\to W$ such that, for all distinct $u,v\in V$, ([[def-graph-isomorphism-and-complement]]).


## Refutation

**Proof technique:** contradiction.

1.1 The claim asserts that the isomorphism type of some Cayley graph determines the group. [F1, assume-contra]

2.1 Taking the whole group as generating set, both the symmetric group on three letters and the cyclic group of order six give the complete graph on six vertices, and those groups are not isomorphic. [F1, L1, L2, L3, step 1.1, discharge-contradiction] ∎
