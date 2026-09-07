---
id: "ex-a-one-handle-joins-components-or-adds-a-tunnel"
kind: "example"
title: "A one handle joins components or adds a tunnel"
deps: ["def-attaching-a-smooth-handle-with-corner-rounding"]
provenance:
  statement: "ai-generated"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf"
      title: "Benedetti, Lectures on Differential Topology"
status: published
origin: "pipeline"
proof_strategy: "explicit planar gluing"
generation:
  role: "example"
---

## Example

A surface $1$-handle attached along intervals on two different disk components produces a disk. An orientable $1$-handle attachment along two intervals of the boundary of one disk produces an annulus. A twisted attachment to one disk requires different orientation data.

## Facts & Assumptions

[F1] [[def-attaching-a-smooth-handle-with-corner-rounding]]: Assume $\mathrm{AC}_\omega$. Let $X$ be a smooth $n$-manifold with boundary. Attach the handle of def-k-handle-core-cocore-attaching-region-and-belt-sphere by a smooth embedding $h:S^{k-1}\times D^{n-k}\to\partial X$ that extends to a neighborhood of the disk factor. Form the quotient of $X\sqcup(D^k\times D^{n-k})$ identifying $z$ with $h(z)$ in the attaching region. The disk coordinates trivialize the normal bundle of the attaching sphere; this framing is part of the data. Use collars from thm-collar-neighborhood-theorem to give the seam its product smooth charts, then round the compact codimension-two corner. A compatible rounding is a smooth monotone planar profile, transverse to a common diagonal direction, agreeing with the two faces away from a small corner neighborhood. In coordinates along that diagonal it is a graph. This convention fixes the gluing and collar data; changing the attaching embedding is a different question. There is no corner to round when $k=0$ or $k=n$.

## Verification

**Given:** The objects and hypotheses in the example.

1.1 A surface handle is a rectangle, attached by its two opposite end edges. Boundary interval parametrizations can be straightened in disk collars: extend their increasing one-dimensional coordinate changes across an annular collar by interpolating a lifted circle coordinate, whose derivative stays positive. If necessary reflect an entire disk or the rectangle to normalize an end orientation. Thus the two-disk attachment is represented by two rectangular disks joined end to end by a rectangular strip. Their union is a longer rectangle before compatible corner rounding, hence a disk afterward. [F1, algebra]

2.1 For the one-disk orientable attachment, represent the disk as the rectangle $[0,1]\times[0,1]$ cut from an annulus along one radial interval. Its two radial edges are the prescribed attaching intervals after the same boundary straightening. Glue in a second rectangle bridging these edges with the orientation-compatible identifications; in coordinates the result is $([0,2]/(0\sim2))\times[0,1]$, an annulus. Reversing just one end identification instead reverses the transverse interval after one circuit, so this coordinate description no longer gives the orientable annulus. The claim explicitly excludes that twist. [F1, step 1.1, algebra] ∎
