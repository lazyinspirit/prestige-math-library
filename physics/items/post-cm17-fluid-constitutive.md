---
id: post-cm17-fluid-constitutive
kind: postulate
title: "Adopted fluid constitutive branches: incompressible Newtonian,
  barotropic inviscid, and the periodic-cell idealization"
status: draft
origin: session
domain: physics
dependency_level: 13
deps:
  - def-cm-fluid-constitutive-models
  - def-periodic-vector-sobolev-space-and-leray-projection
  - def-cm17-continuum-body-and-units
  - def-cm17-traction-and-stress
  - post-cm17-continuum-kinematic-model
  - post-cm17-mass-balance
  - def-cm01-units
  - def-cm-euclidean-spatial-calculus
  - pthm-cm17-continuity-equation
  - def-countable-choice
dependency_roles:
  def-cm-fluid-constitutive-models: mathematical-premise
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  def-cm17-continuum-body-and-units: formulation-prerequisite
  def-cm17-traction-and-stress: formulation-prerequisite
  post-cm17-continuum-kinematic-model: formulation-prerequisite
  post-cm17-mass-balance: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-euclidean-spatial-calculus: mathematical-premise
  pthm-cm17-continuity-equation: formulation-prerequisite
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the fluid constitutive branches of the continuum
  framework: an incompressible Newtonian model with constant density,
  divergence-free velocity, pressure and positive dynamic viscosity; a
  barotropic inviscid model with a pressure law, conservative body force and
  enthalpy; and the periodic-cell idealization on the three-torus used by the
  local well-posedness theorem. The postulate excludes compressible viscosity
  with thermal coupling, non-Newtonian and turbulent-closure models, surface
  tension and multiphase flow, and asserts no measured viscosity, pressure law
  or boundary condition."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the
        Mechanics of Solids (MIT, 1988, revised 2020), Sections 12.1-12.3
        (inviscid and incompressible viscous fluid models, with the Newtonian
        example)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September
        1, 2026 complete volume), Sections 8.4-8.5 (ideal and viscous
        incompressible fluid models)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt the following constitutive branches for models of the continuum
framework ([[post-cm17-continuum-kinematic-model]],
[[def-cm17-continuum-body-and-units]]), with the stress conventions of
[[def-cm17-traction-and-stress]].

**(a) Incompressible Newtonian fluid.** Model data are a constant density
$\rho>0$, a **dynamic viscosity** $\eta>0$ (constant, dimension
$\mu\ell^{-1}\tau^{-1}$, in SI measured in $\mathrm{Pa\,s}$,
[[def-cm01-units]]) and a pressure field $p$ of class $C^1$. The branch
consists of the **incompressibility constraint**

$$\operatorname{div}u=0$$

on the current regions ([[def-cm-euclidean-spatial-calculus]]) together with
the **Newtonian stress field**

$$\sigma=-p\,I_3+\eta\bigl(Du+Du^{\mathsf T}\bigr),$$

the second term being symmetric. By the continuity equation of the model
([[pthm-cm17-continuity-equation]]) the constraint $\operatorname{div}u=0$ is
equivalent, in this branch, to the density being constant along every label
worldline, so the constant-density reading is consistent with the adopted mass
balance.

**(a0) Constant-density incompressible inviscid fluid.** Adopt separately the Euler branch: $\rho>0$ is constant, $\operatorname{div}u=0$, pressure is a Lagrange multiplier enforcing this constraint, and $\sigma=-pI_3$. This is the same stress form as (a) with $\eta=0$, adopted as model structure; it is not obtained by imposing a barotropic pressure law on a constant density. No positive-viscosity assumption is used in this branch.

