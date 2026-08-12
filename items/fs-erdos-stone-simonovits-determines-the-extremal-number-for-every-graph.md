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

**Given:** Asymptotic notation from [[def-asymptotic-extremal-notation-and-edge-density]], chromatic number from [[def-proper-vertex-colouring-and-chromatic-number]], and $K_{2,2}$ from [[def-standard-complete-bipartite-path-and-cycle-graphs]].

The theorem [[thm-erdos-stone-simonovits]] states that for a graph $H$ with an edge, $\operatorname{ex}(n,H)=(1-1/(\chi(H)-1)+o(1))\binom n2$.

The theorem [[thm-kovari-sos-turan-bound]] states in particular that $\operatorname{ex}(n,K_{2,2})=O(n^{3/2})$.

## Refutation

**Proof technique:** compare the quadratic-density conclusion with a sharper local bound.

1.1 The graph $K_{2,2}$ is bipartite, so $\chi(K_{2,2})=2$. Applied to it, Erdős–Stone–Simonovits says only $\operatorname{ex}(n,K_{2,2})=o(n^2)$. [given]

1.2 The separate common-neighbour theorem gives the strictly sharper upper bound $O(n^{3/2})$. Neither statement supplies a matching lower bound here, but the improvement already shows that the Erdős–Stone–Simonovits conclusion alone does not determine even the relevant subquadratic scale. [given]

2.1 Therefore the claimed universal determination is false. Erdős–Stone–Simonovits determines the leading quadratic density, not every lower-order extremal problem. [step 1.1, step 1.2] ∎
