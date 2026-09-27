---
id: cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map
kind: corollary
title: "Every continuous map between smooth manifolds is homotopic to a smooth map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, thm-whitney-approximation-for-manifold-valued-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Smooth Approximation of Maps Between Manifolds"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Every continuous map between
smooth manifolds is homotopic to a smooth map.

## Facts & Assumptions

**Given:** Countable choice and a continuous map between smooth manifolds.

[A1] Countable choice is [[def-countable-choice]].

[L1] Under [A1], every continuous manifold-valued map admits a smooth approximation that is homotopic to it ([[thm-whitney-approximation-for-manifold-valued-maps]]).

## Proof
**Proof technique:** direct.

1.1 Under [A1], apply [L1] to the given continuous map and obtain a smooth map $\widetilde F$ homotopic to it. [A1, L1, given]

2.1 The map $\widetilde F$ is smooth and lies in the homotopy class of the original map, so the claim follows. [step 1.1] ∎
