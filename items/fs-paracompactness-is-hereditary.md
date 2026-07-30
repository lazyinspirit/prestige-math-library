---
id: fs-paracompactness-is-hereditary
kind: false-statement
title: "Assuming choice, refuted: paracompactness is hereditary"
status: published
origin: session
deps: [prop-compact-spaces-are-paracompact, lem-countably-compact-paracompact-hausdorff-is-compact, thm-ordinal-spaces-and-compactness, lem-ordinal-order-topology-is-t3, def-order-topology-on-an-ordinal, def-hereditary-property, def-axiom-of-choice]
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

## Statement

Assuming the Axiom of Choice, paracompactness is hereditary.

## Facts & Assumptions

**Given:** The Axiom of Choice and the ordinal spaces $\omega_1\subseteq\omega_1+1$.

[A1] Choice implies the countable choice used by the ordinal compactness theorem ([[def-axiom-of-choice]]).

[L1] Under countable choice, $\omega_1$ is countably compact and noncompact, while $\omega_1+1$ is compact ([[thm-ordinal-spaces-and-compactness]]).

[L2] Under choice, a countably compact paracompact Hausdorff space is compact ([[lem-countably-compact-paracompact-hausdorff-is-compact]]).

[L3] A compact space is paracompact ([[prop-compact-spaces-are-paracompact]]).

[L4] Every ordinal in its order topology is $T_1$ and Hausdorff, so each singleton is closed ([[lem-ordinal-order-topology-is-t3]], clauses 2 and 3).

## Refutation

**Proof technique:** direct.

1.1 By [A1] and [L1], $\omega_1+1$ is compact, hence paracompact by [L3], and its initial segment $\omega_1$ is countably compact but noncompact. [A1, L1, L3]

1.2 The initial segment $\omega_1$ is open in $\omega_1+1$, since its complement is the closed singleton consisting of the top endpoint. [L4]

2.1 If $\omega_1$ were paracompact, its Hausdorffness from [L4] would let [L2] make it compact, contradicting step 1.1. [L2, L4, step 1.1]

3.1 Thus a paracompact space has the nonparacompact subspace $\omega_1$, which refutes the displayed hereditary assertion. [step 1.1, step 1.2, step 2.1] ∎
