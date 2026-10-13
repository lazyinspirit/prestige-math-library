---
id: post-nrqm-framework-preparation-and-apparatus
kind: postulate
title: "Preparation and apparatus postulate P7: declared preparations, isolation
  and sampling assumptions"
status: published
origin: session
domain: physics
dependency_level: 8
deps:
  [
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-ideal-conditional-measurement,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle
  ]
dependency_roles:
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-ideal-conditional-measurement: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The preparation and apparatus assumptions of the framework: a
  comparison with data requires declared preparation, isolation, detection and
  sampling models, repetitions are an additional statistical model, and the
  claim that an apparatus realizes a preparation and a dynamics is a physically
  tested identification with uncertainty. The item asserts no measured result,
  adopts no sampling distribution as a quantum law, and excludes inferred
  certainty about identification or about the model."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin
        One-Half, Bras, Kets, and Operators', Section 1, printed pages 1-7: the
        Stern-Gerlach preparation and the idealization of the measurement
        arrangement"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec\
        548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections
        1.1-1.2, printed pages 3-14 (PDF pages 6-17): detection records,
        probabilities and the probability current of the wave function"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the framework the following discipline for comparing the model with recorded data.

**(i) Declared model of each comparison.** A comparison of a model prediction with an experiment of the framework requires, in addition to the state and dynamics assumptions P1-P5, the following declared items: a **preparation model**, that is, a specification of the state or preparation assigned to the system together with the physical procedure that realizes it; an **isolation model**, that is, the energy operator used and a statement of the interactions neglected in the approximation; a **detection model**, that is, the response of the apparatus, including efficiency, resolution, background and any binning; and **sampling assumptions**, that is, the statistical model under which repetitions of the preparation and detection are combined. None of these items is supplied by the mathematical framework alone.

**(ii) Repetitions.** The treatment of repeated trials as independent and identically distributed draws from the model's outcome law is an additional statistical model of the apparatus and the procedure. It is not a consequence of the state postulate and is not guaranteed by the mathematics; where it is assumed it is stated, and where it fails (correlated trials, drifting preparation, dead time, selection) the statistical analysis must model the departure or record the limitation.

**(iii) Identification with uncertainty.** The claim "this apparatus realizes the preparation $\rho$ and the dynamics $H_{\mathrm{op}}$" and the claim "this detector realizes the effect $F$" are physical identifications: they are tested against recorded behaviour of the apparatus, carry uncertainty and can fail. They are not derived from the framework, and a model prediction obtained under them inherits their qualifications. Calibration procedures, control experiments and their limitations are recorded with the comparison.

**(iv) Empirical premises.** Where a measured value enters a deduction - a mass, a charge, a field strength, a detector efficiency - it enters as a qualified empirical premise with its uncertainty, conditions of measurement and source, and the conclusion of the deduction carries those qualifications. A deduction that uses a measured input is not an exact statement about nature.

**(v) Status.** Clauses (i)-(iv) are adopted as the framework's conditions for comparing model with data. They make no claim that the framework or the apparatus description is exact; agreement of a prediction with a dataset is evidence about the combined model and apparatus assumptions, not a proof of the framework and not a statement about nature deduced from the mathematics.

## Status and scope

- **No sampling law from the state postulate.** The probability law of P2 is a probability measure on outcomes of a declared measurement for a preparation; it is not by itself a probability distribution over finite datasets, which requires the sampling model of clause (ii).
- **Records are classical.** A detection record is a classical event with a time and a position in the arena, described by a classical apparatus trajectory; the model's outcome law assigns probabilities to records, and the recorded counts are compared with those probabilities.
- **Qualification persists.** Uncertainty and conditions carried by an empirical premise are not removed by exact subsequent algebra; the downstream conclusion inherits them.
