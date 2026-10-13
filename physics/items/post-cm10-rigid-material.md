---
id: post-cm10-rigid-material
kind: postulate
title: "Adoption of the rigid-material model branch: reference mass distribution, rigid placements, orientation and scope"
status: published
origin: session
domain: physics
dependency_level: 6
deps: [post-cm01-spacetime, post-cm01-frames, post-cm01-worldlines, def-cm01-units, def-cm-affine-time-space, def-cm-mass-distribution-and-inertia-matrix, lem-cm-mass-moments-are-finite, def-cm-rigid-placement-and-body-angular-velocity, def-cm-special-orthogonal-group, lem-cm-rigid-labeling-stabilizer]
dependency_roles:
  post-cm01-spacetime: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-affine-time-space: mathematical-premise
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  lem-cm-mass-moments-are-finite: mathematical-premise
  def-cm-rigid-placement-and-body-angular-velocity: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-rigid-labeling-stabilizer: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the rigid-material model branch of the framework: a bounded finite Borel measure (the reference mass distribution) of positive total mass with reference coordinates centred at its first moment, a nondegenerate time window, and motions given by rigid placements $x(t,\\rho)=c(t)+R(t)\\rho$ with $C^{2}$ translation and rotation curves into $SO(3)$. The idealization adopted is kinematic rigidity: all material mutual distances are constant in time. The branch excludes deformation, internal degrees of freedom, variable mass, impacts, and every force, torque, equation of motion, balance or conservation law for the configuration path; it asserts no measured mass, length, duration or orientation and no claim that any concrete body is rigid. It is a declared model branch distinct from the finitely many particle labels of the particle branch."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge Part II lecture notes, January 2015 printing), Section 3.1, printed pages 46-49 (PDF pages 52-55): the rigid body as material points with fixed pairwise distances, the displacement as translation plus rotation, the body-fixed orthonormal basis, and the count of six degrees of freedom"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.1, chapter pages 1-3 (PDF pages 55-57): rigidity as the absence of mutual-distance changes, the moving orthonormal basis and the six degrees of freedom of a rigid body"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Section 2.1, Eqs. (2.8)-(2.10), and Section 2.2, Eqs. (2.14)-(2.30): the rigid body as a system whose configuration is a placement of a mass distribution, the orientation path and the centre-of-mass split"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 2 Sections 2.1-2.2, printed pages 29-33 (PDF pages 32-36): $SO(3)$ and the configuration of a nondegenerate oriented body as a translation together with a rotation"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the framework the following **rigid-material
model** branch, in the spacetime and frames of [[post-cm01-spacetime]] and
[[post-cm01-frames]].

**(i) Reference mass distribution.** A rigid-material model carries, besides
the framework's time and frame structure, a **reference mass distribution**: a
measure $\nu$ on the Borel space $(\mathbb R^3,\mathcal B(\mathbb R^3))$ that
is a mass distribution in the sense of
[[def-cm-mass-distribution-and-inertia-matrix]] — finite and bounded, with
$\nu\bigl(\mathbb R^3\setminus\overline B_R(0)\bigr)=0$ for some real $R>0$,
and of total mass $m:=\nu(\mathbb R^3)\in(0,+\infty)$ — whose reference
coordinates are **centred**,
$$\int\rho\,d\nu(\rho)=0\in\mathbb R^3 .$$
The label variable $\rho$ is a coordinate of the model's reference placement
and has dimension $\ell$, each component read in metres; the total mass $m$
has dimension $\mu$, read in kilograms, and $R$ has dimension $\ell$ and is
the model's **reference size**
([[def-cm01-units]]). Under the Axiom of Countable Choice $\mathrm{AC}_\omega$,
used only through [[lem-cm-mass-moments-are-finite]] to make the polynomial
moments of $\nu$ of degree at most two finite, the first and second moments
of $\nu$ are finite real numbers. The measure $\nu$ and the number $m$ are
model data: no distribution of mass of any concrete body and no measured mass
is asserted.

**(ii) Time window and motions.** A model carries a **time window**
$I_0\subseteq\mathbb R$, a nondegenerate open interval $(a,b)$ with
$-\infty\le a<b\le+\infty$ and at least two points, read in seconds. Fix an
**inertial frame** of the model, that is the adapted chart
$(o,u,(e_1,e_2,e_3))$ with coordinates $(t,x)$ of [[post-cm01-frames]]. A
**motion** of the model in this frame is a map
$x:I_0\times\mathbb R^3\to\mathbb R^3$ for which there exist a map
$c:I_0\to\mathbb R^3$ and a map $R:I_0\to SO(3)$, both of class $C^2$
(componentwise derivatives, [[def-cm-affine-time-space]] for the coordinates
and [[def-cm-special-orthogonal-group]] for the target), such that
$$x(t,\rho)=c(t)+R(t)\rho\qquad(t\in I_0,\ \rho\in\mathbb R^3).$$
Adopt: the motions of the model are the maps of this form, and the pair
$(c,R)$ is the **configuration path** of the motion. The map
$x(t,\cdot):\mathbb R^3\to\mathbb R^3$ is the **placement** at time $t$ and is
the rigid placement of [[def-cm-rigid-placement-and-body-angular-velocity]]
with translation $c$ and rotation $R$; its material velocity is
$\partial_tx(t,\rho)=c'(t)+R'(t)\rho$, defined by differentiability of $c$ and
of the entries of $R$. The time window $I_0$ is the interval on which the
model's configuration path is considered; the model's time coordinate is
the frame time $t$.

