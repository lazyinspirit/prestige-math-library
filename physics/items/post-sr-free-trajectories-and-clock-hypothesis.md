---
id: post-sr-free-trajectories-and-clock-hypothesis
kind: postulate
title: "Adopted free trajectories of massive particles and the clock hypothesis"
status: draft
origin: pipeline
domain: physics
dependency_level: 11
deps:
  - def-sr-affine-minkowski-model
  - def-inertial-frame-and-inertial-chart
  - def-sr-regular-causal-curve-and-worldline
  - def-sr-proper-time
  - post-sr-ideal-clocks-and-light
  - def-sr-si-units-and-coordinate-conventions
  - def-sr-piecewise-proper-time
  - lem-sr-piecewise-proper-time-reparametrization-invariance
  - lem-sr-proper-time-reparametrization-invariance
  - lem-sr-weak-piecewise-causal-integrability
dependency_roles:
  def-sr-affine-minkowski-model: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: formulation-prerequisite
  def-sr-regular-causal-curve-and-worldline: formulation-prerequisite
  def-sr-proper-time: formulation-prerequisite
  post-sr-ideal-clocks-and-light: formulation-prerequisite
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-sr-piecewise-proper-time: mathematical-premise
  lem-sr-piecewise-proper-time-reparametrization-invariance: mathematical-premise
  lem-sr-proper-time-reparametrization-invariance: mathematical-premise
  lem-sr-weak-piecewise-causal-integrability: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Free massive test particles and ideal clocks in flat classical special-relativistic spacetime: straight future timelike histories for free particles, and proper-time readings for arbitrary future timelike histories with no acceleration-dependent correction. Excludes interactions and force laws, gravitational and quantum effects, real clock imperfections and every empirical measurement claim; the assumptions are adopted, not derived, and their idealizations travel to all consumers."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 pp. 26-27 (PDF pp. 33-34; worldline, proper time (1.97), four-velocity (1.98)-(1.99)) and Chapter 3 pp. 68-71 (PDF pp. 75-78)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 pp. 27-28 and Section 2.3 pp. 28-30 (PDF pp. 28-31); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Sections 3.5 and 3.7 pp. 60-68; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: pass
---

## Postulate

Adopt as physical assumptions of this framework, extending the ideal-clock
reading rule of [[post-sr-ideal-clocks-and-light]] to the general worldline
calculus of this page:

**(i) Free trajectories.** A massive test particle that is subject to no
interaction (a **free particle**) has as its worldline a straight future
timelike line of the affine model ([[def-sr-affine-minkowski-model]]): there are
an event $p \in A$ and a future timelike vector $v \in V$ with
$x(s) = p + (s-s_0)v$ for $s\in I$, where $I\subseteq\mathbb R$ is a nondegenerate interval and $s_0\in I$ ([[def-sr-regular-causal-curve-and-worldline]]).
Interactions, forces and collisions are not part of this assumption: a particle
that is not free may have any future timelike worldline admitted by its own
dynamical model, and no force law is adopted here. The kinematical consequences
of this shape for the four-velocity are derived, not assumed, in
[[pthm-sr-four-velocity-norm-and-orthogonality]].

**(ii) Clock hypothesis.** An ideal clock carried along a future timelike
worldline of the model, including an accelerated one and a piecewise $C^{1}$ one
with finitely many kinks, reads between any two parameter values the proper-time
difference of [[def-sr-proper-time]] for $C^{1}$ histories and of
[[def-sr-piecewise-proper-time]] for weak piecewise $C^{1}$ histories, with no
additional term depending on acceleration, jerk or any higher derivative. A
kink is an idealization of a finite short acceleration phase whose contribution
is included through the integral on the smooth pieces, and the reading does not
depend on an increasing regular change of parameter admitted by the curve
definition — its derivatives on smooth pieces and all finite one-sided endpoint
derivatives are positive, as in
[[lem-sr-proper-time-reparametrization-invariance]] and
[[lem-sr-piecewise-proper-time-reparametrization-invariance]]. Zero-tangent
compositions are not worldlines of this model.

**(iii) Scope and qualification.** The assumptions concern ideal point
particles, ideal clocks and flat classical spacetime. They are adopted, not
proved; they are not consequences of the affine geometry, and no experiment is
claimed here to establish them. They inherit the idealizations of
[[post-sr-ideal-clocks-and-light]]: real clocks have finite resolution,
calibration and apparatus limitations, and real particles are not exactly free.
The coordinate and unit conventions are those of
[[def-sr-si-units-and-coordinate-conventions]], and inertial charts are those
of [[def-inertial-frame-and-inertial-chart]].

## Scope and source notes

The free-trajectory clause is deliberately silent about interactions and force
laws, so it cannot be used to infer conservation laws, mass-shell relations or
collision kinematics, which require the separate momentum postulate of the
later energy-momentum page. The clock hypothesis is the assertion that ideal
clocks have no acceleration-dependent term, so it must not be presented as
following from the geometry, and its empirical content is not established here.
The weak piecewise mathematical referent is supplied by
[[def-sr-piecewise-proper-time]] and
[[lem-sr-weak-piecewise-causal-integrability]], and regular increasing
weak-piecewise parameter independence by
[[lem-sr-piecewise-proper-time-reparametrization-invariance]]; the $C^{1}$
case uses [[def-sr-proper-time]] and
[[lem-sr-proper-time-reparametrization-invariance]]. This assumption repairs
the formulation of the already adopted clock assumption; it does not derive
clock behavior or extend its empirical scope.

The published sources describe smooth free-particle worldlines and
proper-time clock readings (Carroll,
Chapter 1 and Chapter 3; Reall, Sections 2.2-2.3; Crowell, Sections 3.5-3.7,
with the signature and unit conversions recorded in the reference list). The
adoption is stated conditionally: it is an assumption of this framework, and
the source references document the smooth idealization in the
literature, not a proof of it. The weak piecewise class with finite one-sided
quotient tangents and no derivative limits is an explicit local extension of
that adopted reading rule, supported mathematically by this page's
integrability and regular-substitution lemmas; it is not claimed to be a
verbatim regularity statement in those sources.
