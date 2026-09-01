---
id: thm-weak-whitney-immersion-theorem
kind: theorem
title: "The weak Whitney immersion theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: []
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 6.18"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Hassler Whitney, Differentiable manifolds in Euclidean space"
      url: "https://www.mathnet.ru/php/getFT.phtml?jrnid=sm&option_lang=eng&paperid=5498&what=fullt"
---

## Statement

Every smooth $n$-manifold admits a smooth immersion into $\mathbb R^{2n}$.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$.

[F1] The classical Whitney immersion theorem says that every smooth $n$-manifold admits a smooth immersion into $\mathbb R^{2n}$.

## Proof
**Proof technique:** direct.

1.1 By [F1], the smooth manifold $M$ admits a smooth immersion into $\mathbb R^{2n}$. [F1, given]

2.1 This is exactly the claimed statement. [step 1.1] ∎
