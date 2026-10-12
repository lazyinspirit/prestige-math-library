# Batch 46 — Qm Measurement And Instruments

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label `batch-46`, one A/B
pair in `non-relativistic-quantum-mechanics`:

- A `qm-measurement-and-instruments` (order 171, requires
  `qm-observables-and-born-probabilities`);
- B `qm-measurement-and-instruments-examples` (order 172).

All 14 authored items remain `status: draft`. Nothing outside this batch's
ownership was edited; the root mathematics workspace and imported suppliers
are read-only, and the shared `plan-spec.json` was compared against but not
modified. The binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` was
read before construction; it contains no batch-specific override for this
pair, and its general rules (draft in-run mathematics suppliers, carried
choice assumptions, no publishing) are followed.

## Scope built

9 A items and 5 B items, with dependency levels as labelled in the run
manifest (`research/physics-cm-qm-gr-79-2026-10-11-batch-46.pages.json`):

| item | kind | dep. level |
|---|---|---|
| `lem-nrqm-measurement-selective-luders-update` | math lemma | 2 |
| `lem-nrqm-measurement-nonselective-luders-map` | math lemma | 3 |
| `def-nrqm-measurement-framework-declared-measurements-and-instruments` | physics definition (reads P1–P3) | 8 |
| `pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles` | physics theorem | 9 |
| `pthm-nrqm-measurement-degenerate-eigenspace-update` | physics theorem | 10 |
| `pthm-nrqm-measurement-instrument-updates-not-determined-by-effects` | physics theorem | 10 |
| `pthm-nrqm-measurement-finite-effects-dilation` | physics theorem | 11 |
| `pthm-nrqm-measurement-countable-kraus-instruments` | physics theorem | 11 |
| `rem-nrqm-measurement-scope-and-empirical-status` | physics remark (A) | 12 |
| `ex-nrqm-measurement-serial-stern-gerlach-filters` | example (B) | 10 |
| `ex-nrqm-measurement-three-polarizer-chain` | example (B) | 10 |
| `ex-nrqm-measurement-absorption-instrument` | example (B) | 12 |
| `ex-nrqm-measurement-degenerate-coarse-versus-fine-update` | example (B) | 11 |
| `rem-nrqm-measurement-examples-scope-limits` | remark (B) | 13 |

Carriers: `library/non-relativistic-quantum-mechanics/qm-measurement-and-instruments.md`
and `...-examples.md` (both nonempty), the run manifest, the coverage file,
the proof contracts (11 proof-bearing items, 91 exact citation entries,
55 mapped steps, 88 boundary dispositions) and the cross-batch dependency
input (88 reviewed rows). Item levels were computed mechanically with the
run's dependency levels over the current manifests before each carrier was
finalised; `item-dependency-levels.mjs check --run` reports no finding that
names a batch-46 item.

## Design vs current plan — recorded conflicts

1. **Reservation budget vs authored inventory.** The track design
   (`research/plan-non-relativistic-quantum-mechanics-track.md`, section
   "Qm Measurement And Instruments") reserves "32" A items and "22" B items.
   The authored pair is 9 A + 5 B. Every promised claim of the one-line
   reservation is covered, using the published and in-run mathematics rather
   than re-proving general spectral theory: P3 (the definition
   `def-nrqm-measurement-framework-declared-measurements-and-instruments`
   reads it, and the physics theorems are conditional on it); degenerate
   Lüders (`pthm-nrqm-measurement-degenerate-eigenspace-update` and the B
   example `ex-nrqm-measurement-degenerate-coarse-versus-fine-update`);
   finite POVM/effects/instruments (definition clause (d),
   `pthm-nrqm-measurement-instrument-updates-not-determined-by-effects`,
   `pthm-nrqm-measurement-finite-effects-dilation`,
   `pthm-nrqm-measurement-countable-kraus-instruments`); repeatability
   (`pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles`
   clause (b) and the exact criterion of
   `pthm-nrqm-measurement-countable-kraus-instruments` clause (b));
   conditional vs discarded outcomes
   (`lem-nrqm-measurement-nonselective-luders-map`,
   `pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles`
   clause (c), the instrument clause of the countable instrument theorem);
   the B inventory's serial Stern–Gerlach ideal setups, three polarizers and
   absorption instrument. The reservation's `[E pending]` Stern–Gerlach
   report candidate is not asserted: it is recorded as pending in
   `rem-nrqm-measurement-examples-scope-limits` and
   `rem-nrqm-measurement-scope-and-empirical-status`. This is a bookkeeping
   difference between planning budgets and authored inventory, not an unmet
   prerequisite; no promised claim was dropped or weakened.
2. **`requires_physics` is a claim id.** The reservation's
   `requires_physics: [NRQ-A03]` names a claim/coverage id, not a page id;
   the design's declared earlier prerequisite, `plan-spec.json` and the
   manifest all name the page `qm-observables-and-born-probabilities`.
   (Batches 44 and 45 recorded the same pattern for NRQ-A01 and NRQ-A02.)
3. **Stale source locator in the design table.** The prose-scaffold table
   row for this pair names "MIT Ch2 and Ch6 §§3–4". Ch6 §§3–4 of MIT 8.05
   are Heisenberg dynamics and are not measurement content; the pair uses
   MIT Ch2 §1 (Stern–Gerlach boxes in series, printed pp. 1–7) for the B
   example and does not cite MIT Ch6. The current plan's reservation line
   and this batch agree on the substantive sources (Tong §3.3, Binney
   §1.4/§7.4.2, MIT Ch2); the Ch6 locator is stale design text, recorded
   here for the owner.
4. **Empty plan item arrays.** The `plan-spec.json` entries for both pages
   carry empty `items` arrays (the engine's pre-authoring state); the run
   manifest carries the authored inventories and levels, as for every other
   batch of this run.

No conflict required an owner-held escalation.

## Mathematical and physical closure decisions

- **Layering.** The two mathematical lemmas carry `domain: mathematics` and
  depend only on published canonical root mathematics and on in-run
  mathematics of batch 35 (plus the batch-46 lemma edge between them). The
  physics definition, the five physics theorems and the two remarks are
  `domain: physics`; no mathematical item depends on a physics item. The
  physics theorems are explicit conditional consequences of P1, P2 and P3
  plus the page-local mathematics; the definition adopts no assumption
  beyond those postulates.
- **Postulate reuse, not restatement.** P3 is homed on
  `post-nrqm-framework-ideal-conditional-measurement` (batch 43) and P2 on
  `post-nrqm-framework-observable-and-probability`. The batch's definition
  reads them in measurement vocabulary, the theorems deduce conditional
  consequences, and no clause of P2 or P3 is re-proved or strengthened.
- **Choice hypotheses.** Countable Choice is named in every statement that
  uses it (both lemmas, the definition, all five theorems, and the examples
  through their suppliers); the Axiom of Choice is named explicitly in the
  degenerate-eigenspace theorem and in the finite-dilation theorem, which
  use the spectral functional calculus and the finite Naimark compression.
  No finite example claims more choice strength than it uses.
- **Instruments are declared, not derived.** The non-determination of the
  update by the effects is proved twice over: abstractly by the batch-35
  finite-effects lemma, and concretely inside the declared two-level
  instrument model (`pthm-nrqm-measurement-instrument-updates-not-determined-by-effects`),
  with the dilation theorem and the absorption example displaying two more
  distinct instruments. No item asserts that a laboratory device realizes a
  declared instrument.
- **Repeatability.** The projective case is proved repeatable; the declared
  countable-instrument case has an exact criterion with both directions
  (`M_bM_a=0` for `b≠a` and `F_a²=F_a` on nonvanishing effects); the
  non-repeatable instrument of clause (c) of the non-determination theorem
  shows the criterion is not automatic. The degenerate eigenspace theorem
  records that the update uses the whole eigenspace projection and not a
  chosen eigenvector.
- **Empirical neutrality.** No item reports a measurement, apparatus
  calibration, count, uncertainty or data comparison. The worked examples
  are exact model computations for declared preparations and declared
  apparatus models; the Stern–Gerlach and polarizer examples state the
  idealisation and the pending primary report explicitly, and the polarizer
  example records that a stipulated classical amplitude model gives the
  same ratio, which therefore establishes neither model's applicability.
- **No interpretation claims.** The scope remark records that P3 is not
  derived from the Born law, that no unique recorded outcome is selected,
  that exact continuum values are excluded, and that the interpretation
  questions are outside the batch.

## Sources

The coverage file records 2 pages and 19 harvested results, each with a
disposition (included with an item id, inline with an item id, or deferred
to the companion page with a reason); 4 distinct source URLs in 7
entries, fetch-verified with `--stamp` during authoring and re-checked in
check mode:

- D. Tong, *Quantum Mechanics* (author-hosted complete lecture set) —
  §3.3 printed pp. 76–77: Born outcome probability, collapse, repetition
  and the degenerate-eigenspace update.
- J. Binney and D. Skinner, *The Physics of Quantum Mechanics*
  (author-hosted Oxford text) — §1.4 p. 15 ideal reproducible measurement;
  §6.3 pp. 121–124 density operator and trace rule; §6.5 pp. 132–135
  apparatus dynamics and collapse discussion; §1.3.6 pp. 14–15 photon
  analysers; §7.4.2 pp. 161–164 Stern–Gerlach filters in series.
- J. Preskill, Ph219/CS219 lecture notes, Chapter 3 (Caltech PDF) — §3.1.2
  printed pp. 8–11 generalized measurements, POVMs, Kraus operators and
  the freedom of the post-measurement state; §3.2.1 pp. 11–14 the
  operator-sum discarded-outcome map.
- B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 (official
  OCW PDF) — §1 printed pp. 1–7 Stern–Gerlach boxes in series.

The full local texts of Tong, Binney, MIT and Preskill were inspected for
the cited ranges during authoring (Tong chunks 073–080, Binney §1.3.6/§1.4/
§6.3/§6.5/§7.4.2, MIT chapter 2, Preskill chapter 3), and the cited
quotations in the proof contracts are exact substrings of the current
carriers. Two independent treatments per page are present (a textbook plus
full lecture sets). No source authority is substituted for a proof.

## Checks actually run on the final carriers

- `precheck.mts` on the 14 items: **11 checked, 0 failing** (3 nonproof
  items not applicable). The adaptive phase numbering proposed by the
  checker was adopted before the final battery.
- `rendercheck.mjs` on the 14 items and the 2 library carriers: **16 files
  clean** (KaTeX parse, YAML, wikilink/math nesting).
- `proof-layout.mjs` on the 14 item paths (after the final proof edits):
  **14 items, 55 steps, 0 defects**.
- `depcheck.mjs --run ... --items-file` (the 14 items): exit 0, no
  warning and no prerequisite cycle finding; `fwdcheck.mjs` with the same
  selection: exit 0; `extcheck.mjs --items-file`: exit 0, 0
  recorded-not-proved statements and 0 consequences resting on them.
- `content-policy.mjs` on the batch manifest: **14 scoped item(s), 0
  error(s), 0 warning(s)**; `manifest-deps.mjs`: **14 item(s), 0 error(s)**.
- `proof-contract.mjs --strict` on the batch proof contracts: **11/11 items
  checked, 0 error(s), 0 warning(s)** — exact cited quotes, per-step
  derivations with stated inputs, and the standard boundary dispositions.
- `proof-contract-coverage.mjs` against an overlay root whose only current
  manifest is this batch's (the run-wide inventory contains other batches'
  empty scaffold pages): **14 item(s), 11/11 supplied argument(s)
  covered**.
- `coverage-checklist.mjs` on the coverage file: **2 pages, 19 harvested
  results, 0 error(s), 0 warning(s)**; `source-fetch-check.mjs
  --coverage` (check mode, existing stamps): **7/7 fetch-verified, 7/7
  resolved, 0 documented drops**.
- Scoped `physics-check.mjs --run` on the same overlay root (which loads
  the current manifest, plan and item carriers and runs
  `validatePhysicsContent` with bodies required): **0 error(s), 14 items
  checked** (domains, dependency roles, physical scope, page membership).
- `item-dependency-levels.mjs check --run`: no finding names a batch-46
  item; the reported errors are other batches' empty scaffold inventories.
- `validate-plan.mjs research/plan-spec.json --run ...`: run-wide exit 1
  with no error naming either batch-46 page; the lines naming this pair are
  the informational page listings (171: 9 items; 172: 5 items with the
  declared requires) plus the later page 189 that lists
  `qm-measurement-and-instruments` as its prerequisite.
- `pathcheck.mjs non-relativistic-quantum-mechanics`: 0 pathway files
  checked, 0 errors, 0 warnings (no `_pathway.md` exists yet).
- Readiness records: one per item, recorded with
  `step1-decisions.mjs record` after the final carrier and manifest edits so
  their input hashes are current. `step1-decisions.mjs check --run`
  reports no pending work item for any of the 14 batch-46 items (the
  remaining run work is other batches' empty scaffolds and missing
  records).
- `frontier-dependency-ledger.mjs refresh --run
  physics-cm-qm-gr-79-2026-10-11`: batch 46 appears in
  `reviewed_batches`, all 88 batch-46 rows carry the review, and there are
  no orphaned reviews.

## Cross-batch dependencies

`research/physics-cm-qm-gr-79-2026-10-11-batch-46.cross-batch-dependencies.json`
reviews all 88 cross-batch rows in which batch 46 is the consumer, each with
`status: verified` and evidence naming the consumed claim and its use
location: 37 rows to batch 35 (rank-one calculus, density/spectral
probability, nuclear cyclicity, finite effects and instruments, countable
Kraus normalization, Naimark compression, tensor and partial-trace
calculus), 25 to batch 43 (P1–P3, P6, P7 and the quantities/units
definition), 20 to batch 44 (state space, pure/mixed states, ray-to-state
correspondence), 5 to batch 45 (assigned observables and outcome law,
spectral atoms, the projective-outcome theorem), 1 to batch 37 (finite spin
matrices), and the single page edge
`qm-measurement-and-instruments -> qm-observables-and-born-probabilities`.
Every in-run supplier consumed here is draft content with a current
readiness record; the remaining mathematical premises are published
canonical root items. No planned or unproved supplier was used.

## Escalations

None. Every prerequisite is supplied with a current readiness record, every
other mathematical premise is a currently published canonical root item, no
promised claim of the design was dropped or weakened, and the batch fits
well inside the 100-item page cap. The budget, requires-id and stale-locator
differences above are bookkeeping conflicts recorded for the owner, not
unmet prerequisites.

## Run-level notes for the owner

- `physics-check.mjs --run` (whole run) is not runnable in the current
  state: it aborts in the frontier scope loader on
  `physics-cm-qm-gr-79-2026-10-11-batch-24.pages.json` ("Invalid or empty
  current page"), independent of this batch. The scoped overlay equivalent
  is clean (0 errors, 14 items).
- `validate-plan.mjs --run` fails on other batches' pages (a b-leaf
  dependency of `def-gr-flrw-spatial-model`, and undeclared prerequisites of
  `qm-math-controlled-dynamics` and `qm-math-fock-and-equilibrium`);
  nothing names this pair.
- `item-dependency-levels.mjs check --run` reports other batches' empty
  scaffold inventories; nothing names this pair.
- `step1-decisions.mjs check --run` reports remaining work only in other
  batches (empty scaffolds and missing records).
- The design's `[E pending]` Stern–Gerlach report candidate remains
  unbuilt. Building it would require a retrieved primary/authoritative full
  report with apparatus, calibration, sampling and uncertainty analysis;
  this batch deliberately records the omission rather than inventing one.
