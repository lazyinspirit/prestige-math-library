---
id: ex-index-one-circuit-consistent-initialization-and-be-step
title: "A capacitor-resistor circuit has one consistent algebraic current"
kind: example
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-semi-explicit-index-one-dae-and-consistent-initial-data
  - def-backward-euler-step-equation
  - thm-index-one-dae-implicit-function-reduction
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Solving Ordinary Differential Equations II, Chapter VI §VI.1, Solving Index 1 Problems, pp. 372–381"
      url: "https://isy.gitlab-pages.liu.se/fs/phd-courses/simulation/Papers/HairerWanner_VI_1_clean.pdf"
      locator: "§VI.1, printed pp. 376–379, transistor circuit as a DAE and consistent initial values."
    - title: "Kendall Atkinson, Weimin Han, and David Stewart, Numerical Solution of Ordinary Differential Equations, Chapter 10 §10.0"
      url: "https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf"
      locator: "Chapter 10, printed pp. 163–165: the general DAE form, differential and algebraic variables, and consistent constraint data; the specific RC circuit is derived locally."
---

## Example

Let $v(t)$ be the capacitor voltage and $i(t)$ the series current in a circuit with capacitance $C>0$, resistance $R>0$, and source voltage $u(t)$. Kirchhoff's current law and voltage law give the semi-explicit system

$$
C v'=i,\qquad 0=R i+v-u(t).
$$

The algebraic equation determines $i=(u(t)-v)/R$. With $C=R=1$, $u(t)=1$, and $v(0)=0$, the consistent initial current is $i(0)=1$, and the reduced ODE is $v'=1-v$. One backward-Euler step of size $h$ gives

$$
v_1=\frac{h}{1+h},\qquad i_1=\frac1{1+h}.
$$

For $h=1$, this is $(v_1,i_1)=(1/2,1/2)$. The pair $v(0)=0,i(0)=0$ is inconsistent for this same source.

## Facts & Assumptions

**Given:** $C,R>0$, the displayed circuit equations, the constant source and initial voltage in the example.

[F1] [[def-semi-explicit-index-one-dae-and-consistent-initial-data]]: a consistent initial pair must satisfy the algebraic equation at the initial time.

[F2] [[def-backward-euler-step-equation]]: for an ODE $Y'=f(t,Y)$, backward Euler uses the endpoint equation $Y_1=Y_0+h f(t_1,Y_1)$.

[F3] [[thm-index-one-dae-implicit-function-reduction]]: if the derivative of the algebraic equation with respect to its algebraic variable is invertible, it defines a local branch and reduced ODE.



## Verification

1.1 In the circuit, $f(t,v,i)=i/C$ and $g(t,v,i)=Ri+v-u(t)$, so $g_i=R\ne0$. Thus the selected algebraic branch is $i=(u(t)-v)/R$, and the reduced ODE follows from [F3]. [given, F3, algebra]

1.2 For $C=R=1$, $u(0)=1$, and $v_0=0$, the algebraic residual at $i_0=1$ is $1\cdot1+0-1=0$, whereas it is $1\cdot0+0-1=-1$ at $i_0=0$. By [F1], the first pair is consistent and the second cannot be the initial value of a solution. [given, F1, algebra]

2.1 Apply [F2] to the reduced ODE $v'=1-v$ from step 1.1. With $v_0=0$ and $h>0$, the endpoint equation $v_1=h(1-v_1)$ gives $v_1=h/(1+h)$. Recovering the current from the algebraic branch gives $i_1=1-v_1=1/(1+h)$, so $v_1-v_0=h i_1$ and $i_1+v_1=1$. For $h=1$, both values equal $1/2$. [given, F2, step 1.1, algebra]

3.1 The exact reduced solution $v(t)=1-e^{-t}$, $i(t)=e^{-t}$ satisfies $v'=i$ and $i+v=1$, and it starts at the consistent pair $(0,1)$. Thus the example's initialization and one-step calculations satisfy both circuit equations. [given, step 1.2, step 2.1, algebra] ∎
