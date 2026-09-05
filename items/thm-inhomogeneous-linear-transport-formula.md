---
id: thm-inhomogeneous-linear-transport-formula
kind: theorem
title: "The inhomogeneous linear transport equation has the characteristic integrating-factor formula"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-linear-transport-equation-and-its-characteristic-flow,
       lem-transport-equation-along-a-characteristic,
       thm-chain-rule-for-total-derivatives,
       thm-first-order-linear-ode-integrating-factor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Statement

Let $U\subseteq\mathbb R^n\times\mathbb R$ be a region. Assume
$a\in C^1(U;\mathbb R^n)$ and $c,f\in C(U)$, and assume that for each
$(x,t)\in U$ there is a unique characteristic $X(s;t,x)$ on the closed
interval with endpoints $0$ and $t$, its space-time graph remains in $U$, and
the characteristic family has the usual flow consistency. If $u\in C^1(U)$
solves

$$u_t+a\cdot\nabla_xu+c\,u=f,\qquad u(x,0)=u_0(x),$$

then

$$u(x,t)=e^{-\int_0^t c(X(\tau;t,x),\tau)\,d\tau}u_0(X(0;t,x))+\int_0^t e^{-\int_s^t c(X(\tau;t,x),\tau)\,d\tau}f(X(s;t,x),s)\,ds.$$

Conversely, any $C^1$ function satisfying this formula solves the transport
equation on $U$.

## Facts & Assumptions

**Given:** A $C^1$ transport field $a$, continuous coefficients $c,f$, a
classical transport solution, and a unique flow-consistent characteristic
through each $(x,t)\in U$ whose whole segment to time $0$ remains in $U$.

[L1] The chain rule computes the derivative of a $C^1$ function along a
$C^1$ curve ([[thm-chain-rule-for-total-derivatives]]).

[L2] Along a characteristic, the PDE becomes the scalar linear ODE
$v'+cv=f$ ([[lem-transport-equation-along-a-characteristic]]).

[L3] A scalar first-order linear ODE is solved by the integrating-factor
formula ([[thm-first-order-linear-ode-integrating-factor]]).

[L4] A characteristic satisfies $X'(s)=a(X(s),s)$, and uniqueness makes the
characteristic family a single-valued flow
([[def-linear-transport-equation-and-its-characteristic-flow]]).

## Proof

**Proof technique:** direct.

1.1 Fix $(x,t)\in U$ and let $v(s)=u(X(s;t,x),s)$. The characteristic segment stays in $U$, so [L2] gives $v'(s)+c(X(s;t,x),s)v(s)=f(X(s;t,x),s)$ and $v(0)=u_0(X(0;t,x))$. [L2, given]

2.1 If $t=0$, the displayed formula is exactly the initial condition. If $t\neq0$, apply [L3] to the scalar ODE from step 1.1 on the interval with endpoints $0$ and $t$; continuity of $c,f$, the characteristic, and its in-domain graph makes the two composed coefficients continuous there, while oriented integrals cover either order of the endpoints. This yields the displayed formula for $v(t)=u(x,t)$. [L3, given, step 1.1]

3.1 Conversely, suppose a $C^1$ function satisfies the displayed formula and fix the characteristic $Y(s)=X(s;t,x)$. Flow consistency gives $X(r;s,Y(s))=Y(r)$ for every relevant $r,s$. Substitution in the displayed formula therefore writes $v(s)=u(Y(s),s)$ exactly as the [L3] integrating-factor solution with coefficients $p(s)=c(Y(s),s)$ and $q(s)=f(Y(s),s)$. Hence $v'+pv=q$. By [L1] and [L4], $v'=u_t+a\cdot\nabla_xu$, proving the PDE at $(x,t)$. At $t=0$, [L4] gives $X(0;0,x)=x$ and the integral vanishes, so the formula also gives $u(x,0)=u_0(x)$. [L1, L3, L4, given] ∎
