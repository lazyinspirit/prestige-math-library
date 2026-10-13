---
id: rem-nrqm-light-matter-examples-scope-limits
aliases: [nrqm-light-matter-examples-scope-limits]
kind: remark
domain: physics
title: "Scope of the light-matter and spectral-transitions examples page"
status: published
origin: pipeline
dependency_level: 19
deps: [ex-nrqm-light-matter-two-level-dipole-drive-check, ex-nrqm-light-matter-hydrogen-dipole-angular-factors, texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison, pthm-nrqm-light-matter-stimulated-dipole-drive-transitions, pthm-nrqm-light-matter-dipole-selection-rules, pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading, lem-nrqm-light-matter-first-order-photon-energy-law, def-nrqm-light-matter-framework-finite-level-coupled-model, def-nrqm-light-matter-framework-spectral-transition-and-detection, post-nrqm-framework-preparation-and-apparatus, post-nrqm-framework-observable-and-probability, def-nrqm-photons-framework-ideal-counting-and-detection-model]
dependency_roles:
  ex-nrqm-light-matter-two-level-dipole-drive-check: formulation-prerequisite
  ex-nrqm-light-matter-hydrogen-dipole-angular-factors: formulation-prerequisite
  texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison: physical-result
  pthm-nrqm-light-matter-stimulated-dipole-drive-transitions: physical-result
  pthm-nrqm-light-matter-dipole-selection-rules: physical-result
  pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading: physical-result
  lem-nrqm-light-matter-first-order-photon-energy-law: mathematical-premise
  def-nrqm-light-matter-framework-finite-level-coupled-model: formulation-prerequisite
  def-nrqm-light-matter-framework-spectral-transition-and-detection: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-photons-framework-ideal-counting-and-detection-model: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The scope of the light-matter and spectral-transitions examples page: what the three conditional computations establish, the declared models and parameters they rest on, and the empirical, apparatus and statistical claims they do not make."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.2 printed pages 216-218 and Section 9.3.3 printed pages 219-220 (PDF pages 224-228): stimulated transitions, the density of states and the electric-dipole selection rules"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two State Systems', Sections 4-6 chapter pages 7-19 (PDF pages 7-19): the two-state model in an oscillating field and its resonance"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
---

## Scope of the examples page

**What the three items establish.**
[[ex-nrqm-light-matter-two-level-dipole-drive-check]] identifies declared
two-level Pauli matter data with the linear two-level drive model of the
driven-dynamics page, computes the resonant co-rotating first-order amplitude
and shows that its co-rotating component coefficient is the leading term of the exact averaged Rabi probability. The full first-order coefficient includes both components and their interference, with a different small-time leading coefficient.
[[ex-nrqm-light-matter-hydrogen-dipole-angular-factors]] computes explicit
angular factors of the hydrogenic dipole matrix elements — values $\pm1/\sqrt3$, all with modulus $1/\sqrt3$, for the
allowed $1s$-to-$2p$ and $2p$-to-$1s$ angular entries, and zero for the
forbidden $1s$-to-$1s$, $1s$-to-$2s$ and $m$-violating entries — together with
the oscillator contrast $|\Delta n|=1$.
[[texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison]]
proves that two declared cutoff-dipole models whose mode densities agree at
the transition energy and are not proportional almost everywhere have the same rate coefficient but different
formal single-vertex photon-energy laws at every positive finite time (normalized one-photon preparations require nonzero coupling), and that a declared
sharp-line model is the idealisation approached in the limit rather than a
property of the finite-time law.

**What they rest on.** The two-level example adopts the prescribed dipole-drive data and uses [[pthm-nrqm-light-matter-stimulated-dipole-drive-transitions]] together with the driven-dynamics suppliers cited in that example; its state, probability and laboratory-identification readings use P1, P2 and P7. The hydrogen angular-factor example uses the declared Coulomb dipole components, spherical harmonics, angular integration, the bound-state domain and oscillator suppliers, and [[pthm-nrqm-light-matter-dipole-selection-rules]]. Its model reading uses P1 and the declared units, but its angular calculation uses neither the single-vertex photon law nor a detector or a P2/P7 inference. The spectral comparison uses the declared cutoff model [[def-nrqm-light-matter-framework-finite-level-coupled-model]], its spectral definition [[def-nrqm-light-matter-framework-spectral-transition-and-detection]], the kernel mathematics [[lem-nrqm-light-matter-first-order-photon-energy-law]], and [[pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading]], with the stated P1, P2 and P7 readings; its ideal detected-law reading requires nonzero coupling. The two-level example's parameters $\omega_0,d,E_0,\omega,L,k$ and the comparison's densities $J_1,J_2$ are declared model data, not measured values.

**What is not claimed.** The page records no experiment, no apparatus, no
calibration, no count, no frequency, no efficiency and no uncertainty budget,
and none is invented. It does not claim that any laboratory atom, field,
spectrometer or detector realizes the declared models; those are tested
identifications with uncertainty under P7
([[post-nrqm-framework-preparation-and-apparatus]]). It asserts no measured rate,
lifetime, linewidth or exponential decay from any of its comparisons, and no
statistical inference. Comparing the declared model laws with data would test
the combined model and apparatus assumptions under a declared sampling and
measurement model, would carry finite-sample fluctuations, selection effects
and systematic uncertainties, and would not prove a model; spectra, counts
and lifetimes remain research candidates for a separate reported-experiment
item, and energy differences or successful comparisons alone do not establish
that the framework is a proof of nature.
