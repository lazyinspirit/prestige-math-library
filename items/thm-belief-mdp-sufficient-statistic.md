---
id: thm-belief-mdp-sufficient-statistic
kind: theorem
title: "The belief state is a sufficient statistic for finite POMDP control"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-finite-pomdp
  - def-belief-state-and-bayes-filter
  - lem-finite-pomdp-belief-update-is-probability-kernel
  - def-sum-over-a-finite-index-set
  - lem-finite-sum-laws
  - lem-finite-set-has-max
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Kaelbling, Littman, and Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown Technical Report CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "Complete PDF; §§3.2–3.4, PDF pp. 9–11. The local conditional factorization and finite-horizon recursion are proved in full."
    - title: "Russ Tedrake, Planning Under Uncertainty: Partially-observable Markov decision processes, MIT Underactuated Robotics course notes"
      url: "https://underactuated.mit.edu/belief.html"
      locator: "Complete relevant page, lines 18–24; its sufficiency claim is independently derived here."
    - title: "Pascal Poupart, CS 886 Lecture 13: POMDPs, University of Waterloo"
      url: "https://cs.uwaterloo.ca/~ppoupart/teaching/cs886-fall05/lectureNotes/cs886-lecture13.pdf"
      locator: "Complete lecture, slides 7–8."
---

## Statement

Let a finite POMDP with known model be fixed. A deterministic history policy chooses an action from the finite action set using only preceding actions and observations; a randomized history policy assigns an action distribution using only that history, with its randomization conditionally independent of the hidden state. For every positive-probability history $h_t$ with belief $b_t$ and every action $a$ having positive conditional selection probability at that history,

$$\Pr(S_{t+1}=s',O_{t+1}=o\mid h_t,A_t=a)=\sum_{s\in S}b_t(s)T(s'\mid s,a)O(o\mid s').$$

Consequently the observation probability is $q(o\mid b_t,a)$, the next belief is $\tau(b_t,a,o)$ whenever that probability is positive, and the conditional expected reward is $\bar r(b_t,a)$. The controlled belief-state model has the fully observed Borel state space $\Delta(S)$, action set $A$, transition kernel $K$, and reward $\bar r$; under a policy depending only on the current belief, the belief process is Markov. For every remaining finite horizon $n$, the optimal value depends on the history only through $b$ and satisfies

$$V_0(b)=0,\qquad V_{n+1}(b)=\max_{a\in A}\left[\bar r(b,a)+\gamma\sum_{o:q(o\mid b,a)>0}q(o\mid b,a)V_n(\tau(b,a,o))\right].$$

Each maximum is attained; randomizing an action cannot increase the value. An observation with zero probability requires no posterior update. The conclusion holds for $\gamma\in[0,1]$ and uses no Axiom of Choice.

## Statement references

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

[Tedrake, MIT Underactuated Robotics course notes](https://underactuated.mit.edu/belief.html).

[Poupart, University of Waterloo CS 886 Lecture 13](https://cs.uwaterloo.ca/~ppoupart/teaching/cs886-fall05/lectureNotes/cs886-lecture13.pdf).

## Facts & Assumptions

**Given:** A finite POMDP with finite nonempty $S,A,\Omega$, initial belief $b_0$, discount $\gamma\in[0,1]$, a history policy as in the statement, and a positive-probability history $h_t$ with belief $b_t$.

[F1] Conditional on state $s$ and action $a$, the joint next-state/reward/observation mass is $p(s',\rho\mid s,a)O(o\mid s')$; rewards are not observed. [[def-finite-pomdp]]

[F2] A positive-probability history has its explicit conditional state distribution $b_t$; $q(o\mid b,a)$ is the observation marginal, and $\tau(b,a,o)$ is defined by Bayes' formula only when $q>0$. [[def-belief-state-and-bayes-filter]]

[F3] The induced belief transition $K(\cdot\mid b,a)$ is a probability kernel, and its sections assign total mass one while omitting zero-likelihood observations. [[lem-finite-pomdp-belief-update-is-probability-kernel]]

[F4] Every nonempty finite set of real numbers has an attained maximum. [[lem-finite-set-has-max]]

[F5] Finite sums are enumeration-independent, preserve termwise inequalities, and scale by constants. [[def-sum-over-a-finite-index-set]], [[lem-finite-sum-laws]]

## Proof

1.1 Fix $h_t$ and $a$ as in the statement. By [F2], $b_t(s)=\Pr(S_t=s\mid h_t)$. Conditioning first on $S_t$ and using the POMDP's specified one-step law [F1] gives $\Pr(S_{t+1}=s',O_{t+1}=o\mid h_t,A_t=a)=\sum_{s\in S}b_t(s)T(s'\mid s,a)O(o\mid s')$. The action selection does not alter $b_t$ after conditioning on $h_t$, because its randomization depends only on that history and is conditionally independent of the hidden state. [given, F1, F2]

2.1 Summing the joint probability in step 1.1 over $s'$ yields $q(o\mid b_t,a)$ by [F2]. If this is positive, dividing the joint mass by it gives $\Pr(S_{t+1}=s'\mid h_t,A_t=a,O_{t+1}=o)=\tau(b_t,a,o)(s')$; if it is zero, the observation event has probability zero and no conditional quotient is used. By [F3], these positive branches form the probability kernel $K$. [step 1.1, F2, F3]

2.2 Conditioning the immediate reward on the current hidden state and chosen action gives $\mathbb E[R_t\mid h_t,A_t=a]=\sum_{s\in S}b_t(s)r(s,a)=\bar r(b_t,a)$ by [F1] and [F2]. Thus the conditional immediate reward and next-belief law depend on the history only through $b_t$ and $a$, which proves the stated controlled belief-state transition and reward description. [step 1.1, F1, F2, F3]

3.1 We prove the finite-horizon recursion by induction on $n$. With no decisions remaining, the reward sum is empty, so $V_0(b)=0$. Suppose the optimal $n$-step continuation value is the function $V_n$ of the current belief. If action $a$ is taken at belief $b$, its immediate expected reward is $\bar r(b,a)$ by step 2.2, and for each positive-probability observation $o$ the remaining belief is $\tau(b,a,o)$ by step 2.1. Conditional expectation over the finite observation set therefore gives the $n+1$ step action value $Q_{n+1}(b,a):=\bar r(b,a)+\gamma\sum_{o:q>0}q(o\mid b,a)V_n(\tau(b,a,o))$. The set $\{Q_{n+1}(b,a):a\in A\}$ is a nonempty finite image of $A$ in $\mathbb R$, so [F4] gives an attained maximum. Taking that maximum gives the displayed $V_{n+1}(b)$. The expression depends only on $b$, completing the induction and proving history sufficiency for every finite horizon. [given, step 2.1, step 2.2, F2, F4]

4.1 If the action at a history is randomized with probabilities $\lambda_a$, its expected action value is $\sum_{a\in A}\lambda_a Q_{n+1}(b,a)$, where $Q_{n+1}$ is the finite action value from step 3.1, $\lambda_a\ge0$, and $\sum_a\lambda_a=1$. Since each $Q_{n+1}(b,a)\le\max_{c\in A}Q_{n+1}(b,c)$, [F5] gives $\sum_a\lambda_a Q_{n+1}(b,a)\le\max_{c\in A}Q_{n+1}(b,c)$. Randomization cannot improve the finite-horizon value. [step 3.1, F4, F5] ∎
