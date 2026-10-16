# Batch 17 Step 3a adjudication

Run: quantum-computing-algorithms-60-2026-10-15. Group: batch-17.

Scope owes only touched:17:thm-qc-bell-transform-inverse; reader findings and refuter flags are empty, and no page obligation is routed. Six HIGH/CRITICAL risk reviews are required.

## Level 8: Bell transform

Accepted the reader repair to step 5.1, replacing undefined plus/minus kets with explicit normalized vectors. Independent calculation confirms all four columns, orthogonality, exact phase of Psi-minus, Pauli expression, self-adjoint factors and reversed adjoint product. No Statement/Definition changes and no consumer propagation. No choice or zero-dimensional cases arise for two fixed qubits. Completed the specific risk review in the batch contract before proceeding higher.

The current raw item hash 987c44b52e83b0eb719c72f24b919a282c8da9ab5dcc0bb2787fabe2956096c4 matches the immutable reader-post snapshot; the pre snapshot records 9edccc09d3f7d74dde2d6455835b3594f7d56511046da6705bf5fc4432406926. Contract hashes changed from 22233b038a7f1b8e4e0bfbbebeb0ba067bec75b898d8849899e9ad3e00a92ee1 to 823213af8fe305588dfd0aee5d453399d5a56f83b8ba6125661f2a1844648467; the manifest hash is identical before/after. The reader report documents the notation replacement and synchronized derivation. Risk-review enrichment is additional current contract metadata.

Dependencies read: def-qc-bell-basis; thm-qc-computational-basis-orthonormal; def-qc-tensor-register-and-permutation; def-qc-cnot-and-control-target-order; def-qc-one-qubit-gate-alphabet-and-rotations; def-qc-tensor-map; def-adjoint-of-a-linear-map-between-inner-product-spaces; thm-matrix-of-the-adjoint-is-the-conjugate-transpose. Matrix actions use the root first-linear inner product convention.

Source: [Cleve F26 V6](https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf), section 7.2, PDF pp.61-62, equations (81)-(82) and decoding table. Retrieved via curl and read with PyMuPDF after the web reader failed. Source labels and decoder differ in wire order/phase; our exact identities were independently checked in the declared local convention.

Next: level-10 dense-coding and teleportation expansion risk reviews, then higher teleportation consumers.

## Level 10: dense coding

Reviewed the full procedure and four proof steps with all nine actual dependencies. The exact 11 sign, transferred Pauli order, projector invariance, deterministic outcome law and one-qubit transmission count are sound. Resource claims are achievability with a preshared resource. Completed risk_review; no edit or additional decision is owed for this untouched, unflagged item. Sources: Cleve section 7.2 pp.61-62 and Watrous section 6.3.1, Scenario 6.53, Proposition 6.54 (including proof), Example 6.55, printed pp.367-369.

Next: teleportation expansion at level 10.

## Level 10: teleportation expansion

Four explicit computational-basis calculations prove the sum with coefficient 1/2 and receiver X^b Z^a psi for arbitrary complex amplitudes, including the zero vector. All six suppliers and full procedure were read. The normalized-input algorithm does not restrict the separate algebraic vector identity. Risk review complete; no defect or decision owed. Cleve section 10.3 equations (135)-(138), PDF pp.82-83, was read; equation (138) agrees exactly. The adjacent source decoder table inconsistently exchanges the middle labels, so the local explicit calculation, rather than that table, establishes the gate action.

Next: level-11 outcome probabilities.

## Level 11: equiprobable outcomes

Read all ten dependencies and four proof steps. The coordinate density matrix is positive and trace one under the root pairing; each rank-two outcome projector selects squared branch norm 1/4. Normalization excludes the zero input but permits either amplitude to vanish; all four weights remain positive. No conditional state is assigned at zero weight. Risk review complete; no source changes or decision owed. Sources: Cleve equation (139), PDF p.84; Watrous Example 6.50, equations (6.327)-(6.331).

Next: level-12 reference stability.

## Level 12: reference stability

