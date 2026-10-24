---
id: alg-reinforce
kind: algorithm
title: "Episodic REINFORCE with a frozen episode policy"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-finite-markov-decision-process
  - def-differentiable-stochastic-policy
  - def-episodic-returns-td-errors-and-policy-support
  - lem-finite-mdp-policy-action-state-reward-path-law
  - def-axiom-of-choice
  - thm-policy-gradient-theorem
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
      locator: "§13.3, discounted REINFORCE update (13.6) and episodic pseudocode, printed p. 270; the episode's policy is frozen for the gradient interpretation."
    - title: "Ronald J. Williams, Simple Statistical Gradient-Following Algorithms for Connectionist Reinforcement Learning, Machine Learning 8 (1992)"
      url: "https://gwern.net/doc/reinforcement-learning/model-free/1992-williams.pdf"
      locator: "§5 and Appendix A.2, episode-level REINFORCE update and time-unfolding argument, printed pp. 235–236 and PDF pp. 252–253."

---

## Definition

**Inputs:** a finite episodic MDP with nonempty finite state set $S$, finite nonempty action sets $A(s)$, finite reward set $\mathcal R$, joint transition-reward law $p$, terminal set $S_\dagger\subseteq S$, and initial state $s_0\in S$; a discount $0\le\gamma<1$; a differentiable stationary policy family $\pi_\theta$ with fixed positive support on an open set $U\subseteq\mathbb R^d$; an initial parameter $\theta_0\in U$; and a step size $\alpha\ge0$.

**Admissible conditions:** the episode sampled from $s_0$ under the frozen policy $\pi_{\theta_0}$ reaches $S_\dagger$ after finitely many transitions almost surely, and the proposed update remains in $U$.

**Output:** the updated policy parameter $\theta_1$ after one training round.

Hold $\theta=\theta_0$ fixed while sampling one episode $(S_0,A_0,R_1,\ldots,S_T)$ from $s_0$ until its first terminal state; if $s_0\in S_\dagger$, take $T=0$. For each $t<T$, compute the return $G_t=\sum_{k=t}^{T-1}\gamma^{k-t}R_{k+1}$ and score $\psi_t=\nabla_\theta\log\pi_\theta(A_t\mid S_t)$ using $\theta=\theta_0$. After the episode is complete, set

$$\theta_1=\theta_0+\alpha\sum_{t=0}^{T-1}\gamma^tG_t\psi_t$$

and return $\theta_1$. All returns, scores, and the full sum use the same parameter value $\theta_0$ that generated the episode; no policy update occurs while that episode is being sampled.

## Definition references

[[def-finite-markov-decision-process|The finite state-dependent action sets and joint reward-transition law]].

[[def-differentiable-stochastic-policy|A differentiable policy family with fixed positive support and score vectors]].

[[def-episodic-returns-td-errors-and-policy-support|The almost-surely terminating episode and discounted return from each time step]].

[[lem-finite-mdp-policy-action-state-reward-path-law|The action-state-reward trajectory law for a finite MDP policy under AC]].

[[thm-policy-gradient-theorem|The expected discounted trajectory-score update under the stated differentiation and integrability hypotheses]].

## Remarks

The arrows below show the order of operations for one training round, rather than transitions of the MDP. The episode is completed before the single parameter update; all scores are evaluated at $\theta_0$. When $T=0$, the sums are empty and $\theta_1=\theta_0$.

```tikz
\begin{tikzpicture}
\node[draw,rounded corners,minimum width=9cm,minimum height=1cm,align=center] (sample) at (0,0) {Sample $(S_0,A_0,R_1,\ldots,S_T)$ until terminal\\using the fixed policy $\pi_{\theta_0}$};
\node[draw,rounded corners,minimum width=9cm,minimum height=1.2cm,align=center] (scores) at (0,-2) {For $0\le t<T$, compute $G_t=\sum_{k=t}^{T-1}\gamma^{k-t}R_{k+1}$\\and $\psi_t=\left.\nabla_\theta\log\pi_\theta(A_t\mid S_t)\right|_{\theta=\theta_0}$};
\node[draw,rounded corners,minimum width=9cm,minimum height=1cm,align=center] (update) at (0,-4) {One update: $\theta_1=\theta_0+\alpha\sum_{t=0}^{T-1}\gamma^tG_t\psi_t$\\Return $\theta_1$};
\draw[->] (sample) -- (scores);
\draw[->] (scores) -- (update);
\end{tikzpicture}
```

Under the theorem's assumptions, the sample direction $\sum_{t=0}^{T-1}\gamma^tG_t\psi_t$ has expectation $\nabla_\theta J(\theta_0)$, including the theorem's trajectory-differentiation and Axiom of Choice premises. The expected parameter increment is therefore $\alpha\nabla_\theta J(\theta_0)$. This identity does not imply convergence of repeated nonlinear or deep parameter updates.

## Remarks references

[[thm-policy-gradient-theorem|The discounted episodic policy-gradient identity and its hypotheses]].
