# Reader report — batch 57

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: independent reader  
Scope: batch `57` only

## Opened inventory

Assigned pages:

- `qft-f03` — `library/quantum-field-theory/qft-f03.md` (A page; items `def-qft-free-dirac-model` and `pthm-qft-dirac-free-properties`).
- `qft-f03-examples` — `library/quantum-field-theory/qft-f03-examples.md` (B page; example `ex-qft-dirac-rotation-parity`).

The prerequisite page `qft-f01` was also opened. I read all three assigned item files and opened the batch-57 proof contracts, cross-batch dependency record, notes, and coverage artifact; I inspected the contract clauses and coverage entries relevant to the assigned claims.

For the assigned claims I opened the current statements and proofs of `post-qft-free-field-model`, `def-qft-framework-units`, `def-qft-dirac-projections`, `lem-qft-dirac-projection-matrices`, `def-qft-fock-and-test-spaces`, `lem-qft-fock-ccr-car`, `lem-qft-free-dirac-car-locality`, `lem-qft-dirac-covariance-spectrum`, `lem-qft-dirac-fermionic-translation-spectrum`, `def-qft-scalar-mass-shell`, `lem-qft-scalar-causal-commutator`, `lem-qft-mass-shell-measure-invariant`, `lem-qft-lorentz-boost-rotation-factorization`, `lem-qft-free-action-equations`, `lem-qft-smeared-free-scalar`, `lem-qft-l2-product-tensor-identification`, `def-projection-valued-measure`, `thm-quarter-turn-values-and-shift-formulas`, and `def-countable-choice`. I also inspected the relevant statements from `lem-nrqm-composites-hilbert-tensor-construction`, `lem-nrqm-composites-bounded-tensor-maps`, `lem-nrqm-composites-permutation-sector-projections`, and the affine-Minkowski, inertial-frame, Lorentz-map, and smooth-density suppliers. `research/math-imports.json` identifies the imported read-only sources; I made no edits to imported mathematics.

## Independent review

`def-qft-free-dirac-model`: The definition fixes the signature, length-coordinate and SI conventions, massless-apex convention, projection ranges, conjugate negative-energy space, and the smeared field map. The field's boundedness and antilinearity are supplied by the displayed conditional Dirac CAR construction. The particle-annihilation and antiparticle-creation interpretation agrees with the adopted postulate. No pointwise field, filled Dirac sea, empirical assertion, or general spin-statistics conclusion is smuggled in.

`pthm-qft-dirac-free-properties`: The CAR and tested equation are exactly the field-construction supplier's claims. The locality implication uses its causal-support result; reordering even-degree monomials gives the stated sign, and hence commutation. The spin-lift covariance, vacuum statements, and translation spectrum are stated and proved conditionally by the named mathematical supplier. The (2\pi/4\pi) values follow from its explicit spin matrix and the cited trigonometric identities. The sign convention for the translation generator yields (H_D^{\mathrm{SI}}=\hbar cK_D\) on the same domain and the stated massive gap (\hbar c\mu=m_{\mathrm{rest,SI}}c^2\). I found no missing inference in the assigned proof. These are conditional model deductions, not evidence that the model describes nature.

`ex-qft-dirac-rotation-parity`: Covariance and antilinearity give the sign change of each field and adjoint. Conjugation is multiplicative, so every even finite polynomial is fixed; norm continuity of unitary conjugation passes the property to the defined norm closure. The example makes no point-field or general spin-statistics claim.

The active Tong full-text chapters were consulted as source context: Chapter 4, especially the spinor rotation discussion (including the (2\pi) sign), and Chapter 5 §§5.2–5.4, including the CAR, vacuum, particle/antiparticle mode interpretation, and field anticommutator. Tong's conventions are not the local proof's exact conventions, which are fixed by the mathematical suppliers. The official ETH 2025 notes page and the beginning of its Chapter 5 PDF text were inspected, but the web extraction did not expose all cited later subsections; I did not rely on those inaccessible sections to validate the local deductions.

## Edits and unresolved defects

No edits were made. I found no confirmed or suspected defect in an assigned item or assigned page prose. There are no uneditable mathematical defects to report. Since no item was repaired, proof contracts, judge records, reflow, precheck, and proof-layout were not changed or rerun.

## Page verdicts

- `qft-f03`: No title, inventory, prerequisite, or summary defect found. Its summary accurately describes the conditional Dirac CAR construction and keeps model assumptions distinct from deductions.
- `qft-f03-examples`: No title, inventory, prerequisite, or summary defect found. Its summary accurately describes the parity calculation and its limits.

## Blocker

The current cross-batch dependency record still marks `qft-f01`, `post-qft-free-field-model`, `def-qft-framework-units`, `def-qft-dirac-projections`, `lem-qft-dirac-projection-matrices`, `lem-qft-free-dirac-car-locality`, and `lem-qft-dirac-covariance-spectrum` as open or conditionally escalated, with upstream QFT-C01/QFT-MF01/QFT-MF02/QFT-MF04 readiness unresolved. I confirmed the current carrier statements used here, but those workflow records remain an acceptance blocker until their owners resolve and recertify them. I treat the readiness records as workflow evidence, not as a mathematical verdict against the claims.

Coverage limitation: this pass checked the assigned items and their operative supplier arguments, but did not re-audit every lower-level transitive mathematical dependency of those suppliers. No conclusion about those unreviewed lower-level suppliers is represented as a finding or as independent approval.
