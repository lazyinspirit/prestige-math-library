---
id: pthm-sr-four-velocity-norm-and-orthogonality
kind: physics-theorem
title: "Four-velocity norm and four-acceleration orthogonality for the model's clocks"
status: draft
origin: pipeline
domain: physics
dependency_level: 12
deps:
  - post-sr-free-trajectories-and-clock-hypothesis
  - thm-sr-proper-time-and-observer-decomposition
  - def-sr-four-velocity-and-four-acceleration
  - def-sr-proper-time
  - def-sr-regular-causal-curve-and-worldline
  - def-sr-affine-minkowski-model
  - def-inertial-frame-and-inertial-chart
  - post-sr-ideal-clocks-and-light
  - post-sr-inertial-covariance
  - def-sr-si-units-and-coordinate-conventions
  - lem-sr-proper-time-parametrization
dependency_roles:
  post-sr-free-trajectories-and-clock-hypothesis: physical-assumption
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: formulation-prerequisite
  def-sr-proper-time: formulation-prerequisite
  def-sr-regular-causal-curve-and-worldline: formulation-prerequisite
  def-sr-affine-minkowski-model: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: formulation-prerequisite
  post-sr-ideal-clocks-and-light: physical-assumption
  post-sr-inertial-covariance: physical-assumption
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  lem-sr-proper-time-parametrization: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Ideal clocks and massive test particles in the flat classical special-relativity model: four-velocity of squared norm -c^2 (dimensionless U/c unit timelike), four-acceleration orthogonal to four-velocity, vanishing four-acceleration for free particles, and subluminal speed relative to every ideal observer. Conditional on the named postulates; excludes interactions and force laws, gravity, quantum effects, real apparatus corrections and all empirical claims."
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Sections 3.5 and 3.7 pp. 60-68; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 pp. 27-28 and Section 2.3 pp. 28-30 (PDF pp. 28-31); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 pp. 26-27 (PDF pp. 33-34; worldline, proper time (1.97), four-velocity (1.98)-(1.99)) and Chapter 3 pp. 68-71 (PDF pp. 75-78)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Adopt the postulates of the model: [[post-sr-inertial-covariance]] and
[[post-sr-ideal-clocks-and-light]] of the spacetime-primitives page, together
with [[post-sr-free-trajectories-and-clock-hypothesis]] of this page, and let
$c$ and the SI coordinates be those of
[[def-sr-si-units-and-coordinate-conventions]]. Let $x : I \to A$ be the
history of an ideal clock of the model, a $C^{1}$ future timelike worldline
($C^{2}$ where acceleration is used), with proper time $\tau$, four-velocity
$U = dx/d\tau$ and, when $x$ is $C^{2}$, four-acceleration $A = dU/d\tau$
([[def-sr-four-velocity-and-four-acceleration]]). Then:

**(i)** the reading of the ideal clock between parameter values $s_1 < s_2$
equals $\tau(s_2)-\tau(s_1)$;

**(ii)** $\eta(U,U) = -c^{2}$ everywhere, so $U$ is future timelike with velocity units, and the dimensionless
vector $U/c$ is future unit timelike;

**(iii)** if $x$ is $C^{2}$ at $s$, then $\eta(U(s),A(s)) = 0$ and $A(s)$ is
zero or spacelike, with the unit of acceleration;

**(iv)** if the ideal clock is carried by a massive test particle subject to
no interaction, and $x$ is also that particle's worldline (a **free clock**
in this theorem), then its four-velocity is constant along the worldline and
$A = 0$ identically;

**(v)** for an ideal observer at the same event, described by a future unit
timelike vector $n = U_{o}/c$ with $\eta(n,n) = -1$, the clock's speed relative
to the observer is $|w| = c\sqrt{1-\gamma^{-2}}$ with
$\gamma = -\eta(n,U/c) \ge 1$, so it is strictly less than $c$, and
$\gamma = 1$ exactly when the clock's four-velocity equals the observer's.

**Scope and qualification.** This is a conditional statement about the adopted
model; it asserts no measurement outcome, contains no statistical inference, and
inherits the idealizations of the postulates (ideal point particles, ideal
clocks, flat spacetime, no gravitational or quantum effects).

## Facts & Assumptions

**Given:** The adopted postulates [[post-sr-inertial-covariance]], [[post-sr-ideal-clocks-and-light]] and [[post-sr-free-trajectories-and-clock-hypothesis]]; the SI conventions of [[def-sr-si-units-and-coordinate-conventions]]; and a $C^{1}$ future timelike worldline $x : I \to A$ that is the history of an ideal clock, $C^{2}$ where acceleration is used.

[A1] Free trajectories: a massive test particle subject to no interaction has as its worldline a straight future timelike line $x(s) = p+(s-s_0)v$ with $v$ future timelike; interactions and force laws are not part of the assumption ([[post-sr-free-trajectories-and-clock-hypothesis]], clause (i)).

[A2] Clock hypothesis: an ideal clock carried along a future timelike worldline reads, between parameter values, the proper-time difference of [[def-sr-proper-time]] ([[post-sr-free-trajectories-and-clock-hypothesis]], clause (ii); [[post-sr-ideal-clocks-and-light]], clause (i)).

[A3] The model's postulates hold: the affine Minkowski space is the spacetime, and the model equations are covariant under inertial changes of description ([[post-sr-inertial-covariance]]); ideal clocks and ideal light are as stated in [[post-sr-ideal-clocks-and-light]].

