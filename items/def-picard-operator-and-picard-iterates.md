---
id: def-picard-operator-and-picard-iterates
kind: definition
title: "The Picard operator and Picard iterates on a closed ball of continuous curves"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, def-vector-valued-derivative-and-integral, def-metric-ball, thm-recursion]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
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

Fix $n\in\mathbb N$ with $n\ge1$, $h\ge0$, $J=[t_0-h,t_0+h]$, an initial state $x_0\in\mathbb R^n$, and a radius $r>0$. Let

$$\mathcal B_r:=\{x\in C(J,\mathbb R^n):\sup_{t\in J}\|x(t)-x_0\|_2\le r\}.$$

Let $D_F\subseteq\mathbb R\times\mathbb R^n$ be open and let $F:D_F\to\mathbb R^n$ be continuous. The **domain of the Picard operator on $\mathcal B_r$** consists of those $x\in\mathcal B_r$ whose whole graph $\{(s,x(s)):s\in J\}$ lies in $D_F$. For such a curve, continuity makes $s\mapsto F(s,x(s))$ integrable on every interval with endpoints $t_0,t\in J$, and its **Picard image** is

$$(\mathcal Tx)(t):=x_0+\int_{t_0}^{t}F(s,x(s))\,ds.$$

The operator maps into $C(J,\mathbb R^n)$; it is a self-map of $\mathcal B_r$ only when its image is known to remain in that ball. Starting from $x^{(0)}(t):=x_0$, define $x^{(m+1)}:=\mathcal T x^{(m)}$ inductively whenever $x^{(m)}$ is defined and lies in the operator domain; if that condition first fails, no later iterate is defined. When a separate invariant-ball result makes $\mathcal T:\mathcal B_r\to\mathcal B_r$ a total self-map, [[thm-recursion]] supplies the entire sequence. Every fixed point satisfies the corresponding Volterra equation. When $h>0$, it is exactly a solution of the IVP by [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]; for $h=0$ the fixed-point equation remains defined, but no derivative on the isolated one-point domain is asserted.
