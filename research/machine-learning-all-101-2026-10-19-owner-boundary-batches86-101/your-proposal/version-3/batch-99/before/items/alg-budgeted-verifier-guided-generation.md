---
id: alg-budgeted-verifier-guided-generation
kind: algorithm
title: "Budgeted verifier-guided generation and best-of-N sampling"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-verifier-and-generation-protocol
justified_by:
  - lem-budgeted-verifier-generation-termination-and-calls
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "DeepSeek-AI, DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning, original arXiv v1"
      url: "https://arxiv.org/pdf/2501.12948v1"
      locator: "§2.3.3, reasoning-data rejection sampling: multiple responses are sampled and correctness-filtered."

---

## Definition

For a fixed prompt $q$, take the finite truncated response set $Y_q$, sampling policy $\pi_\theta(\cdot\mid q)$, verifier $A_q$, and selection score $u_q$ from the generation protocol. Given an integer budget $N\ge1$, choose exactly one of the following modes. Response draws, verifier and score evaluations, and comparisons of real scores and of the supplied tie order are supplied terminating exact operations with finite per-call costs. Each draw returns a response from the specified policy support with the stipulated independent law; no construction of a random source is asserted.

1. **Rejection search.** Draw responses one at a time independently from $\pi_\theta(\cdot\mid q)$. Return the first response $y$ for which $A_q(y)=1$, together with status `accepted`. If no sampled response is accepted after $N$ draws, return `failure` and no response. Stop at the first acceptance or after the $N$th draw, whichever occurs first.

2. **Best-of-$N$.** Draw exactly $N$ responses independently from $\pi_\theta(\cdot\mid q)$. Return a response with maximal value of $u_q$; if several responses have maximal score, return the $\prec_q$-least one. Return status `selected`. This mode does not use the verifier to select its output and does not declare the selected response correct.

Its output law is the one induced by the specified prompt, finite response set, length budget, truncation marker, policy, verifier or score, and tie order.

## Definition references

[[lem-budgeted-verifier-generation-termination-and-calls]]: proves termination, the output rules, and the finite draw, evaluation and comparison bounds under the supplied-call model.

[[def-verifier-and-generation-protocol|The finite response set, sampling law, correctness predicate, verifier, selection score, and deterministic tie order.]]
