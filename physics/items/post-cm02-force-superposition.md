---
id: post-cm02-force-superposition
kind: postulate
title: "Adopted force model: force maps, the equation of motion, additive composition of force contributions and frame covariance"
status: draft
origin: session
domain: physics
dependency_level: 8
deps: [post-cm01-spacetime, post-cm01-frames, post-cm01-worldlines, def-cm01-configuration, def-cm01-velocity-acceleration, def-cm01-units, def-locally-lipschitz-in-the-state-variable, pthm-cm01-galilean-kinematics]
dependency_roles:
  post-cm01-spacetime: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  pthm-cm01-galilean-kinematics: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the framework's force branch: force maps as continuous, state-locally-Lipschitz vector-valued maps on a time window, an open configuration domain and velocity space, the equation of motion $m_i\\ddot x_i=F_i(t,x,\\dot x)$ in every inertial frame, pointwise additivity of declared force contributions, and the transformation rule that a force law must satisfy under a change of inertial frame. The postulate excludes impacts, dry and static friction, stochastic and distributional forcing, and constraint reactions; it asserts no measured value, no conservation law and no claim that any physical interaction is exactly of this form."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2 'Newtonian Mechanics: A Single Particle', printed pages 2-5 (PDF pages 8-11): the equation of motion F = dp/dt = m a in an inertial frame, with F a function of the position and velocity (and possibly time)"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.2, chapter pages 3-5 (PDF pages 7-9): the force defined through the momentum derivative (Eq. 1.13), the explicit separate assumption that forces superpose as vectors, and the gravity law (1.15) introduced as an additional law"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed pages 1-2 (PDF pages 4-5): Newton's second law in its two equivalent forms, as N second-order equations F_i = d(m_i rdot_i)/dt with data r_i(0) and rdot_i(0), and as 2N first-order equations"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 1.2.1 'Galilean Relativity', printed page 5 (PDF page 11): the boost x' = x + v t maps inertial frames to inertial frames and preserves d^2x/dt^2 = 0, so accelerations transform as spatial vectors and F = m rddot is the same law in both frames"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the framework the following statements about
forces and motion, in the spacetime, frames and worldlines of
[[post-cm01-spacetime]], [[post-cm01-frames]] and [[post-cm01-worldlines]].

**(i) Setting and configuration domain.** A model of the framework has
$N\ge1$ particle labels with fixed positive masses $m_{1},\dots,m_{N}$
([[post-cm01-worldlines]], clause (v)) and a configuration domain $Q$ in one
fixed inertial frame, in the unconstrained branch of
[[def-cm01-configuration]] clause (a): $Q\subseteq\mathbb R^{3N}$ is open,
possibly with the collision set $\Delta$ removed when the force law of the
model is singular at coincident positions. The constrained branch of that
definition, with its reaction forces, is **not** covered by this postulate; the
dynamics of constrained systems is a separate development with its own
assumptions. A **state** of the model is a pair $z=(x,v)\in Q\times\mathbb
R^{3N}$ of positions and coordinate velocities of the labels in the chosen
frame ([[def-cm01-velocity-acceleration]]).

**(ii) Time window.** A model carries a nondegenerate open interval
$I_{0}\subseteq\mathbb R$, its **time window**, read in seconds
([[def-cm01-units]]).

**(iii) Force map and standing regularity.** A **force map** on this data is a
map

$$F:I_{0}\times Q\times(\mathbb R^{3})^{N}\longrightarrow(\mathbb R^{3})^{N},\qquad (t,x,v)\longmapsto F(t,x,v)=\bigl(F_{1}(t,x,v),\dots,F_{N}(t,x,v)\bigr),$$

with components of dimension $\mu\ell\tau^{-2}$, read in newtons
([[def-cm01-units]]). The standing hypotheses of this branch, which every
force map of a model is required to satisfy, are:

1. **Continuity.** $F$ is continuous on its domain
   $D:=I_{0}\times Q\times(\mathbb R^{3})^{N}$.
