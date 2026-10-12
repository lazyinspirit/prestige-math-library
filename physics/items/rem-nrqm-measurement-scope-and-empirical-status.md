---
id: rem-nrqm-measurement-scope-and-empirical-status
aliases: [ nrqm-measurement-scope-and-empirical-status ]
kind: remark
domain: physics
title: "Scope and empirical status of the measurement-and-instruments page"
status: draft
origin: pipeline
dependency_level: 13
deps:
  [
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    post-nrqm-framework-ideal-conditional-measurement,
    post-nrqm-framework-preparation-and-apparatus,
    pthm-nrqm-measurement-countable-kraus-instruments,
    pthm-nrqm-measurement-degenerate-eigenspace-update,
    pthm-nrqm-measurement-finite-effects-dilation,
    pthm-nrqm-measurement-instrument-updates-not-determined-by-effects,
    pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles
  ]
dependency_roles:
  def-nrqm-measurement-framework-declared-measurements-and-instruments: operational-prerequisite
  post-nrqm-framework-ideal-conditional-measurement: operational-prerequisite
  post-nrqm-framework-preparation-and-apparatus: operational-prerequisite
  pthm-nrqm-measurement-countable-kraus-instruments: operational-prerequisite
  pthm-nrqm-measurement-degenerate-eigenspace-update: operational-prerequisite
  pthm-nrqm-measurement-finite-effects-dilation: operational-prerequisite
  pthm-nrqm-measurement-instrument-updates-not-determined-by-effects: operational-prerequisite
  pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles: operational-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope audit of the measurement-and-instruments page: it
  records that the page's measurement content is a conditional development of
  the adopted ideal conditional-measurement postulate P3 and its declared
  instruments, that no apparatus realization, outcome uniqueness,
  exact-continuum collapse or empirical result is asserted, and which
  measurement topics are deferred to later pages. The remark proves nothing and
  reports no observation."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.3,
        printed pages 76-77 (the measurement postulate, collapse and its stated
        limits)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 1.4
        and 6.5, printed pages 15 and 132-135 (ideal measurement, and the
        discussion of apparatus dynamics versus collapse)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Scope of the page

**Adopted, not derived.** Every measurement statement of this page is conditional on the adopted ideal conditional-measurement postulate P3 ([[post-nrqm-framework-ideal-conditional-measurement]]), read in the vocabulary of [[def-nrqm-measurement-framework-declared-measurements-and-instruments]]. The Lueders update is not derived from the Born outcome law of P2, and the Born outcome law is not derived from the collapse rule: the two are separate adopted clauses, and the theorems of this page deduce conditional consequences of them and of the cited mathematics. P3 itself records that its declared class is an idealization.

**Declared apparatus models only.** [[pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles]] states the outcome law, repeatability, the discarded-outcome ensemble and coherence loss for a declared ideal sharp measurement; [[pthm-nrqm-measurement-degenerate-eigenspace-update]] shows that the update by an eigenspace projection preserves coherence inside a degenerate eigenspace; [[pthm-nrqm-measurement-instrument-updates-not-determined-by-effects]] and [[pthm-nrqm-measurement-finite-effects-dilation]] show that a family of outcome effects does not determine the conditional update and that a declared finite effect family admits an ideal dilated projective model; [[pthm-nrqm-measurement-countable-kraus-instruments]] develops declared countable instruments and their repeatability criterion. None of these items asserts that a particular laboratory device realizes the declared measurement, filter or instrument, and none asserts a preferred or unique recorded outcome; the identification of a device with a declared model is a tested identification with uncertainty under P7 ([[post-nrqm-framework-preparation-and-apparatus]]).

**What is excluded from the declared sharp class.** A measurement of an exact value of a quantity with continuous spectrum is not represented here by normalizing a delta symbol (clauses (iii) of P2 and (v) of P3); a destructive or absorbing detector is not a projective measurement of the incoming system and must be modeled by its own instrument, one instance being the finite instrument of the companion page; and a unitary system-apparatus interaction produces conditional correlations without, by itself, selecting a recorded outcome (clause (v) of P3).

**No empirical content.** No item of this page records a measurement, an apparatus calibration, a count, an uncertainty or a comparison with data. The probabilities computed in this page are model probabilities for declared preparations and declared apparatus models; agreement or disagreement with recorded data would test the combined model and apparatus assumptions and is not asserted anywhere here.

**Deferred measurement topics.** Joint and compatible sharp measurements, their order independence and their joint laws are developed with the uncertainty-and-compatibility content of the category. The spatial Stern-Gerlach force model, the magnetic-field geometry and the detector-position analysis belong to the magnetic-and-detection material and are not derived here. Measurement-model boundaries for Bell-type comparisons and finite-sample statistical qualifications belong to the later Bell-models page. The reported Stern-Gerlach experiments of 1922 and other primary experimental reports remain candidate experiment items that are not asserted by this page.
