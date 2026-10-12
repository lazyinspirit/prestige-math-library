---
id: post-cm11-heavy-top
kind: postulate
title: "Adoption of the heavy symmetric top branch: axisymmetric rigid material, a fixed pivot material point, a uniform gravitational field and the balance of angular momentum about the pivot"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [post-cm10-rigid-material, post-cm11-torque-balance, post-cm06-ideal-reaction-law, def-cm06-holonomic-constraint-model, post-cm01-frames, def-cm01-units, def-interval, def-cm10-rigid-body-configuration, def-cm10-angular-velocity, def-cm10-inertia-tensor, def-countable-choice, def-cm-special-orthogonal-group, def-euclidean-inner-product, def-cross-product-in-r3]
dependency_roles:
  post-cm10-rigid-material: formulation-prerequisite
  post-cm11-torque-balance: formulation-prerequisite
  post-cm06-ideal-reaction-law: formulation-prerequisite
  def-cm06-holonomic-constraint-model: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm10-angular-velocity: formulation-prerequisite
  def-cm10-inertia-tensor: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the heavy symmetric top branch of the rigid-material model: a reference mass distribution whose body inertia matrix is diag(A_c,A_c,C_c) about a declared symmetry axis, a material point held fixed at the origin of the inertial frame (the pivot, on the symmetry axis at distance d from the centre of mass, so that the centre of mass is constrained to the circle of radius d about the pivot), an ideal pivot mechanism contributing no torque about the pivot in the framework's sense of a frictionless hinge, a uniform gravitational field of magnitude g directed along $-e_3$, and the adopted balance of angular momentum about the pivot. The branch excludes friction and driving torques at the pivot, rolling and sliding contacts, non-axisymmetric bodies and non-uniform fields, and asserts no measured value and no claim that a concrete top or gyroscope realises it."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 3.5-3.6, Eqs. (3.54)-(3.70), printed pages 62-70 (PDF pages 68-76): Euler angles, the Lagrangian of the symmetric heavy top, its cyclic momenta and reduced energy"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Sections 4.5-4.6, Eqs. (4.72)-(4.92), chapter pages 15-22 (PDF pages 69-76): the fast-top approximation, Euler angles for the symmetric top, the exact reduced effective potential, and the general moving-frame acceleration relation with the inertial terms"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Section 2.10, Eqs. (2.84)-(2.91): the axisymmetric top with a fixed point, its Lagrangian and conserved momenta"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. W. Stewart, Advanced Classical Mechanics (MIT 8.09 Advanced Classical Mechanics, Fall 2014 course text), Chapter 2 Section 2.5, printed pages 48-51 (PDF pages 51-54): the symmetric top about a fixed point and its reduction to a one-dimensional problem"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the framework the following **heavy symmetric
top branch** of the rigid-material model, in the setting of
[[post-cm10-rigid-material]].

**(i) Setting.** A model of the branch carries the data of
[[post-cm10-rigid-material]]: a reference mass distribution $\nu$ with total
mass $m>0$ and centred reference coordinates, a time window $I_0$, an
inertial frame with adapted coordinates $(t,x)$ ([[post-cm01-frames]]),
whose origin is chosen at the pivot point of clause (iii), and a motion
$x(t,\rho)=c(t)+R(t)\rho$ with configuration path $(c,R)$ of class $C^{2}$
([[def-cm10-rigid-body-configuration]]). Assume the Axiom of Countable
Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), used only through the
integrals of the model's inertial quantities. Fix once and for all an
orthonormal basis $(e_{1},e_{2},e_{3})$ of the reference coordinates.

**(ii) Axisymmetry and the declared parameters.** The body inertia matrix of
the model ([[def-cm10-inertia-tensor]] clause (a)) is
$$I=A_{c}\,(e_{1}e_{1}^{\mathsf T}+e_{2}e_{2}^{\mathsf T})+C_{c}\,e_{3}e_{3}^{\mathsf T},\qquad A_{c}>0,\ C_{c}>0,$$
so that $e_{3}$ is the **symmetry axis**; the numbers $A_{c}$, $C_{c}$ are
declared model parameters of dimension $\mu\ell^{2}$, read in kilogram metres
squared, and are not measured within the framework. The branch also declares
a **pivot distance** $d>0$ of dimension $\ell$ and a **field strength**
$g>0$ of dimension $\ell\tau^{-2}$, read in metres per second squared
([[def-cm01-units]]).

