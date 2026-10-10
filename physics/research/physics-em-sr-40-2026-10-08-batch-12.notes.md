# Batch 12 notes — `sr-experimental-interface` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, label `batch-12`, Step-1 scaffold
construction, 2026-10-09. Owned pair: `sr-experimental-interface` (A, order 231,
category `special-relativity`, library `physics`) and
`sr-experimental-interface-examples` (B, order 232). No item file, page,
published content, shared plan, engine state or verdict was edited; Step-1
readiness records are not independent mathematical approval and Step-3
authoring/review follows.

Artifacts written by this batch:

- `research/physics-em-sr-40-2026-10-08-batch-12.pages.json` — 3 A items and 2 B
  items, each with `domain`, `deps`, `dependency_roles`, `dependency_level`,
  `statement`, construction `strategy`, sources and `physical_scope`; page
  metadata preserved exactly. Published by atomic rename from a validated
  sibling prep file (complete A/B array, never a partial array).
- `research/physics-em-sr-40-2026-10-08-batch-12.coverage.json` — 3 active
  sources, all fetch-verified; 15 source-heading harvest rows and 5 canonical
  rows, every one disposed.
- `research/physics-em-sr-40-2026-10-08-batch-12.cross-batch-dependencies.json` —
  21 rows (2 page edges and 19 item edges into batches 1, 2, 3, 4, 7 and 8),
  each with required content, use/location and hypothesis checks, status `open`.
- `research/physics-em-sr-40-2026-10-08-step1-<item>.json` — 4 `ready` records
  and 1 `escalated` record, bound to current content and dependency hashes. One
  late manifest edit (see the `physics-check` bullet below: the dependency role
  of the earlier B-page example was changed from `physical-result` to
  `operational-prerequisite`) was published by the same atomic-rename procedure
  and the affected readiness record was re-recorded on the current bytes.
- this notes file.

