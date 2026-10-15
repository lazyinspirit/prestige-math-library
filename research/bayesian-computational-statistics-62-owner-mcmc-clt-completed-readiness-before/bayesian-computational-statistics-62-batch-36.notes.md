# Batch 36 authoring notes — MCMC CLTs, MCSE, and long-run variance

Run: `bayesian-computational-statistics-62`; role: beta; batch: 36.
Scheduling input SHA-256: `3c923c4741e14eb21bd8f4643f897e341fc7f0bb011645fe2e91713dd37cc2d8`.
Assigned pair: `mcmc-clt-and-monte-carlo-standard-error` / `mcmc-clt-and-monte-carlo-standard-error-examples`.

## Inventory and dependency order

The scaffold manifest contains 22 A-page items and 3 B-page examples. The A-page suppliers are ordered by item level: seven items at level 0; eight local items at level 1; five theorem/lemma carriers at level 2; the six-regime MCMC CLT theorem at level 5; and the OBM strong-consistency theorem at level 6. All three B-page examples are at level 2. The source-condition definition, zero-variance lemma, measurable-observation lemma, and geometric-envelope lemma were added as local prerequisites discovered while authoring. The batch-level scheduling input assigns batch 36 level 4; that is distinct from the item-level labels.

The manifest was ordered supplier-first. Item-level labels were recomputed from the in-run dependency graph after the added items. The required `item-dependency-levels` check is recorded in the scoped-check section below; the run-wide tool currently also reports unrelated manifest defects elsewhere in this run.

## Plan and plan-spec comparison

The complete BCS-33 design at `research/plan-bayesian-computational-statistics-track.md` L162–L163 is controlling. It requires the stationary Harris-ergodic setting; all six Jones Theorem 9 cases; the local Poisson-equation martingale CLT and covariance identity; the Flegal–Jones Theorem 2 OBM contract; and the warning that a power law `b_n ~ n^nu` is not by itself the full contract. All those claims remain in the draft, including the nondegenerate-variance caveat in the source OBM proof.

`research/plan-spec.json` identifies the same BCS-33 page pair, order, category, and direct BCS-32 page prerequisite; its `items` arrays are intentionally empty. There is no page-identity or mathematical-scope conflict. The generated dispatch says “prerequisite batches: 35”, while the current batch-dependency-level artifact lists batches 32 and 35. The BCS-33 plan/spec require BCS-32, and this batch also uses the BCS-29 reversible-flow definition in batch 32; therefore the artifact's extra batch-32 edge is supported by the controlling plan and actual item dependencies. The omitted edge is recorded here rather than hidden.

## Local mathematics and proof boundaries

The following arguments are complete local drafts: square-integrable kernel conditional moments; the strong- and uniform-mixing bounds from total variation; stationary total-variation convergence to strong mixing using a supplied countable algebra; measurable-factor contraction of mixing coefficients; the zero-variance degenerate CLT; the Poisson-equation martingale decomposition, martingale CLT, endpoint estimate, and covariance-sum equality; the finite OBM procedure; the sticky identity-kernel counterexample; the Gaussian AR(1) Poisson/variance calculation; and the arithmetic batch-size failure example.

The theorem statements retained with `provenance.proof: not-supplied` are not represented as proved. The strong-/rho-/uniform-mixing CLTs import classical sequence CLTs whose full arguments are not supplied in the local sources. The reversible rho-mixing lemma uses a nontrivial spectral-gap implication. The strong invariance principle in Flegal–Jones Lemma 3 cites external proofs. The OBM Theorem 2 Appendix B.3 route requires that invariance principle, Brownian increment bounds, and the source quadratic-form estimates; it does not provide the requested local regeneration/block proof. Its SIC definition also requires `0 < sigma_g < infinity`, while the Theorem 2 statement omits strict positivity. Each affected item is escalated in Step 1.

Geometric MCMC CLT cases need an integrable total-variation envelope. Jones (2004, §2, Remark 1) obtains it through geometric drift theory and an invariant drift-moment theorem. The inspected Meyn–Tweedie route goes through f-geometric regularity, f-Kendall petite sets, and a drift equivalence. Those intermediate interfaces and the complete local proof are not present in the assigned material; the envelope lemma and dependent CLT claims remain escalated.

## Cross-batch supplier inspection

`research/bayesian-computational-statistics-62-batch-36.cross-batch-dependencies.json` records the inspected interfaces. The current BCS-32 definitions of phi-irreducibility, aperiodicity, and Harris recurrence supply the required meanings. The BCS-29 `def-general-state-reversibility-by-symmetric-flow-measure` body defines reversibility through symmetry of the stationary joint-flow measure and needs no density.

