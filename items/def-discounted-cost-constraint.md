---
id: def-discounted-cost-constraint
kind: definition
title: "Expected discounted-cost feasibility constraint"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-constrained-markov-decision-process
  - lem-bounded-discounted-return-converges
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
      locator: "Chapter 2 §2.2, discounted expected costs and the constrained control problem, printed pp. 23–24 (PDF pp. 30–31)."
    - title: "Joshua Achiam, David Held, Aviv Tamar, and Pieter Abbeel, Constrained Policy Optimization, PMLR 70 (2017)"
      url: "https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf"
      locator: "§3, unnormalized expected discounted rewards and auxiliary costs, PDF pp. 2–3."
---

## Definition

Let a finite discounted CMDP have initial distribution $\mu$, discount $\gamma\in[0,1)$, $m$ bounded transition signals $c_i$, thresholds $b_i$, and finite-time state masses $\mu_t^\pi$ under a stationary policy $\pi$, as defined in the CMDP model. For any bounded transition signal $g$ on $(s,a,\rho,s')$, define its **expected discounted sum** under $\pi$ by

$$J_g^\pi(\mu):=\sum_{t=0}^{\infty}\gamma^t\sum_{s\in S}\sum_{a\in A(s)}\sum_{\rho\in\mathcal R}\sum_{s'\in S}\mu_t^\pi(s)\pi(a\mid s)p(s',\rho\mid s,a)g(s,a,\rho,s').$$

The expected discounted reward is $J^\pi:=J_r^\pi(\mu)$ for the immediate reward signal $r(s,a,\rho,s')=\rho$, and the $i$th expected discounted cost is $J_{c_i}^\pi(\mu)$. The policy $\pi$ is **feasible** for the discounted-cost constraints exactly when $J_{c_i}^\pi(\mu)\le b_i$ for every $i\in\{1,\ldots,m\}$. Feasibility constrains these expectations; it does not assert a per-trajectory bound.

## Definition references

[[def-constrained-markov-decision-process|A finite CMDP fixes the finite joint transition/reward model, initial distribution, discount, bounded cost signals, and thresholds.]]

[[lem-bounded-discounted-return-converges]]: Every bounded real signal sequence has an absolutely convergent discounted sum for $0\le\gamma<1$, bounded by its signal bound divided by $1-\gamma$.

[[lem-normalized-discounted-state-occupancy-is-probability|The finite-time masses are probability distributions, so each bounded finite-time transition-signal expectation is bounded and the displayed discounted series is well defined.]]

[Altman, *Constrained Markov Decision Processes*, Chapter 2 §2.2](https://www-sop.inria.fr/members/Eitan.Altman/TEMP/h.pdf).

[Achiam et al., *Constrained Policy Optimization*, §3](https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf).
