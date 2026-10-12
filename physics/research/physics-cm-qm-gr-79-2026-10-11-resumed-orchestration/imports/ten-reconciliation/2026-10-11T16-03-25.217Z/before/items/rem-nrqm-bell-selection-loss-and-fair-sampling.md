---
id: rem-nrqm-bell-selection-loss-and-fair-sampling
aliases: [nrqm-bell-selection-loss-and-fair-sampling]
kind: remark
domain: physics
title: "Selection and loss: the precise hypothesis under which the CHSH bound transfers to recorded pairs"
status: draft
origin: session
dependency_level: 14
deps: [def-nrqm-bell-declared-spin-arrangement, def-nrqm-bell-local-response-representation, lem-nrqm-bell-setting-independent-selection-closure, texp-nrqm-bell-singlet-arrangement-contrast, texp-nrqm-bell-finite-sample-chsh, post-nrqm-framework-preparation-and-apparatus]
dependency_roles:
  def-nrqm-bell-declared-spin-arrangement: formulation-prerequisite
  def-nrqm-bell-local-response-representation: mathematical-premise
  lem-nrqm-bell-setting-independent-selection-closure: mathematical-premise
  texp-nrqm-bell-singlet-arrangement-contrast: physical-result
  texp-nrqm-bell-finite-sample-chsh: physical-result
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A record of the detection and selection qualification of any comparison between a declared arrangement and recorded coincidences: the recorded tables are conditional tables; the CHSH bound transfers to them when the recorded runs are selected by an event of the specification space that is the same for every setting pair, as the selection-closure lemma states; without a declared selection model no transfer is claimed, and no assertion is made that any real detector satisfies the condition. The remark reports no measurement and no efficiency."
sources:
  references:
    - title: "N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani and S. Wehner, 'Bell nonlocality', Reviews of Modern Physics 86 (2014) 419, Section II.A, PDF page 3: the local decomposition and the assumption that the settings are chosen independently of the specification, the formal basis of a setting-independent selection model"
      url: "https://arxiv.org/pdf/1303.2849"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1.4, printed pages 113-115 (PDF pages 121-123): the estimation of the two sides of Bell's inequality from recorded series of trials"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Remarks

- **Recorded tables are conditional tables.** The arrangement's laws
  $\nu^{\rho}_{ij}$ of
  [[def-nrqm-bell-declared-spin-arrangement]] clause (d) describe a declared
  pair of local sign measurements for every setting pair on the declared
  preparation. A comparison with recorded data ordinarily uses only the runs
  in which both stations register an event; the laws of the recorded runs are
  therefore **conditional laws** of a larger model, and they are not the
  arrangement's tables unless a detection and selection model connecting the
  two is declared. This is part of the preparation and apparatus discipline of
  P7 clause (i) ([[post-nrqm-framework-preparation-and-apparatus]]).

- **A sufficient condition for the transfer.** If the full tables admit a
  local-response representation and the recorded runs are exactly those
  specifications lying in a measurable selection event $D$ of the
  specification space with $\mathbb P(D)>0$ — the same event for every setting
  pair, independent of the settings and of the outcomes — then the conditional
  tables again admit a local-response representation, with the same response
  laws over the conditional measure, and hence satisfy the CHSH bound
  ([[lem-nrqm-bell-setting-independent-selection-closure]]). This is the
  mathematical content of a **setting-independent detection** or
  **fair-sampling** hypothesis for the declared model class.

- **The condition is a hypothesis, not a theorem about detectors.** The
  selection-closure lemma is a conditional statement about the declared model.
  It does not assert that any laboratory detector, coincidence circuit or
  post-selection rule realizes a selection event of the required form;
  identifying a concrete apparatus with such a model is a tested
  identification with uncertainty under P7 and carries its calibration and
  control-experiment qualifications. Efficiency, dead time, misalignment,
  background and drift each require their own declared model.

- **No transfer without a selection model.** If the recorded sample is
  selected by a rule that depends on the settings or on the observed outcomes,
  the selection-closure lemma does not apply, and no claim is made here that
  the CHSH bound constrains the recorded tables. Correspondingly, a deviation
  computed from recorded pairs is a statement about those recorded tables and
  their own declared model; it becomes a statement about the full arrangement
  only through a declared selection model of the kind above. The finite-sample
  fluctuation of any such computed functional is a further, separate matter,
  treated in [[texp-nrqm-bell-finite-sample-chsh]], and the singlet contrast
  itself is the conditional model computation of
  [[texp-nrqm-bell-singlet-arrangement-contrast]].

- **Settings choice.** A test in which the settings are chosen by a procedure
  whose outcome could depend on the specification would not be described by
  one common probability law over the specification space for all setting
  pairs, which is part of the definition of a local-response representation
  ([[def-nrqm-bell-local-response-representation]] clause (c)). Randomizing or
  otherwise fixing the setting choice is a procedure-level assumption of the
  experiment's own model; this page neither assumes nor reports such a
  procedure.
