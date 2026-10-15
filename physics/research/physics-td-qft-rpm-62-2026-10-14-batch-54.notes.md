# Batch 54 authoring notes — Formal diagram coefficient-to-observable adoption

Run `physics-td-qft-rpm-62-2026-10-14`, role beta, assigned pair
`qft-x02` / `qft-x02-examples`. Only the six assigned item drafts, their two
pages, and batch-54 evidence were edited.

## Plan, inventory, and levels

Read the run owner direction, physics instructions/schema/workflow, the full
QFT-X02 design section, current `plan-spec.json`, and the full batch
dependency-level snapshot before authoring. The current dispatch and plan
spec both set page requirements to `qft-g02`, `qft-mx02`, and `qft-x01`;
the older original reservation also lists `qft-g01`. The two page manifests
retain the current plan requires. The Dirac magnetic theorem has a direct
item dependency on `post-qft-qed-local-coupling` because its action is an
actual proof premise, so the QFT-G01 edge remains in this evidence.

The reserved inventory is preserved exactly: three A items and three B
examples. The current item graph gives these levels:

| Item | Level |
| --- | ---: |
| `post-qft-example-formal-observable-map` | 7 |
| `pthm-qft-example-formal-scattering-decay` | 8 |
| `pthm-qft-example-dirac-magnetic-benchmark` | 9 |
| `ex-qft-x04` | 9 |
| `ex-qft-x05` | 9 |
| `ex-qft-x09` | 10 |

The shared batch snapshot still records batch 54 at page level 7 with
requires batches 46, 49, and 53. Its page-level rows omit the direct item
edges from the magnetic theorem to batches 52 and 42 (QFT-G01 and QFT-MF03).
The extra item edges were recorded here; the shared scheduling graph was left
untouched. The current QFT-G02 item is declared at level 7 in its source
manifest, while the live item graph computes level 6. That upstream mismatch
is not repaired in this assigned batch.

All six reserved carriers and both page files are present. Each page holds
three items/examples, below the 100-item limit.

## Current supplier interfaces

- QFT-X01 is populated. The full `def-qft-example-observable-types` carrier
  was inspected; its formal-coefficient record, exact finite-regulator data,
  and source-reported empirical estimate remain different types. Its
  prerequisites include the ready QFT-MX01 `def-qft-example-data`.
- QFT-MX02 is populated. The complete current finite proofs for spin-trace
  completeness, two-body phase space, scalar coefficients, and the Dirac
  Pauli square were inspected. The phase-space proof uses only nonnegative
  Borel pushforward under the published change-of-variables result and the
  stated AC-omega hypothesis. The scalar corollary and map match the current
  units and symmetry-factor conventions.
- QFT-G02 populated while this batch was in progress. Its current
  `post-qft-formal-qed-coefficients` draft was read in full. It adopts
  vertex `i q_n gamma^a`, the rational fermion line only for `mu>0` and a
  nonzero off-shell denominator, and the Feynman-gauge photon line
  `-i h_ab/(h(k,k)+i0)`. A distributional time-ordered line uses the current
  `H_mu` carrier and carries AC-omega. The pair-production channel uses only
  the photon line at `s>0`, with no internal fermion line. This is a current
  physical postulate with no Proof section, not an independent acceptance.
  Its direct current carriers (`def-qft-framework-units`, the formal ring,
  the tree-Ward lemma, the time-ordered kernel, and Countable Choice) were
  checked. The tree-Ward and formal-ring chain uses the Dirac matrix
  definition whose Step 1 record is escalated.
- QFT-G01 is populated. The exact current
  `post-qft-qed-local-coupling` action was inspected. The magnetic theorem
  derives its compact-variation Dirac equation instead of treating that
  equation as a postulated proof result. The item file's frontmatter still
  records dependency level 1 while the live manifest and item graph give
  level 8; this upstream file was not edited.
- QFT-MF03 contains the actual `def-qft-dirac-projections` carrier. Its
  Step 1 decision is escalated because QFT-MF01 review remains open and the
  active run records QFT-MF02 as artifact-missing. The local spin traces,
  Pauli-square calculation, action variation, and uniform-field example
  retain that exact finite-matrix use conditionally.
- QFT-MG02 and QFT-MG03 are populated. The QFT-G02 page also requires QFT-G01,
  QFT-MG02, and QFT-MG03; QFT-MG02's own page requires QFT-MF01. The QFT-MG02
  lattice branch is not used by the selected formal coefficient item, but
  its page edge remains a page-level prerequisite and is recorded as open in
  cross-batch evidence.

One external item defect was found and is not edited here. The current QFT-MX02
`thm-qft-example-massive-tree-annihilation` [L1] attributes tree current
conservation to `lem-qft-qed-formal-matrix-ward`. The current matrix-Ward
statement proves finite-graph formal inverse covariance and a resolvent
identity; it does not state Dirac tree-current conservation. The proper
current carrier `lem-qft-qed-tree-ward` does state the off-shell telescoping
and on-shell current identities. QFT-MX02 step 1.4 also rederives the local
on-shell cancellation directly, so this batch independently proves the
finite current contraction and does not depend on the stale attribution.
Owner repair is needed to align the upstream theorem's declared dependency
and [L1] excerpt with the actual current tree-Ward interface.

