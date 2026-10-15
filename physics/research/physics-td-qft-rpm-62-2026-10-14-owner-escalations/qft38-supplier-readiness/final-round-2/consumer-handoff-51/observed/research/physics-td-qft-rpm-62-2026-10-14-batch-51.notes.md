# Batch 51 notes — qft-f01 / qft-f01-examples

Run physics-td-qft-rpm-62-2026-10-14, beta batch 51. The assigned pair is
qft-f01 (A, order 541) and qft-f01-examples (B, order 542), in
quantum-field-theory. The owner authoring direction was read before
construction. Both pages and all four assigned carriers remain drafts.

## Plan comparison and conflicts

The complete assigned section of research/plan-quantum-field-theory-track.md
declares qft-c01 and qft-mf04 as the earlier page prerequisites. The current
research/plan-spec.json row and assigned task agree. The embedded original
reservation and the 2026-10-12 revised QFT inventory instead list qft-mf01,
qft-mf02, and qft-mf03 in addition to those two pages. The current plan
controls the page-level requires entries, so the A page keeps only qft-c01
and qft-mf04. The actual item-level mathematical suppliers from MF01, MF02,
and MF03 remain explicit in the items' deps and in the cross-batch ledger;
no prerequisite is erased.

The revised QFT inventory promises four items: the model postulate, observable
definition, conditional Fock-statistics theorem, and B-page mode-occupation
example. All four are authored, in supplier-first order, with no scope
expansion beyond the necessary explicit mathematical interfaces. The page
inventories contain three A items and one B item, below the 100-item cap.

The current QFT-MF04 manifest and A page now contain
lem-qft-free-time-ordered-kernel, lem-qft-free-action-equations, and
lem-qft-free-domain-observables; the B page is also present. Batch 43's
cross-batch ledger verifies its required qft-mf03 page edge and the consumed
interfaces. The carriers remain drafts, so this records current placement and
interface evidence, not independent approval.

The actual QFT-MF04 carrier lem-qft-free-domain-observables was inspected at
its Statement and complete Proof. It proves the scalar
self-adjoint-smearing, scalar H/P/N domains, Dirac H/P domains, finite moments,
and the stated point-field and diagonal-product limits. Its actual Statement
does not contain the revised inventory's charged-number operator/domain
claim. The research module workers/free-fields/proof-modules.md#FF7 contains
the intended species-count formula and a short local argument, but the
current carrier does not. The F01 definition records the charge-number use as
conditional and keeps the item escalated. This is a cross-batch supplier
interface mismatch for the QFT-MF04 owner: restore the complete charge-domain
claim in that MF04 A-page mathematical supplier, or add a separate
mathematical charge-domain supplier there. Batch 51 does not duplicate or
edit that supplier.

## Inventory, dependencies, and levels

The stored batch graph places batch 51 at dependency level 4, requiring
batches 37, 38, 40, 42, and 43. A read-only recomputation from current batch
manifests returns the same level and prerequisite list; the stored input digest
is stale after concurrent manifest updates, so the shared scheduling record is
left for its owner to refresh.
The item-level calculation uses current supplier levels, including the
inspected MF04 draft lem-qft-free-domain-observables at level 6 and the now
present lem-qft-free-action-equations at level 2. The batch-level priority 4
is not substituted for item levels.

| Item | In-run logical suppliers | Level |
|---|---|---:|
| post-qft-free-field-model | def-qft-framework-units (0), def-qft-dirac-projections (1), def-qft-scalar-mass-shell (0), lem-qft-free-action-equations (2), lem-qft-smeared-free-scalar (3), lem-qft-free-dirac-car-locality (5) | 6 |
| def-qft-free-field-observables | post-qft-free-field-model (6), post-qft-constructed-model-and-measurement (2), def-qft-framework-units (0), def-qft-dirac-projections (1), def-qft-fock-and-test-spaces (0), lem-qft-free-domain-observables (6), lem-qft-smeared-free-scalar (3), lem-qft-segal-weyl-domain (2), lem-qft-free-dirac-car-locality (5), lem-qft-second-quantized-spectrum (2), lem-qft-dirac-fermionic-translation-spectrum (3) | 7 |
| pthm-qft-free-fock-statistics | post-qft-free-field-model (6), def-qft-fock-and-test-spaces (0), lem-qft-fock-ccr-car (1) | 7 |
| ex-qft-mode-occupations | pthm-qft-free-fock-statistics (7), def-qft-fock-and-test-spaces (0), lem-qft-fock-ccr-car (1) | 8 |

def-countable-choice is an external imported mathematical assumption and does
not raise these item levels. Its exact statement is carried wherever the Fock
suppliers use it. The A-page model postulate is first; the observable
definition and theorem follow it; the B example follows the A-page theorem.
The assigned item graph is acyclic.

