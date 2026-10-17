---
id: alg-parabolic-backward-euler-averaged-forms
kind: algorithm
title: Backward Euler FEM with interval-averaged forms and load
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-parabolic-evolution-triple-and-energy-space
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
justified_by:
  - thm-parabolic-backward-euler-error-and-reconstruction
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12, §12.1, PDF pp. 104–105: the implicit Euler Rothe step with a spatial finite-element space."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§3.1, pp. 9–10: the backward Euler method and its discrete energy estimate."
verification: {}
---

## Definition

Input a finite-dimensional conforming subspace $V_h\subset V$ with its
inherited $H$ inner product and $V$ norm; a finite-element use instantiates it
with a zero-boundary conforming polynomial space. Input also a final time
$T>0$, a finite partition
$0=t_0<t_1<\cdots<t_N=T$, a measurable family of bounded coercive
forms $a(t;\cdot,\cdot)$, $f\in L^2(0,T;V^*)$, and an initial value
$U^0\in V_h$. For
$I_j=(t_{j-1},t_j)$ and $\tau_j=t_j-t_{j-1}$, form scalar averages
$$\bar a_j(v,w)=\tau_j^{-1}\int_{I_j}a(t;v,w)\,dt,\qquad \bar f_j=\tau_j^{-1}\int_{I_j}f(t)\,dt.$$
For $j=1,\ldots,N$, solve for $U^j\in V_h$ from
$$\tau_j^{-1}(U^j-U^{j-1},v_h)_H+ \bar a_j(U^j,v_h)=\langle\bar f_j,v_h\rangle_{V^*,V} \qquad(v_h\in V_h).$$
Return the nodes $U^0,\ldots,U^N$, the piecewise-constant function
$\bar U(t)=U^j$ on each open interval $(t_{j-1},t_j)$ (endpoint values do
not affect the $L^2$ function), and the continuous piecewise
affine reconstruction $\widehat U$ joining consecutive nodes. The initial
value is the separately supplied $U^0$; the initial jump is
$U^1-U^0$, and subsequent jumps are $U^j-U^{j-1}$. Invalid spaces, partitions,
or form/data hypotheses return `invalid-input`; the well-definedness theorem
proves that each indicated solve has a unique answer under the stated
hypotheses. Because coefficients and loads are averaged,
this procedure is defined on their almost-everywhere equivalence classes and
does not sample a representative at a point. For a time-dependent form this
is the averaged-coefficient backward Euler method; with piecewise-constant
time trials it is also the $dG(0)$ step.
