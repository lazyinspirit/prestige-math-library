---
id: def-hyperbolic-group
kind: definition
title: "Hyperbolic groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cayley-graph, def-finitely-generated-group, def-word-metric, def-delta-slim-geodesic-triangle-and-hyperbolic-space]
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Definition

A finitely generated group $G$ is a **hyperbolic group** if there exists a
finite generating set $S$ such that the geometric realization of the Cayley
graph $\Gamma(G,S)$, with every edge realized as a unit interval and equipped
with the induced path metric, is a hyperbolic geodesic metric space.  On the
vertex set $G$, this path metric restricts to the word metric associated with
$S$.
