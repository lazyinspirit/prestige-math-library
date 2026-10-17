---
page: finite-bit-random-streams-and-variate-generation-examples
title: Finite bit random streams and variate generation — Examples
status: draft
requires: [finite-bit-random-streams-and-variate-generation]
items: []
examples:
  - ex-lcg-low-bit-alternation
  - ex-box-muller-finite-midpoint-tail
  - ex-box-muller-zero-endpoint
  - ex-inverse-cdf-near-zero-density
---

These examples make the limits of finite random streams concrete: a full-period
LCG can alternate its low bit, midpoint Box–Muller has a finite radial cutoff,
and a raw zero endpoint makes its logarithm undefined. The inverse-CDF example
shows why a small CDF residual gives no uniform spatial error bound near a
vanishing density. Each example records the endpoint or distributional caveat
needed to interpret the corresponding theorem.
