---
id: def-statistical-experiment
kind: definition
title: "Statistical experiments"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [def-measurable-space, def-probability-measure,
       def-law-or-distribution-of-a-random-element,
       lem-law-of-a-random-element-is-a-probability-measure]
justified_by: []
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
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §§1.3.6 and 1.4.1, PDF pp. 20–23"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families, §6, PDF pp. 6–7"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
---

## Definition

An **experiment** is a measurable space $(\mathcal X,\mathcal A)$, a set $\Theta$ of
parameter labels, and a family $(P_\theta)_{\theta\in\Theta}$ of probability
measures on $(\mathcal X,\mathcal A)$ (Measurable spaces and measurable sets,
Probability measures and probability spaces). The measures $P_\theta$ are the sampling laws.
If data under a parameter value are realized as a random element, its law is
the pushforward measure $P_X(B)=P(X^{-1}(B))$ from
Law or distribution of a random element; it is a probability measure by
The law of a random element is a probability measure.

The definition specifies the family of laws only. It supplies no sigma-algebra
on $\Theta$, no measurability condition on $\theta\mapsto P_\theta$, and no
common underlying probability space on which all observations must be realized.

## Definition references

[[def-measurable-space]]

[[def-probability-measure]]

[[def-law-or-distribution-of-a-random-element]]

[[lem-law-of-a-random-element-is-a-probability-measure]]

