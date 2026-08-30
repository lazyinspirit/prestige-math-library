# frontier-24 alpha group a step 6b adjudication

Date: 2026-08-29
Run: frontier-24
Group: a
Scope: batches 1, 2, and 7

## Batch 1

- Touched obligations: 6 total.
  Accepted as exact reader-result carriers: ex-rabinowitsch-identity-explicit and ex-strong-nullstellensatz-nonradical-ideal.
  Amended beyond the raw reader result: lem-rabinowitsch-substitution-clears-denominators, cor-strong-nullstellensatz-two-inclusions, cor-affine-radical-ideal-point-separation, and cor-affine-closed-points-detect-radicals. Each amended carrier now also includes the required Alpha risk-review state in the batch-1 contract.

- Refuter obligations: 5 total, all confirmed.
  Confirmed fatal and repaired: cor-noether-normalisation-dimension-lower-bound, cor-noether-normalisation-module-finiteness, ex-noether-normalisation-finite-field-weight-choice, and lem-noether-normalisation-inductive-integrality.
  Confirmed nonfatal and repaired: cor-transcendence-degree-tower-additivity.

- Risk review: ran risk-report on research/frontier-24-batch-1.proof-contracts.json without require-reviewed, reread every current HIGH or CRITICAL item against the live proof and reader/refuter evidence, and wrote 18 complete alpha-6b-a risk_review notes into the batch-1 contract.

## Batch 2

- Touched obligations: 6 total.
  Accepted as exact reader-result carriers: cor-every-irreducible-complex-character-occurs-in-the-induction-of-an-irreducible-constituent-of-its-restriction and def-virtual-character-and-character-ring-of-a-finite-group.
  Amended beyond the raw reader result: thm-coprime-conjugacy-class-size-forces-zero-character-or-scalar-action, thm-frobenius-formula-for-induced-characters, thm-mackey-double-coset-formula-for-restricting-an-induced-character, and thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order. Each amended carrier now also includes the required Alpha risk-review state in the batch-2 contract.

- Refuter obligations: 1 total, confirmed and repaired as nonfatal.
  Confirmed nonfatal: thm-burnsides-p-a-q-b-theorem.

- Risk review: reran risk-report after the Burnside repair and wrote 18 complete alpha-6b-a risk_review notes into research/frontier-24-batch-2.proof-contracts.json.

## Batch 7

- Touched obligations: 5 total.
  Accepted as exact reader-result carriers: lem-half-nine-lemma, thm-five-lemma-for-a-morphism-of-long-exact-sequences, and thm-the-splitting-lemma-follows-from-the-nine-lemma.
  Amended beyond the raw reader result: thm-nine-lemma-variants-by-which-rows-are-assumed-exact and thm-the-connecting-morphism-exists-and-is-unique. Each amended carrier now also includes the required Alpha risk-review state in the batch-7 contract.

- Refuter obligations: 8 total, all confirmed fatal and repaired.
  Confirmed fatal: cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake, ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups, ex-the-snake-lemma-applied-to-multiplication-by-an-integer, thm-four-lemma-in-an-abelian-category, thm-naturality-of-the-connecting-morphism, thm-sharp-nine-lemma, thm-snake-lemma-under-the-weaker-stacks-hypotheses, and thm-weak-four-lemma-with-the-exactness-hypotheses-named.

- Risk review: reran risk-report after the batch-7 theorem and example repairs and wrote 14 complete alpha-6b-a risk_review notes into research/frontier-24-batch-7.proof-contracts.json.

## Outputs

- Decisions file: research/frontier-24-alpha-a-6b-decisions.json
  32 stamped decisions total: 7 accepted_repair, 10 amended_repair, 12 confirmed_fatal, and 3 confirmed_nonfatal.

- Ledger rows: research/frontier-24-alpha-a-6b-ledger-rows.json
  Appended 31 Step-6 defect rows to research/defect-ledger.jsonl and re-rendered research/DEFECT-LEDGER.md.

## Checks

- node tools/tsx-run.mjs tools/reflow.mts <14 changed items>
  Result: pass; the second rerun left every edited item unchanged.

- node tools/tsx-run.mjs tools/precheck.mts <14 changed items>
  Result: pass, 14 checked, 0 failing.

- node tools/regen-contract-entries.mjs research/frontier-24-batch-1.proof-contracts.json <5 changed batch-1 items>
  Result: regenerated all 5 changed batch-1 entries.

- node tools/regen-contract-entries.mjs research/frontier-24-batch-2.proof-contracts.json thm-burnsides-p-a-q-b-theorem
  Result: regenerated the changed batch-2 entry.

