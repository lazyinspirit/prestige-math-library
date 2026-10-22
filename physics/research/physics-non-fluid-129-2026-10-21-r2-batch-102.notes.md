# Batch 102 notes — Lieb–Robinson locality and gapped spectral transport

Run: `physics-non-fluid-129-2026-10-21-r2`  
Pair: `qsmx-lieb-robinson-spectral-flow` / `qsmx-lieb-robinson-spectral-flow-examples`  
Design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-lieb-robinson-spectral-flow`

## Plan and design reconciliation

The assigned plan and current `plan-spec.json` agree on the A/B page IDs, title, category, physics library, A-page order 901, companion, and required pages `qsm-finite-range-spin-dynamics` and `qsmx-operator-algebra-prerequisites`. The pre-authoring plan has empty item arrays; the design inventory specifies four A-page claims (`def-qsmx-summable-interaction-norm`, `thm-qsmx-weighted-lieb-robinson`, `lem-qsmx-filtered-spectral-generator`, `thm-qsmx-gapped-spectral-flow`) and the B-page counterexample `cex-qsmx-gap-not-automatic`. The batch manifest contains those five items plus four local prerequisite items proved below. This is the expected proof-completion expansion, not a change to page identity or order.

The design inventory lists `lem-qsm-finite-range-commutator-path-bound` as a premise of the weighted Lieb–Robinson theorem. Its inspected published statement assumes a finite-range interaction with parameters `M,R,κ` and yields an exponential distance bound in terms of `dist(X,Y)`. It does not establish the claimed pair-weighted estimate for general `F_a` or `F_ρ` interactions. The theorem therefore proves its weighted estimate from the interaction norm and the local convolution lemma; the unsupported direct dependency was removed. The published finite-range commutator result remains unchanged and is not asserted as a proof of this weighted statement.

The title includes “clustering”, while the complete design section and item inventory contain no clustering theorem or item. No clustering conclusion is stated or proved by this batch. Owner escalation: either add a separately reviewed ground-state clustering result or revise the page title/scope. A proposed A-page supplier is `thm-qsmx-gapped-ground-state-clustering`, placed after the weighted Lieb–Robinson theorem and before spectral-flow transport, with explicit infinite-volume ground-state, uniqueness/multiplicity, and gap hypotheses and a complete Hastings–Koma-type proof. The current five inventoried claims remain fully authored independently of this page-title gap.

A further hidden regularity issue was made explicit: a uniform distance between selected and unselected eigenvalues does not by itself prevent a moving interval from changing membership discontinuously. The local interaction definition now distinguishes a locally fixed spectral cluster, and the filtered-generator lemma requires that condition. The transport theorem specializes to fixed ranks `r_n` of the lowest finite-volume eigenvalues with a uniform gap after each rank. This supplies the Riesz-contour hypothesis actually used in the proof; no smoothness of an unspecified moving interval is inferred.

## Local prerequisite items and dependency levels

All local definitions and suppliers were written before their consumers. `dependency_level` is the maximum assigned-batch supplier level plus one (or zero with no in-batch supplier):

- Level 0: `def-qsmx-summable-interaction-norm`, `def-qsmx-local-conditional-expectation`.
- Level 1: `lem-qsmx-lattice-weight-convolution`, `lem-qsmx-local-expectation-locality`, `lem-qsmx-filtered-spectral-generator`, `cex-qsmx-gap-not-automatic`.
- Level 2: `thm-qsmx-weighted-lieb-robinson`.
- Level 3: `lem-qsmx-filtered-generator-locality`.
- Level 4: `thm-qsmx-gapped-spectral-flow`.

The local expectation lemma proves its normalized-trace twirl, contraction extension, and commutator error bound. The filtered-generator-locality lemma proves the shell decomposition, arbitrary-polynomial shell tails, uniform `F_ρ` bounds for every `ρ>d`, and convergence of each fixed coefficient. The transport theorem proves finite-volume projection/state transport, full and inverse flow convergence, the thermodynamic automorphism and its commutator bound, and both inclusions of the limiting band-state set equality.

## Prerequisite interface and readiness evidence

The published `qsm-finite-range-spin-dynamics` page and its actual complete theorem statement/proof were inspected. We use its finite-volume dynamics convergence only under its Countable Choice, finite-matrix C*-identity, finite-range norm, and exhaustion hypotheses; these are carried explicitly through the local assumptions. The finite-range commutator-path supplier was also read in full and is not used as the weighted estimate, for the interface reason above. Its publication status is not being treated as a substitute for matching hypotheses.

The other required page, `qsmx-operator-algebra-prerequisites`, is assigned to batch 99 of this run. `loadStep1Record` and `step1Decision` were run on its current carriers: all eight A-page items have current closed readiness records. The page edge is therefore `verified` in the cross-batch input. This scoped record checks current page availability and authoring readiness, not independent mathematical acceptance; no theorem from that page is used as an uninspected lemma in this batch's proofs.

The `lem-qsm-spin-state-compactness` supplier is published and its complete proof was inspected. Its exact Countable Choice, finite-dimensional density, consistent-state, and norm-completion hypotheses are carried through the main theorem’s facts. A missing current-run Step 1 record for a published out-of-run supplier is not treated as a logical gap.

## Source harvest

Two independent full-text treatments were read for the A page: the complete BMNS spectral-flow article and Naaijkens’s complete 157-page lecture notes. The source coverage file lists URLs, exact section/result locators, supported local items, limitations, and a disposition for each harvested result. The B page has two source entries; the Naaijkens Lieb–Robinson result is recorded out of scope for the gap counterexample, whose one-spin calculation is proved directly. Both PDFs were fetched in full and inspected; no retrieval failed, so no retry or alternative-proof `source_resolution` record was needed. Local filenames, byte counts, hashes, and inspected proof extents are in `research/physics-non-fluid-129-2026-10-21-r2-batch-102-sources/source-reading.md`.

## Local proof record

See `#locally-proved-prerequisites` for the scope of the added local items and exact dependency placement. Proof contracts are generated from the final numbered arguments and include exact supplier-section excerpts, step inputs, uses, and boundary worksheets. TikZ in the main theorem records the finite-volume invariant-subspace square; the proof is independent of the diagram.

