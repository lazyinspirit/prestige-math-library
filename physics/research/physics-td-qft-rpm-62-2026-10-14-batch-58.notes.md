# Batch 58 notes — qft-f04 / qft-f04-examples

Run `physics-td-qft-rpm-62-2026-10-14`, beta batch 58. The assigned pair is
`qft-f04` (A, order 555) and `qft-f04-examples` (B, order 556), in
`quantum-field-theory`. The owner authoring direction and the complete assigned
design section were read before construction. Both pages and all three assigned
items remain drafts. The owner direction controls any conflict with stale task
or design records.

## Plan comparison and conflicts

The active `plan-spec.json` row and full section of
`research/plan-quantum-field-theory-track.md` give `qft-f04` the direct page
prerequisite `qft-f01`; the B page requires `qft-f04`. Those are the page
`requires` entries used here. The original reservation in
`research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`
additionally lists QFT-MF04, QFT-MF02, and QFT-MF03. These are retained as
transitive mathematical inputs: `qft-f01` requires `qft-mf04`, and the current
MF04 page requires MF03, whose planned chain continues through MF02. The direct
page requirement follows the active plan; no item-level mathematical input is
dropped.

The reserved A/B inventory is preserved: the free-observable-domain theorem,
the classical/quantum free-correspondence theorem, and the point-operator
counterexample. Item dependencies are expanded where the complete arguments
need explicit units, Countable Choice, the constructed-measurement postulate,
Gaussian convergence, the scalar shell-test equation, and the smeared scalar
field formula. The added inputs are explicit in the carriers and contracts;
no claim is weakened to fit. No new local mathematical definition was needed.
The A page has two items and the B page one, below the 100-item cap.

## Inventory, dependencies, and levels

The batch dependency file records batch 58 at level 5, requiring batches 38,
40, 42, 43, and 51. The
item levels are computed from the actual in-run supplier levels; imported
mathematical assumptions do not raise an item level.

| Item | In-run suppliers and levels | Item level |
|---|---|---:|
| `pthm-qft-free-observable-domain-limits` | `post-qft-free-field-model` (6), `post-qft-constructed-model-and-measurement` (2), `def-qft-free-field-observables` (7), `lem-qft-free-domain-observables` (6), `lem-qft-scalar-local-weyl-algebra` (5), `lem-qft-free-dirac-car-locality` (5), `def-qft-framework-units` (0) | 8 |
| `pthm-qft-classical-quantum-free-correspondence` | `post-qft-free-field-model` (6), `lem-qft-free-action-equations` (2), `lem-qft-mass-shell-test-restriction-continuity` (1), `lem-qft-smeared-free-scalar` (3), `lem-qft-free-dirac-car-locality` (5), `def-qft-framework-units` (0) | 7 |
| `cex-qft-point-operator-assumption` | `pthm-qft-free-observable-domain-limits` (8) | 9 |

`def-countable-choice` and `thm-dominated-convergence` are imported
mathematical suppliers. The assigned graph is acyclic; the B counterexample
follows its A theorem. `research/physics-td-qft-rpm-62-2026-10-14-batch-58.cross-batch-dependencies.json`
records each direct in-run item edge and the planned `qft-f01` page edge.

## Supplier interfaces and current proof status

- `lem-qft-free-domain-observables`: read the current Statement and complete
  Proof. It supplies the exact scalar field/generator domains, Dirac H/P
  domains, moments and product-domain conditions, and the representation-specific
  point-smearing norm results used here. Its Step 1 file is labelled ready and
  its dependency list matches current frontmatter, but the current
  `step1Decision` check returns `Item or dependency changed; record current
  readiness` because the stored hash differs from the current item/dependency
  closure. Treat readiness as stale; use the complete proof conditionally. Its
  actual statement does not establish the planned charged-number domain; no
  charge claim is made here.
- `lem-qft-scalar-local-weyl-algebra`: read the actual isotony and
  spacelike-commutativity statement and proof. Its current Step 1 decision is
  escalated through QFT-MF01 inputs. The theorem carries only that exact
  conditional bounded-Weyl-algebra interface.
- `lem-qft-free-dirac-car-locality`: read the actual bounded spacetime CAR
  field, equal-time `Psi_t(u)` CAR, tested equation, and even-polynomial
  locality proof. Its current Step 1 decision is escalated through QFT-MF01
  and MF02 inputs. All dependent uses remain conditional.
