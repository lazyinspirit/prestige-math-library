---
id: def-geodesic-segment-triangle-and-geodesic-metric-space
kind: definition
title: "Geodesic segments, geodesic triangles, and geodesic metric spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-geodesic-and-geodesic-metric-space]
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

Let $(X,d)$ be a metric space.

A **geodesic segment** from $x$ to $y$ is an isometric map

$$\gamma \colon [0,d(x,y)] \to X$$

with $\gamma(0)=x$ and $\gamma(d(x,y))=y$.

A **geodesic triangle** in $X$ is the union of three chosen geodesic segments
joining three points $x,y,z \in X$ pairwise.

The metric space $X$ is a **geodesic metric space** if every pair of points is
joined by at least one geodesic segment.
