# Batch 52 Step 3a adjudication

Run: `physics-cm-qm-gr-79-2026-10-11`; group: `batch-52`. Scope: eight touched obligations and `refuter:52:1`; no reader or page obligations.

## Dependency-order checkpoint

- `lem-nrqm-oscillator-diagonal-eigenspaces`: all five steps reviewed against the current diagonal adjoint/core proof and Parseval definition/statements; both inclusions, empty matching set, zero eigenvalue and distinct-value eigenspaces checked. Risk review complete; no decision owed.
- `lem-nrqm-oscillator-unitary-transport-of-spectral-pvms`: all eight steps checked against current PVM/integral/adjoint/spectral theorem definitions and spectral-support proof. Scalar regularity, exact domains and adjoint equality checked. The nonzero-space restriction of the support supplier is satisfied in all oscillator consumers; on the zero space equal empty spectra follow directly because every complex resolvent parameter is invertible on `{0}`. Risk review complete; no decision owed.


- Model definition reviewed against P1/P2/P4/P5, exact state/observable/flow and kinematics definitions, units, componentwise Q/P domains, Hermite recurrence, scaling, multidimensional and ladder suppliers. Reader one-dimensional space renaming accepted; three-dimensional space/operator collision amended to `\mathcal H_3` for the space, preserving `H_3` for energy. C2 hypothesis supports the Taylor remainder `o(x^2)`, not unstated higher derivatives: replaced that overstatement without narrowing the ideal oscillator claim. Direct consumers: spectrum theorem clause (d) uses H3 solely as energy; all other owned actual uses are one-dimensional or contextual. Outside driven propagator clause (c)/F3 and driven response Example/L2 use L2(R), Hosc, Q/P and the unchanged coherent family; no outside repair is needed. No propagation past sound interfaces is necessary.
- Coherent definition reviewed against exact convergence clauses (a)-(e), scaled basis and transported ladder domains; normalization, all number powers, first-variable-linear overlap, zero label, and distinct ray checks pass. Reader type renaming accepted. Corrected the Remarks overstatement excluding all energy eigenstates: Psi0 is the ground eigenstate; for nonzero z both level-0 and level-1 coefficients are nonzero. Definition and physical scope unchanged by this remark correction.


- Spectrum theorem: all eight steps reviewed; accepted reader eigenspace/scalar-multiple correction and amended step 1.2 by proving adjoint-domain equality via ambient-norm boundedness under D. Closedness by itself cannot force equality of adjoint inclusions. Corrected step 1.1 grammatical typing of eigenvalues. Exact positive energy/domain bounds, number-operator identity, ground case, spectral atoms/support and three-dimensional multiplicities checked. No Statement change in this adjudication; risk complete.
- Ladder example: all seven steps reviewed; reader non-self-adjointness repair accepted. `refuter:52:1` confirmed nonfatal, with explicit n=0 creation matrix element and n=0 or m=0 annihilation pairing added to step 1.2. Both cases follow from F1/F3; claim and scope preserved, repair confidence 1. Risk complete.


- Fluctuations: nine steps and exact coherent, moment, spread, Robertson, product-domain and approximation Statements checked. The product-domain commutator supplies the bound for approximants only; graph convergence and continuity of square roots extend it to every unit common-domain vector. Centered pairing is -i hbar/2 with the linear-first convention; equality and minimality follow without claiming uniqueness. Includes z=0. Reader notation repair accepted; risk complete.


- Evolution: all nine steps reviewed; accepted reader zero-label x0/p0 definition and variance calculation. Corrected energy-law wording to the affine image of the explicitly defined Poisson law under n -> hbar omega(n+1/2), including s^0=1 at s=0. Exact atoms, mean and spread unchanged. Owned trajectory F1/F3 and outside driven response L2 use unchanged (a)-(c); scope remark repeats (d) and requires surgical synchronization. Risk complete.


- Ground Gaussian: all nine steps reviewed against current Fourier/PVM, change-of-variables and heat-kernel Statements. The momentum Jacobian is (2 pi hbar)^-1, giving precisely the stated density and variance. Both heat-kernel parameters are positive. Coherent label zero fixes the chosen normalized representative. Carrier pre/post hashes agree; touched obligation is `reviewed_no_defect`, `change_kind: audit_enrichment`, with no defect row. Risk complete.


- Trajectory: six steps and all actual suppliers reviewed. Ray period is 2 pi/omega (the vector acquires minus sign); quarter-period values and invariant nondegenerate ellipse use positive parameters and z nonzero. Added exact `thm-quarter-turn-values-and-shift-formulas` for F2 quarter values; parity alone and coherent-state Definition do not state them. Statement and scope unchanged. Risk complete.


