# Batch 16 authoring notes

Run: `numerical-optimization-dynamics-2026-10-16` · pair: LIN-SPARSE · batch: 16.

## Controlling scope and conflicts

The controlling pair specification is LIN-SPARSE in `research/plan-numerical-linear-track.md` and its incorporated contract in `research/numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`, under the binding owner direction. The matching `plan-spec.json` row agrees with the plan's four promised areas and three examples; no plan/plan-spec conflict was found.

The LIN-SPARSE plan prose lists the structural graph, ordering, filled graph and elimination tree in this pair's scope. The exact incorporated audit and owner direction assign the canonical symmetric graph/order/fill interface to NA-03 (`sparse-matrix-models-and-kernel-costs`). Batch 16 therefore consumes the actual NA-03 graph definition and adds only local Hermitian support, column-pattern/reach, path and grid-front results. It does not duplicate NA-03's graph or Schur-support theorem. The supplied graph is zero-based and real-symmetric over a field; the local adapter and proof explicitly bridge to complex Hermitian matrices.

The dispatch dependency input is batch 16, level 1, requiring batches 1 and 2, with scheduling-input SHA-256 `ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d`. The local item graph is acyclic. The final batch manifest lists each item with its exact `deps` and recomputed item level.

## Inventory and item levels

The A page has 16 items; the B page has 3 examples. Levels are computed as zero plus no in-run supplier, otherwise one plus the maximum level of actual in-run suppliers. Batch 1 and batch 2 supplier items have level 0 or 1 as declared in their manifests.

| Level | A-page items |
|---:|---|
| 1 | `alg-threshold-partial-pivot-sparse-lu`; `def-hermitian-structural-graph-adapter`; `alg-nested-dissection-ordering-on-regular-grids`; `lem-filled-edge-path-characterisation` |
| 2 | `thm-threshold-sparse-lu-residual-with-growth`; `def-elimination-tree-and-column-reach`; `lem-nested-dissection-fronts-are-boundary-limited`; `lem-hermitian-schur-support-is-contained-in-structural-fill`; `alg-symmetric-indefinite-block-ldl-star` |
| 3 | `lem-elimination-tree-reach-contains-each-filled-neighbor`; `alg-sparse-cholesky-with-invalid-pivot-status`; `thm-block-ldl-star-residual-with-actual-growth` |
| 4 | `thm-sparse-cholesky-structural-pattern-without-cancellation`; `alg-multifrontal-cholesky-and-sparse-triangular-solves` |
| 5 | `thm-multifrontal-elimination-equivalence-and-sparse-costs` |
| 6 | `thm-nested-dissection-grid-work-and-storage-bounds` |

The B-page levels are 1 (`ex-star-orderings-produce-different-sparse-fill`), 3 (`ex-nonsingular-indefinite-requires-two-by-two-pivot`), and 7 (`ex-two-dimensional-poisson-nested-dissection-cost`). The page cap is not approached.

Authoring began before the scaffold manifest inventory was populated and did not follow ascending item level chronologically. The final manifest and page front matter are now ordered by the recomputed levels, and every dependency and supplier body was checked before readiness disposition. This sequencing deviation is recorded rather than represented as if it had not occurred.

## Supplier inspection and mathematical decisions

I read the current bodies, not only the planned interfaces, of the batch-1 `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`, the batch-2 `def-symmetric-structural-elimination-graph-and-ordering` and `thm-filled-graph-contains-schur-complement-support`, plus the published Cholesky definition/existence theorem, permutation convention, triangular substitution definition/theorem, and real partial-pivot LU residual theorem.

- The batch-2 graph definition starts with vertices `0,…,n−1`, requires `A_ij=A_ji`, and at a pivot joins all distinct later neighbors. Its Schur theorem is over symmetric matrices, not complex Hermitian matrices. The local adapter forms a real `0/1` symmetric support matrix for a Hermitian input. The local Schur proof checks conjugate symmetry and the field nonzero-product implication directly, with the published complex-field theorem now listed as a direct supplier for the complex inverse and field hypotheses.
- `lem-filled-edge-path-characterisation` proves both directions by induction on the graph updates. `lem-nested-dissection-fronts-are-boundary-limited` uses that result and the explicit coordinate geometry to bound each pivot's column; no arbitrary separator theorem is used.
- Sparse Cholesky now states zero-based ordered positions explicitly and uses the batch-1 arithmetic model. Its pattern theorem separately proves the Schur-complement recurrence identity; equality of numerical and symbolic patterns is conditional on the stated no-cancellation numerators.
- The multifrontal proof establishes the subtree Schur invariant, shows that distinct child subtrees have no filled coupling, and counts assembly, update, factor-storage, and solve operations from the actual column sizes.
- Grid work/storage bounds are derived from the explicit `2^d` child count, separator size, proved front size, and depth sums. Final review caught that odd side lengths do not always halve exactly; the proof now uses $s_r=\lceil k/2^r\rceil$, bounds this by $2k/2^r$ through depth $R=\lceil\log_2 k\rceil$, and proves the $k=1$ one-pivot case separately. The theorem covers only the declared 2D/3D grid-subgraph patterns.
- Threshold sparse LU is scoped to real matrices because the batch-1 model fully specifies its real division operations. The proof bounds each update residual by `7u ρ M / θ`, the division residual by `u ρ M`, telescopes the row equations through row swaps, and obtains `||ΔA||∞ ≤ 8 n² u ρ M / θ`. The algorithm also uses the declared real operation model and range status.
- The symmetric-indefinite block LDL* definition is exact arithmetic with explicit permutation, 1×1/2×2 tests, symbolic block fill, and pivot failure. Its residual theorem is a complete conditional propagation result from local residual bounds `[A1]`. It does **not** derive those bounds from a concrete finite complex implementation. The batch-1 operation model has no general complex division primitive, and the batch does not yet prove a local 2×2 block-kernel/update bound. This affects the implementation-level unit-roundoff claim, not the displayed conditional theorem; it is recorded as an open cross-batch item and escalated.

