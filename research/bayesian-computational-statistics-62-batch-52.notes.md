# Batch 52 authoring notes

Run: `bayesian-computational-statistics-62`  
Pair: `bootstrap-failure-and-subsampling`

## Plan reconciliation

- Read the complete BCS-49 design at `research/plan-bayesian-computational-statistics-track.md` and compared both pages with `research/plan-spec.json` and the generated batch-52 task. Page IDs, titles, order, category, and the direct A-page requirement `iid-bootstrap-and-jackknife-validity` agree. The plan-spec item lists are empty at the scaffold stage, as expected.
- The BCS-49 prose lists BCS-47 and BCS-48 as prerequisites. The direct page edge is BCS-48; its controlling design itself requires BCS-47, so BCS-47 lies in the transitive closure. This agrees with the current batch dependency input (`52` at level 2, direct prerequisite batch `51`). No plan/spec change is proposed.
- The controlling design also names `MSF-14`'s first/second-order delta theorem, the confidence-set definition, weak convergence, and Portmanteau. The authored boundary theorem uses MSF-14 and weak/continuity-set conventions; the uniform coverage theorem uses the confidence-set definition. The proofs state their exact local CDF and quantile assumptions rather than importing general validity from a source title.

## Inventory, dependencies, and levels

The item inventory and direct dependencies were fixed in `research/bayesian-computational-statistics-62-batch-52.pages.json` before item carriers were written. Levels count only suppliers in this run. The current BCS-48 conditional-CLT carrier is present at item level 3; its exact interface and the resulting level-4 boundary theorem are reconciled below.

| Item | Home | Direct in-run suppliers | Level |
|---|---|---|---:|
| `def-m-out-of-n-bootstrap-and-subsampling` | A | none | 0 |
| `lem-uniform-cdf-order-and-quantile-coverage` | A | none | 0 |
| `lem-pointwise-cdf-convergence-to-a-continuous-law-is-uniform` | A | none | 0 |
| `lem-bernoulli-root-laws-are-uniformly-weak-close` | A | none | 0 |
| `thm-ordinary-bootstrap-fails-for-uniform-endpoint` | A | `def-m-out-of-n-bootstrap-and-subsampling` | 1 |
| `thm-m-out-of-n-resampling-valid-for-uniform-endpoint` | A | `def-m-out-of-n-bootstrap-and-subsampling`, `lem-pointwise-cdf-convergence-to-a-continuous-law-is-uniform` | 1 |
| `thm-uniform-subsampling-coverage-under-root-law-control` | A | `def-m-out-of-n-bootstrap-and-subsampling`, `lem-uniform-cdf-order-and-quantile-coverage` | 1 |
| `thm-bootstrap-fails-at-nonsmooth-boundary-and-degenerate-mean-functionals` | A | `def-m-out-of-n-bootstrap-and-subsampling`, `lem-pointwise-cdf-convergence-to-a-continuous-law-is-uniform`, `thm-conditional-iid-bootstrap-clt-for-empirical-law` (BCS-48 supplier, level 3) | 4 |
| `ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy` | B | the two uniform-endpoint theorems and method definition | 2 |
| `ex-weak-metric-does-not-guarantee-uniform-bootstrap-coverage` | B | uniform coverage theorem, Bernoulli root-distance lemma, method definition | 2 |
| `ex-nonsmooth-boundary-bootstrap-failure` | B | boundary/degenerate failure theorem and method definition | 5 |

The ordinary bootstrap counterexample uses a bounded continuous test function, not just an atom heuristic. The uniform-endpoint m-out-of-n proof treats replacement and nonreplacement separately; it uses the exact size-m root and the regimes `m→∞`, `m/n→0`. The Bernoulli weak-metric example includes a local coupling proof, so it does not rely on the uninspected supplementary Lemma S.1.1 from Romano–Shaikh. The boundary theorem depends directly on the BCS-48 conditional CLT at item level 3 and on two local level-0 suppliers, so its item level is 4; its B example is level 5. The pair's batch level remains 2.

## Unresolved cross-pair supplier

This paragraph records the earlier handoff snapshot and is superseded by the current recheck below; it is retained as history.

