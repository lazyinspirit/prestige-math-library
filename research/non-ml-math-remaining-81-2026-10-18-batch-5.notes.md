# Batch 5 authoring notes — Measure-Theoretic Information and Conditioning

## Scope and plan reconciliation

- This batch owns only the A/B pair `measure-theoretic-information-and-conditioning`; its output carriers are the A page, examples page, 21 assigned item drafts, and batch-5 evidence.
- No pair-specific design section exists, matching the task's “design none found” declaration. IT02 in `research/plan-information-theory-track.md` controls the scope and proof route.
- The IT02 row in `research/plan-spec.json` is an abridged summary: it explicitly names equality results, while the full track prose explicitly adds finite-X conditional entropy given a general standard-Borel observation and the no-DPI-after-coarsening caution. These are complementary scope details, not contradictory routes. The local equality-conditions theorem, general-observation entropy definition, and coarsening counterexample retain all three claims.
- No other design/plan conflict was found. The caution against subtracting infinities and against asserting DPI after coarsening the conditioning variable is preserved; the examples page includes a strict counterexample to the latter claim.

## Inventory and dependency order

The manifest contains 17 A-page items and 4 B-page examples (21 total), below the 100-item A-page cap. Direct dependencies and exact item statements are in `research/non-ml-math-remaining-81-2026-10-18-batch-5.pages.json`. Item levels were recomputed against the current batch-4 and batch-5 manifests:

- Level 0: `lem-kl-invariant-under-measurable-bijections`, `lem-product-of-two-probability-kernels`.
- Level 1: `def-measure-theoretic-mutual-information`, `lem-same-marginal-conditional-product-law-well-defined`, `thm-general-kl-variational-and-partition-formulas`.
- Level 2: `def-finite-alphabet-conditional-entropy-given-observation`, `def-law-entropy-as-self-mutual-information`, `def-standard-borel-conditional-mutual-information`, `thm-conditional-kl-is-measurable`, `ex-finite-deterministic-copy-has-mutual-information-equal-to-entropy`.
- Level 3: `def-conditional-kl-for-probability-kernels`, `rem-general-law-entropy-versus-differential-entropy`, `thm-finite-alphabet-conditional-entropy-version-and-chain-rule`, `thm-law-entropy-countable-support-characterization`, `thm-mutual-information-and-conditional-mutual-information-equality-conditions`, `thm-mutual-information-and-conditional-mutual-information-quantization`, `ex-coarsening-conditioning-can-increase-conditional-mutual-information`.
- Level 4: `thm-general-kl-chain-rule-for-standard-borel-kernels`, `ex-null-conditional-kernel-version-does-not-change-information`, `ex-uniform-law-has-infinite-self-information-entropy`.
- Level 5: `thm-mutual-information-chain-rule`.

The run-level scheduling input places batch 5 at batch dependency level 1 with batch 4 as its prerequisite. The scoped item-level check across batches 4–5 passed for 38 items (maximum level 7); batch-5 labels above are item levels, not the batch schedule level.

## Prerequisite audit and axiom use

- Batch 4's current manifest supplies the exact finite interfaces used here: `def-it-information-units-and-logarithm-base`, `def-it-finite-conditional-entropy`, `def-it-finite-mutual-information`, `def-it-finite-conditional-mutual-information`, and `lem-it-finite-kl-agrees-with-measurable-kl`. Their current bodies and relevant proofs were read, along with the bridge's finite-space representation, finite expectation, absolute-continuity, RN, and general-KL suppliers. The finite KL bridge explicitly handles support failure and constructs the finite RN density; its only AC use is through the general measurable-KL interface. Its `verification.precheck` is currently `pending`; the body is present and was checked against the exact use here. No precheck, acceptance, or publication is inferred by this note.
- The prerequisite page `conditional-distributions-and-regular-conditional-probability` is published. The used supplier bodies were inspected: `def-measure-kernel-and-probability-kernel`, `def-regular-conditional-distribution`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, `lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions`, `def-conditional-law-given-a-random-element`, `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`, and `thm-disintegration-of-a-joint-law-on-standard-borel-spaces`.
- AC is declared wherever the RN/KL or standard-Borel regular-conditional-law interface requires it. AC implies countable choice for the Lebesgue box formula used in the uniform-law examples. The kernel-product construction itself is pointwise and choice-free. Conditional and general KL identities are written as extended nonnegative sums/integrals; no proof subtracts infinities.
- No unresolved mathematical gap, cycle, or page-capacity issue remains in this pair's authored items. Batch-4's page remains draft, and the exact cross-batch interfaces and their current state are recorded in `research/non-ml-math-remaining-81-2026-10-18-batch-5.cross-batch-dependencies.json`.

