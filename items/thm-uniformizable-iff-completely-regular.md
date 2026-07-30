---
id: thm-uniformizable-iff-completely-regular
kind: theorem
title: "Assuming dependent choice, a topological space is uniformizable if and only if it is completely regular"
status: published
origin: session
deps: [lem-uniformizable-spaces-are-completely-regular, lem-completely-regular-topologies-come-from-continuous-pseudometrics, def-uniformizable-space, def-dependent-choice]
aliases: []
landmark: true
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

## Statement

**Assuming dependent choice,** a topological space is uniformizable if and only if it is completely regular.

## Facts & Assumptions

**Given:** A topological space and dependent choice.

[L1] Under dependent choice, uniformizable spaces are completely regular ([[lem-uniformizable-spaces-are-completely-regular]]).

[L2] A completely regular topology is induced by its gauge of continuous pseudometrics ([[lem-completely-regular-topologies-come-from-continuous-pseudometrics]]).

[L3] Uniformizable means induced by some uniformity ([[def-uniformizable-space]]).

## Proof

**Proof technique:** direct.

1.1 The forward implication is [L1]. [L1]

1.2 The gauge supplied by [L2] is a uniformity inducing the given topology, so the reverse implication is [L2] and [L3]. [L2, L3]

2.1 The two implications prove the equivalence under dependent choice. [step 1.1, step 1.2] ∎
