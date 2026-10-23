---
id: cex-fd-incompressibility-not-homogeneity
kind: counterexample
title: Incompressibility does not imply uniform density
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-fd-quantity-and-frame-conventions
  - pthm-fd-smooth-material-kinematics
dependency_roles:
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  pthm-fd-smooth-material-kinematics: physical-result
physical_scope: >-
  Smooth positive-density, no-mass-source kinematics on a Newtonian spatial
  domain. The witness satisfies mass transport and incompressibility; no
  momentum solution, constitutive law, or empirical material claim is asserted.
empirical_premises: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part I lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf"
    - title: "Andrew Hazel, MATH45061 Continuum Mechanics, Chapter 4: Physical Conservation and Balance Laws & Thermodynamics"
      url: "https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch4.pdf"
proof_strategy: direct
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Statement refuted

For every smooth positive-density material motion satisfying the no-source mass balance, material constancy of density $D_t\rho=0$ forces spatially uniform density $\nabla\rho=0$, and incompressibility $\operatorname{div}u=0$ forces irrotationality $\operatorname{curl}u=0$.

## Statement references

[David Tong, Fluid Mechanics, Part I, §§1.1.1–1.1.3 (pathlines, material derivative, and mass conservation)](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf)

[Andrew Hazel, MATH45061 Continuum Mechanics, Chapter 4, §4.1 (mass conservation)](https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch4.pdf)

## Facts & Assumptions

**Given:** A smooth no-source material motion, a positive density transported by the adopted mass balance, and the kinematic meanings of $D_t\rho$, divergence, and curl.

[F1] [[def-fd-quantity-and-frame-conventions]]: $D_t$ is the material derivative, $\operatorname{div}u$ is the velocity divergence, and $\operatorname{curl}u=(\partial_yu_z-\partial_zu_y,\partial_zu_x-\partial_xu_z,\partial_xu_y-\partial_yu_x)$ is the vorticity vector.

[F2] [[pthm-fd-smooth-material-kinematics]]: for a smooth positive-density material motion under the adopted mass balance, $\partial_t\rho+\operatorname{div}(\rho u)=0$, $D_t\rho=0$ is equivalent to $\operatorname{div}u=0$, and $\rho(t,\chi(t,a))J(t,a)=\rho_0(a)$. Its complete conditional proof is authored; the theorem and its transport supplier remain draft dependencies, and authoring readiness is not proof acceptance.

## Counterexample

**Given:** Let $I=\mathbb R$, choose $R>0$ metres, $\rho_*>0$ kg m$^{-3}$, $0<\varepsilon<1$, and a nonzero shear rate $\gamma$ in s$^{-1}$. Work on the open slab $\mathcal O=\{(x,y,z)\in\mathbb R^3:|y|<2R\}$ and the bounded reference ball $B_R=\{(X,Y,Z):X^2+Y^2+Z^2<R^2\}$. Define $\chi_t(X,Y,Z)=(X+\gamma tY,Y,Z)$, $u(t,x,y,z)=(\gamma y,0,0)$, and $\rho_0(X,Y,Z)=\rho_*(1+\varepsilon Y/(2R))$.

1.1 The motion $\chi_t$ is a smooth diffeomorphism on $\mathcal O$ with $F=\begin{pmatrix}1&\gamma t&0\\0&1&0\\0&0&1\end{pmatrix}$ and $J=1$; it preserves the slab because it leaves $y$ unchanged. Its Eulerian velocity is $u(t,\chi_t(X,Y,Z))=\partial_t\chi_t(X,Y,Z)=(\gamma Y,0,0)$, which agrees with the stated field since $y=Y$. The initial density is positive on $B_R$ because $|Y|<R$ and $\varepsilon<1$. [given, F1, algebra]

2.1 The current field $\rho(t,x,y,z)=\rho_*(1+\varepsilon y/(2R))$ is positive throughout $\mathcal O$, nonconstant in $y$, and satisfies $\rho(t,\chi_t(X,Y,Z))J=\rho_0(X,Y,Z)$. Direct differentiation gives $\partial_t\rho=0$, $\operatorname{div}u=\partial_x(\gamma y)=0$, and $u\cdot\nabla\rho=0$, hence $D_t\rho=0$ by [F1] and the local continuity equation. The material mass balance follows from [F2]. [F1, F2, given, step 1.1, algebra]

3.1 The same field has $\partial_y\rho=\rho_*\varepsilon/(2R)\ne0$ and $\operatorname{curl}u=(0,0,-\gamma)\ne0$ by the curl convention [F1]. It is thus an incompressible, mass-conserving motion with nonuniform density and nonzero vorticity, refuting both asserted implications. The example is purely kinematic and is not claimed to solve a momentum equation. [F1, given, step 2.1, algebra] ∎
