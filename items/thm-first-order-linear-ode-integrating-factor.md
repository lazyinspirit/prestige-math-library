---
id: thm-first-order-linear-ode-integrating-factor
kind: theorem
title: "A scalar first-order linear ODE has a unique solution given by the integrating-factor formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-first-order-ode-initial-value-problem-and-solution, thm-derivative-of-exponential, cor-exponential-reciprocal-and-positivity, thm-chain-rule, thm-algebra-of-derivatives, cor-primitives-of-a-continuous-function, def-oriented-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Let $I\subseteq\mathbb R$ be order-convex with at least two elements, let $x_0\in I$, and let $p,q:I\to\mathbb R$ be continuous. The IVP $y'+py=q$, $y(x_0)=y_0$, has exactly one solution on $I$, namely

$$y(x)=\exp(-P(x))\left(y_0+\int_{x_0}^x\exp(P(t))q(t)\,dt\right),\qquad P(x)=\int_{x_0}^x p(t)\,dt.$$

## Facts & Assumptions

**Given:** The continuous coefficients and initial data in the Statement.

[L1] The exponential satisfies $(\exp)'=\exp$ ([[thm-derivative-of-exponential]]).

[L2] For a continuous $f$ on an order-convex interval with at least two elements, $x\mapsto\int_{x_0}^x f$ is a primitive of $f$. If $a<b$ in the interval and $G$ is any primitive, then $\int_a^b f=G(b)-G(a)$ ([[cor-primitives-of-a-continuous-function]]).

[L6] Oriented integrals satisfy $\int_b^a f=-\int_a^b f$ and $\int_a^a f=0$ ([[def-oriented-integral]]).

[L3] If $g$ is differentiable at $c$ and $f$ is differentiable at $g(c)$, then $(f\circ g)'(c)=f'(g(c))g'(c)$ ([[thm-chain-rule]]).

[L4] If $f$ and $g$ are differentiable at $c$, then $(fg)'(c)=f'(c)g(c)+f(c)g'(c)$ ([[thm-algebra-of-derivatives]]).

[L5] For every real $u$, $\exp(u)>0$ and $\exp(-u)=1/\exp(u)$ ([[cor-exponential-reciprocal-and-positivity]]).

## Proof

**Proof technique:** direct.

1.1 By the existence clause of [L2], $P'=p$; hence [L3], [L4], and [L1] give $(\exp(P)y)'=\exp(P)(y'+py)=\exp(P)q$. [given, L1, L2, L3, L4]

2.1 If $x_0<x$, apply the evaluation clause of [L2] on $[x_0,x]$; if $x<x_0$, apply it on $[x,x_0]$ and reverse the integral with [L6]; equality is immediate at $x=x_0$. In every case, using $P(x_0)=0$ and dividing by [L5] yields the displayed formula. Direct differentiation verifies it and its initial value, while applying step 1.1 to the difference of two solutions makes that difference zero. [step 1.1, L2, L5, L6, algebra] ∎
