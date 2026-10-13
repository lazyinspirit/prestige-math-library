# Step 3a reader report — batch 64

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `64`

I reviewed the batch independently. I found two prose/source-description defects in assigned carriers and repaired them. No item was withdrawn. No defect remains unedited and there is no blocker to the batch verdicts.

## Assigned inventory

### A page: `qm-light-matter-and-spectral-transitions`

Opened [the A page](../library/non-relativistic-quantum-mechanics/qm-light-matter-and-spectral-transitions.md) and reviewed its summary, prerequisites, conditional scope and empirical-status statements.

- `lem-nrqm-light-matter-first-order-photon-energy-law` — passed. The push-forward measure, kernel factorisation, positivity, normalization, concentration and tail estimates are proved under their stated hypotheses. The zero-vector and zero-coupling cases are separated correctly.
- `def-nrqm-light-matter-framework-finite-level-coupled-model` — passed. The finite subspace and its domain conditions, compressed matrices, cutoff, Fock-space interaction, self-adjointness supplier, evolution and model scope are explicit.
- `def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength` — passed. The field domain and regularity, units, bounded finite-dimensional Hamiltonian, prescribed-source assumption and qualitative long-wavelength condition are stated.
- `def-nrqm-light-matter-framework-spectral-transition-and-detection` — passed after correcting its Tong source caption. The formal law is distinguished from a normalized one-photon preparation at zero coupling, and the ideal energy-window detector is distinguished from a laboratory spectrometer.
- `post-nrqm-light-matter-vacuum-preparation-and-emission-assumption` — passed after correcting its Tong source caption. Vacuum preparation and the measurement reading are explicit adopted assumptions; no rate or observed emission is inferred.
- `pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients` — passed. The Dyson remainder is finite-time and explicit; the proof does not identify the single-vertex coefficient with an exact probability or rate.
- `pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading` — passed. The density hypotheses, cutoff boundary exclusion and distinction between the single-vertex limit and a measured decay constant are preserved.
- `pthm-nrqm-light-matter-stimulated-dipole-drive-transitions` — passed. The first-order formula, Hermitian reverse-amplitude relation, rotating-frame identifications and zero-frequency branch are supported by their cited model results.
- `pthm-nrqm-light-matter-dipole-selection-rules` — passed after correcting its self-adjointness fact and MIT source caption. The angular-degree and component-weight restrictions are proved locally; parity and compression are handled on the actual multiplier domains.
- `rem-nrqm-light-matter-scope-and-empirical-status` — passed after correcting its Tong source caption. It keeps the page’s model predictions, empirical limitations and absence of data distinct.

### B page: `qm-light-matter-and-spectral-transitions-examples`

Opened [the B page](../library/non-relativistic-quantum-mechanics/qm-light-matter-and-spectral-transitions-examples.md) and reviewed its summary and empirical qualifications.

- `ex-nrqm-light-matter-two-level-dipole-drive-check` — passed. The full first-order amplitude, co-rotating component and averaged Rabi comparison are distinguished; no laboratory data are claimed.
- `ex-nrqm-light-matter-hydrogen-dipole-angular-factors` — passed after correcting its MIT source caption. The angular integrals are computed from the declared harmonics; radial factors and transition rates are not claimed.
- `texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison` — passed. Equality of rate coefficients and separation of the finite-time energy laws follow from the stated density hypotheses; the sharp-line reference is explicitly an ideal model, with no apparatus or data asserted.
- `rem-nrqm-light-matter-examples-scope-limits` — passed. Its summary accurately states the examples’ conditional model scope and their statistical and empirical limits.

## Dependency review

I opened the load-bearing local suppliers and checked their statements and relevant proofs before settling the item verdicts:

- Fock and emission mathematics: `thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity`, `thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound`, `thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian`, `thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains`, `thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence`, `thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction` and `lem-nrqm-fock-and-equilibrium-fock-sector-projections`.
- Driven two-level mathematics: `def-nrqm-driven-dynamics-framework-driven-model`, `pthm-nrqm-driven-dynamics-first-order-transition-amplitude`, `pthm-nrqm-driven-dynamics-circular-drive-exact-rabi`, `pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error` and `prop-nrqm-orbital-and-spin-finite-spin-matrices`.
- Coulomb and angular mathematics: `def-nrqm-central-framework-coulomb-and-hydrogen-model`, `pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy`, `thm-nrqm-coulomb-atomic-dipole-matrix-element-domain`, `thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension`, `thm-nrqm-orbital-and-spin-associated-polynomial-normalization`, `thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain`, `thm-nrqm-orbital-and-spin-legendre-rodrigues-equation`, `lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates` and `thm-lebesgue-measure-under-dilations-and-reflections`.
- Physical formulation and measurement: P1, P2, P3, P4 and P7; `def-nrqm-state-geometry-framework-state-space`, `def-nrqm-observables-framework-observable-and-outcome-law`, `def-nrqm-measurement-framework-declared-measurements-and-instruments`, `def-nrqm-framework-quantities-and-units`, the radiation extension and radiation-sector definitions, the ideal counting/energy-window definition, and `post-nrqm-approximations-static-finite-level-dipole-coupling`.

