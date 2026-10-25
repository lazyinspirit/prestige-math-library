---
id: def-contamination-modulus
kind: definition
title: "Huber contamination modulus"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-statistical-experiment
  - def-loss-function-and-risk
  - def-measurable-space
  - def-total-variation-distance-for-probability-laws
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
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber’s Contamination Model, §5, Theorem 5.1"
      url: "https://arxiv.org/pdf/1506.00691"
    - title: "Philippe Rigollet, 18.S997: High-Dimensional Statistics, Lecture Notes, Chapter 5"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
---

## Definition

For an experiment $\{P_\theta:\theta\in\Theta\}$ with nonempty $\Theta$ ([[def-statistical-experiment]]), choose a sigma-algebra $\mathcal T$ on $\Theta$ and take $(\Theta,\mathcal T)$ as the measurable action space ([[def-measurable-space]]). Take the target-first loss $L:\Theta\times\Theta\to[0,+\infty]$ from [[def-loss-function-and-risk]] with that action space. For $0\le\epsilon<1$, define
$$
\omega(\epsilon,\Theta)=\sup\{L(\theta_1,\theta_2):\theta_1,\theta_2\in\Theta,\ \|P_{\theta_1}-P_{\theta_2}\|_{TV}\le\epsilon/(1-\epsilon)\}.
$$
Set $\omega(1,\Theta)=\sup_{\theta_1,\theta_2\in\Theta}L(\theta_1,\theta_2)$, allowing $+\infty$. Total variation is the event-supremum convention $\sup_A|P(A)-Q(A)|$ from [[def-total-variation-distance-for-probability-laws]], with no factor $1/2$.

