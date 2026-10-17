# Batch 78 authoring notes — `tgr-phs02`

Run: `physics-remaining-80-2026-10-17`  
Role: beta · batch 78 · category `thermodynamics-and-general-relativity`

## Scope and controlling plan

This batch owns `tgr-phs02` / `tgr-phs02-examples` only. The current task and `research/plan-spec.json` agree on the A/B IDs, title, category, library, companion, order 653/654, and direct A-page requirements `qft-f01`, `tgr-mhs03`, and `tgr-pet01`. The B page requires the A page. The assigned inventory is the three reserved A items and one reserved B thought experiment; no additional item was needed.

The older reservation at `research/plan-thermodynamics-and-general-relativity-track.md#L850` lists direct page requirements `tgr-i01`, `tgr-mhs02`, `tgr-mhs03`, `tgr-et01`, and `tgr-pet01`. The current page interface differs: it adds the published `qft-f01` prerequisite and names `tgr-mhs03` and `tgr-pet01` as the two in-run direct page suppliers. The older `tgr-mhs02` dependency is already required by the current `tgr-mhs03` page; `tgr-i01` is required by `tgr-pet01`; and `tgr-et01` is reached through the current `tgr-pet01` → `tgr-et03` → `tgr-et02` chain. Thus the current direct page inputs retain the older supplier closure while adding `qft-f01`. The plan controls the direct page edges; no shared plan was edited.

Future-consumer note: current plan-spec also gives the later tgr-phs03 A page a page-level requirement on tgr-phs02, but its batch-79 item inventory is not yet authored. This batch verified no item-level PHS03 use, so no unsupported cross-batch review row was added. The reduced model now states the selected length-flow Killing generator and reference normalization explicitly; batch 79 should match its actual interface when its items are authored.

The original TGR-PHS02 proof reservation also lists `lem-tgr-spectral-thermometer` as a supplier to the reduced-horizon theorem. Its actual current Statement defines the two-state rate model for the accelerated spectrum only. The reduced branch therefore solves its own explicitly adopted rate equation completely inside `pthm-tgr-reduced-horizon-temperature`; no acceleration-only formula is generalized to the reduced current. This preserves the reserved temperature claim and its conditional stationary-bath clause.

## Item dependencies and levels

The batch-level input file originally records batch 78 at level 6 with direct page requirements on batches 66 and 75. The item-level graph was computed from each authored item's exact current `deps`; out-of-run published suppliers do not raise an in-run item level.

| Item | Level | Highest direct in-run supplier |
|---|---:|---|
| `post-tgr-exponential-current-and-spectral-thermometer` | 6 | `def-tgr-framework-units` (5) |
| `pthm-tgr-reduced-horizon-temperature` | 8 | `pthm-tgr-tolman-ehrenfest` (7) |
| `pthm-tgr-free-vacuum-acceleration-temperature` | 8 | `pthm-tgr-tolman-ehrenfest` (7) |
| `texp-tgr-two-accelerations` | 9 | `pthm-tgr-free-vacuum-acceleration-temperature` (8) |

The exact direct supplier lists, supplier levels, interface observations, and the formula used for each item are in `batch-78.dependency-inputs.json`. A read-only recomputation of the full run's batch graph now returns batch 78 level 6 with `requires: [54, 62, 66, 74, 75]`: items in batches 54, 62, and 74 are additional direct item suppliers. `batch-dependency-levels.mjs check --run physics-remaining-80-2026-10-17` exits 1 because the shared run-level scheduling record is stale after authoring this manifest. The computed batch 78 level remains 6. That shared record was left unchanged for the owner to refresh at the drained construction join.

## Inspected supplier interfaces and readiness

Complete Statements and load-bearing proofs were inspected for all direct in-run mathematical/physical suppliers used in the new arguments:

- `lem-tgr-exponential-current`: current and test-coordinate construction; its exact chiral covariance is used only in the reduced branch.
- `lem-tgr-thermal-contour-spectrum`: the actual inverse-length parameter, spectrum, continuous zero value, and detailed-balance ratio. Its carrier is `draft`, but the current `loadStep1Record` / `step1Decision` result is hash-current `ready`; this is authoring readiness, not independent proof acceptance.
- `lem-tgr-timelike-scalar-acceleration`: actual smooth proper-time hyperbola, temporal-smearing construction, covariance, unit conventions, and conditional spectrum rescaling.
- `lem-tgr-spectral-thermometer`: exact finite-switch coefficient bound and accelerated-spectrum two-state Markov calculation. Its actual interface is acceleration-specific.
- `def-tgr-framework-units`, `lem-tgr-killing-thermal-normalization`, `post-tgr-stationary-equilibrium`, and `pthm-tgr-tolman-ehrenfest`: exact length-coordinate units, connected stationary carrier, adopted beta-Killing premise, and conditional local temperature relation.

The current `loadStep1Record` / `step1Decision` checks return hash-current `ready` for the in-run supplier carriers listed above, including both batch-74 items and the batch-66/62 TGR suppliers. The MHS03 item and old batch-75 notes still say the batch-74 carriers had no Step 1 records; that sentence is stale. The current helper records are ready. The MHS02 items remain draft and are used at their actual statement/proof interfaces, conditionally and without treating readiness as independent approval.

