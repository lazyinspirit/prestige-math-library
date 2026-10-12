---
id: post-cm17-linear-elastic-constitutive
kind: postulate
title: "Adopted isotropic linear elastic constitutive model with its small-strain regime and strain energy"
status: draft
origin: session
domain: physics
dependency_level: 11
deps: [def-cm-linear-elastic-constitutive-law, lem-cm-isotropic-elastic-strain-energy-positivity, def-cm17-continuum-body-and-units, def-cm17-traction-and-stress, post-cm17-continuum-kinematic-model, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, def-cm-euclidean-spatial-calculus]
dependency_roles:
  def-cm-linear-elastic-constitutive-law: mathematical-premise
  lem-cm-isotropic-elastic-strain-energy-positivity: mathematical-premise
  def-cm17-continuum-body-and-units: formulation-prerequisite
  def-cm17-traction-and-stress: formulation-prerequisite
  post-cm17-continuum-kinematic-model: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the small-strain isotropic linear elastic constitutive branch: displacement field, linear strain, stress matrix lambda (tr e) I + 2 mu_s e with positive-definite moduli, and the elastic strain-energy density with its positivity. The postulate states the small-strain kinematic idealization, the constancy of the reference density and the validity limits (small strains relative to a stress-free reference state, isothermal, no plasticity, viscosity, damage or coupling); it asserts no measured modulus, no boundary condition and no dynamical claim."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 11.2 and Problem 11.5 (linearized elasticity, isotropic stress-strain relations and the positive definite strain energy)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 7.3 (Hooke's law and the two elastic moduli of an isotropic medium)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt the following constitutive model for the small-displacement elastic
branch of the continuum framework
([[post-cm17-continuum-kinematic-model]],
[[def-cm17-continuum-body-and-units]]).

**(i) Small-displacement description.** There is a reference placement in
which the body is stress free and homogeneous, and the motion of the model is
described by a **displacement field** $\xi:I\times O\to\mathbb R^3$ of class
$C^2$ through $x(t,X)=X+\xi(t,X)$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).
The model retains only the first-order term in the displacement gradient in
its strain measure: the **linear strain** is
$e=\tfrac12(D\xi+D\xi^{\mathsf T})$, equivalently
$e_{ij}=\tfrac12(\partial_j\xi_i+\partial_i\xi_j)$
([[def-cm-linear-elastic-constitutive-law]]). The displacement gradients are
assumed small in the sense of the model: the linear constitutive relation
below is used as the first-order approximation of the material response about
the stress-free reference state, and no quantitative strain threshold is
asserted by this postulate.

**(ii) Constitutive law.** The stress matrix of the branch is

$$\sigma=\lambda\,(\operatorname{tr}e)\,I_3+2\mu_s\,e ,$$

with **Lamé parameters** $\lambda,\mu_s\in\mathbb R$ satisfying the positivity
hypotheses $\mu_s>0$ and $\lambda+\tfrac{2\mu_s}{3}>0$
([[def-cm-linear-elastic-constitutive-law]]). Both parameters are constant in
space and time in this branch. Their dimension is that of stress,
$[\lambda]=[\mu_s]=\mu\ell^{-1}\tau^{-2}$ ([[def-cm01-units]]); in SI they are
measured in $\mathrm{N\,m^{-2}}$.

**(iii) Strain energy.** The **strain-energy density** of the branch is
$W(e)=\tfrac{\lambda}{2}(\operatorname{tr}e)^2+\mu_s\operatorname{tr}(e^2)$,
and under the positivity hypotheses of (ii) it satisfies $W(e)\ge0$ with
equality only for $e=0$ ([[lem-cm-isotropic-elastic-strain-energy-positivity]]).

**(iv) Density and kinematics.** In this branch the density is the constant
**reference density** $\rho_0>0$ of the homogeneous reference state; the
material acceleration is the second time derivative of the displacement,
$D_tu=\partial_t^2\xi$, and the spatial velocity is $u=\partial_t\xi$. These
replacements are part of the small-displacement idealization of the branch,
not consequences of the kinematic postulate
([[def-cm-euclidean-spatial-calculus]]).

**(v) Validity, exclusions and status.** The branch is **not** adopted for:
finite strains where the displacement gradient is not small; anisotropic
materials (the law has two moduli and an isotropic form); plastic, viscous,
viscoelastic, damaged or fracturing response; temperature-dependent moduli or
thermoelastic coupling; and materials with internal structure. The Lamé
parameters are **material parameters**: whenever a numerical value of
$\lambda$ or $\mu_s$ is used in a deduction it enters as a measured empirical
premise with its own conditions and uncertainty, and no value is asserted
here. The constitutive law itself is adopted model structure, not a measured
law and not a consequence of the balance principles.
