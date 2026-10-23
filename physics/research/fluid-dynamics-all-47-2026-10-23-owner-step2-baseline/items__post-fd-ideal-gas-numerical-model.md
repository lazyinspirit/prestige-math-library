---
id: post-fd-ideal-gas-numerical-model
kind: postulate
title: "Calorically perfect ideal-gas Euler model for numerical states"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: physics
library: physics
dependency_level: 4
deps:
  - def-fd-simple-fluid-state
  - def-fd-quantity-and-frame-conventions
  - post-fd-local-equilibrium
  - post-fd-weak-balances
  - def-fd-compressible-numerical-contract
dependency_roles:
  def-fd-simple-fluid-state: formulation-prerequisite
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  post-fd-local-equilibrium: formulation-prerequisite
  post-fd-weak-balances: formulation-prerequisite
  def-fd-compressible-numerical-contract: formulation-prerequisite
physical_scope: "One-dimensional, nonrelativistic, calorically perfect ideal-gas Euler branch in SI units, with positive density and temperature, local-equilibrium closure, conservative weak balances, and a separately adopted physical entropy inequality. It asserts no empirical universality or numerical entropy property."
empirical_premises: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Joseph M. Powers, Lecture Notes on Gas Dynamics"
      url: "https://www.perplex.ethz.ch/thermo_course/various_thermodynamics_texts/Powers%20Lecture%20notes%20in%20Gasdynamics.pdf"
      locator: "Complete 164-page notes; §§2.3.3.3–2.3.4, printed pp. 25–27; §§2.4.6–2.4.7.2, pp. 35–36; §§3.2–3.3, pp. 39–43."
    - title: "David Tong, Fluid Mechanics, Part III: Waves"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf"
      locator: "Complete 70-page chapter; §§4.4.1–4.4.4, printed pp. 144–151; §4.6.1 shock and entropy discussion."
verification:
  precheck: pass
---

## Postulate

Use a nonrelativistic Cartesian inertial frame with absolute time and SI units. Let $\Omega\subseteq\mathbb R$ be an open spatial interval measured in metres, let $T_f>0$ be a final time measured in seconds, and let the space-time domain be $\Omega\times(0,T_f)$. The measurable fields are mass density $\rho:\Omega\times(0,T_f)\to(0,\infty)$ in kilograms per cubic metre, velocity $u:\Omega\times(0,T_f)\to\mathbb R$ in metres per second, specific entropy $s:\Omega\times(0,T_f)\to\mathbb R$ in joules per kilogram kelvin, and absolute temperature $T:\Omega\times(0,T_f)\to(0,\infty)$ in kelvins. Put $v=1/\rho$ in cubic metres per kilogram.

Adopt a local-equilibrium constitutive chart on the open state domain $\mathcal U=(0,\infty)\times\mathbb R$ with coordinates $(v,s)$ and a $C^2$ fundamental relation $e:\mathcal U\to\mathbb R$ for specific internal energy in joules per kilogram. Let $c_v>0$ be the specific heat at constant volume and $R>0$ the specific gas constant, each in joules per kilogram kelvin. Set $c_p=c_v+R$ as the specific heat at constant pressure and $\gamma=c_p/c_v=1+R/c_v>1$ as the dimensionless ratio of specific heats. Choose reference values $v_*>0$ in cubic metres per kilogram, $T_*>0$ in kelvins, and $s_*\in\mathbb R$ in joules per kilogram kelvin. Adopt the calorically perfect ideal-gas relation
$$e(v,s)=c_vT_*\left(\frac{v_*}{v}\right)^{\gamma-1}\exp\left(\frac{s-s_*}{c_v}\right),$$
with the conventional additive energy reference for which the specific internal energy is zero at zero temperature. Define thermodynamic temperature and pressure by $T=\partial_s e$ and $p=-\partial_v e$. Direct differentiation gives
$$T=\frac{e}{c_v}>0,\qquad p=(\gamma-1)\frac{e}{v}=(\gamma-1)\rho e=R\rho T>0.$$
At fixed $s$, this relation makes $p$ proportional to $\rho^\gamma$, so $\left.\partial_\rho p\right|_s=\gamma p/\rho$ and the positive isentropic sound speed is $c=\sqrt{\left.\partial_\rho p\right|_s}=\sqrt{\gamma p/\rho}$. Thus $\gamma$ is dimensionless, $c$ has units of metres per second, and $p$ has units of pascals. This is a constant-specific-heat ideal-gas approximation; it is restricted to a regime where that closure is adopted.

