---
id: alg-monte-carlo-policy-evaluation
kind: algorithm
title: First-visit Monte Carlo policy evaluation
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-finite-markov-decision-process
  - def-discounted-return-and-value-functions
  - def-episodic-returns-td-errors-and-policy-support
  - lem-finite-episode-policy-importance-ratio-is-unbiased
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§5.1, first-visit Monte Carlo prediction; §5.5, ordinary and weighted importance-sampling estimators."
    - title: "Han-Dong Yang, Optimal Control and Reinforcement Learning, Chapter 2: Value-based Reinforcement Learning"
      url: "https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html"
      locator: "§§2.1.2 and 2.1.4.1, first-visit Monte Carlo evaluation and off-policy importance sampling."

---

## Definition

**Inputs:** A finite MDP with nonempty finite state set $S$, discount $0\le\gamma<1$, terminal set $S_\dagger\subseteq S$, an initial-state rule, and an episode budget $N\in\mathbb N\cup\{\infty\}$. Assume the Axiom of Choice for the policy path laws defining $V^\pi$ and the episode distributions, and that episodes reach $S_\dagger$ in finite time almost surely from every state under each stationary policy used: the target $\pi$, and also the behavior $\mu$ in off-policy mode. Choose one mode: (a) on-policy prediction with independent episodes under a stationary target policy $\pi$; or (b) off-policy prediction with independent episodes under a stationary behavior policy $\mu$ and stationary target policy $\pi$. In off-policy mode require $\pi(a\mid x)>0\Rightarrow\mu(a\mid x)>0$ for every nonterminal state $x$ and action $a\in A(x)$.

**Output:** After every finite number $n$ of completed episodes, for every nonterminal state its visit count and each available estimate; report no estimate when its required denominator is zero. A finite budget $N$ returns these outputs after episode $N$; budget $\infty$ emits successive finite-prefix outputs without a final output or convergence assertion. Set the value estimate of every terminal state to $0$.

Initialize visit counts $C(s)=0$ and leave each nonterminal state's estimate unavailable. Generate successive independent episodes using the selected mode and initial-state rule; stop after $N$ episodes when $N$ is finite. In episode $i$, for each nonterminal state $s$ visited before termination, let $t_i(s)$ be its first visit time and let $G_{t_i(s)}=\sum_{k=t_i(s)}^{T_i-1}\gamma^{k-t_i(s)}R_{k+1}$ be the return from that visit.

In on-policy mode, update only on this first visit: set $m=C(s)+1$; if $m=1$, set $\widehat V(s)=G_{t_i(s)}$, and otherwise set

$$
\widehat V(s)\leftarrow\widehat V(s)+\frac{G_{t_i(s)}-\widehat V(s)}{m}.
$$

Then set $C(s)=m$. In off-policy mode, for each first visit compute

$$
W_i(s)=\prod_{k=t_i(s)}^{T_i-1}\frac{\pi(A_k\mid S_k)}{\mu(A_k\mid S_k)},
$$

where $T_i$ is the terminal time and an empty product is $1$. Maintain $B(s)=0$ and $W_\Sigma(s)=0$ initially; add $W_i(s)G_{t_i(s)}$ to $B(s)$ and $W_i(s)$ to $W_\Sigma(s)$, and increment $C(s)$. After any $n$ completed episodes, the ordinary first-visit estimator is

$$
\widehat V^{\rm ordinary}_n(s)=\frac{B(s)}{C(s)}
$$

when $C(s)>0$; otherwise no ordinary estimate is produced. The weighted first-visit estimator is

$$
\widehat V^{\rm weighted}_n(s)=\frac{B(s)}{W_\Sigma(s)}
$$

when $W_\Sigma(s)>0$; otherwise no weighted estimate is produced. Under target support, for each positive-probability behavior history ending immediately upon a first visit to a nonterminal state $s$, before its action is sampled, the ordinary weighted return has conditional mean $V^\pi(s)$ by the finite-episode likelihood-ratio identity. The self-normalized weighted estimator need not be unbiased at a finite sample size. These procedures make no convergence claim or Monte Carlo control claim.

## Definition references

[[def-finite-markov-decision-process|The finite MDP and stationary policies]].

[[def-discounted-return-and-value-functions|Discounted returns and state values]].

[[def-episodic-returns-td-errors-and-policy-support|Finite episodes, first-visit returns, support, and trajectory ratios]].

[[lem-finite-episode-policy-importance-ratio-is-unbiased|The ordinary importance-sampling return has target-policy conditional mean under support]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Yang, *Optimal Control and Reinforcement Learning*, Chapter 2](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html).
