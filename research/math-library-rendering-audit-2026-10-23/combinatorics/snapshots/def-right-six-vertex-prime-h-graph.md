---
id: def-right-six-vertex-prime-h-graph
kind: definition
title: "The right six-vertex prime $\\mathcal H$-graph"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-left-six-vertex-prime-h-graph, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized graph-identity repair; complement edge set checked against repaired left graph and NSS Figure 1; targeted rendercheck; no independent judgment."
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

The **right six-vertex prime $\mathcal H$-graph** is the complement of the left
six-vertex prime $\mathcal H$-graph on the same labelled vertex set
$\{a,b,c,d,e,f\}$
([[def-left-six-vertex-prime-h-graph]], [[def-graph-isomorphism-and-complement]]).
Explicitly, its edges are
$$\{ac,ae,af,bf,cd,ce,cf,df\}.$$
The degrees in the order $a,b,c,d,e,f$ are $3,1,4,2,2,4$.

This complement is isomorphic to the right drawing in Nguyen–Scott–Seymour,
Figure 1; the shared labels here are inherited from the left graph and are
not the positions in the right drawing.

## Remarks

The earlier interpretation as the complement of the triangle-with-three-leaves
net is superseded together with the corrected left-graph definition.
