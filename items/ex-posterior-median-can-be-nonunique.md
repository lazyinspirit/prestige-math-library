---
id: ex-posterior-median-can-be-nonunique
kind: example
title: A posterior median need not be unique
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-posterior-median
  - thm-posterior-median-minimizes-absolute-risk
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
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

## Example

Let $\Pi=\frac12\delta_0+\frac12\delta_1$. Every $m\in[0,1]$ is a posterior median and has the same absolute posterior risk, $1/2$.

## Facts & Assumptions

**Given:** $\Pi(\{0\})=\Pi(\{1\})=1/2$ and there is no other posterior mass.

[F1] A posterior median has at least half the mass on each closed side. [[def-posterior-median]]

[F2] Every posterior median minimizes absolute posterior risk when the first absolute moment is finite. [[thm-posterior-median-minimizes-absolute-risk]]

## Verification

**Given:** The hypotheses in the Example and Facts & Assumptions.

1.1 For $m\in[0,1]$, $\Pi((-\infty,m])\ge1/2$ and $\Pi([m,\infty))\ge1/2$, so [F1] makes every such $m$ a median. [given, F1]

2.1 For $m\in[0,1]$, $\rho(m)=\frac12|m|+\frac12|1-m|=\frac12$. For $a<0$, $\rho(a)=\frac12(-a)+\frac12(1-a)=\frac12-a>\frac12$; for $a>1$, $\rho(a)=\frac12a+\frac12(a-1)=a-\frac12>\frac12$. Thus precisely the interval $[0,1]$ minimizes risk, in agreement with [F2]. [given, F2, algebra] ∎
