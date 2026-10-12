---
id: rem-nrqm-observables-scope-and-empirical-status
aliases: [nrqm-observables-scope-and-empirical-status]
kind: remark
domain: physics
title: "What the observable and Born-probability page adopts, proves and does not claim"
status: draft
origin: pipeline
dependency_level: 9
deps: [def-nrqm-observables-framework-observable-and-outcome-law, lem-nrqm-observables-moments-and-variance, lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity, lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues, lem-nrqm-observables-spectral-support-and-outcome-law, lem-nrqm-observables-states-separated-by-bounded-projections, post-nrqm-framework-observable-and-probability, pthm-nrqm-observables-born-outcome-law-properties, pthm-nrqm-observables-position-and-momentum-outcome-laws, pthm-nrqm-observables-preparation-moments, pthm-nrqm-observables-states-separated-by-born-statistics]
dependency_roles:
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  lem-nrqm-observables-moments-and-variance: mathematical-premise
  lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity: mathematical-premise
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  lem-nrqm-observables-spectral-support-and-outcome-law: mathematical-premise
  lem-nrqm-observables-states-separated-by-bounded-projections: mathematical-premise
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  pthm-nrqm-observables-born-outcome-law-properties: physical-result
  pthm-nrqm-observables-position-and-momentum-outcome-laws: physical-result
  pthm-nrqm-observables-preparation-moments: physical-result
  pthm-nrqm-observables-states-separated-by-born-statistics: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope audit of the observable and Born-probability page: it records that the page reads the observable and probability postulate P2 in observable vocabulary, proves conditional consequences about the probability law, its atoms, its support and its moments, and about position and momentum in the massive model, and asserts no empirical, apparatus, joint-measurement or state-determination claim. It proves nothing and reports no observation."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Sections 2.1 and 3.1, printed pages 55-58 and 87-95 (observables, expectation values and the spectral theorem as the replacement of a discrete eigenbasis)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 3.2.2 and 3.3, printed pages 71-84 (Hermitian operators, the outcome-in-the-spectrum statement and expectation values; the caveats about formal eigenfunction and eigenvector claims)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Scope of the page

**Adopted, not restated.** The physical content of this page is the observable and probability postulate P2 ([[post-nrqm-framework-observable-and-probability]]), read in the vocabulary of [[def-nrqm-observables-framework-observable-and-outcome-law]]: assigning to a declared system a self-adjoint operator with a declared unit, its spectral projection-valued measure, and the outcome law $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_A(B))$. The page adopts no further physical assumption; the choice hypotheses of the spectral theorem are carried explicitly, and the position and momentum statements are conditional on the massive-particle model postulate P5 as read through the magnetic-and-detection operator definitions.

**What is proved.** [[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] identifies the atoms of the spectral measure with the eigenspace projections, so that an exact value has zero probability unless it is an eigenvalue. [[lem-nrqm-observables-spectral-support-and-outcome-law]] identifies the support of the spectral measure with the spectrum, giving the precise reading of the statement that an outcome lies in the spectrum. [[lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity]] proves affinity under statistical mixtures and uniform trace-norm continuity. [[lem-nrqm-observables-moments-and-variance]] assembles the mean, second moment and variance formulas with their exact domain criteria, and [[lem-nrqm-observables-states-separated-by-bounded-projections]] proves that distinct states are separated by the law of a rank-one projection. The physics theorems read these results as conditional statements about assigned observables: [[pthm-nrqm-observables-born-outcome-law-properties]] (the law is a probability measure, affine in mixtures, atomic only at eigenvalues, supported in the spectrum and not assumed to have a density), [[pthm-nrqm-observables-preparation-moments]] (moments exist exactly under the stated domain hypotheses), [[pthm-nrqm-observables-position-and-momentum-outcome-laws]] (the position and momentum laws of the spinless massive model with densities $|\psi|^{2}$ and $|\mathcal F_2\psi|^{2}$, and the joint position measure) and [[pthm-nrqm-observables-states-separated-by-born-statistics]] (distinct preparations differ in some bounded observable's statistics).

**No complete eigenbasis.** Following the correction recorded in the source audit, the page never asserts that a general self-adjoint operator has a complete discrete system of eigenvectors. The spectral projection-valued measure replaces the eigenbasis; discrete sums are the special case of an atomic law, and continuous parts are handled through measures. The expectation formula $\langle\hat O\rangle=\langle\psi,\hat O\psi\rangle$ is proved here only for $\psi$ in the domain of the operator and through the spectral integral, not through an assumed eigenfunction expansion.

**What is not claimed.** No item of this page asserts an apparatus realization of any observable, a joint measurement of two observables, a state update after an outcome, a density for an arbitrary outcome law, the existence of a mean or variance for an arbitrary preparation, a measured value or a comparison with data. The finite unsharp-effect extension of P2(iv) and all instrument content belong to the measurement-and-instruments page, the componentwise spin extension of the position and momentum laws belongs to the kinematics page, and the identification of concrete laboratory procedures with assigned observables is a tested identification under P7, not a consequence of the postulates. Agreement of the conditional predictions with data would test the combined model and apparatus assumptions; it is not established or claimed here.
