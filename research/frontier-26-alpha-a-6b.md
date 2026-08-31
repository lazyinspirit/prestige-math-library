# frontier-26 · Alpha group `a` · Step 6b adjudication

Run: `frontier-26`  
Role: `alpha`  
Label: `6b-a`  
Covers: batches `1` and `5`  
Date: Sunday, August 30, 2026

## Outcome

- Wrote `research/frontier-26-alpha-a-6b-decisions.json` with 32 stamped decisions: 0 `accepted_repair`, 17 `amended_repair`, 9 `confirmed_fatal`, and 6 `confirmed_nonfatal`.
- Prepared 30 closed Step-6 defect rows for `research/defect-ledger.jsonl` through `/tmp/frontier-26-alpha-a-6b-ledger-rows.json`.
- Wrote all 30 required `risk_review` records across `research/frontier-26-batch-1.proof-contracts.json` and `research/frontier-26-batch-5.proof-contracts.json`.
- Confirmed all 12 routed refuter findings on current bytes. Nine were fatal and repaired; three were nonfatal and repaired.

## Batch 1

- Reviewed all 25 Step-6 high/critical batch-1 contract items and recorded a complete `risk_review` on each current entry.
- Applied the live mathematical repairs to `ex-nondedekind-ideal-not-invertible`, `ex-steinitz-class-rank-two-module`, `lem-finite-support-of-ideal-valuations`, `lem-local-dvr-condition-implies-dimension-one`, `thm-invertible-ideal-characterisations`, `thm-local-characterisation-of-dedekind-domains`, `thm-localisation-of-a-dedekind-domain`, and the dependent consumer `thm-nonzero-ideals-in-dedekind-domains-are-invertible`.
- Removed one stale declared dependency from `lem-rank-one-projective-embedded-as-a-fractional-ideal` after the strict contract check showed the item no longer used that fact on current bytes.

