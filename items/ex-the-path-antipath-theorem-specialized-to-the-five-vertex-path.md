---
id: ex-the-path-antipath-theorem-specialized-to-the-five-vertex-path
kind: example
title: "The path-antipath theorem specialized to $P_5$ and $\\overline{P_5}$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-path-and-antipath-free-graphs-have-the-erdos-hajnal-property, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Graphs with no induced $P_5$ and no induced $\overline{P_5}$ have the
Erdős–Hajnal property.

## Facts & Assumptions

**Given:** The standard five-vertex path $P_5$.

[L1] For every integer $k\ge 2$, the class forbidding $P_k$ and $\overline{P_k}$ has the Erdős–Hajnal property ([[cor-path-and-antipath-free-graphs-have-the-erdos-hajnal-property]]).

[L2] The graph $P_5$ is the standard path on five vertices ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], the parameter choice $k=5$ in [L1] is exactly the class forbidding $P_5$ and $\overline{P_5}$. [L1, L2]

2.1 Therefore graphs with no induced $P_5$ and no induced $\overline{P_5}$ have the Erdős–Hajnal property. [step 1.1] ∎
