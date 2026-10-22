# Batch 125 — Exact finite algebra entropy identities and holography boundaries

## Scope and plan reconciliation

This batch authors only the assigned pair: A page `tgrx-finite-code-holography` and B page `tgrx-finite-code-holography-examples`, with three items. The run-local override file named in the dispatch, `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md`, is absent.

The complete assigned design section is “Exact finite algebra entropy identities and holography boundaries” in `research/plan-thermodynamics-and-general-relativity-frontier-expansion-track.md` at L799–L839. Its detailed inventory is in `research/frontier-expansion-2026-10-19/thermodynamics-and-general-relativity/inventory.json`. The selected `research/plan-spec.json` rows agree with the design on page IDs, titles, A/B order 947/948, category, mathematics-library classification, and the A-page prerequisite `tgrx-relative-entropy-balance`. The plan’s empty item arrays were the pre-authoring state; the detailed inventory supplies the three item IDs now placed in the batch. No plan/design conflict was found.

The local proof uses the planned route and preserves the scope warning. The inventory’s provisional `deps` lists name the within-page chain and the earlier modular-balance supplier. The finished arguments make their actual mathematical supports explicit as well: finite Hilbert tensor-product/map definitions, the linear-map and trace definitions, finite spectral calculus, and the scalar logarithm laws. These are mathematics-only prerequisites. No physical item, regulator limit, continuum claim, gravitational premise, or literal area interpretation is introduced.

## Inventory, prerequisites, and dependency levels

The authored chain is `def-tgrx-sector-code` → `prop-tgrx-code-area-entropy` → `ex-tgrx-two-sector-area`, with the first two items also using `prop-tgrx-finite-modular-balance` in batch 122. The definition gives the finite orthogonal block space and factorwise tensor convention. The proposition verifies normalization and faithfulness, expands the entropy eigenvalue sum including the classical sector term, and derives relative-entropy additivity from the faithful-reference modular identity. The example evaluates a two-sector model with one pure one-dimensional ancillary state and one maximally mixed `d`-dimensional ancillary state.

Before authoring, the run record placed batch 125 at dependency level 2 with `requires: ["122"]`. From the current manifests and carrier dependencies, the scoped batch graph is batch 113 level 0, batch 122 level 1 requiring 113, and batch 125 level 2 requiring 122. The recomputed item levels are:

- `def-tgrx-sector-code`: level 1 from the in-run `prop-tgrx-finite-modular-balance` supplier at level 0.
- `prop-tgrx-code-area-entropy`: level 2 from the level-1 definition and level-0 modular-balance supplier.
- `ex-tgrx-two-sector-area`: level 3 from the level-2 proposition.

The scoped item-level computation reports 7 items across batches 122 and 125, no cycles or level errors, and declared levels 1/2/3 for these items. The A/B pages remain within the 100-item limit.

The current `tgrx-relative-entropy-balance` page is draft and requires `tgr-mhs05` plus the published `quantum-information-measures` page. The former page is finite-regulator entropy context; its three current items and proofs were inspected and their Step 1 records are current and ready. None of those three item claims is a premise in the new finite code proof. The latter page states the finite entropy and relative-entropy conventions and contains the imported definitions and partial-trace result used by the predecessor proposition. The relevant current imported snapshots were checked against `research/math-imports.json` and against their root originals; local bytes and pinned/root hashes match for `def-qc-tensor-register-and-permutation`, `def-qc-tensor-map`, `def-linear-map`, `def-trace-of-an-endomorphism`, `thm-natural-logarithm-laws`, `def-it-finite-dimensional-quantum-relative-entropy`, `def-it-von-neumann-entropy`, `def-qc-partial-trace`, and `thm-it-quantum-relative-entropy-partial-trace-data-processing`.

The actual current `prop-tgrx-finite-modular-balance` Statement and complete Proof were inspected. Its current `loadStep1Record`/`step1Decision` result is `ready`, `owner: false`, hash `d79d61e798d1876c8224df77f5e9535d74e2b11dae3d141ca69301de2b8a28ac`. The new proofs use its finite faithful-reference identity and density/entropy conventions, established by its proof steps 1.1–2.1. The same item also states and proves a separate partial-trace data-processing inequality in step 3.1; that inequality is not used by this batch. The imported definition and partial-trace theorem interfaces used by the predecessor item were read in full, including the complete theorem proof; no imported bytes were edited.

The focused `depcheck` selection traversed 1,023 dependency-closure items and 495 pages with 0 errors and 0 warnings. This is a structural identifier/cycle check, not independent proof approval of that closure. The mathematical argument in this batch uses only the exact finite identity and its stated conventions, the listed finite spectral/trace/logarithm definitions, and the explicit local sums.

## Source reading and retrieval

Coverage, exact URLs and locators, per-item support, limitations, and every harvested result’s disposition are in `research/physics-non-fluid-129-2026-10-21-r2-batch-125.coverage.json`.

