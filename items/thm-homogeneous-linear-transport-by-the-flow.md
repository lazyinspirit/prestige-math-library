---
id: thm-homogeneous-linear-transport-by-the-flow
kind: theorem
title: "Homogeneous linear transport is solved by the inverse characteristic flow"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-linear-transport-equation-and-its-characteristic-flow,
       lem-transport-equation-along-a-characteristic,
       thm-chain-rule-for-total-derivatives]
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

Assume $a$ is regular enough that for each $(x,t)$ in a region $U$ the unique
characteristic $s\mapsto(X(s;t,x),s)$ is defined from $s=t$ to $s=0$ and its
whole segment remains in $U$, and assume these characteristics have the usual
flow consistency. If $u\in C^1(U)$ solves

$$u_t+a\cdot\nabla_xu=0,\qquad u(x,0)=u_0(x),$$

then

$$u(x,t)=u_0(X(0;t,x)).$$

Hence there is at most one classical solution on $U$. Conversely, any $C^1$
function on $U$ satisfying this formula is that unique classical solution.

## Facts & Assumptions

**Given:** A classical solution of the homogeneous transport equation on a
region $U$ where every characteristic segment from time $t$ to time $0$
remains in $U$, is unique, and satisfies flow consistency.

[L1] A transport equation and its characteristics are defined by the displayed
PDE and ODE ([[def-linear-transport-equation-and-its-characteristic-flow]]).

[L2] Along a characteristic, a transport solution satisfies the corresponding
scalar ODE ([[lem-transport-equation-along-a-characteristic]]).

[L3] The chain rule computes the derivative of a $C^1$ function along a
$C^1$ curve ([[thm-chain-rule-for-total-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Fix $(x,t)\in U$ and let $s\mapsto X(s;t,x)$ be its characteristic. Its whole segment to time $0$ lies in $U$, so [L2] with $c=f=0$ makes $v(s)=u(X(s;t,x),s)$ satisfy $v'(s)=0$. Hence $v$ is constant and $u(x,t)=v(t)=v(0)=u_0(X(0;t,x))$. [L2, given]

2.1 Step 1.1 proves the representation formula for every classical solution. The assumed characteristic flow is single valued, so two solutions with the same initial datum agree pointwise on $U$. [given, step 1.1]

3.1 Conversely, suppose a $C^1$ function satisfies the displayed formula. Along the characteristic through $(x,t)$, flow consistency gives $$X(0;s,X(s;t,x))=X(0;t,x).$$ Applying the formula at $(X(s;t,x),s)$ therefore makes $s\mapsto u(X(s;t,x),s)$ constant. By [L3] and the characteristic equation from [L1], its derivative is $$u_t(X(s;t,x),s)+a(X(s;t,x),s)\cdot\nabla_xu(X(s;t,x),s).$$ Evaluating at $s=t$ proves the PDE at $(x,t)$, while setting $t=0$ gives the initial condition. Step 2.1 then gives uniqueness. [L1, L3, given, step 2.1] ∎
