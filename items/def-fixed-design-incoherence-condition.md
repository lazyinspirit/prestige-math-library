---
id: def-fixed-design-incoherence-condition
kind: definition
title: "Fixed-design incoherence condition"
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

For integers $n,d,s$ with $n\ge1$ and $1\le s\le d$, and a deterministic matrix $X\in\mathbb R^{n\times d}$, write $G=X^{\mathsf T}X/n$. The design satisfies the incoherence condition at sparsity $s$ if
$$\max_{1\le j,k\le d}|G_{jk}-\mathbf 1_{\{j=k\}}|\le\frac1{14s}.$$
Here the maximum is entrywise, $\mathbf 1_{\{j=k\}}$ is $1$ when $j=k$ and $0$ otherwise, and no probabilistic assumption on $X$ is made. The constant $1/(14s)$ is the exact premise used in the local restricted-eigenvalue derivation; it is not a generic definition of design compatibility.
