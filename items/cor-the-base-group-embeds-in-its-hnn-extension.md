---
id: cor-the-base-group-embeds-in-its-hnn-extension
kind: corollary
title: "The base group embeds in its HNN extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-brittons-lemma]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement

In an HNN extension, the canonical map from the base group $A$ to the presented
group is injective. Equivalently, a base-group element represents the identity
in the HNN extension only when it is already the identity in $A$.

## Facts & Assumptions

**Given:** An HNN extension of a base group $A$.

[L1] If a Britton-reduced word represents the identity, then it has stable-letter length zero and trivial base coefficient. ([[thm-brittons-lemma]])

## Proof

**Proof technique:** direct.

1.1 Regard $a\in A$ as the HNN word of stable-letter length zero. It is Britton-reduced, since it contains no stable letters and hence no pin. [L1, given]

2.1 If this word represents the identity in the HNN extension, [L1] forces its unique base coefficient to be $a=e_A$. Therefore distinct elements of $A$ remain distinct in the HNN extension, so the canonical map $A\to G$ is injective. [L1, step 1.1, algebra] ∎
