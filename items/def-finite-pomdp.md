---
id: def-finite-pomdp
kind: definition
title: "Finite partially observable Markov decision process"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-finite-markov-decision-process
  - def-measure-kernel-and-probability-kernel
justified_by:
  - lem-finite-pomdp-belief-update-is-probability-kernel
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
    - title: "Kaelbling, Littman, and Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown Technical Report CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "Complete PDF; §3.1, PDF pp. 8–9. The local observation model is the action-independent specialization in the controlling design."
    - title: "Russ Tedrake, Planning Under Uncertainty: Partially-observable Markov decision processes, MIT Underactuated Robotics course notes"
      url: "https://underactuated.mit.edu/belief.html"
      locator: "Complete relevant page, lines 13–17."
    - title: "Pascal Poupart, CS 886 Lecture 13: POMDPs, University of Waterloo"
      url: "https://cs.uwaterloo.ca/~ppoupart/teaching/cs886-fall05/lectureNotes/cs886-lecture13.pdf"
      locator: "Complete lecture, slides 3–4."
---

## Definition

Let $S$ be a finite nonempty set of hidden states, $A$ a finite nonempty action set available in every state, and $\Omega$ a finite nonempty observation set. Give these sets their power-set sigma-algebras. A finite POMDP with known model consists of a finite reward alphabet $\mathcal R\subseteq\mathbb R$ and a joint probability mass $p(s',\rho\mid s,a)$ on $S\times\mathcal R$ for each $(s,a)\in S\times A$, an observation probability distribution $O(\cdot\mid s')$ on $\Omega$ for each $s'\in S$, and an initial belief $b_0:S\to[0,1]$ with $\sum_{s\in S}b_0(s)=1$. Put

$$T(s'\mid s,a)=\sum_{\rho\in\mathcal R}p(s',\rho\mid s,a),\qquad r(s,a)=\sum_{s'\in S}\sum_{\rho\in\mathcal R}\rho\,p(s',\rho\mid s,a).$$

At decision time $t$, write $S_t\in S$ for the hidden state, $A_t\in A$ for the chosen action, $R_t\in\mathcal R$ for the realized reward, and $O_{t+1}\in\Omega$ for the next observation. Conditional on $S_t=s$ and $A_t=a$, the joint law of next state $S_{t+1}=s'$, reward $R_t=\rho$, and observation $O_{t+1}=o$ is $p(s',\rho\mid s,a)O(o\mid s')$. Thus the observation depends only on the next state and is not an additional observation of the reward. A policy uses only the past actions and observations; realized rewards are not included in its history. For a horizon $H\in\mathbb N$ and discount $\gamma\in[0,1]$, the objective is to maximize $\mathbb E[\sum_{t=0}^{H-1}\gamma^tR_t]$. The model is known; learning its transition, reward, or observation laws is outside this definition.

## Definition references

[[def-finite-markov-decision-process|A finite MDP has finite state and reward sets, nonempty finite action sets, a joint next-state/reward law, and the transition and expected-reward marginals used here]].

[[def-measure-kernel-and-probability-kernel|A probability kernel assigns a probability measure at every input and has measurable event sections]].

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

[Tedrake, MIT Underactuated Robotics course notes](https://underactuated.mit.edu/belief.html).

[Poupart, University of Waterloo CS 886 Lecture 13](https://cs.uwaterloo.ca/~ppoupart/teaching/cs886-fall05/lectureNotes/cs886-lecture13.pdf).
