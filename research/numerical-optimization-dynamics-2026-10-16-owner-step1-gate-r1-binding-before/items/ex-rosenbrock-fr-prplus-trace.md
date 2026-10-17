---
id: ex-rosenbrock-fr-prplus-trace
kind: example
title: "One accepted Rosenbrock step gives different FR and PR+ coefficients"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-nonlinear-conjugate-gradient-methods
  - def-wolfe-and-strong-wolfe-conditions
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

For the Rosenbrock function $f(x,y)=(1-x)^2+100(y-x^2)^2$, take $x_0=(-6/5,1)$ and the initial steepest-descent direction $d_0=-g_0$. With $c_1=1/1000$, $c_2=49/100$, and $t_0=1/1000$, the first accepted step satisfies strong Wolfe. Its FR and PR+ coefficients for the next direction differ.

## Facts & Assumptions

**Given:** The function and starting point in the Example, and the coefficient definitions of [[alg-nonlinear-conjugate-gradient-methods]].

[F1] [[alg-nonlinear-conjugate-gradient-methods]]: $d_0=-g_0$.

[F3] [[alg-nonlinear-conjugate-gradient-methods]]: $\beta_0^{\rm FR}=\|g_1\|_2^2/\|g_0\|_2^2$ and $\beta_0^{\rm PR+}=\max\{0,g_1^T(g_1-g_0)/\|g_0\|_2^2\}$.

[F2] [[def-wolfe-and-strong-wolfe-conditions]]: a strong Wolfe step satisfies Armijo decrease and $|\phi'(t)|\le c_2|\phi'(0)|$.

## Verification

**Given:** $f$, $x_0$, $t_0$, $c_1$, and $c_2$ as above.

1.1 Direct differentiation gives $g_0=(-1078/5,-88)$ and $d_0=(1078/5,88)$. Thus $f(x_0)=121/5$ and $\phi'(0)=g_0^Td_0=-1{,}355{,}684/25=-54{,}227.36$. The trial point is $x_1=(-2461/2500,136/125)$, and $y_1-x_1^2=743479/6250000$. [given, F1, algebra]

2.1 Substitution gives $f(x_1)=5.35291158000896$ and $g_1=\nabla f(x_1)=(42.8715665664,23.791328),\qquad \phi'(t_0)=g_1^Td_0=11{,}336.74661571584.$ The Armijo bound is $f(x_0)+c_1t_0\phi'(0)=24.14577264$, so $f(x_1)$ satisfies it. Also $|\phi'(t_0)|<11{,}400<\frac{49}{100}|\phi'(0)|=26{,}571.4064.$ Hence the step satisfies both strong Wolfe inequalities. [given, F2, step 1.1, algebra]

3.1 Put $G_0=\|g_0\|_2^2=54{,}227.36$, $G_1=\|g_1\|_2^2$, and $h=g_1^Td_0=11{,}336.74661571584$. Since $g_0=-d_0$, $\beta_0^{\rm FR}=\frac{G_1}{G_0},\qquad \beta_0^{\rm PR+}=\frac{G_1+h}{G_0}.$ Here $G_1>0$ and $h>0$, so the two coefficients are distinct. The corresponding directions are $d_1^{\rm FR}=-g_1+\beta_0^{\rm FR}d_0$ and $d_1^{\rm PR+}=-g_1+\beta_0^{\rm PR+}d_0$. [F3, step 1.1, step 2.1, algebra] ∎
