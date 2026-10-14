---
id: def-fisher-information-metric-distance
kind: definition
title: "Fisher-information metric distance to a set"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: []
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
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 26"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/26notes.pdf"
    - title: "Steven G. Self and Kung-Yee Liang, Asymptotic Properties of Maximum Likelihood Estimators and Likelihood Ratio Tests Under Nonstandard Conditions"
      url: "https://www.stat.cmu.edu/~brian/763-2015/week06/papers/self-liang-1987.pdf"
---

## Definition

Let $d\ge1$ and let $I$ be an invertible real symmetric positive-definite $d\times d$ matrix. Define $\|v\|_I:=\sqrt{v^TIv}$ for $v\in\mathbb R^d$. For a nonempty set $C\subseteq\mathbb R^d$ define

$$d_I(x,C):=\inf_{c\in C}\|x-c\|_I.$$

This is the distance from $x$ to $C$ in the norm induced by $I$. The definition uses an infimum; attainment is proved separately when a later result requires it.
