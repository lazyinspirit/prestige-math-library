# Batch 12 authoring notes — Conditional and Finite-Group Exact Inference

Run `mathematical-statistics-foundations-37`, role beta, batch 12. The live `.autopilot/mathematical-statistics-foundations-37` status was checked from disk and `git log`: the run is active, no dispatch is in flight, and the shared batch-level scheduling artifact is owner-controlled. Only this batch's pair, item carriers, and batch evidence were edited.

## Inventory and dependency levels

The controlling MSF-11 design has 8 planned A items and 3 planned B items. This batch has 11 A items and 3 B items. Three local A lemmas were added before consumers use them: conditional-kernel tail/atom measurability, the randomized PIT for arbitrary real laws, and the finite multiset tied-rank result. They supply missing well-definedness/proof steps rather than replace any planned claim.

| Item | Level | Role |
|---|---:|---|
| `lem-conditional-kernel-tail-and-atom-evaluations-are-measurable` | 0 | local measurability supplier |
| `lem-randomized-probability-integral-transform` | 0 | arbitrary-law randomized PIT |
| `def-finite-group-randomization-test` | 0 | planned definition |
| `lem-finite-multiset-randomized-rank-is-uniform` | 0 | local tied-rank supplier |
| `def-randomized-conditional-p-value` | 1 | planned definition; depends on the local measurability lemma |
| `def-orbit-rank-p-value` | 1 | planned definition |
| `thm-conditional-randomized-p-uniformity` | 2 | planned theorem |
| `thm-finite-group-randomization-validity` | 2 | planned theorem |
| `cex-noninvariant-null-invalidates-group-pvalue` | 2 | planned counterexample |
| `ex-finite-permutation-orbit-with-ties-and-stabilizers` | 3 | planned example |
| `def-conditional-test-given-statistic` | 6 | planned definition |
| `thm-conditioning-on-a-nuisance-sufficient-statistic` | 7 | planned theorem |
| `thm-conditional-test-controls-unconditional-level` | 7 | planned theorem |
| `ex-fishers-exact-test-from-two-binomial-samples` | 8 | planned example |

These levels are recomputed from the current batch manifests. Batch 8's `def-test-size-and-power` carrier and manifest were re-read after an earlier snapshot: both now declare level 5 and the same seven dependencies, including `lem-test-zero-one-loss-risk-identities`. Batch 12 consumers therefore use levels 6, 7, and 8 as shown. The batch-12 item-level check reports no errors for these 14 items.

## Plan comparison and scope

- The track markdown spells the finite-probability prerequisite as `combinatorics/finite-probability-spaces-and-random-variables`; `plan-spec.json` and the generated task use the actual page ID `finite-probability-spaces-and-random-variables`. The manifest follows the actual ID used by the plan-spec/task.
- MSF-11 retains generic finite-group invariance, not treatment-assignment randomization or causal inference. The group proof establishes equal mass on distinct orbit points and counts stabilizer fibers explicitly; it does not import Stark's informal orbit-equiprobability sentence as a proof.
- The required MSF-10 confidence/inversion page is retained as a page prerequisite. None of the 14 item arguments uses a pivot, confidence-set, or test-inversion result, so no item-level edge was added.
- All planned claims, including nuisance conditioning, conditional-level control, randomized p-value validity, orbit-rank validity, Fisher's conditional law, the tied S3 example, and the non-invariant counterexample, remain present.

## Supplier checks and unresolved metadata

- Read the current `def-sufficient-statistic` carrier and batch-5 manifest row. The definition assumes standard-Borel data and statistic spaces and one common parameter-independent kernel satisfying the conditional event identities under each parameter. Batch 12 states those hypotheses, and its local proof uses the choice-free bounded-real kernel-integration identity. The supplier's manifest dependencies and level 4 match its carrier. Its carrier still says `verification.precheck: pending`; SCHEMA.md calls for `n/a` on a definition. This is an upstream metadata defect recorded in the cross-batch ledger; no proof or approval is inferred from it.
- Read the current `def-test-size-and-power` carrier and batch-8 manifest row. The measurable test-function, nonempty-hypothesis, size, level, and alpha conventions match the batch-12 definitions and theorem. The current supplier body and manifest are aligned at level 5.
- Read the current MSF-10 page and its confidence-set, pivot, and inversion items. The page prerequisite is present; no claim is borrowed from it.
- Read the current conditional-law, regular-conditional-distribution, conditional-expectation, kernel-measurability, conditional-integration, finite-probability, finite-product, and independence suppliers used in the local arguments. The p-value definition treats the conditional kernel as supplied and makes no unsupported kernel-existence claim.

