---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
id: cex-policy-gradient-without-start-time-discount
kind: counterexample
title: "Omitting the start-time discount changes the policy gradient"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-markov-decision-process
  - def-differentiable-stochastic-policy
  - thm-logarithm-derivative-and-integral
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Statement refuted

For the fixed start-state discounted objective $J(\theta)=v^{\pi_\theta}(s_0)$ and returns $G_t=\sum_{k=t}^{T-1}\gamma^{k-t}R_{k+1}$, under episode termination, common-support differentiability, finite expected return/score products, and justified differentiation through the trajectory law, the identity

$$\nabla J(\theta)=\mathbb E_{\pi_\theta}[\sum_{t=0}^{T-1}\nabla_\theta\log\pi_\theta(A_t\mid S_t)\,G_t]$$

always holds.

## Statement references

[[def-finite-markov-decision-process|Finite MDP data and stationary policies.]]

[[def-differentiable-stochastic-policy|Fixed positive policy support and score vectors.]]

## Facts & Assumptions

**Given:** States $s_0,s_1,z$, start $s_0$, terminal set $\{z\}$, discount $\gamma=1/2$, one action at $s_0$ leading to $s_1$ with reward $0$, and actions $0,1$ at $s_1$ leading to $z$ with reward equal to the action. At $z$ take one zero-reward self-transition action. For $\theta\in(0,1)$, put $\pi_\theta(1\mid s_1)=\theta$, $\pi_\theta(0\mid s_1)=1-\theta$; the single-action policies at the other states have probability one. The episode is the two-point probability space of terminal paths with masses $\theta,1-\theta$.

[F1] [[def-finite-markov-decision-process]]: finite normalized transition-reward masses and statewise normalized action probabilities specify a finite MDP and a stationary policy.

[F2] [[def-differentiable-stochastic-policy]]: the score on positive fixed support is the gradient of the logarithm of the policy mass.

[F3] [[thm-logarithm-derivative-and-integral]]: $\log'(x)=1/x$ for $x>0$.

## Counterexample

**Given:** The finite model and two-point episode law above, with $G_t=\sum_{k=t}^{T-1}\gamma^{k-t}R_{k+1}$.

1.1 Every episode has $T=2$, $R_1=0$ and $R_2=A_1$. The given deterministic transition masses are normalized, and the displayed policy probabilities are normalized and positive on fixed support for every $\theta\in(0,1)$. Both terminal-path masses are affine in $\theta$, so differentiation through their finite sum is exact with identically zero remainders; all score-return products are finite at every fixed interior parameter. Thus all the asserted regularity and termination conditions hold. [given, F1, F2, algebra]

2.1 The objective is $J(\theta)=\mathbb E_\theta[R_1+\gamma R_2]=\theta/2$, so $\nabla J(\theta)=1/2$. The time-zero score is zero. At time one the score is $1/\theta$ on action $1$ and $-1/(1-\theta)$ on action $0$, while $G_1=A_1$. Hence the claimed right-hand side is $\theta(1/\theta)+(1-\theta)0=1\ne1/2$. Including the missing factor $\gamma^1$ changes this expectation to $1/2$, as required. [given, F2, F3, step 1.1, algebra] ∎
