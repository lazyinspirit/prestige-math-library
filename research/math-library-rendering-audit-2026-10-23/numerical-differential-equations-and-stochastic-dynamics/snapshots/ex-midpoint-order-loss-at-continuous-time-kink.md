---
id: ex-midpoint-order-loss-at-continuous-time-kink
kind: example
title: "Explicit midpoint loses its uniform second-order defect bound at a time kink"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-euler-midpoint-rk4-tableaus
  - def-explicit-runge-kutta-tableau-and-stage-map
  - def-first-order-ode-initial-value-problem-and-solution
  - def-one-step-ode-method-local-defect-order-and-stability
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis, Chapter 5"
      url: "https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf"
---

## Example

Define the continuous time-dependent field on $\mathbb R\times\mathbb R$ by
$$f(t,y)=\begin{cases}0,&t\le0,\\t,&t>0.\end{cases}$$
With initial value $y(0)=0$, its exact solution is $y(t)=0$ for $t\le0$ and $y(t)=t^2/2$ for $t\ge0$. For every $h>0$, start explicit midpoint at $t_0=-h/2$ with the exact value $y(t_0)=0$.

## Facts & Assumptions

**Given:** The continuous field and exact solution in the Example, a step $h>0$, and the explicit midpoint tableau.

[F1] [[def-euler-midpoint-rk4-tableaus]] and [[def-explicit-runge-kutta-tableau-and-stage-map]]: explicit midpoint has $c=(0,1/2)$, weights $b=(0,1)$, stage state $Y_2=y+(h/2)f(t,y)$, and output $y+h f(t+h/2,Y_2)$.

[F2] [[def-first-order-ode-initial-value-problem-and-solution]]: an exact solution satisfies $y'(t)=f(t,y(t))$ on its time interval.

[F3] [[def-one-step-ode-method-local-defect-order-and-stability]]: the local defect is the method output from the exact starting value minus the exact value at the next time; a uniform local order-two claim requires a bound $C h^3$ with $C$ independent of the admitted start time.

## Verification

1.1 On the first midpoint stage, $k_1=f(-h/2,0)=0$, so the second-stage state remains $0$. Its time is $-h/2+h/2=0$, where the definition of $f$ gives $k_2=f(0,0)=0$. Thus the method output is $0$. [F1, given, algebra]

1.2 The displayed piecewise function satisfies $y(0)=0$ and $y'(t)=f(t,y(t))$ for $t<0$ and $t>0$. At $t=0$ its two one-sided derivatives are both $0=f(0,y(0))$, so it is an exact solution there as well. Its value at $h/2$ is $h^2/8$, hence the local defect is $0-h^2/8=-h^2/8$. [F2, given, algebra]

2.1 If one constant $C$ gave the uniform order-two estimate in [F3], these admitted exact-start steps would satisfy $h^2/8\le Ch^3$, hence $1/(8h)\le C$ for every $h>0$. The left side is unbounded as $h\downarrow0$, so no such uniform constant exists. The field is continuous but not differentiable in time at $0$, identifying the missing smoothness condition. [F3, step 1.2, algebra] ∎