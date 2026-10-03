---
id: cor-transverse-maps-are-dense-in-the-strong-smooth-topology
kind: corollary
title: "Transverse maps are dense in the strong smooth topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, thm-strong-whitney-approximation-by-transverse-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  repair: research/frontier-38-owner-30-step5-whitney-cor-transverse-maps-are-dense-in-the-strong-smooth-topology.receipt.json
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Transversality"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For a fixed closed embedded submanifold $Z\subseteq N$, the smooth maps
$M\to N$ that are transverse to $Z$ are dense in the strong smooth topology.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, smooth manifolds $M,N$ and a closed embedded submanifold $Z\subseteq N$.

[A1] Countable Choice is [[def-countable-choice]], inherited exactly through the transverse-approximation supplier; no additional family is chosen below.

[L1] Under [A1], every strong neighbourhood of a smooth map contains a transverse map ([[thm-strong-whitney-approximation-by-transverse-maps]]).

## Proof
**Proof technique:** direct.

1.1 Let $f:M\to N$ be smooth and let $\mathcal U$ be any strong neighbourhood of $f$. By [L1], $\mathcal U$ contains a transverse smooth map. [A1, L1, given]

2.1 Since this holds for every $f$ and every neighbourhood $\mathcal U$, the transverse maps are dense. [step 1.1] ∎
