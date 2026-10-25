---
id: def-left-six-vertex-prime-h-graph
kind: definition
title: "The left six-vertex prime $\\mathcal H$-graph"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized graph-identity repair against visually inspected NSS Figure 1; targeted rendercheck; no independent judgment."
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. IV. New graphs with the Erdős-Hajnal property, Figure 1"
      url: "https://arxiv.org/pdf/2307.06455"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 2"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Definition

The **left six-vertex prime $\mathcal H$-graph** is the graph $L$ on vertices

$$\{a,b,c,d,e,f\}$$

with edge set

$$\{ab,bc,ad,bd,be,de,ef\}.$$

The labels follow the left drawing in Nguyen–Scott–Seymour, Figure 1:
$a,b,c$ run from left to right along its top row and $d,e,f$ along its bottom
row. The vertices $a,b,d,e$ form a diamond (a complete four-vertex graph
with the edge $ae$ removed); $c$ is attached only to $b$ and $f$ only to $e$.
Their degrees in the displayed order are $2,4,1,3,3,1$.

## Remarks

The earlier triangle-with-three-pendant-leaves description specified the
net, a different graph with degree sequence $3,3,3,1,1,1$. It is superseded
here; conclusions about that earlier graph do not establish conclusions
about the Figure 1 graph.
