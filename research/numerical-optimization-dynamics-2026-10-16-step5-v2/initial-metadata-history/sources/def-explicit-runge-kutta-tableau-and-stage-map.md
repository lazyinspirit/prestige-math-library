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
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis, Chapter 5: Methods for Ordinary Differential Equations"
      url: "https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf"
---

## Definition

Let $d\ge1$, let $D\subseteq\mathbb R\times\mathbb R^d$ be an open time-state domain, and let $f:D\to\mathbb R^d$ be the right-hand side of a first-order initial-value problem in the sense of [[def-first-order-ode-initial-value-problem-and-solution]]. An explicit $s$-stage Runge–Kutta tableau consists of a positive integer $s$, real coefficients $a_{ij}$, $b_i$, and $c_i$ with $a_{ij}=0$ whenever $j\ge i$, and
$$c_i=\sum_{j<i}a_{ij}\qquad(1\le i\le s).$$
The finite row sum is empty, hence $c_1=0$.

For a step size $h>0$ and an admitted base pair $(t,y)\in D$, the **stage graph** consists of the finite tuples satisfying
$$Y_i=y+h\sum_{j<i}a_{ij}K_j,\qquad t_i=t+c_i h,\qquad K_i=f(t_i,Y_i)\quad(i=1,\ldots,s).$$
These equations characterize each stage from the preceding slopes because $a_{ij}=0$ for $j\ge i$. For a complete stage tuple, the candidate endpoint is
$$y^+=y+h\sum_{i=1}^s b_iK_i.$$

To include unavailable evaluations, let $(E_i)_{i=1}^s$ be evaluator response functions on $D$: at each point $E_i$ has value either $f(\tau,u)$ or the symbol evaluation-failure for stage $i$. Stage-dependent responses allow availability to differ between repeated inputs. A **successful prefix of length $r$**, $0\le r\le s$, is a stage tuple through index $r$ whose stage pairs lie in $D$ and whose responses under $E_i$ equal the corresponding slopes $K_i$. The empty prefix is allowed. For any prefix of length $r<s$, the next pair $(t_{r+1},Y_{r+1})$ is characterized by the same displayed equations using its already specified slopes. There is a unique maximal successful prefix, since every admissible successful extension has the uniquely specified slope $f(t_i,Y_i)$.

The **status-labelled stage map** is the following mathematical map. For a maximal prefix of length $r<s$, its value is domain-failure with index $r+1$ when the next pair is outside $D$, and evaluation-failure with index $r+1$ when that pair lies in $D$ and its response under $E_{r+1}$ is evaluation-failure. For a complete prefix its value is domain-failure at output when $(t+h,y^+)\notin D$, and success with $(t+h,y^+)$ otherwise. Thus no slope at an inadmissible pair is part of the stage graph. In the exact mathematical model $E_i=f$ on $D$ for every $i$; evaluation-failure represents only an unavailable numerical evaluation. On its success domain the state component $y^+$ defines a one-step map in the sense of [[def-one-step-ode-method-local-defect-order-and-stability]].
