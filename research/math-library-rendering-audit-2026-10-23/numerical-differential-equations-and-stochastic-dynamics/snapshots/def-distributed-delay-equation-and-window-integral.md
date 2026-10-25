---
id: def-distributed-delay-equation-and-window-integral
kind: definition
title: "Distributed delays through a finite-window history integral"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-retarded-delay-equation-and-history-space
  - def-vector-valued-derivative-and-integral
  - thm-componentwise-limits-and-continuity
  - thm-composition-of-continuous-functions
  - thm-algebra-of-continuous-functions
  - thm-continuous-implies-integrable
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
    - title: "Roland Pulch, Equivalent Systems for Differential Equations with Polynomially Distributed Delay, version 3"
      url: "https://arxiv.org/pdf/2408.09861v3"
---

## Definition

Let $\tau>0$, $T>0$, $d\ge1$, let $K:[0,\tau]\to\mathbb R$ be continuous,
and let $y:[-\tau,T]\to\mathbb R^d$ be continuous. The **distributed-delay
history functional** is
$$\mathcal I_K[y](t):=\int_0^\tau K(\theta)y(t-\theta)\,d\theta\qquad(0\le t\le T).$$
The integral is the componentwise vector-valued Riemann integral of
[[def-vector-valued-derivative-and-integral]]. For each fixed $t\in[0,T]$,
$\theta\mapsto t-\theta$ is continuous and takes $[0,\tau]$ into
$[-\tau,T]$. By [[thm-componentwise-limits-and-continuity]], each component
$y_i$ is continuous. The map $\theta\mapsto t-\theta$ is polynomial, hence
continuous by [[thm-algebra-of-continuous-functions]], and
[[thm-composition-of-continuous-functions]] makes each scalar component
$\theta\mapsto y_i(t-\theta)$ continuous; [[thm-algebra-of-continuous-functions]]
then shows that multiplying by $K$ preserves continuity. Since $\tau>0$, each resulting component is
bounded and Riemann integrable on $[0,\tau]$ by
[[thm-continuous-implies-integrable]]. The componentwise definition therefore
makes the displayed vector-valued integral well-defined.
A **distributed-delay equation** uses this functional as an input, for example
with a continuous $f:U\times\mathbb R^d\times\mathbb R^d\to\mathbb R^d$,
where $U\subseteq\mathbb R$ is an open interval containing $[0,T]$.
For a path whose restriction to $[0,T]$ is continuously differentiable, the
equation is
$$y'(t)=f(t,y(t),\mathcal I_K[y](t)),\qquad 0\le t\le T.$$
Derivatives at $0$ and $T$ are taken from within $[0,T]$, as in
[[def-vector-valued-derivative-and-integral]].

The quadrature rule on the A page is the composite midpoint rule for this
specified finite window. Its history interpolation error and its quadrature
remainder are separate terms; no order is asserted for a kernel or history
without the regularity hypotheses stated in the quadrature lemma.
