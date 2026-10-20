---
id: ex-empirical-cost-satisfaction-can-miss-population-violation
kind: example
title: "A finite sample can report cost satisfaction while the policy violates its expected-cost limit"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-constrained-markov-decision-process
  - def-discounted-cost-constraint
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

In a one-state CMDP with $\gamma=0$, cost $1$ for `risky` and $0$ for `safe`, let a stationary policy choose `risky` with probability $1/10$ and impose the expected-cost limit $b=1/20$. The true expected discounted cost is $1/10>b$. In ten independent one-step rollouts, the empirical mean cost is zero whenever every action is `safe`, an event of probability $(9/10)^{10}=3{,}486{,}784{,}401/10{,}000{,}000{,}000$.

## Example references

[[def-constrained-markov-decision-process|A finite CMDP includes bounded transition costs and stationary randomized policies.]]

[[def-discounted-cost-constraint|Expected discounted-cost feasibility is defined by the population objective $J_c^\pi(\mu)\le b$.]]

## Facts & Assumptions

**Given:** One state, two actions, cost $1$ for `risky` and $0$ for `safe`, discount $\gamma=0$, policy probability $1/10$ for `risky`, and threshold $b=1/20$.

[F1] [[def-constrained-markov-decision-process]]: the one-step transition law and cost signal determine the expected cost at each time.

[F2] [[def-discounted-cost-constraint]]: at $\gamma=0$, the expected discounted cost equals the initial expected one-step cost.

## Verification

1.1 The policy's expected one-step cost is $(1/10)\cdot1+(9/10)\cdot0=1/10$. Since $\gamma=0$, [F2] gives $J_c^\pi(\mu)=1/10>1/20=b$. [F1, F2, given, algebra]

2.1 Each of the ten independent rollouts is safe with probability $9/10$, so the probability all ten are safe is $(9/10)^{10}=3{,}486{,}784{,}401/10{,}000{,}000{,}000$. On this event the empirical mean is $0\le b$, despite step 1.1 showing that the population constraint is violated. [given, step 1.1, algebra] ∎
