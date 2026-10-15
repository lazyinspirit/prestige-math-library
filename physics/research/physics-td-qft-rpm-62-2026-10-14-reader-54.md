# Step 3a Reader Report — Batch 54

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: independent reader  
Batch: `54`

## Scope and opened inventory

I opened both assigned pages and all six assigned items, then read the direct mathematical and physical suppliers needed to check their definitions, calculations, and assumptions.

Pages:

- `library/quantum-field-theory/qft-x02.md` — verdict: pass after the assigned item repairs. Its summary describes the formal coefficient map and preserves the limits on continuum and empirical claims.
- `library/quantum-field-theory/qft-x02-examples.md` — verdict: pass. Its summary correctly identifies the massless specialization, the separate exponential-lifetime assumption, and the limited Dirac coefficient comparison.

Assigned items, reviewed in dependency order:

- `post-qft-example-formal-observable-map`
- `pthm-qft-example-formal-scattering-decay`
- `pthm-qft-example-dirac-magnetic-benchmark`
- `ex-qft-x04`
- `ex-qft-x05`
- `ex-qft-x09`

Mathematical suppliers opened for the assigned claims included `def-countable-choice`, `def-qft-example-data`, `def-qft-example-observable-types`, `def-qft-framework-units`, `def-qft-dirac-projections`, `def-qft-qed-gauge-data`, `def-qft-qed-physical-gauge-quantities`, `def-qft-example-two-body-phase-space-data`, `lem-qft-example-two-body-phase-space`, `lem-qft-example-spin-trace-completeness`, `cor-qft-example-scalar-tree-coefficients`, and `lem-qft-example-dirac-pauli-square`. I also opened the direct current QFT suppliers `def-qft-qed-finite-graph-gauge-data`, `def-qft-qed-formal-ring`, `post-qft-formal-qed-coefficients`, `lem-qft-qed-tree-ward`, `lem-qft-free-time-ordered-kernel`, and `post-qft-qed-local-coupling`.

To define the lifetime example precisely, I opened `def-measure`, `def-measure-space`, `def-probability-measure`, `def-borel-sigma-algebra`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `def-borel-and-lebesgue-measurable-function-on-rn`, and `thm-borel-sets-are-lebesgue-measurable`.

## Source review

- David Tong, *Quantum Field Theory*, Chapter 3 §§3.6.2–3.6.3: decay-rate and cross-section discussion; Chapter 4 §4.7: plane-wave spinors; Chapter 6 §§6.3.1 and 6.6: local Dirac coupling and the electron–positron to muon–antimuon channel. The local item proofs supply the exact finite calculations and hypotheses used here.
- Mark Srednicki, *Quantum Field Theory*, §11, printed pp. 93–99: two-body phase-space and flux context; §64, printed pp. 383–385: electron magnetic-moment definition and radiative correction context.
- Timo Weigand, *Quantum Field Theory I and II*, §5.8.2, printed p. 153: the nonrelativistic magnetic-moment coupling and the distinction between the Dirac value and radiative correction. I corrected the assigned Dirac theorem’s reference locator from §5.1 to §5.8.2.
- X. Fan et al., “Measurement of the Electron Magnetic Moment,” arXiv:2209.13084v2: I checked the report title, abstract, apparatus description, and reported uncertainty discussion. The assigned items make no empirical estimate or measurement claim from this report.

The sources provide context; the assigned proofs are conditional model deductions. No reported measurement was used as a premise, and no agreement with experiment was treated as proof.

## Repairs and evidence

1. `post-qft-example-formal-observable-map`: added its explicit `AC_omega` hypothesis and direct mathematical dependency/role. The cited phase-space supplier states this assumption; the map’s use now carries it. I reviewed its direct consumers: `pthm-qft-example-formal-scattering-decay` already states `AC_omega`, while `ex-qft-x04` and `ex-qft-x05` now state or inherit it explicitly.

2. `pthm-qft-example-dirac-magnetic-benchmark`: added its existing Countable Choice dependency as an explicit hypothesis. Replaced the universal claim that every smooth spinor field satisfies the Euler–Lagrange equation with an explicit compactly supported first-variation condition. The equation is now conditional on that condition; the spatial core square and formal magnetic coefficient are stated independently of a stationary-field solution. The direct consumer `ex-qft-x09` was checked and now carries the theorem’s assumptions.

