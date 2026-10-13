---
id: rem-cm18-primary-report-contract
kind: remark
title: "Contract for a future reported experiment of the framework: source, setup, calibration, procedure, sampling, observations, uncertainty and interpretation"
status: published
origin: pipeline
domain: physics
deps: [def-cm18-observable-model, def-cm18-calibration, def-cm18-sampling-model, def-cm-statistical-test-and-size, def-cm-likelihood-function, def-cm-confidence-set-and-coverage, rem-cm-inference-and-uncertainty-scope]
dependency_roles:
  def-cm18-observable-model: formulation-prerequisite
  def-cm18-calibration: formulation-prerequisite
  def-cm18-sampling-model: formulation-prerequisite
  def-cm-statistical-test-and-size: mathematical-premise
  def-cm-likelihood-function: mathematical-premise
  def-cm-confidence-set-and-coverage: mathematical-premise
  rem-cm-inference-and-uncertainty-scope: mathematical-premise
dependency_level: 13
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope remark fixing the inventory a future reported experiment of this framework must provide: an actually retrieved primary source, the preparation and apparatus with its calibration data, the measurement protocol in a declared frame, the sampling and selection model, the reported observations with units, the statistical and systematic uncertainty treatment, and a specified comparison model. The item reports no experiment, no observation, no uncertainty and no empirical conclusion; it is a contract for later items, not an experiment."
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data - Guide to the expression of uncertainty in measurement (BIPM, 2008 corrected version), clauses 4.1-4.4 (measurement model, Type A and Type B evaluation of standard uncertainty), clause 5 (combined standard uncertainty) and clause 6 (expanded uncertainty)"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    - title: "JCGM 200:2012, International Vocabulary of Metrology - Basic and General Concepts and Associated Terms (VIM), definitions 2.39 (calibration), 2.9 (measurement result) and 2.26 (measurement uncertainty)"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf"
    - title: "B. N. Taylor and C. E. Kuyatt, Guidelines for Evaluating and Expressing the Uncertainty of NIST Measurement Results, NIST Technical Note 1297 (1994), Sections 2-6 on Type A and Type B evaluation, combined and expanded uncertainty, and reporting"
      url: "https://physics.nist.gov/cuu/pdf/tn1297.pdf"
verification:
  precheck: n/a
---

## What a reported experiment must supply

A later **experiment item** for this framework is a report of an actual
measurement, and must be assembled from an actually retrieved primary source
and record, separately:

1. **Source.** A primary report with a resolvable reference, read in full:
   an apparatus paper, an instrument report or a data release, not a
   textbook exposition of a law and not a secondary anecdote.
2. **Setup.** The prepared system in the vocabulary of the model: labels,
   declared parameters, configurations and the initial-data region
   ([[def-cm18-observable-model]]); the apparatus and its settings; and the
   **calibration** with its reference inputs and their declared deviations
   ([[def-cm18-calibration]]).
3. **Procedure.** The measurement protocol in a declared inertial frame:
   observation times, readout, units; the **sampling model** with its
   adopted IID and second-moment hypotheses, or an explicit statement of the
   dependence or drift that replaces them ([[def-cm18-sampling-model]]); and
   the selection of the reported data.
4. **Observations.** The values actually reported by the source, with their
   units and their conditions, quoted or transcribed faithfully. If the
   source records no quantitative detail, only a correspondingly limited
   qualitative account is supported; no precision, count or value may be
   supplied from elsewhere.
5. **Uncertainty.** The statistical and systematic uncertainty treatment of
   the source and of the calibration: Type A evaluation from repeated
   observations, Type B evaluation from declared bounds and reference data,
   combination and expansion, and the deviations of the reference standards.
   Measured inputs of the comparison model carry their uncertainties and
   conditions into the conclusion ([[rem-cm-inference-and-uncertainty-scope]]).
6. **Interpretation.** A specified comparison between the reported
   observations and a specified prediction of the model, including the
   idealizations the prediction uses; a specified discrepancy measure; and a
   specified test — data space, model family, null set and rejection region
   with its size ([[def-cm-statistical-test-and-size]]) — or a specified
   estimation or confidence construction ([[def-cm-confidence-set-and-coverage]],
   [[def-cm-likelihood-function]]). Agreement is evidence for the joint
   assumptions of model, apparatus and analysis, and a discrepancy may
   expose any of them.

## What is and is not available now

The treatments cited by this framework are model exposition; they are not
primary reports of a measurement of the framework's parameters under a
controlled preparation, and the citations of this page therefore close no
experiment obligation. No experiment item, no observation, no measured
value, no uncertainty, no $p$-value and no effect size is asserted by this
page. The worked computations on the companion page are **proposals**: they
compute what a protocol would imply under declared hypothetical data and
uncertainties. Turning such a proposal into a reported experiment requires
all six items above, in particular an actually retrieved primary source.
