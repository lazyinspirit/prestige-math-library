---
id: def-constrained-markov-decision-process
kind: definition
title: "Finite discounted constrained Markov decision process"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-finite-markov-decision-process
justified_by:
  - lem-normalized-discounted-state-occupancy-is-probability
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Eitan Altman, Constrained Markov Decision Processes"
      url: "https://www-sop.inria.fr/members/Eitan.Altman/TEMP/h.pdf"
      locator: "Chapter 2, §§2.1–2.2, printed pp. 21–24 (PDF pp. 28–31)."
    - title: "Joshua Achiam, David Held, Aviv Tamar, and Pieter Abbeel, Constrained Policy Optimization, PMLR 70 (2017)"
      url: "https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf"
      locator: "§3, finite discounted CMDP and expected auxiliary-cost setup, PDF pp. 2–3."
---

## Definition

Let $M=(S,\mathcal R,(A(s))_{s\in S},p)$ be a finite Markov decision process with nonempty state set $S$ and finite nonempty action set $A(s)$ at each state. Put $\mathcal X=\{(s,a,\rho,s'):s\in S,\ a\in A(s),\ \rho\in\mathcal R,\ s'\in S\}$. Let $\mu$ be a probability distribution on $S$, let $\gamma\in[0,1)$, let $m\ge1$ be an integer, and for each $i\in\{1,\ldots,m\}$ let $b_i\in\mathbb R$, $C_i\ge0$, and $c_i:\mathcal X\to[-C_i,C_i]$. A **finite discounted constrained Markov decision process (CMDP)** is the tuple consisting of $M$, $\mu$, $\gamma$, and the bounded transition-cost functions and thresholds $(c_i,b_i)_{i=1}^m$. Its immediate reward signal is $r(s,a,\rho,s')=\rho$.

For a stationary Markov policy $\pi$, define the state-mass sequence recursively by $\mu_0^\pi=\mu$ and

$$\mu_{t+1}^\pi(s'):=\sum_{s\in S}\sum_{a\in A(s)}\sum_{\rho\in\mathcal R}\mu_t^\pi(s)\pi(a\mid s)p(s',\rho\mid s,a).$$

This recurrence defines nonnegative finite-time masses; the result that each $\mu_t^\pi$ is a probability distribution is established separately.

## Definition references

[[def-finite-markov-decision-process|A finite MDP supplies finite state/action/reward sets, a normalized joint next-state/reward law, and stationary Markov policies as normalized action probabilities.]]

[[lem-normalized-discounted-state-occupancy-is-probability|The finite-time state masses remain probability distributions, and the normalized discounted occupancy has total mass one.]]

[Altman, *Constrained Markov Decision Processes*, Chapter 2](https://www-sop.inria.fr/members/Eitan.Altman/TEMP/h.pdf).

[Achiam et al., *Constrained Policy Optimization*, §3](https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf).
