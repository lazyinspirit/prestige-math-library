---
id: ex-phase-singularity-in-stable-planar-oscillator
kind: example
title: "A stable planar cycle can have a singular phase slice"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-phase-bordered-periodic-orbit-bvp
  - lem-phase-bordered-shooting-jacobian-invertibility
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Complete 614-page second-edition PDF retrieved; inspected printed pp. 26–30 on transverse sections, return maps, variational equation, monodromy, and phase multiplier."
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
---

## Statement

On the annulus $U=\{(x,y):1/2<\sqrt{x^2+y^2}<3/2\}$ consider
$$
\dot x=(1-r)x-y,\qquad \dot y=(1-r)y+x,\qquad r=\sqrt{x^2+y^2}.
$$
The unit circle is an orbitally asymptotically stable periodic orbit of period $2\pi$. At $x_*=(1,0)$ the affine phase $\psi_b(x,y)=x-1$ has a singular phase-bordered shooting Jacobian, while $\psi_g(x,y)=y$ is transverse and gives an invertible phase-bordered shooting Jacobian.

## Facts & Assumptions

**Given:** The smooth autonomous field on the annulus, the unit-circle candidate orbit, and the two affine phase functions.

[F1] The phase-bordered residual for phase covector $c$ is $(\phi_T(x)-x,\psi(x))$, and its Jacobian has period column $f(x_*)$ ([[def-phase-bordered-periodic-orbit-bvp]]).

[F2] The bordered Jacobian is singular when $c^\top f(x_*)=0$ and is invertible when the neutral multiplier is simple and the phase is transverse ([[lem-phase-bordered-shooting-jacobian-invertibility]]).

## Proof
1.1 The identities $\dot r=(xx'+yy')/r$ and $\dot\vartheta=(xy'-yx')/r^2$ give $\dot r=r(1-r)$ and $\dot\vartheta=1$. Thus $r=1$ is invariant and $\vartheta(t)=\vartheta(0)+t$, so the least period is $2\pi$. Differentiating $r(1-r)$ at $r=1$ gives the radial variational equation $\dot\rho=-\rho$, whose multiplier is $e^{-2\pi}<1$; the angular variational equation is $\dot\alpha=0$, whose multiplier is $1$. Because the polar-coordinate Jacobian at times $0$ and $2\pi$ is the same invertible matrix, the Cartesian monodromy is conjugate to $\operatorname{diag}(e^{-2\pi},1)$. For $r<1$ the radial derivative is positive, and for $r>1$ it is negative, so nearby radii move monotonically toward $1$ and cannot leave their initial radial interval. Their distance to the unit circle therefore tends to zero while remaining small. This proves orbital asymptotic stability and shows the neutral multiplier is simple. [given, algebra]

2.1 At $(1,0)$ the vector field is $(0,1)$. For $\psi_b=x-1$, $c_b=(1,0)$ and $c_b^\top f(x_*)=0$, so [F2] gives a singular shooting Jacobian. For $\psi_g=y$, $c_g=(0,1)$ and $c_g^\top f(x_*)=1$; the phase multiplier is simple by step 1.1, so [F2] gives an invertible Jacobian. [F1, F2, step 1.1, algebra] ∎
