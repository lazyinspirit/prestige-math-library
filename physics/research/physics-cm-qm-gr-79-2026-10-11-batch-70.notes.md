# Batch 70 notes — `gr-local-and-global-energy` / `gr-local-and-global-energy-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-70, covers 70.
Step 1 complete initial authoring only; neither a worker exit nor a readiness
record is independent mathematical approval (Step 2/3 review follows). The A
page is mixed-domain: six items are mathematics (`domain: mathematics`) and
five are physics — the physical reading of the measured fields
(`def-gr-measured-energy-density-flux-and-stress`), the Killing energy
definition (`def-gr-killing-energy-charge`), the model-conditional balance
theorem (`pthm-gr-local-energy-balance`) and the two scope notes
(`rem-gr-no-universal-global-energy`,
`rem-gr-local-and-global-energy-scope-and-deferrals`). The B page holds three
mathematical examples, one physics example
(`ex-gr-killing-energy-charge-of-a-static-dust`, which states a unit reading
and asserts no measured value) and two physics counterexamples
(`cex-gr-measured-energy-density-depends-on-the-observer`,
`cex-gr-conservation-does-not-imply-nonnegative-measured-energy-density`),
which state pointwise algebraic facts about a prescribed tensor and two
explicit congruences. No item reports a measurement; no experiment, no
empirical premise and no empirical uncertainty occurs anywhere in the batch,
and `pthm-gr-local-energy-balance` states explicitly that it carries none.

## Scope built

- A page `gr-local-and-global-energy` (order 243, category
  `general-relativity`, `library: physics`), 11 locally authored items:
  4 definitions (`def-gr-observer-energy-momentum-current`,
  `def-gr-measured-energy-density-flux-and-stress`,
  `def-gr-congruence-acceleration-and-expansion`,
  `def-gr-killing-energy-charge`), 4 lemmas, 1 physics-theorem
  (`pthm-gr-local-energy-balance`) and 2 remarks
  (`rem-gr-no-universal-global-energy`,
  `rem-gr-local-and-global-energy-scope-and-deferrals`).
- B page `gr-local-and-global-energy-examples` (order 244), 6 leaf items:
  `ex-gr-translating-dust-measured-energy-and-balance`,
  `ex-gr-boost-congruence-energy-balance-in-flat-space`,
  `ex-gr-perfect-fluid-energy-equation-from-the-local-balance`,
  `ex-gr-killing-energy-charge-of-a-static-dust`, and the two
  counterexamples above; each carries a numbered verification or
  counterexample.
- Library carriers `library/general-relativity/gr-local-and-global-energy.md`
  (requires `gr-einstein-and-matter`) and
  `…/gr-local-and-global-energy-examples.md` (requires
  `gr-local-and-global-energy`); `_category.md` is unchanged.
- Manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-70.pages.json`:
  page orders, kinds, categories, `library` and `requires` fields match the
  run scaffold; item inventories and metadata were regenerated from the final
  carriers (statement sections, deps, dependency_roles, justified_by,
  provenance, `dependency_level`), and the carrier → manifest directions agree
  for all 17 items.
- Design budget (24 items for the pair) and the 100-item page cap are
  respected (11 + 6).

## Design vs plan-spec and implementation notes (recorded as required)

- `research/plan-spec.json` declares `gr-local-and-global-energy` with
  `requires: ["gr-einstein-and-matter"]`; the design section
  `research/plan-general-relativity-track.md` L122 ("Local And Global
  Energy") names the same declared earlier prerequisite and reserves the page
  as GR06 with `requires: ["GR05"]`. GR05 is the design's scaffold label for
  that same page edge (`gr-einstein-and-matter`); the authored page carries
  `requires: ["gr-einstein-and-matter"]`, so no requires conflict exists.
- GR06 inventory mapping ("M07 Killing current; def volume/flux/charges; M13
  Stokes flux; pthm local balance; rem absence of universal global energy;
  defer ADM to boundary-asymptotic module"):
  - M07 Killing current → `def-gr-killing-field` (batch-69) with the
    redshift-weighted current lemma
    `lem-gr-killing-congruence-kinematics-and-energy-current` and
    `def-gr-killing-energy-charge` here;
  - "def volume/flux/charges" and M13 Stokes flux →
    `def-gr-metric-volume-form-and-current-flux`,
    `lem-gr-metric-divergence-and-density-formula` and
    `thm-gr-density-divergence-and-finite-chain-flux`, which were homed in the
    prerequisite page `gr-einstein-and-matter` (batch-69) and are consumed
    here rather than duplicated; the local "charges" part is
    `def-gr-killing-energy-charge`;
  - pthm local balance → `pthm-gr-local-energy-balance`;
  - rem absence of universal global energy →
    `rem-gr-no-universal-global-energy` plus the page scope note
    `rem-gr-local-and-global-energy-scope-and-deferrals`;
  - defer ADM → recorded explicitly in both remarks; no ADM, Bondi or Komar
    mass is defined, computed or used anywhere in the batch.
- Construction note (fix applied during authoring):
  `rem-gr-no-universal-global-energy` must not consume the B-page item
  `cex-gr-point-normal-chart-does-not-make-second-derivatives-vanish`; the
  dependency was replaced by same-page and same-batch suppliers
  (`thm-gr-point-normal-and-exponential-coordinate-charts`,
  `rem-gr-normal-coordinates-and-local-inertial-frames-scope`) and the prose
  reworded accordingly. Reintroducing the B-leaf dependency would recreate a
  forward edge and is out of scope for this batch.
- Choice convention: the page's bundle-structure assumptions are carried by
  `def-countable-choice` (axiom AC_ω) through
  `def-gr-observer-congruence-and-adapted-charts`; the two remarks record
  this and state that no other choice principle is used. No choice-free
  branch is claimed (the page is a smooth-branch page).

## Dependency levels (in-run dependencies only)

Computed mechanically from the run manifests; A page:
`def-gr-observer-energy-momentum-current` 4,
`lem-gr-observer-energy-momentum-decomposition` 5,
`def-gr-measured-energy-density-flux-and-stress` 6,
`def-gr-congruence-acceleration-and-expansion` 6,
`lem-gr-congruence-acceleration-and-expansion-properties` 7,
`lem-gr-energy-momentum-current-divergence` 8,
`lem-gr-killing-congruence-kinematics-and-energy-current` 9,
`def-gr-killing-energy-charge` 10, `pthm-gr-local-energy-balance` 13,
`rem-gr-no-universal-global-energy` 14,
`rem-gr-local-and-global-energy-scope-and-deferrals` 15. B page:
`ex-gr-translating-dust-measured-energy-and-balance` 9,
`ex-gr-boost-congruence-energy-balance-in-flat-space` 10,
`ex-gr-perfect-fluid-energy-equation-from-the-local-balance` 9,
`ex-gr-killing-energy-charge-of-a-static-dust` 14,
`cex-gr-measured-energy-density-depends-on-the-observer` 7,
`cex-gr-conservation-does-not-imply-nonnegative-measured-energy-density` 7
(raised from 6 when `def-gr-energy-conditions` was examined and the
dependency re-checked).
Batch scheduling metadata: batch 70 is level 5, requiring batch 69
(`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`);
all batch-65/66/67/68/69 suppliers actually used were inspected at statement
level and are recorded `ready` in their own batches.
`node tools/physics-support/item-dependency-levels.mjs check --run
physics-cm-qm-gr-79-2026-10-11` reports no line naming a batch-70 item or
page; its 68 errors are the empty scaffold inventories of unauthored batches
(`cm08-…`, `cm09-…`, `gr-gr14-…`, `qm-…`).

## Sources and dispositions

Four authoritative sources, all fetch-verified with `source-fetch-check
--stamp` (PDF byte counts and sha16 stamps on file):
Carroll arXiv:gr-qc/9712019v1 (238 pp.), Reall Part III GR 2022-10-12
revision (125 pp.), Tong Part III GR Michaelmas 2019 (289 pp.) and
Gourgoulhon arXiv:gr-qc/0703035v1 (220 pp.). Twenty-one harvested results:
14 `included` (with item IDs), 5 `inline` and 2 `out-of-scope` — the Komar
integrals (Tong §4.3.3) and the ADM Hamiltonian mass (Tong §4.5), both
excluded because the design defers asymptotic/boundary structure to a
future module and no such structure exists on this page. Every source has a
single recorded recovery attempt and a current fetch stamp in
`research/physics-cm-qm-gr-79-2026-10-11-batch-70.coverage.json`;
`coverage-checklist --require-destination` is 0 error(s) / 0 warning(s) and
`source-fetch-check` reports 4/4 fetch-verified, 4/4 resolved.

## Proof contracts

`research/physics-cm-qm-gr-79-2026-10-11-batch-70.proof-contracts.json`
covers the 13 proof-bearing items: the 11 items with numbered arguments plus
the two remarks (worksheet-only, empty citations/derivations, following the
batch-69 convention that definitions are excluded — the four definitions on
this page are discharged by their `justified_by` lemmas). Totals: 137
citation contracts, 49 derivation contracts, 0 routine steps, 104 boundary
rows (64 `not_applicable`, 40 `checked`), each boundary row authored
item-specifically. `proof-contract.mjs --strict` → 13/13 items, 0 error(s),
0 warning(s) (no shotgun-bracket warning);
`boundary-audit.mjs --fail-on-contradicted` → no template clusters at
≥3 members and no contradicted dispositions from the three detectors. If any
item text changes after this record, citations/derivations must be
regenerated with `regen-contract-entries.mjs` and precheck, proof-layout and
the boundary audit re-run.

## Cross-batch dependency input

`research/physics-cm-qm-gr-79-2026-10-11-batch-70.cross-batch-dependencies.json`
holds 172 `verified` rows (171 item edges + 1 page edge), covering exactly
the 172 out-of-batch edges declared by this batch's items and pages:
suppliers in batches 65 (`gr-framework-and-geometry`), 66
(`gr-tensors-and-observers`), 67 (`gr-connections-and-free-fall`), 68
(`gr-curvature-and-tides`) and 69 (`gr-einstein-and-matter`), plus imported
mathematical suppliers (which the ledger treats as context, not run
batches). Evidence for fact-backed edges quotes the linking fact and the
steps that cite it; statement-level edges quote the linking clause; the 38
edges with no wikilink occurrence are recorded with their specific
declared role (formulation prerequisite, definition discharge or supporting
premise) and the clause through which the supplier is actually consumed —
none is a placeholder. `frontier-dependency-ledger.mjs refresh --run
physics-cm-qm-gr-79-2026-10-11` then reports batch 70 as reviewed, all 172
consumer-70 edges with at least one review, and 0 orphaned reviews from the
batch-70 input.

## Check results (actual outputs)

- `precheck` (tsx-run, 11 numbered-argument items): 11 checked, 0 failing.
- `rendercheck`: 17 files OK (wikilinks, delimiters, KaTeX, frontmatter).
- `proof-layout`: 17 items, 49 steps, 0 defects.
- `manifest-deps`: 17 items, 0 normalized, 0 error(s).
- `content-policy`: 17 scoped items, 0 error(s), 0 warning(s).
- `depcheck --items-file` (17 IDs): OK; prerequisite cycle checks passed.
- `audit-manifest` over all 79 batch manifests: 10624 relationships over 889
  items, 0 defects.
- `coverage-checklist --require-destination`: 1 page, 21 harvested result(s),
  0 error(s), 0 warning(s).
- `source-fetch-check`: 4/4 source(s) fetch-verified; 4/4 resolved.
- `proof-contract --strict`: 13/13, 0/0. `boundary-audit
  --fail-on-contradicted`: clean.
- `extcheck`: 28068 items, 0 recorded-not-proved, 0 resting on them.
- `manifest-integrity --run`: 158 pages owed, 158 in the manifests, no scope
  drift.
- `citecheck` (heuristic, corpus-wide 332 warnings): no warning names a
  batch-70 item.
- `step1-decisions check --run`: 17/17 batch-70 records current; no batch-70
  entry in the 119 work entries (see Readiness below).
- `fwdcheck`: corpus-wide FAIL with pre-existing findings elsewhere (e.g.
  `thm-zero-weak-gradient-implies-componentwise-constancy`); no batch-70 item
  appears in any finding line — the 17 IDs occur only in the informational
  "carry the forward marker (inherited)" inventory.
- `validate-plan --run`: FAIL with exactly 2 errors, both in other batches
  (`qm-math-controlled-dynamics` and `qm-math-fock-and-equilibrium`,
  undeclared-prereq). No batch-70 finding; the batch's plan lines (orders
  243/244) render as declared.

## Published defects

No entry of the canonical defect ledgers (`research/defect-ledger.jsonl`,
`research/DEFECT-LEDGER.md`) names `gr-local-and-global-energy`, its
companion, or any of the 17 items; no published defect was found that forms
an actual prerequisite of this batch. The gr-repair selection lists both
pages, but that is the owner-directed repair scope, not a defect record.

## Unresolved run-wide findings not owned by batch-70 (recorded, not fixed)

- `validate-plan` errors above are owned by the CM/QM batches that declared
  them; this batch does not edit other batches' pages or the shared plan.
- `item-dependency-levels check` errors are empty-scaffold inventories of
  unbuilt batches; batch 70 has no mismatch.
- `fwdcheck` corpus findings predate this batch (12,710+ error lines) and
  none names a batch-70 item.
- `proof-contract-coverage.mjs --run … --contracts …` cannot run yet: its
  frontier gate scope includes unbuilt pages (first error: "Empty or invalid
  frontier page inventory cm08-symmetry-noether-and-conditional-conservation").
  This is a run-state limitation, not a batch-70 contract gap; the batch's
  own contract coverage (13 entries for 11 proof-bearing items plus the two
  remarks) was verified directly by `proof-contract.mjs --strict`.

## Readiness

After the carriers above were frozen, each of the 17 items was recorded
`ready` in ascending dependency order with
`step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 --item ID
--decision ready --dependencies <direct deps> --reason …`, citing the
completed authored carrier, the adequate met prerequisites, the page
placement and the proof contract. All 17 records were written with
`owner: false` (no escalation was needed and none was overwritten), in the
order of the item levels 4, 5, 6, 6, 7, 7, 7, 8, 9, 9, 9, 10, 10, 13, 14,
14, 15. `step1-decisions.mjs check --run physics-cm-qm-gr-79-2026-10-11`
then reported 889 items with 838 ready and `closed: false`; its 119 work
entries are 26 missing records and 25 changed records of other batches
(concurrent run-level work) plus the 68 empty scaffold inventories of
unauthored batches, and **no batch-70 item or page appears in the work
list**. All 17 batch-70 records are current (`closed`). Independent review
still follows in Step 2; a readiness record is not mathematical approval.

## Honesty and residual uncertainty

The conditional deductions (lemmas, examples, counterexamples, physics
theorem) were written to be checkable line by line and their citations were
mechanically verified against the exact quoted statements; no source reading
is asserted beyond what is recorded in the coverage file. The main residual
risks flagged for Step 2/3 reviewers: (a) the sign conventions of
$J=-T(\cdot,n)$, $\Phi=J-\mu n$ and $Q_\xi=-\Phi_{T(\cdot,\xi)}$ must be
checked against the cited sources' conventions; (b) the 38 context edges
without wikilinks should be re-examined against their suppliers' actual
scopes; (c) the remarks' deferral list should be checked against the
boundary-asymptotic module's eventual reservation. No claim of independent
review is made here.
