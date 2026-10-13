---
id: post-cm11-torque-balance
kind: postulate
title: "Adoption of the external-torque branch of the rigid-material model: declared torque data and the balance of angular momentum about the centre of mass"
status: draft
origin: session
domain: physics
dependency_level: 12
deps: [post-cm10-rigid-material, post-cm01-frames, def-cm01-units, def-interval, def-cm10-rigid-body-configuration, def-cm10-angular-velocity, def-cm10-inertia-tensor, def-countable-choice, pthm-cm10-kinetic-splitting, pthm-cm10-frame-covariance, pthm-cm03-angular-momentum-balance]
dependency_roles:
  post-cm10-rigid-material: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm10-angular-velocity: formulation-prerequisite
  def-cm10-inertia-tensor: formulation-prerequisite
  def-countable-choice: mathematical-premise
  pthm-cm10-kinetic-splitting: formulation-prerequisite
  pthm-cm10-frame-covariance: formulation-prerequisite
  pthm-cm03-angular-momentum-balance: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the external-torque branch of the rigid-material model branch of [[post-cm10-rigid-material]]: a declared continuous external-torque datum $\\tau:I_0\\to\\mathbb R^3$ (dimension $\\mu\\ell^{2}\\tau^{-2}$, newton metres), read as the total external torque about the centre of mass, and the adopted balance $L_c'=\\tau$ of the angular momentum about the centre of mass. The postulate asserts no force law producing $\\tau$, no balance for the centre-of-mass motion, no conservation law, no uniformity of rotation and no measured torque or observation; the countable-choice assumption is carried only for the finiteness of the defining integrals of the model's angular momentum. The branch excludes deformable bodies, impacts and variable mass; friction, contact and drive torques must be declared as part of $\\tau$ with their own models."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge Part II lecture notes, January 2015 printing), Section 3.3, printed pages 53-55 (PDF pages 59-61): the angular-momentum rate equals the applied torque, and Euler's equations in the body frame"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.4, Eqs. (4.63)-(4.66), chapter page 15 (PDF page 69): the angular-momentum balance of a rigid body and Euler's equations with torque components"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Section 2.9, Eqs. (2.80)-(2.83): the evolution of the angular momentum of a rigid body and Euler's equations under an applied torque"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the framework the following
**external-torque branch** of the rigid-material model, in the setting of
[[post-cm10-rigid-material]].

