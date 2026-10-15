---
id: def-posterior-median
kind: definition
title: Posterior median
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - thm-bayes-formula-for-dominated-kernels
  - def-measure-kernel-and-probability-kernel
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.3.1, PDF pp. 104–105"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §2.5"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
---

## Definition

For a probability measure $\Pi_y$ on $\mathbb R$, a **posterior median** is any $m\in\mathbb R$ satisfying
$$\Pi_y((-\infty,m])\ge \tfrac12\quad\text{and}\quad\Pi_y([m,\infty))\ge\tfrac12.$$
The two inequalities, rather than a density-based definition, apply to discrete, continuous, and mixed posteriors and permit more than one median.

## Remarks

[[lem-lower-posterior-median-is-measurable]] constructs a measurable median rule from a posterior probability kernel.
