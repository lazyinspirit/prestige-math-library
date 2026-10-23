---
id: ex-fd-single-shear-reduced-model
kind: example
title: One shear mode reduced evolution
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: [thm-fd-reduced-ode-global-energy]
dependency_roles:
  thm-fd-reduced-ode-global-energy: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Assume Countable Choice, meaning every sequence of nonempty sets admits a choice function. On $Q_2=\mathbb R^2/(2\pi\mathbb Z)^2$ with normalized measure $d\mu=(2\pi)^{-2}dx_1dx_2$, take the single vector field $v_1(x_1,x_2)=\sqrt2\sin(x_2)e_1$, where $e_1=(1,0)$. This finite real trigonometric polynomial belongs to $H^0(Q_2;\mathbb R^2)$ and has its displayed smooth periodic representative. For every $\nu\ge0$ and $a_0\in\mathbb R$, the one-mode reduced velocity $u(t,x)=a(t)v_1(x)$ has coefficient equation $a'(t)+\nu a(t)=0$ and unique forward solution $a(t)=a_0e^{-\nu t}$ for $t\ge0$. Its reduced energy $E(t)=\frac12 a(t)^2$ satisfies $E'(t)=-\nu\int_{Q_2}|\nabla u(t,x)|^2\,d\mu$. This is an exact finite-mode calculation and asserts no convergence or approximation error for the full partial differential equation.

## Example references

[[thm-fd-reduced-ode-global-energy|Skew reduced convection and global finite dynamics]]

## Facts & Assumptions

**Given:** $\nu\ge0$, $a_0\in\mathbb R$, $Q_2=(\mathbb R/2\pi\mathbb Z)^2$ with normalized measure, and the supplied $H^0$ class of the explicit smooth mode $v_1=\sqrt2\sin(x_2)e_1$.

[F1] [[thm-fd-reduced-ode-global-energy]]: The specified finite coefficient system has exactly one forward-global solution for each initial coefficient vector.

[F2] [[thm-fd-reduced-ode-global-energy]]: The reduced energy obeys $|a(t)|^2+2\nu\int_0^t\int_{Q_2}|\nabla u(s,x)|^2\,d\mu\,ds=|a_0|^2$.

## Verification

1.1 The field is smooth and periodic, and $\operatorname{div}v_1=\partial_{x_1}(\sqrt2\sin x_2)=0$. Its squared norm is $\int_{Q_2}2\sin^2(x_2)\,d\mu=1$, while $A_{11}=\int_{Q_2}2\cos^2(x_2)\,d\mu=1$. Also $c_{111}=\int_{Q_2}((v_1\cdot\nabla)v_1)\cdot v_1\,d\mu=0$, since $v_1\cdot\nabla=\sqrt2\sin(x_2)\partial_{x_1}$ and $v_1$ is independent of $x_1$. [given, algebra]

2.1 Thus the coefficient equation is $a'+\nu a=0$. The function $a(t)=a_0e^{-\nu t}$ has $a(0)=a_0$ and satisfies it by differentiation; [F1] makes it the unique forward-global solution. Since $\int_{Q_2}|\nabla u|^2\,d\mu=a(t)^2A_{11}=a(t)^2$, direct differentiation gives $E'(t)=-\nu a(t)^2=-\nu\int_{Q_2}|\nabla u|^2\,d\mu$, and [F2] gives the corresponding integrated identity. [given, F1, F2, step 1.1, algebra] ∎
