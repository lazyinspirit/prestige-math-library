---
id: rem-nrqm-bell-examples-scope-limits
aliases: [nrqm-bell-examples-scope-limits]
kind: remark
domain: physics
title: "Scope of the examples page: conditional computations, no experiment, and the deferred Bell-test destination"
status: draft
origin: session
dependency_level: 15
deps: [def-nrqm-bell-declared-spin-arrangement, def-nrqm-bell-binary-correlation-models, def-nrqm-bell-local-response-representation, thm-nrqm-bell-local-representations-satisfy-chsh, ex-nrqm-bell-worked-angles-and-product-mixture, texp-nrqm-bell-finite-sample-chsh, rem-nrqm-bell-selection-loss-and-fair-sampling, post-nrqm-framework-preparation-and-apparatus]
dependency_roles:
  def-nrqm-bell-declared-spin-arrangement: formulation-prerequisite
  def-nrqm-bell-binary-correlation-models: mathematical-premise
  def-nrqm-bell-local-response-representation: mathematical-premise
  thm-nrqm-bell-local-representations-satisfy-chsh: mathematical-premise
  ex-nrqm-bell-worked-angles-and-product-mixture: physical-result
  texp-nrqm-bell-finite-sample-chsh: physical-result
  rem-nrqm-bell-selection-loss-and-fair-sampling: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope record for the examples page of the pair: the conditional computations it contains, the empirical content it does not contain, and the deferred Bell-test experiment destination with its required preparation, apparatus, calibration, loss and statistical qualifications. The record asserts no measured correlation, no count and no empirical conclusion."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', Section 5, chapter pages 16-20: the singlet probabilities, the definite-spin ensemble and the closing experimental remark without trial-level detail"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1.4, printed pages 111-115 (PDF pages 119-123): the experimental discussion of the Bell comparison and the stated estimation of the two sides from recorded trials"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Remarks

- **What the page contains.** Three conditional computations in the declared
  framework: the worked comparison at the specified directions between the
  singlet arrangement and the EPR-type product mixture, with both CHSH values
  and an explicit local-response representation of the mixture
  ([[ex-nrqm-bell-worked-angles-and-product-mixture]]); the finite-sample
  behaviour of the sample CHSH functional under a declared independent and
  identically distributed sampling model, with its concentration inequality
  and positive failure probabilities
  ([[texp-nrqm-bell-finite-sample-chsh]]); and the selection and loss
  qualification, with the precise hypothesis under which the CHSH bound
  transfers to recorded pairs
  ([[rem-nrqm-bell-selection-loss-and-fair-sampling]]).

- **What the page does not contain.** No experiment item, no reported count,
  no calibration, no detector efficiency, no loss fraction, no background
  model, no trial-level uncertainty analysis, no p-value and no confidence
  level. The worked tables, the sample functional and the failure
  probabilities are probabilities of the declared models; no number on the
  page is an observation. The identification of any apparatus with the
  declared measurements and of any repetition procedure with the declared
  sampling model is a tested identification with uncertainty under P7
  ([[post-nrqm-framework-preparation-and-apparatus]]).

- **Deferred Bell-test experiment destination.** The design of the pair
  reserves an experiment item for a Bell test. It is not built here because
  none of the sources read for the pair supplies the required trial-level
  material: a primary or authoritative full report read directly, with the
  source-specific preparation and apparatus, calibration, measured outputs,
  trial count where reported, detection efficiency, losses and
  post-selection, background, the reported statistical treatment and
  systematics, and the source's omissions. The experimental remarks of the
  secondary sources — Binney's reference to the 1972 Freedman-Clauser test
  and its citation of a 1998 photonic test, and the MIT chapter's statement
  that experiments have confirmed violations — motivate the comparison only
  and are not used as measured records; no numerical value from them is
  reproduced. The statistics and primary-report gap named in the design is
  recorded as an open destination.

- **Why a null or shifted sample is not a verdict.** The mixture's tables have
  CHSH value $-\sqrt2$ in absolute value, strictly below both the classical
  bound $2$ and the singlet's $2\sqrt2$
  ([[ex-nrqm-bell-worked-angles-and-product-mixture]]), and the finite-sample
  analysis bounds the probability that a model's sample functional crosses
  either threshold by a strictly positive quantity
  ([[texp-nrqm-bell-finite-sample-chsh]]). A finite sample therefore does not
  by itself decide between the declared models; a comparison requires the
  full battery of preparation, detection, selection and sampling assumptions,
  and agreement would be evidence about the combined assumptions, not a proof
  of the framework.

- **Model contrast is not an interpretation.** The page compares the tables of
  two declared arrangements and the class of local-response models of those
  tables ([[thm-nrqm-bell-local-representations-satisfy-chsh]]); it makes no
  claim about the completeness of quantum mechanics, about hidden variables in
  general, about mechanisms or about any interpretation of the violation. The
  boundaries of the comparison are recorded on the pair's first page.
