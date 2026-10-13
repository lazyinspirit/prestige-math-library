---
id: rem-nrqm-angular-momentum-examples-scope-limits
aliases: [nrqm-angular-momentum-examples-scope-limits]
kind: remark
domain: physics
title: "What the angular momentum examples establish and what they do not"
status: published
origin: session
dependency_level: 13
deps: [def-nrqm-angular-momentum-framework-angular-momentum-observables, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, ex-nrqm-angular-momentum-l-eigenfunctions, ex-nrqm-angular-momentum-spin-half-directional-probabilities, ex-nrqm-angular-momentum-zeeman-toy-model, post-nrqm-framework-preparation-and-apparatus, pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws, pthm-nrqm-angular-momentum-zeeman-precession, texp-nrqm-angular-momentum-stern-gerlach-splitting]
dependency_roles:
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  ex-nrqm-angular-momentum-l-eigenfunctions: formulation-prerequisite
  ex-nrqm-angular-momentum-spin-half-directional-probabilities: formulation-prerequisite
  ex-nrqm-angular-momentum-zeeman-toy-model: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws: physical-result
  pthm-nrqm-angular-momentum-zeeman-precession: physical-result
  texp-nrqm-angular-momentum-stern-gerlach-splitting: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The scope of the examples companion page of the angular momentum and spin page: the exact model computations recorded there, their status as conditional model statements, and the measurement, apparatus and empirical qualifications that remain outside them. The remark asserts no model fact, no measurement and no empirical conclusion."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin One-Half, Bras, Kets, and Operators', Section 1, printed pages 1-7: the status of the Stern-Gerlach discussion as an idealization and its separation from quantitative apparatus analysis"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Preface, printed pages xi-xiii (PDF pages xiii-xv): the boundary between the operator-theoretic model and its physical interpretation"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---
## Scope of the examples

- **Recorded content.** The companion page contains exact model computations:
  [[ex-nrqm-angular-momentum-spin-half-directional-probabilities]] evaluates
  the Born probabilities of the directional spin components for an arbitrary
  unit spinor and works the coordinate cases;
  [[ex-nrqm-angular-momentum-l-eigenfunctions]] computes the low spherical
  harmonics, their orthonormality and their orbital eigenvalues;
  [[ex-nrqm-angular-momentum-zeeman-toy-model]] records the sector expressions
of the uniform-field Zeeman operator on product vectors in $D(H_{0})$, its
factorized flow on all product vectors, an explicitly labeled two-level
truncation with its level splitting, and the explicit precession matrices;
  and [[texp-nrqm-angular-momentum-stern-gerlach-splitting]] derives, under an
  explicitly hypothetical containment premise, the change in the difference
  of the two sector mean transverse momenta.

- **Status.** All four items are conditional statements inside the model of
  [[def-nrqm-kinematics-framework-massive-spin-s-model]] with the readings of
  [[def-nrqm-angular-momentum-framework-angular-momentum-observables]] and, in
  the last two, with the adopted magnetic-moment coupling. None of them
  reports a measurement; the thought experiment's containment premise is a
  hypothetical assumption, and the toy truncation is a toy model assumption;
  the numerical values appearing in them ($\hbar$-multiples, probabilities
  and frequencies) are model expressions, not measured numbers.

- **Empirical qualifications.** The identification of any of these
  preparations and observables with a laboratory setup is a tested
  identification with uncertainty under
  [[post-nrqm-framework-preparation-and-apparatus]]; detector resolution,
  background, calibration, sampling and selection are not modeled here. The
  directional-probability example specializes
  [[pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]], while the
  Zeeman toy example specializes the uniform static-field result
  [[pthm-nrqm-angular-momentum-zeeman-precession]], retaining its isolated
  evolution and its separate truncation assumption. The gradient-field
  thought experiment instead retains its own hypotheses from
  [[texp-nrqm-angular-momentum-stern-gerlach-splitting]]: real bounded
  $B_z\in C^1(\mathbb R)$ with bounded derivative, an initial unit vector
  in $D(H_Z^2)$, a constant gradient on the declared interval and the
  hypothetical containment premise throughout $[0,\tau]$; normalized
  sector means require positive sector weights. It does not specialize the
  uniform-field precession theorem. The orbital example retains its
  harmonic-polynomial and normalization hypotheses. Each computation
  inherits the qualifications of the suppliers it actually uses.

- **What is deliberately absent.** No experiment item, no measured
  frequency, no measured gyromagnetic parameter, no source-backed
  Stern-Gerlach dataset, no spin-orbit or fine-structure computation and no
  radiation or relaxation model appears on the examples companion; those
  belong to other pages of the category, with their own sources and
  qualifications.
