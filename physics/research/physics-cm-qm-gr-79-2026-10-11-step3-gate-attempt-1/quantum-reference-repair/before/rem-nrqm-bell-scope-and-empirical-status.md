---
id: rem-nrqm-bell-scope-and-empirical-status
aliases: [ nrqm-bell-scope-and-empirical-status ]
kind: remark
domain: physics
title: "Scope and empirical status of the Bell-models page: conditional model
  results and the deferred experiment destination"
status: draft
origin: session
dependency_level: 17
deps:
  [
    def-nrqm-bell-declared-spin-arrangement,
    def-nrqm-bell-binary-correlation-models,
    def-nrqm-bell-local-response-representation,
    thm-nrqm-bell-local-representations-satisfy-chsh,
    lem-nrqm-bell-setting-independent-selection-closure,
    lem-nrqm-bell-singlet-pairings,
    texp-nrqm-bell-singlet-arrangement-contrast,
    pthm-nrqm-bell-tsirelson-bound-for-arrangements,
    rem-nrqm-bell-boundaries-and-comparison-scope,
    texp-nrqm-bell-finite-sample-chsh,
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
  lem-nrqm-bell-singlet-pairings: mathematical-premise
  texp-nrqm-bell-singlet-arrangement-contrast: physical-result
  pthm-nrqm-bell-tsirelson-bound-for-arrangements: physical-result
  rem-nrqm-bell-boundaries-and-comparison-scope: formulation-prerequisite
  texp-nrqm-bell-finite-sample-chsh: physical-result
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope and evidence record for the page: the conditional model
  items it contains, the empirical content it does not contain, the
  qualifications of the sources' experimental remarks that are not imported, and
  the deferred destination of a Bell-test experiment item with its required
  preparation, apparatus, calibration, loss and statistical qualifications. The
  record asserts no empirical result, no measured correlation and no claim about
  nature."
sources:
  references:
    - title: "N. Brunner et al., Bell nonlocality, Section VII.B.3, PDF page 52: finite statistics and conditional statistical evidence against local models"
      url: "https://arxiv.org/pdf/1303.2849"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        6.1.4, printed pages 111-115 (PDF pages 119-123): the EPR/Bell
        discussion, the mention of the 1972 test and the citation of a 1998
        photonic test, together with its unsupported general conclusions, which
        this page does not import"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8
        'Multiparticle States and Tensor Products', Section 5, chapter pages
        16-20: the singlet, the definite-spin ensemble, the Bell inequality, and
        the closing statement that experiments show the inequalities violated,
        without trial-level detail"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba\
        2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
verification:
  precheck: n/a
---

## Remarks

- **What the page contains.** Mathematical vocabulary for binary correlation
  models and their local-response representations
  ([[def-nrqm-bell-binary-correlation-models]],
  [[def-nrqm-bell-local-response-representation]]), the CHSH bound for every
  representable model ([[thm-nrqm-bell-local-representations-satisfy-chsh]]),
  the preservation of representability and of the bound under a
  setting-independent selection
  ([[lem-nrqm-bell-setting-independent-selection-closure]]), the exact joint
  laws of the two-factor singlet ([[lem-nrqm-bell-singlet-pairings]]), the
  declared spin correlation arrangement of the framework
  ([[def-nrqm-bell-declared-spin-arrangement]]), the singlet computation with
  the failure of local-response representability at violating settings
  ([[texp-nrqm-bell-singlet-arrangement-contrast]]) and the Tsirelson bound
  with its attainment
  ([[pthm-nrqm-bell-tsirelson-bound-for-arrangements]]). All are conditional
  model statements; the spin-arrangement and spin-comparison claims carry the
  Axiom of Countable Choice ([[def-countable-choice]]) and the Axiom of Choice
  ([[def-axiom-of-choice]]) stated in their supplier hypotheses.

- **What the page does not contain.** No experiment item, no reported count,
  no calibration, no detector efficiency, no loss model, no background, no
  trial-level uncertainty analysis, no p-value, no confidence level and no
  measured correlation. None of the computations establishes that the
  framework or any of its postulates describes nature, and none of them
  asserts that any laboratory procedure realizes the declared arrangement.
  The marginals, tables and correlations are model probabilities for the
  declared preparation; the identification of a concrete apparatus with the
  declared measurements, and of repetitions with a sampling model, is the
  tested identification with uncertainty of clause (iii) of the preparation
  and apparatus postulate P7
  ([[post-nrqm-framework-preparation-and-apparatus]]).

- **Deferred experiment destination.** The design of this pair reserves an
  experiment item for a Bell test. Such an item is not built here: it would
  require reading a primary or authoritative full report and recording its
  source-specific preparation and apparatus, calibration, measured outputs,
  trial count where reported, detection efficiency, loss and post-selection,
  background, the reported statistical treatment and systematics, and the
  source's omissions; none of the sources read for this page supplies that
  level of detail. The sources' experimental remarks motivate the model
  comparison only: Binney's section 6.1.4 refers to the 1972
  Freedman-Clauser test and cites a 1998 photonic test, and the MIT chapter
  closes with the statement that experiments have confirmed violations; no
  numerical value from those secondary accounts is reproduced here as an
  observation, and no interval, count or precision is asserted. The
  statistics and primary-report gap named in the design is recorded as an
  open destination.

- **Source qualifications not imported.** The same sources contain general
  conclusions that the comparison rules out hidden variables as such or that
  quantum mechanics cannot be superseded by a theory with a definite spin
  direction. Those conclusions are stronger than the conditional statement
  proved here — which excludes only the declared local-response class of the
  declared tables — and are not imported. Likewise the operator bound used on
  this page is proved by the operator-norm route of the cited mathematics
  (the identity for the square of the CHSH operator and the norm bound); no
  reversed variance inequality of the form
  $\langle C^{2}\rangle\le\langle C\rangle^{2}$ and no commutator estimate is
  used as a premise.

- **What a comparison with data could show.** Under declared preparation,
  detection, settings, selection and sampling models, agreement of recorded
  frequencies with the arrangement's tables supports the combined model and
  apparatus assumptions. The bound $|S(\mu)|\le2$ constrains the correlations
  of a local-response model's probability tables, rather than every finite
  sample estimate $\widehat S$. A finite recorded estimate with
  $|\widehat S|>2$ can have positive probability under that model; finite-sample
  fluctuations are treated in [[texp-nrqm-bell-finite-sample-chsh]]. Evidence
  against a specified model class requires an explicit statistical test with
  its sampling assumptions, uncertainty and error control, together with the
  apparatus and selection qualifications. A threshold crossing alone does
  not deductively exclude the class, and a p-value is not the probability
  that the class is false. Agreement does not prove the framework, and a null
  or reduced result does not by itself falsify it.

- **Interpretation and scope of the model.** The arrangement assigns no
  spatial positions, separation or temporal order to the two factors, so no
  relativistic locality principle is modelled here; the exclusion is a
  statement about the four tables. The boundaries of the comparison are
  recorded in [[rem-nrqm-bell-boundaries-and-comparison-scope]], and no
  interpretation of the violation beyond those boundaries is asserted.
