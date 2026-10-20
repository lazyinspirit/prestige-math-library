---
id: def-semicontinuity-on-euclidean-subsets
kind: definition
title: 'Upper and lower semicontinuity on subsets of $\mathbb R^n$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-ball, lem-metrics-on-rn, def-metric-continuity]
justified_by: []
aliases: []
landmark: true
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-semicontinuity-on-euclidean-subsets.json
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lectures 2 and 4"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Definition

Let $n\ge1$, let $A\subseteq\mathbb R^n$, let $f:A\to\mathbb R$, and let $a\in A$. Using the Euclidean metric and its balls ($\mathbb{R}^n$ as the set of functions $n \to \mathbb{R}$, and $d_1$, $d_2$, $d_\infty$ are metrics on it, Open ball, closed ball and sphere in a metric space), $f$ is upper semicontinuous at $a$ when for every $\varepsilon>0$ there is $\delta>0$ such that $f(x)<f(a)+\varepsilon$ for every $x\in A\cap B_2(a,\delta)$.

The function is **lower semicontinuous at $a$** when for every $\varepsilon>0$ there is $\delta>0$ such that

$$f(a)-\varepsilon<f(x)\qquad(x\in A\cap B_2(a,\delta)).$$

It is upper or lower semicontinuous on $A$ when the corresponding condition holds at every point of $A$. These are relative notions on $A$; when $A$ is empty, each on-set condition is vacuous. A continuous function (Continuity of a map between metric spaces, at a point and globally, in the $\varepsilon$-$\delta$ form) satisfies both conditions.

## Definition references

[[lem-metrics-on-rn]]

[[def-metric-ball]]

[[def-metric-continuity]]

