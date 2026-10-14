---
id: def-soft-thresholding-function
kind: definition
title: "Soft-thresholding map"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: []
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
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics, Chapter 2, Section 2.4"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, Section 2.4"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Definition

For $\tau>0$ and $z\in\mathbb R$, define the **soft-thresholding map**
$$S_\tau(z)=\begin{cases}z-\tau,&z>\tau,\\0,&-\tau\le z\le\tau,\\z+\tau,&z<-\tau.\end{cases}$$