The three examples include direct finite calculations: the star ordering counts `0` versus `binom(m,2)` fill edges; the 2D Poisson energy identity proves positive definiteness before applying the grid theorem; and the `[[0,1],[1,0]]` indefinite matrix fails either scalar pivot but passes the single declared 2×2 block test.

## Sources and retrieval

The complete 184-page Davis et al. survey PDF and the complete 29-page Cornell Lecture 16 deck were retrieved, relevant full-text sections inspected, and fetch-stamped. These are independent full-text treatments; Cornell is a full lecture-note source. I also inspected the complete 256-page Scott–Tůma monograph in the publisher document view and read the relevant Chapters 4–5 and 7–8. Its browser text supplied additional independent reasoning, but no publisher/OAPEN PDF URL passed the mechanical fetch checker.

The coverage file preserves the exact retrieval history and dispositions. Springer chapter URLs each exhausted six attempts because of a cookie-consent interstitial; the publisher PDF URL had the same interstitial; both OAPEN bitstream routes returned HTTP 429; the author institutional PDF endpoint presented an Anubis access-denied page. These failed URLs are marked as dropped with their six actual attempt records, search history, and per-item alternative arguments/dependencies. No mathematical claim is dropped: the local proofs are complete, and the Davis survey plus Cornell lecture deck remain fetch-verified. Earlier candidate history is also recorded there: the Scott/George Springer-SIAM route failed with a 403/cache miss, and the George–Liu scan was only a six-page cover/contents extract.

## Cross-batch status and owner review

The batch cross-dependency input verifies the actual NA-03 graph-definition edges and the batch-1 arithmetic-model edges used by the real threshold LU and sparse Cholesky procedures. It separately marks the missing implementation-level complex block LDL* update estimate open, with the exact model limitation, affected claim, required hypotheses, and proposed local placement. The block residual theorem remains conditional and is not mislabeled as a floating-point stability theorem.

## Scoped checks

Final post-edit checks:

- Scoped dependency recomputation included the 19 batch-16 items and the two exact in-run suppliers from batches 1 and 2. It checked 46 local dependency edges, matched every manifest and frontmatter level, reproduced maximum level 7, and reported 0 errors. The batch dependency input confirms batch 16 is level 1 and requires batches 1 and 2.
- `node tools/proof-layout.mjs` on the 19 assigned items: 58 steps, 0 defects.
- Scoped `precheck.mts` on all assigned item paths: 12 proof-bearing items checked, 0 failing.
- Strict proof-contract validation: 19/19 items, 0 errors and 0 warnings. A separate audit verified exact direct-supplier coverage and source/consumer excerpt matches; 19 direct excerpts were checked with 0 errors. The three worked examples also have direct finite-check records.
- `source-fetch-check --stamp`: 4/17 sources fetch-verified (0 newly stamped); 17/17 resolved, with 13 documented retrieval drops. Structural source-resolution validation checked all 13 drop records and found no missing attempt, search, or alternative-proof fields.
- `manifest-integrity.mjs --run numerical-optimization-dynamics-2026-10-16`: 214 pages owed and 214 in manifests; no scope drift.
- The global dependency-level check remains blocked by unrelated run batches with empty scaffold inventories and stale or absent level labels. The scoped batch-16 computation above passes; no other batch was edited.
- The cross-frontier content-policy check cannot complete because it attempts to load the unrelated missing item `thm-gmres-true-residual-gap-from-computed-arnoldi-relation`. The manifest-only preauthoring gate is inapplicable after authoring because it reports the 19 now-existing item files. No unrelated item was created or changed to satisfy either gate.
- Step 1 disposition: 18 items are ready and `thm-block-ldl-star-residual-with-actual-growth` is escalated for the unresolved implementation-level complex block-update residual estimate. At the final run-wide check, 894 items were inventoried: 494 ready and 400 item records open (this one batch-16 escalation plus 399 outside the batch), as well as 106 empty scaffold pages.
- Recomputed active-run status confirms the run is still `running` at `1-scaffold` (29/107 covered); batch 16 is listed among the missing assignments/artifacts, and the stage is blocked for owner repair and recertification. The relevant `git log` shows HEAD `3290b4defb`; no autopilot state or control file was changed.

No test suite was run. No published content, another pair's items, shared plan, engine state, or verdict was edited.


## Owner focused LDL arithmetic repair

The earlier exact-only implementation gap is superseded by `research/numerical-optimization-dynamics-2026-10-16-owner-ldl-kernel-escalation.md`. A local kernel and lemma now cover scaled real-component 1x1/2x2 Hermitian arithmetic, determinant and threshold certificates, range-failure and pivot-inconclusive statuses. The local eta includes actual scaled-determinant conditioning. The existing conceptual exact-multiplier theorem is retained, and actual stored L uses the newly proved coupling residual as well as the Schur update residual. The exact indefinite example was re-read and remains valid in the unchanged exact branch; its contract supplier excerpt was refreshed. Root owns current levels, readiness, hashes and final gates; historical native checks above do not certify these edits.
