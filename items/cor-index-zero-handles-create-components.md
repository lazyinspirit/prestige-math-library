---
id: "cor-index-zero-handles-create-components"
kind: "corollary"
title: "Index zero handles create components"
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
proof_strategy: "empty attaching region"
---

## Statement

Assume $\mathrm{AC}_\omega$. A $0$-handle on a smooth $n$-manifold with boundary attaches along the empty set and adds one disjoint $n$-disk component. This includes an empty starting manifold and $n=0$.

## Facts & Assumptions

[F1] [[def-attaching-a-smooth-handle-with-corner-rounding]]: Assume $\mathrm{AC}_\omega$. Let $X$ be a smooth $n$-manifold with boundary, and let $k$ be an integer with $0\leq k\leq n$. Attach the handle of def-k-handle-core-cocore-attaching-region-and-belt-sphere by a smooth embedding $h:S^{k-1}\times D^{n-k}\to\partial X$ that extends to a neighborhood of the disk factor. Form the quotient of $X\sqcup(D^k\times D^{n-k})$ identifying $z$ with $h(z)$ in the attaching region. The disk coordinates trivialize the normal bundle of the attaching sphere; this framing is part of the data. Use collars from thm-collar-neighborhood-theorem to give the seam its product smooth charts, then round the compact codimension-two corner. A compatible rounding is a smooth monotone planar profile, transverse to a common diagonal direction, agreeing with the two faces away from a small corner neighborhood. In coordinates along that diagonal it is a graph. This convention fixes the gluing and collar data; changing the attaching embedding is a different question. There is no corner to round when $k=0$ or $k=n$.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 At $k=0$ the handle is $D^0\times D^n\cong D^n$ and its attaching region is $S^{-1}\times D^n=\varnothing$. Thus the defining quotient makes no identifications between the old manifold and the disk. [F1, algebra]

2.1 The quotient is their disjoint union. The disk is connected and nonempty, so it supplies exactly one new component, including when the old manifold is empty. At $n=0$ the new disk is a single point. There is no corner seam to round. [step 1.1, algebra] ∎
