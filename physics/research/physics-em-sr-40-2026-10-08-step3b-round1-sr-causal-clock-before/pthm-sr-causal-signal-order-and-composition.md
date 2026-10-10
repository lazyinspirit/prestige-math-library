---
id: pthm-sr-causal-signal-order-and-composition
kind: physics-theorem
title: "Signals in the model: receipt in the future cone, relay composition, absence of closed signal loops, and frame independence of signal reachability"
status: draft
origin: pipeline
domain: physics
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
physical_scope: "Conditional statements about signals in the ideal flat classical model with the adopted postulates (inertial covariance, ideal clocks and light, and the causal signal restriction); no actual transmitter, receiver, detector or measurement is described, no statistical or empirical claim is made, and no inference from the model's structure to the physical world is drawn."
deps: [post-sr-causal-signal-propagation, post-sr-inertial-covariance, post-sr-ideal-clocks-and-light, def-sr-causal-reachability-in-affine-minkowski-space, lem-sr-future-causal-sums-and-inertial-coordinate-criterion, lem-sr-spacelike-pairs-have-frame-dependent-time-order, thm-sr-future-cone-and-flat-domain-of-dependence, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-causal-classification-of-lorentz-vectors, def-lorentz-map-and-lorentz-group, lem-lorentz-map-preserves-metric-and-causal-structure, thm-sr-proper-orthochronous-lorentz-algebra, pthm-sr-interval-and-cone-invariance, def-sr-si-units-and-coordinate-conventions]
dependency_roles:
  post-sr-causal-signal-propagation: physical-assumption
  post-sr-inertial-covariance: physical-assumption
  post-sr-ideal-clocks-and-light: physical-assumption
  def-sr-causal-reachability-in-affine-minkowski-space: formulation-prerequisite
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
  lem-sr-spacelike-pairs-have-frame-dependent-time-order: mathematical-premise
  thm-sr-future-cone-and-flat-domain-of-dependence: mathematical-premise
  def-inertial-frame-and-inertial-chart: formulation-prerequisite
  def-sr-affine-minkowski-model: formulation-prerequisite
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  thm-sr-proper-orthochronous-lorentz-algebra: mathematical-premise
  pthm-sr-interval-and-cone-invariance: physical-result
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
dependency_level: 12
aliases: []
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 5-7 (light cones; timelike, null and spacelike separation; no coordinate-independent future for a spacelike-separated event), Chapter 4 pp. 124-127 (no signals faster than light; information flows only along timelike or null trajectories; future domain of dependence; Misner space with closed timelike curves as a warning about other topologies); PDF page = printed page + 7"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 1.3.2 pp. 22-23 (light-rectangles as causal diamonds with invariant area), Section 2.1 pp. 43-45 (the modest causality postulate P1 and the limits of a general causality principle), Section 4.7 pp. 110-113 (superluminal transmission of information, the tachyonic antitelephone attributed to Tolman, reported tachyon searches); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "R. C. Tolman, The Theory of the Relativity of Motion (University of California Press, Berkeley, 1917): Chapter V, Sections 45-52 pp. 49-55 (kinematical rate of a clock, the idea of simultaneity, velocities greater than that of light with the order-of-cause-and-effect reversal formula (28)-(29), and the blocks caveat that kinematic patterns without causal connection are not restricted); Internet Archive full text of the 1917 printing"
      url: "https://archive.org/download/theoryrelativmot00tolmrich/theoryrelativmot00tolmrich_djvu.txt"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision): Sections 2.1-2.3 pp. 25-30 (Minkowski metric (2.6) and inertial frames; timelike, null, spacelike and causal vectors with the light-cone double cone and its two disconnected causal sets; timelike and causal curves; proper time (2.19); curves of extremal proper time, straight lines in inertial frames and the unproved maximization statement); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Adopt the postulates [[post-sr-inertial-covariance]],
[[post-sr-ideal-clocks-and-light]] and the causal signal restriction
[[post-sr-causal-signal-propagation]], and use the events, the relations $\le$
and $<$ and the sets $J^+$ and $I^+$ of
[[def-sr-causal-reachability-in-affine-minkowski-space]] together with the
mathematical results
[[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]],
[[lem-sr-spacelike-pairs-have-frame-dependent-time-order]] and
[[thm-sr-future-cone-and-flat-domain-of-dependence]]. Let $x$ be the chart of
any inertial frame with $x^0=ct$
([[def-inertial-frame-and-inertial-chart]],
[[def-sr-si-units-and-coordinate-conventions]]). Then, as conditional
statements about the ideal model and not about any actual apparatus:

