# Step 3b — scaffold audit and authoring: `sequences-and-limits`

Run `frontier-44-special-representation-examples-28`, batch 3 (orders
181/182), role `alpha-high`, label
`step3b-pair-sequences-and-limits-3a3b18243d276ac6`. A page
`sequences-and-limits` (published, frozen, 18 published items), B page
`sequences-and-limits-examples` (14 new items, this dispatch authors them).
Category `real-analysis`. Only this pair is owned; sibling pairs in shared
carriers are preserved. Report opened at entry 2026-10-10 before any edit.

## Owned IDs and open obligations at entry

A-page items (published, preserved; audited read-only as suppliers, item
decisions recorded; no edits): `def-sequence`,
`lem-convergent-implies-bounded`, `lem-convergent-implies-cauchy`,
`lem-index-map-grows`, `lem-limit-of-tail`, `lem-limit-unique`,
`lem-null-times-bounded`, `thm-squeeze`, `def-divergence-to-infinity`,
`lem-subsequence-inherits-limit`, `thm-algebra-of-limits`,
`fs-bounded-implies-convergent`, `lem-limit-abs`, `lem-limit-preserves-order`,
`lem-reciprocal-of-null-diverges`, `fs-limit-preserves-strict-inequality`,
`fs-subsequence-convergence-implies-convergence`, `rem-sequence-conventions`.

B-page items (13 originally scaffolded + 1 owner-repair addition; all
authored here): `ex-the-reciprocal-of-k-plus-one-is-null` (L1),
`ex-changing-finitely-many-terms` (L2), `ex-a-rational-expression-limit` (L3),
`ex-square-roots-diverge-to-infinity` (L3),
`cex-null-times-unbounded-need-not-be-null` (L3),
`cex-sum-of-divergent-sequences-converges` (L3),
`cex-quotient-rule-needs-a-nonzero-limit` (L4),
`cex-squeeze-with-unequal-bound-limits` (L4), `ex-absolute-value-limit` (L4),
`ex-an-alternating-null-sequence` (L4),
`ex-geometric-sequences-all-real-ratios` (L4),
`ex-subsequences-of-a-null-sequence` (L4),
`ex-successive-root-differences` (L4), `ex-two-squeeze-computations` (L4).
Deliverables: 14 item files, `library/real-analysis/sequences-and-limits-examples.md`,
`research/frontier-44-special-representation-examples-28-batch-3.proof-contracts.json`,
32 current item decisions, and this report.

Open obligations at entry:
1. Direct in-run prerequisite pairs to inspect while unfinished:
   `countability-and-uncountability` (supplies `def-countable`,
   `lem-subset-of-countable`, `lem-pigeonhole` to `rem-sequence-conventions`)
   and `roots-and-rational-powers` (B-only backward prerequisite supplying
   `def-integer-power`, `lem-power-laws`, `lem-power-monotone`,
   `lem-bernoulli-inequality` to `ex-geometric-sequences-all-real-ratios`,
   and `thm-of-square-roots`/`lem-of-square-monotone` to the square-root
   examples). Author consumers regardless; keep any consumer decision
   escalated until the completed supplier and its actual use are reconciled.
2. A-page items are published content: audit for supplier adequacy, report
   defects, do not edit.
3. Choice: the pair is choice-free (B scaffolds declare no
   `def-axiom-of-choice`); verify this per item against the actual suppliers.

## Checkpoint log

### 1. `ex-the-reciprocal-of-k-plus-one-is-null` (B, level 1) — authored

- Exact claim: $x_k=(k+1)^{-1}$ converges to $0$; every term defined and
  positive; no choice. Suppliers read: `lem-rat-embeds-dense`,
  `lem-rat-archimedean`, `lem-of-inverse-positive`, `lem-of-naturals-positive`,
  `lem-nat-order-add-compatible`, `def-nat-order`, `def-abs-value`,
  `def-real-limit`, `def-sequence`.
- Deps set to actual uses (dropped `thm-reals-ordered-field`,
  `lem-of-abs-value`, `cor-of-one-positive`, `lem-of-add-order`); in-run dep
  remains `def-sequence`, so `dependency_level: 1` (recomputed, matches
  manifest). Item file `items/ex-the-reciprocal-of-k-plus-one-is-null.md`.
- Checks: precheck PASS; rendercheck clean; proof-layout 5 steps 0 defects;
  `proof-contract --strict` 0 errors; boundary-audit/fidelity clean. Item
  decision `accept` recorded (sha256 `fa8b47e2…`).
- Open: none.

### 2–6 (B, levels 2–3) — authored

- `ex-changing-finitely-many-terms` (L2; tail invariance plus discreteness
  bound 100; adopted the precheck canonical renumbering 2.2/2.3/3.1),
  `cex-null-times-unbounded-need-not-be-null` (L3; product ≡ 1 fails the
  ε = 1 test; boundedness hypothesis essential), `cex-sum-of-divergent-sequences-converges`
  (L3; k and −k, sum constantly 0), `ex-a-rational-expression-limit` (L3;
  algebra of limits on 2 + 3(k+1)^{-1} over 5 + (k+1)^{-1}; canonical
  renumbering 1.3/2.1/3.1/4.1), `ex-square-roots-diverge-to-infinity` (L3;
  Archimedean comparison via `thm-of-square-roots` and
  `lem-of-square-monotone`; canonical renumbering 2.1/2.2).
- Each item: deps synced to actual uses (manifest + item frontmatter
  `dependency_level` recomputed; levels unchanged against the scaffold), item
  decision `accept` recorded, precheck/rendercheck/proof-layout/strict contract
  all clean. Supplier items read: `lem-limit-of-tail`, `lem-nat-discrete`,
  `prop-of-reciprocal-order`, `lem-null-times-bounded`, `def-divergence-to-infinity`,
  `thm-algebra-of-limits`, `thm-of-archimedean`, `thm-of-square-roots`,
  `lem-of-square-monotone`, `lem-q-embeds`, `def-field`, `def-ordered-field`.
