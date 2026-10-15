# Batch 7 authoring notes

Run: `hopf-hecke-unfinished-15-2026-10-15`  
Role: beta · batch 7 · A/B pair `finite-hopf-integrals-frobenius-duality-and-maschke`

## Scope and plan

The assigned design section HH-8 at `research/plan-hopf-hecke-algebras-track.md` and the corresponding entry in `research/plan-spec.json` agree with the task on the page IDs, titles, order, category, companion, prerequisites, and mathematical scope. No plan/design conflict was found. The A/B shells and the batch manifest retain the assigned pair and its five page prerequisites. The pair contains six A-page items and three B-page examples, below the 100-item page cap.

The active `.autopilot` run state was checked and showed this run at `1-scaffold`; the git history and state directory were checked as directed. No engine state, shared plan, verdict, or published content was changed.

## Inventory and dependency levels

Dependency levels were recomputed from the live in-run item graph. The nine item levels in the batch manifest and item frontmatter agree:

| Item | Level |
|---|---:|
| `def-hh-frobenius-functional-and-associative-pairing` | 0 |
| `def-hh-left-right-integrals-and-integral-functionals` | 4 |
| `lem-hh-finite-dual-regular-hopf-module-construction` | 5 |
| `thm-hh-hopf-maschke-integral-averaging` | 5 |
| `thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective` | 7 |
| `thm-hh-finite-hopf-algebras-are-frobenius` | 8 |
| `ex-hh-sweedler-frobenius-pairing` | 4 |
| `ex-hh-finite-group-algebra-integrals-and-maschke` | 6 |
| `ex-hh-taft-integrals-and-maschke-failure` | 6 |

The Hopf–Maschke proof no longer depends on the one-dimensional-integrals theorem: its averaging argument only needs the integral definition, the antipode identities, and finite-dimensional splitting. This removes an unnecessary dependency and avoids delaying that proof behind a result it does not use. The finite-integrals theorem retains its own level-7 dependency on the right regular Hopf module and the fundamental theorem.

## Supplier review

The actual statements and complete relevant proofs were read for the in-run suppliers used here, including the Hopf definition and anti-identities (batch 3), the finite-dimensional dual Hopf structure and Taft PBW construction (batch 4), the right-right Hopf-module definition and fundamental theorem (batch 6), the finite algebra-coalgebra duality result (batch 2), and the group Hopf-algebra construction (batch 3). Published prerequisites were checked at their use sites, including finite tensor duality, finite bases and rank-nullity, module and semisimplicity definitions, submodules, and the finite matrix/module lemma. The published chain-conditions page was also checked for its semisimple-module context.

The current-run supplier drafts remain drafts; this evidence records a mathematical interface review, not independent acceptance. One supplier artifact has a stale availability sentence: `thm-hh-finite-dimensional-dual-hopf-algebra` says in Facts [F1] and [F2] that the actual Hopf-definition and finite algebra-coalgebra-duality bodies are unavailable. Both bodies are present in their batch manifests and were read in full. The dual-Hopf theorem's actual Statement and proof supply the exact interface used here; the stale text is recorded for owner reconciliation before that supplier is accepted.

The batch-7 cross-batch input records 22 verified page/item edges. A direct comparison with all live manifests found exactly 22 expected edges, with no missing, duplicate, or extra rows. A read-only run-wide ledger collection could not finish because unrelated batch 11 item `lem-hh-finite-direct-summands-over-khh-are-free` has invalid YAML in its quoted title (`\l` is an invalid escape at frontmatter line 3). The batch-7 rows were checked independently; the malformed batch-11 carrier was not edited.

## Sources

The A page uses two independent full-text lecture-note treatments:

- Paolo Saracco, *Notes on Hopf Modules, Integrals and Frobenius Hopf Algebras* (2019), with the theorem and proof locators recorded in the coverage file.
- *Erasmus Mini-Course on Hopf Algebras*, Lectures 6–7, with the theorem and proof locators recorded in the coverage file.

Both complete PDFs were inspected. The notes cover the dual regular Hopf module, integral dimensions and antipode bijectivity, Frobenius pairings, and integral averaging. The local proofs expand the Erasmus notes' “left to the reader” Hopf-module verification and averaging H-linearity. The coverage file records the supported items, out-of-scope results, retrieval attempts, URLs, and PDF locators. No retrieval failed, so no source-resolution escalation or dropped-source entry was needed.

`node tools/source-fetch-check.mjs --coverage research/hopf-hecke-unfinished-15-2026-10-15-batch-7.coverage.json --stamp` reported `2/2 source(s) fetch-verified (2 newly stamped)`.

No registered `finite-smoke` computation applies to Hopf integrals. The finite examples instead carry their full exact computations in the proof steps: the Sweedler pairing matrix, group-sum coefficient comparisons, and the Taft PBW coefficient equations.

## Contracts, records, and checks

The proof contract covers all nine items with 36 exact supplier citations, all 25 numbered proof steps and their inputs, and all eight standard boundary dispositions per item. The two definitions have explicit non-proof contracts. The group-algebra example now proves the coefficient comparison for both left and right integral spaces.

Final scoped check results:

- `node tools/manifest-deps.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-7.pages.json`: 9 items, 0 missing dependency arrays, 0 errors.
- `node tools/item-dependency-levels.mjs check --run hopf-hecke-unfinished-15-2026-10-15`: 138 items across 30 pages, maximum level 14; passed.
- `node tools/tsx-run.mjs tools/precheck.mts <the nine batch-7 item paths> --json`: 9 files, 7 proof-bearing items passed, 2 definitions not applicable, 0 failures.
- `node tools/proof-layout.mjs <the nine batch-7 item paths>`: 9 items, 25 steps, 0 defects.
- `node tools/proof-contract.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-7.proof-contracts.json --strict`: 0 errors, 0 warnings, 9/9 items checked.
- The batch-7 cross-batch rows were structurally compared with the live manifests: 22 expected edges, 22 recorded, no mismatches.

All nine item readiness records were written as `ready` without `--owner`. Each records its examined direct dependencies (and any `justified_by` item), the current contract and placement evidence, and the distinction between author readiness and upstream acceptance. Their item/dependency hashes were rechecked and all nine currently report closed. No mathematical prerequisite remains unresolved within this pair.
