# frontier-30 · Alpha group `a` · Step 6b adjudication

Run: `frontier-30`  
Role: `alpha`  
Label: `6b-a`  
Covers: batches `1`, `16`, and `17`  
Date: Friday, September 4, 2026

## Outcome

- Wrote `research/frontier-30-alpha-a-6b-decisions.json` with 48 stamped decisions: 11 `accepted_repair`, 13 `amended_repair`, 16 `confirmed_fatal`, and 8 `confirmed_nonfatal`.
- Prepared 47 closed `frontier-30` defect-ledger rows, one for each owed Step-6 obligation in the dispatched scope.
- Wrote the required risk reviews for all 24 current HIGH/CRITICAL items across `research/frontier-30-batch-{1,16,17}.proof-contracts.json`.

## Batch 1

- Amended the touched extension-theory carriers where Step 6b had to go beyond the reader repair: the same-middle-group false statement now uses the valid `C_9` witness, the factor-set comparison now proves normalization in the full inhomogeneous complex, and the five-term interpretation now states the final `H^2` map as pullback followed by pushout along `A^N\hookrightarrow A`.
- Amended the reader's decomposition-matrix example repair on `ex-a-block-with-one-ordinary-and-one-brauer-character`; the repaired block-matrix argument still stands, but the live carrier no longer equals the frozen post-reader snapshot because the batch-1 contract entry changed later on current disk.
- Confirmed all four batch-1 page manifest findings and synchronized the stale rows in `research/frontier-30-batch-1.pages.json`. I also updated the two affected library page summaries so the live page carriers reflect the repaired manifest state required by the Step-6 checker.
- Confirmed all nine batch-1 refuter findings. The cohomology items now have valid local witnesses and normalization/sign conventions; the Brauer basis theorem now fixes a complex realization and replaces unsupported assumptions with the current decomposition-map plus independence route; Brauer reciprocity now cites the right decomposition-number source and removes the circular A1 assumption.

## Batch 16

- Accepted the reader's touched repairs on the RL-1 definitions and dependency-sync items whose current carriers still match the reader result exactly, including the universal-enveloping, highest-weight, fundamental-weight, Weyl-action, and triangular-decomposition scaffolding.
- Amended the two high-risk touched theorem carriers: `thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights` now cites the standard highest-weight existence/uniqueness facts explicitly, and `thm-harish-chandra-isomorphism-for-the-center` now uses the corrected `lambda-rho` shift with refreshed proof-contract facts.
- Confirmed all six batch-16 refuter findings. The rho-shift and Harish-Chandra statement now use the correct sign, the central-character corollary now evaluates the shifted map at `lambda+rho`, the injectivity proposition is now a corollary of the repaired theorem, the Cartan-conjugacy proof no longer uses the false local-constancy claim, and the PBW theorem now takes linear independence from the explicit symmetrization fact.

## Batch 17

- Amended all four touched carriers. The cyclic-generator lemma keeps the reader's divisor-lattice repair; the Artin relation and `A_5` example remain mathematically sound but their carriers changed after the dependency repair and required risk reviews; and the cyclic fixed-point corollary also incorporates the Step-6b refuter repair to the generator-order sentence.
- Confirmed the reader finding on `cor-cyclic-local-integrality-criterion` and synced the batch manifest row to the weaker but correct bounded-denominator claim `|G|x\in R(G)`.
- Confirmed all three batch-17 refuter findings: one fatal repair in `cor-cyclic-fixed-points-detect-rational-representations` and two nonfatal proof repairs there and in `cor-rank-of-the-rational-representation-ring`.

## Blockers

- None in the owned Step-6 scope.

## Gate repair - `step6-routing-adjudicate`

- Reproduced the live stale-touched queue on the current tree and confirmed one batch-1 touched decision drift: `ex-a-block-with-one-ordinary-and-one-brauer-character`.
- Re-read the current example against `research/frontier-30-reader-1.md` and confirmed no new mathematical defect. I retagged the touched decision from `accepted_repair` to `amended_repair` and appended the supplemental gate row `frontier-30-S6-a-gate-1-1` via `research/frontier-30-alpha-a-6b-gate-ledger-rows.json`.
- Focused rerun: `node tools/step6-scope.mjs check --run frontier-30 --phase adjudicate --batch 1` -> `65 item(s) routed, 20 adjudication obligation(s), 0 error(s)`.
- Full rerun: `node tools/step6-scope.mjs check --run frontier-30 --phase adjudicate` -> `694 item(s) routed, 259 adjudication obligation(s), 0 error(s)`.
