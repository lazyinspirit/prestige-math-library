---
id: def-implicit-residual-and-algebraic-error-units
title: "Implicit residuals and their update and derivative units"
kind: definition
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-first-order-ode-initial-value-problem-and-solution
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
    - title: "John C. Butcher, Implicit Runge–Kutta Methods, tutorial accompanying Numerical Methods for Ordinary Differential Equations"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
---

## Definition

Let $G:U\to\mathbb R^m$ be the residual map of an implicit equation, where $U\subseteq\mathbb R^m$ is the admissible set for the unknown vector. An exact solution is a point $z^*\in U$ with $G(z^*)=0$.

The **update residual** at an approximate solution $\widetilde z\in U$ is the vector $G(\widetilde z)$, measured in the same units as $z$. If the original equation was divided by a positive step scale $\sigma$, then the **derivative residual** is $G(\widetilde z)/\sigma$, and the corresponding update residual is $\sigma$ times that derivative residual. A residual norm is not a forward-error bound unless a separate inverse or stability estimate converts it to $\|\widetilde z-z^*\|$.

For a first-order vector field $f:D\to\mathbb R^d$ on an open time-state domain $D\subseteq\mathbb R\times\mathbb R^d$ ([[def-first-order-ode-initial-value-problem-and-solution]]), take a time $t$, input $y\in\mathbb R^d$, and step $h>0$ with $(t,y)\in D$. For backward Euler, an endpoint $z$ is admissible only when $(t+h,z)\in D$, and its update residual is

$$G_{\rm BE}(z)=z-y-hf(t+h,z),$$

so the derivative residual is $G_{\rm BE}(z)/h$.

For an $s$-stage implicit Runge–Kutta tableau $(A,b,c)$, a stage vector $Y=(Y_1,\ldots,Y_s)$ is admissible only when $(t+c_jh,Y_j)\in D$ for every $j$. On that admissible set, its stage update residual has blocks

$$G_i(Y)=Y_i-y-h\sum_{j=1}^s a_{ij}f(t+c_jh,Y_j),\qquad i=1,\ldots,s.$$

The stage derivative residual is $G(Y)/h$. These conventions distinguish an equation residual from the distance to its exact root.
