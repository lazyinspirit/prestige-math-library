---
id: lem-finite-episode-policy-importance-ratio-is-unbiased
kind: lemma
title: Finite-episode importance sampling has the target-policy mean under support
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-episodic-returns-td-errors-and-policy-support
  - def-finite-markov-decision-process
  - lem-finite-mdp-policy-action-state-reward-path-law
  - def-discounted-return-and-value-functions
  - def-probability-measure
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-monotone-convergence-for-the-integral
  - def-axiom-of-choice
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
      locator: "§5.5, equations (5.3)–(5.5), printed pp. 128–129."
    - title: "Han-Dong Yang, Optimal Control and Reinforcement Learning, Chapter 2: Value-based Reinforcement Learning"
      url: "https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html"
      locator: "§2.1.4.1, trajectory probability ratio and ordinary importance-sampling expectation."
---

## Statement

Assume the Axiom of Choice. Let a finite MDP with terminal set $S_\dagger$ have $0\le\gamma<1$, and let $\pi$ and $\mu$ be stationary target and behavior policies. Suppose $\pi(a\mid x)>0$ implies $\mu(a\mid x)>0$ for every nonterminal state $x$ and action $a\in A(x)$, and episodes reach $S_\dagger$ in finite time almost surely from every state under both policies. For any starting state $s$, a behavior-generated episode has first terminal time $T$ and ratio

$$
\Lambda_{0:T-1}=\prod_{k=0}^{T-1}\frac{\pi(A_k\mid S_k)}{\mu(A_k\mid S_k)},
$$

where the empty product for $T=0$ is $1$. For every bounded measurable real function $G$ of the finite episode,

$$
E_{\mu,s}[\Lambda_{0:T-1}G]=E_{\pi,s}[G].
$$

The identity therefore applies to every episode suffix starting at a state $s$ that can be reached by a finite behavior history. Fix an initial state $s_0$. If $H$ is a positive-probability finite behavior history from $s_0$ that first visits $s$ at time $t$ and ends immediately upon observing $S_t=s$, before the action $A_t$ is sampled (when $s$ is terminal, no action is sampled and the suffix is empty), let

$$G_t=\sum_{k=t}^{T-1}\gamma^{k-t}R_{k+1}$$

be the suffix return. Then

$$
\frac{E_{\mu,s_0}[\mathbf1_H\Lambda_{t:T-1}G_t]}{P_{\mu,s_0}(H)}=V^\pi(s).
$$

Thus the ordinary first-visit importance-sampling return has mean $V^\pi(s)$ conditional on each pre-action first-visit history.

## Statement references

[[def-episodic-returns-td-errors-and-policy-support|The terminal extension, bounded discounted return, target support, and trajectory-ratio convention]].

[[lem-finite-mdp-policy-action-state-reward-path-law|The action-state-reward trajectory law and its finite-prefix probabilities]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Yang, *Optimal Control and Reinforcement Learning*, Chapter 2](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html).

## Facts & Assumptions

**Given:** AC, a finite MDP and discount, target and behavior policies, target support, almost-sure episode termination from every state under both policies, and the bounded measurable function $G$ in the Statement.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is used for the policy path laws.

