---
id: fs-the-base-group-may-collapse-in-an-hnn-extension
kind: false-statement
title: "FALSE: the base group may collapse in an HNN extension"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-the-base-group-embeds-in-its-hnn-extension]
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

In an HNN extension, a nontrivial element of the base group can become trivial.

## Facts & Assumptions

**Given:** An HNN extension of a base group $A$.

[L1] The canonical map from the base group into its HNN extension is injective. ([[cor-the-base-group-embeds-in-its-hnn-extension]])

## Refutation

**Proof technique:** direct.

1.1 If a nontrivial element of $A$ became trivial in the HNN extension, the canonical map $A\to G$ would identify it with $e_A$. [L1, given]

2.1 That contradicts the injectivity stated in [L1]. Hence the statement is false. [L1, step 1.1, algebra] ∎
