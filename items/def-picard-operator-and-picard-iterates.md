---
id: def-picard-operator-and-picard-iterates
kind: definition
title: "The Picard operator and Picard iterates on a closed ball of continuous curves"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, def-vector-valued-derivative-and-integral, def-metric-ball, thm-recursion]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Definition

Fix $h\ge0$, $J=[t_0-h,t_0+h]$, an initial state $x_0\in\mathbb R^n$, and a radius $r>0$. Let

$$\mathcal B_r:=\{x\in C(J,\mathbb R^n):\sup_{t\in J}\|x(t)-x_0\|_2\le r\}.$$

Whenever $(t,x(t))$ lies in the domain of the continuous vector field $F$, its **Picard operator** is

$$(\mathcal Tx)(t):=x_0+\int_{t_0}^{t}F(s,x(s))\,ds.$$

Starting from $x^{(0)}(t):=x_0$, the **Picard iterates** are defined recursively ([[thm-recursion]]) by $x^{(m+1)}:=\mathcal T x^{(m)}$ whenever each iterate lies in the operator's domain. Every fixed point satisfies the corresponding Volterra equation. When $h>0$, it is exactly a solution of the IVP by [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]; for $h=0$ the fixed-point equation remains defined, but no derivative on the isolated one-point domain is asserted.
