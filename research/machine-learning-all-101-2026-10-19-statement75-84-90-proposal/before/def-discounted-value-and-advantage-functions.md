---
id: def-discounted-value-and-advantage-functions
kind: definition
title: "Discounted value, action-value, and advantage functions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-constrained-markov-decision-process
  - def-discounted-cost-constraint
  - lem-normalized-discounted-state-occupancy-is-probability
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
    - title: "Joshua Achiam, David Held, Aviv Tamar, and Pieter Abbeel, Constrained Policy Optimization, PMLR 70 (2017)"
      url: "https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf"
      locator: "§3, value/advantage notation; §5.3, reward and cost advantages in the ideal CPO update, PDF pp. 2–4."
---

## Definition

Let a finite discounted CMDP, a stationary policy $\pi$, and a bounded transition signal $g$ be given. For $s\in S$, let $\delta_s$ be the initial distribution assigning probability one to $s$. The **state value** is $V_g^\pi(s):=J_g^\pi(\delta_s)$. For $a\in A(s)$, define the **action value** and **advantage** by

$$Q_g^\pi(s,a):=\sum_{\rho\in\mathcal R}\sum_{s'\in S}p(s',\rho\mid s,a)\bigl(g(s,a,\rho,s')+\gamma V_g^\pi(s')\bigr),\qquad A_g^\pi(s,a):=Q_g^\pi(s,a)-V_g^\pi(s).$$

Taking $g=r$ gives reward values and advantages; taking $g=c_i$ gives the value and advantage for the $i$th cost. These quantities are finite because the signal is bounded, $0\le\gamma<1$, and the transition law is normalized.

## Definition references

[[def-constrained-markov-decision-process|The finite CMDP and bounded transition signals.]]

[[def-discounted-cost-constraint|The well-defined expected discounted sum $J_g^\pi(\mu)$.]]

[[lem-normalized-discounted-state-occupancy-is-probability|Bounded discounted signal sums are absolutely convergent and finite.]]

[Achiam et al., *Constrained Policy Optimization*, §§3 and 5.3](https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf).
