---
id: "cor-index-n-handles-cap-boundary-spheres"
kind: "corollary"
title: "Index n handles cap boundary spheres"
deps: ["def-attaching-a-smooth-handle-with-corner-rounding"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf"
      title: "Benedetti, Lectures on Differential Topology"
status: "draft"
origin: "pipeline"
proof_strategy: "whole attaching boundary"
---

## Statement

An $n$-handle attaches along its whole $S^{n-1}$ boundary. For $n\ge2$ it fills a boundary component diffeomorphic to $S^{n-1}$. For $n=1$ its attaching $S^0$ is a pair of boundary points, possibly in different components. For $n=0$ it is the same disjoint point attachment as a $0$-handle.

## Facts & Assumptions

[F1] [[def-attaching-a-smooth-handle-with-corner-rounding]]: Assume $\mathrm{AC}_\omega$. Let $X$ be a smooth $n$-manifold with boundary. Attach the handle of def-k-handle-core-cocore-attaching-region-and-belt-sphere by a smooth embedding $h:S^{k-1}\times D^{n-k}\to\partial X$ that extends to a neighborhood of the disk factor. Form the quotient of $X\sqcup(D^k\times D^{n-k})$ identifying $z$ with $h(z)$ in the attaching region. The disk coordinates trivialize the normal bundle of the attaching sphere; this framing is part of the data. Use collars from thm-collar-neighborhood-theorem to give the seam its product smooth charts, then round the compact codimension-two corner. A compatible rounding is a smooth monotone planar profile, transverse to a common diagonal direction, agreeing with the two faces away from a small corner neighborhood. In coordinates along that diagonal it is a graph. This convention fixes the gluing and collar data; changing the attaching embedding is a different question. There is no corner to round when $k=0$ or $k=n$.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For $k=n$ the disk factor $D^{n-k}=D^0$ is a point, so the attaching region is all of $S^{n-1}=\partial D^n$. For $n\ge2$, its smooth embedding into $\partial X$ is locally a diffeomorphism (the dimensions agree and its derivative is injective). Its image is open and is also closed by compactness. Since $S^{n-1}$ is connected, that image is one boundary component. Gluing the disk fills it. [F1, algebra]

2.1 For $n=1$, $S^0$ has two points, whose images are two distinct boundary points; nothing forces them to lie in the same component of $X$. For $n=0$, $S^{-1}$ is empty and the attached $D^0$ is a new isolated point. Thus the connected-sphere formulation is restricted exactly as stated. [F1, step 1.1, algebra] ∎
