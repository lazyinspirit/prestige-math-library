# Step 3a reader report — batch 56

- **Run:** `physics-td-qft-rpm-62-2026-10-14`
- **Role:** reader
- **Scope:** batch `56` only
- **Disposition:** no defects identified; no edits made; no blocker.

## Opened assigned pages

- `library/quantum-field-theory/qft-f02.md` — reviewed the page summary against its three assigned items. **Verdict: acceptable.** Its summary accurately describes the selected conditional scalar Fock model and the stated deductions; it does not claim empirical universality.
- `library/quantum-field-theory/qft-f02-examples.md` — reviewed the summary against the assigned example. **Verdict: acceptable.** It describes a massless model calculation and explicitly disclaims an experimental or signaling claim.

## Opened assigned items

- `items/def-qft-free-scalar-model.md`
- `items/pthm-qft-scalar-free-properties.md`
- `items/pthm-qft-scalar-vacuum-moments.md`
- `items/ex-qft-scalar-vacuum-correlation.md`

The definitions, hypotheses, conventions, proof steps, computations, titles, scopes, dependency roles, and page placements were checked. The model definition fixes the shell and Fourier convention, Fock space and finite-particle domain, real-test field, and vacuum-subtracted Hamiltonian. The theorem arguments follow from the cited operator and shell constructions. The example's regulated massless kernel has the stated normalization; its limit is strictly positive on the constructed compact spacelike support product. The commutator conclusions are conditional on the selected free-field model. No item reports observations or uses empirical premises.

## Dependency material consulted

Opened the relevant supplier items and checked their exact interfaces and the proof portions used by the assigned arguments:

- `items/post-qft-free-field-model.md` and `items/def-qft-framework-units.md`.
- `items/def-qft-scalar-mass-shell.md`, `items/lem-qft-mass-shell-measure-invariant.md`, `items/lem-qft-mass-shell-test-restriction-continuity.md`, `items/lem-qft-mass-shell-test-range-dense.md`, and `items/lem-qft-scalar-poincare-action.md`.
- `items/def-qft-fock-and-test-spaces.md`, `items/lem-qft-fock-ccr-car.md`, `items/lem-qft-fock-unitary-lift.md`, `items/lem-qft-second-quantized-spectrum.md`, and `items/lem-qft-segal-weyl-domain.md`.
- `items/lem-qft-smeared-free-scalar.md`, `items/lem-qft-scalar-causal-commutator.md`, `items/lem-qft-scalar-local-weyl-algebra.md`, and `items/lem-qft-free-time-ordered-kernel.md`.
- The pinned mathematical item `items/def-countable-choice.md`; and the exact supplier statements used in the example: `lem-smooth-bump-between-concentric-euclidean-balls`, `cor-cauchy-schwarz-inequality-for-l-two`, `thm-dominated-convergence`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `thm-linear-change-of-variables-for-lebesgue-measure`, `def-polar-surface-measure-on-the-unit-sphere`, and `lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates`.

For source convention checks, I consulted David Tong's author-hosted [Chapter 2](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html), §§2.4.1, 2.6.1, 2.7 and 2.7.1 (especially eqs. 2.134, 2.163–2.168), and [Chapter 3](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html), §§3.3.1–3.3.2 (eqs. 3.232–3.245). These give the relativistic shell normalization, free two-point/time-ordering and Wick-contraction conventions. Tong's momentum-space Feynman propagator includes a prefactor `i`; the assigned time-ordered carrier instead uses the explicitly defined shell formula without that prefactor and proves its Green equation under the adopted `(-+++)` convention. The local operator-domain claims are supplied by the library proofs, not by the formal mode discussion in these notes.

## Repairs and unresolved defects

- **Edits:** none. No item or page text, contract, or verification record was changed.
- **Uneditable defects:** none identified in the assigned pages or items, or in the supplier interfaces consulted for these claims.
- **Blocker:** none.

## Coverage note

Both assigned pages, all four assigned items, their direct logical dependencies, and the mathematical supplier statements used by the example were opened. The assigned item files were opened before some of their supplier files, so I cannot claim that the file-opening sequence followed the requested supplier-first order; I reached the verdicts after reviewing the relevant supplier text. I checked the supplied mathematical interfaces used here, not every unrelated transitive proof in the mathematical library. Because no item was repaired, I did not run reflow, precheck, or proof-layout.
