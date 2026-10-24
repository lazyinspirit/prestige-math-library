---
id: def-quotient-graph-of-an-action-without-inversions
kind: definition
title: "The quotient graph of an action without inversions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-edge-inversion-and-action-without-inversions, def-oriented-graph-with-edge-reversal]
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
    - title: "Yuriy Tumarkin, Groups Acting on Trees"
      url: "https://www.scribd.com/document/825918235/trees"
---

## Definition

Let a group $G$ act without inversions on an oriented graph $X=(V,E)$. The
**quotient graph** $G\backslash X$ has

$$V(G\backslash X)=G\backslash V,\qquad E(G\backslash X)=G\backslash E,$$

with origin, terminus, and reversal defined on orbits by

$$o(G\cdot e)=G\cdot o(e),\qquad t(G\cdot e)=G\cdot t(e),\qquad \overline{G\cdot e}=G\cdot\bar e.$$

Because the action is without inversions, $G\cdot e\ne G\cdot\bar e$, so the
reversal map is still fixed-point-free and the incidence data is independent of
the chosen representatives.
