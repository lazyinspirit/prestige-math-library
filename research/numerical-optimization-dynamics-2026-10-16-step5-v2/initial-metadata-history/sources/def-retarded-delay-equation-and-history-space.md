---
id: def-retarded-delay-equation-and-history-space
kind: definition
title: "Retarded delay equations and their history space"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-first-order-ode-initial-value-problem-and-solution
  - def-euclidean-inner-product
  - def-lipschitz-holder-contraction
  - def-vector-valued-functions-limits-and-continuity
  - def-vector-valued-derivative-and-integral
justified_by:
  - lem-delay-history-space-is-banach
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "M. Zennaro, The Numerical Solution of Delay Differential Equations, Dobbiaco 2006 summer-school lecture notes"
      url: "https://dmi.units.it/dobbiaco/pre2006/dobbiaco06_Zennaro.pdf"
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Definition

Let $d\ge1$, $\tau>0$, and $T>0$. The **history space** for delay $\tau$ is
$$\mathcal C_\tau:=C([ -\tau,0],\mathbb R^d),\qquad \|\phi\|_\infty:=\sup_{-\tau\le s\le0}\|\phi(s)\|_2,$$
where continuity of vector-valued functions and the Euclidean norm are as in
[[def-vector-valued-functions-limits-and-continuity]] and
[[def-euclidean-inner-product]]. Its completeness, so that it is a Banach space
with this norm, is established in [[lem-delay-history-space-is-banach]].

A **retarded delay initial-value problem** on $[0,T]$ consists of a history
$\phi\in\mathcal C_\tau$ and a vector field
$f:U\times\mathbb R^d\times\mathbb R^d\to\mathbb R^d$, where $U$ is an open
interval containing $[0,T]$, such that $f$ is continuous and there is an
$L\ge0$ giving the following global Lipschitz bound (in the convention of
[[def-lipschitz-holder-contraction]]):
$$\|f(t,u,v)-f(t,\widetilde u,\widetilde v)\|_2 \le L\bigl(\|u-\widetilde u\|_2+\|v-\widetilde v\|_2\bigr)$$
for all $t\in U$ and all $u,v,\widetilde u,\widetilde v\in\mathbb R^d$.
A **solution** is a continuous function $y:[-\tau,T]\to\mathbb R^d$ whose
restriction to $[0,T]$ is continuously differentiable, for which
$y(s)=\phi(s)$ on $[-\tau,0]$, and which satisfies the compatibility condition
$y(0)=\phi(0)$ and the retarded equation
$$y'(t)=f\bigl(t,y(t),y(t-\tau)\bigr),\qquad 0\le t\le T.$$
At $t=0$ the derivative is the right derivative. The equation is an ordinary
first-order IVP on each method-of-steps interval once the delayed history on
that interval is known.

The definition concerns a fixed positive constant delay. It does not include
state-dependent delays, neutral equations containing a delayed derivative, or
integrals over a delay window; those are distinct interfaces.
