---
id: alg-reinforce-with-baseline
kind: algorithm
title: "Episodic REINFORCE with a fixed state baseline"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-finite-markov-decision-process
  - def-differentiable-stochastic-policy
  - def-episodic-returns-td-errors-and-policy-support
  - def-axiom-of-choice
  - alg-reinforce
  - lem-action-independent-baseline-does-not-bias-policy-gradient
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, second-edition draft"
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf"
      locator: "§13.4, the arbitrary state-baseline identity (13.8) and discounted REINFORCE update (13.9), printed pp. 271–272."
    - title: "Ronald J. Williams, Simple Statistical Gradient-Following Algorithms for Connectionist Reinforcement Learning, Machine Learning 8 (1992)"
      url: "https://gwern.net/doc/reinforcement-learning/model-free/1992-williams.pdf"
      locator: "§4 and Appendix A.1, action-independent baseline and zero score contribution, printed pp. 233–234 and PDF pp. 249–250."

---

## Definition

**Inputs:** a finite episodic MDP with nonempty finite state set $S$, finite nonempty action sets $A(s)$, finite reward set $\mathcal R$, joint transition-reward law $p$, terminal set $S_\dagger\subseteq S$, and initial state $s_0\in S$; a discount $0\le\gamma<1$; a differentiable stationary policy family $\pi_\theta$ with fixed positive support on an open set $U\subseteq\mathbb R^d$; an initial parameter $\theta_0\in U$; a fixed finite-valued state function $b:S\to\mathbb R$ chosen independently of the episode actions; and a step size $\alpha\ge0$.

**Admissible conditions:** the episode sampled from $s_0$ under the frozen policy $\pi_{\theta_0}$ reaches $S_\dagger$ after finitely many transitions almost surely, and the proposed update remains in $U$.

**Output:** the updated policy parameter $\theta_1$ after one training round.

Hold $\theta=\theta_0$ fixed and select $b$ before sampling one complete episode from $s_0$ under $\pi_{\theta_0}$, stopping at its first terminal state; if $s_0\in S_\dagger$, take $T=0$. For each $t<T$, compute $G_t=\sum_{k=t}^{T-1}\gamma^{k-t}R_{k+1}$, the score $\psi_t=\nabla_\theta\log\pi_\theta(A_t\mid S_t)$ using $\theta=\theta_0$, and the baseline-adjusted return $G_t-b(S_t)$. After termination, set

$$\theta_1=\theta_0+\alpha\sum_{t=0}^{T-1}\gamma^t\bigl(G_t-b(S_t)\bigr)\psi_t$$

and return $\theta_1$. The baseline is fixed throughout the episode and is not updated from it before the actor update; it depends on the state and is independent of each episode action conditional on the state and past.

## Definition references

[[alg-reinforce|The frozen-policy episodic REINFORCE procedure]].

[[def-episodic-returns-td-errors-and-policy-support|The terminal convention and discounted return from each time step]].

[[def-differentiable-stochastic-policy|The policy family and score-vector convention]].

[[lem-action-independent-baseline-does-not-bias-policy-gradient|The state baseline's expected score term is zero under the theorem's hypotheses]].

## Remarks

Under the baseline lemma's hypotheses, the baseline-adjusted sample direction has expectation equal to the discounted objective gradient, and the expected parameter increment is that gradient multiplied by $\alpha$. An action-independent baseline can reduce variance, but it need not do so for every choice of baseline.

## Remarks references

[[lem-action-independent-baseline-does-not-bias-policy-gradient|The baseline identity preserving the expected gradient]].