Authority read in full before construction: `AGENTS.md`, `CLAUDE.md` (workspace
and parent), `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`
(including the mathematical-rigor and statistical-evidence/double-slit
sections), the binding owner direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`, both listed
design locations, the full SR source design
`research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md`
(SR12 reservation, "Postulates, primitives and units", "Precise objects" and
"Bridges and empirical boundary"), the SR12 rows of
`.../scaffold/prose-scaffold.md` and `.../scaffold/mathematical-prerequisites.md`
(M20), the M20 entry of `.../closure-ledger.json`, the current item inventories
of batches 1–11 for every supplier used, `research/plan-spec.json`, the
`drift-evidence.json` verdict for this page, the four reader reports/ledgers and
the local full-text extracts (Crowell, Carroll, Tong, Reall) for the pages/rows
actually read, and the published item statements of every imported mathematical
supplier used.

## Which design controls, and design/plan comparison

`research/plan-special-relativity-track.md` L267–L283 ("Experimental Interface",
the SR12 reservation) **controls** this pair: it fixes the page ids/orders
231/232, category, library, companion, titles, the declared earlier
prerequisites, the exact inventory ("def operational model/data/calibration/
uncertainty vocabulary; rem proposed primary-report research queue; no exp item
until actual reports read; comparison pthm requires M20"), the budget 16/8 and
the closure note "primary-report queue only; no experiment invented".
`research/plan-general-relativity-track.md` L270–L286 ("Experimental Interface",
the GR12 reservation, order 255, `requires` GR07–GR10) was read in full: it is a
**different pair** declared for the general-relativity category; it consumes
"observation/analysis architecture" and a "primary redshift, delay,
light-deflection, perihelion, binary and interferometer report queue" of its own
and states no claim of this SR pair. It is not part of this batch.

Compared with `research/plan-spec.json`: page ids, kind, orders 231/232,
category, library, titles, companion links and the declared `requires`
(`sr-forces-and-continuum`, `sr-light-and-doppler`) agree exactly with the
controlling design. **One recorded difference (the plan controls; no material
conflict):** the design reservation names earlier prerequisites SR03
(`sr-worldlines-and-clocks`), SR07 (`sr-light-and-doppler`), SR08
(`sr-energy-momentum`) and SR09 (`sr-forces-and-continuum`), while the plan
declares only `sr-forces-and-continuum` and `sr-light-and-doppler`. The plan's
closure contains all four names: `sr-forces-and-continuum` → `sr-energy-momentum`
(SR08) → `sr-observer-measurements` → `sr-worldlines-and-clocks` (SR03), and
`sr-light-and-doppler` (SR07) → `sr-observer-measurements`. Every item
dependency scaffolded here resolves inside that closure, verified by direct
page→home computation over the 40 manifests and `library/` listings and by the
plan gate; unlike batch 11, no additional published math home had to be
declared in `requires`. The plan carries no item inventories for these pages
(empty), so there is no item-level plan conflict. The Step-1 drift verdict for
this page is `no-drift` and `drift-review-check --run` reports 0 blocked edges.

## Scope built (design promise → items)

| Design inventory | Item(s) |
|---|---|
| def operational model/data/calibration/uncertainty vocabulary | `def-sr-experiment-interface-vocabulary`: clauses (a) run descriptions, (b) operational model with the declared interpretation obligation $(*)$, (c) data records with condition annotations, (d) calibration declarations, (e) uncertainty vocabulary, (f) comparison claims are separate (with the M20 reservation), (g) well-definedness and scope. |
| rem proposed primary-report research queue | `rem-sr-primary-report-research-queue`: the four declared destination families, the apparatus/preparation/operational-definition/calibration/sampling/systematics/measured-value/limitation fields a future experiment item must carry, the M20 requirement for the comparison theorem, and the statistical qualifications. |
| no exp item until actual reports read | No `exp-` item is scaffolded anywhere in this batch; the constraint is recorded in clauses (i), (iii) and (iv) of the remark and in every experimental coverage disposition. |
| comparison pthm requires M20 | `pthm-sr-specified-model-comparison`, scaffolded on the A page and recorded **escalated** — see Findings. |

B page: `ex-sr-operational-record-arithmetic-worked` (the vocabulary's clauses
(a)–(c) instantiated on the framework's own longitudinal Doppler prediction,
with the exact parameter window $[1719/18281,\,2079/17921]$ for the declared
illustrative record $9/10\pm1/100$) and
`cex-sr-bounded-record-does-not-identify-the-parameter` (refutes record-to-
parameter uniqueness with the two exact rational witnesses, difference
$7200000/327613801>0$).

Item kinds/domains: 1 definition (physics), 1 remark (physics), 1
physics-theorem (physics, escalated), 1 example (physics), 1 counterexample
(physics). Dependency levels computed by `item-dependency-levels.mjs`: 16, 17,
17, 17, 18. The A page holds 3 items and the B page 2, far below the 100-item
cap; nothing in this batch depends on a B-page item outside the same B page, and
no `justified_by` or `forward_refs` edge is used.

Qualifications preserved from the design and content model: the vocabulary
defines declared structures only — no measurement, no apparatus behaviour, no
probability or sampling law and no statistical inference; the remark asserts no
dataset, value, precision or empirical support; the comparison theorem is not
stated against secondary narratives or invented data; the two B items declare
their numerical values illustrative and not measurements; no value of $c$ or
any other constant is asserted.

## Dependency verification (actual uses)

All in-run suppliers were read for statement, hypotheses, conventions and
direction before use: `def-sr-affine-minkowski-model`,
`def-causal-classification-of-lorentz-vectors`,
`def-inertial-frame-and-inertial-chart`,
`def-sr-si-units-and-coordinate-conventions`, `post-sr-ideal-clocks-and-light`
(batch 1); `def-lorentz-boost` (batch 2);
`def-sr-regular-causal-curve-and-worldline`, `def-sr-proper-time` (batch 3);
`def-sr-chart-tetrad-and-congruence-distinction`,
`def-sr-operational-radar-protocol` (batch 4);
`def-sr-affine-phase-and-wave-covector`,
`def-sr-null-wave-covector-and-observer-frequency`,
`post-sr-ideal-plane-wave-model`,
`pthm-sr-null-wave-doppler-and-aberration` (batch 7);
`def-sr-observed-energy-momentum-and-kinetic-energy`,
`post-sr-massive-particle-dynamics`, `post-sr-ideal-massless-particle-momentum`
(batch 8); and the published mathematical suppliers `def-rational-power`,
`lem-rational-power-monotone`, `lem-rational-power-laws`, `lem-of-sign-rules`.
Points checked in particular:

- Clause (a) admits exactly object kinds whose suppliers exist with declared
  domains and regularity: events (`def-sr-affine-minkowski-model`), causal
  character (`def-causal-classification-of-lorentz-vectors`), future timelike
  worldlines with proper-time functions (`def-sr-regular-causal-curve-and-
  worldline`, `def-sr-proper-time`), future unit vectors and smooth congruences
  (`def-sr-chart-tetrad-and-congruence-distinction`), future null wave
  covectors with phases (`def-sr-affine-phase-and-wave-covector`), radar
  readings (`def-sr-operational-radar-protocol`), observer frequencies
  (`def-sr-null-wave-covector-and-observer-frequency`) and observer
  energy/momentum quantities
  (`def-sr-observed-energy-momentum-and-kinetic-energy`).
- Clause (b)'s interpretation obligation $(*)$ is deliberately a checkable
  declaration, not a structural property; the Doppler instance of the B page
  discharges it with `pthm-sr-null-wave-doppler-and-aberration` clause (ii),
  and its hypothesis $\beta\cdot s=\beta$, $|\beta|<1$ matches the boost's
  domain.
- Clause (c) and (d) closed boxes are well defined because every bound is
  nonnegative; units are those of
  `def-sr-si-units-and-coordinate-conventions` (dimensionless $\eta$ entries,
  $x^0=ct$), and no numerical value of $c$ is consumed.
- The Doppler example uses clause (ii) with the passive boost of
  `def-lorentz-boost` at $\beta e_1$ and $s=e_1$: $\omega_o/\omega=\gamma_\beta
  (1-\beta)=\sqrt{(1-\beta)/(1+\beta)}$ by the rational-power laws; strict
  decrease is elementary order algebra with `lem-of-sign-rules` and the
  strictly increasing square root of `lem-rational-power-monotone` (claim 2,
  $r=1/2$).
- No missing, circular, forward or inadequate dependency was found; no choice
  principle is invoked by any item (all constructions are finite tuples and
  pointwise evaluations), and no empirical premise is consumed (so no
  `empirical_premises` entries arise).

## Cross-batch dependencies

`research/physics-em-sr-40-2026-10-08-batch-12.cross-batch-dependencies.json`
holds 21 rows: the two page edges (`sr-experimental-interface` →
`sr-forces-and-continuum` and → `sr-light-and-doppler`) and 19 item edges into
batch 1 (5: the vocabulary's model, causal-classification, frame, units and
ideal-clock/postulate suppliers; 1 for the Doppler example's chart supplier),
batch 2 (1: `def-lorentz-boost`), batch 3 (2), batch 4 (2), batch 7 (4) and
batch 8 (3). Every supplier is scaffolded and recorded ready on its batch but
not yet authored, so all rows are `open` until Step-3 authoring and review.
`frontier-dependency-ledger.mjs refresh --run` succeeded: batch 12's 21 edges
each carry exactly one review row and there are no orphaned reviews; the
remaining unreviewed batches are 23–40, still in flight.

## Sources (full text)

1. B. Crowell, *Special Relativity*, revision 2020-12-10, Chapter 1 §1.3
   pp. 23–31, Chapter 3 §3.2 pp. 55–59, Chapter 5 §5.1 pp. 121–123 and the
   narrative passages pp. 13–15, 26, 28–29 —
   `https://archive.org/download/sr_20220102/sr.pdf`, fetch-verified
   2026-10-08 (sha256_16 `4c11e8f367267d53`, 10 728 180 bytes, 246 pages; the
   same pinned copy the reader team read).
