---
id: ex-integral-network-max-flow-min-cut
kind: example
title: "A four-vertex integral network with an exhibited maximum flow and minimum cut of value five"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-ford-fulkerson-integral-max-flow-min-cut, def-integral-network-flow-cut-and-residual-network]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let the vertices be $s,u,v,t$, with labelled arcs and capacities
$$s\!\to u:3,\quad s\!\to v:2,\quad u\!\to v:1,\quad u\!\to t:2,\quad v\!\to t:3.$$
The flow with values $3,2,1,2,3$ in that order has value five and is maximum.

## Facts & Assumptions

**Given:** The displayed finite integral network and flow $f$.

[L1] Finite integral max-flow min-cut equates a maximum flow value and a minimum cut capacity ([[thm-ford-fulkerson-integral-max-flow-min-cut]]).

## Verification

**Verification technique:** direct.

1.1 At $u$, incoming flow $3$ equals outgoing flow $1+2$, and at $v$, incoming flow $2+1$ equals outgoing flow $3$; every arc value is within its capacity. [given]

1.2 The flow value is $3+2=5$, while the cut $S=\{s\}$ has capacity $3+2=5$.

1.3 By [L1], the exhibited feasible flow and cut of common value five are respectively maximum and minimum. [L1]

2.1 This network therefore has max-flow value and min-cut capacity both equal to five. [step 1.1, step 1.2, step 1.3] ∎
