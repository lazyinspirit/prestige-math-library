---
id: def-delta-slim-geodesic-triangle-and-hyperbolic-space
kind: definition
title: "Delta-slim triangles and hyperbolic spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-geodesic-segment-triangle-and-geodesic-metric-space]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.2.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Definition

Let $(X,d)$ be a geodesic metric space and let $\delta \ge 0$.

A geodesic triangle in $X$ is **$\delta$-slim** if each side lies in the
closed $\delta$-neighborhood of the union of the other two sides.

The space $X$ is **Gromov hyperbolic** if there exists $\delta \ge 0$ such that
every geodesic triangle in $X$ is $\delta$-slim.
