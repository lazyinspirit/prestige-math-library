---
id: def-one-step-ode-method-local-defect-order-and-stability
kind: definition
title: "One-step ODE methods, local defect, uniform order, and step stability"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-euclidean-inner-product, def-first-order-ode-initial-value-problem-and-solution]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis (Spring 2012), Chapter 5"
      url: "https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Julia Edition, Section 6.2"
      url: "https://fncbook.com/euler/"
dependency_level: 0
---

## Definition

Let $d\ge1$, let $D\subseteq\mathbb R\times\mathbb R^d$ be open, and consider a first-order IVP and solution in the sense of [[def-first-order-ode-initial-value-problem-and-solution]]. A **one-step method** is a family of maps $\Psi_h(t,v)$, defined for admitted times $t$, positive step sizes $h$, and states $v$, whose value is the method's approximation at time $t+h$ from the single input state $v$ at time $t$. It does not use earlier numerical states.

If $y$ is an exact solution on an interval containing $[t,t+h]$, the **local defect** is

$$\delta_h(t;y):=\Psi_h(t,y(t))-y(t+h).$$

Let $K\subseteq D$ be a fixed compact time-state set. The method has **uniform local order $p$ on $K$ along $y$** if there are constants $C\ge0$ and $h_0>0$, independent of the admitted starting time $t$ and step $0<h\le h_0$, such that

$$\|\delta_h(t;y)\|_2\le C h^{p+1}$$

whenever the exact solution graph on $[t,t+h]$ and the associated method time-state inputs, stages, and outputs under consideration lie in $K$. Here $p$ is a positive integer and $\|\cdot\|_2$ is the Euclidean norm of [[def-euclidean-inner-product]].

The method has **one-step Lipschitz stability on $K$** with constant $L\ge0$ if

$$\|\Psi_h(t,u)-\Psi_h(t,v)\|_2\le(1+Lh)\|u-v\|_2$$

for every admitted step size $h$, admitted time $t$, and input states $u,v$ with $(t,u),(t,v)\in K$. This is a bound on the change in one step; it is separate from absolute or linear stability regions and does not itself assert a global error estimate.
