# Batch 58 — authoring notes

Run: `physics-remaining-80-2026-10-17`  
Pair: `tgr-c01` / `tgr-c01-examples`

## Plan and design reconciliation

- The full TGR-C01 design section at `research/plan-thermodynamics-and-general-relativity-track.md` L237 controls the reserved A items `post-tgr-perfect-fluid-model`, `pthm-tgr-local-first-law`, and `pthm-tgr-perfect-entropy-circulation`, and B item `ex-tgr-uniform-perfect-background`. Their local scope and qualifications are retained.
- Current `research/plan-spec.json` and the current beta task require `tgr-i01` and `tgr-mc02`; the design section’s older embedded original reservation additionally names `tgr-mc01`. The current plan controls: MC01 remains a real transitive prerequisite through TGR-I01 and the C01 item graph, so it is recorded as such below without adding it as a direct page requirement.
- The canonical page requirements remain `tgr-i01`, `tgr-mc02`; the B page depends on `tgr-c01`. No item IDs or domain/library classifications were changed. The pages hold 3 A items and 1 B example, below the 100-item cap.

## Dependency inventory and levels

The run dependency-level record sets batch 58 to level 3, with in-run page suppliers batches 54 (level 2) and 55 (level 1). Levels are priorities, not a wait barrier. The current item dependencies and recomputed item levels are:

| Item | Kind | In-run suppliers and levels | Item level |
|---|---|---|---:|
| `post-tgr-perfect-fluid-model` | postulate | `def-tgr-framework-units` (5), `post-tgr-local-material-thermodynamics` (6), `def-tgr-local-fluid-state` (0) | 7 |
| `pthm-tgr-local-first-law` | physics theorem | `post-tgr-local-material-thermodynamics` (6), `lem-tgr-local-gibbs-euler` (1), `def-tgr-local-fluid-state` (0) | 7 |
| `pthm-tgr-perfect-entropy-circulation` | physics theorem | `post-tgr-perfect-fluid-model` (7), `lem-tgr-perfect-fluid-projection` (2), `lem-tgr-carter-circulation` (3), `def-tgr-local-fluid-state` (0), `def-tgr-framework-units` (5); external `def-countable-choice` | 8 |
| `ex-tgr-uniform-perfect-background` | example | `post-tgr-perfect-fluid-model` (7), `def-tgr-framework-units` (5) | 8 |

The item graph is acyclic. The extra mathematical dependency `def-countable-choice` is external to the run and preserves exactly the AC_omega premise explicitly carried by the two mathematical balance/circulation suppliers.

The circulation theorem also uses the published mathematical corollary `cor-zero-derivative-implies-constant`: the local loop formula gives a zero derivative when `sigma_p` is constant over the swept region, and this corollary turns that derivative statement into constancy on the open local-flow interval. Its exact interval, continuity and interior-derivative hypotheses were checked. It is external to this run, so adding it does not change the item level 8. The Minkowski example's connection step is proved directly from the postulate's metric compatibility and torsion freedom plus the constant nondegenerate metric; no unstated flat-connection premise remains.

## Supplier interfaces and readiness

- Batch 54’s current TGR-I01 carriers were inspected. `def-tgr-framework-units` states the relevant -+++ geometry, dimensionless observer and x0=ct/SI conventions; its Step 1 record is escalated because its finite-charge definition reaches draft MI03/MI01 inputs whose batch-50 snapshots differ from current items. `post-tgr-local-material-thermodynamics` states the exact fixed-composition C2 state-function and parcel-energy assumption; its readiness is escalated through that framework definition.
- Batch 55’s current MC02 item statements and proof bodies were inspected. `lem-tgr-perfect-fluid-projection` supplies the force/energy/spatial projection equations and entropy identities; `lem-tgr-carter-circulation` supplies the compact-loop/local-flow identity with its entropy-gradient source. Both proofs are complete in their current draft carriers, but both readiness records are escalated due stale MC01 inputs.
- The transitive MC01 state/Gibbs/frame supplier records claim ready but their hashes do not match current carrier bytes: state definition 36e4a355… vs d8808696…, Gibbs–Euler 475b6cdf… vs 9be4ed52…, frame projection d09c0988… vs 7b547ce5…. The current statements and proofs were inspected; this batch consumes them conditionally and does not edit or re-certify them.
- Exact direct and transitive page/item inputs, current states, and uses are recorded in `research/physics-remaining-80-2026-10-17-batch-58.dependency-inputs.json` and `research/physics-remaining-80-2026-10-17-batch-58.cross-batch-dependencies.json`. No prerequisite cycle was found.

