---
id: def-huber-contamination-model
kind: definition
title: "Huber contamination model"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-statistical-experiment
  - def-probability-measure
  - def-identically-distributed-and-iid-random-variables
  - lem-convex-mixture-of-probability-laws
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber’s Contamination Model, §§1 and 5"
      url: "https://arxiv.org/pdf/1506.00691"
    - title: "P. B. Stark, Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics, §1.2, PDF pp. 10–12"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf"
---

## Definition

Given a statistical experiment $\{P_\theta:\theta\in\Theta\}$ on $(\mathcal X,\mathcal A)$ ([[def-statistical-experiment]]) and any probability measure $Q$ on that space ([[def-probability-measure]]), Huber's one-observation contamination law is
$$
P_{\epsilon,\theta,Q}=(1-\epsilon)P_\theta+\epsilon Q,\qquad 0\le\epsilon\le1.
$$
The mixture is a probability measure by [[lem-convex-mixture-of-probability-laws]]. In the sample-size-$n$ model, observations are iid from this law ([[def-identically-distributed-and-iid-random-variables]]). A worst-case $Q$ may be chosen separately for each $\theta$. This is an iid sampling model, distinct from a fixed gross-error direction and from sample replacement.