**(iii) Rigidity idealization.** The idealization adopted is that the model
describes a body that does not deform, and its content is the representation
(ii): a placement of the form $x=c+R\rho$ with $R\in SO(3)$ preserves every
mutual distance, since $R(t)$ preserves the Euclidean norm
([[def-cm-special-orthogonal-group]]), so for all $\rho,\rho'\in\mathbb R^3$
the number $\lVert x(t,\rho)-x(t,\rho')\rVert_2=\lVert\rho-\rho'\rVert_2$ is
independent of $t$. The model class (ii) is *adopted* as the definition of a
rigid-material placement; a motion of material points that preserves all
mutual distances but whose label set fails to determine a rotation is not
claimed to be of this form, and the general characterization of
distance-preserving placements is neither asserted nor used on this page.
For a **nondegenerate labeling** — a label set containing the origin and two
linearly independent material vectors — distinct configurations $(c,R)$ and
$(\bar c,\bar R)$ give distinct placements, by [[lem-cm-rigid-labeling-stabilizer]];
the configuration data of (ii) therefore do not overcount for such a body.
Degenerate labelings and degenerate mass distributions are not excluded by
this postulate; the later items of the pair state where invertibility of the
inertial data must be assumed.

**(iv) Centre of mass and orientation.** Because the reference coordinates are
centred, the identity
$$\int x(t,\rho)\,d\nu(\rho)=mc(t)$$
holds for every motion, by linearity of the integral and
$\int\rho\,d\nu=0$; the physical reading is that $c(t)$ is the position of the
centre of mass of the model in the placement at time $t$. The rotation
$R(t)$ is the model's **orientation**: it carries reference coordinates into
the frame's spatial coordinates, and the **body-fixed frame** at time $t$ is
the ordered orthonormal basis $(R(t)e_1,R(t)e_2,R(t)e_3)$ of the spatial
space. The reading of $R(t)$ as the orientation of the placement uses the
nondegeneracy of (iii): for a nondegenerate labeling the material points
determine $R(t)$ uniquely, so the orientation is an attribute of the body's
placement and not of the choice of label coordinates.

**(v) Frame changes.** The description of a motion in a second inertial frame
is obtained by the change of coordinates $t'=t+b$, $x'=Qx+ut+a$ of
[[post-cm01-frames]] clause (iv), applied to every event of the motion; here
$Q\in SO(3)$ and $u\in\mathbb R^3$ are the rotation and the boost velocity of
that clause, written $R$ and $v$ there and renamed here to avoid a clash with
the orientation path $R(t)$ of clause (ii) and with the material velocity
field of the pair's definition. With the same $\rho$ labelling a material
point, the description in the second frame is
$$\tilde x(t',\rho):=Q\,x(t'-b,\rho)+u\,(t'-b)+a .$$
This description is again a motion of the model, with configuration path
$$\tilde c(t')=Qc(t'-b)+u\,(t'-b)+a,\qquad \tilde R(t')=Q\,R(t'-b),$$
because $SO(3)$ is closed under multiplication
([[def-cm-special-orthogonal-group]]); this is a consistency requirement of
the model's frame language, exactly as for the particle worldlines of
[[post-cm01-worldlines]] clause (ii). The derived transformation laws of the
angular velocity, of the inertia data and of the kinetic splitting are
theorems of this pair's page, not part of this postulate.

**(vi) No dynamics.** This postulate fixes the kinematic class of the model
and its mass data only. It asserts no force law, no torque law, no equation of
motion for the pair $(c,R)$, and no balance or conservation law; in
particular the model does not by itself constrain the configuration path,
and the effect of forces and torques on a body is a separate model
assumption. It also asserts no measured value of any mass, length, duration
or orientation.

**(vii) Scope and exclusions.** The branch excludes deformation, internal
degrees of freedom such as temperature, chemical state or an independent spin
variable, variable mass, ablation and impact events, contact, friction and
dissipative constitutive laws, and any relativistic or quantum description.
It excludes bodies whose mass distribution is not a bounded finite Borel
measure of the stated kind. A rigid-material model is not a system of
finitely many particle labels: the continuum measure $\nu$ carries the mass
data of the model, and the situations of point masses are the special cases
of measures supported on finitely many points. All physical statements about
the model weight material points by $\nu$; properties of $\nu$-null sets of
labels are not physical properties of the body.

## Status and scope

- **Rigidity is an adopted assumption, not a derived law.** Clause (iii)
  declares the model class; no theorem of this pair proves that any physical
  body is rigid, and no measured shape or mass is recorded. A statement of
  the branch is a conditional consequence of this postulate, the cited
  mathematics and the item's own hypotheses.

- **The mass measure is fixed in time.** The measure $\nu$ is attached to the
  model once and does not depend on the time coordinate or on the frame; the
  motor of the motion is the pair $(c,R)$ alone. This is what excludes
  variable-mass and deformable descriptions from the branch.

- **What the pair proves.** The definitions of this pair fix the
  configuration space $\mathbb R^3\times SO(3)$, the angular velocity and the
  inertia data of the model; its theorems prove the inertial identities of
  the motion (total momentum, kinetic splitting, angular momentum about the
  centre of mass), the principal-axis statements and the frame-covariance
  laws, each under its stated hypotheses. None of these completes the model:
  forces, torques and the corresponding equations of motion are supplied
  elsewhere.

- **Degenerate shapes are carried, not hidden.** The postulate admits mass
  distributions supported on a line through the origin. For such a shape the
  inertia tensor is not invertible and the relation between angular velocity
  and angular momentum loses injectivity; the pair's theorems state the
  criterion for invertibility, and the companion page exhibits the failure.

- **Frames are inertial and fixed.** The branch uses the inertial frames of
  [[post-cm01-frames]] and their allowed changes; time-dependent bases,
  rotating frames and non-inertial observers are different structures and
  belong to other pages of the track.
