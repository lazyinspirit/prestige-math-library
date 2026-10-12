---
id: rem-cm17-boundary-regularity-and-scope
kind: remark
title: "Boundary data, regularity limits and open scopes of the continuum page, and the model-versus-nature reading"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [pthm-cm17-incompressible-periodic-local-evolution, pthm-cm17-linear-elastic-equation-of-motion, pthm-cm17-string-wave-solutions, pthm-cm17-momentum-equation, post-cm17-fluid-constitutive, post-cm17-linear-elastic-constitutive, post-cm17-momentum-balance, def-cm-scalar-conservation-law-weak-and-entropy-solution, rem-local-versus-known-open-global-fluid-scope]
dependency_roles:
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
physical_scope: "Scope audit of the continuum page: the ideal boundary data used by its theorems (periodic cell, fixed ends, whole line, and the no-slip condition of the channel example), the smoothness and positive-Jacobian hypotheses that exclude shocks, interfaces and corners, the validity regimes of the three constitutive branches, the open specialist scopes deliberately not claimed (general compressible entropy systems, rough walls and boundary layers, nonlinear constitutive PDEs, turbulence closure, all-time three-dimensional regularity), and the model-versus-nature status of every result on the page. The remark asserts no new physical claim, no measurement and no theorem."
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

- **Boundary data are idealizations, not derived.** Every quantitative result
  of this page is proved for explicit ideal boundary data: the periodic cell
  of [[post-cm17-fluid-constitutive]] clause (c) (fields on $\mathbb T^3$,
  with the mean of the pressure fixed), fixed ends for the string
  ([[pthm-cm17-string-wave-solutions]]), the whole line for the d'Alembert
  problem, and the no-slip conditions $v(0)=v(h)=0$ used by the channel-flow
  example of the companion page. These conditions are **adopted**; they are
  not derived from the balance principles and are not claims about real
  boundaries. Rough walls, wall slip at small scales, boundary layers,
  free surfaces, contact lines and moving contact sets require boundary
  models outside this page and are not covered by any theorem here.

- **Regularity hypotheses exclude shocks and interfaces.** The transport and
  balance theorems of this page assume a $C^2$ motion with positive Jacobian
  and $C^1$ fields, and the local fluid theorem assumes smooth data. These
  hypotheses exclude shocks, material interfaces, cracks, corners and
  cavitation inside the motion: at such sets the classical identities are
  not asserted, and a weak or distributional formulation is required
  ([[def-cm-scalar-conservation-law-weak-and-entropy-solution]] defines the
  weak and entropy formulations of a scalar model, and the companion page
  exhibits explicit shock and rarefaction weak solutions of it). No general
  multidimensional shock theory, entropy existence theorem or interface
  kinematics is claimed by this page.

- **Constitutive validity is restricted and stated.** The linear elastic
  branch is a small-strain first-order idealization with two constant moduli
  ([[post-cm17-linear-elastic-constitutive]]); the Newtonian branch assumes a
  constant viscosity and an incompressible, isothermal description, and the
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
  the known open global regularity question is recorded as open in
  [[rem-local-versus-known-open-global-fluid-scope]]; this page inherits that
  boundary rather than asserting a result across it.

- **Model deductions versus nature.** All results of this page are conditional
  deductions from the adopted postulates
  ([[post-cm17-momentum-balance]] and the constitutive postulates) and the
  cited mathematics, subject to the idealizations recorded above. They do not
  establish that the model describes any material, and no measurement is used
  or asserted. Comparing a prediction with an observation tests the model,
  the boundary data and the apparatus together; agreement is evidence under
  stated conditions, not a proof of the model, and disagreement may expose a
  constitutive law, a boundary condition, or an analysis assumption rather
  than a single principle.