## Sources and retrieval

The coverage file records full-text URLs, locators, supported item IDs, and an `included` disposition for every harvested result. Gray and Polyanskiy–Wu are independent book/full-lecture treatments for the A page; Duchi's complete lecture notes provide a third treatment for MI and variational KL. The relevant full text inspected was:

- Gray, *Entropy and Information Theory*: Chapter 2 §2.5 and Chapter 5 §§5.2–5.5.
- Polyanskiy–Wu, MIT 6.441 full Chapter 2 and full Chapter 3 §3.4 PDFs.
- Duchi, *Lecture Notes on Statistics and Information Theory*: Chapter 2 §2.1 and Chapter 5 §5.1.

`node tools/source-fetch-check.mjs --coverage research/non-ml-math-remaining-81-2026-10-18-batch-5.coverage.json --stamp` reported 7/7 source rows fetch-verified, 7 newly stamped, and 0 drops. There were no retrieval failures or recovery retries, so no `source_resolution` record was needed. The stamps include Gray (1,419,631 bytes; SHA-256 prefix `77f5f22748a080c1`), MIT Chapter 2 (622,913; `97c6fcae4dd8f6a0`), MIT Chapter 3 (620,149; `cf3244a38f75dc25`), and Duchi (2,877,746; `ac8faa15edfd6732`). The B page reuses three of these inspected sources.

## Scoped checks and run blockers

- `content-policy.mjs` on the batch-5 manifest: 21 items, 0 errors, 0 warnings.
- `manifest-deps.mjs` on the batch-5 manifest: 21 items, 0 missing dependency arrays, 0 errors.
- Scoped item dependency levels across batches 4–5: 38 items, 0 errors.
- `proof-contract.mjs --strict`: 21/21 items checked, 0 errors, 0 warnings; each proof step is mapped with its current claim and inputs, and every fact citation has an exact supplier excerpt.
- Scoped precheck: 15 proof-bearing items passed; 6 definitions/remark were not applicable; 0 failures after adopting the checker’s canonical phase stratification.
- `proof-layout.mjs` on all 21 changed items: 48 steps, 0 defects.
- `rendercheck.mjs` on 21 item carriers and both page carriers: 23 files, no math or YAML rendering defects.
- Full-run `item-dependency-levels.mjs check` cannot pass on the unrelated whole-run scaffold: 104 empty inventories, 3 duplicate item IDs (`lem-it-quantum-relative-entropy-support-regularization`, `lem-it-quantum-relative-entropy-isometric-invariance`, `thm-it-holevo-measurement-bound`), and 7 stale level labels outside batch 5. The batches 4–5 scoped check passes.
- Whole-run `batch-dependency-levels.mjs check`, `frontier-dependency-ledger.collect`, and `step1-decisions.mjs check` stop on the duplicate item `lem-it-quantum-relative-entropy-support-regularization` declared in two other pages. A scoped `step1-decisions.mjs record` attempt for the first batch-5 item also stops before writing for that same reason. No readiness records were created, no `--owner` override was used, and no escalation was overwritten. The batch-5 cross-batch sidecar itself contains 14 unique evidence-backed rows (one page edge and 13 item edges); merging it into the run-level ledger is blocked by the same ownership collision.
- Recomputed autopilot status remains at `1-scaffold` (16/81 covered, nothing in flight) with the duplicate-item prerequisite error. No autopilot state, shared plan, published item, verdict, or other batch carrier was edited.

No independent approval or whole-run closure is claimed by the local completion evidence.
