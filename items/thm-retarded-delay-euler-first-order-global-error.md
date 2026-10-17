---
id: thm-retarded-delay-euler-first-order-global-error
kind: theorem
title: "Grid-aligned Euler has first-order error for retarded delays"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-retarded-delay-equation-and-history-space
  - lem-retarded-delay-gronwall-bound
  - thm-retarded-delay-method-of-steps-well-posedness
  - alg-retarded-delay-euler-with-stored-history
  - lem-piecewise-linear-delay-history-error
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-one-step-ode-method-local-defect-order-and-stability
  - thm-global-error-from-one-step-defect-and-stability
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-gronwall-integral-inequality
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-norm-inequality-for-the-vector-valued-integral
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. Zennaro, The Numerical Solution of Delay Differential Equations, Dobbiaco 2006 summer-school lecture notes"
      url: "https://dmi.units.it/dobbiaco/pre2006/dobbiaco06_Zennaro.pdf"
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Statement

Fix $T,\tau,\eta,\rho>0$ and $L_t\ge0$. Write
$B_r=\{x\in\mathbb R^d:\|x\|_2\le r\}$.
Let $f$ and a history $\phi:[-\tau,0]\to\mathbb R^d$
define the retarded problem of [[def-retarded-delay-equation-and-history-space]]
on $[0,T+\eta]$, with global state Lipschitz constant $L_s$, and assume
$[-\rho,T+\eta+\rho]\subset U$. Let $y$ be the unique solution there by
[[thm-retarded-delay-method-of-steps-well-posedness]]. Suppose $\phi$ is twice
continuously differentiable on the interval interior, with continuous one-sided
extensions of $\phi'$ and $\phi''$ to the endpoints, and
$\|\phi''(s)\|_2\le M_\phi$. For $0<h=\tau/m\le h_0\le\eta$, where $m$ is a
positive integer, assume the exact path and all Euler nodes generated for
target $T$ lie in a fixed closed ball $B_R$. Choose $Q\ge0$ such that
$\|f(t,0,0)\|_2\le Q$ for $-\rho\le t\le T+\eta+\rho$, and set
$$R_z=(\|\phi(0)\|_2+(Q+L_sR)(T+\eta))e^{L_s(T+\eta)},\qquad R_*=1+\max\{R,R_z\}.$$
Assume that on $[-\rho,T+\eta+\rho]\times B_{R_*}\times B_{R_*}$, $f$ is
bounded in norm by $M_f$, and on $[0,T+\eta]\times B_{R_*}\times B_{R_*}$ it
satisfies
$$\|f(t,x,z)-f(s,x,z)\|_2\le L_t|t-s|$$
for fixed $x,z$ and all $s,t$ in this time interval. Put
$S=\max\{\sup_{[-\tau,0]}\|\phi'(s)\|_2,M_f\}$ and
$$C_{\rm loc}=\frac{L_t+L_s(S+M_f)}2,\qquad C_{\rm ode}=\begin{cases}C_{\rm loc}(e^{L_s(T+\eta)}-1)/L_s,&L_s>0,\\ C_{\rm loc}(T+\eta),&L_s=0,\end{cases}$$
$$C_{\rm hist}=C_{\rm ode}+M_f/2+M_\phi h_0/8,\qquad C_{\rm dde}=C_{\rm hist}\bigl(1+L_s(T+\eta)e^{2L_s(T+\eta)}\bigr).$$
Then, when [[alg-retarded-delay-euler-with-stored-history]] completes all $N$
updates (no evaluation budget or an integer budget $B\ge N$), its returned
piecewise-linear interpolant through $T_h=Nh$, where $N$ is the least integer
with $Nh\ge T$, satisfies
$$\sup_{-\tau\le t\le T}\|\widehat y_h(t)-y(t)\|_2\le C_{\rm dde}h.$$
All constants are independent of $m$. The claim uses a fixed positive delay,
grid alignment $h=\tau/m$, time-Lipschitz $f$, and a common compact tube; it
asserts no order for state-dependent delays or a higher-order method crossing
a delay breakpoint.

## Facts & Assumptions

**Given:** The retarded delay problem on $[0,T+\eta]$, the bounded twice differentiable history, an aligned grid, a completed Euler run (no budget or $B\ge N$), the stated uniform tube for the exact and Euler paths, and the stated bounds on $f$.

[F1] The retarded problem's solution equals $\phi$ on $[-\tau,0]$ and satisfies $y'(t)=f(t,y(t),y(t-\tau))$ on $[0,T+\eta]$ ([[def-retarded-delay-equation-and-history-space]], [[thm-retarded-delay-method-of-steps-well-posedness]]).

[F2] The algorithm uses $Y_{n+1}=Y_n+h f(t_n,Y_n,Y_{n-m})$, and its stored history is the piecewise-linear interpolant of its history and solution nodes ([[alg-retarded-delay-euler-with-stored-history]]).

[F3] The global state Lipschitz bound is $\|f(t,x,z)-f(t,\widetilde x,\widetilde z)\|_2\le L_s(\|x-\widetilde x\|_2+\|z-\widetilde z\|_2)$ ([[def-retarded-delay-equation-and-history-space]]).

[F4] A path with derivative norm at most $M$ is $M$-Lipschitz, and its increments equal integrals of its derivative ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[F5] The norm of an integrable vector-valued integral is at most the integral of the norm ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[F6] If exact nodal values of a path with cellwise second derivative bounded by $M$ are linearly interpolated on cells of width $h$, the interpolation error is at most $Mh^2/8$ ([[lem-piecewise-linear-delay-history-error]]).

[F7] A nonnegative retarded-delay integral inequality with history bound $H$ and forcing $q$ has running maximum at most $(H+\int_0^tq)e^{2L_st}$ ([[lem-retarded-delay-gronwall-bound]]).

[F8] A continuous state-Lipschitz ODE field has a unique local solution; if it is bounded on a compact state ball, the quantitative local theorem gives continuation on a short interval ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[F9] For the one-step map with local defect at most $Ch^2$, stability at most $1+L_sh$, and exact and numerical states and stages inside a common compact tube, the uniform-grid global error on an interval of length $T'$ is at most $C(e^{L_sT'}-1)h/L_s$ for $L_s>0$, and $CT'h$ for $L_s=0$ ([[thm-global-error-from-one-step-defect-and-stability]]).