**(i) Receipt in the future light cone and absolute temporal order.** If a
signal is transmitted from $p$ to $q$, then $q\in J^+(p)$; if $q\ne p$, then
$x^0(q)>x^0(p)$ and $|x_s(q)-x_s(p)|\le x^0(q)-x^0(p)$ in every inertial chart,
and every inertial frame's time order places the reception after the emission.
Hence no inertial change of description reports the reception before the
emission, and the temporal order of the endpoints of a transmission is the same
in every inertial frame.

**(ii) Relay composition.** If signals are transmitted from $p$ to $q$ and from
$q$ to $r$, then $r\in J^+(p)$; if in addition $q\in I^+(p)$ or
$r\in I^+(q)$, then $r\in I^+(p)$. Thus relaying never leaves the causal future
of the first emission and never returns to the emission event.

**(iii) No closed signal loop.** If signals are transmitted from $p$ to $q$ and
from $q$ to $p$, then $p=q$; no chain of transmissions in this model returns to
its own emission event.

**(iv) Frame independence of signal reachability.** For every proper
orthochronous affine Lorentz map $F$ of the model, which is an inertial change
of description by [[post-sr-inertial-covariance]], one has
$F(J^+(p))=J^+(F(p))$ and $F(I^+(p))=I^+(F(p))$ for all events $p$, and
$p\le q$ if and only if $F(p)\le F(q)$; hence whether the model admits a signal
between two events is the same in every inertial frame, in agreement with
[[pthm-sr-interval-and-cone-invariance]].

**(v) Spacelike pairs admit no signal.** If $q-p$ is spacelike, then no signal
is transmitted from $p$ to $q$, while there are inertial frames whose charts
assign $x^0(q)-x^0(p)$ either sign; consequently the model's signal restriction
is exactly the requirement that transmissions occur only between events whose
temporal order is observer-independent, with the emission the earlier endpoint.

**(vi) Scope and qualification.** Every clause is conditional on the adopted
postulates and is a statement about the ideal flat model; no actual signal,
transmitter, receiver, detector or measurement is described, no statistical or
empirical claim is made, and no inference from the model's structure to the
physical world is drawn. Clause (v) uses the mathematical fact
[[lem-sr-spacelike-pairs-have-frame-dependent-time-order]] and not an
experiment. No choice principle is used.

## Facts & Assumptions

**Given:** The oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ of [[def-sr-affine-minkowski-model]] with the postulates [[post-sr-inertial-covariance]], [[post-sr-ideal-clocks-and-light]] and [[post-sr-causal-signal-propagation]] adopted as physical assumptions, an inertial chart $x$ with $x^0=ct$ ([[def-inertial-frame-and-inertial-chart]], [[def-sr-si-units-and-coordinate-conventions]]), and events $p,q,r\in A$.

[L1] Causal signal restriction: a signal is information or a physical marker correlating a prepared operation at the emission event with an observation at the reception event within the model, and the model admits a transmission carrying a signal from $p$ to $q$ only if $q\in J^+(p)$, that is only if $q-p$ is zero or future causal; ideal vacuum light signals are the future null boundary case; the restriction is adopted, not derived, and not an empirical claim; kinematic patterns from independent prearranged mechanisms are explicitly not restricted ([[post-sr-causal-signal-propagation]]).

[L2] Criterion and cone description: $\overline{C^+}$ is a convex cone with $\overline{C^+}\cap\overline{C^-}=\{0\}$; for $D=x(q)-x(p)$, $q\in J^+(p)$ iff $D^0\ge|D_s|$; $q\in I^+(p)$ iff $D^0>|D_s|$; every nonzero element of $\overline{C^+}$ has $D^0>0$; sums of finitely many elements of $\overline{C^+}$ lie in $\overline{C^+}$, and if one summand lies in $C^+$ the sum lies in $C^+$ ([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]]).

[L3] Spacelike pairs: for $q-p$ spacelike one has $|D^0|<|D_s|$ in every inertial chart, and there are inertial frames whose charts give $x^0(q)-x^0(p)$ either sign and inertial frames of simultaneity ([[lem-sr-spacelike-pairs-have-frame-dependent-time-order]]).

[L4] Causal loops and covariance: if $p\le q$ and $q\le p$ then $p=q$; and for every proper orthochronous affine Lorentz map $F$ one has $F(J^+(p))=J^+(F(p))$, $F(I^+(p))=I^+(F(p))$, and $p\le q$ iff $F(p)\le F(q)$ ([[thm-sr-future-cone-and-flat-domain-of-dependence]]).

[L5] Inertial covariance: the equations of the specified model are covariant under the affine maps with proper orthochronous Lorentz linear part, and those maps are the inertial changes of description ([[post-sr-inertial-covariance]], [[def-lorentz-map-and-lorentz-group]]).

