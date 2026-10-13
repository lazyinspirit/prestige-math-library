---
id: post-cm17-continuum-kinematic-model
kind: postulate
title: "Adopted continuum kinematic model: body data, smooth motions as families of label worldlines, the continuum idealization and frame covariance"
status: published
origin: session
domain: physics
dependency_level: 9
deps: [def-cm17-continuum-body-and-units, def-cm-continuum-motion, post-cm01-worldlines, post-cm01-frames, def-cm01-velocity-acceleration, def-cm-euclidean-spatial-calculus, pthm-cm01-galilean-kinematics]
dependency_roles:
  def-cm17-continuum-body-and-units: formulation-prerequisite
  def-cm-continuum-motion: mathematical-premise
  post-cm01-worldlines: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm-euclidean-spatial-calculus: mathematical-premise
  pthm-cm01-galilean-kinematics: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the kinematic branch of the continuum framework: every model is carried by body data in a fixed inertial frame; the body's motion is a C^2 family of orientation-preserving injective configurations whose labels follow worldlines and whose velocity field carries the model's spatial velocity and material acceleration; the continuum hypothesis, the smoothness idealization and the frame-covariance requirement are stated. The postulate excludes fracture, interpenetration, phase boundaries, shocks, diffusion, chemical reactions and thermal or electromagnetic coupling, and asserts no dynamics, no constitutive relation and no measured value."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 1.2-1.6 (continuous bodies and motions) and 3.1-3.3 (velocity, velocity gradient)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Sections 7.1 and 8.3 (continuum description, particle displacement and velocity field)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 6.1 (the continuum description of a chain and the displacement field)"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the continuum branch the following statements,
in the framework, frame and body data of [[def-cm17-continuum-body-and-units]].

**(i) Model data.** A model of the branch is carried by a continuum body data
set $(B,O,I)$ of [[def-cm17-continuum-body-and-units]] in the fixed inertial
frame $F$: a material region $B$, a reference chart domain $O$ with
$\overline B\subseteq O$, and a time window $I$. The labels $X\in B$ are the
material points of the body.

**(ii) Motion.** A **motion** of the model is a map

$$\chi:I\times O\longrightarrow\mathbb R^3$$

which is a motion of the material region $B$ on $I$ in the sense of
[[def-cm-continuum-motion]]: $\chi$ is of class $C^2$; for every $t\in I$ the
map $\chi_t:O\to\mathbb R^3$ is of class $C^1$, injective and has invertible
total derivative at every point of $O$; and the Jacobian
$J(t,X)=\det\bigl(D_X\chi_t(X)\bigr)$ satisfies $J>0$ on $I\times B$. The
current region is $\Omega_t:=\chi_t(B)$, and the model's **spatial velocity
field** $u$ and **material acceleration** $a=D_tu$ are those of
[[def-cm-continuum-motion]] and [[def-cm-euclidean-spatial-calculus]].

**(iii) Worldlines of labels.** For every label $X\in B$ the curve
$\gamma_X:I\to A$, $\gamma_X(t):=(t,\chi(t,X))$, is a worldline of the model in
the sense of clauses (i)-(iv) of [[post-cm01-worldlines]]: it is of class
$C^2$ in the adapted coordinates of $F$, its parameter is the frame time
($\tau(\gamma_X(t)-o)=t$), its description in another inertial frame is the
reparametrized curve induced by the frame change, and its coordinate velocity
and acceleration are read by [[def-cm01-velocity-acceleration]]. The motion is
thus a family of worldlines, one for each label, and the spatial velocity
field satisfies $u(t,\chi(t,X))=\partial_t\chi(t,X)$; no mass is attached to a
label, mass entering only through a density field.

**(iv) Continuum idealization.** The body is described as a continuum: every
label is a point and the fields are defined at every point of the current
regions. The following are **excluded** by this postulate, and no statement of
this page covers them: fracture, cutting or interpenetration (injectivity and
$J>0$); shocks, phase boundaries and material interfaces inside the motion
(the motion is $C^2$ with $J>0$ everywhere on $I\times B$); diffusion or
exchange of material between labels; chemical reactions, phase change and
mass sources; electromagnetic, thermal and radiative couplings; and
microscopic or molecular structure. The smoothness classes of the fields are
stated in each later item; wherever a weaker regularity is required it is
stated there, and the classical transport and balance identities of this page
are used only under their own hypotheses.

**(v) Frame covariance.** A model is **frame-covariant** when, for every
change of inertial frame $F\to F'$ given by the Galilean transformation of
[[pthm-cm01-galilean-kinematics]], the description of the same motion in $F'$
is the Galilean transform of the description in $F$, and the model's balance
and constitutive laws have the same form when written in $F'$ with the
correspondingly transformed fields (velocities transformed by the boost,
accelerations rotated as there stated). The branch **requires** frame
covariance of every model; for each law adopted below, the covariance check
is carried out or the law is stated only in the fixed frame.

**(vi) Status.** These are adopted assumptions of the model. They are not
derived from mechanics and they assert nothing about any particular material.
The continuum idealization is used in practice when the fields vary on
spatial scales large compared with the microscopic spacing of the material
and the material admits a representative volume element; those microscopic
conditions are not formalized here and no quantitative threshold is
asserted. Empirical adequacy of the idealization for a given material is a
matter of comparison with observations and is not established by this
postulate.
