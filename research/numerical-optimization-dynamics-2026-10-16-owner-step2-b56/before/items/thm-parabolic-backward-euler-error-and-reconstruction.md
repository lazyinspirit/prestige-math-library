---
id: thm-parabolic-backward-euler-error-and-reconstruction
kind: theorem
title: Backward Euler stability, first-order error, and reconstruction bounds
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-parabolic-backward-euler-averaged-forms
  - lem-parabolic-discrete-energy-identity
  - thm-parabolic-finite-dimensional-measurable-ode
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12, §§12.1–12.2, PDF pp. 104–106: implicit Euler steps and their Galerkin interpretation."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§3.1, pp. 9–10: backward Euler stability and first-order time consistency."
verification: {}
---

## Statement

Let $V_h$ be a finite-dimensional conforming subspace of a real evolution
triple. Let $a(t;\cdot,\cdot):V_h\times V_h\to\mathbb R$ be real bilinear
and measurable in $t$ for each fixed pair. Assume there is one null set
$E\subset(0,T)$ outside which, with common constants $0\le M<\infty$ and
$\alpha>0$,
$$|a(t;v_h,w_h)|\le M\|v_h\|_V\|w_h\|_V,\qquad
a(t;v_h,v_h)\ge\alpha\|v_h\|_V^2\qquad(v_h,w_h\in V_h).$$
Let $f\in L^2(0,T;V_h^*)$. Let
$u_h\in H^1(0,T;V_h)$ be the semidiscrete solution from
[[thm-parabolic-finite-dimensional-measurable-ode]]. On a finite partition
$0=t_0<\cdots<t_N=T$, put $\tau_j=t_j-t_{j-1}$ and
$\tau_{\max}=\max_j\tau_j$. For the interval-averaged backward Euler values
$U^j$ from [[alg-parabolic-backward-euler-averaged-forms]], define
$e^j=U^j-u_h(t_j)$ and let $\widehat U$ be the affine reconstruction, with
$\overline U(t)=U^j$ on $(t_{j-1},t_j)$. Every step has a unique solution.
With
$$C_U=\|U^0\|_H^2+\alpha^{-1}\|f\|_{L^2(0,T;V_h^*)}^2,$$
the separate maximum and cumulative bounds are
$$\max_{0\le m\le N}\|U^m\|_H^2\le C_U,\qquad \sum_{j=1}^N\|U^j-U^{j-1}\|_H^2+ \alpha\sum_{j=1}^N\tau_j\|U^j\|_V^2\le C_U.$$
The reconstruction satisfies
$$\|\widehat U'\|_{L^2(0,T;V_h^*)}^2 \le2\|f\|_{L^2(V_h^*)}^2+2M^2\|\overline U\|_{L^2(V)}^2,$$
$$\|\widehat U-\overline U\|_{L^2(0,T;V_h^*)}^2 \le\frac{c_i^2\tau_{\max}}3 \sum_{j=1}^N\|U^j-U^{j-1}\|_H^2,$$
where $c_i=\|V\hookrightarrow H\|$. For the nodal error, define
$$C_e=\|e^0\|_H^2+ \frac{M^2}{\alpha}\tau_{\max}^2 \|u_h'\|_{L^2(0,T;V_h)}^2.$$
Then the error obeys the separate bounds
$$\max_{0\le m\le N}\|e^m\|_H^2\le C_e,\qquad \alpha\sum_{j=1}^N\tau_j\|e^j\|_V^2\le C_e.$$
Thus exact initial projection $U^0=u_h(0)$ gives first-order maximum nodal
error. The reconstruction estimates provide bounds for later compactness
arguments; they do not themselves assert compactness.

## Facts & Assumptions

**Given:** A finite-dimensional conforming subspace $V_h$, the measurable
bounded/coercive form, $f$, the semidiscrete trajectory $u_h$, a finite time
partition, and $U^0\in V_h$.

[F1] Backward Euler uses interval-average forms and load; with the algorithm's
load $g=f$, its step equation is the displayed variational equation
([[alg-parabolic-backward-euler-averaged-forms]]).