## Scoped checks and final decisions

Final batch-scoped checks after all item edits:

- `dependencyLevels` on the batch-102 manifest: 9 items, no errors; levels are 0, 1, 2, 3, and 4 as listed above.
- `depcheck --items-file`: 9 items and both pages, 0 errors and 0 warnings across the 1,790-item dependency closure.
- `content-policy` on the batch manifest: 9 items, 0 errors and 0 warnings.
- `precheck.mts`: 7 proof-bearing items checked, all pass; the two definitions are not applicable.
- `rendercheck`: 11 explicitly scoped item/page files pass KaTeX, YAML, and link checks.
- `proof-layout`: 9 explicitly changed items, 21 proof steps, 0 defects.
- Strict proof contracts: all 7 proof-bearing items checked, 0 errors and 0 warnings.
- Coverage checklist: 2 pages, 12 harvested source results, 0 errors and 0 warnings. `source-fetch-check` reports all 4 coverage source entries fetch-verified; the initial `--stamp` run newly stamped all 4.
- A batch-scoped read-only cross-batch collection reports the sole batch-102 cross-batch edge—A page to batch-99 `qsmx-operator-algebra-prerequisites`—verified, with no orphaned reviews. The eight supplier item readiness rows are current. The repository-wide collector cannot finish because it encounters malformed YAML in the unrelated `items/lem-nrqmx-degree-area-formula.md` (line 34, unquoted colon in a source title); this batch's manifest and item frontmatter pass their scoped checks.
- All 9 assigned item Step 1 records are `ready` and current. These records close local authoring prerequisites and do not certify independent mathematical acceptance.

Two run-wide checks remain blocked by unrelated pre-authoring inventories and were not edited here. The full-run dependency-level scan sees 258 pages and 590 items, with 84 empty scaffold inventories outside batch 102; the batch-102 manifest itself has no level errors. `proof-contract-coverage --run` stops at the unrelated empty planned inventory `qsmx-topological-lattice`; the strict batch-102 contracts pass. These shared plans and other batches remain with their owners.

The page-title clustering gap described above remains an owner scope decision. No unproved clustering result is claimed, and it does not invalidate readiness of the five design-inventoried claims plus their local proof prerequisites.

## Locally proved prerequisites

The added local A-page prerequisites are:

- `lem-qsmx-lattice-weight-convolution`: shell-count summability and finite convolution constants for `F_a` and every `F_ρ`, `ρ>d`.
- `def-qsmx-local-conditional-expectation` and `lem-qsmx-local-expectation-locality`: normalized partial trace, Weyl twirl, contractive extension, and a supportwise commutator error estimate.
- `lem-qsmx-filtered-generator-locality`: finite-volume telescoping shells for the filtered spectral generator, rapid-filter tail estimates, uniform summable interaction norms, and fixed-support coefficient limits.
