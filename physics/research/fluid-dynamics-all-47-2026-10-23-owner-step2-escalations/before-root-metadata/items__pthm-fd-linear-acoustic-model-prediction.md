---
id: pthm-fd-linear-acoustic-model-prediction
kind: physics-theorem
title: "Linear acoustic model prediction"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-fd-barotropic-euler-model
  - thm-fd-global-linear-acoustics
  - def-countable-choice
dependency_roles:
  def-fd-barotropic-euler-model: formulation-prerequisite
  thm-fd-global-linear-acoustics: mathematical-premise
  def-countable-choice: mathematical-premise
empirical_premises: []
physical_scope: >-
  Exact global smooth tangent-model prediction for a positive-density,
  no-force barotropic Euler equilibrium at rest on a periodic three-dimensional
  cell, when p'(rho*)>0. No finite-amplitude error estimate or empirical
  applicability claim is asserted.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 3"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf"
      locator: "§4.4.4, printed pp. 150–152 (PDF pp. 39–42): linearized Euler and mass equations, adiabatic sound speed, wave equation and Fourier-mode dispersion."
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, Handbook of Differential Equations: Evolutionary Equations, vol. 2"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
      locator: "Chapter 3, §2.3, printed pp. 10–11: linearization at constant equilibrium; §7.1.2, printed pp. 81–82: Cauchy problem for the acoustic system on R3."
verification:
  precheck: pending
---

## Statement

Assume Countable Choice. Let $I\subseteq\mathbb R$ be an open time interval measured in seconds with $0\in I$, let $L=1\,\mathrm m$, and let $\Omega_L:=\mathbb R^3/(2\pi L\mathbb Z)^3$ be a spatial periodic cell with coordinates in metres and volume measure $dx$ induced from a fundamental cell. Let $p:(0,\infty)\to\mathbb R$ be a $C^1$ barotropic pressure law in pascals, let $\rho_*>0$ be a constant reference density in kilograms per cubic metre, and assume $p'(\rho_*)>0$ in square metres per second squared. The adopted no-force barotropic Euler model is

$$\partial_t\rho+\operatorname{div}(\rho u)=0,\qquad \rho\bigl(\partial_tu+(u\cdot\nabla)u\bigr)+\nabla p(\rho)=0,$$

for periodic fields $\rho\in C^2(I\times\Omega_L;(0,\infty))$ and $u\in C^2(I\times\Omega_L;\mathbb R^3)$, where density is in kilograms per cubic metre and velocity is in metres per second. The uniform state $(\rho,u)=(\rho_*,0)$ is an equilibrium. For $z\in C^\infty(I\times\Omega_L;\mathbb R)$ and $v\in C^\infty(I\times\Omega_L;\mathbb R^3)$ periodic in space, define the tangent model as the vanishing first variation at $\epsilon=0$ of this equation operator on $\rho_\epsilon=\rho_*+\epsilon z$ and $u_\epsilon=\epsilon v$. That tangent model is

