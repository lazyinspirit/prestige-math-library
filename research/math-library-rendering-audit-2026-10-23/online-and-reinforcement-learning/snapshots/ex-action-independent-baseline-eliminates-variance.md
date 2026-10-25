---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
id: ex-action-independent-baseline-eliminates-variance
kind: example
title: "A state baseline can eliminate this estimator's variance"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-finite-markov-decision-process
  - def-differentiable-stochastic-policy
  - def-episodic-returns-td-errors-and-policy-support
  - lem-action-independent-baseline-does-not-bias-policy-gradient
  - alg-reinforce
  - alg-reinforce-with-baseline
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

Use the one-decision MDP with states $\{s,d\}$, terminal state $d$, actions $\{0,1\}$ at $s$, one action at $d$, and deterministic transitions from $(s,1)$ to $(d,1)$, from $(s,0)$ to $(d,0)$, and from $d$ to $(d,0)$. All unlisted joint masses are zero. Choose discount $0\le\gamma<1$. For $\theta\in(0,1)$, set $\pi_\theta(1\mid s)=\theta$ and $\pi_\theta(0\mid s)=1-\theta$, and start at $s$. At $\theta=1/2$, the true objective is $J(\theta)=\theta$ with gradient $1$. Let $Z=G_0\nabla_\theta\log\pi_\theta(A_0\mid s)$ be the unscaled REINFORCE sample direction, and use the action-independent state baseline $b(s)=1/2$. Then $Z$ has variance $1$, while $Z_b=(G_0-b(s))\nabla_\theta\log\pi_\theta(A_0\mid s)$ is identically $1$ and has variance $0$; both have expectation $1$.

## Example references

[[alg-reinforce|The frozen-policy episodic REINFORCE update]].

[[alg-reinforce-with-baseline|The episodic state-baseline update]].

[[lem-action-independent-baseline-does-not-bias-policy-gradient|A state-dependent action-independent baseline preserves the expected gradient]].

## Facts & Assumptions

**Given:** The stated finite one-decision MDP, $0\le\gamma<1$, $\theta=1/2$, the REINFORCE estimator, and the fixed baseline $b(s)=1/2$.

[F1] [[def-finite-markov-decision-process]]: each state-action pair has the specified normalized joint reward-transition law.

[F2] [[def-differentiable-stochastic-policy]]: the policy has fixed positive support and score $\nabla_\theta\log\pi_\theta(a\mid s)$ on the support.

[F3] [[def-episodic-returns-td-errors-and-policy-support]]: the one-step discounted return is $G_0=R_1$.

[F4] [[alg-reinforce]] and [[alg-reinforce-with-baseline]]: the unscaled sample directions are $G_0\psi_0$ and $(G_0-b(S_0))\psi_0$ respectively; each parameter increment multiplies its direction by the chosen step size.

[F5] [[lem-action-independent-baseline-does-not-bias-policy-gradient]]: the expected baseline-adjusted episodic update equals the policy gradient under its stated integrability and trajectory assumptions.

[F6] [[thm-logarithm-derivative-and-integral]]: for $x>0$, $\log'(x)=1/x$.

[F7] [[def-total-derivative-in-euclidean-space]]: the derivative of the identity map $\theta\mapsto\theta$ is the identity linear map.

## Verification

**Given:** The Example data and facts above.

1.1 At $\theta=1/2$, the two actions have probability $1/2$ and scores $2$ and $-2$ by [F2] and [F6]. The specified deterministic reward-transition law [F1] and return convention [F3] give $G_0=A_0$ and $J(\theta)=\theta$, so the true gradient is $1$ by [F7]. [given, F1, F2, F3, F6, F7, algebra]

2.1 Without a baseline, $Z=2$ when $A_0=1$ and $Z=0$ when $A_0=0$. Therefore $\mathbb E[Z]=1$ and $\operatorname{Var}(Z)=\tfrac12(2-1)^2+\tfrac12(0-1)^2=1$. [given, step 1.1, algebra]

2.2 With $b(s)=1/2$, the baseline-adjusted value is $(1-1/2)2=1$ when $A_0=1$ and $(0-1/2)(-2)=1$ when $A_0=0$. Thus $Z_b=1$ surely, so $\mathbb E[Z_b]=1$ and $\operatorname{Var}(Z_b)=0$. [given, step 1.1, F4, algebra]

3.1 The two estimators have the same expectation, equal to the true gradient in step 1.1, while their variances are $1$ and $0$ by steps 2.1 and 2.2. This verifies variance reduction for this baseline and this MDP only. [step 1.1, step 2.1, step 2.2, F5, algebra] ∎

## Remarks

[A1] Axiom of Choice: every family of nonempty sets has a choice function; the referenced episodic algorithms and baseline lemma use the policy path law under AC.

## Remarks references

[[def-axiom-of-choice]].
