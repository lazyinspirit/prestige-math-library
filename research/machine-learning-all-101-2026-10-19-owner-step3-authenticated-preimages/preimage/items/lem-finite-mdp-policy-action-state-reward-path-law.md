---
id: lem-finite-mdp-policy-action-state-reward-path-law
kind: lemma
title: A finite MDP policy generates action-state-reward trajectories
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-markov-decision-process
  - def-countable
  - def-axiom-of-choice
  - def-measure-kernel-and-probability-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-product-rule
  - thm-sum-rule
  - thm-well-ordering-principle
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - thm-finite-mdp-policy-induces-reward-state-chain
  - lem-a-double-sum-over-finite-index-sets-may-be-interchanged
  - lem-finite-sum-laws
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
      locator: "§3.6, joint reward-transition dynamics and the finite-MDP trajectory convention."
    - title: "Leslie Pack Kaelbling, Michael L. Littman, and Anthony R. Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown Technical Report CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "§2.1, finite-state/action transition and reward dynamics."
---

## Statement

Assume the Axiom of Choice. Let a finite MDP have nonempty state set $S$, and let $\pi$ be a stationary Markov policy. Fix an initial state $s_0\in S$ and let

$$Z=\{(s,a,r,s'):s\in S,\ a\in A(s),\ r\in\mathcal R,\ s'\in S\}$$

with its discrete sigma-algebra. There is a probability law on $S\times Z^{\mathbb N}$ whose first state is $S_0=s_0$ and whose subsequent coordinates are $Z_n=(S_n,A_n,R_{n+1},S_{n+1})$. For every $m\ge0$ and every feasible finite trajectory $(s_0,a_0,r_1,s_1,\ldots,a_{m-1},r_m,s_m)$, its probability is

$$
\prod_{n=0}^{m-1}\pi(a_n\mid s_n)\,p(s_{n+1},r_{n+1}\mid s_n,a_n),
$$

where the empty product for $m=0$ is $1$.

Its state-reward marginal also has the finite-prefix probabilities

$$
\prod_{n=0}^{m-1}\sum_{a\in A(s_n)}\pi(a\mid s_n)p(s_{n+1},r_{n+1}\mid s_n,a)
$$

for each feasible finite state-reward path $(s_0,r_1,s_1,\ldots,r_m,s_m)$.

## Statement references

[[thm-ionescu-tulcea-construction-of-a-markov-chain|A probability law with prescribed iterated finite-prefix kernel laws exists under Choice]].

[[thm-sum-rule|A finite union of finite sets is finite]].

[[thm-product-rule|A finite product of finite sets is finite]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

[[thm-finite-mdp-policy-induces-reward-state-chain|The policy-mixture reward-state path law with the same marginal probabilities]].

## Facts & Assumptions

**Given:** AC, a finite MDP with $S\ne\emptyset$, a stationary Markov policy $\pi$, and an initial state $s_0\in S$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F1] [[def-finite-markov-decision-process]]: $S$, $\mathcal R$, and each $A(s)$ are finite; $p(s',r\mid s,a)\ge0$ and $\sum_{s',r}p(s',r\mid s,a)=1$; $\pi(\cdot\mid s)$ is a probability distribution on $A(s)$.

[F2] [[def-countable]]: a finite set is in bijection with a natural number.

[F3] [[thm-sum-rule]] and [[thm-product-rule]]: a finite union of finite sets and a finite Cartesian product of finite sets are finite.

[F4] [[def-measure-kernel-and-probability-kernel]]: a probability kernel assigns a probability measure at each input and has measurable event sections.

[F5] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]: finite product sigma-algebras make coordinate projections measurable.

[F6] [[thm-well-ordering-principle]]: every nonempty subset of $\mathbb N$ has a least element.

[F7] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: under AC, an initial probability and a sequence of probability kernels determine a probability law with the prescribed iterated finite-prefix laws.

[F8] [[thm-finite-mdp-policy-induces-reward-state-chain]]: the reward-state marginal under $\pi$ has the finite-prefix laws obtained by mixing the joint law $p(s',r\mid s,a)$ with $\pi(a\mid s)$.

[F9] [[lem-a-double-sum-over-finite-index-sets-may-be-interchanged]] and [[lem-finite-sum-laws]]: the finite action sums can be regrouped and distributed across successive time indices.

[F10] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: a probability law with prescribed consistent finite-prefix laws is unique.

## Proof
**Given:** The hypotheses and conventions in the Statement.

1.1 Since $D=\bigcup_{s\in S}\{s\}\times A(s)$ is a finite union of finite products, [F3] makes $D$ finite. Its product with the finite reward and state sets is finite by [F3], so $Z$ is finite. For each $s\in S$ and $B\subseteq Z$, define $K_\pi(s,B)=\sum_{a\in A(s)}\pi(a\mid s)\sum_{s'\in S}\sum_{r\in\mathcal R}\mathbf1_B(s,a,r,s')p(s',r\mid s,a).$ Every term is nonnegative, and [F1] gives $K_\pi(s,Z)=\sum_{a\in A(s)}\pi(a\mid s)=1$. If $(B_j)$ is a disjoint sequence of subsets of finite $Z$, only finitely many $B_j$ are nonempty: enumerate $Z$ and assign each nonempty $B_j$ its least element in that enumeration; disjointness makes these assigned elements distinct. Therefore finite additivity of the displayed finite sums gives countable additivity. Since $Z$ and $S$ have discrete sigma-algebras, $B\mapsto K_\pi(s,B)$ is a probability measure and $s\mapsto K_\pi(s,B)$ is measurable; hence $K_\pi$ is a probability kernel by [F4]. [given, F1, F2, F3, F4, F6, algebra]

2.1 Set $E_0=S$ and $E_n=Z$ for $n\ge1$, with initial measure $\delta_{s_0}$. For each $n\ge0$, let $K_n$ from $E_0\times\cdots\times E_n$ to $Z$ be $K_n(h,B)=K_\pi(s_n,B)$, where $s_n=s_0$ when $n=0$ and $s_n$ is the final next-state coordinate of the last trajectory record in $h$ when $n\ge1$. That coordinate projection is measurable by [F5], so each $K_n$ is measurable in $h$; its sections are probability measures by step 1.1. Thus the hypotheses of [F7] hold. [given, A1, F4, F5, F7, step 1.1, construct]

3.1 Apply [F7] to obtain the probability law with these finite-prefix kernels. For a feasible atom $(s_0,a_0,r_1,s_1,\ldots,a_{m-1},r_m,s_m)$, its iterated prefix mass is the product over $n<m$ of the atom masses $K_\pi(s_n,\{(s_n,a_n,r_{n+1},s_{n+1})\})$. The definition of $K_\pi$ makes each such mass $\pi(a_n\mid s_n)p(s_{n+1},r_{n+1}\mid s_n,a_n)$, giving the displayed formula. For $m=0$, the initial point mass is $1$. [step 1.1, step 2.1, F1, F7, algebra]

4.1 Fix a finite state-reward path $(s_0,r_1,s_1,\ldots,r_m,s_m)$. Summing the action-path formula from step 3.1 over its finitely many action sequences and regrouping the finite sums by time gives the displayed state-reward marginal formula by [F9]. These are the finite-prefix probabilities in [F8]. The initial state is the same point mass, so uniqueness [F10] identifies the state-reward marginal with the stationary-policy path law. [step 3.1, F8, F9, F10, algebra] ∎
