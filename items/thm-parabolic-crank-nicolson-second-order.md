---
id: thm-parabolic-crank-nicolson-second-order
kind: theorem
title: Second-order Crank–Nicolson nodal error for exact initial data under H2 time regularity
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-parabolic-crank-nicolson-cg1
  - lem-parabolic-discrete-energy-identity
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - thm-parabolic-finite-dimensional-measurable-ode
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12, §§12.1–12.2, PDF pp. 104–106: Crank–Nicolson and the cG(1) variational method."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§3.1, pp. 9–10: Crank–Nicolson stability and second-order consistency for sufficiently smooth solutions."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Let $V_h$ be a finite-dimensional conforming subspace of a real evolution
triple. Assume a time-independent real bilinear form $a$ is bounded by $M$
and coercive by $\alpha>0$, the load $f\in L^2(0,T;V_h^*)$, and the
partition and data of [[alg-parabolic-crank-nicolson-cg1]]. Every time step
has a unique solution and, with
$U^{\mathrm{mid},j}=(U^j+U^{j-1})/2$,
$$\max_{0\le m\le N}\|U^m\|_H^2\le C_U,\qquad \alpha\sum_{j=1}^N\tau_j\|U^{\mathrm{mid},j}\|_V^2\le C_U, \quad C_U:=\|U^0\|_H^2+\alpha^{-1}\|f\|_{L^2(0,T;V_h^*)}^2.$$
If the exact semidiscrete solution $u_h$ from
[[thm-parabolic-finite-dimensional-measurable-ode]] satisfies
$u_h\in H^2(0,T;V_h)$, meaning $u_h,u_h',u_h''\in L^2(0,T;V_h)$ with weak
time derivatives. Under this regularity assumption, set
$e^j=U^j-u_h(t_j)$, $\tau_{\max}=\max_j\tau_j$, and
$$C_e:=\|e^0\|_H^2+ \frac{M^2}{16\alpha}\tau_{\max}^4 \|u_h''\|_{L^2(0,T;V_h)}^2.$$
Then the error satisfies the separate bounds
$$\max_{0\le m\le N}\|e^m\|_H^2\le C_e,\qquad \alpha\sum_{j=1}^N\tau_j \left\|\frac{e^j+e^{j-1}}2\right\|_V^2\le C_e.$$
Thus exact initial projection $U^0=u_h(0)$ gives second-order maximum nodal
error. The regularity hypothesis is on the time-dependent semidiscrete
solution and is not implied by the method definition.

## Facts & Assumptions

**Given:** A finite-dimensional real conforming subspace $V_h$, the autonomous bounded/coercive form, $f\in L^2(0,T;V_h^*)$, initial value $U^0$, a finite time partition, and—only for the error estimate—an exact semidiscrete solution $u_h\in H^2(0,T;V_h)$.

[F1] Crank–Nicolson uses the average of the endpoint states in the time-independent form and the interval-average load ([[alg-parabolic-crank-nicolson-cg1]]).

[F2] The exact semidiscrete trajectory solves the Galerkin ODE and belongs to $H^1(0,T;V_h)$, the space of absolutely continuous coefficient functions with function and derivative in $L^2$ ([[thm-parabolic-finite-dimensional-measurable-ode]]).

[F3] The difference quotient identity is $2(x-y,x)_H=\|x\|_H^2-\|y\|_H^2+\|x-y\|_H^2$ ([[lem-parabolic-discrete-energy-identity]]).

[F4] The form is bounded by $M$ and coercive by $\alpha$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

## Proof


1.1 Fix a finite basis of $V_h$ and express one CN step as a square linear system. Its bilinear form is $b_j(x,v)=\tau_j^{-1}(x,v)_H+\frac12a(x,v)$. If the homogeneous system has solution $x$, testing with $x$ gives $\tau_j^{-1}\|x\|_H^2+\frac12a(x,x)=0$. Coercivity [F4] implies $x=0$; the square matrix is therefore invertible. Thus the step has exactly one solution by finite-dimensional linear algebra, without a choice axiom. [F1, F4, given, construct]

