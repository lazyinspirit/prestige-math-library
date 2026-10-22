---
id: alg-gr-fx-periodic-wave-leapfrog
kind: algorithm
title: "A finite periodic scalar-wave benchmark"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps:
  - def-gr-fx-fixed-gauge-data-topology
dependency_roles:
  def-gr-fx-fixed-gauge-data-topology: mathematical-premise
physical_scope: "A nondimensionalized, one-dimensional scalar wave benchmark on a periodic grid. It is not an Einstein evolution system, a production numerical-relativity solver, or an empirical model."
sources:
  references:
    - title: "Gilbert Strang, Mathematical Methods for Engineers II, MIT OpenCourseWare 18.086, Spring 2006, §5.3, complete 11-page lecture note"
      url: "https://ocw.mit.edu/courses/18-086-mathematical-methods-for-engineers-ii-spring-2006/8eaa23367474c809cc0816f24fdacc7f_am53.pdf"
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, unpublished text (1996), Chapter 3, complete 37-page author PDF"
      url: "https://people.maths.ox.ac.uk/trefethen/3all.pdf"
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, unpublished text (1996), Chapter 4, complete 40-page author PDF"
      url: "https://people.maths.ox.ac.uk/trefethen/4all.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Use the first circle factor of the fixed periodic three-torus from the earlier
fixed-gauge data definition. This item is a separate nondimensionalized scalar
model: both the spatial coordinate $x$ and time $t$ are dimensionless, the
period is $2\pi$, and the model wave speed is $1$. Let $N\ge3$ be an integer,
$h:=2\pi/N$, and $x_j:=jh\pmod{2\pi}$ for $j\in\mathbb Z/N\mathbb Z$. A
periodic grid function is an $N$-tuple $u=(u_j)_{j\in\mathbb Z/N\mathbb Z}$ of
real numbers. Define the centered periodic second-difference operator
$$
(D_hu)_j:=\frac{u_{j+1}-2u_j+u_{j-1}}{h^2},
$$
where subscripts are reduced modulo $N$.

The algorithm takes as input such arrays $u^0,v^0$, a real time step $k>0$,
and an integer $n_{\max}\ge1$. It sets
$$
u^1:=u^0+kv^0+\frac{k^2}{2}D_hu^0,
$$
then, for each integer $n=1,\ldots,n_{\max}-1$, computes
$$
u^{n+1}_j:=2u^n_j-u^{n-1}_j+k^2(D_hu^n)_j \qquad(j\in\mathbb Z/N\mathbb Z).
$$
It outputs $(u^0,u^1,\ldots,u^{n_{\max}})$. All operations here are exact real
arithmetic. No rounding-error model or claim about a floating-point
implementation is part of the definition.

## Definition references

[[def-gr-fx-fixed-gauge-data-topology]]

## Remarks

The recurrence is the centered finite-difference model for the scalar equation
$u_{tt}=u_{xx}$. It is a one-dimensional diagnostic benchmark only; its
stability properties do not establish convergence of a discretization of the
Einstein equations. The initialization uses the second-order time expansion
with the discrete spatial operator. The time step and mesh spacing are
nondimensional, so their ratio has no unit conversion hidden in it.