[L6] Interval and cone invariance: the causal classification of a displacement and, for causal displacements, the future/past alternative are independent of the inertial chart, and the interval computed from coordinates is chart independent ([[pthm-sr-interval-and-cone-invariance]], [[lem-lorentz-map-preserves-metric-and-causal-structure]], [[thm-sr-proper-orthochronous-lorentz-algebra]], [[def-causal-classification-of-lorentz-vectors]]).

## Proof

**Proof technique:** direct.

1.1 Clause (i). Suppose a signal is transmitted from $p$ to $q$. By [L1] the model admits this only if $q\in J^+(p)$. If $q\ne p$, then $D=q-p$ is a nonzero element of $\overline{C^+}$, so $D^0>0$ and $D^0\ge|D_s|$ by [L2]; in the chart $x$ of any inertial frame, $D^0=x^0(q)-x^0(p)$ and $|D_s|=|x_s(q)-x_s(p)|$ by the affine linearity of the chart, so $x^0(q)>x^0(p)$ and $|x_s(q)-x_s(p)|\le x^0(q)-x^0(p)$. Since the chart is arbitrary and the computation used the same criterion available in every inertial chart, every inertial frame's time order places the reception after the emission, and the temporal order of the endpoints of the transmission is the same in every inertial frame. [given, L1, L2]

2.1 Clause (ii). Let signals be transmitted from $p$ to $q$ and from $q$ to $r$. By [L1] applied twice, $q-p\in\overline{C^+}$ and $r-q\in\overline{C^+}$, so $r-p=(q-p)+(r-q)\in\overline{C^+}$ by the finite-sums clause of [L2], that is $r\in J^+(p)$. If in addition $q\in I^+(p)$, that is $q-p\in C^+$, or $r\in I^+(q)$, that is $r-q\in C^+$, the strict case of the same clause gives $r-p\in C^+$, that is $r\in I^+(p)$. In particular a relay whose second leg is causal does not leave the causal future of the first emission, and no relay returns to the first emission event in the strict sense. [step 1.1, L1, L2]

2.2 Clause (iii). If signals are transmitted from $p$ to $q$ and from $q$ to $p$, then [L1] gives $q-p\in\overline{C^+}$ and $p-q\in\overline{C^+}$; by the antisymmetry clause of [L4] (equivalently by $\overline{C^+}\cap\overline{C^-}=\{0\}$ from [L2]) this forces $q-p=0$, that is $p=q$. Hence no chain of transmissions in this model returns to its own emission event. [step 1.1, L2, L4]

2.3 Clause (iv). By the covariance clause of [L4] one has $F(J^+(p))=J^+(F(p))$, $F(I^+(p))=I^+(F(p))$ and $p\le q$ iff $F(p)\le F(q)$ for every proper orthochronous affine Lorentz map $F$, and by [L5] these maps are exactly the inertial changes of description of the model. Since [L1] admits a signal from $p$ to $q$ only when $q\in J^+(p)$, the condition is preserved under every change of description; [L6] records independently that the causal classification and the future/past alternative of the specified model are chart independent, in agreement with [[pthm-sr-interval-and-cone-invariance]]. [step 1.1, L1, L4, L5, L6]

2.4 Clause (v). Let $q-p$ be spacelike. By the first clause of [L3], $|D^0|<|D_s|$ in every inertial chart, so neither $D^0\ge|D_s|$ nor $-D^0\ge|D_s|$ holds; by [L2] $q\notin J^+(p)$ and $q\notin J^-(p)$, and by [L1] no signal is transmitted from $p$ to $q$ (nor from $q$ to $p$). By the remaining clauses of [L3] there are inertial frames whose charts assign $x^0(q)-x^0(p)$ either sign, including zero. Conversely, if the temporal order of a pair $p\ne q$ is observer-independent with the emission $p$ the earlier endpoint, then the displacement is not spacelike by [L3], hence it is nonzero causal by the classification clauses of [L6], and since $p$ is the earlier endpoint the displacement lies in $\overline{C^+}$; the model's restriction admits a transmission only in the future direction by [L1], so the restriction is exactly the requirement that transmissions occur only between events whose temporal order is observer-independent, with the emission the earlier endpoint. [step 1.1, L1, L2, L3, L6]

3.1 Clause (vi). Steps 1.1 to 2.4 are conditional deductions from the adopted postulates [L1], [L5] and the mathematical results [L2], [L3], [L4], [L6]: no actual signal, transmitter, receiver, detector or measurement is described, no statistical or empirical claim is made, and clause (v) is a mathematical exclusion resting on [L3] rather than on any experiment. Every quantification is over the ideal flat model, and no choice principle is used, all arguments being finite-dimensional coordinate algebra with the explicit objects already named. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, given] ∎