## Supplier interface review

- def-qft-framework-units and post-qft-constructed-model-and-measurement
  exist and were read at their current statements. They provide the QFT
  coordinate, metric, units, field dimensions, and restricted Born-instrument
  interpretation. Batch 40 has no current Step 1 decision files for these
  items because its record command failed on the run-wide
  Duplicate item undefined inventory collision; the current owner blocker
  also lists unit 40 as artifact-incomplete. F01 therefore does not mark their
  use ready.
- lem-qft-free-action-equations is now present in the QFT-MF04 manifest. Its
  current Statement and complete Proof were inspected against [L1] in
  post-qft-free-field-model: the metric, shell parameter, Dirac matrices and
  adjoint, normalized scalar and commuting-spinor densities, compact smooth
  variations, finite first-variation formulas, and both directions of the
  stationarity equivalence match. The current Step 1 record is ready for its
  exact dependency list; the QFT-MF02 shell and QFT-MF03 Dirac conventions
  remain draft inputs and are used conditionally. The record is not independent
  approval.
- lem-qft-smeared-free-scalar exists at dependency level 3 and its complete
  actual proof was inspected. Its current Step 1 record is escalated because
  the QFT-MF01 page edge remains open; the receipt also cites batch 37 as
  artifact-incomplete, although the latest run blocker no longer lists unit
  37. Its exact massless and phase conventions match the recorded F01 use.
- lem-qft-free-dirac-car-locality exists at dependency level 5 and its
  complete actual proof was inspected. Its current Step 1 record is escalated
  because its scalar causal supplier is escalated and the QFT-MF01/QFT-MF02
  page closure remains open.
- lem-qft-fock-ccr-car exists at dependency level 1. Its current Step 1
  record is ready for its actual Fock-domain and CCR/CAR argument. This is
  scaffold readiness, not independent approval; the QFT-MF01 page closure
  remains open in the QFT-MF02 and QFT-MF03 cross-batch records.
- lem-qft-dirac-fermionic-translation-spectrum exists at dependency level
  3 and its complete conditional proof was inspected. Its current Step 1
  record is escalated because the QFT-MF01 page edge is open.
- lem-qft-free-domain-observables exists at dependency level 6 and its
  actual full proof was inspected. Its current Step 1 record is ready and its
  dependency list matches the current carrier and hash. This readiness covers
  only the actual Statement and Proof, which omit the planned charged-number
  operator/domain. The F01 definition therefore keeps charge as a separate
  conditional input and records the MF04 interface gap for its owner.
- lem-qft-second-quantized-spectrum exists at dependency level 2 and has a
  current ready Step 1 record for its actual scalar sector-sum domains.
  This is not independent approval or QFT-MF01 page closure.
- def-qft-fock-and-test-spaces and def-qft-scalar-mass-shell were inspected;
  their current Step 1 records are ready with dependency lists matching their
  carriers and hashes. Their carriers remain drafts and the records are not
  independent approval.
- def-qft-dirac-projections was inspected for the Clifford matrices, energy
  projections, and particle/antiparticle spaces used in the model and charge
  candidate. Its current Step 1 record remains escalated. The record cites an
  open QFT-MF01 page review and batch 38 as artifact-missing, although the
  latest run blocker no longer lists batch 38; this is a stale escalation that
  must be reconciled by its owner. F01 does not overwrite it and uses the
  exact current interface conditionally.

These inspected items are used at their actual statements, hypotheses, proof
status, and current receipt status. None is treated as proved merely because
its title or research inventory says so.

## Source reading and dispositions

The A page has two independent full-text QFT treatments: David Tong's
author-hosted full lecture-note HTML and Mark Srednicki's complete
author-hosted prepublication book draft. Relevant passages were inspected in
Tong Chapters 2, 4, and 5 and Srednicki §3 and §§37–39. Source locators,
item-specific support, limitations, searches, dispositions, and active fetch
stamps are recorded in batch-51.coverage.json. Six harvested results are
included directly in assigned items; nine are inline context absorbed by the
stated formulations or conditional proofs. This meets the coverage threshold;
no empirical result is claimed. The final source-fetch-check reports 4/4
sources fetch-verified and 4/4 resolved, with zero documented drops.

The sources support the conventional free-field formulations and their
canonical CCR/CAR mode descriptions. Their formal continuous-momentum
expressions are not used as operator-domain proofs. The local Fock supplier
proves the normalized wave-packet ladder and CAR projection identities.
Tong's general spin-statistics discussion is not adopted as a theorem.
Srednicki's and Tong's differing sign and unit conventions are translated to
the explicit (-+++), x^0=ct, inverse-length convention in the items. No
empirical report, measurement, or statistical inference is used.

## Readiness and owner escalations

