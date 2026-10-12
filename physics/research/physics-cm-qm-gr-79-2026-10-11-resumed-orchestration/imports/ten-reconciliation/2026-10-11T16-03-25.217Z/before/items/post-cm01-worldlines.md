---
id: post-cm01-worldlines
kind: postulate
title: "Particle labels, worldlines, the frame-time parameter condition and fixed inertial masses"
status: draft
origin: session
domain: physics
dependency_level: 5
deps: [post-cm01-spacetime, post-cm01-frames, def-cm-affine-time-space, def-cm01-units, lem-cm-adapted-charts-and-galilean-transformations]
dependency_roles:
  post-cm01-spacetime: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  def-cm-affine-time-space: mathematical-premise
  def-cm01-units: formulation-prerequisite
  lem-cm-adapted-charts-and-galilean-transformations: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the particle idealization of the framework: labeled particles whose motion is a twice continuously differentiable worldline parametrized by the elapsed time of an inertial frame, each label carrying a fixed positive inertial mass. Excludes extended bodies, internal degrees of freedom, variable mass, relativistic worldline conditions and any measured value of a mass. The clause on calibration concerns the interface with measurement, not a verification of the dynamical law."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Sections 1.1-1.2, printed pages 2-4 (PDF pages 8-10): a particle is an object of insignificant size, a reference frame is a choice of origin with axes, and the trajectory x(t) has componentwise velocity and acceleration"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.1 point (vi), chapter page 3 (PDF page 7): a point particle has negligible size and shape, and its position at an instant is a single point; Section 1.2, chapter page 3: each particle is characterized by a scalar constant, its mass"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): a particle of mass m with position r, momentum p = m rdot, and the caution that the particle idealization depends on the use"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the framework the following statements about particles and their motion, in the spacetime of [[post-cm01-spacetime]] and the frames of [[post-cm01-frames]].

**(i) Particle labels and worldlines.** A model of the framework has **particle
labels** $i=1,\dots,N$ for some $N\ge1$. To each label and each *inertial
frame* of the model — an adapted chart $(o,u,(e_{1},e_{2},e_{3}))$ with
coordinates $(t,x)$ in the sense of [[post-cm01-frames]] — there is assigned a
**worldline** $\gamma_{i}:I\to A$ described in that frame, where
$I\subseteq\mathbb R$ is a nondegenerate open interval — that is, an interval
of the form $(a,b)$ with $-\infty\le a<b\le+\infty$ and at least two points —
the curve $\gamma_{i}$ is of class $C^{2}$ in the adapted coordinates of the frame,
and the **parameter condition**

$$\tau\bigl(\gamma_{i}(t)-o\bigr)=t\qquad(t\in I)$$

holds: the curve parameter is the elapsed time from the origin of the frame, so
in the frame's coordinates $\gamma_{i}(t)=(t,x_{i}(t))$ with
$x_{i}:I\to\mathbb R^{3}$ of class $C^{2}$. The parameter condition replaces
the causal conditions of relativistic kinematics: no timelike condition on the
velocity and no upper bound on its Euclidean norm is imposed, and the
parameter is not free up to reparametrization.

**(ii) Description in another frame.** The same motion described in a second
inertial frame is the curve obtained by the time reparametrization of the two
frames: if $(t',x')$ are the coordinates of the second frame and
$t'=t+b$ is the time component of the transformation between the two frames
([[post-cm01-frames]], [[lem-cm-adapted-charts-and-galilean-transformations]]),
then the description of the motion in the second frame is the curve
$\gamma_{i,b}(t'):=\gamma_{i}(t'-b)$, defined on $I+b$, and it again satisfies
the parameter condition $\tau(\gamma_{i,b}(t')-o')=t'$ with respect to the
second frame's origin $o'$. This is a consistency requirement of the model's
frame language; the accompanying spatial transformation of the coordinate
curve is the affine law of [[lem-cm-adapted-charts-and-galilean-transformations]],
and its kinematic consequences are proved in [[pthm-cm01-galilean-kinematics]].

**(iii) Regularity is frame-independent.** The class of the worldline is
independent of the frame used to describe it: by the transformation law of
[[lem-cm-adapted-charts-and-galilean-transformations]], the coordinates of the
same event in two inertial frames differ by
$t'=t+b$, $x'=Rx+vt+a$ with constant $b,a,v$ and $R\in SO(3)$, so a coordinate
curve is twice continuously differentiable in one inertial frame exactly when
its reparametrized description is twice continuously differentiable in the
other. The assumptions of this postulate are therefore read in any one inertial
frame without loss.

**(iv) Velocity and acceleration.** In a fixed inertial frame the quantities
$w_{i}:=dx_{i}/dt$ and $a_{i}:=d^{2}x_{i}/dt^{2}$ are the **coordinate
velocity** and **coordinate acceleration** of the label, of dimensions
$\ell\tau^{-1}$ and $\ell\tau^{-2}$ by [[def-cm01-units]]; they are defined
precisely, and their transformation under a change of inertial frame is
recorded, in [[def-cm01-velocity-acceleration]].

**(v) Fixed inertial mass.** Each particle label $i$ carries a **mass**
$m_{i}>0$, a primitive parameter of the model with dimension $\mu$
([[def-cm01-units]]). The mass is fixed: it is the same positive number at all
times, in all inertial frames and for every model in which the label occurs; it
is not a function of the time coordinate, of the position or of the velocity,
and no variable-mass model is a model of this clause. The mass enters the
dynamics only through its later appearance in the equation of motion; this
postulate attaches no dynamics to it. Distinct labels may carry distinct
masses, and the masses are model data, not measured values.

**(vi) Point-particle idealization.** The model retains of each label only its
position and its fixed mass, together with the label index: size, shape, spin,
deformation, temperature and internal degrees of freedom are omitted, and the
quantity $x_{i}(t)$ is the single point representing the label at time $t$. An
application of the model must state when this idealization is adequate for the
system at hand; for a body whose rotation, deformation or internal structure
matters for the question asked, the point-particle model is not adequate and a
richer model must be specified. The framework makes no claim that every
physical body is a point particle.

**(vii) Calibration caveat.** An apparatus calibration may *estimate* a mass
parameter of a concrete body under a stated measurement model, with its
assumptions, sampling and uncertainty; such an estimate neither defines the
mass parameter of a label nor verifies the equation of motion in which it
occurs, and it is not deduced from this postulate. No measured value of any
mass is asserted by this item.

## Status and scope

- **Adopted, not deduced.** Clauses (i)-(vi) fix the model's particle
  ontology; the parameter condition and the fixed-mass clause are part of that
  ontology, not theorems. Clause (vii) delimits the interface with
  measurement. Nothing here asserts that a concrete object satisfies the
  idealization, and no empirical comparison is made.

- **No dynamics.** Neither a force law nor an equation of motion is asserted.
  In particular the model does not yet say what $a_{i}$ is; the dynamics is
  adopted on the later pages that introduce force, initial data and the
  equations of motion. Consequently no conservation statement and no
  prediction follows from this postulate alone.

- **Domain of intended use.** The non-relativistic regime of
  [[post-cm01-spacetime]]; particles moving at speeds small compared with the
  speed of light, in situations where the point-particle idealization and the
  classical description of the apparatus are adequate. The framework sets no
  numerical cutoff and records no measurement.
