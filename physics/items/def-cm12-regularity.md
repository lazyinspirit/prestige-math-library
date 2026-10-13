---
id: def-cm12-regularity
kind: definition
title: "Velocity-regular potential presentations: the velocity Hessian of the mechanical Lagrangian, regular states and regular charts"
status: published
origin: session
domain: physics
dependency_level: 14
deps: [def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm-legendre-map-in-a-time-dependent-chart, def-cm01-configuration, def-cm01-units, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-invertible-matrix-and-general-linear-group, def-linear-map, cor-square-matrix-invertible-iff-determinant-is-a-unit]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-linear-map: mathematical-premise
  cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The regularity vocabulary of a potential presentation of the framework's force branch: the velocity Hessian of the mechanical Lagrangian in Cartesian data and in a declared generalized-coordinate chart, velocity-regular states and regular presentations, and the local inverse branch data attached to a regular state. The item defines conditions on the model's chart data and fixes the notation used by the local Legendre theorem and by the Hamiltonian items; it asserts no existence of a global momentum inverse, no equation of motion and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.1.1, printed pages 82-83 (PDF pages 88-89): the requirement that the velocity-momentum relation be inverted, and the convexity discussion accompanying the Legendre transform"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 8.2-8.3: the conversion of Lagrange's equations into Hamiltonian form hinges on the inversion of the generalized-momentum relation"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 3.1.1: the Legendre transform cannot be implemented in general because it requires the functional inverse of the velocity derivative, which for velocity-quadratic Lagrangians is explicitly invertible"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed page 9 (PDF page 12): for Lagrangians quadratic in the velocities the momenta are linear in the velocities and the inverse T-hat inverse exists because the kinetic matrix is positive definite"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---
## Definition

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] in the
fixed inertial frame with adapted coordinates $(t,x)$: masses
$m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$
([[def-cm01-configuration]]), $C^{2}$ potential $U$ and residual forces $d$ of
the standing regularity ([[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]]). Dimensions are read by
[[def-cm01-units]], and the Euclidean gradients and second partial derivatives
in the velocity slot are those of [[def-jacobian-matrix-and-gradient]] and
[[def-directional-and-partial-derivatives]].

**(a) Velocity Hessian.** When $Q\ne\varnothing$, let $(O,L)$ be the fibre-full time-dependent
Lagrangian chart of clause (c) of [[def-cm07-action-and-mechanical-lagrangian]]
and let $\widetilde L$ be the substituted Lagrangian of a generalized-coordinate
map $X:\Omega\to Q$ ([[def-cm07-generalized-coordinates-and-forces]]). The
**velocity Hessian** of the presentation in Cartesian data is the matrix
$L_{vv}(t,x,v)\in M_{3N}(\mathbb R)$ of second partial derivatives of $L$ in
its third slot at $(t,x,v)$; in the coordinates $X$ it is the matrix
$\widetilde L_{vv}(t,q,v)$ of second partial derivatives of $\widetilde L$ in
its third slot. Invertibility of the Hessian is invertibility of a linear map
in the sense of [[def-invertible-matrix-and-general-linear-group]], read by
[[cor-square-matrix-invertible-iff-determinant-is-a-unit]] through the
determinant, and matrices act on vectors by
[[def-matrix-product-and-identity-matrix]] and [[def-linear-map]];
transposes are those of [[def-transpose-of-a-matrix]].

**(b) Regular states and regular presentations.** The presentation is
**velocity-regular at the state** $(t,x,v)$ of the Cartesian chart when
$\det L_{vv}(t,x,v)\neq0$, and **velocity-regular at the state** $(t,q,v)$ of
the chart of $X$ when $\det\widetilde L_{vv}(t,q,v)\neq0$. It is **regular on
a chart** when it is velocity-regular at every state of that chart, and
**regular** when this holds on the chart under discussion. This is exactly the
regularity of [[def-cm-legendre-map-in-a-time-dependent-chart]] instantiated, for $Q\ne\varnothing$,
at the corresponding fibre-full chart: the Legendre map is regular at a state
precisely when its velocity Hessian there is nonsingular. The evaluation of
the Hessian for the model's mechanical presentations, and the conclusion that
those presentations are regular at every state, are proved on this page (the
local Legendre theorem) and are not part of this definition.
If $Q=\varnothing$, the Cartesian state domain is empty and regularity
there is vacuous; there is no fibre-full chart instance of the cited
mathematical definition and no generalized-coordinate map, whose domain
$\Omega$ must be nonempty.

**(c) Local inverse branch data.** Let the presentation be velocity-regular
at a state $z$ of a chart with Legendre map $\mathbb F$ and momentum image
$z':=\mathbb F(z)$. A **local inverse branch at $z$** is a pair of open sets
$W\ni z$ and $W'\ni z'$ together with a $C^{1}$ map $v_{W}:W'\to W$ that is
inverse to $\mathbb F|_{W}:W\to W'$; equivalently, $\mathbb F|_{W}$ is a
$C^{1}$ diffeomorphism onto $W'$ in the sense of
[[def-ck-euclidean-maps-and-diffeomorphisms]]. A local inverse branch assigns
to every momentum covector in $W'$ a state in $W$ whose fibre derivative is
that covector. Whether such a branch exists at a regular state, and when it
extends to a global fibre inverse, are conditional statements of the local
and global Legendre theorems of this page.

**(d) Status.** The item fixes the regularity vocabulary of the presentation
and the data used by the local Legendre theorem; it asserts no existence of
inverse branches, no hyperregularity, no equation of motion and no empirical
value. The regularity condition is a condition on the declared chart data
$(U,\mathsf M)$ and, in the coordinates $X$, on the declared map $X$; no
such condition is imposed on the residual forces $d$, which do not enter the
velocity Hessian of $L=K-U$.

## Remarks

- **Regularity is not hyperregularity.** Regularity is a pointwise
  nonsingularity condition, whereas the existence of a globally defined
  inverse Legendre branch on a whole momentum fibre is the separate condition
  of [[def-cm-legendre-map-in-a-time-dependent-chart]]; the two are compared
  on this page, and the example $\mathcal L(v)=e^{v}$ of the companion page
  shows that a presentation can be regular at every state and still fail to
  admit a global fibre inverse. The mechanical presentations of this framework lie on
  the positive side for both conditions, as the local and global Legendre
  theorems record.

- **Source caveat.** Tong's Section 4.1.1 phrases the invertibility
  requirement through convexity of the Lagrangian and the existence of a
  maximum; the scaffold's source audit records that this phrasing is too
  restrictive for local mechanical Legendre inversion, where the relevant
  hypothesis is nonsingularity of the velocity Hessian and a global inverse is
  needed only for global equivalence. The definition above follows the
  nonsingularity criterion; convexity is nowhere assumed, and the cited
  mathematical items prove the criterion.
