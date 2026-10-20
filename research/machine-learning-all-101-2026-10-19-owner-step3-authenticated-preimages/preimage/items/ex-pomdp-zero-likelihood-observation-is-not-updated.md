---
id: ex-pomdp-zero-likelihood-observation-is-not-updated
kind: example
title: "A zero-likelihood observation has no posterior update"
status: draft
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
sources:
  references: []
---

## Example

Let $S=\{s_0,s_1\}$, $A=\{a\}$, $\Omega=\{x,y\}$, reward alphabet $\{0\}$, horizon $H=1$, and discount $\gamma=1$. From each state, the joint next-state/reward law assigns probability one to that same state with reward zero. Put $b_0(s_0)=1$, $b_0(s_1)=0$, and let $O(x\mid s_0)=1$, $O(y\mid s_0)=0$, $O(x\mid s_1)=0$, and $O(y\mid s_1)=1$. Then the observation distribution has $q(y\mid b_0,a)=0$ and $q(x\mid b_0,a)=1$, so $\tau(b_0,a,y)$ is undefined and the belief transition uses only the positive-mass $x$ branch.

## Facts & Assumptions

**Given:** The finite POMDP model in the example, the prior $b_0=\delta_{s_0}$, and the action $a$.

[F1] The finite POMDP uses probability transition and observation laws; the reward is not part of the observed history. [[def-finite-pomdp]]

[F2] The predicted state distribution, observation normalizer, positive-domain Bayes update, and omission of zero-normalizer observations are defined by the finite belief filter. [[def-belief-state-and-bayes-filter]]

[F3] Observation probabilities sum to one, and the induced belief transition is a probability kernel using only positive-probability branches. [[lem-finite-pomdp-belief-update-is-probability-kernel]]

[F4] Finite sums over a finite index set are well defined. [[def-sum-over-a-finite-index-set]]

## Verification

1.1 The hidden-state transition is the identity, so the predicted state distribution after $a$ is $\bar b(s_0)=1$ and $\bar b(s_1)=0$. [given, F1, F2]

2.1 The normalizers are $q(y\mid b_0,a)=O(y\mid s_0)\bar b(s_0)+O(y\mid s_1)\bar b(s_1)=0$ and $q(x\mid b_0,a)=1$. [step 1.1, F2, F4, algebra]

3.1 Since $q(y\mid b_0,a)=0$, the definition makes $\tau(b_0,a,y)$ undefined and omits the $y$ term from $K$. The only positive observation branch is $x$ with mass one by step 2.1, so $K$ assigns total mass one to $\tau(b_0,a,x)$ and no mass to an impossible $y$ update, as required by [F3]. [step 2.1, F2, F3] ∎