The actual BCS-48 page file and item bodies are absent at this handoff. The exact planned item `thm-conditional-iid-bootstrap-clt-for-empirical-law` is named in the A-page boundary theorem and in `research/bayesian-computational-statistics-62-batch-52.cross-batch-dependencies.json`; no source excerpt, completed proof, or approval is claimed. The boundary theorem is explicitly conditional on the specialized conditional CDF convergence for `sqrt(n)(bar X_n^* - bar X_n)` under IID `N(0,1)` data and empirical-law draws. The needed centering, variance, measurability, pointwise CDF limit, and axiom branch must be checked against the actual BCS-48 proof. This affects that theorem, its B-page example, and the pair's page-level prerequisite. Those two dependent carriers remain escalated; the independent local items are authored without waiting for BCS-48.

The cross-batch input records the owned page edge as `open`. It does not yet add an item edge to the unified ledger because the supplier item has no current BCS-48 manifest home while that batch manifest is empty; adding an orphaned review row would misstate ownership. Reconcile that exact item edge when BCS-48 declares its inventory.

## Current supplier and dependency reconciliation (2026-10-15)

- The current BCS-48 A page and assigned item bodies are present, unlike in the earlier snapshot. I inspected the current `thm-conditional-iid-bootstrap-clt-for-empirical-law` Statement and complete Proof. It assumes AC, IID Euclidean data with finite second moment, a fixed projection with positive variance, finite-index empirical resampling, centering at the empirical mean, and the exact $\sqrt n$ scaling. The proof controls the empirical Lindeberg tails, takes an almost-surely convergent subsubsequence, applies Lindeberg–Feller and Slutsky, then upgrades the continuous-normal limit to uniform CDF convergence. Specializing to $d=1$, $a=1$, and $N(0,1)$ gives the conditional CDF interface used by the boundary theorem. The published `lem-normal-location-scale-mean-and-variance` supplies mean $0$, variance $1$, and finite second moment. This is a mathematical interface check only; it does not claim the supplier batch has independent approval or acceptance.
- The two batch-52 cross-batch input rows now record the current BCS-48 page edge and exact item edge as `verified`. BCS-47 remains a transitive prerequisite through BCS-48. The scoped 51–52 item-level recomputation gives the BCS-48 supplier level 3; the batch-level calculation gives batch 52 level 2 with batch 51 as direct predecessor.
- Reconciled item dependencies with the actual proofs: the weak-metric example uses `cor-chebyshev-inequality-for-random-variables`, replacing the stale scaffold's unused Markov dependency; the nonsmooth-boundary example declares `def-axiom-of-choice`, which its Facts and proof invoke; and the boundary theorem declares the normal-moment supplier and Portmanteau, both used in the local argument. The theorem's prior conditional-CLT note has been replaced by the inspected supplier interface. The quantile coverage proof's stale `step 2.2` citations have been replaced by the exact quantile lemma citation. The random-CDF lemma now states the evaluation-measurability and right-continuity assumptions needed to make its supremum well-defined.
- `node tools/source-fetch-check.mjs --coverage research/bayesian-computational-statistics-62-batch-52.coverage.json --stamp` succeeded: 3/3 full-text sources were fetch-verified and stamped, with zero documented drops. The pre-existing coverage contains the full-document reading history and item dispositions; I inspected the assigned Bickel–Götze–van Zwet endpoint/m-out-of-n passages, Romano–Shaikh quantile and subsampling passages, and Martin's endpoint failure/remedy slides during this recheck.
- A final strict-contract run caught a newer BCS-48 Statement version: it now names the uniform CDF error $D_n$ explicitly. I reread that current complete proof; its assumptions and conditional-normal interface for the consumer are unchanged. The boundary theorem's exact supplier excerpt was regenerated from the current Statement, and strict contract validation then passed. No BCS-48 file was edited.

## Axiom use

The uniform endpoint results, quantile lemmas, uniform coverage theorem, and Bernoulli coupling lemma are choice-free. AC is explicitly assumed in the normal-boundary result because the standard-normal law, finite normal-sample-mean theorem, normal-moment lemma, and inspected BCS-48 conditional bootstrap CLT require it. The Bernoulli weak-distance coverage example uses AC only for the published theorem that the Levy–Prokhorov metric metrizes weak convergence on the real line. The earlier uncertainty about the BCS-48 supplier's axiom use is superseded by the current proof inspection above.

## Source reading and disposition

