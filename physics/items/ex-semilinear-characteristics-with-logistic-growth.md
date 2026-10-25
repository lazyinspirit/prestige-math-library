---
id: ex-semilinear-characteristics-with-logistic-growth
kind: example
title: "Semilinear characteristics with logistic growth"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-semilinear-and-quasilinear-first-order-cauchy-problems, def-augmented-characteristic-system-for-a-quasilinear-pde, lem-characteristic-solution-satisfies-the-quasilinear-pde]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
sources:
  references:
    - title: "First order PDE: The Methods of Characteristics"
      url: "https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf"
---

## Example

Let $g:\mathbb R\to\mathbb R$ be $C^1$. For $u_t+u_x=u(1-u)$ and $u(0,x)=g(x)$, the characteristic formula is

$$u(t,x)=\frac{g(x-t)e^t}{1+g(x-t)(e^t-1)},$$

on the open set where $1+g(x-t)(e^t-1)>0$. For each fixed label
$\xi=x-t$, this is the time interval containing zero before any pole.

## Facts & Assumptions

**Given:** A $C^1$ datum $g:\mathbb R\to\mathbb R$ and a point $(t,x)$ where the displayed denominator is positive.

## Verification

**Proof technique:** direct.

1.1 The projected characteristics in the independent-variable plane are $X(t,\xi)=(t,\xi+t)$.  Thus their spatial component is $\xi+t$, so $\xi=x-t$, and the Jacobian of $(t,\xi)\mapsto(t,\xi+t)$ is $1$. [given, algebra]

2.1 Along one such curve, $z'=z(1-z)$ and $z(0)=g(\xi)$; put $q=g(\xi)$ and $D(t)=1+q(e^t-1)$. On $D(t)>0$, direct differentiation gives $z=qe^t/D$ and $z'=qe^t(1-q)/D^2=z(1-z)$, with $z(0)=q$. This includes $q=0$ and $q=1$ without division by either. Since $D(0)=1$ and $D'(t)=qe^t$ has constant sign, $\{t:D(t)>0\}$ is exactly the interval containing zero on which the denominator is nonzero. [step 1.1, algebra]

3.1 Substitute $\xi=x-t$ to obtain the formula, and characteristic reconstruction verifies the PDE on its stated domain. [step 2.1, given] ∎
