# Batch 1 authoring notes — Pointwise Extended-Real Function Products

Run `quantum-prerequisites-4-2026-10-15`; assigned A/B pair only.

## Inventory and dependencies

- A: `def-measurable-pointwise-extended-real-product`, `deps: [def-extended-reals]`, in-run `dependency_level: 0`.
- B: `ex-pointwise-extended-real-function-product-cases`, `deps: [def-measurable-pointwise-extended-real-product]`, in-run `dependency_level: 1`.
- The B example checks all four ordered zero-infinity pairs, all four sign outcomes for a nonzero infinite factor paired with a nonzero finite value, and two finite pairs. There are no cycles or in-run cross-pair suppliers. The A page remains within the 100-item cap.
- The A page retains the declared page prerequisite `limsup-and-subsequential-limits`; its item-level use is only `def-extended-reals`. The required page exists, contains that definition, and is earlier in the canonical plan.

## Plan and design reconciliation

- The design's original A contract takes measurable-function inputs and lists both `def-extended-reals` and `def-extended-real-valued-measurable-function`. The binding owner direction and its real-measure proposal refine this to all functions `X→Rbar`, only `def-extended-reals`, and no measurability claim. The carriers follow that controlling interface; the measurable-function definition was read but is not a logical dependency.
- The design gives the B order as `192.10999999999999`; `research/plan-spec.json` and the current canonical page rows give `192.2`. The manifest and B page use canonical order `192.2` without editing the shared plan.
- The design's earlier source locator for Axler Section 2B and Hunter Definition 3.3 is superseded by the corrected owner proposal and inspected source evidence: Axler Section 3A's convention immediately before Definition 3.2, and Hunter Section 3.2, especially its definedness discussion after Proposition 3.6. The definition does not attribute its total function-level operation to either source.
- The drift report accepted the declared page closures with no exact blockers. Its note that item-level validation was pending is addressed by this manifest and its scoped dependency calculation.

## Mathematical review and sources

- Read the complete `def-extended-reals` supplier. Its scalar product is partial exactly at zero paired with either infinity; on other infinite pairs it uses signs, and on finite pairs it is the real field product. The product item keeps this scalar operation unchanged and adds a separately typed function-level convention. The finite commutativity used in the symmetry check is inherited through the supplier's real-field dependencies; `def-complete-ordered-field`, `def-ordered-field`, `def-field`, `def-real-numbers`, `thm-reals-field`, and `def-real-order` were read to check that transitive interface. No distributivity or cancellation at infinity is used.
- Read `def-extended-real-valued-measurable-function` while reconciling the stale design; the controlling interface does not require measurable inputs. Read the target arithmetic-measurability proposal to confirm the intended `f⊙_Xg` and constant-function notation; its consumer is outside this batch and remains owner-owned.
- The relevant `research/quantum-planning-review/prerequisite-repairs.json` row for `thm-arithmetic-and-lattice-operations-preserve-measurability` was inspected. It confirms the intended supplier use and the need to retain the scalar sum's definedness condition; no consumer file was edited. The named `norms/` and `complex/` owner directories contain reports and archived `before/` sources but no `proposed/` supplier bodies or `source-evidence.json` in this checkout. Their reports were read; neither pair supplies a dependency of this batch, so this absence leaves no batch-1 claim blocked.
- Axler, *Measure, Integration and Real Analysis*, Section 3A, printed p. 74: inspected the complete surrounding S-partition/lower-Lebesgue-sum and nonnegative-integral context on pp. 74–75. Axler adopts `0·∞=∞·0=0` for that integration convention; this supports the motivation but not the full operation or any field laws.
- Hunter, *Measure Theory*, Section 3.2, printed pp. 34–36 (PDF pp. 38–40): inspected Definition 3.3 and Propositions 3.4–3.7. The extended-real product measurability discussion requires pointwise scalar products to be defined. That is recorded as a partial-product comparison, not as a proof of the new total operation.
- The owner proposal's complete PDFs and extracted text are retained under `research/quantum-build-60-2026-10-15-owner/real-measure/sources/`; the paired hashes and locators are in its `source-evidence.json`. This batch separately fetched and stamped both URLs: Axler PDF, 3,539,121 bytes / 426 pages / SHA-256 prefix `7a7ab07fb74f5394` at `2026-10-15T03:54:57.173Z`; Hunter PDF, 592,859 bytes / 93 pages / SHA-256 prefix `d620b11690dbdca4` at `2026-10-15T03:54:58.705Z`. The final `source-fetch-check` reports 2/2 fetch-verified and 0 unresolved sources.
- No axiom of choice is used. The pointwise value is determined by a finite case split. No supplier remains unresolved.

