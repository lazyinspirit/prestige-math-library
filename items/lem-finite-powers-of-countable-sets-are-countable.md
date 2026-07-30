---
id: lem-finite-powers-of-countable-sets-are-countable
kind: lemma
title: "Every finite power of an at most countable set is at most countable"
status: published
origin: session
deps: [thm-product-of-countable, thm-induction-principle, def-countable, def-product-topology]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Countable set"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Statement

If $C$ is at most countable and $m\in\mathbb N$, then the finite product $C^m=\prod_{i<m}C$ is at most countable.

## Facts & Assumptions

**Given:** An at most countable set $C$ and a natural number $m$.

[L1] The product of two at most countable sets is at most countable ([[thm-product-of-countable]]).

[L2] The product indexed by $0$ is a one-point set ([[def-product-topology]]).

[L3] A finite set is at most countable, and induction holds on $\mathbb N$ ([[def-countable]], [[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 For $m=0$, $C^0$ is a one-point set by [L2], hence at most countable by [L3]. [base, L2, L3]

1.2 Assume $C^m$ is at most countable. [ih]

2.1 The product $C^{m+1}$ is canonically $C^m\times C$, so it is at most countable by [L1]. [step 1.2, L1]

3.1 By induction, $C^m$ is at most countable for every $m\in\mathbb N$. [base, step 1.2, step 2.1, L3, discharge-induction] ∎
