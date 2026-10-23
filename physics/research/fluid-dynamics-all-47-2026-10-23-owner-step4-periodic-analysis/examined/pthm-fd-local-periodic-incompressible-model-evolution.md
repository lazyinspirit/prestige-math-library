---
id: pthm-fd-local-periodic-incompressible-model-evolution
kind: physics-theorem
title: Local periodic incompressible model evolution
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-countable-choice
  - post-fd-continuum-balances
  - post-fd-newtonian-fourier
  - def-fd-incompressible-newtonian-model
  - thm-fd-smooth-periodic-incompressible-ivp
  - thm-fd-periodic-pressure-recovery
dependency_roles:
  def-countable-choice: mathematical-premise
  post-fd-continuum-balances: physical-assumption
  post-fd-newtonian-fourier: physical-assumption
  def-fd-incompressible-newtonian-model: formulation-prerequisite
  thm-fd-smooth-periodic-incompressible-ivp: mathematical-premise
  thm-fd-periodic-pressure-recovery: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
physical_scope: >-
  Force-free smooth constant-density incompressible Newtonian model on a
  periodic cell; constant nonnegative shear viscosity; local smooth evolution
  in three dimensions and in its transversely invariant one- and two-dimensional
  sectors. The zero-viscosity branch is inviscid Euler. This is a mechanical
  subsystem and asserts no wall, variable-viscosity, thermal, total-energy,
  entropy-balance, or empirical-validity result.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Brian F. Morton, Local-in-Time Well-Posedness of the Incompressible Euler
        and Navier–Stokes Equations
      url: https://brianfmorton.github.io/Notes/Local_in_Time_Well_Posedness_of_the_Incompressible_Euler_and_Navier_Stokes_Equations.pdf
      locator: §§7.1–7.3, especially Theorem 7.5, PDF pp. 24–34; whole-space mollifier
        method, compared only for scope.
    - title: Emil Wiedemann, Lecture Notes — Navier–Stokes Equations
      url: https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf
      locator: §4.3, Lemma 4.13 and Theorem 4.14, PDF pp. 31–32; positive-viscosity
        3D-torus local strong-solution treatment.
    - title: "David Tong, Fluid Mechanics, Chapter 3: The Navier–Stokes Equation"
      url: https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf
      locator: §§3.1.1–3.1.2, printed pp.60–63 (PDF file pp.6–9); traction context on
        printed p.59 (PDF file p.5).
    - title: Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional
        Turbulence
      url: https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf
      locator: Chapter 2 §§2.1.5–2.1.7, PDF pp. 42–51; independent periodic
        energy/regularity context.