2. **State-local Lipschitz regularity, locally uniform in time.** $F$ is
   locally Lipschitz in the state variable $z=(x,v)$, locally uniformly in
   time, in the sense of [[def-locally-lipschitz-in-the-state-variable]]: every
   compact cylinder $C\subseteq D$ carries a finite $L\ge0$ with
   $\lVert F(t,z)-F(t,z')\rVert_{2}\le L\lVert z-z'\rVert_{2}$ whenever
   $(t,z),(t,z')\in C$ share their time coordinate.

A map that fails clause 1 or clause 2 is **not** a force map of this branch,
whatever its other merits. When a later statement differentiates the force map
(for instance in a linearization or a smooth-dependence claim), it adds the
required differentiability hypothesis of the state variable explicitly; clause
2 alone licenses only the existence, uniqueness and continuation statements
proved on this page.

**(iv) Equation of motion.** Adopt: the motion of the labels of a model with
force map $F$ in an inertial frame is governed by

$$m_{i}\,\ddot x_{i}(t)=F_{i}\bigl(t,x(t),\dot x(t)\bigr)\qquad(i=1,\dots,N),$$

imposed along families of $C^{2}$ coordinate curves of the labels
$x=(x_{1},\dots,x_{N}):J\to Q$, where $J\subseteq I_{0}$ is an interval with
nonempty interior and the derivatives are those of
[[def-cm01-velocity-acceleration]]. The precise notion of a motion of the
model, its associated first-order system and its maximal motions is
[[def-cm02-newtonian-flow]]. The force map is **primitive data** of the model:
the equations above are the model's law, not an operational definition of $F$
from a measured acceleration, and $F$ is not an extra observable measured
independently of the motion. The mass $m_{i}$ in (iv) is the fixed inertial
mass of clause (v) of [[post-cm01-worldlines]]; no other mass occurs in this
clause.

**(v) Additive composition of force contributions.** When a model presents its
force map as composed of contributions, the composition is the pointwise sum:
for force maps $F^{(1)},\dots,F^{(k)}$ on a common domain satisfying (iii),

$$F(t,z)=\sum_{a=1}^{k}F^{(a)}(t,z),$$

and the sum again satisfies (iii), because a finite sum of continuous maps is
continuous and a finite sum of maps that are locally Lipschitz in the state
variable is locally Lipschitz with a locally uniform constant. This
**superposition of forces** is an adopted modelling rule, not a theorem about
nature: it says how the model's total force is composed from the contributions
it declares. Two decompositions with the same sum define the same force map
and the same model; the framework does not measure an individual contribution
in isolation, and no observation of motions alone determines a decomposition.
Nor does (v) assert that sums of motions are motions: if $F$ is not affine in
the state, the sum of two solutions of (iv) generally does not satisfy (iv),
and superposing solutions is a separate question from superposing forces.

**(vi) Description in another inertial frame.** Let $F_{*}=\bigl(o',u',
(e_{1}',e_{2}',e_{3}')\bigr)$ be a second inertial frame related to the frame
of (i) by the Galilean transformation

$$t'=t+b,\qquad x_i'=Rx_i+\upsilon t+a_{0}\quad(i=1,\dots,N)$$

with $b\in\mathbb R$, $a_{0},\upsilon\in\mathbb R^{3}$ and $R\in SO(3)$
([[pthm-cm01-galilean-kinematics]] clause 1;
[[def-cm-special-orthogonal-group]]); $\upsilon$ is the boost velocity
denoted by $v$ in that theorem. Define the block-diagonal map
$$R_{N}:=\operatorname{diag}(R,\dots,R):\mathbb R^{3N}\to\mathbb R^{3N}$$
and the repeated tuples $\bar a_{0}:=(a_{0},\dots,a_{0})$ and
$\bar\upsilon:=(\upsilon,\dots,\upsilon)$ in $(\mathbb R^{3})^{N}$. Thus
$R_N x=(Rx_{1},\dots,Rx_{N})$, and the same componentwise rule applies to
velocities and forces; since $R^{\mathsf T}R=I_{3}$,
$R_N^{\mathsf T}R_N=I_{3N}$. If $x:J\to Q$ is a family of motions of the
labels in the first frame, then the description of the same worldlines in the second
frame is
$$\eta(t'):=R_{N}x(t'-b)+\bar\upsilon(t'-b)+\bar a_{0}\qquad(t'\in J+b).$$
By clause 2 of the cited theorem, each $\eta_i$ is $C^{2}$ and
$\eta_i''(t')=R\ddot x_i(t'-b)$, so along the motion
$$m_i\eta_i''(t')=R F_i\bigl(t'-b,x(t'-b),\dot x(t'-b)\bigr).$$

Adopt: the same interaction, read in the second frame, is represented on the
transferred data by the force map below. Let $P$ be the inverse affine
transfer from new-frame data to old-frame data,
$$P(t',y,w):=\bigl(t'-b,\,R_N^{\mathsf T}(y-\bar\upsilon(t'-b)-\bar a_{0}),\,R_N^{\mathsf T}(w-\bar\upsilon)\bigr).$$
Its preimage of the original domain is
$$D_{*}:=P^{-1}(D)=\{(t',y,w):P(t',y,w)\in D\};$$
it is open because $P$ is a homeomorphism and $D$ is open. Define
$$F_{*}:D_{*}\to(\mathbb R^{3})^{N},\qquad F_{*}(t',y,w):=R_N F\Bigl(t'-b,\ R_N^{\mathsf T}\bigl(y-\bar\upsilon(t'-b)-\bar a_{0}\bigr),\ R_N^{\mathsf T}(w-\bar\upsilon)\Bigr).$$
The map $F_{*}$ is continuous and locally Lipschitz in its state variable:
the transfer and its inverse are affine, and at fixed time they act linearly
on state differences; on compact time intervals their state Lipschitz
constants are uniform, so precomposition preserves the stated regularity of
$F$. The framework
formulates the equation of motion in every inertial frame; a rule that does
not transform by this law is a description tied to the frame in which it was
written, and the framework attaches no kinematic covariance to it. When
$Q=\mathbb R^{3N}$ — the case of the models of the companion page — the
transferred domain is again a product
$I_{0}'\times\mathbb R^{3N}\times\mathbb R^{3N}$ with $I_{0}'=I_{0}+b$, and
$F_{*}$ is a force map in the sense of (iii); for a proper open $Q$ the
transferred position set $R_NQ+\bar\upsilon(t'-b)+\bar a_0$ may depend on
$t'$, and the equation is then read on that transferred set.

**(vii) What this branch excludes.** Impulsive forcing (a finite momentum
transfer at an instant is not a force map); Coulomb sliding friction, whose
expression contains the factor $v/\lvert v\rvert$ and is undefined at $v=0$;
static friction, which requires an inequality or a set-valued reaction model;
stochastic forcing; and forces that exist only as distributions. Each of these
requires its own stated model and solution notion, and none is covered by
(iii)–(iv). A singular force law is admissible on a configuration domain with
the singular configurations removed — for instance an inverse-square law on
the collision-excluded $Q$ of clause (i) — and what the removal of those
configurations implies for existence in time is stated by the continuation
theorem of this page.

**(viii) Status.** Clause (iii) states the hypotheses under which the theorems
of this page are proved; clause (iv) is the adopted law of motion; clauses (v)
and (vi) are the adopted composition and frame rules. Nothing here is deduced
from experiment, from a symmetry principle or from the uniqueness theory of
differential equations, and nothing here asserts that any physical
interaction is exactly of this form: the theorems of this page are conditional
consequences of the adopted model. The empirical significance of a concrete
model lies in fully specified model parameters and reported observations
compared with its predictions, and this postulate supplies neither.

## Status and scope

- **Adopted, not deduced.** The Newtonian tradition and Galilean relativity
  motivate clauses (iv)–(vi), but they are assumptions of the model, as the
  sources themselves record; the postulate selects no numerical value of any
  parameter and no particular force law.

- **The regularity hypotheses are used, not decorative.** Clause 2 is exactly
  the local-Lipschitz hypothesis of the local existence and uniqueness theorem
  [[pthm-cm02-ivp]] and of the continuation theorem
  [[pthm-cm02-continuation]]. Continuity alone does not give uniqueness, as the
  companion counterexample on the examples page records.

- **Open systems.** The configuration domain and the force map are declared for
  a stated set of labels: forces exerted by bodies outside that set are
  external data of the model, and the pair structure of interactions is a
  further restricted assumption
  ([[post-cm02-interactions]]). The scope warning for such model boundaries is
  [[rem-cm02-open-system-warning]].

- **No dynamics of constraints.** Reactions that maintain a constrained
  configuration are not force maps of clause (iii) in general; their ideal
  model and its hypotheses belong to the constraint development, not here.