[F2] The exact finite-dimensional semidiscrete trajectory exists in
$H^1(0,T;V_h)$ and satisfies the variational equation
([[thm-parabolic-finite-dimensional-measurable-ode]]).

[F3] $2(x-y,x)_H=\|x\|_H^2-\|y\|_H^2+\|x-y\|_H^2$
([[lem-parabolic-discrete-energy-identity]]).

[F4] The form is bounded by $M$ and coercive by $\alpha$
([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

## Proof


1.1 Fix a finite basis of $V_h$ and write the $j$th variational step as a square linear system for the coefficients of $U^j$. If its homogeneous system has solution $x\in V_h$, testing by $x$ gives $\tau_j^{-1}\|x\|_H^2+\bar a_j(x,x)=0$. Coercivity [F4] implies $x=0$. Thus the square matrix has zero kernel and is invertible, proving a unique solution at each step without a choice axiom. [F1, F4, given, construct]

1.2 Integrate the semidiscrete equation [F2] over $I_j$ and subtract it from the backward Euler step. With $e^j=U^j-u_h(t_j)$, this gives $\tau_j^{-1}(e^j-e^{j-1},v_h)_H+\bar a_j(e^j,v_h)=r_j(v_h),$ where $r_j(v_h)=\tau_j^{-1}\int_{I_j} a(t;u_h(t)-u_h(t_j),v_h)\,dt.$ The fundamental theorem of calculus in finite-dimensional $V_h$ yields $\|r_j\|_{V_h^*}\le M\int_{I_j}\|u_h'(s)\|_{V_h}ds$. Cauchy–Schwarz gives $\sum_j\tau_j\|r_j\|_{V_h^*}^2\le M^2\tau_{\max}^2\|u_h'\|_{L^2(V_h)}^2$. [F1, F2, F4, given, algebra]

2.1 Test the step equation with $U^j$, multiply by $2\tau_j$, use [F3], and bound $2\bar f_j(U^j)$ by $\alpha\|U^j\|_V^2+\alpha^{-1}\|\bar f_j\|_{V_h^*}^2$. Summing and applying Jensen's inequality gives, for every $m$, $\|U^m\|_H^2+\sum_{j=1}^m\|U^j-U^{j-1}\|_H^2+ \alpha\sum_{j=1}^m\tau_j\|U^j\|_V^2\le C_U.$ Taking the maximum of the endpoint term over $m$ proves the maximum bound; setting $m=N$ proves the cumulative bound. [F1, F3, F4, step 1.1, algebra]

3.1 On $(t_{j-1},t_j)$, $\widehat U'=(U^j-U^{j-1})/\tau_j$ and the step equation gives $\widehat U'=\bar f_j-\bar A_jU^j$ in $V_h^*$, where $\bar A_j$ is the averaged form operator. Its norm is at most $M\|U^j\|_V$, proving the derivative bound by squaring and integrating. Also $\widehat U(t)-U^j=(1-s)(U^{j-1}-U^j)$ with $s=(t-t_{j-1})/\tau_j$; integrating $(1-s)^2$ gives $\tau_j/3$. Since $H\to V_h^*$ has norm at most $c_i$, this proves the reconstruction difference bound. [F1, F4, step 2.1, algebra]

4.1 Test the error equation from step 1.2 with $e^j$, multiply by $2\tau_j$, use [F3], and absorb $2\tau_j\|r_j\|\|e^j\|_{V_h}$ by $\alpha\tau_j\|e^j\|_V^2+ \alpha^{-1}\tau_j\|r_j\|_{V_h^*}^2$. Summing to any $m$ and using the residual estimate in step 1.2 gives, for every $m$, $\|e^m\|_H^2+\alpha\sum_{j=1}^m\tau_j\|e^j\|_V^2 \le\|e^0\|_H^2+\alpha^{-1}\sum_{j=1}^m\tau_j\|r_j\|_{V_h^*}^2\le C_e.$ Taking the maximum of the endpoint term and setting $m=N$ for the cumulative term prove the two asserted bounds. [F3, F4, step 1.2, algebra] ∎
