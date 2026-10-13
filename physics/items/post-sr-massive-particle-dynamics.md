---
id: post-sr-massive-particle-dynamics
kind: postulate
title: "Adopted massive-particle momentum, observer measurement and isolated-collision conservation"
status: published
origin: pipeline
domain: physics
physical_scope: "Classical massive point particles with positive constant invariant mass in flat Minkowski spacetime, with ideal clocks, ideal light signals and SI conventions. The model identifies E_n, q_n, T_n with observer measurements and adopts four-momentum balance for isolated collisions, including ideal massless legs as defined by the separate massless postulate. The single-particle equation applies only to massive C2 worldlines. Excludes internal structure, spin, radiation reaction, variable-mass dynamics, gravity, continuum matter, quantum and statistical effects, and empirical reports; a force law and interaction mechanism are separate premises."
deps:
  - def-sr-affine-minkowski-model
  - def-sr-si-units-and-coordinate-conventions
  - def-sr-regular-causal-curve-and-worldline
  - def-sr-four-velocity-and-four-acceleration
  - thm-sr-proper-time-and-observer-decomposition
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - def-sr-proper-time-derivative-and-four-force
  - def-sr-collision-datum-and-conservation
  - post-sr-ideal-massless-particle-momentum
dependency_roles:
  def-sr-affine-minkowski-model: formulation-prerequisite
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-sr-regular-causal-curve-and-worldline: formulation-prerequisite
  def-sr-four-velocity-and-four-acceleration: formulation-prerequisite
  thm-sr-proper-time-and-observer-decomposition: formulation-prerequisite
  def-sr-observed-energy-momentum-and-kinetic-energy: formulation-prerequisite
  def-sr-proper-time-derivative-and-four-force: formulation-prerequisite
  def-sr-collision-datum-and-conservation: formulation-prerequisite
  post-sr-ideal-massless-particle-momentum: formulation-prerequisite
dependency_level: 15
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Sections 4.3.1 pp. 88-89 (E-p four-vector, m^2 = E^2 - p^2), Section 4.3.4 p. 96 (momentum-velocity relation p = m gamma v) and Section 4.3.2 p. 90 (conservation in collisions)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1; PDF page = printed page + 7; printed p. 27, equations (1.100)-(1.102) (p^mu = m U^mu; f^mu = dp^mu/d tau) and printed p. 30 (local stress-energy conservation, contextual only; finite collision balance is separately adopted)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), c = 1; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf; Section 6.3 pp. 63-64, equations (6.17)-(6.19) (P^a = m u^a, g(P,P) = -m^2, observer energy -g(v,P))"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Postulate

Adopt as physical assumptions of the relativistic particle model, on top of the
flat spacetime model of [[def-sr-affine-minkowski-model]] and the SI unit
conventions of [[def-sr-si-units-and-coordinate-conventions]], together with
the framework's idealisations of point particles, ideal clocks and ideal light
signals:

**(i) Mass and momentum.** Every massive classical particle of the model
carries a positive constant invariant mass parameter $m>0$ and has
four-momentum $P=mU$, where $U$ is the four-velocity of its future timelike
worldline ([[def-sr-regular-causal-curve-and-worldline]],
[[def-sr-four-velocity-and-four-acceleration]],
[[thm-sr-proper-time-and-observer-decomposition]]); $P$ is a vector of $V$
whose SI unit is kilogram metre per second. The formula is adopted only for
$m>0$; the case $m=0$ is not defined by it and is the separate premise
[[post-sr-ideal-massless-particle-momentum]]. In particular $\eta(P,P)=-m^2c^2$
is a consequence of the four-velocity normalisation, not a separate
assumption.

**(ii) Observer measurement identification.** Relative to a future unit
observer $n$, the model identifies the measured energy of the particle with
$E_n(P)$, its measured spatial momentum with $q_n(P)$, its kinetic energy with
$T_n(P)=E_n(P)-mc^2$ and its rest energy with $mc^2$, where $E_n,q_n,T_n$ are
the quantities of [[def-sr-observed-energy-momentum-and-kinetic-energy]]; the
units are the joule, kilogram metre per second and kilogram of
[[def-sr-si-units-and-coordinate-conventions]]. This clause is a formulation
convention identifying mathematical quantities with the quantities the model
calls measured; it is not a measurement report and no experiment is claimed.

**(iii) Isolated collision balance.** An isolated collision is represented by
a mass-specified on-shell collision datum at an event, with finite nonempty
incoming and outgoing lists of the massive particles of (i) and/or the ideal
massless particles of [[post-sr-ideal-massless-particle-momentum]], and with
no external four-momentum transfer or omitted leg. The interaction is
idealized as confined to that event. The sum of the incoming four-momenta equals the sum of the
outgoing four-momenta, in the sense of the collision data of
[[def-sr-collision-datum-and-conservation]]: the model adopts
$Q_{\mathrm{in}}=Q_{\mathrm{out}}$ for such an isolated datum. No particular
collision is asserted to occur, and no mechanism, probability, cross section
or amplitude is supplied by this clause.

**(iv) Equation of motion for a stipulated force.** Put
$H_c^+:=\{U\in C^+:\eta(U,U)=-c^2\}$. A stipulated force law is a given
map $F:D\to V$ on a given subset $D\subseteq A\times H_c^+$,
with force components in $\mathrm{kg}\,\mathrm m/\mathrm s^2$. No regularity
away from the specified worldline is assumed. Along a given $C^2$ massive worldline
$x:I\to A$ with $(x(s),U(s))\in D$ for all $s\in I$, the model's particle
equation is $m\,dU/d\tau=F(x,U)$, with
$dU/d\tau$ the proper-time derivative of
[[def-sr-proper-time-derivative-and-four-force]], so that the stipulated $F$
is the four-force of the motion. A particular force law, and the existence,
uniqueness and domain of solutions of the resulting equation, are not adopted
here and belong to a separate model.

Empirical support for these assumptions is a nonlogical relation of the
framework, not a proof; the idealisations of point particles, ideal clocks,
ideal light signals and flat spacetime are inherited and travel to every
consumer of this premise.