## Checks and handoff status

Final scoped results:

- `node tools/tsx-run.mjs tools/precheck.mts items/def-measurable-pointwise-extended-real-product.md items/ex-pointwise-extended-real-function-product-cases.md --json`: 2 checked, 0 failed; both items record `verification.precheck: pass`.
- `node tools/proof-layout.mjs` on the two explicit item paths: 2 items, 8 steps, 0 defects.
- `node tools/proof-contract.mjs research/quantum-prerequisites-4-2026-10-15-batch-1.proof-contracts.json --strict --items ... --json`: both contracts pass with no errors or warnings.
- `node tools/rendercheck.mjs` on both items and both page files: 4 checked, 0 errors, 0 warnings.
- `node tools/depcheck.mjs --items-file /tmp/quantum-prerequisites-4-2026-10-15-batch-1-items.json --json --quiet`: 0 errors and 0 warnings; the two selected item/page checks and their prerequisite cycles pass.
- `node tools/content-policy.mjs research/quantum-prerequisites-4-2026-10-15-batch-1.pages.json --json`: 2 scoped items, 0 errors, 0 warnings.
- Scoped `dependencyLevels` calculation: A item level 0 (`def-extended-reals` is external to this run), B example level 1 (A item is its in-run supplier). `node tools/item-dependency-levels.mjs check --run quantum-prerequisites-4-2026-10-15`: 18 items across 8 pages, maximum item level 4, pass.
- `node tools/batch-dependency-levels.mjs write --run quantum-prerequisites-4-2026-10-15` refreshed the derived cross-batch input after current batch manifests changed. The final `check` passes: 4 batches, maximum batch level 1; batch 1 remains level 0 with no prerequisite batch. The recorded input digest is `117a88a2d67e3c577b0fcc95f5aa537bae5c9ff42553cb01f98872f989ed83b2`.
- `node tools/step1-decisions.mjs record` marked both batch-1 items `ready`, with the examined direct dependencies and evidence. `step1-decisions.mjs check --run ...` reports 2 ready out of 18 and is not globally closed. The other 16 items still lack readiness records: batch 2 has `def-complex-norm-and-complex-normed-space`, `lem-complex-modulus-of-real-embedding-equals-real-absolute-value`, `lem-complex-norm-realification-is-a-real-norm`, `lem-complex-coordinate-l1-is-a-norm`, `def-complex-normed-subspace`, `def-equivalent-complex-norms`, and `ex-anisotropic-real-norm-on-c`; batch 3 has `thm-complex-coordinate-map-preserves-real-scalar-multiplication`, `def-complex-path-polygonal-length-and-rectifiability`, `thm-complex-coordinate-isometry-and-topology-transport`, `thm-complex-coordinate-map-preserves-real-total-differentiability`, `thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed`, `thm-complex-path-length-invariant-under-monotone-reparametrization`, and `ex-complex-coordinate-and-path-transport`; batch 4 has `lem-complex-normed-subspace-realifies-to-real-normed-subspace` and `ex-complex-line-realification-basis-in-c2`. These remain owned by their assigned pairs and were not edited here.

Two initial mechanical attempts were corrected before the final passing checks: precheck first requested dependency-ordered phase labels for the numbered proof steps, which were adopted together with matching contract labels; the first proof-contract JSON had unescaped `\in` characters, which were fixed. A mistaken `node tools/depcheck.mjs --help` invocation has no help mode and ran the repo-wide checker; it failed on unrelated legacy published-item audit records. It was not used as batch evidence; the manifest-scoped depcheck above passes. No source retrieval failed, so there is no `source_resolution` record or unresolved source escalation.

The owner-controlled live run state, shared plan, published consumer, verdicts, and other batches were not edited.
