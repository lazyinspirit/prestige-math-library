---
id: thm-strong-whitney-approximation-by-transverse-maps
kind: theorem
title: "Strong Whitney approximation by transverse maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: []
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Transversality"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $f:M\to N$ be smooth and let $Z\subseteq N$ be a closed embedded
submanifold. Every neighbourhood of $f$ in the strong smooth topology contains
a smooth map $g$ that is transverse to $Z$.

## Facts & Assumptions

**Given:** A smooth map $f:M\to N$, a closed embedded submanifold $Z\subseteq N$, and a chosen strong smooth neighbourhood $\mathcal U$ of $f$.

[F1] The standard strong-topology transversality theorem says that transverse maps to a fixed closed embedded submanifold are dense in the strong smooth topology.

## Proof
**Proof technique:** direct.

1.1 By [F1], the neighbourhood $\mathcal U$ contains a smooth map $g:M\to N$ that is transverse to $Z$. [F1, given]

2.1 Hence every strong smooth neighbourhood of $f$ contains a smooth map transverse to $Z$. [step 1.1] ∎
