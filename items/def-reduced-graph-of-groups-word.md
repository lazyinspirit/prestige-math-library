---
id: def-reduced-graph-of-groups-word
kind: definition
title: "Reduced words in a graph of groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree, def-graph-of-groups]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
pipeline_run: null
---

## Definition

Fix a graph of groups $\mathcal G$ and a maximal subtree $T$. A
**graph-of-groups word** is an expression

$$g_0 e_1 g_1 \cdots e_n g_n,$$

where $(e_1,\dots,e_n)$ is an edge path in the underlying graph and each
$g_j$ lies in the vertex group at the intermediate vertex.

Such a word is **closed** when its edge path starts and ends at the same
vertex. A word of edge length $0$ is closed at the vertex containing its unique
coefficient.

Such a word is **reduced** when no cancellation pattern
$e_{j+1}=\bar e_j$ occurs with the intervening coefficient $g_j$ lying in the
edge-group image $\alpha_{\bar e_j}(G_{e_j})$. Tree edges remain in this word
notation to record movement between vertex groups, even though their edge
symbols represent the identity in $\pi_1(\mathcal G,T)$.
