---
id: ex-p-four-is-connected-and-anticonnected
kind: example
title: "$P_4$ is both connected and anticonnected"
status: published
origin: session
deps: [def-anticonnected-graph-and-anticonnected-component, def-connected-graph-and-connected-component, def-standard-complete-bipartite-path-and-cycle-graphs, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The structure of bull-free graphs"
      url: "https://web.math.princeton.edu/~mchudnov/bullsurvey.pdf"
pipeline_run: null
---

## Statement

The path $P_4$ is connected and anticonnected. Indeed, $\overline{P_4}\cong P_4$.

## Facts & Assumptions

**Given:** $P_4$ with vertices $1,2,3,4$ and edges $12,23,34$.

[F1] A path is connected ([[def-connected-graph-and-connected-component]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A graph is anticonnected when its complement is connected ([[def-anticonnected-graph-and-anticonnected-component]]).

[F3] Complement edges are precisely the nonedges between distinct vertices ([[def-graph-isomorphism-and-complement]]).

## Verification

**Proof technique:** direct.

1.1 The graph $P_4$ is connected. [F1]

1.2 Its complement has edges $13,14,24$, which form the path $3,1,4,2$. Thus $\overline{P_4}\cong P_4$ and is connected. [F3]

2.1 Therefore $P_4$ is anticonnected as well as connected. [step 1.1, step 1.2, F2] ∎
