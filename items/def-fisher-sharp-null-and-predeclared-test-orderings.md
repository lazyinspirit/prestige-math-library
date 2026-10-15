---
id: def-fisher-sharp-null-and-predeclared-test-orderings
kind: definition
title: "Fisher sharp null and predeclared test orderings"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-finite-randomized-treatment-assignment-model
  - def-statistic-and-estimator
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 2, §2.4"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "Siva Balakrishnan, CMU 36-705 Lecture 28, §28.5 Fisher's Exact p-values"
      url: "https://www.stat.cmu.edu/~siva/teaching/705/lec28.pdf"
---

## Definition

In the finite randomized treatment-assignment model
[[def-finite-randomized-treatment-assignment-model]], a schedule satisfies
the **Fisher sharp null** when for each unit $i$ there is a value $y_i$ such that
$Y_i(z)=y_i$ for every allowed assignment $z$. The full vector
$y=(y_i)_{i\in\mathcal I}$ is then imputable under every assignment.

A **predeclared ordering score** is a real-valued statistic
$T:\mathcal Z\times\mathbb R^{\mathcal I}\to\mathbb R$
([[def-statistic-and-estimator]]) fixed before the
assignment and outcomes are inspected. Its upper-tail ordering includes ties:
assignment $z'$ is at least as extreme as $z$ when $T(z',y)\ge T(z,y)$.
For a signed score $S$ and fixed null center $s_0$, the corresponding
two-sided ordering is explicitly $T(z,y)=|S(z,y)-s_0|$. The center is part
of the predeclared ordering; the sharp null alone does not force $s_0=0$
for an arbitrary signed score. A lower-tail ordering is represented by
using $-S$ as the score. A statistic in this setting is a measurable map in
the sense of [[def-statistic-and-estimator]]; the full power-set data
sigma-algebra makes every such real-valued map measurable.
