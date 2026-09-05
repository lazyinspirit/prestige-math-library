---
id: def-linear-transport-equation-and-its-characteristic-flow
kind: definition
title: "Linear transport equations and their characteristic flow"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-first-order-ode-initial-value-problem-and-solution]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
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

## Definition

Let $\Omega\subseteq\mathbb R^n\times\mathbb R$ be open and let
$a:\Omega\to\mathbb R^n$, $c:\Omega\to\mathbb R$, and $f:\Omega\to\mathbb R$.
The scalar first-order equation

$$u_t(x,t)+a(x,t)\cdot\nabla_x u(x,t)+c(x,t)u(x,t)=f(x,t)$$

is a **linear transport equation**.

Fix $(x_0,t_0)\in\Omega$. A **characteristic through $(x_0,t_0)$** is a
solution $X(\cdot)$ of the ODE

$$X'(s)=a(X(s),s),\qquad X(t_0)=x_0,$$

on an interval containing $t_0$. The corresponding space-time curve is
$s\mapsto (X(s),s)$. If these initial-value problems have unique solutions for
varying initial data, write $X(s;t_0,x_0)$ for the solution through
$(x_0,t_0)$. The resulting maps $x_0\mapsto X(s;t_0,x_0)$, on the domains
where they are defined, form the **characteristic flow** of the transport
field. Without uniqueness there are characteristics, but no single-valued
characteristic flow.
