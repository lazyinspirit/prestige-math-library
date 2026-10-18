# Batch 21 — Quantum Information Measures

Run: `non-ml-math-remaining-81-2026-10-18`  
Owner: beta · batch: `21` · assigned pair: `quantum-information-measures`  
Batch dependency level: `1` · prerequisite batch: `4`  
Scheduling input: `7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903`

## Authority, scope, and current run state

The assigned A/B pair is the order-2534/2535 `information-theory` pair in `research/plan-spec.json`. Its exact page prerequisites are `finite-alphabet-entropy-and-divergence` and `trace-distance-fidelity-and-information-limits`; the B page requires the A page. The current batch dependency input places Batch 21 at level 1 after Batch 4.

I read the binding owner direction, assigned task, repository schema/workflow instructions, the active plan, and the current batch dependency input. No dedicated pair-specific design section was found. The track-level IT13 and IT20 paragraphs in `research/plan-information-theory-track.md` were read in full; they are roadmap entries, not a detailed pair design. The 81-item inventory includes 21 A items and four B examples/counterexamples, all kept as draft carriers. No published item, shared plan, engine state, or verdict was edited.

The live `.autopilot` status still reports the run as `running` at `1-scaffold`, with nothing in flight. Its blocker is the duplicate item `lem-it-quantum-relative-entropy-support-regularization` in Batches 21 and 22. The matching `git log` query returned no relevant commits. I did not consult any `RESUME.md` file. An explicit `step1-decisions record` attempt for the duplicated item failed before writing with `Duplicate item lem-it-quantum-relative-entropy-support-regularization`; no `--owner` option was used and no readiness record was written.

## Plan and design conflicts

- Current `plan-spec.json` IT13 requires finite entropy and support-sensitive QRE definitions, entropy identities, Holevo measurement bounds, and channel data processing. The authored A page contains those finite claims and explicitly excludes strong subadditivity and CMI nonnegativity.
- The track-level IT13 row (line 125 onward) describes entropy identities but leaves DPI to IT20. IT20 then calls for QRE DPI and Holevo measurement bounds. The archived `research/information-theory-planning/prose-scaffold.md` IT13 summary likewise omits DPI and the measurement bound and leaves those topics for IT20. These older summaries conflict with the controlling current IT13 plan-spec row; the current plan-spec scope was followed.
- The current plan-spec IT20 summary also asks for QRE DPI and Holevo bounds, while Batch 22's manifest duplicates three Batch 21 item IDs: `lem-it-quantum-relative-entropy-support-regularization`, `lem-it-quantum-relative-entropy-isometric-invariance`, and `thm-it-holevo-measurement-bound`. The active run blocker names the first duplicate. The current page order and IT13 plan-spec support Batch 21 as the canonical earlier owner of these shared proof suppliers and claims; the owner must remove/rehome the Batch 22 duplicates and make IT20 consume the Batch 21 interfaces. This is a cross-batch ownership change, so it is recorded for the owner rather than edited here.
- The task's design field is `none found`. The current track roadmap is recorded above as plan context, not treated as a separate pair design. The current plan controls where that roadmap overlaps.

## Inventory and dependency levels

The A page has 21 carriers; the B page has four. Levels were recomputed from the current item `deps` using only in-batch suppliers: zero with no in-run supplier, otherwise one plus the maximum supplier level. The scoped graph has 25 items, no cycle, no level errors, and maximum level 6. The manifest `deps` match the item frontmatter.

