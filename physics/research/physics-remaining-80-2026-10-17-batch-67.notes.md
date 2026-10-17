# Batch 67 authoring notes — `tgr-pet02`

Run: `physics-remaining-80-2026-10-17` · role **beta** · batch **67** · category `thermodynamics-and-general-relativity`.

## Scope, current plan, and design reconciliation

This batch owns `tgr-pet02` / `tgr-pet02-examples` only. The current `plan-spec.json` and dispatch agree on page IDs, titles, category, order 631/632, and the exact page edge `tgr-pet02 → tgr-pet01`; the examples page requires `tgr-pet02`. The manifest's original empty item arrays were scaffolding placeholders. The completed inventory is the reserved three A items and one B example.

There is a page-prerequisite conflict with the older prose reservation at `research/plan-thermodynamics-and-general-relativity-track.md` L507 and the related source inventory: those list `tgr-i01`, `tgr-et03`, and `tgr-pet01` as page requirements, while the current plan specifies only `tgr-pet01`. The current plan controls the page interface, so `requires` follows `plan-spec.json` exactly. The other suppliers remain explicit item-level dependencies: the framework-units definition, finite-cell Gibbs theorem, charged-stationarity result, KMS definition, and response/redshift theorem are not omitted from the consuming arguments.

Several reserved item dependency lists also needed explicit prerequisites after actual carrier inspection. `post-tgr-selected-gibbs-kms-preparation` directly lists the selected stationary-bath postulate and `def-countable-choice`: the state assignment uses that bath, and the finite-cell construction inherits $\mathrm{AC}_\omega$ through the smooth charged-stationarity proof. `pthm-tgr-local-kms-clock-temperature` directly lists the KMS definition and $\mathrm{AC}_\omega$ to expose its exact strip convention and inherited assumption. `pthm-tgr-finite-stationary-response` directly lists the finite-cell Gibbs theorem and $\mathrm{AC}_\omega$, since its state and its transitive construction use both. The B example adds the exact framework-units and charged-Liouville inputs, the electrochemical-stationarity theorem, the selected bath/state assumptions, and $\mathrm{AC}_\omega$ to verify the specific Rindler and neutral auxiliary-sector instance it constructs. These additions preserve the reserved claims and make their actual hypotheses visible.

## Item inventory and levels

The batch dependency schedule places batch 67 at page level 6 with the page supplier in batch 66. The item levels below use the required item-graph rule—zero with no in-run item suppliers, otherwise one plus the maximum direct in-run supplier level. The item graph has direct suppliers in batches 41, 54, 63, 64, and 66; their actual current statements, proofs, and readiness records were inspected before use.

| Page | Item | Level | Highest direct in-run supplier(s) |
|---|---|---:|---|
| A | `post-tgr-selected-gibbs-kms-preparation` | 8 | `def-qsm-kms-state` (7) |
| A | `pthm-tgr-local-kms-clock-temperature` | 9 | `post-tgr-selected-gibbs-kms-preparation` (8), `thm-tgr-kms-orbit-time-rescaling` (8) |
| A | `pthm-tgr-finite-stationary-response` | 9 | `post-tgr-selected-gibbs-kms-preparation` (8) |
| B | `ex-tgr-independent-redshifted-cells` | 10 | `pthm-tgr-local-kms-clock-temperature` (9) |

External mathematical `def-countable-choice` is an imported root mathematics supplier, pinned by `research/math-imports.json`; it remains read-only. Its exact hypothesis is carried by the finite-cell consumers. The finite-cell state itself remains a finite product density, and the response theorem remains finite-dimensional and finite-time.

## Supplier and argument audit

Inspected the complete current proof for `thm-tgr-finite-cell-gibbs-factorization`: its simultaneous finite-cell Gibbs factors, positive finite partition traces, full grand-generator KMS state, and neutral-subalgebra physical-dynamics restriction match the postulate. Its exact connected-domain, positive-temperature, common-gauge, global-compensator, and whole-future-mass-shell hypotheses are retained; the auxiliary kinetic sector in the B example is explicitly separate from the two matrix cells.

Inspected the current definition `def-qsm-kms-state` and full proof `thm-tgr-kms-orbit-time-rescaling`; the local-clock proof first restricts the global KMS strip functions to an invariant cell algebra and then applies the positive constant rescaling $\alpha^\lambda_\tau=\alpha_{\tau/\lambda}$. The scope stays orbitwise with constant lapse, and the physical strip width is $\hbar\beta$ seconds.

Inspected the full statement and proof of `thm-tgr-finite-response-redshift` and its current direct matrix/Kubo suppliers. The consumer preserves the distinction between the fixed-preparation finite-time expansion and the separately re-prepared Kubo–Mori derivative, includes the exact quadratic remainder, pushes spectral measures with delta-line weights, and keeps any zero-frequency atom outside the $\coth$ formula. No infinite-time relaxation, dc coefficient, arbitrary interacting reduced state, or observation is claimed.

The Rindler example defines an explicit smooth stationary geometry and verifies its lapse and time orientation. For its neutral auxiliary kinetic sector it sets $q=0$, $A=0$, $\Lambda_\xi=0$, $\mu=0$, and $m>0$; since $\beta$ is Killing and $d\zeta=-cq\,\iota_\beta F=0$, the exact forward electrochemical-stationarity criterion supplies the required whole-shell condition. No identification with the quantum cells is inferred.

