---
id: def-loss-function-and-risk
kind: definition
title: Loss functions and risk
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-statistical-experiment
  - def-randomized-procedure-as-a-markov-kernel
  - lem-procedure-action-law-is-measurable
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-measurable-space
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
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.1, PDF pp. 100–102"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §§4.1–4.2, PDF pp. 7–8"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Definition

Let $\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$
be a statistical experiment ([[def-statistical-experiment]]), let
$(\mathsf D,\mathcal G)$ be a measurable action space, meaning a set with
a specified sigma-algebra ([[def-measurable-space]]), and let
$L:\Theta\times\mathsf D\to[0,+\infty]$ be a loss function whose section
$a\mapsto L(\theta,a)$ is $\mathcal G$-measurable for each $\theta$. A
randomized decision rule is a probability kernel $\delta$ from the data space
to the action space ([[def-randomized-procedure-as-a-markov-kernel]]). Its
**risk** at $\theta$ is the extended nonnegative number
$$R(\theta,\delta)=\int_{\mathcal X}\left(\int_{\mathsf D}L(\theta,a)\,\delta(x,da)\right)P_\theta(dx).$$
The inner integral is a measurable function of $x$, by
[[lem-procedure-action-law-is-measurable]], so the outer nonnegative integral
is defined by [[def-expectation-of-a-nonnegative-or-integrable-random-variable]].
A deterministic measurable rule is included by taking its point-mass action
kernel. No measurability on $\Theta$ is required for this definition.