The published external page `qft-f01` and its published `post-qft-free-field-model` supplier were inspected. The published `post-qft-constructed-model-and-measurement` statement was also read; it requires an actual density state and normalized finite instrument before a Born probability is interpreted. This batch constructs neither and asserts no outcome. The transitive published mathematical `lem-qft-smeared-free-scalar` Statement and full proof were inspected; its field/covariance interface matches the MHS03 construction. It is outside this run and has its own published verification evidence; missing current-run Step 1 files for external QFT suppliers are not treated as a prerequisite gap.

## Full-text source review

`batch-78.coverage.json` records the search queries, source locators, the harvested results and their item-by-item dispositions, source limitations, and fetch stamps. Three independent full-text treatments were inspected; Preskill supplies the required complete lecture-note source.

- [John Preskill, *Quantum Field Theory in Curved Spacetime*](https://preskill.caltech.edu/ph236c/Preskill_QFT_curved_spacetime.pdf), complete 151-page Caltech lecture notes: §4.3, printed pp. 55–58, for the accelerated proper-time trajectory and ideal detector response; §4.7, pp. 71–74, for boost/proper-time and Rindler temperature scaling. These are context, not proofs of the local field construction or Markov model.
- [Robert M. Wald, *The Thermodynamics of Black Holes*](https://arxiv.org/pdf/gr-qc/9912119), complete 46-page review: §3, printed pp. 11–16, for the Unruh/KMS boost setting, its distinction from Hawking radiation, and local lapse context. No general KMS or Hawking result is used as a premise.
- [Crispino, Higuchi, and Matsas, *The Unruh effect and its applications*](https://arxiv.org/pdf/0710.5373), complete 53-page review: §III.A.1–2, PDF pp. 19–22, equations (3.1)–(3.28), for the point-detector accelerated response and Rindler interpretation. Its first-order, long-duration detector model is not the batch's exact finite-state or finite-switch proof.

All 3 URLs are fetch-verified; the successful full-body stamps and initial successful retrieval attempts are reused from batch 75. No retrieval failed, no source was dropped, and no `source_resolution` recovery record is needed. No experiment or measured temperature is claimed.

## Placement and physical scope

The A page contains the adopted model, the conditional reduced spectral calibration, and the acceleration result including its finite-switch coefficient bound. The B page contains the requested two-acceleration thought experiment. The Rindler diagram on the B page labels length-coordinate axes, the right wedge, its null boundaries, and two fixed-`rho` hyperbolae; the text defines every depicted set and curve. The proof uses the equations, not the diagram. The A page has 3 items and the B page has 1 example, within the 100-item cap.

The reduced and acceleration rate couplings have different units because their spectra are per length and per proper time per area, respectively. The postulate states both conversions explicitly. Effective Markov probabilities are distinguished from a constructed QFT measurement instrument, exact detector transition probabilities, and observations. The optional stationary-bath comparison states both its selected-Killing-field match and reference-temperature identification as additional premises.

## Cross-batch edges

`batch-78.cross-batch-dependencies.json` is a JSON array with 18 exact cross-batch page/item edges; all are marked `verified` for scoped interface checking, not for independent proof acceptance. A read-only comparison against the current manifests and carrier dependencies found 18 expected edges, 18 reviewed rows, no missing/extra rows, no open rows, and no orphan reviews.

## Scoped checks and readiness

- Author check: 4 items; precheck 4/4, rendercheck 6 files, content policy 4 items, strict proof contracts 4/4; all passed with zero errors and warnings.
- `proof-layout.mjs` on the four explicit item files: 4 items, 11 steps, 0 defects.
- Focused `depcheck.mjs` on the four manifest items: 0 errors and 0 warnings; the 2,496-item / 391-page prerequisite closure has no item or page cycles.
- Focused item-level dependency calculation over the 21-item / 10-page supplier closure: levels 6, 8, 8, and 9 as tabulated above, with no dependency-label errors.
- `coverage-checklist.mjs`: 1 A page, 6 harvested source results, 0 errors, 0 warnings. `source-fetch-check.mjs --stamp`: 3/3 sources fetch-verified and resolved, 0 drops.
- Focused `pathcheck.mjs` on the two assigned draft pages: 0 errors and 0 warnings; no published pathway page is in scope.
- The full-run item-level command exits 1 because the later unassigned `tgr-phs04` and `tgr-phs04-examples` manifests still have empty scaffold inventories. A read-only item-graph recomputation confirms the four batch-78 levels remain 6, 8, 8, and 9, with no cycles.
- The final full-run Step 1 check reports 701 of 704 items ready; its five remaining blockers are three batch-79 items without readiness records and the two batch-80 pages with empty scaffold inventories. All four batch-78 readiness records close with current hashes after the final statement edits.
- The full-run batch-level check reports a stale shared scheduling record; its read-only recomputation returns the exact current level-6 batch-78 graph described above. The record remains for the owner to refresh after construction writers drain.

After final authoring and checks, each of the four assigned items has a current Step 1 readiness record. Those records document authored prerequisites, placement, and contracts only; the items remain drafts and no independent proof acceptance or publication is asserted.