[L1] Units ([[def-sr-si-units-and-coordinate-conventions]]): the four-velocity $U = dx/d\tau$ has unit m/s and the four-acceleration m/s$^{2}$; the interval carries m$^{2}$.

[L2] Four-velocity and four-acceleration ([[def-sr-four-velocity-and-four-acceleration]]): $U = x'/\tau'$ and $A = U'/\tau'$; the four-velocity of the observer's own straight worldline with future unit timelike $n$ is $cn$.

[L3] Mathematical content ([[thm-sr-proper-time-and-observer-decomposition]]): $\eta(U,U) = -c^{2}$; $\eta(U,A) = 0$ and $A$ zero or spacelike when $x$ is $C^{2}$; for future unit timelike $n$ and $u = U/c$, with $\gamma = -\eta(n,u)$, $\gamma \ge 1$, $|w| = c\sqrt{1-\gamma^{-2}} < c$ for $w = c\,h(u)/\gamma$, and $\gamma = 1$ if and only if $u = n$; $w$ is the velocity of a worldline with four-velocity $cu$ relative to $n$.

[L4] Proper-time derivative and straight-line computation ([[lem-sr-proper-time-parametrization]], [[def-sr-proper-time]], [[def-sr-regular-causal-curve-and-worldline]]): $\tau' = c^{-1}\sqrt{-\eta(x',x')}$, and for the straight worldline $x(s) = p+(s-s_0)v$ the difference quotients are identically $v$, so $x' = v$ and $\tau' = c^{-1}\sqrt{-\eta(v,v)}$ is constant.

## Proof

**Proof technique:** direct.

1.1 Clause (i): by the clock hypothesis [A2] the reading of the ideal clock between $s_1$ and $s_2$ is the proper-time difference $\tau(s_2)-\tau(s_1)$ of [L2]'s and [L4]'s definitions for a $C^{1}$ future timelike history; this is an adopted identification of clock readings with the mathematical proper time, not a geometric consequence. [given, A2, L4]

1.2 Clause (ii): $\eta(U,U) = -c^{2}$ is clause (a) of the mathematical decomposition theorem [L3], and the unit of $U$ is m/s by [L1]; $U$ is future timelike by that theorem, and $U/c$ has squared norm $-1$, so it is the future unit timelike vector of the model. [given, L1, L3]

1.3 Clause (iii): if $x$ is $C^{2}$ at $s$, then $\eta(U(s),A(s)) = 0$ and $A(s)$ is zero or spacelike, both by clause (b) of [L3]; the unit of $A$ is m/s$^{2}$ by [L1]. [given, L1, L3]

1.4 Clause (iv): the clock's carrier is a massive test particle subject to no interaction, and its worldline is the same $x$ by the hypothesis of this clause. Apply [A1] to that particle: there are $p \in A$ and a future timelike $v \in V$ with $x(s) = p+(s-s_0)v$. Thus $x$ is $C^{2}$, including the one-sided derivatives at included endpoints, so four-acceleration is defined everywhere; by [L4] $x' = v$ and $\tau' = c^{-1}\sqrt{-\eta(v,v)}$ is a positive constant. Hence $U = x'/\tau' = v/\tau'$ is constant, $U' = 0$, and $A = U'/\tau' = 0$ identically. [given, A1, L2, L4]

1.5 Clause (v): let $n := U_{o}/c$ be the observer's future unit timelike vector, so that the observer's four-velocity is $cn$ by [L2]; the dimensionless four-velocity of the clock is $u = U/c$, and clause (d) of [L3] gives $\gamma = -\eta(n,u) \ge 1$, speed $|w| = c\sqrt{1-\gamma^{-2}} < c$ relative to the observer, and $\gamma = 1$ if and only if $u = n$; multiplying by $c$ this last equivalence reads $U = U_{o}$, the clock's four-velocity equal to the observer's. [given, L2, L3]

2.1 The interpretation of $w$ as the clock's speed relative to the observer uses the adopted idealization of observers as future unit timelike vectors and the identification in clause (d) of [L3]; the covariance postulate [A3] licenses treating observers described in different inertial charts as the same model objects, but no statement about actual apparatus or measured speeds is made. [step 1.5, A3, L3]

3.1 The conclusion is conditional on [A1]-[A3]: each clause is either the adopted clock/free-trajectory assumption or a clause of the mathematical theorem [L3], and no empirical premise, statistical inference or measurement claim is used; the idealizations (point particles, ideal clocks, flat classical spacetime) are inherited by every clause. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, A1, A2, A3] ∎

## Remarks

- **What is assumed and what is derived.** Clauses (i) and (iv) rest on the adopted free-trajectory and clock assumptions; clauses (ii), (iii) and (v) are the mathematical content of [[thm-sr-proper-time-and-observer-decomposition]] read through the model's interpretation. The theorem asserts what follows from the adopted model, not that ideal clocks or free particles exist as described in nature.

- **The carrier hypothesis in clause (iv).** The ideal-clock reading rule alone supplies no trajectory law. Clause (iv) applies the free-particle postulate to a massive test particle carrying the clock on the same worldline; it does not infer straight motion from the reading rule or extend the particle postulate to arbitrary clock histories.

- **The speed bound is relative to an ideal observer.** The bound $|w| < c$ is a statement about the model's ideal observers $n$; it is not a measurement result, and no statement is made about the accuracy of real clocks or the outcome of any experiment.
