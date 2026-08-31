---
id: lem-trace-pairing-for-a-finite-separable-extension
kind: lemma
title: "The trace pairing in a finite separable extension is nondegenerate"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-trace-form-is-nondegenerate-iff-separable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Statement

Let $L/F$ be a finite separable field extension. Then the bilinear pairing $L\times L\to F$, $(x,y)\mapsto\operatorname{Tr}_{L/F}(xy)$, is nondegenerate.

## Facts & Assumptions

**Given:** A finite separable extension $L/F$.

[L1] The trace form of a finite extension is nondegenerate exactly when the extension is separable ([[thm-trace-form-is-nondegenerate-iff-separable]]).

## Proof

**Proof technique:** direct.

1.1 The displayed pairing is exactly the trace form of the extension $L/F$. [L1, given]

2.1 Because $L/F$ is separable, [L1] makes that trace form nondegenerate. [L1, step 1.1] ∎
