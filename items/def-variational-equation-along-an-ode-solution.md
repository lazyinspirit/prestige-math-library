---
id: def-variational-equation-along-an-ode-solution
kind: definition
title: "The variational equation along an ODE solution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-first-order-ode-initial-value-problem-and-solution,
       def-jacobian-matrix-and-gradient,
       def-ck-and-multi-index-notation-in-several-variables]
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
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.3, Lemma 10.6"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Definition

Let $D\subseteq\mathbb R\times\mathbb R^n$ be open, let
$F:D\to\mathbb R^n$ be $C^1$ in the state variable, let
$x:J\to\mathbb R^n$ be a solution of

$$x'(t)=F(t,x(t))$$

on an interval $J$, and let $t_0\in J$. The **variational equation along $x$**
is the linear matrix ODE

$$A'(t)=D_xF(t,x(t))\,A(t),\qquad A(t_0)=I_n,$$

where $D_xF(t,x(t))$ is the Jacobian matrix of partial derivatives of the state
variables, read via [[def-jacobian-matrix-and-gradient]] from the
$C^1$ regularity recorded in [[def-ck-and-multi-index-notation-in-several-variables]].
Its solutions are matrix-valued curves $A:J\to M_n(\mathbb R)$.

For an autonomous equation $x'=V(x)$ with $V$ of class $C^1$, this becomes

$$A'(t)=DV(x(t))\,A(t),\qquad A(t_0)=I_n.$$

It is the linearized equation governing first-order variation of nearby
solutions with respect to their initial data.
