---
id: "def-attaching-a-smooth-handle-with-corner-rounding"
kind: "definition"
title: "Attaching a smooth handle with corner rounding"
deps: ["def-k-handle-core-cocore-attaching-region-and-belt-sphere", "thm-collar-neighborhood-theorem"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      title: "Nicolaescu, An Invitation to Morse Theory"
    - url: "https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf"
      title: "Benedetti, Lectures on Differential Topology"
status: published
origin: "pipeline"
proof_strategy: "definition"
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $X$ be a smooth $n$-manifold with boundary, and let $k$ be an integer with $0\leq k\leq n$. Attach the handle of [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]] by a smooth embedding $h:S^{k-1}\times D^{n-k}\to\partial X$ that extends to a neighborhood of the disk factor. Form the quotient of $X\sqcup(D^k\times D^{n-k})$ identifying $z$ with $h(z)$ in the attaching region. The disk coordinates trivialize the normal bundle of the attaching sphere; this framing is part of the data. Use collars from [[thm-collar-neighborhood-theorem]] to give the seam its product smooth charts, then round the compact codimension-two corner. A compatible rounding is a smooth monotone planar profile, transverse to a common diagonal direction, agreeing with the two faces away from a small corner neighborhood. In coordinates along that diagonal it is a graph. This convention fixes the gluing and collar data; changing the attaching embedding is a different question. There is no corner to round when $k=0$ or $k=n$.
