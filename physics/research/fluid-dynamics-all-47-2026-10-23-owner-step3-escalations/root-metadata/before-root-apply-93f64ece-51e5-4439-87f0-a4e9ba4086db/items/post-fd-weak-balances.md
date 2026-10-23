---
id: post-fd-weak-balances
kind: postulate
title: "Integrable weak continuum balance and entropy adoption"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - def-fd-conservative-weak-form
  - post-fd-continuum-balances
  - def-fd-quantity-and-frame-conventions
dependency_roles:
  def-fd-conservative-weak-form: formulation-prerequisite
  post-fd-continuum-balances: formulation-prerequisite
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
physical_scope: "Separate adoption at discontinuities: locally integrable weak mass, momentum and total-energy balances plus physical entropy inequality; not inferred for arbitrary nonsmooth fields from smooth balances."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://academicweb.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§§4.4–4.8, printed pp. 141–160, and §9.4.1, printed pp. 379–382."
    - title: "David Tong, Fluid Mechanics"
      url: "https://www.damtp.cam.ac.uk/user/tong/fluids/fluids.pdf"
      locator: "§3.1.2, printed pp. 62–63; smooth momentum-current and kinetic-work discussion only."
---

## Postulate

Adopt the mathematical Countable Choice convention: every sequence of nonempty sets admits a choice function. Use the complete Euclidean Lebesgue spaces, measurable maps, almost-everywhere equality and Lebesgue integrals of the conservative weak-form definition. This convention specifies the mathematical weak branch.

Work in a classical Cartesian inertial frame with SI units on a fixed open spatial region $\Omega\subseteq\mathbb R^3$ and time interval $(0,T_f)$, where $T_f>0$ is measured in seconds. Write $L^1_{\mathrm{loc}}$ for functions whose absolute value is integrable on every compact subset. Let all fields be measurable functions of $(t,x)$ on $\Omega\times(0,T_f)$. Space-time integrals use the restriction of $\lambda_4$ to $\Omega\times[0,T_f)$, and initial integrals use the restriction of $\lambda_3$ to $\Omega$; both restrictions use their trace sigma-algebras. The displayed iterated notation uses the completed-product convention, with section integrals for almost every time, as in the conservative weak-form definition. Require $T>0$ almost everywhere wherever $q/T$ or $r/T$ is used. Let $\rho\ge0$ be mass density in kilograms per cubic metre, $u$ velocity in metres per second, $\sigma$ Cauchy stress in pascals, $b$ body acceleration in metres per second squared, $e$ specific internal energy in joules per kilogram, $q$ outward-positive conductive heat flux in watts per square metre, $r$ specific heat supply in watts per kilogram, $T>0$ absolute temperature in kelvins, and $s$ specific entropy in joules per kilogram kelvin. Set $E:=e+|u|^2/2$, use $t=\sigma n$ for traction and rowwise matrix divergence, and define the test-gradient by $(\nabla\psi)_{ij}:=\partial_{x_j}\psi_i$ and the Frobenius product by $A:B:=\sum_{i,j}A_{ij}B_{ij}$.

A test function is a $C^1$ function on $\Omega\times[0,T_f)$, compactly supported in space-time and vanishing near $T_f$; it may be nonzero at $t=0$. Let scalar test functions be $\phi,\eta,\zeta$ and vector test function be $\psi$. Adopt as a separate weak-branch model assumption that the displayed conservative variables, fluxes and sources below belong to $L^1_{\mathrm{loc}}$ and satisfy the following identities for every indicated test function. Initial conservative data $\rho_0,m_0,\mathcal E_0,S_0\in L^1_{\mathrm{loc}}(\Omega)$ represent initial mass, momentum, total-energy and entropy densities; the initial terms specify distributional data and do not assert a strong trace.

Mass balance, for every scalar $\phi$,

$$\int_0^{T_f}\!\!\int_\Omega\bigl(\rho\,\partial_t\phi+\rho u\cdot\nabla\phi\bigr)\,dx\,dt+\int_\Omega\rho_0\phi(0,x)\,dx=0.$$

Momentum balance, for every vector $\psi$,

$$\int_0^{T_f}\!\!\int_\Omega\bigl(\rho u\cdot\partial_t\psi+(\rho u\otimes u-\sigma):\nabla\psi+\rho b\cdot\psi\bigr)\,dx\,dt+\int_\Omega m_0\cdot\psi(0,x)\,dx=0.$$

Total-energy balance, for every scalar $\eta$,

$$\int_0^{T_f}\!\!\int_\Omega\bigl(\rho E\,\partial_t\eta+(\rho E u-\sigma^{\mathsf T}u+q)\cdot\nabla\eta+(\rho b\cdot u+\rho r)\eta\bigr)\,dx\,dt+\int_\Omega\mathcal E_0\eta(0,x)\,dx=0.$$

Physical entropy inequality, for every nonnegative scalar $\zeta\ge0$,

$$\int_0^{T_f}\!\!\int_\Omega\bigl(\rho s\,\partial_t\zeta+(\rho s u+q/T)\cdot\nabla\zeta+(\rho r/T)\zeta\bigr)\,dx\,dt+\int_\Omega S_0\zeta(0,x)\,dx\le0.$$

Every conservative density, product, flux and source displayed in these tests is required to be locally integrable up to $t=0$, including $\rho u\otimes u$, $\rho E u$, $\sigma^{\mathsf T}u$, $q/T$ and $\rho r/T$: its absolute value has finite integral on every compact subset of $\Omega\times[0,T_f)$ in the relative topology, using its values for $t>0$. This condition assigns no point values at $t=0$ and asserts no strong initial trace. Interior test functions impose no boundary condition; walls, thermal exchange, periodic identifications and stronger initial trace conditions are separate data. This weak mass/momentum/energy adoption and the physical entropy inequality are not inferred for arbitrary discontinuous or vacuum states from the smooth balance postulate. The source term and the sign of the entropy inequality use the outward-positive heat-flux convention above.

## Postulate references

[[def-fd-conservative-weak-form|Locally integrable weak equations, test functions and initial terms]]

[[post-fd-continuum-balances|Smooth-branch adopted continuum balance model]]

[Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §§4.4–4.8 and §9.4.1](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf)

[Tong, *Fluid Mechanics*, §3.1.2](https://www.damtp.cam.ac.uk/user/tong/fluids/fluids.pdf)
