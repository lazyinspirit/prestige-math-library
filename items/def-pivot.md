---
id: def-pivot
kind: definition
title: Pivotal quantities
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-statistical-experiment
  - def-measurable-function-between-measurable-spaces
  - def-random-element-and-real-random-variable
  - def-law-or-distribution-of-a-random-element
  - lem-law-of-a-random-element-is-a-probability-measure
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Anna Mikusheva, MIT 14.381, Lecture 11: Confidence Sets, §2, PDF pp. 2–3"
      url: "https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/6a7fdee0c759b8ac985bf28a553acb24_MIT14_381F18_lec11.pdf"
    - title: "Karl B. Gregory, USC STAT 713, Lecture 14: Confidence Intervals and Sets, slide 6, PDF p. 6"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_14_slides_annotated.pdf"
---

## Definition

Let $\mathsf E=((\mathcal X,\mathcal A),(P_\theta)_{\theta\in\Theta})$ be a
statistical experiment with $\Theta\ne\varnothing$, and let
$(S,\mathcal S)$ be a measurable space. A
family of measurable maps $q_\theta:\mathcal X\to S$, one for each
$\theta\in\Theta$, is a **pivot** if the pushforward law
$$\nu_\theta(B):=P_\theta(q_\theta^{-1}(B)),\qquad B\in\mathcal S$$
is the same probability measure $\nu$ for every $\theta\in\Theta$.
Each section is a random element on $(\mathcal X,\mathcal A,P_\theta)$, so
its pushforward is a probability measure by
[[lem-law-of-a-random-element-is-a-probability-measure]].
No measurability in $\theta$ is asserted or needed.

For $S=\mathbb R$, a pivot is a parameter-indexed family of measurable
real-valued quantities with a common sampling law. The maps $q_\theta$
may depend on the unknown parameter. A pivot need not be invertible in the
parameter, and its inversion need not be an interval.
