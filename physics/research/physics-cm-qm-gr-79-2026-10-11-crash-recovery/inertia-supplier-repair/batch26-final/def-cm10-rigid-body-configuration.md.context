---
id: def-cm10-rigid-body-configuration
kind: definition
title: "Configuration, configuration space and orientation of a rigid-material model in an inertial frame"
status: draft
origin: session
domain: physics
dependency_level: 7
deps: [post-cm10-rigid-material, post-cm01-frames, def-cm-rigid-placement-and-body-angular-velocity, def-cm-mass-distribution-and-inertia-matrix, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold, lem-cm-rigid-labeling-stabilizer, lem-cm-adapted-charts-and-galilean-transformations, def-cm01-units, def-matrix-space, def-euclidean-inner-product]
dependency_roles:
  post-cm10-rigid-material: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  def-cm-rigid-placement-and-body-angular-velocity: mathematical-premise
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold: mathematical-premise
  lem-cm-rigid-labeling-stabilizer: mathematical-premise
  lem-cm-adapted-charts-and-galilean-transformations: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-matrix-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The configuration data of the rigid-material model branch of [[post-cm10-rigid-material]] in one fixed inertial frame: the configuration pair (c,R) of centre-of-mass position and orientation, its reading as a placement of the reference mass distribution, the configuration space $\\mathbb R^3\\times SO(3)$ with the dimension three plus three, the body-fixed orthonormal frame, the reference placement, the faithfulness of the parametrization for nondegenerate labelings, and the description of the same motion in a second inertial frame. No force, torque, equation of motion, time evolution or measured value is asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.1, Eqs. (3.3)-(3.10), printed pages 46-49 (PDF pages 52-55): the rigid displacement as translation plus rotation, the body-fixed and space-fixed orthonormal bases, and the six independent configuration variables"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.1, Eqs. (4.1)-(4.6), chapter pages 1-3 (PDF pages 55-57): the configuration of a rigid body as a position plus an orientation, with the Euler-angle discussion deferred to local charts"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Sections 2.1-2.2, Eqs. (2.8)-(2.30): the configuration of a rigid body as a placement, with orientation given by a rotation matrix and the body-frame description of the same motion"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 2 Sections 2.1-2.2, printed pages 29-33 (PDF pages 32-36): the rotation group $SO(3)$ as the configuration space of an oriented body and the transformation of descriptions between frames"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## Definition

Adopt the model data, the time window $I_0$, the inertial frame and the
notation of [[post-cm10-rigid-material]]: the reference mass distribution
$\nu$ with total mass $m$ and centred reference coordinates, and a motion
$x(t,\rho)=c(t)+R(t)\rho$ with configuration path $(c,R)$ of class $C^2$.

**(a) Configuration and configuration space.** The **configuration** of the
model at time $t$ in the frame is the pair $(c(t),R(t))$; the pair
$(c,R)$ is a **configuration path**. The **configuration space** of the model
is the set
$$\mathcal C:=\mathbb R^3\times SO(3),$$
read through the identification of $M_3(\mathbb R)$ with $\mathbb R^{9}$
([[def-matrix-space]]) so that $\mathcal C\subseteq\mathbb R^{12}$. The
configuration determines the placement $x=c+R\,\cdot$ at that time, and the
reference placement is $(c,R)=(0,I_3)$. Under the identification of
$M_3(\mathbb R)$ with $\mathbb R^{9}$, the group $SO(3)$ is a compact
three-dimensional embedded submanifold of $M_3(\mathbb R)$ and a subgroup of
the general linear group ([[lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold]]
clauses 1 and 3, [[lem-cm-so3-is-a-matrix-group]]); consequently
$\mathcal C=\mathbb R^3\times SO(3)$ is a six-dimensional smooth manifold
with the product structure. Its dimension $3+3=6$ is read as three
translation coordinates of $c$ and three orientation degrees of freedom of
$R$; the model of [[post-cm10-rigid-material]] has no other configuration
degrees of freedom, since deformation and internal variables are excluded by
that postulate.

**(b) Centre of mass, orientation, body frame.** Because
$\int\rho\,d\nu=0$, the configuration's translation is the position of the
centre of mass of the model,
$\int x(t,\rho)\,d\nu(\rho)=mc(t)$. The rotation $R(t)$ is the **orientation**
of the model at time $t$: the linear map that carries reference coordinates
into the frame's spatial coordinates, so that a material point whose
reference coordinate is $\rho$ is found at the spatial position $x(t,\rho)$.
The **body-fixed frame** at time $t$ is the ordered orthonormal basis
$(R(t)e_1,R(t)e_2,R(t)e_3)$ of the spatial space, obtained by applying the
orientation to the standard basis; the basis is $g$-orthonormal because
$R(t)\in O(3)$ preserves the Euclidean inner product
([[def-euclidean-inner-product]], [[def-cm-special-orthogonal-group]]). The
material point of reference coordinate $\rho$ has **spatial position**
$x(t,\rho)$ and **reference coordinates** $\rho$.

