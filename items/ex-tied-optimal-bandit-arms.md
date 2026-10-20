---
id: ex-tied-optimal-bandit-arms
kind: example
title: "Deterministic zero-reward arms have zero regret"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [def-stochastic-bandit-and-pseudo-regret]
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Example

Fix any horizon $n\ge1$ and take two arms with deterministic reward stacks $X_{s,1}=X_{s,2}=0$ for every $s\in[n]$. Then $\mu_1=\mu_2=\mu^*=0$ and $\Delta_1=\Delta_2=0$. Every admissible policy has identically zero pseudo-regret and realized reward regret, so both expected regrets are zero.

## Example references

[[def-stochastic-bandit-and-pseudo-regret]]: the finite-arm means, gaps, pseudo-regret, and realized reward regret used in the example.

## Facts & Assumptions

**Given:** The two-arm deterministic reward table in the example and the definitions of gaps and the two regret quantities.

[F1] The arm means, gaps, pseudo-regret, and realized reward regret are those in the finite stochastic bandit model ([[def-stochastic-bandit-and-pseudo-regret]]).

## Verification

1.1 Each arm's law is the point mass at $0$, so both finite means equal $0$. Hence $\mu^*=0$ and $\Delta_1=\Delta_2=0$. [given, F1, algebra]

2.1 For every policy and every round, $\mu^*-\mu_{A_t}=0$ and the observed reward $Y_t=0$. The defining sums therefore give $\bar R_n=0$ and $R_n^{\rm rew}=0$ pointwise. [given, F1, step 1.1, algebra]

3.1 Taking expectations of the two identically zero random variables shows that expected pseudo-regret and expected reward regret both equal zero. [given, step 2.1, algebra] ∎
