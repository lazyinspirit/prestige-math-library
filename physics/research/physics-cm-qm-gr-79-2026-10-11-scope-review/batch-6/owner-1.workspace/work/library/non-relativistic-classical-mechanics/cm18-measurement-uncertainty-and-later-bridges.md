---
page: cm18-measurement-uncertainty-and-later-bridges
title: "Measurement, uncertainty and later bridges"
status: draft
library: physics
items: [def-cm18-observable-model,
        def-cm18-calibration,
        def-cm18-sampling-model,
        rem-cm18-model-test,
        rem-cm18-numerical-error,
        rem-cm18-galilean-regime,
        rem-cm18-em-bridge,
        rem-cm18-qm-bridge,
        rem-cm18-primary-report-contract]
examples: []
requires: ["cm-math-evidence","cm-math-numerical","cm03-momentum-work-and-energy-balances"]
---

This page fixes the interface between the force model of
[[cm02-forces-initial-data-and-newtonian-flow]] and the measurement,
calibration and sampling structures that any comparison with data requires,
and it audits two later bridges. The operational observable model
[[def-cm18-observable-model]] declares a parameter set indexing force maps, a
preparation map assigning initial data, a finite family of observation times
inside the unique maximal motions supplied by [[pthm-cm02-ivp]], a readout of
the model states with declared units, and an additive error random element
with values in a declared open error domain. Calibration is the datum
[[def-cm18-calibration]]: reference inputs traced to the primitive standards
of the framework — durations, lengths and masses — with their declared
coordinatewise deviations in declared units and reference scales,
reference observations and a rule $c=\Gamma(y,\theta_{\mathrm{ref}})$ selecting a calibrated
prediction map, in the sense of [[def-cm-calibration-rule]]. Repeated
observation is the sampling model [[def-cm18-sampling-model]], in which the
IID and second-moment hypotheses are adopted rather than inferred and the
sample mean obeys the distribution-free conclusions of
[[lem-cm-finite-iid-sample-mean-bound]]. None of these items asserts that an
apparatus realizes a protocol, that an error law is correct, or that a
measurement has been made.

The status of a test is recorded in [[rem-cm18-model-test]]: a test is a
rejection region for a specified family and null set, its size is computed
under that family, and rejection or retention is evidence about the specified
triple of model, apparatus and sampling assumptions rather than a proof about
nature; the probability indices of [[def-cm-statistical-test-and-size]],
[[def-cm-confidence-set-and-coverage]] and [[def-cm-likelihood-function]]
attach no probability to a parameter value. The numerical-error remark
[[rem-cm18-numerical-error]] separates the certified velocity-Verlet bounds
of [[cm-math-numerical]] — finite-time order-two trajectory error, additive
per-step accumulation and the analytic exponential-time energy estimates
under their holomorphy, small-step and compact-retention hypotheses — from
the model-versus-nature gap, and records that a simulated trajectory is a
computation, not an experiment.

The remaining remarks locate the framework among its declared regimes and
later bridges. [[rem-cm18-galilean-regime]] records the frame-relativity of
protocols and the absence of any intrinsic slow-motion parameter or numerical
validity cutoff inside the framework. [[rem-cm18-em-bridge]] states what a
charged-particle coupling must add — charge dimensions, field maps and a
coupling law — and what the force branch then yields conditionally, with no
field equation, coupling constant or field momentum imported.
[[rem-cm18-qm-bridge]] records that a quantization or correspondence result
would be a separate construction with explicit domain and limit hypotheses,
and that no such result is asserted here. The contract for a future reported
experiment is [[rem-cm18-primary-report-contract]]: an actually retrieved
primary source, setup, calibration, procedure, sampling model, observations
with uncertainties, and a specified comparison. The proposals and
computations of the companion page
[[cm18-measurement-uncertainty-and-later-bridges-examples]] are worked under
explicitly declared data and are not measurements.