- Open: none for these items; the in-run power suppliers for
  `ex-geometric-sequences-all-real-ratios` are still unauthored at this
  checkpoint and will be flagged there.

### Final handoff — 2026-10-10

**Completed IDs.** All 14 B items authored, registered in the batch-3 manifest
with their actual dependency lists and recomputed `dependency_level`s, and each
given a current item decision:

| item | level | file |
|---|---:|---|
| `ex-the-reciprocal-of-k-plus-one-is-null` | 1 | items/… |
| `ex-changing-finitely-many-terms` | 2 | authored |
| `ex-a-rational-expression-limit` | 3 | authored |
| `ex-square-roots-diverge-to-infinity` | 3 | authored |
| `cex-null-times-unbounded-need-not-be-null` | 3 | authored |
| `cex-sum-of-divergent-sequences-converges` | 3 | authored |
| `cex-quotient-rule-needs-a-nonzero-limit` | 4 | authored |
| `cex-squeeze-with-unequal-bound-limits` | 4 | authored |
| `ex-absolute-value-limit` | 4 | authored |
| `ex-an-alternating-null-sequence` | 4 | authored |
| `ex-subsequences-of-a-null-sequence` | 4 | authored |
| `ex-successive-root-differences` | 4 | authored |
| `ex-two-squeeze-computations` | 4 | authored |
| `ex-geometric-sequences-all-real-ratios` | 4 | authored |

The B page `library/real-analysis/sequences-and-limits-examples.md` (draft,
`items: []`, 14 examples) is written, and the batch-3 proof-contracts file
`research/frontier-44-special-representation-examples-28-batch-3.proof-contracts.json`
carries the 14 contract entries (scope = the authored items; the 18 preserved
published A items keep their existing published audit evidence and are not
re-contracted here). All 32 item decisions (14 B + 18 A) are recorded and
current at handoff.

**Checks actually run (final pass).**

| Command | Result |
|---|---|
| `node tools/proof-layout.mjs <all 14 changed item paths>` (one batched command) | 14 items, 80 steps, 0 defects |
| `node tools/tsx-run.mjs tools/precheck.mts <all 14 items>` | 14 checked, 0 failing |
| `node tools/rendercheck.mjs <14 items + B page>` | OK, 15 files, all math/YAML parse |
| `node tools/content-policy.mjs …batch-3.pages.json` | 32 scoped items, 0 errors, 0 warnings |
| `node tools/proof-contract.mjs …batch-3.proof-contracts.json --strict` | 0 errors, 0 warnings, 14/14 items |
| `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template` | no contradicted dispositions, no template reuse |
| `node tools/citation-fidelity.mjs … --fail-on-missing-quote` | every quote found; no widening candidates |
| `node tools/finite-smoke.mjs …` | 0 errors, 0 checks (no named obligations) |
| `node tools/risk-report.mjs …` | 0 errors, 14 items routed for Step-5a review (expected) |
| `node tools/item-dependency-levels.mjs check --run …` | 861 items, no error (levels recomputed after every dep edit) |
| `node tools/validate-plan.mjs research/plan-spec.json --repo . --run …` | OK; orders 181/182 validated, 18 + 14 items, requires as declared |
| `node tools/manifest-deps.mjs …batch-3.pages.json` | 32 items, 0 errors |
| `node tools/step3-decisions.mjs check --run … --phase final` | all 32 owned item decisions closed at the time of the pass |
| `node tools/frontier-dependency-ledger.mjs refresh --run …` | refreshed and deduplicated |
| `node tools/frontier-item-gate.mjs --run … --tool depcheck` | no error for any owned item; the only failures are the documented `focus-item-unknown` rows for sibling items still being authored mid-run |

**Supplier reconciliation.** `ex-geometric-sequences-all-real-ratios` consumes
`def-integer-power`, `lem-power-laws`, `lem-power-monotone` and
`lem-bernoulli-inequality` from the in-run `roots-and-rational-powers` pair.
All four were read in full and are **published** items of that pair's preserved
A page, so no supplier is unfinished and no consumer decision needed
escalation; the batch-3 cross-batch input already carries the four item rows
plus the page row, and the unified ledger was refreshed. Its other suppliers
(`thm-of-archimedean`, `lem-of-inverse-positive`, `fs-bounded-implies-convergent`,
`lem-index-map-grows`, `lem-subsequence-inherits-limit`, and the A-page items)
are published and were read at use. The A-page supplier audit found no defect:
each of the 18 published items matches the hypotheses, directions and
conventions its consuming B steps rely on; all were accepted unchanged and
none is edited here.

**Added suppliers.** None. No new prerequisite item was needed: every B claim
is supported by published library items or earlier items of the same page.

**Published concerns.** None confirmed. Two non-blocking observations were
rechecked and left untouched: the A page carries the three false statements
even though `plan-realanalysis-completion-track.md` §9.1 still proposes moving
them to the B page (owner action, already recorded by the beta); and the
`coverage-low-yield` advisory on the published A page is the expected shape of
a preserved page. No published item was edited by this dispatch.

**Open obligations.** None mathematical. One mechanical caveat: item receipts
hash their whole transitive closure (including the ZFC foundations chain and
sibling manifests), so concurrent sibling writers made earlier receipts stale
during this dispatch; all 32 were re-recorded after the final edit pass and
were current at handoff, and the step-3 final gate will confirm freshness once
the run's writers drain.
