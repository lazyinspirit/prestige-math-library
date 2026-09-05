---
id: lem-transport-characteristics-depend-c-one-on-initial-position
kind: lemma
title: "Transport characteristics depend C^1 on the initial position"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-transport-equation-and-its-characteristic-flow,
       thm-picard-lindelof-local-existence-and-uniqueness,
       thm-continuous-dependence-of-odes-on-initial-data-and-parameters,
       prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation,
       thm-gronwall-integral-inequality,
       thm-norm-inequality-for-the-vector-valued-integral,
       def-jacobian-matrix-and-gradient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Andersson, First Order PDE: The Method of Characteristics"
      url: "https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf"
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Statement

Let $a$ be $C^1$ on an open neighborhood of the graph of a characteristic
$X(\cdot;\xi_0)$ solving

$$X'(t)=a(X(t),t),\qquad X(t_0;\xi_0)=\xi_0,$$

on a compact interval $I$ containing $t_0$. Then, after shrinking to a
neighborhood $U_0$ of $\xi_0$, every initial point $\xi\in U_0$ determines a
characteristic $X(\cdot;\xi)$ on the same interval $I$, the map
$(t,\xi)\mapsto X(t;\xi)$ is continuous on $I\times U_0$, and for each
$t\in I$ the map $\xi\mapsto X(t;\xi)$ is $C^1$. Its Jacobian matrix
$Y(t,\xi)=D_\xi X(t;\xi)$ satisfies

$$Y'(t,\xi)=D_xa(X(t,\xi),t)\,Y(t,\xi),\qquad Y(t_0,\xi)=I_n.$$

## Facts & Assumptions

**Given:** A $C^1$ transport field $a$, a base characteristic $X(\cdot;\xi_0)$ on a compact interval $I$, and nearby initial points $\xi$.

[L2] Picard-Lindelof gives local existence and uniqueness for first-order systems ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[L3] Nearby ODE solutions exist on one common compact interval and depend continuously on the initial data ([[thm-continuous-dependence-of-odes-on-initial-data-and-parameters]]).

[L4] An ODE solution is equivalent to its Volterra integral equation ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

[L5] Gronwall's inequality turns an integral inequality into an exponential bound ([[thm-gronwall-integral-inequality]]).

[L6] The norm of a vector integral is bounded by the integral of the norm ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[L7] The Jacobian matrix is the matrix of first partial derivatives with respect to the initial-position variables ([[def-jacobian-matrix-and-gradient]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and [L3], after shrinking to a neighborhood $U_0$ of $\xi_0$, every $\xi\in U_0$ has a unique characteristic $X(\cdot;\xi)$ on the common compact interval $I$, and $(t,\xi)\mapsto X(t;\xi)$ is continuous there. [L2, L3]

2.1 Fix a coordinate vector $e_j$ and a nonzero scalar $h$ with $\xi,\xi+he_j\in U_0$; by [L4], the difference quotient $Z_h(t):=\frac{X(t;\xi+he_j)-X(t;\xi)}{h}$ satisfies $Z_h(t)=e_j+\int_{t_0}^t A_h(s,\xi)\,Z_h(s)\,ds$, where $A_h(s,\xi)=\int_0^1 D_xa(X(s;\xi)+\theta(X(s;\xi+he_j)-X(s;\xi)),s)\,d\theta$, and because $a$ is $C^1$ on a compact neighborhood of the family of graphs, the matrices $A_h$ are uniformly bounded. [L4, step 1.1]

3.1 Apply [L6] to the integral equation in step 2.1. If $t\ge t_0$, then $\|Z_h(t)\|_2\le 1+M\int_{t_0}^t \|Z_h(s)\|_2\,ds$; if $t\le t_0$, rewrite step 2.1 as $$Z_h(t)=e_j-\int_t^{t_0} A_h(s,\xi)\,Z_h(s)\,ds,$$ so $\|Z_h(t)\|_2\le 1+M\int_t^{t_0}\|Z_h(s)\|_2\,ds$. Gronwall therefore gives $\|Z_h(t)\|_2\le e^{M|t-t_0|}$ for every $t\in I$, uniformly in $h$. The continuity from step 1.1 together with the uniform continuity of $D_xa$ makes $A_h(\cdot,\xi)\to D_xa(X(\cdot;\xi),\cdot)$ uniformly as $h\to0$; comparing the equations for $Z_h$ and $Z_k$ on the forward or backward interval between $t_0$ and $t$ and applying [L5] again shows that $(Z_h)$ is Cauchy in $C(I;\mathbb R^n)$. [L3, L5, L6, step 2.1]

4.1 Let $Y_j(\cdot,\xi)$ be the limit from step 3.1; passing to the limit in step 2.1 gives $Y_j(t,\xi)=e_j+\int_{t_0}^t D_xa(X(s;\xi),s)\,Y_j(s,\xi)\,ds$, which [L4] rewrites as $Y_j'(t,\xi)=D_xa(X(t;\xi),t)Y_j(t,\xi)$ with $Y_j(t_0,\xi)=e_j$, and doing this for every coordinate vector while invoking [L7] identifies the matrix $Y=(Y_1\,\cdots\,Y_n)$ with $D_\xi X$; therefore $\xi\mapsto X(t;\xi)$ is $C^1$ and its Jacobian solves the displayed variational equation. [L4, L7, step 3.1] ∎