$$\partial_t z+\rho_*\operatorname{div}v=0,\qquad \partial_t v+\frac{c_*^2}{\rho_*}\nabla z=0,\qquad (z,v)|_{t=0}=(z_0,v_0),\qquad c_*:=\sqrt{p'(\rho_*)}>0.$$

Here $z$ is a density perturbation in kilograms per cubic metre, $v$ is a velocity perturbation in metres per second, and $c_*$ is the model sound speed in metres per second. For every smooth periodic initial pair $z_0:\Omega_L\to\mathbb R$ and $v_0:\Omega_L\to\mathbb R^3$, this linear tangent system has a unique global smooth solution $(z,v):\mathbb R\times\Omega_L\to\mathbb R\times\mathbb R^3$. Its acoustic energy

$$E_{\mathrm{ac}}(t):=\frac12\int_{\Omega_L}\left(\rho_*|v|^2+\frac{c_*^2}{\rho_*}z^2\right)\,dx$$

is constant in joules. For each nonzero periodic wavevector $\kappa\in L^{-1}\mathbb Z^3$ in inverse metres, longitudinal Fourier modes with angular frequency $\omega$ in inverse seconds satisfy $\omega^2=c_*^2|\kappa|^2$; zero-frequency mean and transverse velocity modes are constant. These are exact deductions for the specified linear tangent model, not a finite-amplitude approximation theorem, an observation, or a claim that an actual fluid follows the model.

## Statement references

[David Tong, *Fluid Mechanics*, Chapter 3, §4.4.4](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf)

[François Golse, *The Boltzmann Equation and Its Hydrodynamic Limits*, Chapter 3, §§2.3 and 7.1.2](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)

## Facts & Assumptions

**Given:** The positive reference density, $C^1$ pressure law, positive derivative, no-force barotropic equations, periodic cell, smooth perturbation data and Countable Choice stated above.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; this is carried explicitly because the mathematical global Fourier synthesis supplier assumes it.

[F1] [[def-fd-barotropic-euler-model]]: the current definition uses smooth positive-density fields, a $C^1$ pressure law, the mass equation, and nonconservative momentum equation with stress $-P(\rho)I_3$ and no force. Identify $P=p$; the positive sign $p'(\rho_*)>0$ is the additional hypothesis stated here, not built into the definition. Its current Step-1 readiness record is ready.

[F2] [[thm-fd-global-linear-acoustics]]: for $d\in\{1,2,3\}$, positive coefficients and smooth data on the normalized $2\pi$-periodic torus, the displayed constant-coefficient tangent system has a unique global smooth solution and conserves the stated weighted Fourier energy. Its current full proof and hypotheses were inspected, and its current Step-1 readiness record is ready.

## Proof

**Given:** The barotropic equations and equilibrium in the Statement, smooth periodic tangent data, $p\in C^1$, $p'(\rho_*)>0$, and Countable Choice.

1.1 On any compact time interval $J\subset I$, smooth $z$ is bounded on the compact cell, so $\rho_\epsilon=\rho_*+\epsilon z$ remains positive on $J\times\Omega_L$ for all sufficiently small $|\epsilon|$. With $u_\epsilon=\epsilon v$, the perturbed fields are in the positive-density state domain on $J$; this justifies taking the local first variation of the model operator without assuming a nonlinear solution for nonzero $\epsilon$. [given, F1, construct]

2.1 Expanding the mass equation gives $\partial_t\rho_\epsilon+\operatorname{div}(\rho_\epsilon u_\epsilon)=\epsilon(\partial_tz+\rho_*\operatorname{div}v)+\epsilon^2\operatorname{div}(zv)$. Divide by $\epsilon$ and take $\epsilon\to0$ to obtain $\partial_tz+\rho_*\operatorname{div}v=0$. [given, F1, step 1.1, algebra]

2.2 In the supplier's nonconservative momentum equation, $\rho_\epsilon(\partial_tu_\epsilon+(u_\epsilon\cdot\nabla)u_\epsilon)=\epsilon\rho_*\partial_tv+O(\epsilon^2)$. The chain rule gives $\nabla p(\rho_\epsilon)=\epsilon p'(\rho_*)\nabla z+o(\epsilon)$ because $p'$ is continuous and $\rho_\epsilon\to\rho_*$ uniformly on each compact time interval. Dividing by $\epsilon\rho_*$ and taking $\epsilon\to0$ gives $\partial_tv+(p'(\rho_*)/\rho_*)\nabla z=0$, which is the second tangent equation since $c_*^2=p'(\rho_*)$. [given, F1, step 1.1, algebra]

3.1 Write $y=x/L$, $s=(c_*/L)t$, $\widetilde z=z/\rho_*$ and $\widetilde v=v/c_*$. The chain rule transforms the tangent equations into $\partial_s\widetilde z+\operatorname{div}_y\widetilde v=0$ and $\partial_s\widetilde v+\nabla_y\widetilde z=0$ on $\mathbb T^3=(\mathbb R/2\pi\mathbb Z)^3$. Apply [F2] with both positive mathematical coefficients equal to $1$ and with the rescaled smooth initial data. It supplies a unique smooth solution for all $s\in\mathbb R$, hence for all physical times $t\in\mathbb R$. Countable Choice is the exact assumption [A1]. [given, A1, F2, step 2.1, step 2.2, algebra]

3.2 Differentiate the first tangent equation in time and substitute the divergence of the second to obtain $\partial_{tt}z-c_*^2\Delta z=0$. For a mode $z=Ae^{i(\kappa\cdot x-\omega t)}$ with $\kappa\in L^{-1}\mathbb Z^3\setminus\{0\}$, substitution gives $-\omega^2+c_*^2|\kappa|^2=0$. At $\kappa=0$ both equations give constant-in-time mean modes; the component of each velocity mode orthogonal to $\kappa$ is also constant because the momentum equation changes $v$ only in the $\kappa$ direction. [given, step 2.1, step 2.2, algebra]

4.1 Differentiate $E_{\mathrm{ac}}$ and use the tangent equations to get $\frac{dE_{\mathrm{ac}}}{dt}=-c_*^2\int_{\Omega_L}\bigl(v\cdot\nabla z+z\,\operatorname{div}v\bigr)\,dx=-c_*^2\int_{\Omega_L}\operatorname{div}(zv)\,dx=0$. The last integral vanishes because each component is periodic and opposite-face fluxes cancel; the global smoothness from step 3.1 justifies differentiation under the integral. [given, step 3.1, algebra] ∎

