---
id: ex-pure-and-mixed-pairs-in-p-four
kind: example
title: "Complete, anticomplete and mixed vertex-set pairs in $P_4$"
status: published
origin: session
deps: [def-edges-between-sets-and-pure-mixed-pairs, def-standard-complete-bipartite-path-and-cycle-graphs]
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

In the path $P_4=1,2,3,4$:

- $(\{2\},\{1,3\})$ is complete;
- $(\{1\},\{3,4\})$ is anticomplete; and
- $(\{2\},\{3,4\})$ is mixed.

## Facts & Assumptions

**Given:** $P_4$ with edge set $\{12,23,34\}$.

[F1] Complete means all cross pairs are edges, anticomplete means none are edges, and mixed means some but not all are edges ([[def-edges-between-sets-and-pure-mixed-pairs]]).

[F2] The only edges of the path are consecutive pairs ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** direct.

1.1 Both $21$ and $23$ are edges, so $(\{2\},\{1,3\})$ is complete. [F1, F2]

1.2 Neither $13$ nor $14$ is an edge, so $(\{1\},\{3,4\})$ is anticomplete. [F1, F2]

1.3 The pair $23$ is an edge but $24$ is not, so $(\{2\},\{3,4\})$ is mixed. [F1, F2]

2.1 These verify the three claimed pair types. [step 1.1, step 1.2, step 1.3] ∎
