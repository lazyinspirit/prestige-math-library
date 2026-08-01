---
id: def-induced-copy-number
kind: definition
title: "The induced-embedding count $\\operatorname{ind}_H(G)$"
status: published
origin: session
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
    - title: "ISGCI, Information System on Graph Classes and their Inclusions"
      url: "https://www.cs.sfu.ca/~pavol/graphclasses/"
pipeline_run: null
---

## Definition

For finite graphs $H$ and $G$, define the **induced-embedding count**

$$\operatorname{ind}_H(G):=|\{\varphi:V(H)\to V(G):\varphi\text{ is an induced embedding}\}|.$$

The set inside the cardinality is a subset of the finite function set $V(G)^{V(H)}$, so the displayed natural number is well defined ([[thm-cardinality-of-a-set-of-functions]], [[thm-subset-of-a-finite-set]], [[def-finite-cardinality]]).

This convention counts labelled embeddings, not vertex subsets. An induced copy with image $W$ contributes one embedding for each isomorphism $H\to G[W]$ ([[def-induced-embedding-and-induced-copy]]).