- `lem-qft-free-action-equations`: the item is present in the current batch-43
  manifest at level 2, and its full compact-variation proof and current Step 1
  ready receipt were inspected. The declared dependencies match its current
  frontmatter. Its shell and matrix suppliers remain draft inputs.
- `lem-qft-mass-shell-test-restriction-continuity`: its statement and proof
  supply `K_mu((partial_0^2-Delta+mu^2)f)=0` for `mu>=0`; the current Step 1
  receipt is ready for the inspected dependency list.
- `lem-qft-smeared-free-scalar`: its actual field formula was inspected; its
  current Step 1 decision remains escalated through QFT-MF01 inputs.
- `post-qft-free-field-model` and `def-qft-free-field-observables` are current
  QFT-F01 draft carriers without current Step 1 receipts. The latter's
  charged-number domain is explicitly conditional and is outside these claims.
- `post-qft-constructed-model-and-measurement` is a current QFT-C01 draft
  postulate without a current Step 1 receipt; the `qft-f01` to `qft-c01` page
  edge is recorded open. Its Born reading is used only conditionally for an
  actually supplied density state and finite bounded instrument. No apparatus
  or observation is asserted.
- `def-qft-framework-units` has no current Step 1 receipt; its exact local
  units, metric, phase, and Clifford conventions are used conditionally.

There is stale evidence in the existing batch-51 notes and cross-batch file.
The notes say `lem-qft-free-action-equations` is absent and the MF04 manifest
is empty; on current disk the item is present in batch 43, has a current
matching ready receipt, and batch 51's cross-batch ledger marks its edge ready.
That historical note text needs reconciliation. The batch-51 notes also say
the free-domain receipt has a dependency-list mismatch, while the current
frontmatter and receipt dependency lists do match. The actual current problem is
its stale hash: `step1Decision` reports `Item or dependency changed; record
current readiness`. Batch 51's cross-batch row still marks that carrier ready,
so that row also needs owner reconciliation. Batch 58 records the edge open
and uses the inspected result conditionally; it does not edit batch-51
artifacts.

The `qft-f01` page itself is present with the planned direct edge and current
item carriers. That verifies the interface and placement only. Its transitive
QFT-C01 and QFT-MF01/MF02/MF03 readiness remains unresolved; the page edge does
not close the dependent item prerequisites.

## Source reading and dispositions

The A page uses two independent complete QFT treatments: David Tong's
author-hosted lecture-note chapters and Mark Srednicki's complete author
prepublication textbook Parts I and II. Christopher Fewster and Kasia Rejzner's
complete article supplies a third independent algebraic QFT treatment. The
full-text HTML sections read, result harvests, per-item dispositions,
limitations, and locators are in `batch-58.coverage.json`. All 10 active source
records passed `source-fetch-check --stamp`; there are 7 distinct active URLs.

A UZH PHY551 PDF was considered but the web reader returned 401/cache-miss
failures. It was not selected, cited, or harvested. Full Tong and Srednicki
texts and the Fewster–Rejzner text were found and read as alternatives. The
failed candidate is retained in `source_searches`; it is not represented as a
source drop and does not reduce mathematical coverage. No selected active
source retrieval failed.

Literature supports model context and notation. Exact domains, moment claims,
spacelike commutation, weak test equations, and point-smearing obstructions are
conditional mathematical deductions from the inspected local carriers.
Tong's and Srednicki's differing signatures and units are translated to the
explicit local convention. The items do not claim experimental evidence,
quantization derived from classical actions, or a general spin-statistics
theorem.

## Readiness and owner escalations

All three assigned items have complete available statements, proofs or
refutation, pages, source coverage, manifests, and proof contracts. Their final
Step 1 decisions are `escalated`, not `ready`:

- `pthm-qft-free-observable-domain-limits`: current readiness is missing for
  the framework-unit definition, F01 postulate/observable definition, and C01
  measurement postulate; scalar Weyl and Dirac locality suppliers are
  escalated. The domain lemma has a ready-labelled but hash-stale receipt, so its current
  readiness is open despite the complete conditional proof.
