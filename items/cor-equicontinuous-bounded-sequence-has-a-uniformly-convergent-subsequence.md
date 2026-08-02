---
id: cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence
kind: corollary
title: "Every pointwise-bounded equicontinuous sequence in $C(K,\\mathbb R)$ has a uniformly convergent subsequence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-arzela-ascoli-for-real-ck, thm-metric-compactness-equivalences, def-countable-choice, def-dependent-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "The Ascoli--Arzelà Theorem (MIT)"
      url: "https://math.mit.edu/~rbm/18.100B/Ascoli-Arzela.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]) and the Axiom of Dependent Choice ([[def-dependent-choice]]). Let $K$ be a nonempty compact metric space. Every equicontinuous pointwise-bounded sequence in $C(K,\mathbb R)$ has a subsequence converging uniformly to a member of $C(K,\mathbb R)$.

## Facts & Assumptions

**Given:** A nonempty compact metric space $K$, the stated choice principles, and an equicontinuous pointwise-bounded sequence $(f_n)$ in $C(K,\mathbb R)$.

[L1] For a nonempty compact metric space $K$, an equicontinuous pointwise-bounded family in $C(K,\mathbb R)$ has compact closure in the supremum metric ([[thm-arzela-ascoli-for-real-ck]]).

[L2] Assuming Countable Choice and Dependent Choice, a compact metric space is sequentially compact ([[thm-metric-compactness-equivalences]]).

## Proof

**Proof technique:** direct.

1.1 The sequence lies in its compact closure by [L1]. [L1]

2.1 By [L2], it has a subsequence converging in the supremum metric to a point of that closure. [step 1.1, L2, choose]

3.1 Supremum-metric convergence is uniform convergence, so the claimed subsequence converges uniformly. [step 2.1, algebra] ∎