empirical_premises: []
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice. Let $d\in\{1,2,3\}$, let $L>0$, $U_*>0$, and $\rho_*>0$, and fix an integer $s\ge4$. Use SI units: $L$ is measured in metres, $U_*$ in metres per second, physical position $X$ in metres, time $t$ in seconds, mass density $\rho_*$ in kilograms per cubic metre, velocity $u$ in metres per second, pressure $p$ and stress $\sigma$ in pascals, and dynamic shear viscosity $\mu$ in pascal seconds. To specialize the Newtonian/Fourier closure, fix an auxiliary constant temperature $T_*>0$ in kelvins and an open state set $\mathcal S\subset(0,\infty)^2$ containing $(\rho_*,T_*)$; take the auxiliary constitutive state throughout the branch to be the constant pair $(\rho,T)=(\rho_*,T_*)$ and the shear-viscosity state law to have value $\mu$ there. The bulk coefficient may be any admissible value because $\nabla_d\cdot u=0$, and any admissible conductivity law gives zero Fourier flux for this constant temperature. No total-energy or entropy-balance solution is asserted. Let $I\subset\mathbb R$ be an open time interval containing $0$ and $\mathbb T_L^d=(\mathbb R/(2\pi L\mathbb Z))^d$; this is the physical periodic cell for $d=3$ and the reduced coordinate torus for $d=1,2$, whose physical cell is $\mathbb T_L^3$. The smooth model fields are $u\in C^\infty(I\times\mathbb T_L^d;\mathbb R^d)$ and $p\in C^\infty(I\times\mathbb T_L^d;\mathbb R)$. Torus fields are understood as smooth periodic lifts to Euclidean coordinate space when the local continuum equations are applied. Adopt a force-free incompressible Newtonian model with constant density $\rho_*$, constant shear viscosity $\mu\ge0$, velocity field $u$, pressure multiplier $p$ enforcing $\nabla_d\cdot u=0$, and reduced stress
$$\sigma^{(d)}=-pI_d+2\mu D_du,\qquad D_du=\tfrac12\bigl(\nabla_du+(\nabla_du)^{\mathsf T}\bigr).$$
On the retained $d$ coordinates, the local momentum equation and constraint are
$$\rho_*\bigl(\partial_tu+(u\cdot\nabla_d)u\bigr)=\nabla_d\cdot\sigma^{(d)},\qquad \nabla_d\cdot u=0.$$
For $d=3$, this is the direct physical equation on $\mathbb T_L^3$ with stress $\sigma^{(3)}=-pI_3+2\mu D_3u$. For $d=1,2$, $\mathbb T_L^d$ is the reduced coordinate torus and the corresponding physical cell is $\mathbb T_L^3$. Let $J_d:\mathbb T_L^3\to\mathbb T_L^d$ be $J_d(X_1,X_2,X_3)=(X_1,\ldots,X_d)$, with coordinates understood modulo $2\pi L$. A reduced velocity $u:\mathbb T_L^d\to\mathbb R^d$ and pressure $p:\mathbb T_L^d\to\mathbb R$ lift to
$$\widetilde u(X)=\bigl(u_1(J_dX),\ldots,u_d(J_dX),0,\ldots,0\bigr),\qquad \widetilde p(X)=p(J_dX).$$
The physical three-dimensional stress is $\widetilde\sigma=-\widetilde p I_3+2\mu D_3\widetilde u$, where $D_3\widetilde u=\tfrac12(\nabla_3\widetilde u+(\nabla_3\widetilde u)^{\mathsf T})$. For $\nabla_d\cdot u=0$, direct differentiation gives
$$\nabla_3\cdot\widetilde u=(\nabla_d\cdot u)\circ J_d,\qquad (\widetilde u\cdot\nabla_3)\widetilde u=\bigl((u\cdot\nabla_d)u,0,\ldots,0\bigr)\circ J_d,\qquad \nabla_3\cdot\widetilde\sigma=\bigl((\nabla_d\cdot\sigma^{(d)}),0,\ldots,0\bigr)\circ J_d.$$
Thus the reduced equation is exactly the restriction of the three-dimensional equation to fields independent of the omitted coordinates and with the omitted velocity components zero. Conversely, every smooth solution in this invariant class reduces to the displayed $d$-dimensional equation. When $d=3$, no lift or reduction is used.
Assume $u_0:\mathbb T_L^d\to\mathbb R^d$ is smooth, real, periodic, and divergence-free. Set $x=X/L\in\mathbb T^d=(\mathbb R/(2\pi\mathbb Z))^d$, $\tau=tU_*/L$, $U_0(x)=u_0(Lx)/U_*$, $\bar\nu=\mu/(\rho_*U_*L)$, and $\Pi=p/(\rho_*U_*^2)$. For a smooth periodic field $f$, use normalized measure $d\mu_x=(2\pi)^{-d}dx$, coefficients $\widehat f(k)=\int_{\mathbb T^d}f(x)e^{-ik\cdot x}\,d\mu_x$, and
$$\|f\|_{H^s}^2=\sum_{k\in\mathbb Z^d}(1+|k|^2)^s|\widehat f(k)|^2.$$
For this integer $s$, there is $T>0$, depending only on $d$, $s$, and $\|U_0\|_{H^s}$, and independent of $\bar\nu$ and all higher Sobolev norms of $U_0$, such that the normalized system has a unique smooth solution $(U,\Pi)$ on $[0,T]\times\mathbb T^d$:
$$\partial_\tau U+(U\cdot\nabla_x)U=-\nabla_x\Pi+\bar\nu\Delta_xU,\qquad \nabla_x\cdot U=0,\qquad U(0,\cdot)=U_0,$$
with $\Pi$ fixed by zero spatial mean at each time. Every integer Sobolev order $m\ge s$ remains bounded on this same interval. Returning to physical variables gives a unique smooth model evolution on $0\le t\le (L/U_*)T$. When $\mu=0$, the adopted reduced stress is $-pI_d$ (its 3D lift is $-\widetilde pI_3$) and the mechanical model is inviscid Euler; when $\mu>0$, it is viscous Navier–Stokes. This is a conditional model deduction and makes no claim of empirical validity, wall evolution, variable-viscosity evolution, or thermal evolution.

