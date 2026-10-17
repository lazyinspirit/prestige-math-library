---
id: def-implicit-runge-kutta-stage-equations
title: "Implicit Runge–Kutta stage equations and update"
kind: definition
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-first-order-ode-initial-value-problem-and-solution
  - def-implicit-residual-and-algebraic-error-units
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
      locator: "§III.3 and §III.9, PDF pp. 66–68 and 81–83 / printed pp. 64–65 and 79–81: one-step Runge–Kutta analysis and Radau IIA."
    - title: "John C. Butcher, Implicit Runge–Kutta Methods, tutorial accompanying Numerical Methods for Ordinary Differential Equations"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
      locator: "PDF pp. 1–9: implicit Runge–Kutta stage representation and order conditions."
---

## Definition

Let $d,s\ge1$, $A=(a_{ij})\in\mathbb R^{s\times s}$, $b,c\in\mathbb R^s$, and let $f:D\to\mathbb R^d$ be a vector field on an open time-state domain $D\subseteq\mathbb R\times\mathbb R^d$ ([[def-first-order-ode-initial-value-problem-and-solution]]). For an initial state $y\in\mathbb R^d$ and time $t$ with $(t,y)\in D$, and a step $h>0$, a stage vector $Y=(Y_1,\ldots,Y_s)\in(\mathbb R^d)^s$ is admissible only when $(t+c_jh,Y_j)\in D$ for every $j$. An admissible vector solves

$$Y_i=y+h\sum_{j=1}^s a_{ij}f(t+c_jh,Y_j),\qquad i=1,\ldots,s.$$

When a solution $Y$ is selected, the method update is

$$\Psi_h(t,y)=y+h\sum_{i=1}^s b_i f(t+c_ih,Y_i).$$

On the admissible stage set, the **stage update residual** is the vector with blocks

$$G_i(Y)=Y_i-y-h\sum_{j=1}^s a_{ij}f(t+c_jh,Y_j).$$

The associated stage derivative residual is $G(Y)/h$. The tableau is **stiffly accurate** when $b_j=a_{sj}$ for all $j$ and $c_s=1$; in that case the last stage $Y_s$ equals the method update. The equations may have no, one, or several solutions in a proposed branch set; this definition alone asserts no solvability.