- Daniel Harlow, *The Ryu-Takayanagi Formula from Quantum Error Correction*, complete 62-page paper, [arXiv PDF](https://arxiv.org/pdf/1607.03901). I inspected Appendix A.7.2–A.7.3, PDF pp. 52–54, especially Eqs. (A.6)–(A.10) and (A.19)–(A.22), for the finite direct-sum sector representation, central Shannon entropy, and sector relative-entropy decomposition. Harlow’s displayed ancillary factor is maximally mixed; the local proposition proves the stated extension to arbitrary fixed faithful ancillary density matrices. No universal gravitational or geometric conclusion is sourced or claimed.
- John Watrous, *The Theory of Quantum Information*, complete 598-page author-hosted book manuscript, [full PDF](https://jhwatrous.github.io/TQI.pdf). I inspected §5.2.1 and §5.2.2, PDF pp. 266–269, including Propositions 5.20–5.21 and Eqs. (5.94)–(5.99), for finite spectral entropy, direct-sum/tensor entropy, and tensor relative-entropy identities. Watrous uses base-two logarithms; the local proofs state natural logarithms and nats, rescaling the cited identities by `ln(2)`.

`source-fetch-check --stamp` succeeded for all four coverage entries on 2026-10-21: Harlow’s PDF, 2,001,975 bytes, 62 pages, SHA prefix `aace341c790403d0`; Watrous’s PDF, 2,459,123 bytes, 598 pages, SHA prefix `c8f30116586435fc`. Each URL required one successful fetch attempt. There were no retrieval failures, recovery retries, dropped sources, or source-resolution escalations. `source_resolution` remains empty. Coverage records 9 harvested results, all with disposition `inline` and item-specific support/limitations.

## Cross-batch inputs

`research/physics-non-fluid-129-2026-10-21-r2-batch-125.cross-batch-dependencies.json` is a JSON array with the three direct cross-batch edges only: the A-page requirement on `tgrx-relative-entropy-balance`, and the item dependencies of `def-tgrx-sector-code` and `prop-tgrx-code-area-entropy` on `prop-tgrx-finite-modular-balance`. All three scoped interface checks are `verified`; the rows do not certify independent proof approval. No transitive page/context observations or same-batch edges were added as unsupported review rows.

## Proof contracts and scoped checks

`research/physics-non-fluid-129-2026-10-21-r2-batch-125.proof-contracts.json` is generated from the current carriers. It maps every proof step and input, exact fact supplier excerpts, all standard boundary cases, risk notes, and applicable exact finite matrix checks. The definition has an interface/boundary worksheet but no fabricated proof.

Final scoped checks:

- `manifest-deps.mjs`: 3 authored items, 0 missing dependency arrays, 0 errors.
- Scoped item dependency levels: levels 1/2/3 as listed above; no cycle or level error.
- `proof-layout.mjs`: 3 explicitly changed items, 7 numbered steps, 0 defects.
- `proof-contract.mjs --strict`: 3/3 items checked, 0 errors, 0 warnings.
- `coverage-checklist.mjs`: 2 pages, 9 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs` check mode: 4/4 entries fetch-verified, 0 drops.
- Focused `depcheck.mjs`: 0 errors and 0 warnings across the selected item dependency closure.
- `author-check.mts` receipt: `research/physics-non-fluid-129-2026-10-21-r2-author-check-125.json`, `ok: true`; precheck accepted both proof-bearing items, rendercheck accepted all 5 item/page files, content policy accepted all 3 items, and strict proof-contract validation passed.

The full-run `batch-dependency-levels.mjs check` cannot traverse the current unfinished batch-89 manifest: it reports `Duplicate item undefined` because page `csm-frontier-critical-gaussian-rg` stores these item IDs as bare strings rather than authored inventory objects: `def-csm-frontier-infinite-volume-criticality`, `def-csm-frontier-finite-gaussian-precision`, `lem-csm-frontier-periodic-laplacian-spectrum`, `lem-csm-frontier-sine-comparison`, `lem-csm-frontier-schur-complement-positive`, `def-csm-frontier-gaussian-lattice`, `thm-csm-frontier-gaussian-massless-dimension`, `alg-csm-frontier-gaussian-block-rg`, `thm-csm-frontier-gaussian-block-rg-correct`, `lem-csm-frontier-quartic-engineering-scaling`, and B-page example `ex-csm-frontier-rg-generates-couplings`. I left that other batch and the shared dependency-level record untouched; the scoped current graph above independently confirms batch 125’s level 2.

The read-only full-run `frontier-dependency-ledger.collect` is also blocked by unrelated malformed YAML in `items/def-csm-frontier-finite-gaussian-precision.md` (unquoted source title containing a colon at the `sources.references` title). I did not repair outside-scope content or refresh the shared ledger. The assigned cross-batch input itself passes the scoped structural check: exact three direct edges, valid consumer/supplier ownership, allowed statuses, and nonempty evidence.

## Final Step 1 readiness records

`step1-decisions.mjs record` wrote one non-owner `ready` row for each item after the final carriers, manifest, contracts, sources, and scoped checks were current. A fresh `loadStep1Record`/`step1Decision` query reports all three records closed and hash-current:

- `research/physics-non-fluid-129-2026-10-21-r2-step1-def-tgrx-sector-code.json`: `ready`, hash `0b0b394b5e9cf49d21fd35ef6fb96715660ccaa6666ea4efdbc6b41243fdd747`.
- `research/physics-non-fluid-129-2026-10-21-r2-step1-prop-tgrx-code-area-entropy.json`: `ready`, hash `de2db57b6a2a2e52170e645da764cc9c966f85df22b50d442542bcb784279d1e`.
- `research/physics-non-fluid-129-2026-10-21-r2-step1-ex-tgrx-two-sector-area.json`: `ready`, hash `6168d237c1996fc6abb542231a172647620c0487baf2ed8d97182de8aee8a203`.

The current `prop-tgrx-finite-modular-balance` prerequisite also remains `ready` at hash `d79d61e798d1876c8224df77f5e9535d74e2b11dae3d141ca69301de2b8a28ac`. These are Step 1 authoring-readiness records only; none is independent proof approval.
