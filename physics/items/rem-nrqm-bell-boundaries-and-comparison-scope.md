---
id: rem-nrqm-bell-boundaries-and-comparison-scope
aliases: [ nrqm-bell-boundaries-and-comparison-scope ]
kind: remark
domain: physics
title: "Measurement-model boundaries of the singlet-local comparison: what the
  no-go excludes and what it does not"
status: draft
origin: session
dependency_level: 16
deps:
  [
    def-nrqm-bell-declared-spin-arrangement,
    def-nrqm-bell-binary-correlation-models,
    def-nrqm-bell-local-response-representation,
    thm-nrqm-bell-local-representations-satisfy-chsh,
    lem-nrqm-bell-setting-independent-selection-closure,
    texp-nrqm-bell-singlet-arrangement-contrast,
    pthm-nrqm-bell-tsirelson-bound-for-arrangements,
    prop-nrqm-bell-local-representations-are-no-signalling,
    pthm-nrqm-composites-local-instruments-and-no-signalling,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    post-nrqm-framework-preparation-and-apparatus,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-bell-declared-spin-arrangement: formulation-prerequisite
  def-nrqm-bell-binary-correlation-models: mathematical-premise
  def-nrqm-bell-local-response-representation: mathematical-premise
  thm-nrqm-bell-local-representations-satisfy-chsh: mathematical-premise
  lem-nrqm-bell-setting-independent-selection-closure: mathematical-premise
  texp-nrqm-bell-singlet-arrangement-contrast: physical-result
  pthm-nrqm-bell-tsirelson-bound-for-arrangements: physical-result
  prop-nrqm-bell-local-representations-are-no-signalling: mathematical-premise
  pthm-nrqm-composites-local-instruments-and-no-signalling: physical-result
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A record of the boundaries of the comparison between the
  declared spin correlation arrangement and the declared class of local-response
  models: the exact class excluded, the assumptions on which the conditional
  exclusion rests, the ideal sharp character of the declared measurements, the
  separate detection, selection and finite-sample models needed for any
  comparison with recorded data, and the no-signalling properties shared by both
  sides. The remark asserts no empirical result and no claim about nature."
sources:
  references:
    - title: "N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani and S. Wehner, 'Bell
        nonlocality', Reviews of Modern Physics 86 (2014) 419, Section II.A and
        Section II.C, PDF pages 2-4 and 8-13: the definition of a local model,
        the CHSH inequality and the quantum bound, and the distinction between
        the declared model class and broader interpretations"
      url: "https://arxiv.org/pdf/1303.2849"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        6.1.4, printed pages 111-115 (PDF pages 119-123): the
        setting-independent response-function model, the Bell inequality it
        satisfies and the qualifications of the experimental discussion"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Remarks

- **What the comparison establishes.** For the declared spin correlation
  arrangement of [[def-nrqm-bell-declared-spin-arrangement]], the four sign
  tables are the laws $\nu^{\rho}_{ij}(\varepsilon,\delta)$ of clause (d) of
  that definition. If the arrangement's CHSH functional satisfies
  $|S(\nu^{\rho})|>2$, then the four tables admit no local-response model:
  every local-response representation would give $|S|\le2$ by
  [[thm-nrqm-bell-local-representations-satisfy-chsh]]. The singlet at the
  directions of [[texp-nrqm-bell-singlet-arrangement-contrast]] is the
  displayed instance, with $|S|=2\sqrt2$. The statement is a conditional
  no-go for one precisely defined class of models of one precisely defined set
  of four tables.

- **What is not excluded.** The theorem concerns models of the four tables
  that consist of one specification space whose probability law is the same
  for all setting pairs, together with per-station response laws that do not
  depend on the distant setting ([[def-nrqm-bell-local-response-representation]]
  clauses (a), (c)). Models outside that class are not addressed: a model
  whose specification or response is allowed to depend on the distant setting,
  a model that does not reproduce all four tables simultaneously, or a model
  of a different arrangement or of a different measurement structure is not
  excluded. In particular the comparison does not rule out "hidden variables"
  in general, and it does not claim that no completion of quantum mechanics
  exists; it excludes the declared local-response class for these tables.

- **Assumptions used.** The deduction rests on the framework readings P1, P2,
  P3, P6 and P7 fixed by
  [[def-nrqm-bell-declared-spin-arrangement]], on the declared composite,
  preparation and spin-half assignments, on the ideal sharp character of the
  declared measurements ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]]),
  on the Axiom of Countable Choice ([[def-countable-choice]]) and the Axiom
  of Choice ([[def-axiom-of-choice]]) stated in the arrangement and
  singlet-attainment hypotheses, and on the cited mathematics (the
  finite-dimensional tensor calculus, the CHSH bound for representable models
  and the operator bound of
  [[pthm-nrqm-bell-tsirelson-bound-for-arrangements]]). Changing one of these
  readings voids the conditional conclusion for the changed model; it does not
  weaken it, and a replacement conclusion needs its own proof.

- **Measurement-model boundary.** The declared sign measurements have exactly
  two outcomes with sign labels $\pm1$; detection efficiency, finite
  resolution, dark counts, background, drift and loss are outside the
  arrangement and require their own apparatus models. In particular an
  observed violation on a recorded sub-ensemble does not by itself contradict
  the declared model class: the recorded tables are conditional tables, and
  the CHSH bound transfers to them only when the selection is itself
  setting-independent, as in
  [[lem-nrqm-bell-setting-independent-selection-closure]]; that lemma is a
  sufficient condition and is not a claim about any real detector. Finite
  samples add a sampling model and its fluctuations, treated on the examples
  page. Whether a finite record deductively excludes one of two specified
  models depends on their sampling supports: a record with positive
  probability under both is compatible with both, while an observed
  zero-probability record can exclude one specified ideal model conditional on
  its assumptions. No universal claim is made about every model pair or every
  finite sample.

- **No-signalling is not the separator.** Every local-response model is
  no-signalling ([[prop-nrqm-bell-local-representations-are-no-signalling]]),
  and the arrangement's marginals are also setting-independent
  ([[texp-nrqm-bell-singlet-arrangement-contrast]] clause (d)); a discarded
  declared local instrument on one factor leaves the other factor unchanged
  ([[pthm-nrqm-composites-local-instruments-and-no-signalling]] clause (b)).
  The contrast between the two classes therefore lies in the joint tables,
  not in any dependence of one station's marginal law on the distant setting.

- **Attainment and sharpness.** The value $2\sqrt2$ is attained for the
  declared arrangement
  ([[pthm-nrqm-bell-tsirelson-bound-for-arrangements]] clause (b)), so within
  the declared class of binary sharp readouts of self-adjoint involutions no
  smaller uniform bound for the CHSH functional is available. This says
  nothing about other functionals, other numbers of settings, unsharp
  measurements or other systems.

- **Interpretation.** The result is a statement about four probability
  tables. It identifies no mechanism, no influence between the stations and
  no preferred frame; the arrangement carries no spatial or temporal
  structure. Interpretations that attach additional physical content to the
  violation are not part of the deduction and are not asserted here. Whether
  a laboratory arrangement realizes the declared model and what a recorded
  sample shows are separate matters under the preparation and apparatus
  postulate P7 ([[post-nrqm-framework-preparation-and-apparatus]]).