| Item level | Assigned items |
|---:|---|
| 0 | `def-it-von-neumann-entropy`; `lem-it-partial-traces-of-a-state-are-states`; `lem-it-finite-cq-block-sum-is-a-state`; `lem-it-inverse-compression-resolvent`; `lem-it-finite-classical-kl-nonnegative-equality`; `lem-it-finite-povm-measurement-channel` |
| 1 | `def-it-finite-dimensional-quantum-relative-entropy`; `def-it-finite-quantum-information-measures`; `lem-it-operator-jensen-negative-log`; `ex-it-qubit-von-neumann-entropy` |
| 2 | `def-it-classical-quantum-state-and-holevo-information`; `lem-it-quantum-entropy-support-and-finiteness`; `lem-it-relative-modular-representation`; `lem-it-quantum-relative-entropy-support-regularization`; `lem-it-quantum-relative-entropy-isometric-invariance`; `thm-it-finite-quantum-conditional-mutual-information-identities`; `cex-it-non-full-support-quantum-kl-is-infinite`; `ex-it-bell-pair-negative-conditional-entropy` |
| 3 | `thm-it-quantum-relative-entropy-joint-convexity`; `thm-it-quantum-entropy-identities`; `ex-it-classical-ensemble-holevo-equality` |
| 4 | `thm-it-quantum-relative-entropy-partial-trace-data-processing` |
| 5 | `thm-it-quantum-relative-entropy-channel-data-processing` |
| 6 | `thm-it-quantum-relative-entropy-nonnegative-equality`; `thm-it-holevo-measurement-bound` |

The 29 unique direct external item dependencies are all present and currently published: `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `cor-mean-value-theorem`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-kernel-and-image-of-a-linear-map`, `def-natural-logarithm`, `def-non-negative-and-positive-operator`, `def-qc-density-operator`, `def-qc-first-factor-partial-trace`, `def-qc-kraus-representation`, `def-qc-partial-trace`, `def-qc-povm-and-outcome-law`, `def-qc-quantum-channel`, `def-qc-register-and-computational-basis`, `def-qc-tensor-register-and-permutation`, `def-real-and-complex-inner-product-space`, `def-trace-of-an-endomorphism`, `lem-natural-logarithm-bounded-by-argument`, `prop-trace-is-linear`, `thm-logarithm-derivative-and-integral`, `thm-natural-logarithm-laws`, `thm-non-negative-operator-characterisations`, `thm-non-negative-square-root-exists-and-is-unique`, `thm-qc-kraus-choi-equivalence`, `thm-qc-partial-trace-characterization-and-basis-independence`, `thm-qc-partial-trace-positive-and-trace-preserving`, `thm-qc-povm-probabilities-normalize`, `thm-qc-trace-preserving-kraus-normalization`, `thm-qc-wire-permutation-is-unitary`, and `thm-trace-of-ab-equals-trace-of-ba`.

I read the actual direct supplier statements and proofs used by the local arguments, including the root linear-first convention, trace/adjoint identities, spectral and square-root results, Kraus/Choi normalization, partial-trace formulas, POVM outcome law, and logarithm/mean-value results. The recursive dependency closure of those direct suppliers contains 910 present, published IDs and no missing IDs. That closure count is recorded as graph evidence; it is not a claim that all 910 transitive proofs were independently reread in this pass. The local items cite exact direct supplier excerpts in the proof contracts and supply their own complete derivations.

## Cross-batch page interface

The current Batch 4 manifest now contains 14 A-page items and three B-page items; `library/information-theory/finite-alphabet-entropy-and-divergence.md` is currently draft. I inspected that page and the actual relevant draft bodies/proofs `def-it-information-units-and-logarithm-base`, `lem-it-finite-log-sum-inequality`, and `thm-it-finite-kl-nonnegative-equality`. They state the natural-log/nats convention and the finite support-aware KL interface. Batch 21 proves its own finite classical KL equality lemma, so no Batch 4 item is imported as an unproved proof premise; the page-level prerequisite remains declared. This is interface evidence only and does not accept the Batch 4 draft.

The second required page, `trace-distance-fidelity-and-information-limits`, is currently published. It is recorded as required context; no trace-distance or fidelity inequality is used to prove QRE data processing. The exact Batch 4 page edge is in `batch-21.cross-batch-dependencies.json`.

## Source reading and disposition

Two independent complete full-text treatments were inspected:

- Watrous, *The Theory of Quantum Information*: Ch. 2 §§2.1.2–2.2.2; Ch. 5 §§5.2.1–5.2.3 including the full Theorem 5.35 proof; and §5.3.3. The author-hosted complete 598-page PDF was fetched and text-extracted. It uses base-2 logarithms; local items use natural-log nats.
- Wilde, *From Classical to Quantum Shannon Theory*, arXiv:1106.1445v8: Ch. 11 §§11.1, 11.7, 11.8, and 11.9.2, and the complete Ch. 12 §12.5 recoverability proof. The complete 774-page PDF and text extraction were inspected. Wilde states DPI in Ch. 11 and defers its proof; the local proof is independent.

`batch-21.coverage.json` records 30 harvested results with explicit dispositions across both pages and sources. `batch-21.source-evidence.json` records full locators, local cache paths, hashes, retrieval metadata, and the current required-page interfaces. `node tools/source-fetch-check.mjs --coverage research/non-ml-math-remaining-81-2026-10-18-batch-21.source-coverage.json --stamp` passed: 2/2 sources fetch-verified, 0 newly stamped, 2/2 resolved. No retrieval failed, no source was dropped, and no `source_resolution` record is required.

## Proof and evidence status

There are 21 proof-bearing items, 56 numbered argument steps, and 125 exact supplier citations in `batch-21.proof-contracts.json`; strict proof-contract validation passed with zero errors and warnings. Definitions are not included in the proof-contract scope. The contracts record the actual step inputs, all eight boundary dispositions, no choice-axiom uses, and the directly applicable finite example checks. These records are draft evidence, not independent approval.

The batch-21 manifest and local item files remain draft. Step 1 readiness records could not be written because `step1-decisions.mjs` cannot load the active run snapshot while Batch 22 duplicates the three IDs listed above. The owner must reconcile those item placements first; do not treat the missing records as ready status. The duplicate directly affects the support-regularization/isometric-invariance suppliers and the joint-convexity → partial-trace DPI → channel DPI chain, as well as the duplicated Holevo-bound theorem and its downstream equality/bound claims. The remaining item decisions also cannot be recorded while the run-wide snapshot is invalid.

## Scoped checks

- Scoped item dependency levels: 25 items, zero errors/cycles, maximum level 6; frontmatter dependency and level fields match the Batch 21 manifest.
- Proof layout on all 25 assigned item files: 25 items, 56 steps, zero defects.
- Scoped phase precheck: 25 files, 21 proof-bearing items checked, zero failures.
- Scoped renderer check on 25 items and two pages: 27 files, zero errors/warnings.
- Scoped content policy: 25 items, zero errors/warnings.
- Focused `depcheck`: zero errors and three `multi-home` warnings, exactly the Batch 21/22 duplicate IDs listed above.
- Source coverage checklist: 2 pages, 30 harvested results, zero errors/warnings.
- Strict proof contracts: 21/21 proof-bearing items, 56 steps, 125 exact citations, zero errors/warnings.
- Source fetch/stamp: 2/2 full-text sources verified and resolved, zero new stamps.
- `step1-decisions record` for the duplicated support-regularization item and `step1-decisions check` both stop before writing/inspection with `Duplicate item lem-it-quantum-relative-entropy-support-regularization`. No Step 1 record was written; the owner must reconcile the duplicate before any final item decision can be recorded.


## Post-drain owner integration (2026-10-17)

After both genuine successful unaborted native attempt1 completions, the canonical batch21 ownership of support regularization, isometric invariance, joint convexity and the Holevo measurement bound is retained; batch22 consumes these suppliers. Joint convexity now explicitly permits zero weights with those terms omitted and retains its already-proved trivial zero-dimensional case. The Holevo proof average-divergence trace identity is corrected to sum of branch logarithmic traces minus the average-state logarithmic trace, equal to chi; its statement is unchanged. The native author had already corrected the extended-real-order wording before integration. Original handoff notes/results are preserved in `research/non-ml-math-remaining-81-2026-10-18-owner-qre-duplicate/actual-integration-20261017T155628Z/before/`. Current focused checks and hashes are separate evidence; no native readiness or acceptance is supplied here.
