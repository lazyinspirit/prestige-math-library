---
id: alg-parabolic-crank-nicolson-cg1
kind: algorithm
title: Crank–Nicolson and cG(1) for an autonomous parabolic form
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-parabolic-evolution-triple-and-energy-space
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
justified_by:
  - thm-parabolic-crank-nicolson-second-order
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12, §§12.1–12.2, PDF pp. 104–106: the Crank–Nicolson step and its cG(1) variational form."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§3.1, pp. 9–10: the Crank–Nicolson difference equation and discrete energy identity."
verification: {}
---

## Definition

Input a finite-dimensional conforming subspace $V_h\subset V$ with its
inherited $H$ inner product and $V$ norm; a finite-element use instantiates it
with a zero-boundary conforming polynomial space. Input also a final time
$T>0$, a finite partition
$0=t_0<\cdots<t_N=T$, a time-independent real bounded coercive
bilinear form $a$ on $V$, a load $f\in L^2(0,T;V^*)$, and $U^0\in V_h$.
Put $\bar f_j=\tau_j^{-1}\int_{t_{j-1}}^{t_j}f(t)\,dt$. For
$j=1,\ldots,N$, solve
$$\tau_j^{-1}(U^j-U^{j-1},v_h)_H+ a\!\left(\frac{U^j+U^{j-1}}2,v_h\right) =\langle\bar f_j,v_h\rangle\qquad(v_h\in V_h).$$
Return the nodal values and their continuous piecewise-linear interpolant.
There are no interior time jumps; the initial value is the supplied $U^0$.
The coefficient form is time-independent, while the load is averaged, so no
point value of an $L^2(V^*)$ equivalence class is used. Invalid inputs return
`invalid-input`; the well-definedness theorem proves that each indicated step
has a unique solution under the stated hypotheses.

For each interval, the same equation is the continuous-Galerkin $cG(1)$
equation with continuous piecewise-linear trial functions and constant test
functions: integrating $U'$ gives $U^j-U^{j-1}$, and integrating the linear
trial function in the time-independent form gives its midpoint value. Thus
this item asserts the $cG(1)$ equivalence only; it does not assert rates for
higher-degree $cG$ or discontinuous-Galerkin methods.