[F1] [[def-finite-markov-decision-process]]: conditional on a state-action pair, the same finite joint next-state/reward law $p(s',r\mid s,a)$ is used under both policies.

[F2] [[lem-finite-mdp-policy-action-state-reward-path-law]]: for every feasible finite state-action-reward trajectory, its probability under policy $\sigma$ is the product of $\sigma(a_k\mid s_k)p(s_{k+1},r_{k+1}\mid s_k,a_k)$ over its steps.

[F3] [[def-episodic-returns-td-errors-and-policy-support]]: $\Lambda_{0:T-1}$ is the product of action-probability ratios along the finite episode, and the support condition makes its denominators positive on behavior-observed paths.

[F4] [[def-discounted-return-and-value-functions]]: under the absorbing zero-reward extension, the target return is the discounted path return and is bounded by $M/(1-\gamma)$.

[F5] [[def-probability-measure]] and [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: path probabilities are countably additive and expectations are Lebesgue integrals.

[F6] [[thm-monotone-convergence-for-the-integral]]: expectations of increasing nonnegative measurable functions converge to the expectation of their pointwise limit.

## Proof
**Given:** The hypotheses and conventions in the Statement and [A1], [F1]–[F6].

1.1 Fix a finite terminal trajectory $\omega=(s_0,a_0,r_1,s_1,\ldots,a_{m-1},r_m,s_m)$ with $s_0=s$ and $s_m\in S_\dagger$. By [F2], $P_{\pi,s}(\omega)=\prod_{k=0}^{m-1}\pi(a_k\mid s_k)p(s_{k+1},r_{k+1}\mid s_k,a_k),\qquad P_{\mu,s}(\omega)=\prod_{k=0}^{m-1}\mu(a_k\mid s_k)p(s_{k+1},r_{k+1}\mid s_k,a_k).$ If $P_{\pi,s}(\omega)>0$, every transition-reward factor and every target action factor is positive. Target support then makes every corresponding behavior action factor positive, so $P_{\mu,s}(\omega)>0$. On each behavior-positive trajectory, canceling the shared transition-reward factors gives $P_{\pi,s}(\omega)=\Lambda_{0:m-1}(\omega)P_{\mu,s}(\omega)$; if its target probability is zero, the ratio is zero. [A1, F1, F2, F3, algebra]

2.1 For each episode length $m$, there are finitely many terminal trajectories because the state, action, and reward alphabets are finite. These terminal-path events are disjoint over all lengths and cover probability one under both policies by the termination hypothesis. Enumerate them by increasing length and, within each length, any finite enumeration. For any finite initial collection $C$ of these paths, step 1.1 gives $\sum_{\omega\in C}P_{\mu,s}(\omega)\Lambda(\omega)|G(\omega)| =\sum_{\omega\in C}P_{\pi,s}(\omega)|G(\omega)|.$ As the collections increase to all terminal paths, [F6] passes both nonnegative sums to their expectations. Thus $E_{\mu,s}[\Lambda|G|]=E_{\pi,s}[|G|]<\infty$, so $\Lambda G$ is integrable. [given, F4, F5, F6, step 1.1, algebra]

3.1 Apply the same finite-path identity separately to the nonnegative functions $G^+=\max(G,0)$ and $G^-=\max(-G,0)$; step 2.1 makes both weighted expectations finite. Subtracting the two equalities by linearity of the integral gives $E_{\mu,s}[\Lambda G]=E_{\pi,s}[G]$. For $G=G_0$, the target expectation is $V^\pi(s)$ by [F4]. [step 1.1, step 2.1, F4, F5, F6, algebra]

4.1 Let $H$ be one finite behavior history ending at a first visit to $s$ at time $t$, with $P_{\mu,s_0}(H)>0$. For every finite terminal suffix $\omega$ starting at $s$, the product formula [F2] factors the joint probability as $P_{\mu,s_0}(H)P_{\mu,s}(\omega)$. The suffix likelihood ratio contains only action factors from time $t$ onward, so step 1.1 gives the target-to-behavior ratio for that suffix. Since $G_t$ is the bounded discounted suffix return and target termination holds from $s$, step 3.1 gives $E_{\mu,s}[\Lambda_{0:T-1}G_0]=V^\pi(s)$. Summing over suffixes therefore yields $E_{\mu,s_0}[\mathbf1_H\Lambda_{t:T-1}G_t]=P_{\mu,s_0}(H)V^\pi(s)$. Dividing by the positive $P_{\mu,s_0}(H)$ proves the conditional first-visit assertion. [given, F2, F3, F4, step 1.1, step 3.1, algebra] ∎
