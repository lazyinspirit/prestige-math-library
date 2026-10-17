# Batch 71 authoring notes — finite regulated Newtonian gravitational canonical preparation

Run: `physics-remaining-80-2026-10-17` · role: beta · batch: 71 · pair: `tgr-g01` / `tgr-g01-examples`.

## Scope, plan comparison, and conflicts

The binding owner direction and current `plan-spec.json` select 80 A/B pairs and exclude both Fluid Dynamics categories. This worker authored only the assigned `tgr-g01` pair. The current plan specifies A order 639, B order 640, physics library/category `thermodynamics-and-general-relativity`, the exact titles, A `requires: [tgr-i01, tgr-mg01]`, and B `requires: [tgr-g01]`. These match the complete TGR track section at L639 and the task. The canonical plan’s empty item arrays are authoring placeholders, not a conflict. The original inventory’s eight A items and four B items are all present. One local A-page mathematical lemma was added to close a finite-mode proof without an unnecessary axiom assumption; both pages remain below the 100-item cap.

The inventory’s planned static finite-fermion dependency was `lem-tgr-static-finite-fermi-occupations` from batch 69. I inspected its complete current proof and readiness record: it explicitly assumes `def-countable-choice` and uses the batch-45 QSM draft supplier under `AC_omega`. The assigned use has a finite set of modes, so I supplied `lem-tgr-finite-static-mode-occupation-trace` locally on the A page and proved its product and marginals by finite sums, with no countable choice. The static-gas theorem uses that exact local finite statement. This is a scoped alternative proof, not a repair or acceptance of either outside supplier; the general batch-69 carrier and its hypotheses remain unchanged.

The older broad `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/prose-scaffold.md` says a “corresponding canonical model fails normalization” in its general gravitating-ensemble summary. That sentence is not valid for the exact finite relative-shell model assigned here: the current G01 reservation separates `post-tgr-kepler-canonical-preparation` from the Gibbs-volume shell preparation, and the inspected `lem-tgr-relative-shell-canonical-response` proves a finite positive canonical normalizer on $r_0\le |q|\le R$ with $r_0>0$. Following the current plan and exact supplier, this pair proves nonnegative canonical response for that regulated shell and negative Gibbs-volume microcanonical response under the distinct preparation. Collapse claims remain with the separate unregulated point model; no unregulated limit is imported into the finite shell.

The unregulated model is stated for two labelled positive masses. The batch-69 collapse theorem’s first clause is only for equal positive masses, so the B counterexample uses that exact clause for the equal-mass case and gives a separate explicit small-separation lower bound for unequal masses. This preserves the full positive-mass scope without widening the mathematical supplier’s statement.

## Supplier inspection and readiness

Before writing consumers, I inspected `tgr-i01` / batch 54 and `tgr-mg01` / batch 69. Current status was read with `loadStep1Record` and `step1Decision` from the named support modules. The live `def-tgr-framework-units` row is owner-recorded `ready` with a current hash; its evidence says the exact MI03/MI01 charge hypotheses are retained and that this records authoring readiness only. Older batch-54 notes describe a historical MI01 snapshot concern; the current owner disposition and native Step-1 row supersede that stale note. This batch uses only the current units, observer/chart, and static-convention clauses of the definition, not the finite-charge balance as an extra premise.

The directly consumed batch-69 items are all present and have current `ready` Step-1 records: `def-tgr-gravitating-phase-reference`, `def-tgr-softened-gravity-finite-phase`, `lem-tgr-finite-gravitational-gibbs`, `thm-tgr-finite-gravitational-entropy-optimum`, `thm-tgr-gravitational-canonical-response`, `thm-tgr-gravity-collapse-nonextensivity`, `def-tgr-regulated-kepler-shell-law`, `lem-tgr-regulated-kepler-shell-law-normalization`, `lem-tgr-relative-shell-canonical-response`, `thm-tgr-regulated-kepler-negative-capacity`, and `lem-tgr-static-gas-finite-normalization`. I read each current Definition/Statement and complete proof used here, including the shell definition’s `justified_by` normalization lemma. Their transitive local mathematical inputs `lem-tgr-finite-gaussian-moment-envelope` and `lem-tgr-annular-radial-integration` were also read with their complete proofs. The exact imported Statements for the Gaussian integral, Tonelli, differentiation under an integrable majorant, and nonnegative integral zero iff almost everywhere were inspected. Their hypotheses match the bounded position regions, positive compact parameter ranges, finite radial shells, and finite density classes used by the suppliers.

These mathematical and physical suppliers remain draft content where their carriers say draft. Current Step-1 `ready` records establish only authored prerequisite currency; none is treated as independent proof approval. The consuming proofs state their exact hypotheses and remain conditional on the inspected supplier interfaces.

## Dependency levels

The shared scheduling snapshot records batch 71 at level 4 with batch prerequisites 54 and 69. The supplier levels are 2 and 3, so `1 + max(2,3) = 4`. Item levels were calculated before final records: zero without an in-run item supplier; otherwise one plus the maximum current in-run supplier level. The assigned levels are:

| Item | Level |
|---|---:|
| `lem-tgr-finite-static-mode-occupation-trace` | 0 |
| `post-tgr-finite-newton-gravity-preparation` | 6 |
| `post-tgr-unregulated-point-attempt` | 6 |
| `post-tgr-kepler-canonical-preparation` | 6 |
| `post-tgr-kepler-microcanonical-volume-preparation` | 6 |
| `post-tgr-fixed-static-gas-preparation` | 6 |
| `pthm-tgr-regulated-gravity-canonical-equilibrium` | 7 |
| `pthm-tgr-regulated-ensemble-response-inequivalence` | 7 |
| `pthm-tgr-static-gas-local-equilibrium` | 7 |
| `cex-tgr-physical-unregulated-collapse` | 7 |
| `ex-tgr-physical-finite-softened-box` | 8 |
| `ex-tgr-physical-negative-kepler-capacity` | 8 |
| `ex-tgr-physical-static-lapse-two` | 8 |

`research/physics-remaining-80-2026-10-17-batch-71.cross-batch-dependencies.json` records one row per direct page or item edge. Every `verified` status denotes only the scoped current-interface check; it does not approve a supplier proof. The prior TGR-MG01 QSM page/item observation remains in batch-69 evidence; this batch does not list it as a direct edge because the finite mode formula is proved locally.

## Source reading and dispositions

Four independent full texts were retrieved and read at the locators listed in `research/physics-remaining-80-2026-10-17-batch-71-sources/source-reading.md`. Tong’s complete lecture notes provide the full-length statistical-mechanics treatment; Katz provides a separate gravitational-statistics treatment; Chavanis I and II provide specialist relativistic classical/Fermi contexts. The source coverage records every URL, locator, supported item and each harvested result’s `included` disposition while explicitly stating that the local proofs, not literature authority, establish the exact claims. No experimental or observational data are used.

The actual `source-fetch-check --stamp` result is recorded in the coverage file: 7/7 full-text entries fetched and stamped, 0 failures, 0 drops. `source_resolution` is empty because no active source retrieval failed. No retry, search recovery, or source drop was needed.

## Proof route and physical limits

The softened model and its unregulated point model are distinct Hamiltonians. The softened canonical theorem uses the finite Gibbs, entropy-optimum, and fixed-Hamiltonian variance suppliers. The Kepler result uses a hard inner/outer radial shell and the Gibbs-volume entropy convention; its microcanonical slow-motion condition is proved on that energy shell. The canonical relative-shell comparison still has unbounded momentum support and is not given a whole-ensemble speed bound. The static gas is an ideal gas on a prescribed smooth static background; the finite Fermi result is only for supplied finite modes. No claim asserts thermalization, a self-consistent Einstein solution, general curved-space spectra, observed gravitating matter, or generic gravitational stability.

## Final scoped checks and readiness

After the final item edits, I synchronized all 13 manifest statement fields from their current item sections and regenerated proof-contract citations and derivations from the final facts and numbered steps. The normative precheck repairs, including the later response-theorem rephasing, are recorded in `batch-71.precheck-proposals.json` and `batch-71.precheck-repair-2.json` and were adopted. Final results:

| Check | Result |
|---|---|
| Normative precheck on the 13 assigned items | 13 checked, 0 failing |
| `proof-layout.mjs` on the 13 assigned items | 13 items, 22 steps, 0 defects |
| `rendercheck.mjs` on the 13 items and both pages | 15 paths, 0 errors, 0 warnings |
| `depcheck.mjs --items-file batch-71.items.json` | Selected dependency and cycle checks passed |
| Scoped `fwdcheck.mjs` and `extcheck.mjs` | 13 items checked, 0 errors and 0 warnings |
| `content-policy.mjs` on the batch pages manifest | 13 items, 0 errors, 0 warnings |
| `proof-contract.mjs --strict` | 13/13 contracts, 0 errors, 0 warnings |
| `coverage-checklist.mjs` | 2 pages, 26 harvested results, 0 errors, 0 warnings |
| `source-fetch-check.mjs` in check mode | 7/7 full-text sources fetch-verified; 0 drops |
| Scoped item dependency-level recomputation | 13 target items; 34-item dependency closure; every level matched |
| Cross-batch edge audit | 23 direct edges; every expected edge present and `verified` |
| Current Step-1 readiness hashes | 13/13 authored items `ready` and current |

Each authored readiness record names its inspected logical dependencies. The finite-mode lemma and its two static-gas consumers also bind the inspected countable-choice Fermi item as nonlogical context; it is not a proof premise. Current external supplier Step-1 records were checked before recording. Draft labels and readiness records are not independent proof approval. No local prerequisite remains unresolved.

The full-run `proof-contract-coverage.mjs --run physics-remaining-80-2026-10-17 --contracts research/physics-remaining-80-2026-10-17-batch-71.proof-contracts.json` check remains blocked by an unrelated empty outside page inventory, `emg-mp03`. The strict batch-scoped contract check above passes; this batch does not modify the outside page or shared inventory.
