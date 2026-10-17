# Batch 68 authoring notes — Supported static heat model

Run: `physics-remaining-80-2026-10-17` · role: beta · batch: 68 · pair: `tgr-pet03` / `tgr-pet03-examples`.

## Scope and plan reconciliation

The binding owner direction was read before construction. This batch authors only the three reserved carriers: `post-tgr-supported-static-heat-model` and `pthm-tgr-supported-redshift-heat-relaxation` on A, and `ex-tgr-redshifted-cosine-medium` on B. The A/B page identities, titles, order, category, library, and current `plan-spec.json` requirements are preserved. The plan has `items: []` reservation placeholders; the exact three-item inventory comes from the assigned TGR-PET03 design and its linked `proposed-inventory.json`, and the batch manifest now records that inventory.

There is one page-requirement conflict. The original TGR-PET03 reservation says `TGR-I01`, `TGR-C02`, and `TGR-ET04`; current `plan-spec.json` and the assignment manifest say only `tgr-c02` and `tgr-et04` for page `tgr-pet03`. The plan controls page metadata, so the A page lists only `tgr-c02` and `tgr-et04`. The I01 material/units input is retained as an exact item-level prerequisite (`def-tgr-framework-units`); no prerequisite was dropped. The corresponding direct item edge is recorded in this batch's dependency array.

## Inventory, dependencies, and levels

The stored batch-level schedule places batch 68 at level 4 with page suppliers batches 59 and 65. Item levels were recomputed from the actual authored `deps`; published and other out-of-run items do not raise a level.

| Item | Home | Item level | Direct in-run suppliers determining the level |
|---|---|---:|---|
| `post-tgr-supported-static-heat-model` | A | 8 | `post-tgr-first-order-dissipation` (7); the batch-54 framework-units and local-material inputs are level 5 and 6 |
| `pthm-tgr-supported-redshift-heat-relaxation` | A | 9 | `post-tgr-supported-static-heat-model` (8); `post-tgr-local-entropy-admissibility` (6); `thm-tgr-supported-static-heat-evolution` (4) |
| `ex-tgr-redshifted-cosine-medium` | B | 10 | `pthm-tgr-supported-redshift-heat-relaxation` (9) |

The item DAG is acyclic and supplier-first: postulate, conditional physics theorem, then example. The full direct-edge inventory (including same-batch item edges and page requirements) is in `physics-remaining-80-2026-10-17-batch-68.cross-batch-dependencies.json`; this does not certify any supplier proof independently.

There is a run-level scheduling follow-up for the owner at the drained join. The authored postulate has direct item dependencies on batch-54 items `def-tgr-framework-units` and `post-tgr-local-material-thermodynamics`, in addition to the batch-59 first-order postulate. `prerequisiteBatches` includes carrier-level dependencies, so the current graph should include batch 54 in batch 68's direct `requires` set; expected batch-68 requirements are batches 54, 59, and 65, with level still 4. The stored owner-managed `batch-dependency-levels.json` currently lists only 59 and 65. I did not edit that shared scheduling evidence. Recompute it after all manifest writers drain; the current whole-run check is also blocked by another in-progress manifest as recorded below.

## Supplier interfaces and proof status

- The current `def-tgr-framework-units`, `post-tgr-local-material-thermodynamics`, and `post-tgr-first-order-dissipation` carriers were read at their actual definitions/postulates. Their current Step 1 records are ready, and their present interfaces supply the length-coordinate/SI conventions, the selected fixed-composition material function, and the restricted first-order heat closure. The local static model retains all three as direct dependencies and adopts a particular lapse, conductivity, support, and insulated box.
- The current `post-tgr-local-entropy-admissibility` postulate and its C1 current/regime restriction were read. The physics theorem treats it as an adopted local physical premise; its entropy-rate calculation is separately taken from the mathematical supplier.
- `thm-tgr-supported-static-heat-evolution` was read in full at its present Statement, Facts, and Proof. Its box, lapse, material map, heat coefficient, boundary data, support condition, regularity, solution, energy, entropy, and relaxation interfaces match this use. Its current Step 1 record is `ready` at the present carrier hash, but that is authoring readiness rather than independent proof approval. The consuming physics theorem stays conditional on this exact mathematical result and its transitive dependency chain, including the declared `AC_omega` assumption; it does not treat a draft label as proof acceptance.
- Historical evidence conflict: current `batch-65.notes.md` and `batch-65.cross-batch-dependencies.json` still contain older open/escalated observations for ET01/MC02 context. The current Step 1 record for the math heat theorem is owner-authored `ready` and says the final theorem statement/proof was checked; the current owner TGR resolution states that the earlier missing-P-context assertion was contradicted by authenticated existing carriers. These older batch-65 files were left unchanged. Batch 68 records only its own scoped statement/use checks; the theorem remains a conditional premise, not an independent review verdict.
- The mathematical result has mathematical prerequisites only. The local postulate/theorem/example preserve their physics domain, physical scope, dependency roles, SI dimensions, and empty empirical-premise arrays. No experiment or measurement is reported.

