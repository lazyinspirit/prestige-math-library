---
id: rem-cm17-boundary-regularity-and-scope
kind: remark
title: "Boundary data, regularity limits and open scopes of the continuum page, and the model-versus-nature reading"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [pthm-cm17-incompressible-periodic-local-evolution, pthm-cm17-linear-elastic-equation-of-motion, pthm-cm17-string-wave-solutions, pthm-cm17-momentum-equation, post-cm17-fluid-constitutive, post-cm17-linear-elastic-constitutive, post-cm17-momentum-balance, def-cm-scalar-conservation-law-weak-and-entropy-solution, rem-local-versus-known-open-global-fluid-scope, post-cm17-continuum-kinematic-model]
dependency_roles:
  post-cm17-continuum-kinematic-model: formulation-prerequisite
  pthm-cm17-incompressible-periodic-local-evolution: physical-result
  pthm-cm17-linear-elastic-equation-of-motion: physical-result
  pthm-cm17-string-wave-solutions: physical-result
  pthm-cm17-momentum-equation: physical-result
  post-cm17-fluid-constitutive: formulation-prerequisite
  post-cm17-linear-elastic-constitutive: formulation-prerequisite
  post-cm17-momentum-balance: formulation-prerequisite
  def-cm-scalar-conservation-law-weak-and-entropy-solution: mathematical-premise
  rem-local-versus-known-open-global-fluid-scope: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope audit of the continuum page: the ideal boundary data used by its boundary-value and evolution results (periodic cell, fixed ends, whole line, and the no-slip condition of the channel example), the actual pointwise applicability limits of the smoothness and positive-Jacobian hypotheses of the finite-motion transport and balance branch, its separately adopted exclusion of material interfaces and its theorem-specific boundary regularity, the separately adopted reference-coordinate linear elastic balance without a finite-motion requirement, the validity regimes of the constitutive branches and the separate one-dimensional string model, the open specialist scopes deliberately not claimed (general compressible entropy systems, rough walls and boundary layers, nonlinear constitutive PDEs, turbulence closure, all-time three-dimensional regularity), and the model-versus-nature status of every result on the page. The remark asserts no new physical claim, no measurement and no theorem."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 12.1-12.3 (fluid boundary conditions and the limits of the inviscid and viscous models)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Sections 7.1, 7.3 and 8.5 (idealizations of the continuum description, elastic moduli and viscous channel flows with their conditions)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: n/a
---

## Remarks

- **Boundary data are idealizations, not derived.** Boundary-value and
  evolution results use explicit ideal domains and boundary data: the periodic cell
  of [[post-cm17-fluid-constitutive]] clause (c) (fields on $\mathbb T^3$,
  with the mean of the pressure fixed), fixed ends for the string
  ([[pthm-cm17-string-wave-solutions]]), the whole line for the d'Alembert
  problem, and the no-slip conditions $v(0)=v(h)=0$ used by the channel-flow
  example of the companion page. These conditions are **adopted**; they are
  not derived from the balance principles and are not claims about real
  boundaries. Rough walls, wall slip at small scales, boundary layers,
  free surfaces, contact lines and moving contact sets require boundary
  models outside this page and are not covered by any theorem here.

- **Regularity limits and separate model exclusions.** The finite-motion
  transport and balance theorems assume a $C^2$ motion with positive Jacobian
  and $C^1$ fields, and the local fluid theorem assumes smooth data. These
  classical identities apply only where their stated hypotheses hold; they
  do not apply pointwise across a jump discontinuity of a required $C^1$
  field or where the motion loses its required regularity, injectivity or
  positive Jacobian. A **material interface**, a surface separating material
  portions, need not produce such a discontinuity: the motion and fields can
  extend smoothly across it. [[post-cm17-continuum-kinematic-model]] clause
  (iv) separately excludes material interfaces from its adopted physical
  scope; this is a model restriction, not a consequence of smoothness.
  Boundary corners likewise need not violate field regularity: the body data
  require a bounded open region, while each boundary integral has its own
  domain hypotheses. In particular, [[post-cm17-momentum-balance]] permits
  finite piecewise $C^1$ presentations with face integrals and surface-null
  edges; a corner alone does not require a weak formulation. For fields with
  jumps, these classical results supply no balance across the discontinuity.
  [[def-cm-scalar-conservation-law-weak-and-entropy-solution]] separately
  defines a scalar weak balance tested against compactly supported $C^1$
  functions and its entropy inequalities; the companion page exhibits shock
  and rarefaction solutions in that specified formulation. No general
  multidimensional shock theory, entropy existence theorem or interface
  kinematics is claimed by this page.