Define momentum density $m=\rho u$ in kilograms per square metre second and total energy density $E=\rho(e+u^2/2)$ in joules per cubic metre. For $\gamma>1$, the corresponding numerical state is $U=(\rho,m,E)\in\mathbb R^3$ with
$$\mathcal G_\gamma=\left\{(\rho,m,E):\rho>0,\quad E-\frac{m^2}{2\rho}>0\right\},\qquad p(U)=(\gamma-1)\left(E-\frac{m^2}{2\rho}\right).$$
The calorically perfect closure makes this state pressure equal to the thermodynamic pressure above. With $u=m/\rho$, its one-dimensional Euler flux and isentropic sound speed are
$$F(U)=\left(m,\frac{m^2}{\rho}+p(U),u(E+p(U))\right),\qquad c(U)=\sqrt{\frac{\gamma p(U)}{\rho}}.$$
The components of $F$ are mass flux in kilograms per square metre second, momentum flux in pascals, and energy flux in watts per square metre. The speed $c$ is in metres per second.

Adopt the inviscid one-dimensional branch with zero body acceleration, zero specific heat supply, zero conductive heat flux, and isotropic Cauchy stress $-pI$. In this branch, assume the locally integrable conservative variables, fluxes, entropy density, and entropy flux satisfy the following identities in the distributional sense. Let $\rho_0,m_0,E_0,S_0\in L^1_{\mathrm{loc}}(\Omega)$ be the initial mass density in kilograms per cubic metre, momentum density in kilograms per square metre second, total energy density in joules per cubic metre, and entropy density in joules per cubic metre kelvin, respectively. Require all displayed densities, fluxes, and products to be locally integrable up to $t=0$: their absolute values have finite integrals on every compact subset of $\Omega\times[0,T_f)$ in the relative topology, using the fields for $t>0$. This requirement assigns no point values at $t=0$ and asserts no strong initial trace. Test functions $\phi,\psi,\eta,\zeta\in C^1(\Omega\times[0,T_f))$ are compactly supported in space-time and vanish near $T_f$; $\zeta$ is nonnegative, and tests may be nonzero at $t=0$. Then adopt
$$\int_0^{T_f}\!\!\int_\Omega\left(\rho\,\partial_t\phi+\rho u\,\partial_x\phi\right)\,dx\,dt+\int_\Omega\rho_0\phi(0,x)\,dx=0,$$
$$\int_0^{T_f}\!\!\int_\Omega\left(\rho u\,\partial_t\psi+(\rho u^2+p)\partial_x\psi\right)\,dx\,dt+\int_\Omega m_0\psi(0,x)\,dx=0,$$
$$\int_0^{T_f}\!\!\int_\Omega\left(E\,\partial_t\eta+u(E+p)\partial_x\eta\right)\,dx\,dt+\int_\Omega E_0\eta(0,x)\,dx=0,$$
and
$$\int_0^{T_f}\!\!\int_\Omega\left(\rho s\,\partial_t\zeta+\rho u s\,\partial_x\zeta\right)\,dx\,dt+\int_\Omega S_0\zeta(0,x)\,dx\le0.$$
The last inequality is a separately adopted physical entropy inequality. It is not deduced from the conservative equations or from smooth-flow identities. This postulate specifies a physical model and its idealized local-equilibrium closure; it does not assert existence or uniqueness of a weak solution, prove that actual matter obeys the model, or identify a computed state with an experimental observation.

## Postulate references

[[def-fd-simple-fluid-state]] — defines a $C^2$ specific fundamental relation on an open $(v,s)$ state domain and the derivatives $T=e_s$ and $p=-e_v$.

[[def-fd-quantity-and-frame-conventions]] — fixes the Newtonian Cartesian-frame and SI field conventions.

[[post-fd-local-equilibrium]] — its current Postulate supplies the C2 local state chart, T=e_s>0, and p=-e_v used here. Its actual local-equilibrium chart is used only under the separately adopted weak physical assumptions stated here.

[[post-fd-weak-balances]] — adopts locally integrable weak mass, momentum, and total-energy balances with initial data and a separate weak physical entropy inequality.

[[def-fd-compressible-numerical-contract]] — fixes the one-dimensional conserved-state, ideal-gas pressure, Euler-flux, and sound-speed formulas.

[Powers, Lecture Notes on Gas Dynamics, §§2.3.3.3–2.3.4, §§2.4.6–2.4.7.2, and §§3.2–3.3](https://www.perplex.ethz.ch/thermo_course/various_thermodynamics_texts/Powers%20Lecture%20notes%20in%20Gasdynamics.pdf)

[Tong, Fluid Mechanics, Part III: Waves, §§4.4.1–4.4.4 and §4.6.1](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf)