## Source reading and scope

- Retrieved and inspected Gourgoulhon’s complete 37-page author-hosted arXiv PDF, including §§4.2–4.3, §§5.1–5.4, and §§6.1–6.3 (PDF pp. 14–24). The local page harvest records each relevant result and its disposition. The source’s multi-species and c=1 conventions are not imported silently.
- Retrieved and inspected Borghini’s complete 184-page Bielefeld lecture-note PDF, including §I.1.3 and §§IX.1–IX.3.2 (PDF pp. 4–5, 134–148). The local page harvest records local-equilibrium scope, perfect current/stress, and entropy results. The source’s units/sign conventions are not silently adopted.
- The two independent treatments support model conventions and source scope; every theorem proof remains a conditional deduction from explicit adopted assumptions and exact mathematical supplier interfaces. No experiment, measurement, empirical premise, or universal physical law is claimed. `source-fetch-check --stamp` passed for all four page/source records: the Gourgoulhon PDF (462,968 bytes, 37 pages, `2b25f0e5533dc029`) and Borghini PDF (2,238,984 bytes, 184 pages, `d46d52855e0fbd54`); each source record has one successful initial fetch and no recovery retries.

## Final author checks and readiness

- The complete cited sections were inspected in both author-hosted PDFs: Gourgoulhon §§4.2–4.3, 5.1–5.4, 6.1–6.3 (and the Kelvin circulation discussion in §7.5); Borghini §I.1.3 and §§IX.1–IX.3.2. Their different unit and normalization conventions remain source context only; the local arguments use the stated physics-library conventions and inspected mathematical carriers.
- Re-ran `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-remaining-80-2026-10-17-batch-58.coverage.json --stamp`: 4/4 sources are fetch-verified, with 0 newly stamped. There was no retrieval failure, so no source was dropped and no recovery or alternative-proof record was added.
- The finished local proofs explicitly use all mathematical claims needed by the derivations. In particular, the circulation contract cites the zero-derivative corollary, and the constant-background verification derives the zero connection coefficients. The exact claims, hypotheses, uses and boundaries are recorded in the batch proof contract.
- Recomputed the assigned items' complete in-run dependency closure with `item-dependency-levels.mjs`: 22 items across 7 pages passed, with levels 7, 7, 8, and 8 respectively, matching the manifest. The ordinary full-run command was also run but is currently blocked by unrelated incomplete inventories and stale labels/levels elsewhere in the live manifests (for example empty EMG/QSM/TGR A/B inventories and unrelated EMG level mismatches). No out-of-batch manifest was changed.
- Final scoped validation passed: precheck (4 items, 0 failures), proof layout (4 items, 8 steps, 0 defects), rendercheck (the 4 items and 2 pages), dependency and page-cycle check (4 selected items; 1,344 items/308 pages in the prerequisite-cycle closure), strict proof contracts (4/4, 0 errors/warnings), and content policy (4 items, 0 errors/warnings). Precheck initially proposed canonical phase numbering for the first-law proof; that reordering was adopted, then precheck and proof layout passed on the final bytes.
- Readiness remains escalated for all four assigned items because their actual current suppliers are not all ready: `def-tgr-local-fluid-state` and `lem-tgr-local-gibbs-euler` have stale Step 1 hashes; the MC02 balance/circulation lemmas are conditional on those MC01 carriers; `def-tgr-framework-units` and its dependent material postulate remain escalated through draft MI03/MI01 snapshot/proof issues. These are prerequisite-status holds, not gaps hidden by the complete conditional local arguments. The affected claims are the adopted perfect balance interface, the local state/parcel identities, entropy advection and circulation, and the exact flat-background model verification. Batch 58 cannot close the upstream items; their owning batches are the proposed placements for resolution.
- The four Step 1 decisions are `escalated`, never `ready`. Three records bind their final item/dependency hashes. The example `ex-tgr-uniform-perfect-background` received a small final proof clarification deriving coordinate-field commutation explicitly after its escalation had already been recorded: stored hash `2f172fae…`, current hash `d494d8b0…`. A second `step1-decisions.mjs record` attempt returned `Only the owner may resolve this record`; the escalation was preserved and `--owner` was not used. The owner must refresh that existing escalation through the owner-controlled route before treating the record as current.
