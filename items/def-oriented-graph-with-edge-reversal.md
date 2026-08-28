---
id: def-oriented-graph-with-edge-reversal
kind: definition
title: "An oriented graph with edge reversal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
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

An **oriented graph** consists of a vertex set $V$, an oriented-edge set $E$,
maps

$$o,t:E\to V,$$

called the origin and terminus, and a fixed-point-free involution

$$E\to E,\qquad e\mapsto\bar e,$$

such that

$$o(\bar e)=t(e),\qquad t(\bar e)=o(e).$$

Thus each geometric edge is the two-element orbit $\{e,\bar e\}$. Parallel
geometric edges and loops are allowed in a general oriented graph; the tree
condition later excludes them.
