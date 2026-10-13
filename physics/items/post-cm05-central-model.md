---
id: post-cm05-central-model
kind: postulate
title: "Adopted central-force model class: static central pair potentials, the reduced one-label problem, the fixed-centre idealization, reading conventions and exclusions"
status: published
origin: session
domain: physics
dependency_level: 14
deps: [post-cm02-force-superposition, post-cm02-interactions, post-cm01-worldlines, def-cm02-newtonian-flow, def-cm01-configuration, def-cm01-units, def-cm-central-force-trajectory, lem-cm05-radial-potential-gradient, pthm-cm05-relative-reduction]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  post-cm02-interactions: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-central-force-trajectory: mathematical-premise
  lem-cm05-radial-potential-gradient: mathematical-premise
  pthm-cm05-relative-reduction: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the page's central-force model class inside the framework's force and interaction branches: two-label models presented by a static $C^2$ central pair potential on a collision-excluded annulus and free of external forces; the reduced one-label problem of mass $\\mu$; the separate one-label fixed-centre idealization; the reading conventions for force centre, orbit and body labels; and the explicit exclusions (velocity- or time-dependent, non-central, non-potential, constrained, colliding, external-force and many-body models) together with the status of the model data. The item adopts a modelling class; it asserts no law of nature, no measured value and no conservation law."
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), Section 2.5.4, printed pp. 31-33 (PDF pp. 37-39): two bodies interacting through a central force, the separation $r_{12}$ and the reduced mass $\\mu$, the planarity of the orbit under the conserved angular momentum, and the neglect of the centre-of-mass piece"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 3.4, Eqs. (3.30)-(3.38), chapter pages 7-9 (PDF pages 40-42): two particles interacting via a conservative central force, the transfer to the relative vector and centre of mass, and the statement that the relative dynamics is identical to that of a single effective particle of mass $\\mu$ in the central potential $U(r)$"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 4.5, printed page 79 (PDF page 82): the Kepler problem of two masses in a central potential, treated with the centre-of-mass coordinate at the origin and the reduced mass"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
---

## Postulate

Adopt, as the **central-force model** for the two-body part of this page, the
following restricted model class inside the force and interaction branches of
[[post-cm02-force-superposition]] and [[post-cm02-interactions]].

**(i) The two-label central model.** A model of class (i) is a force model of
[[post-cm02-force-superposition]] with $N=2$ labels, fixed masses
$m_1,m_2>0$ ([[post-cm01-worldlines]] clause (v)), a time window $I_0$, the
collision-excluded configuration domain
$$Q:=\{\,x=(x_1,x_2)\in(\mathbb R^3)^2:\lvert x_1-x_2\rvert\in J_0\,\}$$
for an open interval $J_0\subseteq(0,\infty)$
([[def-cm01-configuration]]), and the force map presented through the
time-independent **static central pair potential**
$$U(x_1,x_2):=u(\lvert x_1-x_2\rvert),\qquad u:J_0\to\mathbb R\ \text{of class }C^2,$$
so that $F_i(t,x,v)=-\nabla_{x_i}U(x)$ on the state domain (clauses (iii)
and (iv) of [[post-cm02-interactions]]; $U$ is of class $C^2$ on the open
$Q$ by [[lem-cm05-radial-potential-gradient]]). In the external-plus-pair
presentation of clause (i) of that postulate the model has
$F_i^{\mathrm{ext}}\equiv0$: no external forces act on the labels of a model
of class (i).

**(ii) The reduced one-label problem.** For a model of class (i) put
$\mu:=m_1m_2/(m_1+m_2)>0$ of dimension $\mu$ ([[def-cm01-units]]). The
**reduced problem** of the model is the one-label problem of mass $\mu$ whose
unknown is the relative coordinate $r=x_1-x_2$ and whose equation is
$$\mu\,r''=-\frac{u'(\lvert r\rvert)}{\lvert r\rvert}\,r;$$
by [[pthm-cm05-relative-reduction]] the relative coordinate of every motion
of a model of class (i) solves this equation, and every pair of a uniform
centre-of-mass motion and a solution of the reduced equation on a common
interval reconstructs a motion of the model. Adopt the reduced problem as the
object that the central-force statements of this page describe, and the
central-force-trajectory vocabulary of
[[def-cm-central-force-trajectory]] (attached angular momentum
$j=\mu\,r\times r'$ and energy $E=\tfrac12\mu\lVert r'\rVert_2^2+u(\lvert
r\rvert)$) as the vocabulary in which those statements are phrased.

**(iii) The one-label fixed-centre idealization.** A **one-label central
model** is a force model of [[post-cm02-force-superposition]] with $N=1$,
mass $\mu>0$, time window $I_0$, a fixed **centre** $c\in\mathbb R^3$, the
configuration domain $Q_c=\{x\in\mathbb R^3:\lvert x-c\rvert\in J_0\}$, and
the external force map
$$F(t,x,v)=-\frac{u'(\lvert x-c\rvert)}{\lvert x-c\rvert}\,(x-c),$$
presented through the potential $u(\lvert x-c\rvert)$ with the same function
$u\in C^2(J_0)$. This model is the **fixed-centre idealization** of the
reduced problem: it drops the centre-of-mass degree of freedom and holds the
force centre fixed. It is a separate adopted model class, not a consequence
of class (i), and every use of it must state that the idealization is
intended.

**(iv) Reading conventions.** In the statements of this page: the **force
centre** of the reduced problem is the origin of the relative coordinate
$r$; an **orbit** is the trajectory $t\mapsto r(t)$ of the reduced problem
(equivalently, by [[pthm-cm05-relative-reduction]], the trajectory of either
label relative to the centre of mass, up to the mass ratio); "circular" and
"elliptic" name properties of that trajectory; and the words "planet",
"satellite", "central body" and "test particle" name labels of a model of
class (i) or (iii). These words carry no empirical claim about nature.

**(v) Exclusions and status.** The class excludes: velocity-dependent and
explicitly time-dependent central forces; non-central and non-potential
forces; constraints and reaction forces; colliding configurations
$x_1=x_2$ (equivalently $r=0$); external forces on the labels; and models
with more than two labels. Finite-size, rotational, deformational, dissipative
and relativistic effects are outside the class. The masses, the interval
$J_0$ and the function $u$ (including any parameters it carries) are model
data, not measured values ([[def-cm01-units]]); quantitative empirical use
requires separately stated measured inputs with their uncertainties, and no
statement of this page asserts that any physical system is exactly a model
of this class.

## Status and scope

- **Why the class is adopted rather than derived.** Centrality, the existence
  of a potential and the absence of external forces are restrictions of the
  force branch, and [[post-cm02-interactions]] records that an arbitrary force
  map need satisfy none of them. This postulate selects the subclass the page
  develops, and every theorem of the page remains conditional on it.

- **The reduction is a theorem, the class is not.** The construction that
  turns a model of class (i) into the reduced problem is proved in
  [[pthm-cm05-relative-reduction]]; this postulate only names that object and
  fixes the vocabulary. The reader is not asked to accept the reduction as an
  assumption.

- **The idealization is labelled.** The fixed-centre model of clause (iii) is
  the model actually used when one body is treated as immovable; the exact
  two-label statement always retains both bodies through the relative
  coordinate and the centre of mass.
