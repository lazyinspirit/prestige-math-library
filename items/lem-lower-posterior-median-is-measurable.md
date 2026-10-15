---
id: lem-lower-posterior-median-is-measurable
kind: lemma
title: The lower posterior median is a measurable rule
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-posterior-median
  - lem-measurable-posterior-quantile-and-cdf-bracketing
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.3.1, PDF pp. 104–105"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 8 §8.1"
      url: "https://www.bayesrulesbook.com/chapter-8.html"
---

## Statement

Let $\Pi$ be a posterior probability kernel on $\mathbb R$. The rule $m(y)=q_{1/2}(y)$ is measurable and is a posterior median on every data fiber.

## Facts & Assumptions

**Given:** The posterior kernel and the median definition in the Statement.

[F1] A posterior median satisfies $\Pi_y((-\infty,m])\ge1/2$ and $\Pi_y([m,\infty))\ge1/2$. [[def-posterior-median]]

[F2] The lower quantile is measurable and satisfies $\Pi_y((-\infty,q_{1/2}(y)))\le1/2\le\Pi_y((-\infty,q_{1/2}(y)])$. [[lem-measurable-posterior-quantile-and-cdf-bracketing]]

## Proof

**Given:** The posterior probability kernel in the Statement.

1.1 By [F2], $m(y)=q_{1/2}(y)$ is measurable and $\Pi_y((-\infty,m(y)])\ge1/2$. [given, F2]

2.1 Since $\Pi_y$ is a probability measure, $\Pi_y([m(y),\infty))=1-\Pi_y((-\infty,m(y)))\ge1/2$ by [F2]. Thus both inequalities in [F1] hold, so $m(y)$ is a median for every $y$. [F1, F2, step 1.1, algebra] ∎
