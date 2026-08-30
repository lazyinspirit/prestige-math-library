---
id: cex-the-skeleton-of-set-cannot-be-made-strict-by-identification
kind: counterexample
title: "A skeleton of Set cannot be made strict by identifying isomorphic objects"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [rem-isbells-argument-that-isomorphic-objects-cannot-simply-be-identified]
proof_strategy: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

Let $\mathcal S$ be a skeleton of $\mathbf{Set}$ and choose an infinite object
$D\in\mathcal S$ with $D\cong D\times D$. Then $\mathcal S$ witnesses that one
cannot obtain a strict monoidal structure merely by identifying isomorphic
objects.

## Facts & Assumptions

**Given:** A skeleton $\mathcal S$ of $\mathbf{Set}$ containing such an object
$D$.

[L1] In Isbell's skeleton argument, forcing the associator to become an identity collapses every endomorphism $D\to D$ to the same map, which is absurd ([[rem-isbells-argument-that-isomorphic-objects-cannot-simply-be-identified]]).

## Verification

**Proof technique:** counterexample.

1.1 Assume one could make the monoidal structure on $\mathcal S$ strict merely by identifying isomorphic objects. Then the associator at $D$ would be an identity in the sense excluded by [L1]. [given, L1]

1.2 By [L1], that would force all endomorphisms $D\to D$ to be equal. But $1_D$ and any constant endomorphism are different maps, since $D$ has at least two elements. [L1]

2.1 Hence $\mathcal S$ is a counterexample to the claim. [step 1.1, step 1.2] ∎
