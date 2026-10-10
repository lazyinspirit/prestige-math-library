---
id: def-sr-operational-radar-protocol
kind: definition
domain: physics
title: "The operational radar protocol of an ideal observer"
status: draft
origin: pipeline
physical_scope: >-
  The radar protocol is defined for a future timelike worldline of the affine
  Minkowski model in the complete vacuum of the adopted ideal-light postulate,
  with ideal clocks and an available ideal reflector, and only for those events
  that are connected to the observer's worldline by the stated emission and
  reception null rays. The derived one-way time and distance assignment is a
  symmetric half-split convention, not an independent measurement of a one-way
  light speed; no general existence, uniqueness or synchronization result is asserted for accelerated observers; nothing is asserted about dispersive or
  absorbing media, finite-resolution apparatus, global single-valuedness,
  detector models, measurement outcomes, statistical inference or empirical
  comparison.
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [post-sr-ideal-clocks-and-light, def-sr-si-units-and-coordinate-conventions, def-sr-regular-causal-curve-and-worldline, def-sr-proper-time, lem-sr-proper-time-reparametrization-invariance, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-sr-affine-minkowski-model]
dependency_roles:
  post-sr-ideal-clocks-and-light: physical-assumption
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  lem-sr-proper-time-reparametrization-invariance: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 8-16 (inertial frames built from rigid rods and synchronized clocks, simultaneity, time dilation, length contraction) and pp. 26-27 (worldline, proper time (1.97)-(1.99), four-velocity); Chapter 3 pp. 68-71 (proper-time functional)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Definition

Adopt the ideal-clock and ideal-light assumptions of [[post-sr-ideal-clocks-and-light]] and the SI conventions of [[def-sr-si-units-and-coordinate-conventions]]. Let $x:I\to A$ be a future timelike worldline ([[def-sr-regular-causal-curve-and-worldline]]) with proper-time function $\tau$ ([[def-sr-proper-time]]), and let $s_-<s_+$ be parameter values in $I$. Suppose an event $q$ and the events $e_-:=x(s_-)$, $e_+:=x(s_+)$ satisfy: $q-e_-$ is future null and $e_+-q$ is future null ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]], [[def-sr-affine-minkowski-model]]). Under the adopted ideal-light assumption an ideal ray is emitted at $e_-$, reaches $q$, and an ideal ray emitted at $q$ reaches $e_+$; the event $q$ is idealized as an instantaneous reflection that changes nothing else. The **radar protocol** of the observer assigns to $q$

(i) the **radar time** $\tau_{\mathrm{rad}}(q):=\tfrac12\bigl(\tau(s_-)+\tau(s_+)\bigr)$, the ideal clock's reading midway between emission and reception, and

(ii) the **radar distance** $\rho_{\mathrm{rad}}(q):=\tfrac{c}{2}\bigl(\tau(s_+)-\tau(s_-)\bigr)$, half the round-trip light time multiplied by $c$.

Two events measured by the same observer are **radar-simultaneous** when their radar times agree. The assignment does not change under increasing $C^1$ reparametrizations with everywhere positive derivative and the same clock origin of the observer's worldline, because the proper-time function does not ([[lem-sr-proper-time-reparametrization-invariance]]).

**Conventions and scope.** (a) The protocol is a definition of an operational assignment conditional on the existence of the emission, reflection and reception events, and it assumes an available ideal reflector and ideal apparatus. (b) The split of the round trip into a "time" and a "distance" uses the symmetric convention in which half of the round-trip time is assigned to the outgoing and half to the returning segment; the protocol determines the round-trip quantity $\tau(s_+)-\tau(s_-)$ operationally, while the derived one-way assignment is a convention and does not measure a one-way light speed independently of a synchronization convention. (c) The conditional assignment is defined for the stated future timelike worldline, including an accelerated one, but no general existence, uniqueness or synchronization theorem for accelerated observers is asserted. Nothing is claimed about dispersive or absorbing media, finite-resolution apparatus, global single-valuedness or detector models, and no measurement outcome, statistical inference or empirical comparison is asserted.

## Remarks

- **Well-definedness.** The data $\tau(s_-)$ and $\tau(s_+)$ are real numbers determined by the worldline and the two parameters ([[def-sr-proper-time]], [[def-sr-regular-causal-curve-and-worldline]]), so $\tau_{\mathrm{rad}}(q)$ and $\rho_{\mathrm{rad}}(q)$ are well defined; the existence hypotheses on $q$ are exactly the condition that $q$ is connected to the observer's history by a future null outgoing segment from $e_-$ and a future null returning segment to $e_+$ ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]). Since $\tau$ is invariant under increasing $C^1$ reparametrizations with everywhere positive derivative and the same clock origin of the worldline ([[lem-sr-proper-time-reparametrization-invariance]]), so are the radar time and radar distance.

- **The two null segments are the operational content of the adopted assumption.** The existence of ideal rays along the null displacements $q-e_-$ and $e_+-q$ is supplied by the ideal-light clause of [[post-sr-ideal-clocks-and-light]], which identifies ideal light rays in vacuum with future null straight lines; the protocol therefore describes an assignment conditional on that idealization and does not describe a physical mirror, a finite apparatus, or a medium.

- **The half-split is a convention, not a derived fact.** The protocol measures the round-trip time $\tau(s_+)-\tau(s_-)$ operationally; writing half of it as a one-way time and $c/2$ times it as a distance is the symmetric convention adopted here. For inertial observers this convention is shown to agree with the simultaneity slices of the observer in [[pthm-sr-radar-synchronization-of-inertial-observers]], while the rotating-ring example below concerns synchronization by the congruence's local rest spaces, not a failure of a single rotating observer's radar assignment. Neither statement is part of the definition.
