---
id: ex-closed-unit-interval-has-one-compatible-uniformity
kind: example
title: "The closed unit interval has exactly one compatible uniformity, namely its usual metric uniformity"
status: published
origin: session
deps: [thm-compact-hausdorff-space-has-a-unique-compatible-uniformity, lem-metric-uniformity-dictionary, thm-heine-borel-characterisation-r, lem-real-line-is-a-metric-space]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Example

The interval $[0,1]$, with its usual topology, has exactly one compatible uniformity, the restriction of the usual metric uniformity of $\mathbb R$.

## Facts & Assumptions

**Given:** The usual topology and metric on $\mathbb R$.

[L1] The usual metric makes $\mathbb R$ a metric space with its usual topology ([[lem-real-line-is-a-metric-space]]).

[L2] A closed bounded subset of $\mathbb R$ is compact ([[thm-heine-borel-characterisation-r]]).

[L3] A compact Hausdorff space has a unique compatible uniformity ([[thm-compact-hausdorff-space-has-a-unique-compatible-uniformity]]).

## Verification

**Proof technique:** direct.

1.1 The interval $[0,1]$ is closed and bounded, hence compact by [L2], and its metric topology is Hausdorff by [L1]. [L1, L2]

1.2 Its restricted metric uniformity is compatible by the metric dictionary ([[lem-metric-uniformity-dictionary]]). [L1]

2.1 Uniqueness follows from [L3], so no other compatible uniformity exists. [step 1.1, step 1.2, L3] ∎
