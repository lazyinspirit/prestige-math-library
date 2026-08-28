---
id: def-graph-automorphism-and-group-action-on-a-simplicial-graph
kind: definition
title: "Graph automorphisms and group actions on a simplicial graph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-action, def-oriented-graph-with-edge-reversal]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
    - title: "Yuriy Tumarkin, Groups Acting on Trees"
      url: "https://www.scribd.com/document/825918235/trees"
---

## Definition

Let $X=(V,E)$ be an oriented graph. A **graph automorphism** of $X$ is a pair of
bijections on $V$ and $E$, both denoted by $g$, such that

$$g(o(e))=o(g(e)),\qquad g(t(e))=t(g(e)),\qquad g(\bar e)=\overline{g(e)}.$$

A **group action on the simplicial graph $X$** is a left action
([[def-group-action]]) of a group $G$ on both $V$ and $E$ such that each
$g\in G$ acts by a graph automorphism in the above sense.