All four assigned items have complete available prose and proof/contracts;
all four require escalated Step 1 decisions. The postulate uses the now-present
QFT-MF04 action-variation carrier, but inherits unresolved QFT-C01 and
upstream QFT-MF01/MF02/MF03 supplier readiness. The observable definition
records the actual MF04 charged-number interface gap; its other current
mathematical carrier receipts are used at their inspected claims. The Fock
theorem inherits the conditional physical postulate; the B example inherits
that theorem.

Required owner evidence: reconcile the actual MF04 observables carrier with
its planned charged-number interface; repair/recertify the QFT-C01 batch-40
artifact and run-wide inventory collision; and resolve upstream QFT-MF01/
MF02/MF03 supplier readiness before any F01 item can be marked ready. The
current run report still lists units 2, 4, 24, 40, 5, 28, 29, and 49 as
covered but artifact-incomplete. The live autopilot status command reports
that its historical receipt cannot be adopted under the current workflow
revision, so the last report and blocker file are recorded rather than
recomputed by the driver. Batch 51 does not edit the
shared plan, batch levels, imported mathematics, another pair's items, or the
autopilot state.

## Scoped check results

Final scoped results:

- `proof-contract.mjs --strict`: 4/4 assigned items, 0 errors and 0 warnings.
- `precheck.mts`: 3 checked, 0 failing; the postulate passes the nonproof
  structure check, the theorem and example pass the direct proof strategy, and
  the definition has no proof-like section.
- `content-policy.mjs`: 4 scoped items, 0 errors and 0 warnings.
- `rendercheck.mjs`: all four items and both pages pass, including YAML and
  KaTeX parsing.
- `manifest-deps.mjs`: 4 item rows, no missing dependency arrays.
- `coverage-checklist.mjs`: 1 page, 15 harvested results, 0 errors and 0
  warnings. Six results are included directly and nine are inline context.
- `source-fetch-check.mjs`: 4/4 source records fetch-verified and 4/4 resolved,
  with no documented drops. The earlier `--stamp` run is preserved in the
  coverage file.
- `manifest-integrity.mjs`: 128/128 run pages present, no scope drift.
- Scoped item-level dependency recomputation gives declared and computed
  levels 6, 7, 7, and 8 for the postulate, observable definition, theorem, and
  example respectively.
- The run-wide item-level check remains blocked by unrelated empty inventories
  (`rpm-external-charge-examples`, `qft-mx03`, `qft-mx03-examples`, `qft-g02`,
  `qft-g02-examples`, `qft-x02`, `qft-x02-examples`, `qft-x03`,
  `qft-x03-examples`) and stale levels for
  `post-td-equilibrium-ensemble-sampling`,
  `post-td-grand-variational-phase-uniqueness`,
  `ex-td-two-particle-hard-core-preparation`,
  `ex-td-nonunique-variational-phases`,
  `thm-qft-example-massive-tree-annihilation`, `ex-qftmath-x04`,
  `def-qft-qed-physical-gauge-quantities`, `post-qft-free-photon-model`,
  `post-qft-qed-local-coupling`, `pthm-qft-photon-physical-properties`,
  `pthm-qft-photon-local-observables`, `pthm-qft-qed-classical-coupling`,
  `pthm-qft-qed-coulomb-constraints`,
  `texp-qft-photon-auxiliary-comparison`, and `texp-qft-qed-neutral-cell`.
- The run-wide batch-level check reports a stale input digest. A read-only
  recomputation returns batch 51 at level 4 with prerequisites 37, 38, 40, 42,
  and 43; the stored row has the same values. The shared scheduling file was
  left for its owner to refresh.
- `proof-layout.mjs` was run on all four changed items, but its renderer could
  not start: Node cannot resolve `@/components` imported by
  `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`.
  This is an environment blocker, not a proof-layout pass.
- `step1-decisions.mjs record` wrote current `escalated`, `owner: false` records
  for all four assigned items with their examined direct dependencies and
  exact unresolved inputs. Focused receipt checks confirm all four decisions
  remain escalated with dependency IDs matching current frontmatter. After
  recording, the postulate's F3 wording was corrected to describe the existing
  escalated Dirac-carrier receipt accurately; its dependencies and blockers did
  not change, and the escalation was left untouched. The action-equation,
  free-domain, scalar-shell, Fock-definition,
  Fock-CCR/CAR, Segal-domain, and scalar spectrum suppliers have current ready
  records for their actual scopes. The Dirac projection, scalar smearing,
  Dirac CAR-locality, and Dirac translation suppliers remain escalated. The
  current QFT-C01 carrier receipts are missing under its artifact-incomplete
  batch-40 report. No escalation was overwritten.

No independent review or production acceptance is claimed. The required
follow-up is owner repair/recertification of C01 and the upstream MF01/MF02
page edges, the stale Dirac-projection escalation, and the missing MF04
charged-number domain interface.
