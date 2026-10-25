# Step 3a Reader Report — Batch 29

Run: advanced-qft-supersymmetry-build-2026-10-23

Role: reader-29

Scope: batch 29 only.

## Opened inventory

### Assigned pages

- qftx-susy-algebra-and-multiplets — library/advanced-qft-and-supersymmetry/qftx-susy-algebra-and-multiplets.md. Draft physics A page; page_layout compact-v1; body empty; contains the assigned physics theorem and BPS definition. Its current requires matches research/plan-spec.json: aqft-susy-math-foundations and countability-and-uncountability.
- qftx-susy-algebra-and-multiplets-examples — library/advanced-qft-and-supersymmetry/qftx-susy-algebra-and-multiplets-examples.md. Draft physics B page; page_layout compact-v1; body empty; contains the two assigned examples. Its requires matches the current plan and batch manifest.

### Required page context

- aqft-susy-math-foundations — library/quantum-field-theory-mathematics/aqft-susy-math-foundations.md; draft mathematics supplier page.
- countability-and-uncountability — library/real-analysis/countability-and-uncountability.md; published imported mathematics supplier page.

### Items, suppliers before consumers

The following mathematical suppliers were opened before their dependent current-run suppliers and assigned items: def-countable-choice, def-complex-conjugate-real-imaginary-part-and-modulus, thm-complex-numbers-form-a-field, def-complex-numbers-and-arithmetic, thm-bounded-borel-pvm-integral, thm-pvm-integral-is-a-star-homomorphism, lem-unbounded-pvm-integral-is-well-defined-and-closed, def-unbounded-integral-against-a-pvm, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-densely-defined-closed-and-closable-operator, def-unbounded-linear-operator-domain-and-graph, def-projection-valued-measure, def-hilbert-space, and def-real-and-complex-inner-product-space.

The current-run supplier chain was opened in this order: def-qftx-super-poincare-algebra-4d, lem-qftx-super-poincare-graded-jacobi, def-qftx-unitary-super-poincare-representation, and thm-qftx-n-extended-central-charge-bounds.

The assigned items were then opened in dependency order: pthm-qftx-n2-bps-saturation-kernel-equivalence, def-qftx-bps-state-and-saturation, ex-qftx-n2-short-rest-fiber-algebra, and ex-qftx-n2-long-rest-fiber-algebra.

For a possible BPS-definition consumer effect, I also opened def-qftx-physical-bps-index (batch 53) and def-qftx-physical-bps-charge-data (batch 54). Both explicitly supply a full unitary representation and a selected rest-sector, so their uses do not rely on the long example's unsupported identification of a rest-algebra module with a full-representation BPS state. No BPS-definition interface change was made.

### Run evidence and sources

Opened the batch-29 manifest, proof contracts, cross-batch dependency rows, batch notes, and the current plan rows for the assigned pages. The records were treated as review inputs; current item statements and proofs determined the findings.

Read the relevant cited passages in:

- Adel Bilal, Introduction to Supersymmetry, §3.4, printed pp. 13–15 (PDF pp. 18–20), equations (3.12)–(3.16): rest-frame supercharge algebra, central-charge oscillator pairs, positivity and saturation. Bilal's central-charge normalization differs from the local normalization and was not substituted for it.
- David Tong, Supersymmetric Field Theory, §2.4.2, printed pp. 40–41 (PDF pp. 31–32): the N=2 oscillator combinations, positivity bound, complex-phase extension and saturation discussion. The local proof supplies the exact coefficients and operator-domain argument.

## Review and repair

- pthm-qftx-n2-bps-saturation-kernel-equivalence: the rest convention gives P_0=-M, so the mixed anticommutators are 2M. The central-charge theorem supplies {q,r^*}=2zI, {r^*,q^*}=2\bar zI and the common product domain. Expanding the quadratic form with the actual adjoints yields the stated sum of squared norms, and the strict nonzero-vector hypothesis justifies the reverse implication. The proof distinguishes A-sharp from a maximal-domain adjoint. Statement, units, source locators, and domain conditions are consistent; no repair was needed.
- def-qftx-bps-state-and-saturation: the equality criterion M=||Z||_op is defined on the stated massive rest-fiber data; the N=2 specialization and annihilator condition match the supplier theorem. The claim is explicitly algebraic and does not assert a state, stability, or physical realization. No repair was needed.
- ex-qftx-n2-short-rest-fiber-algebra: the specified two-mode CAR operators have the stated adjoints; the epsilon and central-charge signs give the required brackets, ||Z||_op=M, and the displayed null combination vanishes. The statement identifies the construction as a rest-frame algebra module and does not claim a full Poincare representation or a physical particle. No repair was needed.
- ex-qftx-n2-long-rest-fiber-algebra: the four contraction operators satisfy the CAR relations on the subset basis, giving the stated zero-central-charge rest algebra. I repaired two connected defects in the example description/proof: |Z| was undefined for the matrix (the declared quantity is ||Z||_op), and the original conclusion called vectors of a rest-algebra module BPS-saturated even though the BPS definition concerns a specified full-representation rest fiber. The item now concludes only that the algebraic mass/central-charge equality fails for this module and expressly makes no full-representation BPS-state claim. I updated the exact batch-29 manifest statement mirror and proof-contract derivation for step 3.1. The carrier has no verification.judge record to remove.

## Required validation after the repair

- Command: node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/ex-qftx-n2-long-rest-fiber-algebra.md — unchanged.
- Command: node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/ex-qftx-n2-long-rest-fiber-algebra.md — PASS; 1 checked, 0 failing.
- Command: node tools/physics-support/proof-layout.mjs items/ex-qftx-n2-long-rest-fiber-algebra.md — 1 item, 4 steps, 0 defects.
- Confirmed the edited Example text exactly matches its batch-29 manifest statement and that the proof-contract JSON parses with the corrected step 3.1 claim.

## Page verdicts

- qftx-susy-algebra-and-multiplets: PASS. Current page metadata and inventory match the plan and manifest; its body is empty as required.
- qftx-susy-algebra-and-multiplets-examples: PASS. Current page metadata and inventory match the plan and manifest; its body is empty as required.

## Unedited routing metadata discrepancy

research/advanced-qft-supersymmetry-build-2026-10-23-batch-29.cross-batch-dependencies.json records a verified page edge from qftx-susy-algebra-and-multiplets to qftx-nonabelian-yang-mills-model, but the current A-page source, batch manifest and canonical plan do not declare that prerequisite. The batch notes repeat the Yang–Mills requirement, so those notes and the current source/plan/manifest disagree. This is a routing-evidence discrepancy, not a defect in an assigned item or page; I did not edit the dependency record or notes. Any gate requiring exact page-edge rows needs owner/native reconciliation.

## Coverage note and remaining limitations

All assigned pages and items and the supplier statements/arguments needed to check their actual uses were inspected. The imported functional-analysis prerequisites were checked for the explicit Hilbert, PVM, domain and adjoint conventions used by the representation definition; their unrelated transitive mathematical dependencies were not re-audited. No empirical observation or measurement claim occurs in this batch. No uneditable defect in an assigned item or page remains. The routing metadata discrepancy above remains outside this reader's content write scope.