1.2 Integrating the semidiscrete equation from [F2] over $I_j$ gives the exact step with $u_h$ replaced in the form by its time average $\bar u_h^j=\tau_j^{-1}\int_{I_j}u_h(t)dt$. Subtract it from the CN equation. With $e^j=U^j-u_h(t_j)$ and $r_j=\bar u_h^j-(u_h(t_j)+u_h(t_{j-1}))/2$, the result is $\tau_j^{-1}(e^j-e^{j-1},v_h)_H+ a\!\left(\frac{e^j+e^{j-1}}2,v_h\right)=a(r_j,v_h).$ [F1, F2, given, algebra]

2.1 Test the CN equation by $U^{\mathrm{mid},j}$ and multiply by $2\tau_j$. The midpoint identity follows from [F3], since $2(U^j-U^{j-1},U^{\mathrm{mid},j})_H =2(U^j-U^{j-1},U^j)_H-\|U^j-U^{j-1}\|_H^2$. Coercivity and Young's inequality give $\|U^j\|_H^2-\|U^{j-1}\|_H^2+ \alpha\tau_j\|U^{\mathrm{mid},j}\|_V^2 \le\alpha^{-1}\tau_j\|\bar f_j\|_{V_h^*}^2.$ Sum through any $m$ and apply Jensen to obtain $\|U^m\|_H^2+\alpha\sum_{j=1}^m\tau_j \|U^{\mathrm{mid},j}\|_V^2\le C_U.$ Taking the maximum of the endpoint term and setting $m=N$ for the sum prove the separate stability bounds. [F1, F3, F4, step 1.1, algebra]

2.2 On $I_j=[a,b]$ of length $\tau_j$, let $L_j$ be the affine interpolant of $u_h(a),u_h(b)$. Since $r_j=\tau_j^{-1}\int_{I_j}(u_h-L_j)$, solve $w''=u_h''$ with $w(a)=w(b)=0$ by two integrations. The Green kernel for $-d^2/dt^2$ with zero endpoint values is $G_j(t,s)=\frac{(\min(t,s)-a)(b-\max(t,s))}{\tau_j}.$ It has zero endpoint values and derivative jump $-1$ at $t=s$, so $w(t)=-\int_a^bG_j(t,s)u_h''(s)ds$; the difference between this $w$ and $u_h-L_j$ has second derivative zero and zero endpoint values, hence is zero. Therefore $u_h(t)-L_j(t)=-\int_a^bG_j(t,s)u_h''(s)\,ds.$ The kernel satisfies $0\le G_j(t,s)\le\tau_j/4$. Therefore $\|r_j\|_V\le\frac1{\tau_j}\int_a^b\|u_h''(s)\|_V \left(\int_a^bG_j(t,s)\,dt\right)ds \le\frac{\tau_j}{4}\int_a^b\|u_h''(s)\|_Vds \le\frac{\tau_j^{3/2}}4\|u_h''\|_{L^2(I_j;V)}$ by Tonelli's theorem for the nonnegative integrand and Cauchy–Schwarz. Consequently $\sum_j\tau_j\|r_j\|_V^2 \le\frac{\tau_{\max}^4}{16}\|u_h''\|_{L^2(0,T;V)}^2.$ [step 1.2, given, algebra]

3.1 Test the error equation from step 1.2 by $e^{\mathrm{mid},j}=(e^j+e^{j-1})/2$, multiply by $2\tau_j$, and use the midpoint consequence of [F3]. Coercivity and Young's inequality give $\|e^j\|_H^2-\|e^{j-1}\|_H^2+ \alpha\tau_j\|e^{\mathrm{mid},j}\|_V^2 \le\frac{M^2}{\alpha}\tau_j\|r_j\|_V^2.$ Sum through any $m$ and apply step 2.2 to obtain $\|e^m\|_H^2+\alpha\sum_{j=1}^m\tau_j \|e^{\mathrm{mid},j}\|_V^2\le C_e.$ Taking the maximum of the endpoint term and setting $m=N$ for the sum prove the separate error bounds. [F3, F4, step 1.2, step 2.2, algebra] ∎