- node tools/regen-contract-entries.mjs research/frontier-24-batch-7.proof-contracts.json <8 changed batch-7 items>
  Result: regenerated all 8 changed batch-7 entries, then regenerated thm-snake-lemma-under-the-weaker-stacks-hypotheses once more after its final citation cleanup.

- node tools/proof-contract.mjs research/frontier-24-batch-1.proof-contracts.json --strict --items <5 changed batch-1 items>
  Result: pass, 0 errors, 0 warnings.

- node tools/proof-contract.mjs research/frontier-24-batch-2.proof-contracts.json --strict --items thm-burnsides-p-a-q-b-theorem
  Result: pass, 0 errors, 0 warnings.

- node tools/proof-contract.mjs research/frontier-24-batch-7.proof-contracts.json --strict --items <8 changed batch-7 items>
  Result: pass, 0 errors, 0 warnings.

- node tools/citation-fidelity.mjs research/frontier-24-batch-1.proof-contracts.json --items-dir items --items <5 changed batch-1 items> --fail-on-missing-quote
  Result: pass, no missing quotes and no widening candidates.

- node tools/citation-fidelity.mjs research/frontier-24-batch-2.proof-contracts.json --items-dir items --items thm-burnsides-p-a-q-b-theorem --fail-on-missing-quote
  Result: pass, no missing quotes and no widening candidates.

- node tools/citation-fidelity.mjs research/frontier-24-batch-7.proof-contracts.json --items-dir items --items <8 changed batch-7 items> --fail-on-missing-quote
  Result: pass, no missing quotes and no widening candidates.

- node tools/rendercheck.mjs <6 page files> <14 changed items>
  Result: pass, OK on 20 files.

- node tools/risk-report.mjs research/frontier-24-batch-1.proof-contracts.json --require-reviewed --json
  Result: pass; every required batch-1 high/critical item now carries a complete alpha-6b-a risk_review record.

- node tools/risk-report.mjs research/frontier-24-batch-2.proof-contracts.json --require-reviewed --json
  Result: pass; every required batch-2 high/critical item now carries a complete alpha-6b-a risk_review record.

- node tools/risk-report.mjs research/frontier-24-batch-7.proof-contracts.json --require-reviewed --json
  Result: pass; every required batch-7 high/critical item now carries a complete alpha-6b-a risk_review record.

- node tools/step6-scope.mjs stamp --run frontier-24 --group a
  Result: pass; stamped 31 current carrier hashes for the group-a decision file.

- node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate --batch 1
  Result: pass, 35 item(s) routed, 11 adjudication obligation(s), 0 error(s).

- node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate --batch 2
  Result: pass, 36 item(s) routed, 7 adjudication obligation(s), 0 error(s).

- node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate --batch 7
  Result: pass, 43 item(s) routed, 13 adjudication obligation(s), 0 error(s).

- node tools/content-policy.mjs research/frontier-24-batch-1.pages.json
  Result: pass, 35 scoped item(s), 0 error(s), 0 warning(s).

- node tools/content-policy.mjs research/frontier-24-batch-2.pages.json
  Result: pass, 36 scoped item(s), 0 error(s), 0 warning(s).

- node tools/content-policy.mjs research/frontier-24-batch-7.pages.json
  Result: pass, 43 scoped item(s), 0 error(s), 0 warning(s).

- node tools/defect-ledger.mjs validate --run frontier-24
  Result: pass, 39 frontier-24 defect row(s) checked, 0 error(s).

- git diff --check -- <edited item, contract, and Step-6 artifact scope>
  Result: pass.

## Blockers

- None in the live scope for group a.

## Gate repair - `step6-routing-adjudicate` (Sunday, August 30, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and confirmed that `touched:2:thm-mackey-double-coset-formula-for-restricting-an-induced-character` no longer matched the exact post-reader carrier sealed in `research/frontier-24-step6-hash-2-post.json`.
- Reread the current theorem against `research/frontier-24-reader-2.md` and found no new mathematical defect. I retagged the touched decision from `accepted_repair` to `amended_repair` and appended the supplemental gate row `frontier-24-S6-a-gate-2-1` via `research/frontier-24-alpha-a-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate --batch 2`
  -> `36 item(s) routed, 7 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate`
  -> `493 item(s) routed, 122 adjudication obligation(s), 0 error(s)`.
- `node tools/defect-ledger.mjs validate --run frontier-24`
  -> `131 defect row(s) checked, 0 error(s)`.
