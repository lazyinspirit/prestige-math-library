---
id: cex-a-wild-arc-drawing-is-not-a-plane-graph
kind: counterexample
title: "An injective nonpolygonal arc drawing is excluded by the page's finite polygonal plane-graph convention"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-plane-graph-face-and-boundary, def-polygonal-arc-and-polygon, def-path-connected]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Jeff Erickson, Planar Graphs"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.pdf"
pipeline_run: null
---

## Statement refuted

Every injective continuous drawing of an abstract edge is a plane graph under this page's definition.

## Facts & Assumptions

**Given:** Let $\gamma:[0,1]\to\mathbb R^2$ be defined by $\gamma(0)=(0,0)$ and $\gamma(t)=(t,t\sin(1/t))$ for $t>0$.

[F1] A path is a continuous map from the unit interval ([[def-path-connected]]).

[L1] A plane graph uses finitely polygonal edge arcs that meet only at common endpoints ([[def-plane-graph-face-and-boundary]]).

## Counterexample

**Proof technique:** direct.

1.1 The first coordinate of $\gamma(t)$ is $t$, so $\gamma$ is injective. For $t>0$ it is continuous, and $|t\sin(1/t)|\le t$ shows continuity at $0$. Thus [F1] makes it a continuous arc with distinct endpoints. It is not polygonal: the second coordinate vanishes at infinitely many points $t=1/(k\pi)$ accumulating at $0$ and changes sign between them, whereas a finite union of line segments either has only finitely many such crossings of the horizontal axis or contains a nontrivial segment of that axis. The latter is impossible here because $t\sin(1/t)$ is not identically zero on any interval. [F1, construct]

2.1 Use the image of $\gamma$ as the drawing of the sole edge of a two-vertex abstract graph. The drawing is injective but its edge is not a polygonal arc in the sense of [[def-polygonal-arc-and-polygon]], so [L1] excludes this particular drawing from the page's class of plane graphs. This does not make the abstract one-edge graph nonplanar: drawing its edge as a straight segment gives a plane embedding. [L1, step 1.1, construct] ∎
