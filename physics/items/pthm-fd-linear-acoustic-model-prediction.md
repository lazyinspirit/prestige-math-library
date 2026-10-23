---
id: pthm-fd-linear-acoustic-model-prediction
kind: physics-theorem
title: "Linear acoustic model prediction"
status: published
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
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice. Let $I\subseteq\mathbb R$ be an open time interval measured in seconds with $0\in I$, let $L=1\,\mathrm m$, and let $\Omega_L:=\mathbb R^3/(2\pi L\mathbb Z)^3$ be a spatial periodic cell with coordinates in metres and volume measure $dx$ induced from a fundamental cell. Let $p:(0,\infty)\to\mathbb R$ be a $C^1$ barotropic pressure law in pascals, let $\rho_*>0$ be a constant reference density in kilograms per cubic metre, and assume $p'(\rho_*)>0$ in square metres per second squared. The adopted no-force barotropic Euler model is

$$\partial_t\rho+\operatorname{div}(\rho u)=0,\qquad \rho\bigl(\partial_tu+(u\cdot\nabla)u\bigr)+\nabla p(\rho)=0,$$

for periodic fields $\rho\in C^2(I\times\Omega_L;(0,\infty))$ and $u\in C^2(I\times\Omega_L;\mathbb R^3)$, where density is in kilograms per cubic metre and velocity is in metres per second. Here $C^\infty$ means that coordinate derivatives of every finite order are continuous, with spatial fields periodic on $\Omega_L$. The uniform state $(\rho,u)=(\rho_*,0)$ is an equilibrium. For perturbations $z\in C^\infty(I\times\Omega_L;\mathbb R)$ and $v\in C^\infty(I\times\Omega_L;\mathbb R^3)$, define the tangent model as the pointwise first variation at the dimensionless parameter $\epsilon=0$ of this equation operator on $\rho_\epsilon=\rho_*+\epsilon z$ and $u_\epsilon=\epsilon v$; on each compact time interval these perturbed densities remain positive for sufficiently small $|\epsilon|$. For arbitrary initial data $z_0\in C^\infty(\Omega_L;\mathbb R)$ and $v_0\in C^\infty(\Omega_L;\mathbb R^3)$, where these fields have continuous spatial derivatives of every finite order and are periodic, that tangent model is

$$\partial_t z+\rho_*\operatorname{div}v=0,\qquad \partial_t v+\frac{c_*^2}{\rho_*}\nabla z=0,\qquad (z,v)|_{t=0}=(z_0,v_0),\qquad c_*:=\sqrt{p'(\rho_*)}>0.$$

Here $z$ is a density perturbation in kilograms per cubic metre, $v$ is a velocity perturbation in metres per second, and $c_*$ is the model sound speed in metres per second. For every such initial pair, this linear tangent system has a unique real $C^\infty$ solution $(z,v):\mathbb R\times\Omega_L\to\mathbb R\times\mathbb R^3$. Its acoustic energy

$$E_{\mathrm{ac}}(t):=\frac12\int_{\Omega_L}\left(\rho_*|v|^2+\frac{c_*^2}{\rho_*}z^2\right)\,dx$$

is constant in joules. For a scalar or vector field $f$, take vector coefficients componentwise; for a wavevector $\kappa\in L^{-1}\mathbb Z^3$, use the Fourier character $e_\kappa(x)=e^{i\kappa\cdot x}$ and normalized coefficient $\widehat f(\kappa,t)=((2\pi L)^3)^{-1}\int_{\Omega_L}f(t,x)e^{-i\kappa\cdot x}\,dx$, with the integral taken over a fundamental cell. For $\kappa\ne0$, the longitudinal velocity coefficient is $\widehat v_\parallel=(\kappa\cdot\widehat v)|\kappa|^{-2}\kappa$ and the transverse coefficient is $\widehat v_\perp=\widehat v-\widehat v_\parallel$. A nonzero longitudinal normal mode is a nonzero Fourier solution with $\widehat v_\perp=0$ and time dependence $e^{-i\omega t}$; its angular frequency $\omega$ in inverse seconds satisfies $\omega^2=c_*^2|\kappa|^2$. The transverse coefficient at each $\kappa\ne0$, and the mean coefficients $\widehat z(0,t),\widehat v(0,t)$ at $\kappa=0$, are constant in time. These are exact deductions for the specified linear tangent model, not a finite-amplitude approximation theorem, an observation, or a claim that an actual fluid follows the model.

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

3.2 For each Fourier character $e_\kappa$, the tangent equations give $\partial_t\widehat z+i\rho_*\kappa\cdot\widehat v=0$ and $\partial_t\widehat v+i(c_*^2/\rho_*)\kappa\widehat z=0$. When $\kappa\ne0$, taking the dot product of the second equation with $\kappa$ and differentiating the first yields $\partial_{tt}\widehat z+c_*^2|\kappa|^2\widehat z=0$, while orthogonal projection of the second gives $\partial_t\widehat v_\perp=0$. Thus each nonzero longitudinal mode has time dependence $e^{-i\omega t}$ with $\omega^2=c_*^2|\kappa|^2$, and its transverse coefficient is constant. For $\kappa=0$, both equations give constant mean coefficients. [given, step 2.1, step 2.2, algebra]

4.1 Differentiate $E_{\mathrm{ac}}$ and use the tangent equations to get $\frac{dE_{\mathrm{ac}}}{dt}=-c_*^2\int_{\Omega_L}\bigl(v\cdot\nabla z+z\,\operatorname{div}v\bigr)\,dx=-c_*^2\int_{\Omega_L}\operatorname{div}(zv)\,dx=0$. The last integral vanishes because each component is periodic and opposite-face fluxes cancel; the global smoothness from step 3.1 justifies differentiation under the integral. [given, step 3.1, algebra] ∎

