---
id: rem-nrqm-composites-examples-scope-limits
aliases: [nrqm-composites-examples-scope-limits]
kind: remark
domain: physics
title: "Scope of the composites examples page: what the singlet, marker and mixture computations establish"
status: draft
origin: session
dependency_level: 15
deps: [def-nrqm-composites-marker-model-and-fringe-visibility, def-nrqm-composites-separable-and-entangled-states, def-nrqm-observables-framework-observable-and-outcome-law, ex-nrqm-composites-improper-versus-proper-mixtures, ex-nrqm-composites-marker-overlap-visibility, post-nrqm-framework-preparation-and-apparatus, pthm-nrqm-composites-marker-overlap-and-visibility-bound, texp-nrqm-composites-singlet-correlations]
dependency_roles:
  def-nrqm-composites-marker-model-and-fringe-visibility: formulation-prerequisite
  def-nrqm-composites-separable-and-entangled-states: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  ex-nrqm-composites-improper-versus-proper-mixtures: formulation-prerequisite
  ex-nrqm-composites-marker-overlap-visibility: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  pthm-nrqm-composites-marker-overlap-and-visibility-bound: physical-result
  texp-nrqm-composites-singlet-correlations: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope record for the examples page of the composites pair: the conditional computations it contains, their empirical status, and the content it does not supply. The record asserts no empirical result and no mathematical theorem."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 6.1 and 6.3.1, printed pages 105-115 and 125-127 (PDF pages 113-123 and 133-135): composites, entanglement, reduced density operators and the Einstein-Podolsky-Rosen discussion"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', chapter pages 1-19: tensor products, entanglement, partial measurement and EPR/Bell inequalities"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
verification:
  precheck: n/a
---
## Remarks

- **What the page contains.** Three conditional computations in the declared
  framework: the singlet thought experiment of
  [[texp-nrqm-composites-singlet-correlations]] with its reduced preparations,
  directional joint laws, correlation function and setting-independent
  marginals; the two-cell marked model of
  [[ex-nrqm-composites-marker-overlap-visibility]], where the fringe
  visibility equals the marker overlap exactly and the theorem
  [[pthm-nrqm-composites-marker-overlap-and-visibility-bound]] is saturated;
  and the comparison of
  [[ex-nrqm-composites-improper-versus-proper-mixtures]] between the singlet's
  reduced preparation and a fair random mixture of factor preparations that
  assigns the same density operator.
- **What the page does not contain.** No experiment, no reported count, no
  calibration, no efficiency, no sampling model, no statistical test and no
  measured correlation appears on the page; no item is a report of an observed
  outcome, and none of the computations establishes that the framework or any
  of its postulates describes nature. The model data of the marked example and
  of the singlet are declared idealizations; identifying a concrete apparatus
  with them is a tested identification with uncertainty under P7
  ([[post-nrqm-framework-preparation-and-apparatus]]).
- **Statistics of the displayed probabilities.** The detection weights,
  joint laws and correlation functions are probabilities of the declared
  models for a single trial or for an idealized family of phases. A finite
  sample of trials would require its own sampling model and would show
  fluctuations; no inference, error rate or conclusion is drawn here from the
  displayed numbers, and a measured fringe pattern would concern the
  accumulated distribution of many detections, not a single event.
- **Deferred comparisons.** The Bell-type comparison of the singlet
  correlations with specified local-response models, with its angles,
  finite-data selection and loss caveats, belongs to the later Bell-models
  pair and is neither stated nor assumed here; nor does the page settle any
  interpretation of the alternatives, of the marker or of "which path", and it
  does not model any dynamical decoherence process.
