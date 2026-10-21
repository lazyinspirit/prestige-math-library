---
id: def-differentiable-stochastic-policy
kind: definition
title: "Differentiable stationary stochastic policies and score vectors"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-finite-markov-decision-process
  - def-total-derivative-in-euclidean-space
  - def-jacobian-matrix-and-gradient
  - thm-chain-rule-for-total-derivatives
  - thm-logarithm-derivative-and-integral
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
proof_strategy: direct
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, second-edition draft"
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf"
      locator: "§13.1, policy approximation, differentiability, and stochastic policy parameterization; printed pp. 266–267."
    - title: "Ronald J. Williams, Simple Statistical Gradient-Following Algorithms for Connectionist Reinforcement Learning, Machine Learning 8 (1992)"
      url: "https://gwern.net/doc/reinforcement-learning/model-free/1992-williams.pdf"
      locator: "§2, parameterized stochastic output distributions and the differentiability requirement; PDF pp. 230–233."

---

## Definition

Let a finite Markov decision process have nonempty finite state set $S$ and finite nonempty action set $A(s)$ at each state. Let $U\subseteq\mathbb R^d$ be open, with $d\ge1$. A **differentiable stationary policy family** on $U$ is a family of probabilities $\pi_\theta(a\mid s)$, indexed by $\theta\in U$, $s\in S$, and $a\in A(s)$, such that $\sum_{a\in A(s)}\pi_\theta(a\mid s)=1$, each map $\theta\mapsto\pi_\theta(a\mid s)$ is totally differentiable, and for each $s$ there is a fixed nonempty support $B(s)\subseteq A(s)$ with $\pi_\theta(a\mid s)>0$ for every $a\in B(s)$ and $\theta\in U$, while $\pi_\theta(a\mid s)=0$ for every $a\notin B(s)$ and $\theta\in U$. The **score vector** at a supported state-action pair is

$$\psi_\theta(s,a):=\nabla_\theta\log\pi_\theta(a\mid s),\qquad a\in B(s),$$

where the gradient is the Euclidean vector of partial derivatives. The fixed-support condition makes this logarithm defined throughout $U$ on every action that can be sampled.

## Definition references

[[def-finite-markov-decision-process|A finite state set, finite nonempty state-dependent action sets, and stationary policies given by normalized action probabilities]].

[[def-total-derivative-in-euclidean-space|Total differentiability is the linear first-order approximation with a remainder of smaller order]].

[[def-jacobian-matrix-and-gradient|The gradient of a scalar-valued map is the vector of its coordinate partial derivatives]].

[[thm-chain-rule-for-total-derivatives|The total derivative of a composition is the composition of the total derivatives]].

[[thm-logarithm-derivative-and-integral|The logarithm is differentiable at positive arguments with derivative equal to their reciprocal]].
