---
id: def-finite-stochastic-shortest-path-problem
kind: definition
title: "Finite stochastic shortest-path problems"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-finite-markov-decision-process
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Andrew G. Barto, Steven J. Bradtke, and Satinder P. Singh, Learning to Act Using Real-Time Dynamic Programming"
      url: "https://ai.dmi.unibas.ch/research/reading_group/barto-etal-ai1995.pdf"
      locator: "§§4.1 and 5.1, PDF pp. 89–100: undiscounted stochastic shortest-path model, goal states, proper policies, and positive costs."
---

## Definition

Let a finite MDP have nonempty finite state set $S$ and finite nonempty action sets $A(s)$. A **finite stochastic shortest-path problem** consists of that MDP, a nonempty goal set $G\subseteq S$, and a constant $c_{\min}>0$ with the following properties. Each $g\in G$ has a single dummy action that returns to $g$ with reward $0$ with probability $1$. For every $s\notin G$ and every $a\in A(s)$, the expected reward satisfies $r(s,a)\le -c_{\min}$. Define the one-step expected cost by $c(s,a)=-r(s,a)$ off $G$ and $c(g,a)=0$ at goals. A stationary Markov policy $\pi$ is **proper** if, from every initial state, the finite-step probabilities of not having reached $G$ tend to $0$: with $q_0(s)=1_{s\notin G}$ and

$$q_{n+1}(s)=\sum_{a\in A(s)}\pi(a\mid s)\sum_{s'\in S}P(s'\mid s,a)q_n(s')\quad(s\notin G),\qquad q_{n+1}(g)=0\quad(g\in G),$$

properness means $q_n(s)\to0$ for every $s\in S$. The problem need not have a proper policy unless that is separately assumed.

## Definition references

[[def-finite-markov-decision-process|A finite MDP has finite states and actions, a joint reward/transition law, and derived expected rewards and transition probabilities.]]

[Barto, Bradtke, and Singh, “Learning to Act Using Real-Time Dynamic Programming”](https://ai.dmi.unibas.ch/research/reading_group/barto-etal-ai1995.pdf).

## Facts & Assumptions

**Given:** A finite MDP, nonempty goal set $G$, absorbing zero-reward dummy actions at goals, and the strict negative expected-reward bound on every nonglobal state-action pair in the Definition.

[F1] [[def-finite-markov-decision-process]]: each $A(s)$ is finite and nonempty; $P(\cdot\mid s,a)$ is a probability distribution obtained by marginalizing the joint reward-transition law, and $r(s,a)$ is its expected one-step reward.

## Verification

**Given:** The finite MDP data and a stationary Markov policy $\pi$.

1.1 The expected costs $c(s,a)=-r(s,a)$ are finite because the reward alphabet is finite and the joint row is a probability mass by [F1]. The stated reward bound gives $c(s,a)\ge c_{\min}>0$ off $G$, and the dummy action at each goal has cost $0$. [given, F1, algebra]

2.1 By [F1], every row $P(\cdot\mid s,a)$ is a probability distribution, and every policy row $\pi(\cdot\mid s)$ is a probability distribution. Thus the recursion defining $q_{n+1}$ is a finite sum of nonnegative terms. If $0\le q_n\le1$, then $0\le q_{n+1}(s)\le\sum_a\pi(a\mid s)\sum_{s'}P(s'\mid s,a)=1$ off $G$, while $q_{n+1}(g)=0$ on $G$. Since $q_0\in[0,1]^S$, induction shows every $q_n$ is well-defined and lies in $[0,1]^S$. [given, F1, step 1.1, algebra] ∎