## Full-text source reading and dispositions

The full PDFs were retrieved directly and the relevant arguments read; coverage records exact URLs, locators, items, dispositions, limitations, and fetch stamps.

- Éric Gourgoulhon, *An Introduction to Relativistic Hydrodynamics*, full 37-page PDF, §§4.3 and 5.1–5.3, PDF pp. 16–19. Read the equation-of-state differential, local stress-energy balance, and observer projection. Disposition: inline context for the postulate, theorem, and example. It does not derive the selected dissipative heat balance or its static solution.
- Nicolas Borghini, *Elements of Hydrodynamics*, full 184-page lecture notes, §§IX.4.1–IX.4.4, PDF pp. 152–159 (printed pp. 144–151). Read the complete decomposition, entropy balance, first-order model discussion, and limitations. Disposition: inline context for the A-page items. Its displayed first-order formulas use the Landau frame and do not directly supply this restricted heat-only branch. The diffusion equation (IX.44c)'s plus sign conflicts with the sign in (IX.43b) and its positive expression (IX.45); this batch sets diffusion to zero and does not use that equation. The source's warning that first-order relativistic dynamics need not be causal or stable is retained in the scope.
- John K. Hunter, *Notes on Partial Differential Equations*, full 242-page lecture notes, §5.1.2, Theorem 5.5 and complete proof, printed pp. 130–131 (PDF pp. 137–138). Disposition: included for Gaussian smoothing/heat-equation context for the theorem and example. The local physical theorem instead consumes the exact bounded-uniformly-continuous supplier and its locally proved reflected-boundary result; Hunter's theorem does not supply this model's initial trace, support, entropy, or physical interpretation.

Gourgoulhon and Borghini are the two independent full-note treatments for A; Hunter is an additional independent full-note PDE treatment. Gourgoulhon and Hunter are the two full-note treatments for B. The source URLs came from the exact existing batch-65 source inventory/coverage; all five assigned page-source records were then fetched and inspected directly. No retrieval failed or was dropped, so no `source_resolution` failure disposition or recovery retry was needed.

## Scoped checks and readiness

Successful current scoped results:

- `source-fetch-check --stamp`: 5/5 page-source records fetch-verified and newly stamped; 0 drops.
- `coverage-checklist`: 2 pages, 9 harvested results, 0 errors, 0 warnings.
- `content-policy` on the batch-68 manifest: 3 items, 0 errors, 0 warnings.
- `content-policy --manifest-only --authored`: 3 items, 0 errors, 0 warnings.
- `depcheck --items-file /tmp/physics-batch68-item-ids.json`: pass; 1,623 prerequisite items and 363 prerequisite pages checked, 0 errors, 0 warnings.
- `rendercheck` on the three items and both pages: 5 checked, 0 errors, 0 warnings.
- Scoped normative `precheck`: 3 files checked (postulate nonproof structure plus two proof-bearing items), 0 failures.
- `proof-layout` on the three changed items: 3 items, 7 steps, 0 defects.
- Strict proof-contract validation: 3/3 assigned items, 0 errors, 0 warnings.
- The native item-level computation on the exact 80-page manifest set gives levels 8, 9, and 10 for the three assigned items, with no assigned-item level errors.

Step 1 readiness records were recorded without `--owner`: all three assigned items are `ready`. They bind the actual current carriers and direct dependency closures and represent authoring readiness only, not independent review or proof approval.

Run-wide check blockers (not authored or repaired here):

- `item-dependency-levels.mjs check --run physics-remaining-80-2026-10-17` exits nonzero on 30 other empty scaffold inventories and six item rows without IDs on `tgr-et03`/`tgr-et03-examples`; it reports no mismatch for the three assigned levels.
- `batch-dependency-levels.mjs check --run ...` and `step1-decisions.mjs check --run ...` stop with `Duplicate item undefined` from that same in-progress `tgr-et03` manifest, before they can validate the whole-run schedule/readiness projection. The assigned item-level calculation and individual `record` commands passed. The owner-managed scheduling file remains unchanged pending a drained recomputation that includes batch 54.

No published item, imported mathematics, root mathematical original, other batch, shared plan, shared schedule, engine state, or verdict was edited.
