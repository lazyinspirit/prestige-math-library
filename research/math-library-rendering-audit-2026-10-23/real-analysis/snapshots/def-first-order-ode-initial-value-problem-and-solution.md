---
id: def-first-order-ode-initial-value-problem-and-solution
kind: definition
title: "First-order systems, initial value problems, and solutions on intervals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-vector-valued-derivative-and-integral, def-interval]
justified_by: []
forward_refs: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
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

Let $D\subseteq\mathbb R\times\mathbb R^n$ be open, let $F:D\to\mathbb R^n$, and let $n\ge1$. The equation

$$x'(t)=F(t,x(t))$$

is a **first-order system**. An **initial value problem** consists of this equation and data $(t_0,x_0)\in D$, written $x(t_0)=x_0$.

A **solution on an interval** $I$ is a function $x:I\to\mathbb R^n$ such that $t_0\in I$, $(t,x(t))\in D$ for every $t\in I$, $x$ is differentiable on $I$ in the domain-relative sense of [[def-vector-valued-derivative-and-integral]], and

$$x(t_0)=x_0,\qquad x'(t)=F(t,x(t))\quad(t\in I).$$

Endpoints of $I$ use the corresponding one-sided, domain-relative derivative. A local solution is one whose interval contains a nondegenerate neighborhood of $t_0$ relative to the time projection of $D$.
