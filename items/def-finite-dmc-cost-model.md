---
id: def-finite-dmc-cost-model
kind: definition
title: Finite DMC with a nonnegative input cost and feasible budget
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-discrete-memoryless-channel, def-finite-probability-vector, def-natural-logarithm]
justified_by: []
aliases: []
axiom_use: No choice axiom is used; the alphabets and cost minimization are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §17.1, Channels with Input Constraints"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
verification:
  precheck: n/a
---

## Definition

Let $W(y\mid x)$ be a finite DMC with nonempty finite input alphabet $\mathcal X$ ([[def-discrete-memoryless-channel]]). A **letter cost** is a supplied function $c:\mathcal X\to[0,\infty)$ with finite real values. Define
$$c_{\min}:=\min_{x\in\mathcal X}c(x),\qquad c_{\max}:=\max_{x\in\mathcal X}c(x),\qquad \bar c(P_X):=\sum_{x\in\mathcal X}P_X(x)c(x)$$
for each input probability vector $P_X$ ([[def-finite-probability-vector]]). A real number $\Gamma$ is a **feasible cost budget** when $\Gamma\ge c_{\min}$. Costs and budgets are per channel use; all logarithms and rates in this pair use natural units [[def-natural-logarithm]].
