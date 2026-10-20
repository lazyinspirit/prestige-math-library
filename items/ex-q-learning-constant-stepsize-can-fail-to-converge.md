---
id: ex-q-learning-constant-stepsize-can-fail-to-converge
kind: example
title: A constant Q-learning step size can preserve persistent reward noise
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-markov-decision-process
  - def-optimal-action-value-bellman-operator
  - lem-finite-mdp-policy-action-state-reward-path-law
  - alg-q-learning
  - def-axiom-of-choice
  - thm-continuity-from-above-for-measures
  - thm-finite-and-countable-subadditivity-of-measures
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§6.5, Q-learning step-size convergence conditions and the need for diminishing steps."
    - title: "John N. Tsitsiklis, Asynchronous Stochastic Approximation and Q-Learning"
      url: "https://www.mit.edu/~jnt/Papers/J052-94-jnt-q.pdf"
      locator: "§§2–7, Robbins–Monro square-summability conditions and discounted Q-learning convergence theorem."

---

## Example

Consider a continuing MDP with one state $s$, one action $a$, discount $\gamma=0$, and a transition back to $s$ at every step. Conditional on the entire past, the reward is $+1$ or $-1$ with probability $1/2$ each. Initialize $Q_0(s,a)=0$ and use the constant Q-learning step size $\alpha_n(s,a)=1$ at every update. Then the optimal action value is $0$, but the Q-learning iterates fail to converge almost surely.

## Example references

[[def-finite-markov-decision-process|The finite state-action reward-transition model]].

[[lem-finite-mdp-policy-action-state-reward-path-law|The finite-prefix probabilities of action-state-reward trajectories]].

[[alg-q-learning|The tabular Q-learning update]].

[[def-axiom-of-choice|Choice used by the path-space construction]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Tsitsiklis, *Asynchronous Stochastic Approximation and Q-Learning*](https://www.mit.edu/~jnt/Papers/J052-94-jnt-q.pdf).

## Facts & Assumptions

**Given:** The one-state, one-action finite MDP, $\gamma=0$, the stated conditional reward law, the initial value, the constant step size, and AC for the path law.

[A1] [[def-axiom-of-choice]]: the path-space law is available under the Axiom of Choice.

[F1] [[def-finite-markov-decision-process]]: conditional on the only state-action pair, the reward-transition probabilities assign mass $1/2$ to each reward and return to $s$.

[F2] [[lem-finite-mdp-policy-action-state-reward-path-law]]: every finite action-state-reward path has probability equal to the product of its one-step kernel masses.

[F3] [[alg-q-learning]]: the updated coordinate moves toward $R_{n+1}+\gamma\max_bQ_n(S_{n+1},b)$, with all other coordinates fixed.

[F4] [[def-optimal-action-value-bellman-operator]]: $(HQ)(s,a)=\sum_{s',\rho}p(s',\rho\mid s,a)[\rho+\gamma\max_bQ(s',b)]$.

[F5] [[thm-continuity-from-above-for-measures]]: probabilities of decreasing measurable events of finite measure converge to the probability of their intersection.

[F6] [[thm-finite-and-countable-subadditivity-of-measures]]: a countable union has probability at most the sum of its event probabilities.

## Proof

**Given:** The MDP and update in the Example, the path-law assumptions and measure suppliers in Facts & Assumptions, and the Axiom of Choice.

1.1 There is only one state-action coordinate. Since $\gamma=0$ and $\alpha_n=1$, [F3] gives $Q_{n+1}(s,a)=R_{n+1}$ for every $n$. By [F1] and [F4], $(HQ)(s,a)=\frac12(+1)+\frac12(-1)=0$ for every table $Q$, so the optimal Bellman fixed point is $Q^*(s,a)=0$. [given, F1, F3, F4, algebra]

1.2 Fix $N\ge1$. For each $m\ge N$, let $E_m^+$ be the event that $R_{N+1},\ldots,R_m$ are all $+1$. By [F2], $P(E_m^+)=2^{-(m-N)}$. These events decrease as $m$ increases; [F5] implies $P(\bigcap_{m\ge N}E_m^+)=0$. The same calculation gives probability zero for the event that all rewards from index $N+1$ onward equal $-1$. Taking the countable union over $N$ and the two signs, [F6] shows that with probability one the reward sequence is not eventually constant. [given, A1, F1, F2, F5, F6]

2.1 A convergent sequence taking values only in $\{-1,+1\}$ must be eventually constant: the Cauchy condition with tolerance $1$ forbids two different values in any sufficiently late tail. Step 1.2 therefore shows that $(R_n)$ does not converge almost surely. Step 1.1 gives $Q_n(s,a)=R_n$ for every $n\ge1$, so the Q-learning iterates also fail to converge almost surely. [step 1.1, step 1.2, algebra] ∎