## Source reading and harvest

The A and B coverage records list locators, item support, and a disposition for each harvested result. Six complete source texts were inspected; coverage stores eight source records because the Berkeley and Hemerik full-text sources also back the B page.

- Ryan Martin, *Lecture Notes on Advanced Statistical Theory*, §2.3.1 and §2.5, PDF pp. 33–35 and 43–48: https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf
- George Deligiannidis, *Foundations of Statistical Inference*, Chapter 13, PDF pp. 77–80: https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf
- Berkeley Stat 210A course reader, complete “Conditional testing” section: https://stat210a.berkeley.edu/fall-2025/reader/testing-nuisance.html
- A. J. Brockwell, “Universal Residuals: A Multivariate Transformation,” Lemma 2 and the relevant proof of Theorem 1: https://pmc.ncbi.nlm.nih.gov/articles/PMC2211730/
- Peter B. Stark, *Statistics 240 Lecture Notes, Part 8: Resampling Methods*, §1.3 and footnote, PDF pp. 10–11: https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf
- Jesse Hemerik and Jelle Goeman, “Exact testing with random permutations,” fixed-group validity and randomized p-value arguments: https://pmc.ncbi.nlm.nih.gov/articles/PMC6405018/

A Penn State STAT 504 candidate was tried once with curl (TLS certificate-verification failure) and once with browser open (502). It was not adopted; the fully fetched and inspected Berkeley course-reader section replaced it. The candidate URL was not retained in the batch coverage/source ledger, so no URL is reconstructed here. No adopted source was dropped or escalated; the six adopted sources were all fetch-stamped.

## Axioms and proof route

No Axiom of Choice is used in the batch-12 proofs. The nuisance-kernel theorem uses the choice-free event-integral branch of the conditional-integration supplier. The randomized PIT uses an explicit generalized quantile, explicit exhaustion of a flat CDF level set, and measure continuity. The finite-group theorem uses finite orbit and stabilizer counting. No proof imports Stark's informal orbit statement or a source citation as a substitute for a local argument.

## Checks

- `tools/precheck.mts` on the 14 explicit item files: 10 proof-bearing items passed; 4 definitions were not applicable; 0 failures.
- `node tools/proof-layout.mjs` on the 14 explicit item files: 14 items, 34 steps, 0 defects.
- Focused `depcheck` on the 14 assigned items and their prerequisite closure: 0 errors, 0 warnings.
- `content-policy.mjs` on the batch-12 manifest: 14 items, 0 errors, 0 warnings.
- `source-fetch-check.mjs` on the batch-12 coverage: 8/8 source records fetch-verified, 0 documented drops.
- `coverage-checklist.mjs --require-destination`: 2 pages, 26 harvested results, 0 errors, 1 low-yield warning. The warning is the A-page harvest ratio (6/20); every harvested heading has a recorded disposition, and the owner/Alpha should review the explicitly out-of-scope source results.
- `item-dependency-levels.mjs check --run mathematical-statistics-foundations-37` exits nonzero on 18 mismatches outside batch 12; no batch-12 item is among them. These include the MSF-16/17 tangent-space and MSF-30/31 covariance items. No other batch was edited.
- `batch-dependency-levels.mjs check --run mathematical-statistics-foundations-37` reports the shared run-level dependency artifact stale after current manifest changes. It was not rewritten because it is owner-controlled.

The proof contracts cover all 14 items, exact supplier excerpts, all proof steps and their inputs, boundary cases, and the applicable finite checks. These authoring/readiness records are not independent approval.

## Step 1 readiness records

`step1-decisions.mjs record` wrote all 14 assigned items as `ready` with `owner: false`, current direct dependency IDs, and item/dependency hashes. The subsequent run-wide `step1-decisions.mjs check` found all 14 batch-12 records closed. The whole run remains open: 465 items were checked, 232 are ready, and 233 remain open across other batches/pages. No `--owner` flag was used, and these records are not independent approval.
