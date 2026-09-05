---
id: ex-transport-with-growth-and-source
kind: example
title: "Transport with growth and source along straight characteristics"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-inhomogeneous-linear-transport-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Example

Let $b\in\mathbb R^n$ be constant and let $q:\mathbb R^n\to\mathbb R$ be
$C^1$, and let $u_0\in C^1(\mathbb R^n)$. The equation

$$u_t+b\cdot\nabla_xu+u=q(x-bt),\qquad u(x,0)=u_0(x),$$

has the explicit solution

$$u(x,t)=e^{-t}u_0(x-bt)+(1-e^{-t})q(x-bt).$$

## Facts & Assumptions

**Given:** The transport equation with constant velocity $b$, unit zeroth-order coefficient, source $q(x-bt)$, and datum $u_0\in C^1(\mathbb R^n)$.

[L1] The inhomogeneous transport equation is solved by the characteristic integrating-factor formula ([[thm-inhomogeneous-linear-transport-formula]]).

## Verification

**Proof technique:** direct.

1.1 The characteristics are the straight lines $X(s;t,x)=x+(s-t)b$, so $X(0;t,x)=x-bt$, and along such a curve the source becomes $q(X(s;t,x)-bs)=q(x-bt)$, which is independent of $s$. [given]

2.1 Applying [L1] with $c\equiv1$ gives $u(x,t)=e^{-t}u_0(x-bt)+\int_0^t e^{-(t-s)}q(x-bt)\,ds$, and the integral equals $(1-e^{-t})q(x-bt)$, so the displayed closed form follows. [L1, step 1.1] ∎