3. `ex-qft-x04`: made explicit that the massless specialization uses the theorem’s Countable Choice hypothesis.

4. `ex-qft-x05`: stated Countable Choice explicitly and defined the lifetime setup as a measurable map into the Borel space, its pushforward law, and an equality of measures for the separately assumed exponential model. Added the mathematical dependencies and roles for the probability space, Borel sigma-algebra, Lebesgue measure, and the Borel-to-Lebesgue measurability result. The exponential law remains a model assumption, not a consequence of the formal rate coefficient.

5. `ex-qft-x09`: made the theorem’s Countable Choice and adopted-action hypotheses explicit and defined `z-hat` as `(0,0,1)`.

6. Corrected the Weigand locator in `pthm-qft-example-dirac-magnetic-benchmark` to §5.8.2, where the cited author-hosted notes discuss the anomalous magnetic moment and identify the Dirac value before radiative corrections.

I updated `research/physics-td-qft-rpm-62-2026-10-14-batch-54.proof-contracts.json`: refreshed current supplier quotations, updated the affected derivation and boundary records, and added exact excerpts for the lifetime probability/measure suppliers. None of the edited item files had a `verification.judge` record to remove.

## Uneditable in-run dependency defects

- `cor-qft-example-scalar-tree-coefficients`, owned by batch 46: its Statement omits `AC_omega`, while Proof Step 1.1 invokes `[F1]` from `lem-qft-example-two-body-phase-space`, whose Statement explicitly assumes Countable Choice. The corollary makes an unconditional claim without a choice-free local derivation. I did not edit this other-batch supplier. Current raw SHA-256: `0503345c81dd3c26b1e0dd4408f2503b1a98dc27994bf65ae34a31b4afc33635`. Assigned consumer used for routing: `ex-qft-x05`.

- `lem-qft-example-dirac-pauli-square`, owned by batch 46: its Statement omits `AC_omega`, but Proof Step 2.1 uses `[F1]` from `lem-qft-example-spin-trace-completeness`, whose Statement explicitly retains that assumption. Step 2.1 does not derive the needed Pauli-block identity locally. The current Statement also contains a dangling clause (“Then, on `C`, Here …”) before the displayed identities. I did not edit this other-batch supplier. Current raw SHA-256: `a75447659a3fb2d2e22a1ed46654f859fc41b0bfcb8b4151e9f934e076c3cb63`. Assigned consumer used for routing: `pthm-qft-example-dirac-magnetic-benchmark`.

The Pauli-square item changed during this reader session. Its earlier unhashed bytes are not represented as current; the findings above concern the reopened current carrier and bind only its current hash.

## Checks

- `reflow.mts` and `precheck.mts` were run for all five changed items. Each reflow completed; each precheck passed. The postulate passed the nonproof-structure check.
- Focused `proof-contract.mjs --strict` checked the five proof-bearing assigned items: zero errors and zero warnings.
- Focused `depcheck.mjs` checked the five changed items and their closure: zero errors and zero warnings across 2,159 dependency items and 396 pages.
- Final batched `proof-layout.mjs` checked the five changed paths: 11 numbered steps, zero defects. The default renderer invocation initially failed to resolve the application’s `@/` aliases; I reran it with a temporary resolver under `/private/tmp`. No application checkout files were edited.

## Blocker and coverage limit

No batch-54-specific reader blocker remains. At 16:33 UTC the live status listed a separate `3a-split` blocker after batch 42 failed three times. By the final 16:38 UTC status that blocker was no longer listed; no writers were active. The current stage still awaits the batch-54 split artifact. I did not alter run state or work outside batch 54.

The focused dependency check reports a 2,159-item, 396-page transitive closure. I opened the direct suppliers and mathematical results used in the checked steps, but did not read every item in that full transitive closure. The broader `def-qft-dirac-projections` operator construction and its independent readiness are not certified by this review; the assigned theorem uses the explicitly stated finite matrix formulas conditionally.
