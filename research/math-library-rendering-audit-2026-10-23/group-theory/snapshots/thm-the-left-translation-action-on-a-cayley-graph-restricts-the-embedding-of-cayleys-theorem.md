---
id: thm-the-left-translation-action-on-a-cayley-graph-restricts-the-embedding-of-cayleys-theorem
kind: theorem
title: "The label-preserving automorphism action on a Cayley graph is the left regular representation of Cayley's theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cayley-graph, thm-left-translation-is-a-free-action-by-labelled-graph-automorphisms-of-a-cayley-graph, thm-cayleys-theorem, def-group-action, def-group-isomorphism-and-automorphism]
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

The label-preserving automorphism action on a Cayley graph is the left regular representation of Cayley's theorem.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[L1] Left translation acts on a Cayley graph by label-preserving automorphisms, freely on vertices ([[thm-left-translation-is-a-free-action-by-labelled-graph-automorphisms-of-a-cayley-graph]]).

[F1] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L2] Every group $G$ is isomorphic to the subgroup of $\operatorname{Sym}(G)$ formed by its left translations $\lambda_g:x\mapsto gx$. ([[thm-cayleys-theorem]]).

[L3] A **left action** of $G$ on $X$ is a function $G\times X\to X$, written $(g,x)\mapsto g\cdot x$, such that ([[def-group-action]]).

[L4] Group isomorphisms, automorphisms and the set $\operatorname{Aut}(G)$. ([[def-group-isomorphism-and-automorphism]]).


## Proof

**Proof technique:** direct.

1.1 Cayley’s theorem embeds a group in the symmetric group on its underlying set by left multiplication, and the action just constructed has exactly those permutations. [F1, L1, L2, L3]

2.1 So the label-preserving automorphism action is that embedding followed by the inclusion of the automorphism group in the symmetric group; the Cayley graph refines the regular action rather than supplying a second embedding theorem. [L1, L2, L4, step 1.1] ∎
