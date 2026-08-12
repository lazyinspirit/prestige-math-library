---
id: fs-erdos-stone-simonovits-determines-the-extremal-number-for-every-graph
kind: false-statement
title: "Erdős–Stone–Simonovits determines the extremal number for every graph"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-erdos-stone-simonovits, thm-kovari-sos-turan-bound, def-asymptotic-extremal-notation-and-edge-density, def-proper-vertex-colouring-and-chromatic-number, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## False Statement

Erdős–Stone–Simonovits by itself determines $\operatorname{ex}(n,H)$, even up to its order of growth, for every finite graph $H$ with an edge.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] The complete bipartite graph $K_{A,B}$ has exactly all edges joining a vertex of $A$ to a vertex of $B$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A proper vertex colouring gives different colours to adjacent vertices, and its fibres are the colour classes ([[def-proper-vertex-colouring-and-chromatic-number]]).

[F3] If $H$ is a finite graph with an edge and $r=\chi(H)$, then $\operatorname{ex}(n,H)=(1-1/(r-1)+o(1))\binom n2$ ([[thm-erdos-stone-simonovits]]).

[F4] For $s,t\ge1$, the Kővári–Sós–Turán theorem gives $\operatorname{ex}(N,K_{s,t})=O_{s,t}(N^{2-1/s})$ ([[thm-kovari-sos-turan-bound]]).

[F5] $f=O(g)$ means an eventual constant upper bound, $f=o(g)$ means $f/g\to0$, and subscripts permit the constants and thresholds to depend on those parameters ([[def-asymptotic-extremal-notation-and-edge-density]]).

## Refutation

**Proof technique:** compare the quadratic-density conclusion with a sharper local bound.

1.1 The graph $K_{2,2}$ is bipartite, so $\chi(K_{2,2})=2$. Applied to it, Erdős–Stone–Simonovits says only $\operatorname{ex}(n,K_{2,2})=o(n^2)$. [given, F1, F2, F3, F5]

1.2 The separate common-neighbour theorem gives the strictly sharper upper bound $O(n^{3/2})$. Neither statement supplies a matching lower bound here, but the improvement already shows that the Erdős–Stone–Simonovits conclusion alone does not determine even the relevant subquadratic scale. [given, F4, F5]

2.1 Therefore the claimed universal determination is false. Erdős–Stone–Simonovits determines the leading quadratic density, not every lower-order extremal problem. [step 1.1, step 1.2] ∎