- **Constitutive validity is restricted and stated.** The linear elastic
  branch is a small-strain first-order idealization with two constant moduli
  ([[post-cm17-linear-elastic-constitutive]]); the Newtonian branch assumes a
  constant viscosity and an incompressible, isothermal description, and the separately adopted constant-density incompressible Euler branch sets the viscous stress to zero, while the
  inviscid barotropic branch assumes a pressure law and a conservative body
  force ([[post-cm17-fluid-constitutive]]). In every branch the parameters
  ($\lambda,\mu_s$; $\eta$; the pressure law) are model data: a numerical
  comparison uses measured values as qualified empirical premises with their
  conditions and uncertainty, and no such value is asserted on this page.
  Plastic, viscoelastic, anisotropic, temperature-coupled, non-Newtonian and
  turbulent-closure responses are outside the page.

- **Open specialist scopes.** The following are deliberately **not** claimed,
  as general results or as special cases of the theorems above: general
  compressible entropy systems in several space dimensions; rough-wall
  traces and boundary-layer asymptotics; nonlinear constitutive partial
  differential equations beyond the stated branches;
  turbulence universality or closure; and all-time three-dimensional
  regularity of the viscous model. The local periodic theorem is local, and
  [[rem-local-versus-known-open-global-fluid-scope]] records the dated 2026 CMI announcement about the Euclidean problem and the absence of an audited transfer to this unforced periodic model; this page inherits the local-proof boundary without asserting a blanket present-day open status or a global conclusion.

- **Model deductions versus nature.** All results of this page are conditional
  deductions from each result's explicitly adopted model assumptions and
  the cited mathematics, subject to its stated hypotheses. The
  finite-motion momentum deduction uses the kinematic and mass-balance
  hypotheses of [[pthm-cm17-momentum-equation]] and the momentum-balance
  postulate [[post-cm17-momentum-balance]]; a constitutive application also
  adopts its specified branch. The linear elastic deduction
  [[pthm-cm17-linear-elastic-equation-of-motion]] instead uses
  [[post-cm17-linear-elastic-constitutive]]: a $C^2$ reference displacement
  $\xi:I\times O\to\mathbb R^3$, constant reference density $\rho_0>0$,
  the isotropic stress $\sigma=\lambda(\operatorname{tr}e)I_3+2\mu_s e$
  with $e=\tfrac12(D_X\xi+D_X\xi^{\mathsf T})$ and its stated moduli,
  and the adopted reference balance
  $\rho_0\partial_t^2\xi=\rho_0b_{\mathrm{ref}}+\operatorname{div}_X\sigma$.
  It requires neither a finite motion $X+\xi$ nor a positive Jacobian,
  and constant reference density does not assert constant current density.
  The string results separately adopt the one-dimensional model
  of [[pthm-cm17-string-wave-solutions]]: uniform linear density
  $\rho_\ell>0$, tension $\tau_s>0$, and small transverse displacement
  satisfying $u_{tt}=(\tau_s/\rho_\ell)u_{xx}$ with the specified line or
  fixed-end data. Its model equation is adopted, not deduced from the
  three-dimensional constitutive postulates. They do not
  establish that the model describes any material, and no measurement is used
  or asserted. Comparing a prediction with an observation tests the model,
  the boundary data and the apparatus together; agreement is evidence under
  stated conditions, not a proof of the model, and disagreement may expose a
  constitutive law, a boundary condition, or an analysis assumption rather
  than a single principle.
