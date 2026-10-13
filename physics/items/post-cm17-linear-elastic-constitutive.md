---
id: post-cm17-linear-elastic-constitutive
kind: postulate
title: "Adopted isotropic linear elastic constitutive model with its small-strain regime and strain energy"
status: published
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
physical_scope: "Adoption of the small-strain isotropic linear elastic constitutive branch: displacement field, linear strain, stress matrix lambda (tr e) I + 2 mu_s e with positive-definite moduli, and the elastic strain-energy density with its positivity. The postulate states the small-strain kinematic idealization, the constancy of the reference density and the validity limits (small strains relative to a stress-free reference state, isothermal, no plasticity, viscosity, damage or coupling); it adopts the linear balance in reference coordinates and asserts no measured modulus, boundary condition or approximation error bound."
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

Adopt the following small-displacement elastic model on reference labels, with the body and unit conventions of [[def-cm17-continuum-body-and-units]].

**(i) Reference-coordinate description.** Let $I\subseteq\mathbb R$ be a nonempty open time interval and $O\subseteq\mathbb R^3$ an open reference region. Model data include $\xi:I\times O\to\mathbb R^3$ of class $C^2$, the displacement from a homogeneous stress-free reference placement. All spatial derivatives below are with respect to $X\in O$. Write $v_{\mathrm{ref}}:=\partial_t\xi$ and $a_{\mathrm{ref}}:=\partial_t^2\xi$. The **linear strain** is $e=\tfrac12(D_X\xi+D_X\xi^{\mathsf T})$, with $e_{ij}=\tfrac12(\partial_j\xi_i+\partial_i\xi_j)$ ([[def-cm-linear-elastic-constitutive-law]]). The constitutive relation is used as the first-order approximation about the reference state for small displacement gradients; no quantitative strain threshold is asserted.

If $\chi_t(X)=X+\xi(t,X)$ is additionally a positive-Jacobian diffeomorphism, it defines a finite motion; its spatial velocity obeys $u(t,\chi_t(X))=v_{\mathrm{ref}}(t,X)$, not an equality at the same numerical spatial and reference arguments. This additional finite-motion interpretation is not required for the linear field equations below.

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

**(iv) Reference density and adopted linear balance.** Fix a constant reference density $\rho_0>0$ and a continuous reference body-force-per-mass field $b_{\mathrm{ref}}:I\times O\to\mathbb R^3$. Adopt the linear momentum balance

$$\rho_0\partial_t^2\xi=\rho_0b_{\mathrm{ref}}+\operatorname{div}_X\sigma,\qquad (\operatorname{div}_X\sigma)_i=\sum_{j=1}^3\partial_{X_j}\sigma_{ij}.$$

The velocity, acceleration and density used here are reference fields. Constant $\rho_0$ is not an assertion of constant current density. For a finite motion with conserved mass that density instead satisfies $\rho(t,\chi_t(X))\det D_X\chi_t(X)=\rho_0$. The displayed linear balance is an adopted approximation model, not an exact change of variables in the finite-motion balances; no error bound for discarding higher-order terms is claimed.

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