| Obligation | Verdict | Evidence |
| --- | --- | --- |
| `touched:1:cor-ideal-divisibility-reverses-inclusion-dedekind` | `amended_repair` | On Sunday, August 30, 2026, I reread cor-ideal-divisibility-reverses-inclusion-dedekind against research/frontier-26-reader-1.md. Reader 1's separator repair still stands, and the live carrier is amended because the current contract entry now also records Alpha's high-risk review of the biconditional exponent argument. |
| `touched:1:cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension` | `amended_repair` | On Sunday, August 30, 2026, I reread cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension against research/frontier-26-reader-1.md. Reader 1's repaired Dedekind-closure route still stands, and the live carrier is amended because the current contract entry now also records Alpha's high-risk review. |
| `touched:1:ex-dedekind-localisation-is-dvr` | `amended_repair` | On Monday, August 31, 2026, I rechecked ex-dedekind-localisation-is-dvr against research/frontier-26-reader-1.md. Reader 1's n >= 0 restriction still matches the live item text, and the live carrier is amended because the batch-1 contract entry was refreshed later during Step 6b. |
| `touched:1:ex-nondedekind-ideal-not-invertible` | `amended_repair` | On Sunday, August 30, 2026, I reread ex-nondedekind-ideal-not-invertible against research/frontier-26-reader-1.md. Reader 1's direct localisation repair still stands, and the live carrier is amended because Step 6b also added the missing field hypothesis and refreshed the high-risk review. |
| `touched:1:ex-pid-as-dedekind-domain` | `amended_repair` | On Sunday, August 30, 2026, I reread ex-pid-as-dedekind-domain against research/frontier-26-reader-1.md. Reader 1's Choice-scope repair still stands, and the live carrier is amended because the current contract entry now also records Alpha's high-risk review. |
| `touched:1:ex-steinitz-class-rank-two-module` | `amended_repair` | On Sunday, August 30, 2026, I reread ex-steinitz-class-rank-two-module against research/frontier-26-reader-1.md. Reader 1's Choice-scope repair still stands, and the live carrier is amended because Step 6b also removed the false “nonfree summand” wording and refreshed the high-risk review. |
| `touched:1:lem-finite-support-of-ideal-valuations` | `amended_repair` | On Sunday, August 30, 2026, I reread lem-finite-support-of-ideal-valuations against research/frontier-26-reader-1.md. Reader 1's Artinian-quotient repair still stands, and the live carrier is amended because Step 6b also retied the unit argument to integral witnesses a=dx and b=ad and refreshed the high-risk review. |
| `touched:1:lem-fractional-ideal-operations-well-defined` | `amended_repair` | On Monday, August 31, 2026, I rechecked lem-fractional-ideal-operations-well-defined against research/frontier-26-reader-1.md. Reader 1's nonzero-witness repair for I+J, IJ, aI, and (I:J) still matches the live item text, and the live carrier is amended because the batch-1 contract entry was refreshed later during Step 6b. |
| `touched:1:lem-rank-one-projective-embedded-as-a-fractional-ideal` | `amended_repair` | On Sunday, August 30, 2026, I reread lem-rank-one-projective-embedded-as-a-fractional-ideal against research/frontier-26-reader-1.md. Reader 1's injectivity repair still stands, and the live carrier is amended because Step 6b also removed the unused localisation-exactness fact/dependency so the current item and contract agree on the proof actually written. |
| `touched:1:lem-rank-one-summand-of-a-finite-projective-dedekind-module` | `amended_repair` | On Sunday, August 30, 2026, I reread lem-rank-one-summand-of-a-finite-projective-dedekind-module against research/frontier-26-reader-1.md. Reader 1's projectivity repair still stands, and the live carrier is amended because the current contract entry now also records Alpha's high-risk review. |
| `touched:1:thm-finite-integral-closure-in-a-finite-separable-extension` | `amended_repair` | On Sunday, August 30, 2026, I reread thm-finite-integral-closure-in-a-finite-separable-extension against research/frontier-26-reader-1.md. Reader 1's integrality-scaling repair still stands, and the live carrier is amended because the current contract entry now also records Alpha's high-risk review. |
| `touched:1:thm-finite-torsionfree-modules-over-dedekind-domains` | `amended_repair` | On Sunday, August 30, 2026, I reread thm-finite-torsionfree-modules-over-dedekind-domains against research/frontier-26-reader-1.md. Reader 1's Choice-scope repair still stands, and the live carrier is amended because the current contract entry now also records Alpha's high-risk review. |
| `touched:1:thm-invertible-ideal-characterisations` | `amended_repair` | On Sunday, August 30, 2026, I reread thm-invertible-ideal-characterisations against research/frontier-26-reader-1.md. Reader 1's separator repair still stands, and the live carrier is amended because Step 6b also repaired the missing finite-generation hypothesis and refreshed the high-risk review. |
| `touched:1:thm-nonzero-ideals-in-dedekind-domains-are-invertible` | `amended_repair` | On Sunday, August 30, 2026, I reread thm-nonzero-ideals-in-dedekind-domains-are-invertible against research/frontier-26-reader-1.md. Reader 1's denominator-clearing repair still stands, and the live carrier is amended because Step 6b also recorded the finite-generation premise now needed by the repaired local-principal criterion and refreshed the high-risk review. |
| `touched:1:thm-submodules-of-projectives-over-dedekind-domains` | `amended_repair` | On Monday, August 31, 2026, I rechecked thm-submodules-of-projectives-over-dedekind-domains against research/frontier-26-reader-1.md. Reader 1's Choice-scope and conclusion-simplification repair still match the live theorem text, and the live carrier is amended because the batch-1 contract entry was refreshed later during Step 6b. |
| `touched:1:thm-unique-factorisation-of-ideals-in-dedekind-domains` | `amended_repair` | On Sunday, August 30, 2026, I reread thm-unique-factorisation-of-ideals-in-dedekind-domains against research/frontier-26-reader-1.md. Reader 1's local-zero repair still stands, and the live carrier is amended because the current contract entry now also records Alpha's high-risk review. |
| `refuter:1:1` | `confirmed_fatal` | The refuter was correct that the example needed the field hypothesis. The current statement and Given block now bind k as a field before step 1.1 uses the polynomial-ring dimension argument. |
| `refuter:1:2` | `confirmed_fatal` | The refuter was correct that the old wording failed at I=R. The current example now states only that the second summand contributes the class [I], which is what the proof actually shows. |
| `refuter:1:3` | `confirmed_nonfatal` | The refuter was correct that the old step treated a fractional x as though it already lay in R. The repaired proof now runs entirely with the integral witnesses a=dx and b=ad. |
| `refuter:1:4` | `confirmed_nonfatal` | The refuter was correct that the old proof skipped the maximal-ideal insertion. Step 2.1 now chooses m superset p and uses step 1.1 to force p=m. |
| `refuter:1:5` | `confirmed_fatal` | The refuter was correct that condition 3 needed finite generation. The current theorem now states that hypothesis explicitly and repairs the local-principal implies invertible direction accordingly. |
| `refuter:1:6` | `confirmed_fatal` | The refuter was correct that the old (3)=> (2) direction used p as if it were already maximal. The current proof now routes through maximal localisations first and then identifies each nonzero prime with a maximal ideal. |
| `refuter:1:7` | `confirmed_fatal` | The refuter was correct that the multiplicative set had to avoid 0. The current statement and proof now record 0 notin S before concluding S^{-1}R is a domain. |

## Batch 5

