---
id: post-cm17-fluid-constitutive
kind: postulate
title: "Adopted fluid constitutive branches: incompressible Newtonian, barotropic inviscid, and the periodic-cell idealization"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [def-cm-fluid-constitutive-models, def-periodic-vector-sobolev-space-and-leray-projection, def-cm17-continuum-body-and-units, def-cm17-traction-and-stress, post-cm17-continuum-kinematic-model, post-cm17-mass-balance, def-cm01-units, def-cm-euclidean-spatial-calculus, pthm-cm17-continuity-equation]
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
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the fluid constitutive branches of the continuum framework: an incompressible Newtonian model with constant density, divergence-free velocity, pressure and positive dynamic viscosity; a barotropic inviscid model with a pressure law, conservative body force and enthalpy; and the periodic-cell idealization on the three-torus used by the local well-posedness theorem. The postulate excludes compressible viscosity with thermal coupling, non-Newtonian and turbulent-closure models, surface tension and multiphase flow, and asserts no measured viscosity, pressure law or boundary condition."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 12.1-12.3 (inviscid and incompressible viscous fluid models, with the Newtonian example)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Sections 8.4-8.5 (ideal and viscous incompressible fluid models)"
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

**(b) Barotropic inviscid fluid.** Model data are a $C^1$ **pressure law**
$p:(0,\infty)\to\mathbb R$ and a $C^1$ potential $V$ with the conservative
body force $b=-\nabla V$. The branch's stress field is
$\sigma=-p(\rho)I_3$, where $\rho$ is the model density field of
[[def-cm17-density-and-mass]]. Its **enthalpy** is the function
$h(\rho_0)=\int_1^{\rho_0}p'(s)s^{-1}\,ds$, characterised by
$h'(\rho)=p'(\rho)/\rho$
([[def-cm-fluid-constitutive-models]]).

**(c) Periodic-cell idealization.** For the local well-posedness theorem of
this page the spatial domain is replaced by the three-torus
$\mathbb T^3=(\mathbb R/\mathbb Z)^3$ with its normalized product measure, as
defined in [[def-periodic-vector-sobolev-space-and-leray-projection]], and the
velocity and pressure fields are required to be $\mathbb T^3$-periodic
(equivalently, fields on $\mathbb T^3$). This is an **adopted idealization**
of a spatially periodic medium, or of a window inside a large medium whose
boundary influence is neglected; it is not a claim about the boundary
behaviour of any real flow, and the pressure is fixed by the convention of
zero spatial mean.

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