**(iii) The pivot constraint.** The material point of reference coordinate
$\rho_{p}:=-d\,e_{3}$ is the **pivot material point**; it lies on the
symmetry axis at distance $d$ from the centre of mass. The motions of the
branch are those satisfying
$$c(t)+R(t)\rho_{p}=0\qquad(t\in I_{0}),$$
that is $c(t)=d\,R(t)e_{3}$: the pivot material point is held fixed at the
origin of the inertial frame for the whole time window, and the centre of
mass is constrained to the circle of radius $d$ about the origin. The
constraint is maintained by a mechanism (a bearing, a hinge or a fine
support) whose force system is **ideal** in the sense adopted for
frictionless hinges in [[post-cm06-ideal-reaction-law]] clause (iii) together
with the virtual-work law of its clause (i): the mechanism exerts on the body
a force system equivalent to a single force applied at the pivot point, so
that its total torque about the origin **vanishes**. The holonomic-constraint
vocabulary of [[def-cm06-holonomic-constraint-model]] — constrained curve
families, reaction fields and the declaration that the constraint is
maintained by an additional force contribution — is the framework's account
for finitely many particle labels; the present model is a continuum, and this
clause adopts the analogous idealisation for it. No friction, damping or
driving torque at the pivot is asserted; such torques are excluded and would
have to be declared as part of a torque datum with their own model.

**(iv) The uniform gravitational field.** The model declares a **uniform
gravitational acceleration** $G:=-g\,e_{3}$ of dimension $\ell\tau^{-2}$:
every material point of the body is subject to the external force
$G\,d\nu$, that is, the force per unit mass is the constant vector $-g e_{3}$
([[def-euclidean-inner-product]], [[def-cross-product-in-r3]] for the
spatial vectors). The field is a model idealisation: it asserts neither a
particular direction in any absolute sense (the direction $e_{3}$ is a
declared frame direction) nor a measured value of $g$, and it is not
asserted to represent the Earth's or any planet's field. The resultant of
this force system and its total torque about a point are computed in
the reduction theorem of this page; in particular the resultant is the total weight
$-mg e_{3}$ applied at the centre of mass.

**(v) The adopted dynamics.** Along every motion of the branch adopt the
**balance of angular momentum about the pivot**: with
$$J_{p}(t):=\int\bigl(x(t,\rho)-0\bigr)\times\partial_{t}x(t,\rho)\,d\nu(\rho)$$
the angular momentum of the model about the origin, and with $\tau_{p}(t)$
the total external torque about the origin — the sum of the gravitational
torque and of the pivot reaction torque, the latter vanishing by clause
(iii) — adopt
$$J_{p}'(t)=\tau_{p}(t)\qquad(t\in I_{0}).$$
This is an adopted dynamical law of the branch, analogous to but distinct
from the balance of [[post-cm11-torque-balance]] clause (iii) about the
centre of mass; it acquires content only together with the kinematic
constraint of clause (iii) and the external force system of clause (iv). No
equation of motion for the pivot reaction is asserted: the reaction is
whatever force the ideal mechanism supplies, and its torque about the origin
is zero by clause (iii).

**(vi) Scope and exclusions.** The branch excludes non-axisymmetric bodies
($A_{c}$ and $C_{c}$ are the two transverse and the axial moment and no other
inertia data are used), bodies whose mass distribution fails to produce this
inertia matrix, non-uniform gravitational fields, friction and driving
torques at the pivot, rolling or sliding contacts, impacts, deformable
bodies and variable mass, and every relativistic or quantum description. It
asserts no force law for the pivot reaction, no conservation law and no
measured value of $A_{c}$, $C_{c}$, $m$, $d$ or $g$. Whether the branch is
adequate for a given apparatus — a top on a bearing, a gyroscope in a gimbal,
a spinning shell — is decided by comparing the model's conditional
predictions with reported observations of that apparatus under its stated
regime, and agreement is evidence about the combined model and apparatus, not
a proof of the idealisation.

**(vii) Relation to the other balances.** The balance of clause (v) is not
claimed to be a consequence of the centre-of-mass balance of
[[post-cm11-torque-balance]] clause (iii), nor conversely; the two are
separate adopted laws about different points, and neither is deduced from the
framework's particle balances. A model may use both simultaneously, and the
reduction theorem of this page uses only clause (v) together with clauses
(ii)-(iv).
