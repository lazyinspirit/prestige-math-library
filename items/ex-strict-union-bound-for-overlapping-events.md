---
id: ex-strict-union-bound-for-overlapping-events
kind: example
title: "The union bound can be strict for overlapping events"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-finite-probability-space, cor-two-event-inclusion-exclusion, thm-finite-union-bound]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 6.2.1"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Example

On the uniform four-point space, let $A=\{1,2\}$, $B=\{2,3\}$, and $C=\{2,4\}$. Then the three events cover the space, but the sum of their probabilities is $3/2$.

## Facts & Assumptions

**Given:** The uniform space and events in the Example.

[L1] Uniform event probabilities are cardinality ratios ([[def-uniform-finite-probability-space]]).

[L2] Two-event inclusion-exclusion subtracts the probability of the overlap ([[cor-two-event-inclusion-exclusion]]).

[L3] The finite union bound compares union probability with the sum of marginal probabilities ([[thm-finite-union-bound]]).

## Verification

**Proof technique:** direct.

1.1 Each event has probability $1/2$, while $A\cup B\cup C=\Omega$ has probability $1$. [L1]

2.1 Thus [L3] reads $1\le3/2$, and the inequality is strict. [step 1.1, L3, algebra]

3.1 The common outcome $2$ is counted in all three marginal probabilities; [L2] displays this overlap correction already for each pair. [step 1.1, L2] ∎
