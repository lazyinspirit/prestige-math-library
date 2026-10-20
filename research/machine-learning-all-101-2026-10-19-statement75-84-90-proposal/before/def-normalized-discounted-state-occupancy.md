---
id: def-normalized-discounted-state-occupancy
kind: definition
title: "Normalized discounted state occupancy"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-constrained-markov-decision-process
  - thm-geometric-series
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
    - title: "Joshua Achiam, David Held, Aviv Tamar, and Pieter Abbeel, Constrained Policy Optimization, supplementary material"
      url: "https://proceedings.mlr.press/v70/achiam17a/achiam17a-supp.pdf"
      locator: "Appendix 10.1.1, equations (17)–(18), PDF p. 1."
    - title: "Eitan Altman, Constrained Markov Decision Processes"
      url: "https://www-sop.inria.fr/members/Eitan.Altman/TEMP/h.pdf"
      locator: "Chapter 3 §3.1, discounted occupation measure, printed pp. 27–29 (PDF pp. 34–36)."
---

## Definition

Let a finite discounted CMDP and a stationary policy $\pi$ be given. The **column transition matrix** $K_\pi$ has entry

$$K_\pi(s',s):=\sum_{a\in A(s)}\sum_{\rho\in\mathcal R}\pi(a\mid s)p(s',\rho\mid s,a),$$

so that its column indexed by $s$ gives the next-state distribution from current state $s$. With the state-mass column vectors $\mu_t^\pi$ from the CMDP definition, the **normalized discounted state occupancy** is

$$d^\pi(s):=(1-\gamma)\sum_{t=0}^{\infty}\gamma^t\mu_t^\pi(s).$$

This normalization is part of the definition; the occupancy is a probability distribution by the separate well-definedness result below.

## Definition references

[[def-constrained-markov-decision-process|The finite CMDP specifies the joint next-state/reward masses and the recursively defined state-mass vectors.]]

[[lem-normalized-discounted-state-occupancy-is-probability|The recurrence yields probability vectors, and multiplying the geometric occupancy sum by $1-\gamma$ gives total mass one.]]

[Achiam et al., *Constrained Policy Optimization*, supplementary material, Appendix 10.1.1](https://proceedings.mlr.press/v70/achiam17a/achiam17a-supp.pdf).

[Altman, *Constrained Markov Decision Processes*, Chapter 3 §3.1](https://www-sop.inria.fr/members/Eitan.Altman/TEMP/h.pdf).
