---
id: def-autonomous-ordinary-differential-equation
kind: definition
title: "Autonomous ordinary differential equations"
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
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R^n$ be open and let $V:U\to\mathbb R^n$ be a map. The
equation

$$x'(t)=V(x(t))$$

is an **autonomous ordinary differential equation**: its right-hand side depends
on the state alone and not explicitly on time. An initial value problem for this
equation consists of a time $t_0\in\mathbb R$ and a state $x_0\in U$, written
$x(t_0)=x_0$.

This is the special case of [[def-first-order-ode-initial-value-problem-and-solution]]
obtained from the time-dependent field $F(t,x):=V(x)$ on
$\mathbb R\times U$. A solution on an interval $J$ is therefore a differentiable
curve $x:J\to U$ with $t_0\in J$ satisfying the equation at every $t\in J$ and
$x(t_0)=x_0$.

## Remarks

- **Autonomous does not mean globally defined.** The time variable ranges over
  all of $\mathbb R$, but the state space may be a proper open subset
  $U\subsetneq\mathbb R^n$, and even on all of $\mathbb R^n$ a solution can fail
  to exist for all time if the vector field grows too fast.

- **Initial time still matters.** For an autonomous system the translated curve
  $t\mapsto x(t+t_1)$ is again a solution wherever it is defined, but the local
  existence theorem is still an initial value theorem at a stated time $t_0$.
