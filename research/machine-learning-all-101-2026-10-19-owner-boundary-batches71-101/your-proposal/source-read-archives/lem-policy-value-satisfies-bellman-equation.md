---
id: lem-policy-value-satisfies-bellman-equation
kind: lemma
title: "Expected discounted policy value is a fixed point of its Bellman operator"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-markov-decision-process
  - def-discounted-return-and-value-functions
  - def-axiom-of-choice
  - thm-finite-mdp-policy-induces-reward-state-chain
  - def-policy-bellman-operator
  - def-probability-measure
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - lem-bounded-discounted-return-converges
  - thm-dominated-convergence
  - thm-algebra-of-limits
  - lem-limit-of-tail
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
      locator: "§3.7, the policy-value recursion from the joint reward-transition law, equation (3.12)."
    - title: "Leslie Pack Kaelbling, Michael L. Littman, and Anthony R. Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "§2.2, discounted value recursion for a stationary policy; PDF pp. 4–6."
---

## Statement

For a finite MDP, a discount $0\le\gamma<1$, and any stationary Markov policy $\pi$, the expected discounted state value defined from each initial state satisfies

$$ T^\pi V^\pi=V^\pi. $$

If $S=\emptyset$, this is the equality of the unique empty functions and no choice axiom is needed. If $S\ne\emptyset$, assume the Axiom of Choice for the path-law definition of $V^\pi$.

## Statement references

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

[[def-axiom-of-choice|Choice for the nonempty-state chain construction]].

## Facts & Assumptions

**Given:** A finite MDP, $0\le\gamma<1$, a stationary policy $\pi$, and the Axiom of Choice.

[A1] [[def-axiom-of-choice]]: Choice is assumed for the path-space construction used to define the start-state expectation.

[F1] [[def-discounted-return-and-value-functions]]: $V^\pi(s)$ is the expectation of the absolutely convergent discounted return under the policy-induced chain started at $(s,0)$; each return is bounded by $M/(1-\gamma)$.

[F2] [[thm-finite-mdp-policy-induces-reward-state-chain]]: the chain has the homogeneous kernel obtained by mixing the MDP's joint reward-transition law with $\pi$, and its finite-prefix laws are the iterated kernel products.

[F3] [[def-policy-bellman-operator]]: $(T^\pi V)(s)=\sum_a\pi(a\mid s)\sum_{s',\rho}p(s',\rho\mid s,a)[\rho+\gamma V(s')]$.

[F4] [[lem-bounded-discounted-return-converges]]: each finite partial discounted return is bounded in absolute value by $M/(1-\gamma)$ and converges pointwise to the full return.

[F5] [[def-probability-measure]] and [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: a constant $B\ge0$ on a probability space is integrable with integral $B$.

[F6] [[thm-dominated-convergence]]: measurable returns converging pointwise under one integrable majorant have expectations converging to the expectation of their limit.

[F7] [[thm-algebra-of-limits]]: limits commute with finite sums and multiplication by fixed real scalars.

[F8] [[lem-limit-of-tail]]: the shifted sequence $(V_{N+1}^\pi)_{N\ge0}$ has the same limit as $(V_N^\pi)_{N\ge0}$.

## Proof

1.1 If $S=\emptyset$, the claimed equality is between the unique empty functions. Otherwise assume $S\ne\emptyset$ and fix $s\in S$. For $N\ge0$, let $$ G_N=\sum_{j=0}^{N-1}\gamma^jR_{j+1}, \qquad V_N^\pi(s)=\mathbb E_{\pi,s}[G_N], \qquad V_0^\pi(s)=0. $$ These are finite sums of measurable reward coordinates under the chain law; the case $S=\emptyset$ was handled in the statement. [given, A1, F1, F2, construct]

1.2 The chain's finite-prefix law [F2] gives $$ V_{N+1}^\pi(s)= \sum_{a\in A(s)}\pi(a\mid s)\sum_{s'\in S,\,\rho\in\mathcal R} p(s',\rho\mid s,a)\,[\rho+\gamma V_N^\pi(s')]. $$ Indeed the first transition from $(s,0)$ has mass $\sum_a\pi(a\mid s)p(s',\rho\mid s,a)$; after that transition the remaining $N$-step law depends on $s'$ but not on the reward coordinate, since $K_\pi((s',\rho),\cdot)=K_\pi((s',0),\cdot)$. Expanding the finite sums and using $r(s,a)=\sum_{s',\rho}\rho p(s',\rho\mid s,a)$ and $P(s'\mid s,a)=\sum_\rho p(s',\rho\mid s,a)$ shows the right side is $(T^\pi V_N^\pi)(s)$. [given, F1, F2, F3, algebra]

2.1 For each path, $G_N\to G_0$ and $|G_N|\le M/(1-\gamma)$ by [F4]. The constant majorant is integrable by [F5] on the probability law from [F2]. Dominated convergence [F6] therefore gives $V_N^\pi(s)\to V^\pi(s)$. [step 1.1, A1, F1, F2, F4, F5, F6]

3.1 In step 1.2, the left side $V_{N+1}^\pi(s)$ has the same limit $V^\pi(s)$ as $V_N^\pi(s)$ by [F8]. The right side is a finite sum, so by [F7] it converges to $$ \sum_{a\in A(s)}\pi(a\mid s)\sum_{s',\rho}p(s',\rho\mid s,a)\,[\rho+\gamma V^\pi(s')] =(T^\pi V^\pi)(s) $$ by [F3]. Uniqueness of real limits gives $V^\pi(s)=(T^\pi V^\pi)(s)$. Since $s$ was arbitrary, $T^\pi V^\pi=V^\pi$. [step 1.2, step 2.1, F3, F7, F8, algebra] ∎
