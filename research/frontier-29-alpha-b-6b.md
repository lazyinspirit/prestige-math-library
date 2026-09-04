# frontier-29 — Alpha group `b`, step 6b adjudication

Date: Tuesday, September 1, 2026.
Run: `frontier-29`
Group: `b`
Scope: batches `3`, `13`, and `14`

## Summary

- Closed all 41 routed obligations in group `b`: 28 `touched` carriers and 13 refuter-routed findings.
- Touched verdicts: 22 `accepted_repair`, 6 `amended_repair`.
- Refuter verdicts: 9 `confirmed_fatal`, 4 `confirmed_nonfatal`.
- Appended 42 closed rows to `research/defect-ledger.jsonl`.
- Wrote `research/frontier-29-alpha-b-6b-decisions.json`.

## Mathematical adjudication

### Batch 3

- Rechecked the reader-repaired Hensel and Cohen-structure items against the current item bytes, contracts, and cited dependencies.
- Confirmed the refuter on `lem-coefficient-field-purely-inseparable-complete-step`: the old arbitrary residue-injective-subfield statement was false. The live item is now narrowed to the prime-field case and proved directly from the cited Cohen-structure source.
- Confirmed the refuter on `cor-equicharacteristic-complete-local-ring-has-coefficient-field`: the old maximal-subfield proof route was unsound. The live corollary now cites the Cohen structure theorem directly.
- Confirmed the refuter on `lem-cohen-presentation-surjective-by-completeness`: the old all-continuous-maps statement was false. The live item is now restricted to the actual Cohen map.
- Confirmed and repaired the concrete/example defects on `ex-hensel-factor-correction-mod-three-powers`, `ex-idempotent-lifting-and-product-decomposition`, and `ex-simple-root-and-factor-hensel-same-lift`.
- Boundary audit surfaced one real contract-row defect on `lem-formal-power-series-evaluation-converges`: the zero-variable boundary had been marked `not_applicable`. I changed that row to `checked` and recorded the fix in the ledger.

### Batch 13

- Rechecked all reader-touched affine-geometry items and verified the existing `risk_review` records against the current proofs.
- Confirmed the refuter on `thm-coordinate-ring-principal-open`: the old proof reversed the containment needed for the common-denominator argument. The live proof now runs through dense overlaps in the irreducible variety and the ambient-polynomial-ring relation `f^M in (h_1,...,h_r)`.
- The other 13 touched proof-bearing items remain sound on the reader-repaired bytes; their carriers still match the post-reader snapshots except for `thm-coordinate-ring-principal-open`, which is now an `amended_repair` because of the additional 6b fix.

### Batch 14

- Rechecked the sheaf/stalk items and examples against the current files, reader report, and refuter findings.
- Confirmed the refuter on `def-stalk-of-presheaf`: the stalk colimit had been indexed by the wrong category. The live definition now uses the opposite neighbourhood category.
- Confirmed the refuter on `lem-morphisms-of-sheaves-determined-by-stalks`: the old stalk-functoriality citation was inaccurate. The facts block now cites the stalk construction itself.
- Confirmed the refuter on `lem-sheaf-condition-check-on-basis`: the reverse direction needed an actual refinement inside `B_y cap U_alpha`. The live proof now inserts that refinement.
- Confirmed the refuter on `presheaves-sheaves-stalks-and-sheafification-examples`: the page prose now says only that one stalk need not determine a section in general.
- Confirmed both refuter findings on `thm-sheaf-morphism-isomorphism-stalkwise`: the stalk-map citation is repaired, and the injectivity step now derives local equality from germ equality and then uses sheaf locality.

## Risk reviews

- Batch `3`: reran `tools/risk-report.mjs` on the live contract, read every required `HIGH`/`CRITICAL` item, and wrote 22 complete `risk_review` records.
- Batch `13`: verified the 14 existing complete `risk_review` records against the current proofs after the 6b reread.
- Batch `14`: reran `tools/risk-report.mjs` on the live contract, read every required `HIGH`/`CRITICAL` item, and wrote 9 complete `risk_review` records.
- The current reviewed-risk checks pass for all three owned batch contracts.

## Focused checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the changed item files: pass.
- `node tools/tsx-run.mjs tools/precheck.mts` on all changed proof-bearing items: pass.
- `node tools/rendercheck.mjs` on the changed items plus `library/scheme-theory/presheaves-sheaves-stalks-and-sheafification-examples.md`: pass.
- `node tools/regen-contract-entries.mjs` on all proof-bearing rows in the owned batch contracts: completed; batch `13` left `lem-irreducible-space-open-intersections` unchanged because it has no Facts/Proof-contract row to regenerate.
- `node tools/proof-contract.mjs research/frontier-29-batch-{3,13,14}.proof-contracts.json --strict`: pass.
- `node tools/risk-report.mjs research/frontier-29-batch-{3,13,14}.proof-contracts.json --require-reviewed --json`: pass.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-{3,13,14}.proof-contracts.json --items-dir items --fail-on-missing-quote`: pass.
- `node tools/boundary-audit.mjs` on the three owned batch contracts: pass after the batch-3 empty-boundary contract fix.
- `node tools/content-policy.mjs research/frontier-29-batch-{3,13,14}.pages.json`: pass.
- `git diff --check -- <owned edited files>`: pass.

## Out-of-scope blocker

- `node tools/step6-scope.mjs check --run frontier-29 --phase adjudicate --batch 3` does reach group `b`, and it did not raise any decision-shape or carrier-hash error on this group's artifacts.
- The command still exits nonzero because of two run-level published-content errors outside group `b` scope:
  `published-claim-extra: thm-the-global-differential-of-a-smooth-map-is-smooth`
  and `published-repair-extra: reader:16:1`.
- Those subjects are not in batches `3`, `13`, or `14`, so I did not edit the published-content ledgers here.

## Blockers

- No mathematical blocker remains inside batches `3`, `13`, or `14`.
- One out-of-scope run-level checker blocker remains as recorded above.

## Gate repair - `step6-routing-adjudicate` (Tuesday, September 1, 2026)

- Reproduced the live gate and confirmed 13 stale touched decisions in batch `13`.
- Reread the current affine-algebraic-set / coordinate-ring package against `research/frontier-29-reader-13.md`; the current proofs remain mathematically sound on disk.
- Retagged the 13 touched decisions from `accepted_repair` to `amended_repair` and appended the 13 matching supplemental gate rows via `research/frontier-29-alpha-b-6b-gate-ledger-rows.json`.
- Shared rerun: `node tools/step6-scope.mjs check --run frontier-29 --phase adjudicate` now returns `step6-scope: 755 item(s) routed, 291 adjudication obligation(s), 0 error(s)`.
