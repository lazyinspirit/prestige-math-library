---
id: cex-a-vitali-set
kind: counterexample
title: "A Vitali set shows that not every subset of $\\mathbb{R}$ is Lebesgue measurable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [thm-vitali-sets-exist-under-choice-on-r-over-q,
       thm-a-vitali-set-is-not-lebesgue-measurable]
aliases: []
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Vitali set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vitali_set"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every subset of $\mathbb{R}$ is Lebesgue measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice.

[L1] Assuming the Axiom of Choice, a Vitali set in $[0,1]$ exists ([[thm-vitali-sets-exist-under-choice-on-r-over-q]]).

[L2] Every Vitali set is not Lebesgue measurable ([[thm-a-vitali-set-is-not-lebesgue-measurable]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1] choose a Vitali set $V \subseteq [0,1]$. [L1]

2.1 The set $V$ is a subset of $\mathbb{R}$ and is not Lebesgue measurable by [L2], so it refutes the claim. [step 1.1, L2] ∎
