---
id: rem-nrqm-uncertainty-error-disturbance-distinction
aliases: [nrqm-uncertainty-error-disturbance-distinction]
kind: remark
domain: physics
title: "Preparation spread, apparatus resolution and disturbance are different objects"
status: draft
origin: pipeline
dependency_level: 11
deps: [def-nrqm-measurement-framework-declared-measurements-and-instruments, def-nrqm-uncertainty-preparation-spread, post-nrqm-framework-ideal-conditional-measurement, post-nrqm-framework-preparation-and-apparatus, pthm-nrqm-measurement-instrument-updates-not-determined-by-effects, pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles, pthm-nrqm-uncertainty-robertson-relation]
dependency_roles:
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-uncertainty-preparation-spread: formulation-prerequisite
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  pthm-nrqm-measurement-instrument-updates-not-determined-by-effects: physical-result
  pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles: physical-result
  pthm-nrqm-uncertainty-robertson-relation: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope and reading remark separating three notions on the uncertainty and compatibility page and the measurement page of the category: the preparation spread of an outcome law, the resolution or error of a declared apparatus, and the disturbance of the preparation produced by a measurement. The remark records that the framework's postulates define the first through the Born law and the second and third only through declared instruments and apparatus models, and that no universal error-disturbance relation, no universal disturbance bound and no empirical result is asserted. It proves nothing itself."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 3.3-3.4.1, printed pages 76-88 (PDF pages 79-91): the measurement postulate, the intrusive-measurement heuristic for position and momentum, and the exact preparation-spread inequality"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.4, printed page 15 (PDF page 23): the ideal measurement assumption and the resulting state change"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 3, printed pages 87-100 (PDF pages 99-112): the probability interpretation of the spectral measure on which the preparation spread is defined"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## Three distinct objects

**Preparation spread.** For an assigned sharp observable $(A,u_{A})$ and a
preparation $\rho$, the spread $\Delta_{\rho}A$ of
[[def-nrqm-uncertainty-preparation-spread]] is the standard deviation of the
outcome law that the observable and probability postulate assigns to the pair
$(\rho,A)$: it is a property of the preparation and the assigned observable,
computed from the Born law alone, and it exists only under the stated moment
hypotheses. The inequalities of
[[pthm-nrqm-uncertainty-robertson-relation]] concern these spreads and nothing
else.

**Apparatus resolution or error.** A finite-resolution apparatus is modeled in
this category by a declared instrument with effects and an update rule
([[def-nrqm-measurement-framework-declared-measurements-and-instruments]];
clause (iv) of P2 and the ideal conditional measurement postulate P3 in the
readings of [[post-nrqm-framework-ideal-conditional-measurement]]). Whether a
declared effect family approximates a target observable, and by how much, is a
property of the chosen instrument: the postulates do not attach a universal
error parameter to a sharp observable, and the effects alone do not determine
the update ([[pthm-nrqm-measurement-instrument-updates-not-determined-by-effects]]).

**Disturbance.** The state change produced by a measurement is likewise part
of the declared instrument: for the framework's declared ideal sharp
measurement the conditional and discarded-outcome updates are specified in
[[pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles]], and
they are idealizations, not claims about every apparatus. The framework's
postulates assign no universal disturbance to "a measurement of position" as
such.

## What is and is not asserted

**No conflation.** The Robertson relation bounds the product of two
preparation spreads; it does not bound an apparatus error, it does not bound a
disturbance, and it is not a statement that measuring one quantity "must"
perturb another by a fixed amount. The heuristic accounts of measurement
intrusion in the literature are accordingly used on this page at most as
motivation: the exact statements are the preparation-spread results, and the
identification of a concrete apparatus with a declared instrument is a tested
identification with uncertainty under the preparation and apparatus postulate
P7 ([[post-nrqm-framework-preparation-and-apparatus]]).

**No universal error-disturbance relation is recorded.** This page and the
measurement page contain no theorem of the form "error times disturbance is at
least $\hbar/2$": such a statement would require declared error and
disturbance quantifiers for an instrument and its own proof. What is recorded
here is only the separation of the three objects and the conditional
results actually proved on the two pages.

## Remarks

- **Why the distinction is load-bearing.** An experiment that reports a finite
  resolution, a detection efficiency or a background model is reporting
  apparatus properties; a preparation spread is a model quantity of the state
  and the assigned observable. Agreement of a measured histogram with a
  predicted distribution tests the combined preparation, apparatus and
  observable identification, not the inequality alone.
- **Disturbance is model-dependent.** Two declared instruments with the same
  outcome effects can have different updates and hence different disturbances,
  as [[pthm-nrqm-measurement-instrument-updates-not-determined-by-effects]]
  records; a disturbance claim must therefore name its instrument.
