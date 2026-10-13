---
id: rem-nrqm-measurement-examples-scope-limits
aliases: [ nrqm-measurement-examples-scope-limits ]
kind: remark
domain: physics
title: "What the worked instruments of the companion page establish"
status: published
origin: pipeline
dependency_level: 12
deps:
  [
    ex-nrqm-measurement-absorption-instrument,
    ex-nrqm-measurement-degenerate-coarse-versus-fine-update,
    ex-nrqm-measurement-serial-stern-gerlach-filters,
    ex-nrqm-measurement-three-polarizer-chain,
    post-nrqm-framework-ideal-conditional-measurement,
    post-nrqm-framework-preparation-and-apparatus
  ]
dependency_roles:
  ex-nrqm-measurement-absorption-instrument: operational-prerequisite
  ex-nrqm-measurement-degenerate-coarse-versus-fine-update: operational-prerequisite
  ex-nrqm-measurement-serial-stern-gerlach-filters: operational-prerequisite
  ex-nrqm-measurement-three-polarizer-chain: operational-prerequisite
  post-nrqm-framework-ideal-conditional-measurement: operational-prerequisite
  post-nrqm-framework-preparation-and-apparatus: operational-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope audit of the companion page of worked instruments: it
  records what each finite model computation verifies inside the framework's
  declared-measurement vocabulary and what none of them claims. It proves
  nothing, records no measurement, reports no observation and asserts no
  apparatus realization or empirical agreement."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        1.3.6, 1.4 and 7.4.2, printed pages 14-15 and 161-164 (polarization
        probabilities, ideal measurement and Stern-Gerlach filters in series)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.3,
        printed pages 76-77 (the measurement postulate and its stated limits)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Scope of the worked instruments

**Serial filters.** [[ex-nrqm-measurement-serial-stern-gerlach-filters]] computes, in a declared two-level spin-half model with the spin assignment of P6, the outcome probabilities $\cos^{2}(\theta/2)$ and $\cos^{2}((\varphi-\theta)/2)$ of successive ideal filters and the quarter-probability case. The computation verifies the model's serial Lueders statistics for declared ideal filters. It does not derive the inhomogeneous-field force, the spatial splitting or the detector response of a Stern-Gerlach apparatus, and it reports no measured fraction and no property of silver atoms; the reported Stern-Gerlach experiments of 1922 remain a candidate experiment item that is not asserted by this page.

**Analyser chain.** [[ex-nrqm-measurement-three-polarizer-chain]] computes the transmission probabilities of a chain of declared ideal analysers in a declared two-level model and exhibits the standard $\tfrac14$ case, together with an explicit caveat that a stipulated classical amplitude model with the same ideal analyser convention gives the same ratio. The agreement of the two model computations does not establish field quantization or the applicability of either model to nature, and no transmission counts, efficiencies or backgrounds are reported.

**Absorbing instrument.** [[ex-nrqm-measurement-absorption-instrument]] exhibits a declared two-outcome instrument whose detected branch leaves an absorbed marker with no outgoing polarization-plane state and whose non-detection branch suppresses one amplitude by $\sqrt{1-p}$ rather than projecting it away; neither outcome is repeatable. The computation verifies that a declared instrument can describe a destructive apparatus within the framework's instrument vocabulary and that its update is part of its declaration. The three-level space is an idealisation; no real detector, photon number, efficiency or rate is described.

**Degenerate readout versus fine readout.** [[ex-nrqm-measurement-degenerate-coarse-versus-fine-update]] contrasts a coarse readout of a degenerate subspace with a fine readout resolving it and shows that the coarse Lueders update retains the coherent superposition while the eigenvector-selection mixture changes the law of a suitable bounded observable. The computation verifies the degeneracy clause of the projective update inside an explicit three-level model; it asserts no preferred basis and no apparatus.

**Empirical neutrality.** None of the four items is an experiment. Each is a finite computation for a declared preparation and a declared measurement model; none records data, calibration, sampling, uncertainty or a comparison with observation, and none claims that a laboratory device realizes the declared instrument. Agreement or disagreement with data would test the combined model and apparatus assumptions under the preparation and apparatus postulate P7 ([[post-nrqm-framework-preparation-and-apparatus]]) and is not established or claimed here.
