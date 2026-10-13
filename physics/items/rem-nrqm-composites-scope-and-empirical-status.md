---
id: rem-nrqm-composites-scope-and-empirical-status
aliases: [ nrqm-composites-scope-and-empirical-status ]
kind: remark
domain: physics
title: "Scope and empirical status of the composites page: adopted readings,
  derived results, and deferred content"
status: published
origin: session
dependency_level: 14
deps:
  [
    def-nrqm-composites-framework-composite-systems-and-local-readouts,
    def-nrqm-composites-framework-reduced-preparations,
    def-nrqm-composites-marker-model-and-fringe-visibility,
    def-nrqm-composites-separable-and-entangled-states,
    post-nrqm-framework-preparation-and-apparatus,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-composites-local-instruments-and-no-signalling,
    pthm-nrqm-composites-local-readout-laws-and-reduced-preparations,
    pthm-nrqm-composites-marker-overlap-and-visibility-bound,
    pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement
  ]
dependency_roles:
  def-nrqm-composites-framework-composite-systems-and-local-readouts: formulation-prerequisite
  def-nrqm-composites-framework-reduced-preparations: formulation-prerequisite
  def-nrqm-composites-marker-model-and-fringe-visibility: formulation-prerequisite
  def-nrqm-composites-separable-and-entangled-states: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-composites-local-instruments-and-no-signalling: physical-result
  pthm-nrqm-composites-local-readout-laws-and-reduced-preparations: physical-result
  pthm-nrqm-composites-marker-overlap-and-visibility-bound: physical-result
  pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope record for the composites, entanglement and
  reduced-states page: the adopted readings, the derived conditional results,
  the empirical status of the model computations, and the content deferred to
  later pages. The record asserts no empirical result and no mathematical
  theorem."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1,
        printed pages 105-115 (PDF pages 113-123): composites, entanglement
        and the Einstein-Podolsky-Rosen discussion; Section 6.3.1, printed
        pages 125-127 (PDF pages 133-135): reduced density operators"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8
        'Multiparticle States and Tensor Products', chapter pages 1-19: tensor
        products, entangled states, partial measurement, and EPR/Bell
        inequalities"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba\
        2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
verification:
  precheck: n/a
---
## Remarks

- **Adopted readings.** The page adopts the composition clause of P1
  ([[post-nrqm-framework-state-and-composition]]) for a declared pair of
  distinguishable subsystems, together with the observable and probability
  postulate P2 and the ideal conditional-measurement postulate P3 in the
  readings of [[def-nrqm-composites-framework-composite-systems-and-local-readouts]];
  the reduced preparations of [[def-nrqm-composites-framework-reduced-preparations]];
  and, for the marked interference model,
  [[def-nrqm-composites-marker-model-and-fringe-visibility]], whose path
  components, marker states and detector bin are declared apparatus data under
  P7 ([[post-nrqm-framework-preparation-and-apparatus]]). The composition
  assignment, the local readout convention and the marked model are adopted,
  not derived from the rest of the framework or from observation.
- **Derived results.** The conditional results of the page are the Schmidt
  reduction, purity criterion and exact pure separability/product equivalence for pure preparations
  ([[pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement]]), the
  identification of local readout laws with the laws of the reduced
  preparation and its converse
  ([[pthm-nrqm-composites-local-readout-laws-and-reduced-preparations]]), the
  invariance of the untouched factor's reduced preparation under discarded
  local instruments, with the conditional reductions averaging back to it
  ([[pthm-nrqm-composites-local-instruments-and-no-signalling]]), and the
  contraction of the marker cross term with the visibility bound
  ([[pthm-nrqm-composites-marker-overlap-and-visibility-bound]]). Each is
  conditional on its stated hypotheses, including the choice hypotheses of the
  cited mathematics.
- **Empirical status.** No item of the page reports an experiment, a count, a
  calibration or a measured correlation, and none is a proof about nature. The
  detection weights and the visibility of the marked model are probabilities
  and contrasts of a declared model; whether a concrete interferometer
  realizes a marked model with particular components, marker states and bin is
  a tested identification with uncertainty in the sense of clauses (i)-(iii)
  of P7, and a comparison of the model with recorded data would require the
  sampling, efficiency, resolution and background qualifications of the
  apparatus, which this page does not supply.
- **Localized detections and accumulated distributions.** The detection
  weights of the page are probabilities for one trial of the declared model.
  An interference pattern is a property of the accumulated distribution of
  many detections, not of a single event, and a finite sample can fail a
  declared fringe criterion with positive probability under ordinary
  independent sampling even when the model is correct; nothing in the page
  draws a statistical conclusion from the displayed probabilities.
- **No-signalling is a model statement.** The invariance proved in
  [[pthm-nrqm-composites-local-instruments-and-no-signalling]] is a statement
  about declared local instruments of the adopted framework and its
  mathematics. It is not a relativistic causality principle, does not assert
  anything about spacelike separation, and does not by itself exclude
  alternative models; the conditional changes of the measured factor's partner
  are the correlations of the model, and every interpretation of the
  alternatives, of the marker and of "which path" is outside the page.
- **Deferred content.** The following are outside this pair and are not
  supplied or assumed here: setting-independent local-response models and the
  classical-versus-quantum Bell comparison, with specified angles and
  finite-data caveats, which belong to the later Bell-models pair; a general
  theory of mixed-state separability, entanglement measures and separability
  criteria beyond the definition given in
  [[def-nrqm-composites-separable-and-entangled-states]]; the exchange
  sectors and exclusion statements for identical particles; quantum circuits,
  teleportation and computation; and any dynamics, interaction or open-system
  model of decoherence, the marked model of this page being a kinematic
  preparation model.