The BCS-32 `thm-general-state-markov-chain-convergence-under-recurrence-conditions` is the unresolved supplier for the Harris convergence-to-mixing reduction. Its current body lists [F1]–[F8] and [A1], but step 2.2 cites undefined [F9]. Its frontmatter deps name `lem-finite-measure-sets-are-approximable-by-a-generating-algebra`, while [F7] cites `lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra`; both items exist, but the countable supplier is the one whose hypotheses match the stated countably generated setting. The current theorem body and batch-35 manifest both label it level 4. No upstream file was edited and no readiness or acceptance is inferred.

## Sources and dispositions

`research/bayesian-computational-statistics-62-batch-36.coverage.json` records six inspected full-text sources, their supported items, and dispositions: Jones (2004), Geyer’s complete lecture notes, Roberts–Rosenthal (2004), Flegal–Jones (2010), Häggström–Rosenthal (2007), and the full Meyn–Tweedie second-edition book. The book’s browser text extraction was garbled; the complete author-hosted PDF was recovered directly and the relevant theorem pages were rendered with MuPDF. The proof of Theorem 14.3.7 and the displayed arguments for Theorems 15.3.3 and 15.4.1 were inspected. The latter route confirms the f-Kendall/f-geometric prerequisites that remain unresolved locally. No source was dropped and no source retrieval remains unresolved; the mechanical fetch stamps are recorded by `source-fetch-check --stamp`.

## Readiness boundary

Definitions, the finite OBM algorithm, and complete local proofs/examples are eligible for `ready` only after final contract and placement checks. Imported theorem statements and any consumer whose claim depends on an unresolved supplier are `escalated`. These records are authoring evidence only; they do not constitute independent approval.

## Scoped checks

- `node tools/source-fetch-check.mjs --coverage research/bayesian-computational-statistics-62-batch-36.coverage.json --stamp`: pass, 6/6 sources fetch-verified and resolved, no drops.
- `node tools/proof-layout.mjs` on all 25 assigned item paths: pass, 39 numbered steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts --json` on the assigned item paths: pass, 25 files scanned, 10 proof-bearing files checked, 0 failed.
- `node tools/rendercheck.mjs` on the 25 assigned items and two page files: pass, 27 files; KaTeX and page/item frontmatter parse.
- `node tools/content-policy.mjs research/bayesian-computational-statistics-62-batch-36.pages.json`: pass, 25 items, 0 errors and 0 warnings.
- Focused `node tools/depcheck.mjs --items-file /tmp/bayesian-computational-statistics-62-batch-36.items.json --pages-file /tmp/bayesian-computational-statistics-62-batch-36.pages.json --quiet --json`: pass after adding the direct reversibility dependency to `thm-mcmc-clt-sufficient-regimes`; 0 errors and 0 warnings. The dependency closure contains 1,359 items and the prerequisite page-cycle closure contains 273 pages. Both library page inventories match the manifest (22 A items, 3 B examples).
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-36.proof-contracts.json --strict`: pass, 25/25 items, 0 errors and 0 warnings. The separate run-wide `node tools/proof-contract-coverage.mjs --run bayesian-computational-statistics-62 --contracts research/bayesian-computational-statistics-62-batch-36.proof-contracts.json` sees 766 items and 587 proof-bearing arguments; with this batch-only contract file it covers 10/587 and reports missing contracts outside batch 36. It is not a batch-scoped coverage result.
- `node tools/item-dependency-levels.mjs check --run bayesian-computational-statistics-62`: reports five mismatches, all outside this batch: `ex-cylinder-gaussian-process-is-not-banach-valued` (1 vs. 2), `thm-gaussian-process-posterior-contraction` (10 vs. 9), `ex-log-gaussian-uniform-density-posterior` (11 vs. 10), `ex-binary-regression-logistic-intercept-gp` (11 vs. 10), and `ex-fixed-design-gaussian-constant-process-and-unknown-scale` (11 vs. 10). All batch-36 labels were recomputed from the current carrier dependencies and manifest.
- `node tools/batch-dependency-levels.mjs check --run bayesian-computational-statistics-62`: fails with `Stale batch dependency levels ...; recompute before authoring`. This run-wide artifact is owned by the orchestrator and was not edited.
- `node tools/step1-decisions.mjs record` was run for all 25 assigned items: 17 are `ready` and 8 are `escalated`, each with its declared dependencies and evidence. `node tools/step1-decisions.mjs check --run bayesian-computational-statistics-62` validates all 17 ready hashes; the run-wide check is not closed (178/766 ready, 588 work rows), including the eight explicit batch-36 escalations. These authoring records are not independent approval.
