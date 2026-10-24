---
id: def-regular-estimator-under-local-alternatives
kind: definition
title: Regular estimator under local alternatives
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-lan-experiment
  - def-convergence-in-distribution-of-random-elements
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 21, PDF pp. 19–22
      url: https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/21notes.pdf
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §4
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Definition

In a local experiment $\{P_{n,h}:h\in\mathbb R^d\}$ at $h=0$
([[def-lan-experiment]]), let $T_n$ be an $\mathbb R^d$-valued statistic.
It is **regular at zero with limit law $W$** if, for every fixed
$h\in\mathbb R^d$,
$$T_n-h\Rightarrow W\quad\text{under }P_{n,h},$$
where the same probability law $W$ works for all $h$. In a parametric model
with true parameter $\theta_0$, this is the definition for
$T_n=\sqrt n(\widehat\theta_n-\theta_0)$ and local laws at
$\theta_0+h/\sqrt n$; equivalently the centered error
$\sqrt n(\widehat\theta_n-\theta_0-h/\sqrt n)$ has a limit independent of
the fixed local displacement $h$.
