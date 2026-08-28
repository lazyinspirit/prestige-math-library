---
id: cex-cospectral-graphs-need-not-be-isomorphic
kind: counterexample
title: "Two cospectral graphs need not be isomorphic"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-graph-spectrum-spectral-radius-and-cospectrality, prop-spectrum-is-an-isomorphism-invariant, def-standard-complete-bipartite-path-and-cycle-graphs, thm-spectrum-of-the-cycle-graph, thm-spectrum-of-the-complete-bipartite-graph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Steve Butler, guest notes on cospectral graphs"
      url: "https://www.stevebutler.org/research/publications"
---

## Statement refuted

If two finite simple graphs are cospectral, then they are isomorphic.

## Facts & Assumptions

**Given:** The star $K_{1,4}$ and the disjoint union $C_4\sqcup K_1$.

[L1] The graph $K_{1,4}$ has spectrum $\{2,0,0,0,-2\}$ ([[thm-spectrum-of-the-complete-bipartite-graph]]).

[L2] The graph $C_4$ has spectrum $\{2,0,0,-2\}$ ([[thm-spectrum-of-the-cycle-graph]]).

[L3] Isomorphic graphs have the same spectrum ([[prop-spectrum-is-an-isomorphism-invariant]]).

[F1] Cospectral graphs are those with the same adjacency spectrum ([[def-graph-spectrum-spectral-radius-and-cospectrality]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the star $K_{1,4}$ has spectrum $\{2,0,0,0,-2\}$. By [L2], the cycle $C_4$ has spectrum $\{2,0,0,-2\}$, so adjoining an isolated vertex contributes one more zero eigenvalue and gives the same spectrum for $C_4\sqcup K_1$. Hence the two graphs are cospectral by [F1]. [L1, L2, F1]

2.1 The graphs are not isomorphic, because $K_{1,4}$ is connected while $C_4\sqcup K_1$ is not. Therefore the converse of [L3] fails. [step 1.1, L3]

3.1 So cospectral graphs need not be isomorphic. [step 1.1, step 2.1] ∎
