---
id: def-euler-midpoint-rk4-tableaus
kind: definition
title: "The explicit Euler, midpoint, and classical fourth-order Runge–Kutta tableaus"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-explicit-runge-kutta-tableau-and-stage-map]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis, Chapter 5: Methods for Ordinary Differential Equations"
      url: "https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf"
---

## Definition

The following are the explicit Runge–Kutta tableaus in the convention of [[def-explicit-runge-kutta-tableau-and-stage-map]].

Forward Euler has $s=1$, $A=(0)$, $b=(1)$, and $c=(0)$.

Explicit midpoint has $s=2$, $A=\begin{pmatrix}0&0\\[2pt]1/2&0\end{pmatrix}$, $b=(0,1)$, and $c=(0,1/2)$.

The classical four-stage Runge–Kutta method has $s=4$, $A=\begin{pmatrix}0&0&0&0\\[2pt]1/2&0&0&0\\[2pt]0&1/2&0&0\\[2pt]0&0&1&0\end{pmatrix}$, $b=(1/6,1/3,1/3,1/6)$, and $c=(0,1/2,1/2,1)$.

Each displayed $c_i$ is the row sum required in the definition of an explicit tableau. These tableaus specify the stage equations; their order and scalar stability functions are proved separately.

