---
id: cex-two-disjoint-nonmeasurable-sets-can-have-a-measurable-union
kind: counterexample
title: "Two disjoint nonmeasurable subsets of $[0,1]$ can have the measurable union $[0,1]$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [thm-vitali-sets-exist-under-choice-on-r-over-q,
       thm-a-vitali-set-is-not-lebesgue-measurable,
       thm-lebesgue-measure-of-a-box-of-every-kind]
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Vitali set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vitali_set"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $E$ and $F$ are disjoint subsets of $[0,1]$ and
$E \cup F$ is Lebesgue measurable, then both $E$ and $F$ are Lebesgue measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice.

[L1] Assuming the Axiom of Choice, a Vitali set in $[0,1]$ exists ([[thm-vitali-sets-exist-under-choice-on-r-over-q]]).

[L2] Every Vitali set is not Lebesgue measurable ([[thm-a-vitali-set-is-not-lebesgue-measurable]]).

[L3] The interval $[0,1]$ is Lebesgue measurable with measure $1$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Counterexample

**Proof technique:** direct.

1.1 Choose a Vitali set $V \subseteq [0,1]$ by [L1], and put $W:=[0,1]\setminus V$. Then $V$ and $W$ are disjoint and $V \cup W=[0,1]$, which is measurable by [L3]. [L1, L3, construct]

2.1 The set $V$ is not measurable by [L2]. If $W$ were measurable, then $V=[0,1]\setminus W$ would also be measurable because $[0,1]$ is measurable, contradiction. So $W$ is not measurable either, and the pair $(V,W)$ refutes the claim. [step 1.1, L2, L3] ∎
