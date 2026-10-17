# Batch 90 authoring notes

Run `numerical-optimization-dynamics-2026-10-16`, role `beta`, batch `90`, pair `spectral-collocation-and-galerkin-methods` and its examples page. These are authoring/readiness records, not independent mathematical approval.

## Design and plan reconciliation

- The owner direction requires the current category plan and incorporated mathematical contract to control the mathematics. Accordingly, the repaired spatial plan's complete NA-38 section and amendments control the scope and proof limits (`research/plan-numerical-spatial-track.md`, lines 1085–1119). It specifies the Fourier/Nyquist and Chebyshev–Lobatto conventions, finite boundary elimination and singular status, weighted projection/interpolation scope, source-specific conditioning, and explicit exclusions.
- `research/plan-spec.json` controls the current page identities and exact `requires` identifiers: `fundamental-trigonometric-identities`, `polynomial-interpolation-and-remainder`, `polynomial-approximation-and-chebyshev-interpolation`, `composite-quadrature-rules`, and `gaussian-quadrature`. Its description points back to the repaired spatial NA-38 contract. Where the spatial prose uses labels NA-10 through NA-13, those labels resolve to the current page IDs above; the manifest repeats the exact plan-spec requirements.
- `research/plan-numerical-analysis-track.md`, lines 538–550, is an older aligned summary. It agrees on the major scope, examples, proof route, and pressure-splitting/3D Navier–Stokes exclusions, but its prerequisite line retains NA pair labels and its summary omits the repaired spatial section's fuller interface and well-definedness clauses. The two plans do not justify different mathematical claims; the current spatial contract supplies the detail and plan-spec supplies identifiers.
- The batch scheduling input is `a20c83d967c4fb82d96b2681fe009f89c3dd179bbf56683e847ca38526498979`; assigned batch dependency level is 6 and prerequisite batches are 4, 19, 20, and 82.

## Inventory and dependency order

The assigned manifest contains 29 A-page items and five B-page examples (34 total), below the 100-item A-page cap. A-page item levels range from 0 to 8; companion examples range from 2 to 10. The in-run level calculation uses item `deps` edges and returns no errors for batch 90; every target label matches the computed value. The page inventories and item frontmatter are synchronized.

The authoring order follows the in-batch levels: Fourier and weighted-space definitions first, then aliasing/basis facts and matrices, followed by projection/interpolation or mass results, and finally the finite BVP result and companion examples. Exact Fourier sampling identities include the even-grid Nyquist convention. Chebyshev–Lobatto interpolation is explicitly indexed in increasing cardinal-node order. The BVP result proves the finite eliminated system and reports singularity without asserting unconditional solvability, convergence, or stability.

The algebraic interpolation rates use the locally defined coefficient Sobolev scales and their stated regularity. The exponential estimate is restricted to analytic data on a Bernstein ellipse. The spectral-radius remark is restricted to the cited Dirichlet collocation setup. No BVP/PDE convergence or general stability claim, unread second-order pressure-splitting proof, or inference about 3D Navier–Stokes regularity is made.

## Supplier review and cross-batch evidence

`research/numerical-optimization-dynamics-2026-10-16-batch-90.cross-batch-dependencies.json` records 27 unique verified edges: four page interfaces and 23 item interfaces from batches 4, 19, 20, and 82. Each item edge records its exact supplier excerpt, hypotheses, affected consumer, and evidence.

- Batch 4 supplies the cardinal interpolation formula and uniqueness/remainder interfaces. Batch 19 supplies the Chebyshev approximation and sine/chord bounds. Batch 20 supplies the composite Simpson rule and fourth-derivative error estimate. Their actual current supplier bodies and strict proof contracts were inspected; fetched-source records are stamped. Their stored Step 1 rows currently report `ready` but are hash-stale after dependency changes. The cross-batch evidence therefore records consumer-side interface verification only and leaves owner reconciliation of those supplier rows visible; it does not claim supplier acceptance.
- Batch 82's actual Gaussian moment, orthogonal polynomial, quadrature-rule, exactness, and two-node example bodies were inspected with their strict contracts and source evidence. The nine recorded cross-batch edges use current supplier Step 1 rows marked ready. This is still not independent acceptance.
- All current supplier bodies needed by the authored claims are present. The hash-stale batch 4/19/20 rows are a readiness-reconciliation issue, not an absent mathematical interface; their precise affected items and excerpts are in the cross-batch file.

## Source reading and retrieval

`research/numerical-optimization-dynamics-2026-10-16-batch-90.coverage.json` records five full-text sources, 39 harvested results and dispositions, and successful fetch stamps for all five sources. The readings include Shen–Tang's relevant complete book sections; Trefethen Chapters 7–8 in the complete 299-page author text hosted by Harvey Mudd; Owen's complete quadrature chapter; Gautschi §2.1; and the complete four-page MIT lecture note. The local proof arguments and each source limitation are recorded alongside the harvested results.

The direct Trefethen chapter paths `7all.pdf` and `8all.pdf`, with both the root and tilde path spellings, timed out. One indexed full-book mirror was found, opened and inspected, and its Chapter 7 and 8 material was read; the HMC mirror then passed `source-fetch-check --stamp`. The four failures and successful alternative are retained in that source's `recovery_attempts`, with the search recorded. No source was dropped or left unresolved, so no `source_resolution` drop decision was made.

## Proofs and checks

There are 21 proof-bearing carriers, with 130 exact fact citations, 72 numbered proof steps, and five finite example checks in the proof contract. The proof contracts were regenerated from the finished arguments and checked against the actual item text.

- `node tools/proof-layout.mjs` on the 34 explicitly assigned item files: 34 items, 72 steps, 0 defects.
- Scoped `tools/precheck.mts` on the same 34 files: 34 files, 21 proof-bearing files checked, 0 failures.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-90.proof-contracts.json --strict`: 21/21 items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/numerical-optimization-dynamics-2026-10-16-batch-90.coverage.json`: 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-90.coverage.json`: 5/5 fetch-verified and 5/5 resolved.
- Scoped dependency-level calculation: both pages and all 34 items checked, computed range 0–10, no target errors or mismatches.
- The full-run dependency-level check passes across 2,007 items and 214 pages (maximum level 16). The two batch-90 pages and all 34 assigned items also pass their scoped check with levels 0–10.
- The official `node tools/step1-decisions.mjs record` command was run for each of the 34 assigned items against the live run manifests, with each item's declared dependencies. All 34 records are `ready`, `owner: false`, and individually hash-closed by `step1Decision`.
- The full-run `node tools/step1-decisions.mjs check` cannot finish because two unrelated item frontmatters fail the repository YAML parser with “Nested mappings are not allowed in compact mappings”: `lem-unit-interval-lebesgue-gauss-data-valid` and `thm-gauss-collocation-global-order-2m`. A full item-frontmatter scan confirmed these current failures; both are outside batch 90 and were left untouched. The batch-90 records were generated directly with the official command and individually verified against the live dependency closure.

Step 1 records are author readiness only. Batch 4/19/20 supplier readiness hashes remain stale as described above; no independent acceptance or owner decision is inferred from this batch's records.
