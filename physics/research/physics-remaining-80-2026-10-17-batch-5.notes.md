# Batch 5 authoring notes — `emg-g04`

Run: `physics-remaining-80-2026-10-17`  
Owner: beta  
Pages: `emg-g04`, `emg-g04-examples`  
Scope: 9 A-page items and 2 B-page examples.

## Plan reconciliation

The complete design section in `research/plan-einstein-maxwell-models-track.md`
and `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`
reserves the same nine A items and two B items present in the current batch
manifest. The historical design reservation requires `EMG-G01`, `EMG-MG04`,
and `EMG-MG03`. The current `research/plan-spec.json` and batch manifest instead
require `emg-g01`, `emg-mg04`, `rpm-external-charge`, and
`em-action-and-variational-formulation`. The plan controls; the page manifests
retain those four requirements. The current page requirements also make explicit
the published test-body sign convention and the limit of the earlier flat
electromagnetic action postulate. No shared plan was changed.

The run-wide batch-level file puts batch 5 at level 3, after batches 1–4. The
current item graph gives these supplier-first levels:

| Level | Assigned items |
|---|---|
| 1 | `def-emg-charged-dust-model` |
| 2 | `post-emg-einstein-maxwell-equations`, `pthm-emg-charged-dust-balance` |
| 4 | `def-emg-classical-charged-scalar-model` |
| 5 | `post-emg-selected-matter-action` |
| 6 | `post-emg-einstein-maxwell-action`, `pthm-emg-total-matter-field-exchange` |
| 7 | `pthm-emg-action-field-equations` |
| 8 | `pthm-emg-charged-scalar-coupling`, `cex-emg-flat-nonzero-field-coupling` |
| 9 | `ex-emg-classical-scalar-background-limits` |

Each level was checked against the current in-run supplier levels in the batch
manifests. The A/B inventory, placements, and 100-item page cap are unchanged.

## Source reading and dispositions

The coverage record has fetch-verified stamps for three complete PDFs: David
Tong, *General Relativity* (290 pages); Sean Carroll, *Lecture Notes on General
Relativity*, arXiv:gr-qc/9712019v1 (238 pages); and Tong, *Gauge Theory* (457
pages). Their exact item locators and `included` dispositions are recorded on
each source's `contents` rows in
`research/physics-remaining-80-2026-10-17-batch-5.coverage.json`.

I inspected Tong's curved Maxwell action/current treatment (§3.2.5), Einstein–Hilbert
variation (§4.1), and Hilbert, Maxwell, scalar, and matter-stress discussions
(§§4.5.2–4.5.3); Carroll's independent metric/action/stress treatment (Ch. 4,
equations (4.54)–(4.72)) and on-shell diffeomorphism identity (Ch. 5, equations
(5.33)–(5.38)); and Tong Gauge Theory's charged complex-scalar covariant
derivative and action (§2.5.2). The lectures use different units and, in places,
different source or index conventions. The local items state the selected SI
conventions and derive their signs and coefficients directly. Tong's scalar
discussion is used only for the classical gauge-covariant field/action form;
its material-response discussion is not adopted. The sources motivate and
cross-check formulations; they supply no empirical observations for this
batch. No source retrieval failed, no source was dropped, and no
`source_resolution` alternative proof was needed.

## Dependency and proof review

The old open dependency notes in the initial batch-5 cross-batch file were
stale after the owner-directed import and prerequisite resolutions. The current
read-only import of `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`
matches both its `research/math-imports.json` receipt hash and the current
read-only root original (`ee393eca16ff7f7ec9baae1c17c6efda5da0fb3787fd6dac6afdadacd589d7b9`).
The current owner readiness records
`research/physics-remaining-80-2026-10-17-step1-def-emg-geometry-units.json`
and `research/physics-remaining-80-2026-10-17-step1-post-emg-covariant-maxwell.json`
are ready. The owner final disposition in
`research/physics-remaining-80-2026-10-17-owner-emg-escalation-final-dispositions.json`
and the current Step-1 records likewise confirm the emg-mg02–emg-mg04 bundle,
action-variation, Noether, scalar-functional, scalar-variation, and
Maxwell-stress carriers are present at their reviewed interfaces. The detailed
current supplier mapping is recorded in `batch-5.cross-batch-dependencies.json`;
the evidence distinguishes authoring readiness from proof acceptance.

I inspected the current statements and complete local proofs for the action
variation, bundle-gluing, Maxwell-stress-divergence, matter-Noether, and charged
scalar variation suppliers. The consuming proofs use their actual hypotheses
and conventions conditionally. In particular, the action variation gives the
source sign from the displayed matter variation, the opposite electromagnetic
and matter stress exchanges cancel, and the Bianchi identity supplies only the
Einstein-source compatibility condition. The dust balance follows from the
separately adopted continuity and Lorentz-force equations. The scalar examples
are smooth model calculations, not measurements, quantum claims, or solution
existence claims.

The two flat-background witnesses now show explicitly why the Einstein tensor
vanishes for the constant Cartesian Minkowski metric: its Christoffel
coefficients vanish, so its curvature does also. This is a proof-only repair;
no public Statement, Definition, physical scope, or empirical qualification
changed. All six proof contracts were regenerated from the finished Facts and
numbered steps; boundaries and applicable finite checks remain in the batch
contract file.

## Readiness

All eleven assigned carriers and both pages are complete. Every direct
in-run and external prerequisite was inspected at its actual current
interface. Draft physical and mathematical suppliers are used as conditional
inputs, not treated as accepted by their labels. Final per-item Step-1 records
and scoped check results are recorded in the corresponding run evidence and
below after execution.

## Scoped checks

All eleven readiness records are `ready` with `owner: false` and bind each
item's actual direct dependencies. They were recorded in supplier-first order.
The records are authoring readiness only, not independent proof approval.

Actual final results:

- `source-fetch-check --coverage research/physics-remaining-80-2026-10-17-batch-5.coverage.json --stamp`: pass, 3/3 verified, 0 newly stamped.
- `content-policy` on `batch-5.pages.json`: pass, 11 items, 0 errors, 0 warnings.
- `depcheck --items-file batch-5.item-selection.json`: pass for 11 assigned items; selected page and prerequisite cycle checks passed.
- `precheck` on the six proof-bearing assigned items: pass, 6 checked, 0 failing.
- `rendercheck` on the 11 items and two pages: pass, 13 files; YAML and math rendering checks clean.
- Strict `proof-contract` on the six proof-bearing items: pass, 0 errors, 0 warnings, 6/6 checked.
- `proof-layout` on the two changed B-page items: pass, 2 items, 7 steps, 0 defects.
- Focused item-level recomputation over the current nonempty batch manifests: pass, all 11 assigned dependency levels equal their computed values; no batch-5-specific dependency errors.
- Scoped Step-1 record currency verification: pass, 11/11 records are current-ready and bind their actual dependency closures.
- Manifest, item-frontmatter and readiness-record dependencies/levels: pass, 11/11 agree.

The required full-run `item-dependency-levels.mjs check --run
physics-remaining-80-2026-10-17` does not pass yet: it reports empty inventories
on unfinished pages outside batch 5 and stale levels on other batches' items.
None of its item-level mismatch rows names an assigned batch-5 item. The
run-wide `proof-contract-coverage` check also stops at the empty frontier
inventory `emg-mm03`, outside this batch; the assigned batch's strict contract
check above covers all six proof-bearing items. These full-run results are
recorded as blockers outside this assignment, not as passes.