The mathematical proof carriers use the suppliers’ stated Choice assumptions. I found no inference in an assigned proof that requires an unstated physical observation, and no statistical claim is presented as an empirical result.

## Edits and evidence

1. In `pthm-nrqm-light-matter-dipole-selection-rules`, fact F2 had described the self-adjoint (L_z) operator as if it were self-adjoint on the algebraic finite span. The cited `thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain`, Statement (a)–(c), defines the self-adjoint operator on all (L^2(S^2,\sigma)), gives its domain, identifies the finite span as a core, and gives the chart differential expression on that span. F2 now records those exact domain and core facts, so proof step 2.1 applies self-adjointness to the ambient Hilbert-space operator.

2. In `pthm-nrqm-light-matter-dipole-selection-rules` and `ex-nrqm-light-matter-hydrogen-dipole-angular-factors`, the MIT Chapter 9 Section 3 captions had attributed dipole integrals and selection rules to a section whose accessible text covers spherical-harmonic orthogonality and azimuthal dependence. I narrowed both captions to those supported topics. The selection theorem’s dipole restrictions remain established by its local harmonic-polynomial proof and the separate Binney & Skinner source.

3. In `def-nrqm-light-matter-framework-spectral-transition-and-detection`, `post-nrqm-light-matter-vacuum-preparation-and-emission-assumption` and `rem-nrqm-light-matter-scope-and-empirical-status`, the Tong Section 4.4.2 captions had attributed an explicit deferral of light-matter coupling, and in the remark also a warning about isolated-atom emission, to that section. The opened passage states the photon-energy relation, relates it to hydrogen level differences, notes the difficulty of a single-particle Schrödinger description of photon dynamics, and points to quantum field theory for a field treatment. The three captions now describe that scope without attributing the unsupported claims.

Accessible source evidence reviewed: Binney & Skinner, *The Physics of Quantum Mechanics*, §§9.3.1–9.3.3 and Box 9.2 (printed pp. 214–220; [author-hosted PDF](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf)); MIT 8.05, Chapter 6 §5.3 (printed pp. 48–50) and Chapter 9 §3 (PDF pages 18–19; [course PDFs](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/)); Tong, *Quantum Mechanics*, §4.4.2 (printed pp. 120–121; [author-hosted PDF](https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf)); and Fitzpatrick, *Quantum Mechanics*, Chapter 13 §13.9 (pp. 188–189; [author-hosted PDF](https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf)).

The updated item evidence required no change to proof arguments or public model claims. No `verification.judge` entry was present in the changed items. I updated the selection-rule proof contract in `physics-cm-qm-gr-79-2026-10-11-batch-64.proof-contracts.json` to bind the (L_z) source to the use in step 2.1.

## Validation

- Reflow: all five changed items reported `unchanged`.
- Precheck: the selection theorem and hydrogen example passed; the definition and remark had no proof-bearing sections to check; the postulate passed its nonproof structural check.
- Final proof-layout check, batched once for all changed item paths: `5 items, 12 steps, 0 defects`.

## Page verdicts and remaining issues

- `qm-light-matter-and-spectral-transitions` — **Pass.** The model, its assumptions, deductions, units, source scope and absence of experimental data are clearly distinguished.
- `qm-light-matter-and-spectral-transitions-examples` — **Pass.** The computations and thought experiment are conditional, the spectral comparison remains a model comparison, and no finite-sample observation or statistical certainty is invented.
- Uneditable findings: none.
- Blocker: none.

## Coverage note

The archived Pratt PDF cited in several carriers could not be fetched through the web reader; a request returned an internal retrieval error and the current MSU host blocked the PDF fetch. I did not treat retrieval failure as evidence that those citations are inaccurate, and I did not rely on that source to establish the mathematical claims. I did not independently audit every transitive foundational proof beneath the opened local suppliers. The initial combined read of the long rule files was truncated; I continued with bounded sections, and a few long carriers were reopened to verify complete text, so the once-per-session file-read instruction was not fully met.