[F10] If $u(t)\le a+L_s\int_0^tu(s)ds$ with nonnegative continuous $u$, then $u(t)\le ae^{L_st}$ ([[thm-gronwall-integral-inequality]]).

[F11] The exact-start local defect of a one-step map is its output from the exact starting value minus the exact next value ([[def-one-step-ode-method-local-defect-order-and-stability]]).

[F12] The Euclidean norm satisfies the triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[A1] The exact path and Euler nodes lie in $B_R$, and the stated field and time-Lipschitz bounds hold on the displayed compact tubes.

## Proof

1.1 Fix $h=\tau/m\le h_0$, let $N$ be the least integer with $Nh\ge T$, and put $T_h=Nh\le T+\eta$. Run the algorithm through $T_h$ and call its stored interpolant $\widehat y_h$. Convex interpolation and [A1] give $\|\widehat y_h(t)\|_2\le R$. Extend it constantly just beyond each endpoint for local ODE neighborhoods of time radius less than $\min\{\rho,\tau\}$. Define $F_h(t,x)=f(t,x,\widehat y_h(t-\tau))$ for $0\le t\le T_h$. It is continuous and $L_s$-Lipschitz in $x$. By [F3], $\|F_h(t,0)\|_2\le Q+L_sR$. Local solutions of $z'=F_h(t,z)$ therefore obey $\|z(t)\|_2\le\|\phi(0)\|_2+(Q+L_sR)t+L_s\int_0^t\|z(s)\|_2ds$. The vector integral norm bound [F5] and triangle inequality [F12] justify this estimate. For $t\le T+\eta$, replace the first two terms by the constant $A=\|\phi(0)\|_2+(Q+L_sR)(T+\eta)$ and apply [F10]; this gives $\|z(t)\|_2\le Ae^{L_s(T+\eta)}=R_z$. On the compact tube of radius $R_*$ the field is bounded by $M_f$, so [F8] continues each local solution by a common positive short-time amount while it remains in that ball. The a priori bound keeps each continuation endpoint within radius $R_z$; finitely many continuations cover $[0,T_h]$. Denote the resulting solution by $z_h$ and set $z_h=\phi$ on $[-\tau,0]$. Since $t_n-\tau=t_{n-m}$ is a stored node, [F2] shows the Euler updates are exactly forward Euler applied to this fixed ODE. [F2, F3, F5, F4, F8, F10, F12, A1, given, construct]

