---
id: cex-paracompactness-is-not-open-hereditary
kind: counterexample
title: 'Assuming choice, paracompactness is not open-hereditary: $\omega_1$ inside $\omega_1+1$'
status: published
origin: session
deps: [ex-omega-one-is-not-paracompact, prop-compact-spaces-are-paracompact, thm-ordinal-spaces-and-compactness, lem-ordinal-order-topology-is-t3]
justified_by: []
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
  references:
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
pipeline_run: null
---

## Statement refuted

Assuming the Axiom of Choice, every open subspace of a paracompact space is
paracompact.

## Facts & Assumptions

**Given:** The ordinal inclusion $\omega_1\subseteq\omega_1+1$ under the Axiom of Choice.

[L1] The space $\omega_1$ is not paracompact ([[ex-omega-one-is-not-paracompact]]).

[L2] The successor ordinal $\omega_1+1$ is compact ([[thm-ordinal-spaces-and-compactness]]).

[L3] Compact spaces are paracompact ([[prop-compact-spaces-are-paracompact]]).

[L4] Ordinal order topologies are $T_1$, so their singleton subsets are closed ([[lem-ordinal-order-topology-is-t3]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L2] and [L3], $\omega_1+1$ is paracompact. [L2, L3]

1.2 Its subspace $\omega_1$ is open, as the complement consisting of the top endpoint is closed by [L4]. [L4]

2.1 The open subspace $\omega_1$ is not paracompact by [L1], which refutes the displayed assertion. [L1, step 1.1, step 1.2] ∎