- `pthm-qft-classical-quantum-free-correspondence`: the framework-unit and
  F01 model-postulate receipts are missing; the scalar field and Dirac CAR
  inputs are escalated. The action-variation and mass-shell-test carriers are
  scaffold-ready for their current declarations.
- `cex-qft-point-operator-assumption`: its required A theorem is escalated, so
  the counterexample remains conditionally authored.

Owner work needed: repair/recertify the QFT-C01 and batch-40 readiness
artifacts; resolve the QFT-MF01/MF02 input escalations and downstream page
closure; refresh the stale hash-bound Step 1 receipt for
`lem-qft-free-domain-observables`; add or reconcile current Step 1 receipts
for the F01 postulate and observable definition and framework units; and
reconcile the stale batch-51 notes and cross-batch row. Batch 58 makes no cross-batch edits and does not change the
shared plan, imported mathematics, engine state, or another pair's items.

## Scoped check results

- `source-fetch-check --stamp`: **passed**, all 10 active coverage records
  stamped. The subsequent check mode passed all 10 records, with no documented
  drops or selected-source failures.
- `coverage-checklist --require-destination`: **0 errors**, 2 low-yield
  warnings. All 21 harvested results have explicit inline dispositions tied to
  the assigned arguments; none required a separate source-derived item.
- Strict proof-contract validation: **passed**, 3/3 items, 0 errors and 0
  warnings. Exact supplier excerpts, actual numbered steps, cited inputs,
  boundaries and applicable manual checks are recorded.
- Scoped physics content policy: **passed**, 3 items, 0 errors and 0 warnings.
- Scoped precheck: **passed**, 3 items, 0 failures.
- Scoped rendercheck: **passed**, all 5 changed item/page files, 0 errors and
  0 warnings.
- `proof-layout.mjs` on the 3 changed items: **passed**, 12 proof steps, 0
  defects. The default renderer invocation first failed because the sibling
  application has no installed TSX loader and the fallback loader did not
  resolve its `@/` TypeScript aliases. A temporary resolver under `/private/tmp`
  enabled the same renderer to complete; it was not added to the repository.
- Focused `depcheck` on the 3 assigned items: **passed**, no unresolved links,
  dependency errors, or cycles in the 2,099-item / 339-page prerequisite
  closure.
- Assigned item levels recomputed from the current run manifests are **8**,
  **7**, and **9**, matching the three carrier labels. The run-wide item-level
  checker also reports unrelated existing blockers: seven empty scaffold
  inventories (`rpm-external-charge-examples`, `qft-mx03` and its B page,
  `qft-g02` and its B page, and `qft-x03` and its B page) and nine level
  mismatches on the QED/photon items (`def-qft-qed-physical-gauge-quantities`,
  `post-qft-free-photon-model`, `post-qft-qed-local-coupling`,
  `pthm-qft-photon-physical-properties`, `pthm-qft-photon-local-observables`,
  `pthm-qft-qed-classical-coupling`, `pthm-qft-qed-coulomb-constraints`,
  `texp-qft-photon-auxiliary-comparison`, and `texp-qft-qed-neutral-cell`). No
  assigned item is among these errors.
- The read-only batch dependency check reports the shared graph hash as stale.
  Recomputing without writing gives the same batch-58 row as the stored graph:
  level 5, requiring batches 38, 40, 42, 43, and 51. Only the input hash differs
  after the current manifest content changed. The shared dependency file was
  not regenerated; the owner should refresh it after batch integration.
- The run-wide Step 1 check remains open (246 of 664 items ready, with unrelated
  owner escalations and empty pages). Each of these three target items is
  recorded `escalated`, `owner:false`, with its exact direct dependencies and
  unresolved suppliers above; no escalation was changed to ready.

The three batch-58 Step 1 records remain `escalated`, `owner:false`, and were
not overwritten. Their reason text was recorded before final proof-formatting
fixes and before the stale free-domain receipt was detected. Canonical step
numbering and one-line display math changed the authored item bytes after those
records were written, so their stored hashes are older than the final files.
The item claims and dependency arrays are unchanged. Because the record reason
for `pthm-qft-free-observable-domain-limits` says the free-domain supplier has
a current matching ready receipt, that specific sentence is now stale. The
owner should refresh the three escalations against final hashes and update that
supplier status; batch 58 did not overwrite an escalation.

No independent review or publication acceptance is claimed.
