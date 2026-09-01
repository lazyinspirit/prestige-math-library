---
id: def-coordinate-projections-from-an-inverse-limit
kind: definition
title: "The inverse limit has its canonical coordinate projection maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-compatible-tuple-inverse-limit-of-groups]
verification:
  audited: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Definition

For an inverse limit $L=\varprojlim G_i$, the **$i$th coordinate projection** is

$$
\pi_i:L\to G_i,\qquad \pi_i((g_j)_{j\in I})=g_i.
$$

Because elements of $L$ are tuples, each projection is simply the ambient
Cartesian-product coordinate map restricted to the compatible-tuples subset
([[def-compatible-tuple-inverse-limit-of-groups]]).