**(i) Setting.** A model of the branch carries the data of
[[post-cm10-rigid-material]]: a reference mass distribution $\nu$ with total
mass $m>0$ and centred reference coordinates, a time window $I_0$, an
inertial frame with adapted coordinates $(t,x)$ ([[post-cm01-frames]]), and a
motion $x(t,\rho)=c(t)+R(t)\rho$ with configuration path $(c,R)$ of class
$C^{2}$ ([[def-cm10-rigid-body-configuration]]). Assume the Axiom of
Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), used only
through [[pthm-cm10-kinetic-splitting]] to make the defining integrals of the
model's inertial quantities finite. Along the motion the body angular
velocity $\omega$ and the body inertia matrix $I$ are those of
[[def-cm10-angular-velocity]] and [[def-cm10-inertia-tensor]], and the
**angular momentum about the centre of mass** is
$$L_c(t):=\int\bigl(x(t,\rho)-c(t)\bigr)\times\bigl(\partial_tx(t,\rho)-c'(t)\bigr)\,d\nu(\rho),$$
the finite vector of clause 1 of [[pthm-cm10-kinetic-splitting]], which by
clause 4 of that item satisfies the identity
$$L_c(t)=R(t)\,I\,\omega(t)\qquad(t\in I_0).$$

**(ii) External torque datum.** An **external torque datum** of the branch on
the time window $I_0$ is a continuous map
$$\tau:I_0\longrightarrow\mathbb R^3,\qquad [\tau]=\mu\ell^{2}\tau^{-2},$$
the dimension being read in newton metres ([[def-cm01-units]]). Its intended
physical reading is: $\tau(t)$ is the **total external torque about the
centre of mass** at time $t$, the resultant moment about $c(t)$ of the forces
external to the model that act on the body at time $t$: weight in a declared
gravitational field, forces exerted by supports, pivots, axles or contacts,
thrusts and drives, applied couples, and frictional torques. Which external
agencies occur and which datum they jointly produce is model data fixed by
the model's further assumptions; this postulate does not derive $\tau$ from
any force system, and the statements of the pair use $\tau$ only through the
balance below.

**(iii) The adopted balance.** Along every motion of a model of the branch
with external torque datum $\tau$, adopt the **external-torque balance**
$$L_c'(t)=\tau(t)\qquad(t\in I_0).$$
This is an adopted dynamical law of the model. Through the identity
$L_c=RI\omega$ of clause (i) it is one vector equation relating the
configuration path, its first two time derivatives and the datum; it does
not by itself determine $(c,R)$, and it is not a consequence of the kinematic
definitions of [[post-cm10-rigid-material]].

**(iv) Torque-free motions.** A model of the branch whose datum vanishes,
$\tau\equiv0$ on $I_0$, is called **torque-free**; for such a model the
balance reads $L_c'\equiv0$ on $I_0$. Torque-free is a property of the
declared datum, not of the mass distribution: every model of
[[post-cm10-rigid-material]] may be used with the zero datum, and the
statements of this page about torque-free motions are conditional on that
use.

**(v) Relation to the particle branch.** The framework's angular-momentum
balance for finitely many particle labels is
[[pthm-cm03-angular-momentum-balance]]: for a model that declares the
external-plus-pair presentation with antisymmetric pair forces, the angular
momentum about a fixed reference point has derivative equal to the total
torque about that point, the internal torque sum cancelling when the
evaluated pair forces are central. The rigid-material model has no particle
labels; its mass data are the measure $\nu$, and all its physical statements
weight material points by $\nu$. That balance is therefore not available
verbatim for the model of clause (i), and clause (iii) is adopted here as the
rigid-material analogue. No claim that clause (iii) follows from
[[pthm-cm03-angular-momentum-balance]], or from any other item of the
framework, is made by this postulate or proved anywhere on this page.

**(vi) No other balances.** This postulate asserts no balance for the total
momentum $mc'$ and no equation of motion for the centre of mass: an external
force datum is not part of the branch, the curve $c$ remains free except as
restricted by further model assumptions (for instance a pivot constraint
adopted on this page), and the theorems of the pair use only the balance
(iii). In particular the branch neither asserts nor denies that the centre of
masses moves uniformly, and it asserts no conservation of the rotational
kinetic energy; the power identity for the rotational term is a theorem of
this page, not an assumption.

**(vii) Frame consistency.** Let a second inertial frame be related to the
chosen one by the transformation $t'=t+b$, $x'=Qx+ut+a$ of
[[post-cm01-frames]] clause (iv), with $b\in\mathbb R$, $a,u\in\mathbb R^{3}$
and $Q\in SO(3)$, and let $\tilde x(t',\rho):=Q\,x(t'-b,\rho)+u\,(t'-b)+a$ be
the description of the same motion in the second frame
([[pthm-cm10-frame-covariance]] clause 1). Adopt: this description is again a
motion of the same model of the branch, and an external torque datum of the
model transforms between the two descriptions by
$$\tilde\tau(t'):=Q\,\tau(t'-b),$$
the transformation of a spatial vector under the rotation $Q$ alone, with no
contribution from the boost $u$, the translation $a$ or the time shift $b$.
The consistency of the balance (iii) with this transformation law — namely
that the description in the second frame satisfies the balance with datum
$\tilde\tau$, because
$\tilde L_c(t')=QL_c(t'-b)$ by clause 5 of
[[pthm-cm10-frame-covariance]] and differentiation commutes with the
constant rotation $Q$ and the time shift — is recorded and proved as a clause
of the frame-covariance theorem of this page; it is not an assumption of
the present postulate.

**(viii) Scope and exclusions.** The branch excludes deformable bodies,
internal degrees of freedom, variable mass, ablation, impact and contact
events, and every constitutive law for friction, rolling or slipping; any
such effect that is present must be declared as part of the datum $\tau$ of
clause (ii) with its own model, and a datum is a model object, not a
measurement. The branch also excludes relativistic and quantum descriptions.
Wherever a statement of the pair needs the inverse $I^{-1}$ it assumes the
model is nondegenerate in the sense of [[def-cm10-inertia-tensor]] clause
(a), and that hypothesis is stated explicitly in the theorem that uses it.
The postulate asserts no measured torque, no numerical value, and no claim
that any concrete body or apparatus is described by the branch; whether a
given datum is adequate for a given apparatus is decided by comparing the
model's conditional predictions with reported observations under the
apparatus's stated regime.