## Final dispositions

Nine decisions are recorded in `research/physics-cm-qm-gr-79-2026-10-11-alpha-batch-52-3a-decisions.json`: six amended repairs, one accepted repair, one audit-enrichment no-defect review, and one confirmed nonfatal refuter finding. Twelve distinct closed defect rows are recorded at `3a-adjudicate`; the refuter decision owns exactly its zero-index row. No unchanged, unflagged item or page receives an extra decision. No published carrier was edited and no defective published supplier was found in the checked uses; no published-ledger lock/edit was needed. All stable item IDs and page inventories remain present; no withdrawal, new page or pair.

## Evidence and historical limits

Scope, reader report/findings, refuter report, both pre/post hash files, current carriers, exact cited supplier Statements/Definitions and the diagonal-core/support proofs were read. Ground-Gaussian and trajectory carrier pre/post hashes coincide while their contract hashes differ: these are reader audit enrichments. Other touched carriers have different pre/post item hashes matching the repair categories reported by the reader. Historical source-byte preimages were not retrieved: original wording is attributed to the immutable reader artifact, not claimed as independently recovered bytes. No unbound routed finding or prior escalation is present in this dispatch, and no owner historical override is invented. The refuter finding retains its exact observed SHA-256 from the scope; it is decided from its reported omission and independent current proof review.

## Sources checked

- [Teschl, 2009](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf), §3.1, printed pp. 91-92, equations (3.26)-(3.30), Theorem 3.2 and its domain proof; §8.3, printed pp. 178-179, equations (8.33)-(8.44), Theorem 8.5. These supply context for unbounded calculus/unitary equivalence and Hermite oscillator spectra. Exact local domain, eigenspace and scaling suppliers remain the logical premises.
- [Zwiebach, MIT Chapter 6](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf), relevant §§4.3-4.5 passages, equations (4.31)-(4.45), (4.55)-(4.69), (4.74)-(4.99), (4.101): coherent spreads, energy-basis weights, moments, annihilation eigenvalue and phase rotation agree with the explicit local deductions. No displacement-operator identity is imported into the local family definition.
- [Binney/Skinner](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf), §3.1 equations (3.1)-(3.21), especially (3.15)-(3.17), and §3.2 evolution discussion (3.22) onward: their length has square hbar/(2m omega), whereas local ell has square hbar/(m omega). The local spreads therefore match after this conversion. Their Taylor expansion motivates the model; local C2 hypotheses retain only the o(x^2) remainder.
- [Tong](https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf), §2.2, printed pp. 34-38, equations (2.20)-(2.30): quadratic Hamiltonian, rescaling, Gaussian and discrete energies checked as source context, not substituted for the complete local diagonal-domain proof.
- [MIT Chapter 3](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/04b0570b349e84d74129eef504498472_MIT8_05F13_Chap_03.pdf): adjoint discussion checked as context; finite-dimensional algebra does not replace the local unbounded-domain test.

The physical postulates remain adopted assumptions. The outcome laws, variances and motion are exact conditional predictions, with no measured inputs, invented sampling precision or empirical theory-validation claim. All mathematical imports are read-only; `research/math-imports.json` identifies the new quarter-turn supplier as a pinned mathematical snapshot. Source checking covers relevant passages, not a recursive re-audit of every lower-level mathematical proof or complete bibliography.

## Local checks

Reflow: seven edited item carriers, all unchanged by formatter. Precheck: all four edited proof-bearing carriers passed; the definitions and remark have no phase proof to check. Rendercheck: seven edited items plus the amended A-page, eight files, passed real KaTeX and renderer YAML checks. Final required proof-layout: seven edited items, 30 steps, zero defects, exit 0. Proof-contract check with --strict: eight/eight proof contracts checked, zero errors and warnings. Risk report before review routed eight HIGH/CRITICAL items; all now have specific complete reviews; --require-reviewed rerun reports zero errors. Owned manifest, citation/derivation records and relevant boundary records synchronized.

No judge, hash stamping, certification, dispatch or gate battery was initiated. Engine owns current decision hashes and gates. No mathematical prerequisite blocker or outside consumer repair remains in the reviewed scope.

Focused handoff consistency checks: nine/nine exact scope obligations, unique decision keys and closed subject-matching ledger references; twelve/twelve owned manifest prerequisite/role lists agree with carriers. 25 direct imported mathematical supplier snapshots match their pinned SHA-256 bytes. Untouched Gaussian and the two local lemmas still match both pre/post raw hashes; current fluctuations matches its post-reader raw hash. No stale judge stamp is present on an edited carrier.
