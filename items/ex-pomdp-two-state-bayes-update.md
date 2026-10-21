---
id: ex-pomdp-two-state-bayes-update
kind: example
title: "A two-state POMDP update changes a three-to-one prior to nine-to-one"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-finite-pomdp
  - def-belief-state-and-bayes-filter
  - lem-finite-pomdp-belief-update-is-probability-kernel
  - def-sum-over-a-finite-index-set
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references: []
---

## Example

Let $S=\{s_0,s_1\}$, $A=\{a\}$, $\Omega=\{x,y\}$, reward alphabet $\{0\}$, and horizon $H=1$ with $\gamma=1$. For each $i\in\{0,1\}$, the joint next-state/reward law assigns probability one to $(s_i,0)$ from $(s_i,a)$, so the hidden state remains fixed and the reward is zero. Let $b_0(s_0)=3/4$, $b_0(s_1)=1/4$, and set $O(x\mid s_0)=3/4$, $O(x\mid s_1)=1/4$, $O(y\mid s_0)=1/4$, and $O(y\mid s_1)=3/4$. The probability of observing $x$ is $5/8$, and after $x$ the belief is $b_1(s_0)=9/10$, $b_1(s_1)=1/10$.

## Facts & Assumptions

**Given:** The finite POMDP model in the example and the observation $x$.

[F1] The state transition is the marginal of the specified finite joint reward-transition law, and each $O(\cdot\mid s')$ is a probability distribution. [[def-finite-pomdp]]

[F2] The predicted belief is $\bar b(s')=\sum_sT(s'\mid s,a)b(s)$, the observation probability is $q(o\mid b,a)=\sum_{s'}O(o\mid s')\bar b(s')$, and the positive-probability update is $\tau(b,a,o)(s')=O(o\mid s')\bar b(s')/q(o\mid b,a)$. [[def-belief-state-and-bayes-filter]]

[F3] The predicted law and observation probabilities normalize, and $\tau$ is a probability vector when $q>0$. [[lem-finite-pomdp-belief-update-is-probability-kernel]]

[F4] Finite sums over finite index sets are well defined and enumeration-independent. [[def-sum-over-a-finite-index-set]]

## Verification

1.1 The transition marginal is the identity on $S$, so the predicted law after action $a$ is $\bar b_1(s_0)=3/4$ and $\bar b_1(s_1)=1/4$. [given, F1, F2]

2.1 The observation normalizer is $q(x\mid b_0,a)=(3/4)(3/4)+(1/4)(1/4)=9/16+1/16=5/8>0$. [step 1.1, F2, F4, algebra]

3.1 The update gives $b_1(s_0)=(3/4)(3/4)/(5/8)=(9/16)/(10/16)=9/10$ and $b_1(s_1)=(1/4)(1/4)/(5/8)=(1/16)/(10/16)=1/10$. Both coordinates are nonnegative and sum to one, in agreement with [F3]. [step 1.1, step 2.1, F2, F3, algebra] ∎