**(b) Barotropic inviscid fluid.** Model data are a $C^1$ **pressure law**
$p:(0,\infty)\to\mathbb R$ and a $C^1$ potential $V$ with the conservative
body force $b=-\nabla V$. The branch's stress field is
$\sigma=-p(\rho)I_3$, where $\rho$ is the model density field of
[[def-cm17-density-and-mass]]. Its **enthalpy function** is
$h:(0,\infty)\to\mathbb R$ defined by
$h(r)=\int_{\rho_{\mathrm r}}^r p'(s)s^{-1}\,ds$, with a fixed model reference
density $\rho_{\mathrm r}>0$ of the same dimension as $r$. It is characterized
by $h'(r)=p'(r)/r$ and has dimension $[h]=[p]/[\rho]=\ell^2\tau^{-2}$, energy
per unit mass; the spatial enthalpy field is $x\mapsto h(\rho(t,x))$
([[def-cm-fluid-constitutive-models]], [[def-cm17-continuum-body-and-units]]).

**(c) Periodic-cell idealization and scale conventions.** This clause applies
only to the constant-density incompressible branches (a) and (a0), with
constant $\rho>0$ and constant $\eta\ge0$; in (a0), set $\eta=0$.
It makes no incompressible reduction or pressure-gauge assertion for the
variable-density barotropic branch (b). Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the normalized product measure and Fourier/Sobolev machinery of this clause; the pointwise stress laws of (a), (a0) and (b) do not use this premise. Fix a cell side length $L_*>0$ and velocity scale $U_*>0$ as model data with dimensions $\ell$ and $\ell\tau^{-1}$, and let $T_*=L_*/U_*$ be the time scale. The physical spatial cell is $(\mathbb R/L_*\mathbb Z)^3$, with physical volume $L_*^3$; it describes a spatially periodic ideal medium, not a material boundary or a measured wall law. Write $\tau=t/T_*$ and $y=x/L_*\in\mathbb T^3$, using an optional fixed time origin. For physical velocity $u_{\mathrm{phys}}$, pressure $P_{\mathrm m}$ and density $\rho$, define dimensionless fields and viscosity by
$$U(\tau,y)=\frac{u_{\mathrm{phys}}(T_*\tau,L_*y)}{U_*},\qquad \Pi(\tau,y)=\frac{P_{\mathrm m}(T_*\tau,L_*y)}{\rho U_*^2},\qquad \nu_*:=\frac{\eta}{\rho U_*L_*}.$$
The inviscid incompressible branch (a0) has $\eta=0$ and $\nu_*=0$. The normalized unit-torus measure and $H^s$ norms of [[def-periodic-vector-sobolev-space-and-leray-projection]] apply to $U$, not to an unscaled dimensionful velocity. In the absence of body force the physical equation scales exactly to
$$\partial_\tau U+(U\cdot\nabla_y)U=-\nabla_y\Pi+\nu_*\Delta_yU,\qquad \operatorname{div}_yU=0.$$
A dimensionless lifespan $T$ is a physical lifespan $T_*T$, and $P_{\mathrm m}=\rho U_*^2\Pi$. Pressure has zero spatial mean as the chosen gauge. The periodic geometry and the scales are adopted model data, not observed boundary behavior or measured parameters. A change of inertial frame carries the cell lattice to $R(L_*\mathbb Z^3)$; the unit-torus identification is made in the correspondingly rotated cell coordinates, rather than silently keeping a fixed lattice under an arbitrary rotation.

**(d) Validity and exclusions.** The branches are **not** adopted for:
compressible viscous flow with temperature dependence or thermal coupling;
non-Newtonian materials (shear-dependent or viscoelastic response); turbulent
closures or averaged models (whose additional terms are not the fields of
this branch); surface tension, capillarity and multiphase interfaces; and
flows in which the continuum description itself fails at the scales of
interest. Wall conditions such as the no-slip condition used later are
additional **ideal boundary data**; they are adopted where stated, not
derived, and their empirical validity has limits that are not formalized
here.

**(e) Status.** The constitutive laws, the incompressibility constraint, the
pressure law and the periodic-cell geometry are adopted model structure, not
consequences of the balance principles. The viscosity $\eta$, the pressure
law and the potential are **model parameters or model functions**: whenever
numerical values are used they enter as measured empirical premises with
their conditions and uncertainty, and no measured value is asserted by this
postulate.
