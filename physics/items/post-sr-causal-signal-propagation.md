---
id: post-sr-causal-signal-propagation
kind: postulate
title: "The causal signal restriction of the model"
status: published
origin: pipeline
domain: physics
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Idealized point-like emission and reception events of signals in the flat classical special-relativistic model with the adopted causal structure; the restriction is an adopted model assumption, not a theorem and not an empirical claim about nature, and it carries no statistical, apparatus, source or detector content; kinematic patterns produced by independent prearranged mechanisms are explicitly not restricted."
deps: [def-sr-causal-reachability-in-affine-minkowski-space, def-sr-affine-minkowski-model, def-time-orientation-and-future-causal-sets, def-causal-classification-of-lorentz-vectors, def-inertial-frame-and-inertial-chart, def-sr-si-units-and-coordinate-conventions, post-sr-ideal-clocks-and-light]
dependency_roles:
  def-sr-causal-reachability-in-affine-minkowski-space: formulation-prerequisite
  def-sr-affine-minkowski-model: formulation-prerequisite
  def-time-orientation-and-future-causal-sets: formulation-prerequisite
  def-causal-classification-of-lorentz-vectors: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: formulation-prerequisite
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  post-sr-ideal-clocks-and-light: formulation-prerequisite
dependency_level: 9
aliases: []
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "R. C. Tolman, The Theory of the Relativity of Motion (University of California Press, Berkeley, 1917): Chapter V, Sections 45-52 pp. 49-55 (kinematical rate of a clock, the idea of simultaneity, velocities greater than that of light with the order-of-cause-and-effect reversal formula (28)-(29), and the blocks caveat that kinematic patterns without causal connection are not restricted); Internet Archive full text of the 1917 printing"
      url: "https://archive.org/download/theoryrelativmot00tolmrich/theoryrelativmot00tolmrich_djvu.txt"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 5-7 (light cones; timelike, null and spacelike separation; no coordinate-independent future for a spacelike-separated event), Chapter 4 pp. 124-127 (no signals faster than light; information flows only along timelike or null trajectories; future domain of dependence; Misner space with closed timelike curves as a warning about other topologies); PDF page = printed page + 7"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 1.3.2 pp. 22-23 (light-rectangles as causal diamonds with invariant area), Section 2.1 pp. 43-45 (the modest causality postulate P1 and the limits of a general causality principle), Section 4.7 pp. 110-113 (superluminal transmission of information, the tachyonic antitelephone attributed to Tolman, reported tachyon searches); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Postulate

Adopt as a physical assumption of this framework the following restriction on
signal transmission, called the **causal signal restriction of the model**.

**(i) Causal restriction.** Let $p$ and $q$ be the emission and reception
events of an idealized transmission that carries a signal, where a *signal* is
understood as information, or a physical marker by which a prepared operation
at the emission event is correlated with an observation at the reception event,
within the model. Mathematically, the admitted endpoint pairs form a relation $\mathcal T\subseteq A\times A$, with $(p,q)\in\mathcal T$ meaning that the model admits a transmission from $p$ to $q$. The adopted restriction is $\mathcal T\subseteq\{(p,q):q\in J^+(p)\}$. Membership in this latter set is a necessary condition; it does not assert that a transmission exists for every such pair. Thus the model admits such a transmission only if $q$ lies in
the causal future $J^+(p)$ of $p$
([[def-sr-causal-reachability-in-affine-minkowski-space]]), that is, only if
the displacement $q-p$ is zero or future causal
([[def-causal-classification-of-lorentz-vectors]],
[[def-time-orientation-and-future-causal-sets]]); equivalently, no signal
connects an event with an event outside its closed future light cone.

**(ii) Ideal light.** The ideal vacuum light signals of
[[post-sr-ideal-clocks-and-light]] are the null boundary case of the
restriction: for distinct emission and reception events their displacement is future null,
so in the chart of every inertial frame with $x^0=ct$
([[def-inertial-frame-and-inertial-chart]],
[[def-sr-si-units-and-coordinate-conventions]]) they attain
$|x_s(q)-x_s(p)|=x^0(q)-x^0(p)$.

**(iii) Status.** This is an adopted assumption about the idealized model; it is
not a theorem of the affine geometry of [[def-sr-affine-minkowski-model]], it is
not derived here from the other postulates or from any experiment, and it is not
an empirical claim about nature. In particular the framework does not assert
that no physical process whatsoever exceeds $c$, and the question whether any
specified physical process is a signal of this model, and with what reliability
and reach, is left to a separate experimental interface.

**(iv) Explicit non-restriction.** The assumption does not forbid kinematic
patterns in which spacelike-separated events are produced by independent
prearranged mechanisms without any signal or energy transfer between them (for
example a prearranged row of devices triggered in a fixed sequence), and it
imposes no bound on correlations between spacelike-separated events.

**(v) Scope.** The assumption concerns idealized point-like transmission events
in the flat classical model and carries no statistical, apparatus, source or
detector content; no choice principle is used.

## Status and sources

The restriction is adopted, not proved. The cited treatments motivate the
reading that the model's causal structure is what a signal can respect — the
cone as a statement of possible cause and effect and the absence of signals
outside it ([[post-sr-ideal-clocks-and-light]], whose light-ray clause supplies
the boundary case), and the reversal of the temporal order of the endpoints of
a superluminal transmission in a moving inertial frame, which is what makes the
restriction significant rather than vacuous. Crowell Section 4.7.1 presents its
arguments for the restriction as a defense in depth and explicitly calls the
causality argument the weakest; the source's own textual status is recorded
here rather than converted into a derivation. Crowell Section 2.1.3 also
records a modest causality postulate P1, the existence of events whose
displacement is timelike in every frame; that is a different, existence-style
statement, it is not re-minted or adopted here, and no identification with the
restriction of clause (i) is made. Tolman Sections 51-52 give a one-way
order-reversal computation in older notation, used on this page only as a
motivation for the conditional relay analysis; no measurement is reported.