Full source URLs, locators, harvested headings, and each result's disposition are in `research/bayesian-computational-statistics-62-batch-52.coverage.json`. Read the Bickel–Götze–van Zwet paper's IID endpoint, degenerate, and nonsmooth examples, its m/n and nonreplacement definitions, Theorems 1–2, and the Appendix proof of Theorem 2. Read Romano–Shaikh's full main paper sections 2.1–2.2, Theorems 2.1–2.4, Appendix A.1 (Lemmas A.1–A.3 and Theorem 2.1 proof), and Appendix A.2 (Theorem 2.4 proof). The latter distinguishes one-/two-sided root-CDF comparisons and feasible-root control; its Bernoulli example identifies the gap between weak-metric proximity and quantile coverage. Read all 36 pages of Ryan Martin's Stat 451 bootstrap lecture notes, including the endpoint failure and m-out-of-n example. The source proofs and simulation claims do not replace the local proofs in the authored items.

Extrapolation is not claimed. Bickel–Götze–van Zwet's extrapolation treatment relies on its specified regular expansions and explicitly discusses irregular cases where the expansion is unavailable or extrapolation does not help; no generic extrapolation method or accuracy theorem is inferred here.

## Scoped checks and readiness

The final scoped checks were run after the proof, statement, contract, and worksheet edits:

- `node tools/tsx-run.mjs tools/precheck.mts <10 proof-bearing item paths> --json`: 10/10 pass.
- `node tools/proof-layout.mjs <10 proof-bearing item paths>`: 10 items, 35 steps, zero defects.
- `node tools/rendercheck.mjs <11 item paths> <2 page paths> --json`: 13 files, zero errors and warnings.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-52.proof-contracts.json --strict --json`: all 10 proof-bearing items checked; zero errors and warnings.
- `node tools/boundary-audit.mjs research/bayesian-computational-statistics-62-batch-52.proof-contracts.json`: 80 worksheets; no template-reuse cluster at three or more and no contradicted dispositions.
- Focused `depcheck` on all 11 IDs: zero errors and warnings. `content-policy` on this batch manifest: 11 items, zero errors and warnings.
- `source-fetch-check` in check mode: all 3/3 source documents fetch-verified; zero drops.
- Manifest-to-carrier dependency and level comparison: all 11 items match. Scoped dependency computation over batches 51 and 52: 29 items, no cycles or label errors, maximum level 5. Batch-52 levels are 0 for its four local suppliers, 1 for its three local theorems, 4 for the BCS-48-dependent theorem, 2 for the two uniform-endpoint examples, and 5 for the boundary example.
- Focused `pathcheck` sees the two pages as drafts and reports no hard error; it emits the existing category warning that `library/bayesian-computational-statistics/_category.md` has no overview.

## Run-wide blockers left to the owner

- Run-wide item-level validation cannot close over the current scaffold: it reports 50 empty inventory pages and one unrelated stale label, `rem-em-ascent-does-not-imply-global-optimality-or-convergence` (recorded level 3, computed level 5). The scoped 51–52 calculation above passes; no other batch was edited.
- Run-wide batch-level validation reports that the shared derived input is stale. Recalculation gives current input SHA-256 `d88bf7fa45c7cb4bc30aefe9d4df41d1626653f4292324fb84f333a609c15575`; the recorded SHA-256 is `6311a2da1021e79843ca989292e4d12d6f0a230ec786c5acd336c33279b513ea`. The recomputed scheduling row remains batch 52 at level 2 with direct prerequisite batch 51. The shared derived artifact is left for owner reconciliation.
- A direct full-run `loadStep3`/Step-1 check is currently blocked by malformed JSON in the unrelated `bayesian-computational-statistics-62-batch-26.coverage.json` (bad escaped character, line 173, column 84). To verify this pair without editing batch 26, I checked its 11 existing record hashes in a focused snapshot containing all current run manifests and valid coverage files, omitting only that malformed coverage file; all 11 records remain closed and ready. Coverage data is not an input to the Step-1 item hash.
- Read-only autopilot status still reports `1-scaffold` held and no workers running. Its stored blocker is an earlier YAML handoff error for the unquoted title `Uniform endpoint: ordinary bootstrap failure and the m-out-of-n remedy`, followed by an owner repair/recertification hold referring to `research/bayesian-computational-statistics-62-step1-blockers.json`. The current carrier title is quoted and passes rendercheck. Engine state and the blocker/verdict file were left untouched for the owner.

`step1-decisions.mjs record` wrote `ready` records for all 11 batch items with their exact declared dependencies and current item hashes. The BCS-48 supplier body was inspected as recorded above. These are authoring-readiness records only; they do not assert independent approval or acceptance.
