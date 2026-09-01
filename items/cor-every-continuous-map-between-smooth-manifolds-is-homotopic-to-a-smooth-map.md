---
id: cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map
kind: corollary
title: "Every continuous map between smooth manifolds is homotopic to a smooth map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-whitney-approximation-for-manifold-valued-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Smooth Approximation of Maps Between Manifolds"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Every continuous map between smooth manifolds is homotopic to a smooth map.

## Facts & Assumptions

**Given:** A continuous map between smooth manifolds.

[L1] Every continuous manifold-valued map admits a smooth approximation that is
homotopic to it ([[thm-whitney-approximation-for-manifold-valued-maps]]).

## Proof
**Proof technique:** direct.

1.1 Apply [L1] to the given continuous map and obtain a smooth map $\widetilde F$ homotopic to it. [L1, given]

2.1 The map $\widetilde F$ is smooth and lies in the homotopy class of the original map, so the claim follows. [step 1.1] ∎