## Sources and source resolution

The A and B coverage entries record the complete Tong Chapter 3, 4, and 6
HTML treatments, Srednicki's complete 616-page prepublication draft, and the
complete Fan et al. report. Tong and Srednicki are the two independent active
full-text theory treatments on each page. The Fan report is used only to
keep its reported measurement and uncertainty separate; no empirical value
or measurement claim is a theorem premise.

The complete 271-page Weigand QFT I/II notes were inspected. The fetch checker
could not verify the compressed PDF page tree because `mutool` is unavailable.
It made the initial request plus five recovery retries for each duplicate
page entry, all with the same parser failure. Three searches found no
authoritative alternative edition. The source is dropped from active support
with certain disposition: the complete local arguments plus the active Tong
and Srednicki treatments cover every affected item. Its exact attempts,
searches, and per-item alternative arguments/dependencies remain in the
coverage file's `source_resolution`; no mathematical claim is dropped.

## Readiness

All six items are recorded as escalated after completing their statements,
conditional proofs, contracts, examples, and placement. The QFT-G02 formal
postulate is now a current draft carrier; the remaining specific blockers are
the escalated `def-qft-dirac-projections` chain and the open QFT-MG02 page
prerequisite inside the QFT-G02 page closure. The QED theorem and its angular
example also retain the QFT-G02 postulate's draft physical status. No item is
described as accepted or independently approved.

## Scoped checks and readiness records

Final scoped results after the contract and magnetic empirical-boundary edits:

- `precheck.mts` on the six assigned items: 6 checked, 0 failing.
- `proof-layout.mjs` on the six assigned items: 6 items, 19 numbered steps,
  0 defects. The isolated temporary renderer runtime was used; no application
  checkout files were edited.
- `rendercheck.mjs` on the six items and both pages: 8 files, 0 errors,
  0 warnings.
- `proof-contract.mjs --strict` on the six assigned IDs: 6 checked,
  0 errors, 0 warnings. Citation excerpts are regenerated from actual supplier
  sections; each fact-link has a contract entry and every checked boundary is
  anchored to a statement or proof step.
- Scoped `proof-contract-coverage`: 6 in-scope items, all 5 proof-bearing
  arguments covered; the A-page postulate correctly has no proof contract.
- `content-policy` on the batch manifest: 6 scoped items, 0 errors,
  0 warnings. Focused `depcheck`: 0 errors, 0 warnings across the 6 assigned
  items and their 2,159-item / 396-page dependency closure. `manifest-deps`:
  6 items, 0 missing dependencies or errors.
- `coverage-checklist --require-destination`: 2 pages, 26 harvested results,
  0 errors, 0 warnings. The completed `source-fetch-check --stamp` result is
  11/13 fetch-verified and 13/13 resolved, with the two documented Weigand
  drops; source and coverage bytes were unchanged by the final proof edits.
- `manifest-integrity`: all 128 pages owed by the run are present, with no
  missing or added pages.
- Run-wide `item-dependency-levels check` still reports five unrelated
  thermodynamics level mismatches: `def-td-cross-type-reaction-network`
  (14 vs 15), `pthm-td-contact-product-comparison` (12 vs 13),
  `pthm-td-entropy-under-product-comparison` (13 vs 14),
  `pthm-td-universal-mixing-entropy` (18 vs 19), and
  `rem-td-entropy-construction-hypotheses` (19 vs 20). None is assigned to
  batch 54; all six assigned item levels match the computed graph.
- `batch-dependency-levels check` reports the shared snapshot stale. The
  assigned magnetic theorem adds direct QFT-G01 and QFT-MF03 item edges, so the
  current closure includes batches 52 and 42 in addition to 46, 49, and 53.
  The shared scheduling graph is owner-owned and was not changed.
- `step1-decisions.mjs record` succeeded for all six assigned IDs, each with
  `decision: escalated`, `owner: false`, and its exact direct dependency list.
  Readiness remains escalated because the current `def-qft-dirac-projections`
  chain is escalated (QFT-MF01 review open; QFT-MF02 artifact missing), while
  the present QFT-G02 formal postulate and QFT-G01 local-coupling postulate
  remain drafts without Step-1 records. QFT-G02's page closure also retains
  the QFT-MG02 to QFT-MF01 prerequisite. The run-wide readiness check remains
  open; these authoring records do not constitute independent approval.

The current QFT-G02 carrier was available during authoring and its exact
statement and hypotheses were inspected. The consumers use its present draft
interface conditionally; they do not claim it proved or omit it. The upstream
QFT-MX02 mass-annihilation theorem's stale tree-Ward attribution remains an
owner repair item as recorded above; the batch-54 theorem rederives the local
on-shell current cancellation and does not rely on that attribution.