- Reviewed all 5 routed high/critical batch-5 contract items and recorded a complete `risk_review` on each current entry.
- Applied the live mathematical repairs to `lem-harmonic-sum-asymptotic`, `lem-normalized-two-square-count-is-multiplicative`, `lem-summatory-logarithm-asymptotic`, and `thm-euler-totient-summatory-estimate`.
- Corrected the stale `lem-normalized-two-square-count-is-multiplicative` contract derivation so the batch-5 proof contract matches the current proof on disk.

| Obligation | Verdict | Evidence |
| --- | --- | --- |
| `touched:5:lem-normalized-two-square-count-is-multiplicative` | `amended_repair` | On Sunday, August 30, 2026, I reread lem-normalized-two-square-count-is-multiplicative against research/frontier-26-reader-5.md. Reader 5's formula-based multiplicativity repair still stands, and the live carrier is amended because Step 6b also repaired the 2-power and odd-exponent source issues and recorded the high-risk review. |
| `refuter:5:1` | `confirmed_nonfatal` | The refuter was correct that the old right-hand inequality at n=1 was undefined. The proof now splits the two integral comparisons by range and uses each one only where it is valid. |
| `refuter:5:2` | `confirmed_fatal` | The refuter was correct that the old repeated-doubling argument only licensed one step. The current proof no longer uses that route and obtains the 2-power value from the sourced prime-factor formula. |
| `refuter:5:3` | `confirmed_fatal` | The refuter was correct that Hackman did not state the odd-exponent zero case. The current proof now derives that obstruction from the published 3 mod 4 divisor lemma and uses Hackman only for the even-exponent count formula. |
| `refuter:5:4` | `confirmed_fatal` | The refuter was correct that step 2.1 cited the wrong product rule. The current proof now cites thm-algebra-of-derivatives and computes G'(t)=log t explicitly. |
| `refuter:5:5` | `confirmed_fatal` | The refuter was correct that the old Basel-tail inequality failed for noninteger Y. The current proof now states it only for the positive integers Y=y_d and carries the resulting O((log x)/x) bound explicitly. |

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts ...` on the 13 edited item carriers plus the later `lem-rank-one-projective-embedded-as-a-fractional-ideal` dependency cleanup -> all changed files are on canonical reflow.
- `node tools/tsx-run.mjs tools/precheck.mts ...` on the same edited items -> `13 checked, 0 failing`, plus `lem-rank-one-projective-embedded-as-a-fractional-ideal` rechecked clean after the final dependency cleanup.
- `node tools/proof-contract.mjs research/frontier-26-batch-1.proof-contracts.json --strict` -> passes on the current bytes after regenerating the affected entries.
- `node tools/proof-contract.mjs research/frontier-26-batch-5.proof-contracts.json --strict` -> passes on the current bytes.
- `node tools/risk-report.mjs research/frontier-26-batch-1.proof-contracts.json --require-reviewed` -> `0 error(s), 34 item(s) routed`.
- `node tools/risk-report.mjs research/frontier-26-batch-5.proof-contracts.json --require-reviewed` -> `0 error(s), 16 item(s) routed`.
- `node tools/defect-ledger.mjs append --file /tmp/frontier-26-alpha-a-6b-ledger-rows.json` -> appended `30` rows and re-rendered `research/DEFECT-LEDGER.md`.
- `node tools/content-policy.mjs research/frontier-26-batch-1.pages.json research/frontier-26-batch-5.pages.json` -> `61 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/step6-scope.mjs stamp --run frontier-26 --group a` -> stamped `29` current carrier hashes.
- `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate --batch 1` -> `42 item(s) routed, 23 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate --batch 5` -> `19 item(s) routed, 6 adjudication obligation(s), 0 error(s)`.
- `git diff --check -- ...` on the touched items, the two batch contracts, the Step-6 report/decisions, and the regenerated ledger/view -> clean.

## Blockers

- None in the owned Step-6 batch scope.

## Gate repair - `step6-routing-adjudicate` (Monday, August 31, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and
  confirmed that `touched:1:ex-dedekind-localisation-is-dvr`,
  `touched:1:lem-fractional-ideal-operations-well-defined`, and
  `touched:1:thm-submodules-of-projectives-over-dedekind-domains` no longer
  matched the exact post-reader carriers sealed in
  `research/frontier-26-step6-hash-1-post.json`.
- Rechecked the current batch-1 items against `research/frontier-26-reader-1.md`
  and found no new mathematical defect. I retagged the three touched decisions
  from `accepted_repair` to `amended_repair` and appended the supplemental gate
  rows `frontier-26-S6-a-gate-1-1` through `frontier-26-S6-a-gate-1-3` via
  `research/frontier-26-alpha-a-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate --batch 1`
  -> `42 item(s) routed, 23 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate`
  -> `441 item(s) routed, 128 adjudication obligation(s), 0 error(s)`.