2.1 The auxiliary path and the Euler states lie in the radius-$R_*$ tube, and $\|z_h'(t)\|_2\le M_f$. On positive-time cells, each slope of $\widehat y_h$ is an Euler right-hand side bounded by $M_f$; on history cells, [F4] and [F5] bound its slope by $\sup\|\phi'\|_2$. Thus $\widehat y_h$ is $S$-Lipschitz on $[-\tau,T_h]$. [F2, F4, F5, given, step 1.1, algebra]

3.1 The Euler map for the fixed ODE is $\Psi_{h,n}(x)=x+hF_h(t_n,x)$. By [F3] and the triangle inequality [F12] it satisfies $\|\Psi_{h,n}(x)-\Psi_{h,n}(\widetilde x)\|_2\le (1+L_sh)\|x-\widetilde x\|_2$. For $s\in[t_n,t_{n+1}]$, [F3], the time bound, and step 2.1 give $$\|F_h(s,z_h(s))-F_h(t_n,z_h(t_n))\|_2 \le (L_t+L_s(M_f+S))(s-t_n).$$ By [F4], the exact increment is the integral of $F_h(s,z_h(s))$; integrating this estimate and using [F5] gives exact-start local defect at most $C_{\rm loc}h^2$ by [F11] and [F12]. Apply [F9] on the uniform grid of length $T_h$, with initial error zero. Since $T_h\le T+\eta$, it gives $$\max_{0\le n\le N}\|Y_n-z_h(t_n)\|_2\le C_{\rm ode}h.$$ [F3, F4, F5, F9, F11, F12, A1, given, step 2.1, algebra]

4.1 On a solution cell, the nodal error bound proved in the preceding step contributes at most $C_{\rm ode}h$ by the triangle inequality [F12]. The interpolant of the two exact $z_h$ endpoints differs from $z_h(t)$ by at most $M_fh/2$: if $\lambda=(t-t_n)/h$, the endpoint-increment estimate is $2\lambda(1-\lambda)M_fh\le M_fh/2$. Hence $\|\widehat y_h(t)-z_h(t)\|_2\le(C_{\rm ode}+M_f/2)h$. On history cells, [F6] gives error at most $M_\phi h^2/8\le (M_\phi h_0/8)h$. Therefore $$\sup_{-\tau\le t\le T_h}\|\widehat y_h(t)-z_h(t)\|_2\le C_{\rm hist}h.$$ [F2, F6, F12, given, step 2.1, step 3.1, algebra]

5.1 Let $u(t)=\|z_h(t)-y(t)\|_2$ for $-\tau\le t\le T_h$. It is zero on the history. Subtract the integral equations for $z_h$ and $y$ using [F1] and [F4], then use [F3] and bound $\|\widehat y_h(t-\tau)-y(t-\tau)\|_2$ by $C_{\rm hist}h+u(t-\tau)$ using step 4.1. This yields $$u(t)\le\int_0^t\bigl(L_sC_{\rm hist}h+L_s(u(s)+u(s-\tau))\bigr)ds.$$ Apply [F7] with $H=0$ and constant forcing $q=L_sC_{\rm hist}h$ to obtain $\sup_{0\le t\le T_h}u(t)\le L_sC_{\rm hist}h(T+\eta)e^{2L_s(T+\eta)}$. The triangle inequality and the interpolation bound from step 4.1 give the claimed estimate on $[-\tau,T]$ by [F12]. [F1, F3, F4, F7, F12, given, step 1.1, step 4.1, algebra] ∎

