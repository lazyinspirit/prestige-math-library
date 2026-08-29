---
id: def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree
kind: definition
title: "The fundamental group of a graph of groups relative to a maximal tree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-maximal-subtree-of-a-connected-graph, def-path-group-of-a-graph-of-groups]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
pipeline_run: null
---

## Definition

Let $\mathcal G$ be a graph of groups on a connected graph $X$, and let
$T\subseteq X$ be a maximal subtree. The **fundamental group**
$\pi_1(\mathcal G,T)$ is the quotient of the path group $\Pi(\mathcal G)$ by
the additional relations

$$e=1\qquad(e\in E(T)).$$

So the tree edges are collapsed, while the non-tree edges remain as stable
letters.
