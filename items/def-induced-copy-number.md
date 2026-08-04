---
id: def-induced-copy-number
kind: definition
title: "The induced-embedding count $\\operatorname{ind}_H(G)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-induced-embedding-and-induced-copy, thm-cardinality-of-a-set-of-functions, thm-subset-of-a-finite-set, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Swastik Kopparty, Local Structure: Subgraph Counts I"
      url: "https://www.math.toronto.edu/swastik/courses/rutgers/graphtheory-F11/homs.pdf"
pipeline_run: null
---

## Definition

For finite graphs $H$ and $G$, define the **induced-embedding count**

$$\operatorname{ind}_H(G):=|\{\varphi:V(H)\to V(G):\varphi\text{ is an induced embedding}\}|.$$

The set inside the cardinality is a subset of the finite function set $V(G)^{V(H)}$, so the displayed natural number is well defined ([[thm-cardinality-of-a-set-of-functions]], [[thm-subset-of-a-finite-set]], [[def-finite-cardinality]]).

This convention counts labelled embeddings, not vertex subsets. An induced copy with image $W$ contributes one embedding for each isomorphism $H\to G[W]$ ([[def-induced-embedding-and-induced-copy]]).