**(c) Faithfulness for nondegenerate labelings.** Suppose the label set
$S\subseteq\mathbb R^3$ contains the origin and two linearly independent
material vectors, and let $(c,R)$ and $(\bar c,\bar R)$ be configurations with
$c+R\rho=\bar c+\bar R\rho$ for every $\rho\in S$. Evaluating at the origin of
$S$ gives $c=\bar c$; then $\bar R^{-1}R$ is an element of $SO(3)$ fixing every
vector of $S$, so $\bar R^{-1}R=I_3$ by [[lem-cm-rigid-labeling-stabilizer]]
and $R=\bar R$.
Hence for a nondegenerate labeling the assignment
$(c,R)\mapsto(x:=c+R\,\cdot)$ is injective on configurations, and the
orientation and the centre-of-mass position are attributes of the placement
rather than artefacts of the parametrization. For a labeling supported on a line through
the origin, by contrast, the rotations about that line fix the labels and the
placement determines $R$ only up to composition with them; such a labeling is
called **degenerate** and its orientation contains data not visible in the
placed material points. Both cases are configurations of the model; the
distinction is recorded here because later items use it.

**(d) Description in another inertial frame.** Let a second inertial frame be
related to the first by the transformation $t'=t+b$, $x'=Qx+ut+a$ of
[[post-cm01-frames]] clause (iv), with $b\in\mathbb R$, $a,u\in\mathbb R^3$
and $Q\in SO(3)$
([[lem-cm-adapted-charts-and-galilean-transformations]] clause 1); the letters
$Q$ and $u$ are the rotation and the boost velocity written $R$ and $v$ in
[[post-cm01-frames]], renamed to avoid clashes with the orientation path
$R(t)$ and the material velocity field of clause (e). The
**description of the same motion in the second frame** assigns to the same
material label $\rho$ the events of the motion in the new coordinates,
$$\tilde x(t',\rho):=Q\,x(t'-b,\rho)+u\,(t'-b)+a .$$
Substituting $x(t,\rho)=c(t)+R(t)\rho$ and using distributivity of the matrix
product over sums expresses the description as a motion of the same model in
the second frame, with configuration path
$$\tilde c(t')=Qc(t'-b)+u\,(t'-b)+a,\qquad \tilde R(t')=Q\,R(t'-b),$$
where $\tilde R(t')\in SO(3)$ for every $t'$ because $SO(3)$ is closed under
matrix multiplication ([[lem-cm-so3-is-a-matrix-group]]); the pair
$(\tilde c,\tilde R)$ is again of class $C^2$. This description is a
convention forced by the frame change,
not a dynamical statement; the transformation laws of the velocity field, the
angular velocity and the inertia data are proved in the frame-covariance
theorem of this page.

**(e) Material velocities.** For a motion with configuration path $(c,R)$, the
**material velocity** of the label $\rho$ at time $t$ is the derivative
$$\partial_tx(t,\rho):=c'(t)+R'(t)\rho,$$
which exists by differentiability of $c$ and of the entries of $R$
([[def-cm-rigid-placement-and-body-angular-velocity]]). The **velocity field
of the motion** at time $t$ is the map
$p\mapsto v(t,p)$ assigning to a spatial point the velocity of the material
point currently placed there, defined on the image of the placement. Neither
the configuration nor the placement by itself asserts a dynamics: the pair
$(c,R)$ is a description of the position and orientation of the body, and the
material velocity is its kinematic derivative.

## Remarks

- **Configuration pairs are not coordinates.** The description in (a) names
  the global objects of the configuration space. Local coordinates on
  $SO(3)$, their singularities and the global character of the orientation
  are treated in [[rem-cm10-orientation-charts]].

- **Six degrees of freedom, by parametrization and by faithfulness.** The
  dimension count in (a) uses the manifold structure of $SO(3)$; the
  nondegeneracy clause (c) is what makes the count a statement about the
  placements of a labelled body rather than a count of parameters, in the
  sense of [[lem-cm-rigid-labeling-stabilizer]].

- **The convention on $\nu$ is part of the interface.** A consumer that uses
  a different origin of reference coordinates, or a non-centred mass
  distribution, must state its own translation bookkeeping; the model of
  [[post-cm10-rigid-material]] fixes the origin at the centre of mass, and
  [[thm-cm-parallel-axis-theorem]] is the mathematical supplier for inertia
  tensors about displaced points.

- **No measured or empirical content.** The configuration data are model
  quantities; the item asserts no measured orientation, position, size or
  mass, and no claim that any body is rigid.
