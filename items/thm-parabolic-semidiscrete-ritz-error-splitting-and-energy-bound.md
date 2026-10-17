---
id: thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound
kind: theorem
title: Semidiscrete Ritz error splitting and energy estimate
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-parabolic-evolution-triple-and-energy-space
  - lem-parabolic-energy-pairing-and-trace
  - lem-parabolic-discrete-energy-identity
  - lem-parabolic-projection-time-product-rule
  - thm-parabolic-variational-wellposedness-and-energy-stability
  - thm-parabolic-fem-semidiscrete-existence-energy
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-parabolic-ritz-projection
  - lem-parabolic-ritz-projection-well-defined
  - thm-zero-boundary-piecewise-polynomials-in-w10p
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12, §12.2, PDF pp. 104–105: the semidiscrete Galerkin method, Ritz projection, and time-dependent error equation."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§2.4, pp. 5–6: the semidiscrete Ritz residual and the initial projection error."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice and the bounded polyhedral mesh setting, spaces,
form and data of [[thm-parabolic-fem-semidiscrete-existence-energy]]. Let $u$
be the continuous solution supplied by
[[thm-parabolic-variational-wellposedness-and-energy-stability]] on the same
evolution triple and let $u_h$ be the corresponding semidiscrete solution.
For this error identity, assume the additional regularity $u\in H^1(0,T;V)$,
meaning $u,u'\in L^2(0,T;V)$ with the unique continuous representative
supplied by [[lem-parabolic-projection-time-product-rule]]. Let
$P_h:V\to V_h$ be a fixed bounded linear
comparison map, define
$$\rho(t)=P_hu(t)-u(t),\qquad\theta(t)=u_h(t)-P_hu(t),$$
and let $\mathcal R_h(t)\in V_h^*$ be the full residual
$$\mathcal R_h(t)(v_h)=(\rho'(t),v_h)_H+a(t;\rho(t),v_h).$$
Then for almost every $t$ and every $v_h\in V_h$,
$$(\theta'(t),v_h)_H+a(t;\theta(t),v_h)=-\mathcal R_h(t)(v_h),$$
and for every $t\in[0,T]$,
$$\|\theta(t)\|_H^2+\alpha\int_0^t\|\theta(s)\|_V^2ds \le\|\theta(0)\|_H^2+ \alpha^{-1}\int_0^t\|\mathcal R_h(s)\|_{V_h^*}^2ds.$$

The same identity and energy bound hold for an operator-norm $C^1$
time-dependent comparison map $P_h(t):V\to V_h$, with its time derivative
included in $\rho'$ as stated below. For a time-independent form and the
Ritz projection $P_h=R_h$ from
[[def-parabolic-ritz-projection]], Galerkin orthogonality makes
$a(\rho(t),v_h)=0$, so the residual is exactly
$(R_hu'(t)-u'(t),v_h)_H$. If a time-dependent comparison $P_h(t)$ is used,
it must be operator-norm $C^1$; then
$\rho'=P_h'(t)u+P_h(t)u'-u'$, including the projection-derivative term.
For a measurable time-dependent form with a fixed comparison map, no
orthogonality is inferred and the full displayed residual remains.

## Facts & Assumptions

**Given:** Countable Choice; the bounded polyhedral mesh, $W^{1,2}$-norm
spaces and data from the semidiscrete existence theorem; the continuous and
semidiscrete solutions to that same problem; $u\in H^1(0,T;V)$; and a fixed
bounded linear map $P_h:V\to V_h$ (or the stated $C^1$ family).

[F1] The continuous solution satisfies
$\langle u',v\rangle+a(t;u,v)=\langle f,v\rangle$; under the additional
$u'\in L^2(0,T;V)$ assumption, the canonical embedding identifies
$\langle u',v_h\rangle$ with $(u',v_h)_H$
([[thm-parabolic-variational-wellposedness-and-energy-stability]],
[[def-parabolic-evolution-triple-and-energy-space]]).

[F2] The semidiscrete solution satisfies the same variational equation for
all $v_h\in V_h$ ([[thm-parabolic-fem-semidiscrete-existence-energy]]).

[F3] A fixed Ritz projection is bounded and linear, and its defining
orthogonality is $a(R_h w,v_h)=a(w,v_h)$
([[def-parabolic-ritz-projection]],
[[lem-parabolic-ritz-projection-well-defined]]).

[F4] Every $H^1(0,T;X)$ input has a unique continuous representative, and
fixed or operator-norm $C^1$ comparison maps obey the stated weak
time-derivative product rules
([[lem-parabolic-projection-time-product-rule]]).

[F5] For a $W(0,T;V)$ function,
$\frac12(\|z(t)\|_H^2-\|z(0)\|_H^2)=
\int_0^t\langle z',z\rangle$
([[lem-parabolic-energy-pairing-and-trace]]).

[F6] The form satisfies $|a(t;x,y)|\le M\|x\|_V\|y\|_V$ and
$a(t;x,x)\ge\alpha\|x\|_V^2$
([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[A1] Countable Choice is inherited from the continuous and finite-element
existence suppliers ([[def-countable-choice]]).

## Proof

1.1 The fixed-map product rule [F4] gives $(P_hu)'=P_hu'$, so $\rho'=P_hu'-u'\in L^2(0,T;V)$. For a $C^1$ family it gives instead $\rho'=P_h'u+P_hu'-u'$. Also $\theta'=u_h'-(P_hu)'$. The residual is an element of $L^2(0,T;V_h^*)$: for each fixed $v_h$, approximate the strongly measurable $\rho$ by simple $V$-valued functions. Scalar measurability of $a(t;w,v_h)$ for each fixed $w$ makes the corresponding simple-function pairings measurable, and the bound [F6] lets their pointwise limits pass to $a(t;\rho(t),v_h)$. The first term $(\rho',v_h)_H$ is measurable as well. Because $V_h$ is finite-dimensional, measurability on a finite basis gives strong measurability of the $V_h^*$-valued residual. Moreover, $\|\mathcal R_h(t)\|_{V_h^*} \le c_i^2\|\rho'(t)\|_V+M\|\rho(t)\|_V,$ so it is square-integrable. [F4, F6, given, construct]

2.1 Subtract [F1] from [F2]. Since $u_h-u=\theta+\rho$ and $u_h'-u'=\theta'+\rho'$, the result for each $v_h$ is $(\theta',v_h)_H+a(t;\theta,v_h) =-(\rho',v_h)_H-a(t;\rho,v_h) =-\mathcal R_h(t)(v_h).$ This uses only the variational equations; no commutation of the full evolution operator with $P_h$ is assumed. [A1, F1, F2, step 1.1, algebra]

3.1 Put $v_h=\theta(t)$ in step 2.1 and use [F5]. Coercivity from [F6] and Cauchy–Schwarz/Young give $\frac12\|\theta(t)\|_H^2- \frac12\|\theta(0)\|_H^2+ \frac\alpha2\int_0^t\|\theta(s)\|_V^2ds \le\frac1{2\alpha}\int_0^t\|\mathcal R_h(s)\|_{V_h^*}^2ds.$ Multiplying by $2$ proves the asserted energy bound. [F5, F6, step 2.1, algebra]

4.1 In the time-independent Ritz case, [F3] gives $a(\rho(t),v_h)=a(R_hu(t)-u(t),v_h)=0$ for every $v_h$. By [F4], $\rho'=R_hu'-u'$, which yields the special residual stated above. In the time-dependent case this cancellation has not been assumed, so step 2.1 retains the complete residual, including $P_h'u$ when the comparison varies. [F3, F4, step 2.1, given] ∎