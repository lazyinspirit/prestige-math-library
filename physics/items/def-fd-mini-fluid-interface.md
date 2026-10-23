---
id: def-fd-mini-fluid-interface
kind: definition
title: "Smooth MINI observation interface"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-na-stokes-zero-mean-pressure-and-velocity-spaces
  - def-na-evolutionary-skew-convective-form
  - def-na-mini-element-p1-bubble-p1-spaces
  - def-na-discrete-weak-and-exact-divergence-free-spaces
  - def-na-mini-navier-stokes-backward-euler-scheme
  - def-countable-choice
dependency_roles:
  def-na-stokes-zero-mean-pressure-and-velocity-spaces: mathematical-premise
  def-na-evolutionary-skew-convective-form: mathematical-premise
  def-na-mini-element-p1-bubble-p1-spaces: mathematical-premise
  def-na-discrete-weak-and-exact-divergence-free-spaces: mathematical-premise
  def-na-mini-navier-stokes-backward-euler-scheme: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 54: Stokes equations: Stable pairs (I)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf
      locator: "§54.2, Lemma 54.5 and Remark 54.6, printed pp. 410–413: the P1-bubble/P1 MINI spaces, their uniform inf-sup stability, and stationary Stokes approximation; these do not assert the evolutionary errors below."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "§8.4.2 and §8.6.1, printed pp. 470–471 and 487–488: the two-dimensional MINI P1-bubble/P1 stability and stationary Stokes error context; no time-dependent pressure-observation estimate is imported."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Definition

Assume the Axiom of Countable Choice. Let $d\in\{2,3\}$, let $D\subset\mathbb R^d$ be a nonempty bounded connected Lipschitz polygonal or polyhedral open set, let $T>0$ and $\nu>0$, and let $\mathcal T_h$ be a conforming shape-regular affine simplicial mesh of $D$. Let $0=t_0<t_1<\cdots<t_N=T$ be a finite time partition with $\tau_n=t_n-t_{n-1}>0$, and put $h=\max_{K\in\mathcal T_h}\operatorname{diam}(K)$ and $\tau_{\max}=\max_n\tau_n$.

Write $V=H^1_0(D;\mathbb R^d)$, $Q=L^2_0(D)=\{q\in L^2(D):\int_Dq=0\}$, and $V_\sigma=\{v\in V:\operatorname{div}v=0\}$. Let $S^1_h$ be the continuous piecewise-affine scalar space on $\mathcal T_h$. For each simplex $K$ with barycentric coordinates $\lambda_{K,0},\ldots,\lambda_{K,d}$, set $b_K=(d+1)^{d+1}\prod_{j=0}^d\lambda_{K,j}$ on $K$ and extend $b_K$ by zero outside $K$. The conforming MINI spaces are
$$V_h=[S^1_h\cap H^1_0(D)]^d\oplus\bigoplus_{K\in\mathcal T_h}b_K\mathbb R^d,\qquad Q_h=S^1_h\cap Q,$$
and their weak divergence kernel is $Z_h=\{v_h\in V_h:b(v_h,q_h)=0\text{ for every }q_h\in Q_h\}$. Let $P_{Z_h}$ denote the $L^2(D)^d$-orthogonal projection onto this finite-dimensional subspace.

For $v,w\in V$, set $\varepsilon(v)=(\nabla v+\nabla v^{\mathsf T})/2$, $a_\nu(v,w)=2\nu\int_D\varepsilon(v):\varepsilon(w)\,dx$, and $b(v,q)=-\int_Dq\,\operatorname{div}v\,dx$. For $a,v,w\in V$, use the real skew convective form
$$c(a;v,w)=\frac12\int_D\big((a\cdot\nabla)v\cdot w-(a\cdot\nabla)w\cdot v\big)\,dx.$$
Thus $c(a;v,w)=-c(a;w,v)$ and $c(a;v,v)=0$.

A smooth MINI interface consists of a forcing $f\in L^2(0,T;L^2(D)^d)$, an exact no-slip velocity-pressure pair $(u,p)$, and a mixed backward Euler MINI solution $(u_h^n,p_h^n)_{n=0}^N$ with the following conditions. The exact pair has $u\in W^{1,\infty}(0,T;H^2(D)^d\cap V_\sigma)$, $p\in W^{1,\infty}(0,T;H^1(D)\cap Q)$, and satisfies
$$(\partial_tu(t),v)_{L^2}+a_\nu(u(t),v)+c(u(t);u(t),v)+b(v,p(t))=(f(t),v)_{L^2},\qquad b(u(t),q)=0$$
for every $v\in V$, $q\in Q$, and almost every $t\in(0,T)$. The continuous representatives of $u$ and $p$ are used at the time nodes, and $u_0=u(0)$. The discrete initial value is $u_h^0=P_{Z_h}u_0$. With $f_h^n=\tau_n^{-1}\int_{t_{n-1}}^{t_n}f(t)\,dt$, each $u_h^n\in V_h$ and $p_h^n\in Q_h$ satisfies
$$\left(\frac{u_h^n-u_h^{n-1}}{\tau_n},v_h\right)_{L^2}+a_\nu(u_h^n,v_h)+c(u_h^n;u_h^n,v_h)+b(v_h,p_h^n)=(f_h^n,v_h)_{L^2},\qquad b(u_h^n,q_h)=0$$
for every $v_h\in V_h$, $q_h\in Q_h$, and $1\le n\le N$.

For a family of bounded real-linear velocity sensors $\ell_n\in V^*$, define the endpoint-sampled exact and discrete observations by
$$\mathcal O(\ell;u)=\sum_{n=1}^N\tau_n\ell_n(u(t_n)),\qquad \mathcal O_h(\ell;u_h)=\sum_{n=1}^N\tau_n\ell_n(u_h^n).$$
Define the accumulated exact and discrete pressures by $P(t)=\int_0^tp(s)\,ds\in Q$ and $P_h^0=0$, $P_h^m=\sum_{n=1}^m\tau_np_h^n$. Let $\bar p_h(t)=p_h^n$ on $(t_{n-1},t_n]$. For $\xi\in Q$ and $\eta\in C_c^\infty(0,T)$, define the accumulated-pressure observation $(P(t_m)-P_h^m,\xi)_{L^2}$ and the time-tested pressure observation $\left(\int_0^T(p(t)-\bar p_h(t))\eta(t)\,dt,\xi\right)_{L^2}$. The latter is an integrated pressure functional; it is not a pointwise-in-time pressure value. This definition supplies inputs and observables only and asserts no error rate or solver-existence result.

## Definition references

[[def-na-stokes-zero-mean-pressure-and-velocity-spaces|Stokes velocity and pressure spaces]]

[[def-na-evolutionary-skew-convective-form|real skew convective form]]

[[def-na-mini-element-p1-bubble-p1-spaces|conforming P1-bubble/P1 MINI spaces]]

[[def-na-discrete-weak-and-exact-divergence-free-spaces|weak MINI divergence kernel]]

[[def-na-mini-navier-stokes-backward-euler-scheme|mixed backward Euler MINI scheme]]

[[def-countable-choice|Axiom of Countable Choice]]

[Guermond, Chapter 54, §54.2](https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf)

[Boffi, Brezzi, and Fortin, §§8.4.2 and 8.6.1](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf)
