---
id: thm-communicating-mdp-common-optimal-average-reward
kind: theorem
title: "Communicating MDPs have a common optimal average reward"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-bounded-reward-finite-mdp, def-communicating-mdp-and-diameter, lem-almost-additive-sequence-has-limit, def-axiom-of-choice, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-conditional-expectation-as-an-ae-class, thm-tower-property-of-conditional-expectation, cor-expectation-linearity-monotonicity-and-modulus-bound]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "§2, PDF pp. 2–3: communicating MDP and optimal average reward."}
    - {title: "Martin L. Puterman and Timothy C. Y. Chan, Markov Decision Processes and Reinforcement Learning, Chapter 7: Average Reward Models", url: "https://raw.githubusercontent.com/martyput/MDP_book/master/07%20Chapter/Book___chapter07.pdf", locator: "Chapter 7, average-reward optimality and value iteration."}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice for the path-law and conditional-expectation constructions. For a finite communicating MDP with rewards in $[0,1]$, let $V_n(s)$ be the supremum of the expected sum of the first $n$ rewards over all history-dependent policies starting from state $s$. For every state $s$, the limit $\lim_{n\to\infty}V_n(s)/n$ exists, is independent of $s$, and belongs to $[0,1]$.

## Statement references

[UCRL2 average-reward framework](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §2 and Theorem 2, PDF pp. 2–4.

[Average-reward MDP treatment](https://raw.githubusercontent.com/martyput/MDP_book/master/07%20Chapter/Book___chapter07.pdf): Chapter 7.

[Axiom of Choice](../items/def-axiom-of-choice.md): assumed for the path-law and conditional-expectation constructions.

## Facts & Assumptions

**Given:** A finite communicating MDP as defined in [[def-bounded-reward-finite-mdp]] and [[def-communicating-mdp-and-diameter]], and the Axiom of Choice for the induced path laws.

[F1] [[def-bounded-reward-finite-mdp]]: every reward lies in $[0,1]$ and the conditional next-state/reward law is fixed for each state-action pair.

[F2] [[def-communicating-mdp-and-diameter]]: every pair of states can be connected with expected hitting time arbitrarily close to at most the finite raw diameter $D_0$.

[F3] [[lem-almost-additive-sequence-has-limit]]: a linearly bounded sequence with uniformly bounded additive defect has a normalized limit.

[F4] [[def-axiom-of-choice]]: AC is used for the path laws in [F1] and the conditional-expectation constructions in [F5] and [F6].

[F5] [[def-conditional-expectation-as-an-ae-class]]: conditional expectations are unique almost-sure classes; the proof uses versions only through conditional inequalities.

[F6] [[thm-tower-property-of-conditional-expectation]]: conditioning a finite-horizon reward sum at time $m$ and then taking expectation recovers its unconditional expectation.

[F7] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectations are linear on integrable finite sums and preserve inequalities.

[F8] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: bounded rewards and their finite sums are integrable and have the stated expectations.

## Proof

1.1 Set $V_0(s)=0$ for every state. Backward induction over the finite horizon gives the Bellman recurrence $$V_{n+1}(s)=\max_{a\in A(s)}\left[r(s,a)+\sum_{s'\in S}P(s'\mid s,a)V_n(s')\right].$$ For the induction step, suppose that from every state the $n$-step supremum is attained by a deterministic Markov policy and equals $V_n$. Any history-dependent $(n+1)$-step policy may randomize its first action and may condition later actions on the first reward as well as the next state. Conditional on a first action $a$ and one-step outcome $(s',\rho)$, its continuation has expected reward at most $V_n(s')$ by the induction hypothesis, which is independent of the earlier history and reward. Thus its total expected reward is at most $r(s,a)+\sum_{s'}P(s'\mid s,a)V_n(s')$, averaged over its first-action distribution, and this average is at most the displayed maximum. A maximizing action exists because $A(s)$ is finite; choosing it and then using an attaining $n$-step policy from each possible next state attains equality. The base case $V_0=0$ is attained by the empty policy. This proves both the recurrence and that history dependence cannot improve $V_n$; the joint reward/next-state law is handled by its mean reward and next-state marginal. For any $0\le j\le n$, splitting an $n$-step policy into its first $n-j$ and last $j$ rewards gives $V_n(y)\le V_{n-j}(y)+j$: the first part is at most the optimal $(n-j)$-step value and the last part is at most $j$ because rewards lie in $[0,1]$. For any $x,y$ and $\varepsilon>0$, [F2] gives a policy from $x$ whose hitting time $\tau_y$ has expectation at most $D_0+\varepsilon$. Follow it until $y$ is hit, then use an optimal policy for the remaining $n-\tau_y$ steps if $\tau_y\le n$. On $\{\tau_y=j\}$ for each $0\le j\le n$, the conditional expected total reward given the history through time $j$ is at least $V_{n-j}(y)\ge V_n(y)-j$, since pre-hit rewards are nonnegative. On $\tau_y>n$, the total reward is nonnegative and $V_n(y)\le n<\tau_y$. Summing over the hitting-time events and taking expectations using [F5]–[F8] gives $V_n(x)\ge V_n(y)-\mathbb E[\tau_y]\ge V_n(y)-D_0-\varepsilon$. Letting $\varepsilon\downarrow0$ and interchanging $x,y$ proves $\max_s V_n(s)-\min_s V_n(s)\le D_0$. [given, F1, F2, F4, F5, F6, F7, F8, construct, algebra]

2.1 Put $a_n=\max_s V_n(s)$; the maximum exists because $S$ is finite, and $0\le a_n\le n$ by [F1,F8]. For any $(m+n)$-step policy from $s$, the expected first $m$ rewards are at most $V_m(s)$, while conditional on the complete history through state $S_m$ the remaining $n$-step rule is an admissible policy from $S_m$ and its conditional expected reward is at most $V_n(S_m)\le a_n$. By [F4,F5,F6,F7], the unconditional expected total is therefore at most $V_m(s)+a_n\le a_m+a_n$, so $a_{m+n}\le a_m+a_n$. Conversely, choose $s_*$ attaining $a_m$ and use an optimal $m$-step policy from it; after observing $S_m=z$, continue with an optimal $n$-step policy from $z$. By step 1.1, $V_n(z)\ge a_n-D_0$ for every $z$, so [F4,F6,F7] give total expected reward at least $a_m+a_n-D_0$. Hence $a_{m+n}\ge a_m+a_n-D_0$, and $|a_{m+n}-a_m-a_n|\le D_0$. [given, F1, F4, F5, F6, F7, F8, step 1.1, algebra]

3.1 Apply [F3] to $(a_n)$ with $C=D_0$ to obtain $a_n/n\to\rho^*$ for some finite $\rho^*$. Step 1.1 gives $a_n-D_0\le V_n(s)\le a_n$ for every $s$, so division by $n$ proves $V_n(s)/n\to\rho^*$ for every state. The bounds $0\le V_n(s)\le n$ imply $\rho^*\in[0,1]$. [given, F1, F3, step 1.1, step 2.1] ∎
