---
id: def-explicit-runge-kutta-tableau-and-stage-map
kind: definition
title: "Explicit Runge–Kutta tableaus, stage maps, and failure status"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-euclidean-inner-product
  - def-first-order-ode-initial-value-problem-and-solution
  - def-one-step-ode-method-local-defect-order-and-stability
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
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis, Chapter 5: Methods for Ordinary Differential Equations"
      url: "https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf"
---

## Definition

Let $d\ge1$, let $D\subseteq\mathbb R\times\mathbb R^d$ be an open time-state domain, and let $f:D\to\mathbb R^d$ be the right-hand side of a first-order initial-value problem in the sense of [[def-first-order-ode-initial-value-problem-and-solution]]. An explicit $s$-stage Runge–Kutta tableau consists of a positive integer $s$, real coefficients $a_{ij}$, $b_i$, and $c_i$ with $a_{ij}=0$ whenever $j\ge i$, and
$$c_i=\sum_{j<i}a_{ij}\qquad(1\le i\le s).$$
The finite row sum is empty, hence $c_1=0$.

For a step size $h>0$ from an admitted base pair $(t,y)\in D$, compute in order
$$Y_i=y+h\sum_{j<i}a_{ij}K_j,\qquad t_i=t+c_i h,\qquad K_i=f(t_i,Y_i)\quad(i=1,\ldots,s).$$
The strict lower-triangular condition makes each stage depend only on already computed slopes; no implicit stage equation is solved. If every stage is defined, the candidate output is
$$y^+=y+h\sum_{i=1}^s b_iK_i.$$

The procedure accepts an exact right-hand-side evaluation oracle that returns either the value $f(t_i,Y_i)$ or an evaluation-failure status. Before each query it checks $(t_i,Y_i)\in D$. It returns domain-failure with the first failing stage if that check fails, evaluation-failure with the stage index if the oracle fails, and domain-failure at output if $(t+h,y^+)\notin D$. Otherwise it returns success with $(t+h,y^+)$. In the exact mathematical model the oracle returns $f$ at every point of $D$; the failure branch records only an unavailable numerical evaluation. On success this is a one-step map in the sense of [[def-one-step-ode-method-local-defect-order-and-stability]].
