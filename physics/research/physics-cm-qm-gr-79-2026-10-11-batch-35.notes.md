# Batch 35 notes — `qm-math-composites` / `qm-math-composites-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, Step 1 authoring, 2026-10-11.
Scope: exactly one A/B pair, A page order **149**, B page order **150**, category
`non-relativistic-quantum-mechanics-mathematics`, library `mathematics`.
Final inventory: **27 A items + 3 B items = 30**, all recorded `ready` with current
dependency hashes by `step1-decisions.mjs record` (this dispatch's records). The batch
manifest, the three page carriers, the coverage file, the proof contracts, the
cross-batch input and this note were written; no published item, shared plan, engine
state or verdict was edited.

Read first: `CLAUDE.md`, `../CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`../PHYSICS-CONTENT-MODEL.md`, the batch dispatch, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` (no clause of it
names or overrides this pair), the Step-1 drift record
`research/physics-cm-qm-gr-79-2026-10-11-alpha-step1-drift.md`, the dependency-levels
file, the design section `research/plan-non-relativistic-quantum-mechanics-track.md`
L16 ff. with `scaffold/inventory.json`, `scaffold/mathematical-prerequisites.md`
(proof modules M1–M49), `research/scaffold-audit-2026-10-11/quantum-mechanics/supplier-map.json`
and `research/plan-spec.json`.

## Design vs plan, recorded conflicts

1. **Page `requires`.** The dispatch table and the design text say the pair requires
   nothing declared. The current plan-spec, which controls this run, declares 40
   published mathematics pages for the A page and `qm-math-composites` for the B page;
   the batch manifest was set to the plan-spec values, as the other batches of this run
   do (e.g. batch-1). The dispatch/plan disagreement is recorded here.
2. **Provisional dependency lists.** The design/handoff `claim_deps` and proof modules are
   research context, not the production dependency graph. Every load-bearing premise was
   mapped to a currently published canonical item as required by the supplier map; no
   draft, planned or EM/SR item is load-bearing, so the owner's draft-supplier exception
   was not used.
3. **Item identifiers.** The reservation names in `inventory.json` are explicitly
   "not accepted production claims", and SCHEMA.md §2 requires the kind prefix in the ID
   (`lem-`, `thm-`, `ex-`, `cex-`). The first scaffolded carriers used the reservation
   spelling `nrqm-composites-*`, which `depcheck.mjs` and `validate-plan.mjs` reject
   (`kind-prefix`). All 30 items were therefore renamed in this batch to prefixed IDs
   (`lem-nrqm-composites-*`, `thm-nrqm-composites-*`, `ex-nrqm-composites-*`,
   `cex-nrqm-composites-*`), and the manifest, pages, coverage, contracts and readiness
   records were updated in step. The manifest `reference` fields keep the inventory keys
   for traceability. Related stale record (not edited, not ours):
   `research/physics-cm-qm-gr-79-2026-10-11-supplier-page-closure/record.json` still
   quotes the pre-rename reservation IDs for this page and should be re-read by the
   owner/engine against the renamed inventory.
4. **Added local prerequisite (A count 26 → 27).** Nine items had cited the published
   _example_ `ex-rank-one-operator-adjoint-norm-and-trace` for the rank-one trace facts;
   that example lives only on a B/examples page, and `depcheck`'s hard `b-leaf-content`
   rule forbids a dependency that reaches a B-page-only item. A new A-page lemma,
   `lem-nrqm-composites-rank-one-operator-calculus`, proves the same facts (trace-class
   membership, trace norm `||u|| ||v||`, trace `<u,v>`, adjoint, positivity, product
   identities with bounded and trace-class factors, trace-norm continuity) from
   published A-page suppliers only, and the nine consumers were rewired to it. No
   promised claim was removed and the design's 26 reserved A items are all present.

## Inventory, levels and dependency checks

27 A items: tensor construction, rank-one calculus, bounded tensor maps, density and
scalar spectral probability, weak-form Robertson uncertainty, real multipliers and free
bounded-potential operators, CHSH finite sampling, finite partial trace and Schmidt,
finite effects and instruments, permutation sectors, Euclidean L² product unitary,
nuclear bounded cyclicity, complex Gaussian continuation, momentum Fourier Jacobian,
separable partial trace, countable Kraus normalization, finite-ancilla complete
positivity, local trace-preserving no-signalling, infinite Schmidt decomposition,
general trace-class instrument and effect duality, finite Naimark compression, countable
Kraus isometric dilation, continuous measurable Kraus instrument, marker overlap
contraction, exact free Gaussian propagation, joint PVM construction, compatible Lüders
repeatability. B items: Bell reduced state, nonunique mixed ensemble,
selective-conditioning counterexample.

In-run levels after the added lemma: 0 (8 items), 1 (5), 2 (7), 3 (7), 4 (2), 5 (1:
the counterexample). The manifest `deps`/`dependency_roles` equal the item frontmatter
exactly (reconciliation script: `problems: none`; no cycles; every dependency resolves
to a published item or to an earlier item of this batch). `node
tools/physics-support/item-dependency-levels.mjs check --run
physics-cm-qm-gr-79-2026-10-11` exits 1 with 148 `empty scaffold inventory` errors for
**other** batches' unscaffolded pages and reports no batch-35 finding; a scoped
recompute over this batch's manifest gives 30 items with 0 label mismatches.

## Sources and source checks

Fourteen source objects across the two pages. `source-fetch-check --coverage ... --stamp`
verified twelve by full-text stamps (Teschl _Mathematical Methods in Quantum Mechanics_;
Teschl _Topics in Real and Functional Analysis_ §3.6; Knapp _Advanced Real Analysis_
Ch. II §5; MIT 8.05 Chapters 1, 4, 5, 6, 8; Binney–Skinner _The Physics of Quantum
Mechanics_). Two are documented drops: the Cambridge DAMTP chapter PDFs
(`chap7.pdf`, `chap10.pdf`). The author host does serve the full text, but this
container's TLS trust store rejects the certificate chain
(`UNABLE_TO_VERIFY_LEAF_SIGNATURE`); the tool recorded the initial failure plus five
retries for each, searches found only third-party mirrors, and both sources are
corroborative only — every affected claim is proved locally from published suppliers and
a second stamped source covers the same ground (MIT 8.05 Ch. 8 for permutation sectors;
Binney–Skinner §6.3 for the nonunique ensemble). The drop records with searches,
attempts, alternatives and dependency lists are in the coverage file.
`coverage-checklist.mjs`: 0 errors, 60 harvested results.

## Checks actually run (results as observed)

- `precheck.mts` on all 30 items: 30 checked, 0 failing.
- `proof-layout.mjs` on all 30 items: 145 steps, 0 defects.
- `rendercheck.mjs` on the 30 items and 3 page/category carriers: OK (no wikilink in
  math, no unbalanced delimiters, all KaTeX and YAML parses).
- `depcheck.mjs --items-file` on the 30 items: OK — ids, kinds, cycles and page
  prerequisite-cycle checks passed (this is where the kind-prefix and B-leaf defects
  were found and repaired).
- `proof-contract.mjs --strict` on `research/physics-cm-qm-gr-79-2026-10-11-batch-35.proof-contracts.json`:
  0 errors, 0 warnings, 30/30 items checked, 268 citation contracts.
- `audit-manifest.mjs` on the batch manifest: 323 relationships over 30 items,
  0 defects.
- `content-policy.mjs` (normal mode): 30 scoped items, 0 errors. `--manifest-only`
  reports `batch-item-already-exists` for the authored items: that mode is the
  pre-authoring shape and is expected to reject an inventory that already exists on
  disk; recorded, not repaired.
- `coverage-checklist.mjs`: 0 errors. `source-fetch-check.mjs` check mode: 14/14
  sources resolved (12 stamped, 2 documented drops).
- `step1-decisions.mjs check --run ...`: all 30 of this batch's items closed with
  current hashes; the remaining unfinished items in the run belong to other batches.
- `frontier-dependency-ledger.mjs refresh --run ...`: refreshed. The batch-35 input is
  `[]` because this batch's pages declare no in-run cross-batch consumer dependency:
  every supplier is published, or same-batch. The consumer edges
  `qm-math-oscillator → qm-math-composites` and `qft-mc03 → qm-math-composites` are
  supplier-side and are owned by those consumer batches' inputs.

## Status

All 30 items and the three page carriers are draft mathematics under initial authoring.
No physical postulate, instrument realization, measurement claim or empirical statement
is made on these pages. This note records authoring-time checks only; independent
mathematical review (Step 2/3) and the engine gate remain outstanding, and nothing here
is a publication or approval receipt.

## Scope repair — batch 35, round 1

Repaired the five local defects from `research/physics-cm-qm-gr-79-2026-10-11-scope-review/batch-35/review-0.json`: clarified the CHSH zero-count exponent, stated momentum-transform norm preservation for all $L^2$ inputs, made the Euclidean tensor-map density proof split complex functions into positive real measures, corrected the free-Gaussian generator phase derivative, and repaired joint-PVM premeasure continuity and complex-measure uniqueness. The joint-PVM proof now derives rectangle values before using them and depends on Dynkin's $\pi$-$\lambda$ theorem; its unused $\sigma$-finite uniqueness dependency was removed. A full read also identified zero-space prerequisite cases in the countable Kraus normalization, finite-ancilla positivity and local no-signalling arguments; these were resolved by explicit degenerate cases and a zero-map convention that preserves the local no-signalling claim for all Hilbert spaces. Updated the local proofs/contracts and mirrored the changed local no-signalling statement into the page manifest; source coverage dispositions are unchanged.

The changed public statements are the CHSH boundary convention, the momentum norm identity and the local no-signalling zero-map convention. The CHSH/momentum consumer closure contains 207 items; adding the two direct consumers of the local no-signalling convention gives 209 unique consumers. All are checked against their actual dependency or link paths. One direct outside-batch consumer, `lem-nrqm-kinematics-componentwise-position-and-momentum` in batch 48, has an independent proof sign error in the generator identity; its repair is escalated to the owner and no outside file was edited. The other consumer paths pass through unchanged public statements. This handoff is for independent review, not acceptance or a judge stamp.

Checks after the final formatting pass: precheck 30/30; proof layout 0 defects; rendercheck 33 files; strict proof contracts 0 errors/warnings across 30 items; audit manifest 347 relationships and 0 defects; content policy 0 errors/warnings; coverage 60 harvested results and 0 errors/warnings; source resolution 14/14 (12 fetch-verified, 2 documented drops); focused dependency/cycle checks and dependency-level check pass. The frontier dependency ledger was refreshed. Readiness-state refresh remains with the controller; engine state was not edited here.
