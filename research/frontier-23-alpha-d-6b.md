# frontier-23 alpha group d step 6b adjudication

Date: 2026-08-29
Run: frontier-23
Group: d
Scope: batches 8 and 10

## Batch 8

- Touched obligations: 7 total.
  Accepted as exact reader-result carriers: ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps, fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism, and fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks.
  Amended beyond the raw reader result: thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian, thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses, thm-the-kernel-cokernel-sequence-of-a-composite, and thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each. The first, third, and fourth amendments are the required risk_review contract rows; the endpoint-hypothesis theorem also needed the refuter-driven ba = 0 repair.

- Refuter obligations: 7 total, all confirmed.
  Confirmed fatal and repaired: thm-the-covering-criterion-for-exactness, rem-the-covering-criterion-and-the-member-calculus-are-the-same-tool, thm-a-short-exact-sequence-is-a-kernel-cokernel-pair, thm-ab5-is-equivalent-to-exactness-of-filtered-colimits, and fs-the-subtraction-rule-produces-a-unique-member.
  Confirmed nonfatal and repaired: thm-degenerate-exactness-criteria and thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses.

- Risk review: ran risk-report on research/frontier-23-batch-8.proof-contracts.json without require-reviewed, reread every current HIGH or CRITICAL item against its proof and the reader/refuter evidence, and wrote complete alpha-6b-d risk_review notes for all 21 required batch-8 items.

## Batch 10

- Touched obligations: 2 total, both accepted as exact reader-result carriers.
  Reader 10's total-decoder repairs on fs-every-effective-encoding-is-prefix-free and cex-an-effective-encoding-need-not-be-prefix-free still match the current bytes on disk.

- Refuter obligations: 3 total, all confirmed.
  Confirmed fatal and repaired: refuter:10:1 and refuter:10:2 on prop-polynomially-related-encodings-preserve-polynomial-size.
  Confirmed nonfatal and repaired: refuter:10:3 on lem-kleene-star-has-the-expected-least-closure-property.

- Risk review: reran risk-report after the proposition repair; batch 10 now has one required high-risk item, lem-induced-word-map-has-the-free-extension-property. I reread that lemma against the defining items and recorded a complete alpha-6b-d risk_review note in research/frontier-23-batch-10.proof-contracts.json.

## Checks

- node tools/tsx-run.mjs tools/reflow.mts <9 changed items>
  Result: pass after the item repairs; the final rerun left only thm-ab5-is-equivalent-to-exactness-of-filtered-colimits.md reflowed once after the canonicalization fix.

- node tools/tsx-run.mjs tools/precheck.mts <9 changed items>
  Result: pass, 8 proof-bearing items checked, 0 failing. The remark is precheck-n/a.

- node tools/regen-contract-entries.mjs research/frontier-23-batch-8.proof-contracts.json <6 changed batch-8 items>
  Result: regenerated all 6 changed batch-8 entries, then regenerated thm-degenerate-exactness-criteria and thm-ab5-is-equivalent-to-exactness-of-filtered-colimits once more after their canonical step-number fix.

- node tools/regen-contract-entries.mjs research/frontier-23-batch-10.proof-contracts.json <2 changed batch-10 items>
  Result: regenerated both changed batch-10 entries, then regenerated lem-kleene-star-has-the-expected-least-closure-property once more after its canonical step-number fix.

- node tools/citation-fidelity.mjs research/frontier-23-batch-8.proof-contracts.json --items-dir items --items thm-the-covering-criterion-for-exactness,thm-a-short-exact-sequence-is-a-kernel-cokernel-pair,thm-degenerate-exactness-criteria,fs-the-subtraction-rule-produces-a-unique-member,thm-ab5-is-equivalent-to-exactness-of-filtered-colimits,thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses --fail-on-missing-quote
  Result: pass, no missing quotes and no widening candidates.

- node tools/citation-fidelity.mjs research/frontier-23-batch-10.proof-contracts.json --items-dir items --items prop-polynomially-related-encodings-preserve-polynomial-size,lem-kleene-star-has-the-expected-least-closure-property --fail-on-missing-quote
  Result: pass, no missing quotes and no widening candidates.

- node tools/rendercheck.mjs library/category-theory/exactness-and-the-member-calculus.md library/category-theory/exactness-and-the-member-calculus-examples.md library/computability-theory/formal-languages-encodings-and-decision-problems.md library/computability-theory/formal-languages-encodings-and-decision-problems-examples.md <9 changed items>
  Result: pass, OK on 13 files.

- node tools/proof-contract.mjs research/frontier-23-batch-8.proof-contracts.json --strict --items thm-the-covering-criterion-for-exactness,thm-a-short-exact-sequence-is-a-kernel-cokernel-pair,thm-degenerate-exactness-criteria,fs-the-subtraction-rule-produces-a-unique-member,thm-ab5-is-equivalent-to-exactness-of-filtered-colimits,thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses
  Result: pass with 0 errors and 2 remaining shotgun-bracket warnings on thm-a-short-exact-sequence-is-a-kernel-cokernel-pair and thm-degenerate-exactness-criteria. Those are citation-distribution heuristics only; the contract is otherwise strict-clean.

- node tools/proof-contract.mjs research/frontier-23-batch-10.proof-contracts.json --strict --items prop-polynomially-related-encodings-preserve-polynomial-size,lem-kleene-star-has-the-expected-least-closure-property
  Result: pass, 0 errors, 0 warnings.

- node tools/risk-report.mjs research/frontier-23-batch-8.proof-contracts.json --require-reviewed --json
  Result: pass, all required batch-8 HIGH and CRITICAL items now carry complete alpha-6b-d risk_review rows.

- node tools/risk-report.mjs research/frontier-23-batch-10.proof-contracts.json --require-reviewed --json
  Result: pass, the sole required batch-10 high-risk item now carries a complete alpha-6b-d risk_review row.

- git diff --check -- <9 changed items> research/frontier-23-batch-8.proof-contracts.json research/frontier-23-batch-10.proof-contracts.json research/frontier-23-batch-8.pages.json research/frontier-23-batch-10.pages.json
  Result: pass.

## Blockers

- None in the live scope for group d.

## Gate repair - `step6-routing-adjudicate` (Saturday, August 29, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and
  confirmed that the three batch-8 touched decisions
  `ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps`,
  `fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism`,
  and
  `fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks`
  no longer matched the exact post-reader carrier sealed in
  `research/frontier-23-step6-hash-8-post.json`.
- Reread the current items against `research/frontier-23-reader-8.md` and found
  no new mathematical defect. I synced the narrowed false-statement title in
  `research/frontier-23-batch-8.pages.json`, retagged the three touched
  decisions from `accepted_repair` to `amended_repair`, and appended the
  supplemental gate rows `frontier-23-S6-d-gate-8-1` through
  `frontier-23-S6-d-gate-8-3` via
  `research/frontier-23-alpha-d-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate --batch 8`
  -> `58 item(s) routed, 14 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate`
  -> `504 item(s) routed, 227 adjudication obligation(s), 0 error(s)`.
