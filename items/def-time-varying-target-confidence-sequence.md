---
id: def-time-varying-target-confidence-sequence
kind: definition
title: Confidence sequence for a time-varying target
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-filtration-and-filtered-probability-space
  - def-adapted-and-integrable-stochastic-process
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
    - title: "Steven R. Howard, Aaditya Ramdas, Jon McAuliffe, and Jasjeet Sekhon, Time-uniform, nonparametric, nonasymptotic confidence sequences"
      url: https://arxiv.org/pdf/1810.08240v9
---

## Definition

Let $(\Omega,\mathcal F,(\mathcal F_t)_{t\in\mathbb N_0},P)$ be a discrete filtered probability space and let $(\theta_t)_{t\geq1}$ be a real target process with each $\theta_t$ measurable with respect to $\mathcal F_t$. For $\alpha\in(0,1)$, a sequence of random closed intervals $C_t=[L_t,U_t]$, with finite real $\mathcal F_t$-measurable endpoints at each $t\geq1$, is a **$(1-\alpha)$ confidence sequence for the target process $(\theta_t)$** if
$$P\!\left(\theta_t\in C_t\text{ for every }t\geq1\right)\geq1-\alpha.$$
The target may be random and may vary with time; the definition asserts only simultaneous coverage under the specified probability law.

## Definition references

[[def-filtration-and-filtered-probability-space]]: the filtration is an increasing sequence of sigma-algebras on one probability space, indexed from time zero.

[[def-adapted-and-integrable-stochastic-process]]: measurability of each $\theta_t$ with respect to $\mathcal F_t$ is the adaptedness condition at positive times.

[A Howard et al., §2, including the changing average conditional-mean target](https://arxiv.org/pdf/1810.08240v9)
