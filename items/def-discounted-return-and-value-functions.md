---
id: def-discounted-return-and-value-functions
kind: definition
title: "Discounted returns and policy values in a finite MDP"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-markov-decision-process
  - def-axiom-of-choice
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - thm-finite-mdp-policy-induces-reward-state-chain
  - lem-bounded-discounted-return-converges
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - def-random-element-and-real-random-variable
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - thm-dominated-convergence
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
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
      locator: "§3.7, discounted return and state-value definition, Bellman recursion (3.12); §§3.8 and 4.2 for optimal values and policy improvement."
    - title: "Leslie Pack Kaelbling, Michael L. Littman, and Anthony R. Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "§2.2, discounted objective, stationary policy, and value recursion; PDF pp. 4–6."
---

## Definition

Let a finite MDP have $0\le\gamma<1$ and let $\pi$ be a stationary Markov policy. If $S=\emptyset$, define $V^\pi$ to be the unique empty function; no path law or choice axiom is needed in this case. If $S\ne\emptyset$, assume the Axiom of Choice and, for each $s\in S$, use the path law started at $X_0=(s,0)$ supplied by the policy-induced reward-state chain; write $X_t=(S_t,R_t)$. The **discounted return** is

$$ G_t=\sum_{j=0}^{\infty}\gamma^jR_{t+j+1}, $$

and the **state value under $\pi$** is $V^\pi(s)=\mathbb E_{\pi,s}[G_0]$, where $\mathbb E_{\pi,s}$ is expectation under that start-state law. If $S=\emptyset$, $V^\pi$ is the unique empty function. The reward sequence bound gives $|G_t|\le M/(1-\gamma)$, so each return is measurable and integrable. This is the start-state meaning of $\mathbb E_\pi[G_t\mid S_t=s]$ when that conditional expectation is defined. The definition concerns discounted infinite-horizon tasks; average-reward and undiscounted continuing models, and improper episodic tasks, are outside its scope.

The coordinate $0$ in $X_0=(s,0)$ is only a dummy initial reward; the chain's one-step kernel emits rewards in $\mathcal R$. Finite partial sums of the return are measurable, their pointwise limit is measurable, and the constant bound $M/(1-\gamma)$ is an integrable majorant on the probability space.

## Definition references

[[def-finite-markov-decision-process|The finite joint reward-transition model and its bounded reward alphabet]].

[[def-axiom-of-choice|The Axiom of Choice, used only in the nonempty-state path-law branch]].

[[thm-finite-mdp-policy-induces-reward-state-chain|The policy-induced homogeneous reward-state chain and its start-state path law]].

[[def-time-homogeneous-markov-chain-with-transition-kernel|The conditional one-step transition-kernel identity defining a homogeneous Markov chain]].

[[lem-bounded-discounted-return-converges|Absolute convergence and the uniform tail bound for bounded discounted rewards]].

[[prop-closure-properties-of-measurable-functions-used-by-the-integral|Finite sums and scalar multiples of measurable functions are measurable]].

[[def-random-element-and-real-random-variable|A measurable real-valued coordinate on a probability space is a real random variable]].

[[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable|A pointwise limit of measurable functions is measurable]].

[[thm-dominated-convergence|A measurable pointwise limit under one integrable majorant is integrable, and its expectations are the limits of the partial expectations]].

[[def-expectation-of-a-nonnegative-or-integrable-random-variable|Expectation of an integrable real random variable is its finite Lebesgue integral]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

