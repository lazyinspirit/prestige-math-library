# Batch 99 authoring notes

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: beta · Batch: 99 · Assigned pair: `polynomial-chaos-stochastic-collocation-and-galerkin-uq` and its examples page.

## Controlling design and conflicts

The controlling source is the full UQ1 section in `research/plan-numerical-optimization-track.md` (lines 1321–1337), together with `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-uq1`. These contain the complete mathematical scope, required assumptions, examples, and proof obligations. The `research/plan-spec.json` row and generated batch assignment agree on page identity, category, title, and required pages; they abbreviate the mathematical contract and introduce no substantive conflict. No stale design or task text was allowed to weaken the controlling UQ1 conditions.

The batch dependency input assigns batch level 7 and direct prerequisite batches 24, 38, 82, 90, and 93. The dispatch scheduling input recorded here is `720c6b3fba6862a2a65cfc3d6f42002c76d8f8ac122cff0f53b62f1379530d11`. The completed inventory has 25 A-page items and 5 B-page items (30 total), below the 100-item page cap. In-run item levels were recomputed from the exact `deps` arrays and the carriers before the manifest was finalized; levels range from 0 to 9. The suppliers precede consumers in each page inventory.

## Mathematical scope

The finite product-law definition carries the selected moment cutoff and positive-definite monomial Gram hypotheses. Tensor orthogonality, projection, coefficient statistics, quadrature error, Christoffel sampling and concentration, weighted least-squares stability, affine diffusion well-posedness, stochastic Galerkin Céa, and conditional spatial approximation are proved in the assigned items. Completeness is conditional on an explicit law-specific scalar density hypothesis; no completeness or universal spectral-rate claim is inferred from finite moments. The affine diffusion form has a separate Bochner measurability/integrability lemma before the solution theorem uses it. The finite-element rate assumes an exact finite chaos expansion, regular spatial coefficients, and a conforming global interpolant.

The sparse-grid coefficient bound is restricted to uniform product probability on `[0,1]^d` and the actual mixed fourth-derivative and endpoint hypotheses of batch 93. The Gaussian coefficient result is restricted to polynomial coefficient data and coordinatewise exactness through the stated Gaussian degrees. The Christoffel probability bound is proved locally from the actual published matrix-Bernstein supplier with `M >= 12 |Lambda| log(2 |Lambda| / delta)`.

## Sources and retrieval

Coverage records eight independent full-text sources, their locators, supported items, and disposition of each harvested result in `research/numerical-optimization-dynamics-2026-10-16-batch-99.coverage.json`. This includes the Xiu–Karniadakis article, Xiu review, Sudret book chapter, Babuška–Nobile–Tempone author preprint, Cohen–Migliorati preprint, Tropp monograph/lecture notes, Teschl's full functional-analysis book manuscript, and Clason's complete finite-element lecture notes. The full relevant arguments for the cited sections were inspected; all external sources are context, not substitutes for the local proofs or current supplier proofs.

`source-fetch-check --stamp` verified 8/8 sources; two previously unstamped full PDFs were newly stamped. There were no retrieval failures and no source was dropped, so no `source_resolution` recovery record was needed. The Babuška–Nobile–Tempone inventory metadata lists DOI `10.1137/050645861`; the publisher record and article identify the 2007 SIAM paper as DOI `10.1137/050645142`. Coverage uses the complete author-hosted preprint `https://www.ices.utexas.edu/media/reports/2005/0547.pdf`; the DOI discrepancy is recorded as metadata only, not as a retrieval failure.

## Cross-batch evidence and unresolved owner reconciliation

The exact inspected interfaces, excerpts, item IDs, current Step 1 record statuses, affected claims, and outgoing consumer are recorded in `research/numerical-optimization-dynamics-2026-10-16-batch-99.cross-batch-dependencies.json`. Batches 24, 38, 82, and 93 provide the exact finite-element, Céa, Gaussian, and sparse-grid interfaces consumed here; their current readiness records are described there as authoring readiness only, not independent acceptance. Batch 56 supplies `lem-parabolic-zero-boundary-sobolev-space-is-separable`, which is a direct prerequisite for the affine diffusion definition but is omitted from the dispatch's listed prerequisite batches. Its actual body and current owner readiness record were inspected. This scheduling edge is raised for owner reconciliation; the needed mathematical statement remains present as an explicit dependency.

The dispatch also requires the batch-90 spectral-collocation page. Its current manifest contains 29 A-page items. The Chebyshev grid, aliasing, weighted interpolation-rate, and weighted Galerkin bodies and current Step 1 `ready owner:false` records were inspected and hash-checked; these are authoring-readiness records, not independent approval. Batch 99 retains the page-level `requires` entry, but none of its item proofs consumes those Chebyshev-specific claims: collocation, Gaussian exactness, sparse-grid bounds, and Galerkin coercivity are defined/proved with their actual local interfaces. No generic Chebyshev aliasing, collocation-equals-Galerkin, or unsupplied spectral rate is asserted.

The current batch-107 consumer `ex-polynomial-chaos-coefficients-and-sobol-indices` was also inspected. It assumes a complete tensor family in its general theorem and proves completeness directly for its four-point example before using the finite UQ1 projection/orthogonality interfaces. Its Step 1 readiness record is missing at handoff; no consumer approval is inferred.

## Contracts and scoped checks

The proof-contract file contains entries for all 30 items, with the actual numbered derivations, fact-to-step mappings, exact current supplier excerpts, source locators, boundary dispositions, applicable finite calculations, and an author self-review record. Strict proof-contract validation and the final proof-layout, precheck, source-fetch check, and batch-99 dependency-level results are recorded here after their final runs.

## Final scoped results

- `node tools/item-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16`: 2,007 items checked across 214 pages; maximum in-run item level 16. No batch-99 level errors; the assigned items have levels 0–9 in the sorted manifest.
- Strict batch-99 proof contracts: 30/30 items checked, 0 errors, 0 warnings.
- Explicit proof-layout over the 30 changed carriers: 30 items, 61 numbered steps, 0 defects.
- Normative precheck over the 30 changed carriers: 30 files, 21 proof-bearing items checked, 0 failures. Its canonical dependency-layer renumberings were adopted in the proof text and contracts.
- Source-fetch check mode: 8/8 sources verified and resolved, 0 documented drops.
- Batch page/carrier consistency check: 30 carriers match their assigned A/B page inventories, dependency arrays match carrier frontmatter, proof-contract scope matches the inventory, all A items have source dispositions, all 8 cited source URLs are covered, and the scheduling hash matches the dispatch.
- Step 1 author-readiness records: 30/30 items are `ready`; the same native `step1Decision` hash check confirms all 30 records current. These records document author readiness only, not independent approval.

A run-wide `step1-decisions check` was started but its scan of the full 2,007-item run exceeded 60 seconds and was interrupted. The batch-specific native hash check above completed for all 30 assigned items. The additional direct batch-56 item edge remains an owner scheduling-reconciliation note; its current supplier body and readiness record are present, so the mathematical prerequisite is complete. The outgoing batch-107 consumer record is still missing and is recorded as consumer-side context only.