2. S. M. Carroll, *Lecture Notes on General Relativity*, arXiv:gr-qc/9712019v1,
   Chapter 1 printed pp. 1–5 (PDF pp. 8–12) —
   `https://arxiv.org/pdf/gr-qc/9712019`, fetch-verified 2026-10-08
   (sha256_16 `d4cbfeed3a18370c`, 1 583 209 bytes, 238 pages).
3. D. Tong, *General Relativity* (Cambridge Part III, 2019), §1.2.2 printed
   pp. 12–16 and §1.2.5 printed pp. 24–25 — author-hosted copy
   `https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf`,
   fetch-verified 2026-10-08 (sha256_16 `3ba65dc61f22a69c`, 3 108 446 bytes,
   290 pages; byte-identical to the reader-pinned copy).

Dispositions: 20 harvested results — 7 `included` (2 source passages realizing
the vocabulary definition plus the 5 canonical pair results), 1 `inline`
(Crowell's ether-and-Maxwell context absorbed into the queue remark), 11
`deferred` (each with a resolving destination: `sr-worldlines-and-clocks`,
`sr-observer-measurements`, `sr-light-and-doppler`, `sr-spacetime-primitives`,
`sr-proper-time-comparisons`, `gr-experimental-interface`, and `owner-decision`
for the four experiment families whose primary reports were not read) and 1
`out-of-scope` (Carroll's narrative numerical value of $c$). No result is left
undisposed, and no primary-report quantitative claim is recorded anywhere.

## Checks run (actual results)

- `manifest-deps` on the batch-12 manifest and on all 40 manifests (final
  state): 5 and 299 items, 0 errors.
- `content-policy --manifest-only` on all 40 manifests (final state): 299
  scoped items, 0 errors, 0 warnings.
- `item-dependency-levels check --run`: my five items produce **no** error
  (labels 16/17/17/17/18 match the computed levels; no cycle, no forward or
  B-leaf edge); the only errors are 34 `empty scaffold inventory` lines for
  the 17 still-empty batches 24–40.
- `physics-check --run … --plan research/plan-spec.json` (the native
  physics-content gate in plan mode): the first run reported 1 error,
  `role-supplier [cex-sr-bounded-record-does-not-identify-the-parameter]:
  ex-sr-operational-record-arithmetic-worked is not an established physical
  result` — the validator reserves role `physical-result` for
  physics-theorem/thought-experiment suppliers, and the B-page example is an
  example. Repaired by changing that role to `operational-prerequisite`
  (complete page array re-validated and re-published atomically; the affected
  readiness record re-recorded); the re-run reports 0 errors over 299 items.
- `coverage-checklist --require-destination`: 1 page, 20 harvested results,
  0 errors, 1 advisory warning (`coverage-low-yield`, 7/20) — see Findings.
- `source-fetch-check --stamp` then check mode: 3/3 sources fetch-verified,
  3/3 resolved, 0 documented drops.
- `url-sweep --coverage … --recover --fail-on-dead` (output to `/tmp` to avoid
  clobbering the run's shared liveness file): 3/3 live, 0 failed, 0
  recoverable from the archive, 0 source drops.
- `source-backing --coverage … --liveness …`: "1 authored result(s) across 1
  file(s), every one still backed by an openable source or documented
  alternative argument".
- `step1-decisions check --run` (final state): 299 items, 286 ready, closed `false`; this
  batch contributes exactly one open owner-held row, the escalated
  `pthm-sr-specified-model-comparison` (a worker may not resolve it).
- `manifest-integrity --run`: 80 pages owed, 80 in the manifests, no scope
  drift.
- `drift-review-check --run`: 40 pages reviewed, 0 blocked edges; every owed A
  and B page above the 95% published-or-earlier-in-run rule.
- `frontier-item-gate --tool validate-plan` (run scope): an early pass over the
  287-item state exited 0 with no error naming this pair (13
  `redundant-prereq` warnings on other batches, none naming
  `sr-experimental-interface`). The final pass reads a run in which the
  concurrent writer of batch 23 (`em-primitives-and-postulates`) has populated
  its pages; it exits 1 with 8 errors, all naming batch 23's pages (one
  `b-leaf` and seven `undeclared-prereq` findings on
  `em-primitives-and-postulates(-examples)`). **None names this pair**; this
  pair's page appears with 3 and 2 items and its declared `requires`, with no
  error or warning attached to it.
- `frontier-item-gate --tool extcheck -- --manifest-only`: cannot run to
  completion — `readRunManifestPages` aborts with "Invalid or empty current
  page in physics-em-sr-40-2026-10-08-batch-23.pages.json". This is run-level
  state, not a batch-12 defect; batch 11 recorded the same limitation for
  extcheck manifest mode, and `fwdcheck` has no manifest mode in the frontier
  wrapper (the flag is rejected). Authored-carrier external/forward checks
  follow in later stages.
- `frontier-dependency-ledger refresh --run`: refreshed and deduplicated;
  batch 12 in the reviewed set with no orphaned reviews.

## Findings for owner/operator reconciliation

1. **Escalation, owner decision required: `pthm-sr-specified-model-comparison`.**
   The design's comparison theorem ("comparison pthm requires M20") cannot be
   stated or proved in this build. The exact gap is the M20 primary-report and
   analysis layer (closure-ledger status "no-experiment-authored;
   primary-report-queue-retained"); no primary report has been read, the design
   forbids authoring experiment items until actual reports are read, and
   clause (f) of the definition makes comparison claims separate from the
   vocabulary. The item is scaffolded with an explicit blocked record and a
   Step-1 `escalated` decision; the owner must either supply/authorize actual
   primary reports plus the analysis layer (after which the theorem can be
   stated and proved conditionally) or defer the item out of this pair's build
   scope with a recorded destination. No statement, proof, dataset or
   substitute was invented.
2. **Advisory coverage warning (expected).** `coverage-low-yield` reports 7 of
   20 harvested results scaffolded. This is the direct consequence of the
   design's closure note "primary-report queue only; no experiment invented":
   the experimental harvest is deliberately declined to recorded destinations,
   and every decline carries a specific reason and a resolving destination.
   Alpha should confirm the declines at Step 5; no source-count waiver is
   claimed (3 fetch-verified independent treatments, including a textbook).
3. **Published defects: none found** in the suppliers this batch uses; no
   supplier statement was found false, mistyped or directionally wrong, and no
   repair is proposed.
4. **Recorded, not repaired:** batches 24–40 still carry empty scaffold
   inventories (34 `empty scaffold inventory` lines, and
   `extcheck --manifest-only` aborts on the first empty page), while the
   concurrent writer of batch 23 has populated `em-primitives-and-postulates`
   and that batch currently has 8 run-scope plan errors (one `b-leaf`, seven
   `undeclared-prereq`) in the final pass recorded above. Neither belongs to
   batch 12; both are run-level state that may change before the owner's
   Step-1 gate.
5. **Page-edge observation for Step 4/5:** the current batch-12 item inventory
   does not directly consume a batch-9 (`sr-forces-and-continuum`) item; the
   page `requires` edge is retained as the design/plan declaration (the design
   lists SR09 among the prerequisites, and a future comparison item would
   consume the matter and conservation results). Recorded here for the
   splice/review stages.

## Honest uncertainty

- The five items are scaffold specifications: statements, strategies and
  dependency lists are the promised content, not authored proofs. In
  particular the exact rational window of the B page was derived and
  machine-checked here, but it has not been written as an item file or
  independently reviewed; Step 3 must verify the written statements and
  constructions against these specifications, including the declared
  illustrative status of every number.
- No primary report was read for any of the four queue destinations; the
  narratives named in the remark are secondary textbook/course-note accounts and
  are labelled as such. The destination families are design declarations, not
  evidence, and no measurement, precision or deviation is asserted.
- The escalated comparison theorem's eventual statement cannot be anticipated
  honestly; the escalation record names the exact missing layer rather than
  guessing a formulation.
- The retrieval and reading claims above concern the fetched full texts named in
  the coverage file and the local reader extracts; no independent audit of
  those sources is claimed here.
- The run-scope checks read the whole run while other batches were being
  written concurrently; the batch-23 findings in the final `validate-plan`
  pass and the changing counts (287 → 299 items during this session) are that
  concurrency, not batch 12 edits. Batch 12's own files were not touched by
  any other writer as far as the checks show (its five step1 records and the
  refreshed ledger rows bind to its current bytes).
