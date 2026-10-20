---
id: def-offline-reinforcement-learning-dataset
kind: definition
title: "Finite-horizon offline reinforcement-learning dataset and coverage"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - def-axiom-of-choice
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-independent-random-elements
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-probability-measure
  - lem-finite-mdp-policy-action-state-reward-path-law
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
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§5.5, printed pp. 128–129; behavior/target policies, action coverage, and trajectory likelihood ratios."
    - title: "Nan Jiang and Lihong Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning"
      url: "https://proceedings.mlr.press/v48/jiang16.pdf"
      locator: "§3.2, PDF pp. 2–3; finite-horizon off-policy evaluation setup and target-policy value."
    - title: "Sergey Levine, Aviral Kumar, George Tucker, and Justin Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems"
      url: "https://arxiv.org/pdf/2005.01643"
      locator: "§2.4, PDF pp. 8–9; fixed logged datasets and distribution shift."
---

## Definition

Assume the Axiom of Choice for the policy-induced path laws below. Let $S$ be a nonempty finite state set, let $A(s)$ be a finite nonempty action set for each $s\in S$, and let $\mathcal R\subset\mathbb R$ be a finite nonempty reward set. A finite Markov decision process here consists of these sets and a joint next-state/reward probability mass $p(s',r\mid s,a)\ge0$, defined for $s,s'\in S$, $a\in A(s)$, and $r\in\mathcal R$, with $\sum_{s'\in S}\sum_{r\in\mathcal R}p(s',r\mid s,a)=1$ for every $(s,a)$. A stationary Markov policy $\sigma$ assigns probabilities $\sigma(a\mid s)\ge0$ with $\sum_{a\in A(s)}\sigma(a\mid s)=1$ at every state.

Fix a horizon $H\ge1$, a discount $0\le\gamma\le1$, and an initial state $s_0\in S$. A trajectory is a tuple $\tau=(s_0,a_0,r_1,s_1,\ldots,a_{H-1},r_H,s_H)$ with $s_t\in S$, $a_t\in A(s_t)$, and $r_{t+1}\in\mathcal R$ for each $0\le t<H$. Write $\Omega_H$ for the finite set of all such tuples. For each stationary policy $\sigma$, let $P^\sigma_H$ be the probability law on $\Omega_H$ whose atom masses are

$$P^\sigma_H(\{\tau\})=\prod_{t=0}^{H-1}\sigma(a_t\mid s_t)p(s_{t+1},r_{t+1}\mid s_t,a_t).$$

For a trajectory $\tau$, its finite-horizon return is $G_H(\tau)=\sum_{t=0}^{H-1}\gamma^t r_{t+1}$, and the value of target policy $\pi$ from $s_0$ is $J_H(\pi;s_0)=\int_{\Omega_H}G_H\,dP^\pi_H$. A fixed logged dataset of size $n\ge1$ consists of independent trajectories $(\tau_1,\ldots,\tau_n)$, each with law $P^\mu_H$ for a behavior policy $\mu$; the true behavior propensities $\mu(a\mid s)$ used to generate the data are known. Full horizon coverage means $P^\pi_H\ll P^\mu_H$, so every behavior-null trajectory event is also target-null. In this finite setting, the condition $\pi(a\mid s)>0\Rightarrow\mu(a\mid s)>0$ at every state-action pair reachable under $\pi$ before time $H$ is sufficient for full horizon coverage. A trajectory function is integrable under a law $P$ when $\int_{\Omega_H}|f|\,dP<\infty$. All returns are integrable in this finite-horizon finite-reward setting; importance-weighted return expressions below are used only when they are integrable.

## Definition references

[[lem-finite-mdp-policy-action-state-reward-path-law|Under AC, a stationary policy on a finite MDP has the stated finite-prefix action-state-reward law.]]

[[def-independent-random-elements|Independent sample trajectories are random elements with independent generated sigma-algebras.]]

[[def-absolutely-continuous-with-respect-to-a-positive-measure|Absolute continuity means every null set for the behavior law is null for the target law.]]

[[def-probability-measure|A probability measure is a measure of total mass one.]]

[[def-expectation-of-a-nonnegative-or-integrable-random-variable|Expectation is the Lebesgue integral under the trajectory law.]]

[[def-integrable-real-and-complex-functions-and-their-integrals|A real trajectory function is integrable when its absolute value has finite integral.]]

## Remarks

The stated state-action support condition implies full horizon coverage. Here a state-action pair $(s,a)$ is reachable under $\pi$ before time $H$ when $P^\pi_H(S_t=s,A_t=a)>0$ for some $0\le t<H$. Suppose a trajectory atom $\tau$ has $P^\pi_H(\{\tau\})>0$. Its atom mass is a product of nonnegative factors, so every target action probability and every shared transition/reward factor along $\tau$ is positive. Each state-action pair on $\tau$ is therefore reachable under $\pi$, and the support condition gives $\mu(a_t\mid s_t)>0$ at every time. The same initial state and transition/reward factors then give $P^\mu_H(\{\tau\})>0$. Since $\Omega_H$ is finite, every event is a finite union of atoms; thus every $P^\mu_H$-null event is also $P^\pi_H$-null, proving $P^\pi_H\ll P^\mu_H$.