Reviewed all four steps, eleven cited suppliers and F11. Finite Gram-Schmidt supplies a single reference basis without AC; R=0 is vacuous under normalization. The expansion applies to every coefficient vector, including zero ones, and the specified wire permutation preserves factor meaning. Branch norms are one, weights are 1/4, and correction tensor identity fixes every joint vector, including entangled inputs. Risk review complete; no defect or decision owed. Watrous Theorem 6.47 and Example 6.50 give the identity protocol; the authored tensor calculation supplies the reference claim locally. Cleve PDF p.85 discusses loss of Alice copy and is contextual, not a reference-stability proof.

Next: level-13 correctness/resources.

## Level 13: correctness and resource count

Reviewed four proof steps and all six suppliers, plus the elementary resource definition. Every branch is positive, the ordered Pauli correction is exact, and the finite-reference result applies without a product-state assumption. The resource record explicitly excludes Bell preparation and counts two classical communication bits, zero in-protocol transmitted qubits, and the stated local occurrences. No optimality claim. Risk review complete; no defect or extra decision owed.

All six required risk reviews are now recorded. Next: focused local checks, closed notation-defect ledger row, final decision and handoff.

## Final local checks and dispositions

- Initial risk-report: six HIGH/CRITICAL items; 0 errors. Final risk-report with --require-reviewed: 0 errors, all six completed.
- node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-17.proof-contracts.json --strict: 0 errors, 0 warnings, 8/8 records checked.
- node tools/tsx-run.mjs tools/precheck.mts items/thm-qc-bell-transform-inverse.md: PASS, 1 checked, 0 failing.
- node tools/proof-layout.mjs items/thm-qc-bell-transform-inverse.md: 1 item, 6 steps, 0 defects. No item was edited after this command.
- node tools/rendercheck.mjs items/thm-qc-bell-transform-inverse.md: 1 file, all math and YAML parsed.
- node tools/frontier-dependency-ledger.mjs refresh --run quantum-computing-algorithms-60-2026-10-15: refreshed and deduplicated after updating 29 current-use rows for reviewed consumers. No unmet supplier found; outside and page-only rows preserved. The canonical ledger instructions live in briefs/tasks/frontier-dependency-ledger.md; that instruction file was not modified.
- Closed defect row qca60-b17-3a-bell-decoder-notation appended through the serialized defect-ledger tool; generated view refreshed. The touched decision references that row, verdict accepted_repair and repair_confidence 1.
- Run-scoped defect-ledger validate checked 18 rows and failed on another batch's qca60-b2-3a-zero-qubit-identification: subclass unjustified-identification is outside its closed enum. This is an out-of-scope mechanical metadata issue; no mathematical defect or ledger row was invented for it. Owner should route its taxonomy correction to batch 2.

Four citation quote mirrors of thm-qc-computational-basis-orthonormal were synchronized to the current Statement (the separate zero-qubit convention wording); their actual uses remain the two-dimensional orthonormal-basis conclusion. All other quote mirrors were checked against current source sections. No Statement/Definition, item, page or manifest was changed by this adjudicator. No judge record required invalidation, and no consumer statement changed. Published suppliers remained read-only; no defective published item was confirmed, so no published-ledger addition was needed.

No mathematical blocker remains in batch 17. The engine owns current hashes, stamping, native gates and transitions; no judge or certification cycle was invoked. One exact routed decision is written; untouched risk-only items owe no decisions.

Final read-only checks confirm that all six reviewed mathematical item files still have their frozen reader-post raw hashes and their current Statements match the owning manifest. The decision inventory is exactly 1/1 owed obligation.

Source URLs: [Watrous, The Theory of Quantum Information](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf), section 6.3.1, printed pp.359-369; [Cleve F26 V6 notes](https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf), sections 7.2 and 10.2-10.3, PDF pp.61-62 and 81-85. Source verification concerns these relevant passages only.

Tooling notes: Python and pdftotext commands were unavailable; python3/PyMuPDF successfully read the downloaded source PDFs. A mistaken rendercheck --help invocation started an unscoped read-only scan and was interrupted (exit 130); it supplies no validation coverage. Focused rendercheck above completed successfully. The initial guessed proof-contracts.mjs path did not exist; the actual proof-contract.mjs strict check above passed.


## Root current-carrier metadata amendment

Original native mathematical acceptance remains above. Current source continuity and actual later contract/manifest maintenance are recorded in `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-metadata-amendments/root-current-carrier-amendment.json`. The affected accepted-repair labels now honestly read amended_repair because the composite carrier differs from reader-post; no new execution, mathematical repair or historical observation is invented.
