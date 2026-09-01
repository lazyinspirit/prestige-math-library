---
id: cor-the-smooth-and-continuous-homotopy-categories-of-smooth-manifolds-have-the-same-morphism-sets
kind: corollary
title: "The smooth and continuous homotopy categories of smooth manifolds have the same morphism sets"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map,
       thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic,
       def-homotopy-relative-and-path-homotopy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

For smooth manifolds $M$ and $N$, the set of smooth-homotopy classes of smooth
maps $M\to N$ is naturally the same as the set of ordinary homotopy classes of
continuous maps $M\to N$.

## Facts & Assumptions

**Given:** Smooth manifolds $M$ and $N$.

[L1] Every continuous map is homotopic to a smooth map
([[cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map]]).

[L2] Continuous homotopies between smooth maps can be smoothed
([[thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], every continuous homotopy class has at least one smooth representative. [L1, given]

1.2 If two smooth maps are homotopic as continuous maps, then [L2] upgrades that continuous homotopy to a smooth one. Thus two smooth representatives lie in the same smooth-homotopy class exactly when they lie in the same continuous homotopy class. [L2, given]

2.1 Steps 1.1 and 1.2 identify the two morphism sets canonically. [step 1.1, step 1.2] ∎