Current `loadStep1Record` / `step1Decision` inspection found hash-current `ready` records for all used pre-existing draft suppliers, including `post-tgr-stationary-equilibrium`, `def-tgr-framework-units`, `def-tgr-charged-liouville-data`, `thm-tgr-electrochemical-stationarity`, `thm-tgr-finite-cell-gibbs-factorization`, `def-qsm-kms-state`, `thm-tgr-kms-orbit-time-rescaling`, and `thm-tgr-finite-response-redshift`. These records establish authoring readiness only, not independent proof approval. The imported `def-countable-choice` snapshot is pinned and unchanged.

## Sources and retrieval history

The A page has two independent complete full-text KMS treatments: Naaijkens §3.4 and Ruelle Chapter 1 §7. It also has two independent full-text linear-response treatments: Kubo §2 and MIT 8.512 Lecture 1 §§1.1–1.5. Exact URLs, locators, supported items, each harvested result's disposition, convention limits, existing raw hashes, and fetch stamps are in `research/physics-remaining-80-2026-10-17-batch-67.coverage.json`; the reading basis is recorded in `research/physics-remaining-80-2026-10-17-batch-67-sources/source-reading.md`.

The current-run full-document fetch stamps were reused from batches 41/47/64 rather than represented as new downloads. Relevant Naaijkens and Ruelle passages were reopened for this use; the Kubo scan's complete reading and retrieval evidence is retained from batch 47, and MIT's complete 11-page source record is retained from batch 47/64 with the relevant sections rechecked. Natural-unit conventions are not imported. No source retrieval failed in the active evidence, no recovery retry or alternative search was needed, and no source was dropped; therefore no per-source `source_resolution` decision is required.

## Cross-batch dependencies

`research/physics-remaining-80-2026-10-17-batch-67.cross-batch-dependencies.json` records one `verified` row for each exact direct out-of-batch item or page edge. The rows cover the `tgr-pet01` page requirement and direct item suppliers in batches 41, 54, 63, 64, and 66. `verified` means the scoped statement/hypothesis/use check is complete; it does not mean independent proof approval. Imported mathematics is external context, not an in-run batch edge.

## Capacity and status

The A page has three items and the B page one example, well under the 100-item cap. There is no prerequisite cycle, unresolved supplier-interface gap, unsupported model assumption, page-capacity issue, or owner escalation. All four assigned items remain drafts. The completed Step 1 records document authored prerequisite readiness only; later review gates still decide independent acceptance.

## Scoped check results

- `node tools/physics-support/tsx-run.mjs tools/physics-support/author-check.mts physics-remaining-80-2026-10-17 67`: **passed**, final fingerprint `8b2824e88518381e6a9483099c3921cc5d9f0e9dd76dba5f2e0218311e3751df`. Precheck: 4 items, 0 failing; rendercheck: all 6 explicit item/page files; content policy: 4 items, 0 errors/warnings; strict proof-contract check: 4/4, 0 errors/warnings.
- `node tools/physics-support/proof-layout.mjs` on the four explicit item paths: **4 items, 9 proof steps, 0 defects**.
- `node tools/physics-support/proof-contract.mjs research/physics-remaining-80-2026-10-17-batch-67.proof-contracts.json --strict`: **4/4 contracts, 0 errors, 0 warnings**.
- `node tools/physics-support/coverage-checklist.mjs research/physics-remaining-80-2026-10-17-batch-67.coverage.json --json`: **2 pages, 13 harvested results, 0 errors, 0 warnings**.
- `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-remaining-80-2026-10-17-batch-67.coverage.json --stamp`: **6/6 source entries fetch-verified and resolved**, 0 newly stamped, 0 drops. These are authentic full-document stamps reused from current-run batches 41/47/64.
- Focused `depcheck` on `batch-67.item-selection.json`: **4 selected items, zero errors/warnings**, with 1,977 prerequisite item-cycle checks and 534 page-cycle checks. Focused `fwdcheck` and `extcheck` on the same selection also passed with 0 errors/warnings; no forward or unproved references are introduced.
- Direct item-level recomputation from the final batch items and current in-run manifests gives levels `8, 9, 9, 10`, matching all four declared `dependency_level` values. The prescribed whole-run `item-dependency-levels.mjs check --run physics-remaining-80-2026-10-17` exits 1 only because four other planned pages still have empty scaffold inventories: `tgr-phs03`, `tgr-phs03-examples`, `tgr-phs04`, and `tgr-phs04-examples`. No assigned batch-67 item level is reported erroneous; those unassigned inventories are untouched.
- Cross-batch comparison against current manifest `requires` and direct `deps`: **15 expected edges, 15 rows, no missing/extra rows**, all `verified` with concrete evidence. `verified` is the scoped interface check only.

`step1-decisions.mjs record` recorded all four final items as `ready` with `owner:false` and their explicit direct dependencies. A fresh `loadStep1Record` / `step1Decision` check confirms all four records are hash-current and closed. These records establish authoring readiness only; they do not claim independent proof acceptance.
