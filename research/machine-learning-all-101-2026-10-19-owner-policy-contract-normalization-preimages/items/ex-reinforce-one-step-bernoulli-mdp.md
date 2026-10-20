---
id: ex-reinforce-one-step-bernoulli-mdp
kind: example
title: "One-step Bernoulli REINFORCE has the exact expected gradient"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-finite-markov-decision-process
  - def-differentiable-stochastic-policy
  - def-episodic-returns-td-errors-and-policy-support
  - lem-finite-mdp-policy-action-state-reward-path-law
  - alg-reinforce
  - def-total-derivative-in-euclidean-space
  - thm-logarithm-derivative-and-integral
  - def-axiom-of-choice
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

Let $S=\{s,d\}$, terminal set $S_\dagger=\{d\}$, reward set $\mathcal R=\{0,1\}$, $A(s)=\{0,1\}$, and $A(d)=\{*\}$. From $(s,1)$ transition deterministically to $(d,1)$; from $(s,0)$ transition deterministically to $(d,0)$; from $(d,*)$ transition deterministically to $(d,0)$. All unlisted joint masses are zero. Start at $s$ and use discount $0\le\gamma<1$. For $\theta\in(0,1)$, let $\pi_\theta(1\mid s)=\theta$, $\pi_\theta(0\mid s)=1-\theta$, and choose the only action at $d$. An episode has one decision, $G_0=R_1$, and $J(\theta)=\mathbb E_\theta[G_0]$. The frozen-policy REINFORCE increment for this episode is $Z=\gamma^0G_0\nabla_\theta\log\pi_\theta(A_0\mid s)$. For every $\theta\in(0,1)$, $\mathbb E_\theta[Z]=\nabla_\theta J(\theta)=1$.

## Example references

[[alg-reinforce|The frozen-policy episodic REINFORCE update]].

[[def-finite-markov-decision-process|The finite MDP joint transition-reward convention]].

## Facts & Assumptions

**Given:** The finite one-decision MDP, $\theta\in(0,1)$, the policy family, and the estimator $Z$ in the Example.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; the referenced general path-law algorithm assumes AC.

[F1] [[def-finite-markov-decision-process]]: each joint next-state/reward mass is nonnegative and the masses for a fixed state-action pair sum to one.

[F2] [[def-differentiable-stochastic-policy]]: $\pi_\theta$ has fixed positive support on $\{0,1\}$ and its score is the gradient of the log action probability.

[F3] [[def-episodic-returns-td-errors-and-policy-support]]: the episode return is the discounted sum from the current time to the terminal time.

[F4] [[alg-reinforce]]: the policy is held fixed while an episode is sampled, and the aggregate update uses $\sum_{t<T}\gamma^tG_t\nabla_\theta\log\pi_\theta(A_t\mid S_t)$.

[F5] [[thm-logarithm-derivative-and-integral]]: for $x>0$, $\log'(x)=1/x$.

[F6] [[def-total-derivative-in-euclidean-space]]: the derivative of the identity map $\theta\mapsto\theta$ is the identity linear map.

## Verification

**Given:** The Example data and facts above.

1.1 Action $1$ occurs with probability $\theta$ and gives reward $1$, while action $0$ occurs with probability $1-\theta$ and gives reward $0$. By [F3], this one-decision episode has $G_0=R_1$, so its expected return is $J(\theta)=\theta$ and $\nabla_\theta J(\theta)=1$ by [F1] and [F6]. [given, F1, F3, F6, algebra]

1.2 By [F2] and [F5], the score is $1/\theta$ when $A_0=1$ and $-1/(1-\theta)$ when $A_0=0$. [given, F2, F5, algebra]

2.1 When $A_0=1$, $Z=1/\theta$; when $A_0=0$, $Z=0$. Hence $\mathbb E_\theta[Z]=\theta(1/\theta)+(1-\theta)0=1$, which equals the gradient from step 1.1. [given, step 1.1, step 1.2, F4, algebra] ∎
