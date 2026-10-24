---
id: alg-parabolic-backward-euler-averaged-forms
kind: algorithm
title: Backward Euler FEM with interval-averaged forms and load
status: published
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

Input a real evolution triple $(V,H,V^*)$ and a finite-dimensional conforming
subspace $V_h\subset V$ with its inherited $H$ inner product and $V$ norm; a
finite-element use instantiates it with a zero-boundary conforming polynomial
space. Input also a final time $T>0$, a finite partition
$0=t_0<t_1<\cdots<t_N=T$, and a real bilinear form family
$a_h(t;\cdot,\cdot):V_h\times V_h\to\mathbb R$ such that
$t\mapsto a_h(t;v_h,w_h)$ is measurable for each fixed $v_h,w_h\in V_h$.
There must be constants $0\le M<\infty$, $\alpha>0$ and one null set
$E\subset(0,T)$ such that
$$|a_h(t;v_h,w_h)|\le M\|v_h\|_V\|w_h\|_V,\qquad a_h(t;v_h,v_h)\ge\alpha\|v_h\|_V^2\qquad(v_h,w_h\in V_h,\ t\in(0,T)\setminus E).$$
The same exceptional set and constants apply to all pairs. Input a strongly
measurable load $g\in L^2(0,T;V_h^*)$ and an initial value $U^0\in V_h$. A
finite-element load $f\in L^2(0,T;V^*)$ is supplied as its restriction
$g(t)=f(t)|_{V_h}$. For $I_j=(t_{j-1},t_j)$ and $\tau_j=t_j-t_{j-1}$,
form the scalar bilinear and Bochner load averages
$$\bar a_j(v_h,w_h)=\tau_j^{-1}\int_{I_j}a_h(t;v_h,w_h)\,dt,\qquad \bar g_j=\tau_j^{-1}\int_{I_j}g(t)\,dt.$$
For $j=1,\ldots,N$, solve for $U^j\in V_h$ from
$$\tau_j^{-1}(U^j-U^{j-1},v_h)_H+ \bar a_j(U^j,v_h)=\langle\bar g_j,v_h\rangle_{V_h^*,V_h} \qquad(v_h\in V_h).$$
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