## Statement references

[Brian F. Morton, Local-in-Time Well-Posedness of the Incompressible Euler and Navier–Stokes Equations](https://brianfmorton.github.io/Notes/Local_in_Time_Well_Posedness_of_the_Incompressible_Euler_and_Navier_Stokes_Equations.pdf).

[Emil Wiedemann, Lecture Notes: Navier–Stokes Equations](https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf).

[David Tong, Fluid Mechanics, Chapter 3: The Navier–Stokes Equation](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf).

[Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional Turbulence](https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf).

## Facts & Assumptions

**Given:** Countable Choice; the positive SI reference scales and constant material parameters in the Statement; smooth periodic initial velocity; the adopted force-free local incompressible Newtonian model.

[A1] [[post-fd-continuum-balances]]: the adopted smooth continuum has mass and linear-momentum balances in an inertial Cartesian chart; this item uses the force-free, constant-density periodic specialization.

[A2] [[post-fd-newtonian-fourier]]: the current postulate adopts the three-dimensional stress correction $\tau=2\mu D_0\widetilde u+\zeta(\nabla_3\cdot\widetilde u)I_3$ and Fourier heat flux, with nonnegative shear and bulk coefficients and positive-semidefinite symmetric conductivity. At the constant constitutive state $(\rho_*,T_*)$ fixed in the Statement, the shear-viscosity law has value $\mu$. Since $\nabla_3\cdot\widetilde u=0$, $D_0\widetilde u=D_3\widetilde u$; its upper-left $d\times d$ block is $D_du$ and all other entries vanish. The bulk term vanishes and constant temperature gives zero Fourier flux, which is outside this mechanical equation. The current batch-11 manifest registers this carrier, and step1Decision reports a current ready record; this records authoring readiness, not independent proof approval.

[A3] [[def-fd-incompressible-newtonian-model]]: the current definition is three-dimensional and specifies constant $\rho_0>0$, $\nabla_3\cdot u=0$, Cauchy stress $\sigma=-pI_3+2\mu D_3u$, momentum balance $\rho_0D_tu=\nabla_3\cdot\sigma$, and $\nu=\mu/\rho_0$; initial and boundary data are separate. The Statement verifies its lower-dimensional invariant reduction. The current batch-11 manifest registers this carrier, and step1Decision reports a current ready record; this records authoring readiness, not independent proof approval. The local momentum equation is also stated explicitly here.

[F1] [[thm-fd-smooth-periodic-incompressible-ivp]]: assuming Countable Choice, for $d\in\{1,2,3\}$, integer $s\ge4$, $\bar\nu\ge0$, and smooth real divergence-free $U_0$ on the normalized $2\pi$-periodic torus, there is a unique smooth solution on a common interval whose length depends only on $d,s,\|U_0\|_{H^s}$, with all higher Sobolev norms bounded and a mean-zero pressure. Its current carrier has a complete conditional proof and a current Step-1 readiness record; this is not later independent proof approval.

[F2] [[thm-fd-periodic-pressure-recovery]]: assuming Countable Choice, for $d\in\{1,2,3\}$, $s>d/2+1$, and divergence-free $U\in H^s$, the Fourier pressure map gives the unique mean-zero pressure in $H^s$ satisfying the projected/full-equation decomposition. Its actual current carrier and complete proof were inspected, and its Step-1 readiness record is current.

[A4] [[def-countable-choice]]: “For every family $(X_n)_{n\in\mathbb N}$ of nonempty sets indexed by $\mathbb N$ there is a function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every $n$.”

## Proof

**Given:** The Statement hypotheses and the conditional supplier interfaces [A1]–[A4], [F1], and [F2].

**Proof technique:** Reduce the adopted constant-viscosity stress equation to the normalized periodic incompressible equation; apply the inspected local mathematical theorem and pressure recovery; then invert the exact coordinate and field scaling.

1.1 If $d=3$, constant $\mu$ and $\nabla_X\cdot u=0$ give, componentwise,
$$\nabla_X\cdot(2\mu D_Xu)=\mu\Delta_Xu+\mu\nabla_X(\nabla_X\cdot u)=\mu\Delta_Xu.$$
For $d=1,2$, the lift defined in the Statement has zero derivatives in the omitted coordinates and zero omitted velocity components. Its divergence is $\nabla_d\cdot u$, its convective acceleration has first $d$ components $(u\cdot\nabla_d)u$ and remaining components zero, and its three-dimensional stress divergence has first $d$ components $\nabla_d\cdot\sigma^{(d)}$ and remaining components zero. Applying the same constant-viscosity identity in three dimensions therefore gives $\nabla_d\cdot(2\mu D_du)=\mu\Delta_du$ when $\nabla_d\cdot u=0$. In every case the adopted reduced momentum equation is $\partial_tu+(u\cdot\nabla_d)u=-\rho_*^{-1}\nabla_dp+(\mu/\rho_*)\Delta_du$. [given, A1, A2, A3, algebra]

2.1 With $x=X/L$ and $\tau=tU_*/L$, we have $\partial_tu=(U_*^2/L)\partial_\tau U$, $(u\cdot\nabla_X)u=(U_*^2/L)(U\cdot\nabla_xU)$, $\nabla_Xp=(\rho_*U_*^2/L)\nabla_x\Pi$, and $\Delta_Xu=(U_*/L^2)\Delta_xU$. Substituting these scalings into the acceleration equation of step 1.1 and multiplying by $L/U_*^2$ gives the normalized equation with coefficient $\bar\nu=\mu/(\rho_*U_*L)\ge0$; the divergence constraint and initial datum transform to $\nabla_x\cdot U=0$ and $U(0)=U_0$. [given, step 1.1, algebra]

3.1 The hypotheses of [F1] now hold, including Countable Choice [A4], $d\in\{1,2,3\}$, integer $s\ge4$, and $\bar\nu\ge0$. Therefore the normalized system has a unique smooth velocity on $[0,T]$, with $T$ depending only on $d,s,\|U_0\|_{H^s}$ and with every higher Sobolev norm bounded there. [given, A4, F1, step 2.1]

4.1 Since $s\ge4>d/2+1$, [F2] applies to each smooth divergence-free time slice. It supplies the unique mean-zero pressure $\Pi$ for the full normalized momentum equation. For $d=1,2$, its lift is also mean-zero on $\mathbb T^3$, because the normalized three-torus average of a field independent of the omitted coordinates equals its normalized $d$-torus average. [given, F2, step 3.1, algebra]

5.1 The inverse change $t=(L/U_*)\tau$, $X=Lx$, $u(t,X)=U_*U(\tau,x)$, and $p(t,X)=\rho_*U_*^2\Pi(\tau,x)$ preserves smoothness, periodicity, and the reduced equations in step 1.1; it maps the normalized interval $[0,T]$ to $[0,(L/U_*)T]$. For $d=1,2$, lifting these fields gives a smooth solution of the adopted three-dimensional mechanical equations on $\mathbb T_L^3$. Uniqueness in the reduced periodic system transfers under this invertible scaling. [given, step 1.1, step 2.1, step 3.1, step 4.1, construct]

6.1 The conclusion is only a deduction inside the adopted force-free model: the continuum balance, constitutive law, and model definition are assumptions, while existence and pressure recovery are conditional mathematical inputs. No experiment or mathematical proof establishes empirical validity of those physical assumptions. [given, A1, A2, A3, step 5.1] ∎
