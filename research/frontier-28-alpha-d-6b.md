# frontier-28 alpha group d step 6b adjudication

Date: 2026-09-01
Run: `frontier-28`
Group: `d`
Scope: batches `9` and `11`

## Batch 9

- Touched obligations: `5` total.
  `accepted_repair`: `def-wonderful-finite-family`, `lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union`.
  `amended_repair`: `lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph`, `lem-star-or-special-vertex-obstructions-force-wonderfulness`, `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses`.
- Refuter obligations: `0`.
- Mathematical disposition: Reader 9's four combinatorics repairs stand on the current disk bytes. I rechecked the high-risk chain through the auxiliary-graph lemmas and the Bird/E witnesses and found no further live defect in batch `9`.
- Risk review: ran `tools/risk-report.mjs` without `--require-reviewed`, reread every current HIGH/CRITICAL item against the proof, source-facing reader evidence, and cited dependencies, and wrote complete `alpha-6b-d` `risk_review` records for:
  `lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge`, `lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph`, `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses`, `lem-star-or-special-vertex-obstructions-force-wonderfulness`, and `lem-the-e-graph-and-the-bird-graph-are-wonderful`.

## Batch 11

- Touched obligations: `4` total, all `amended_repair`.
  `def-halting-problem` and `prop-an-np-complete-language-in-p-implies-p-equals-np` now carry the repaired reader changes plus synced batch-manifest dependency rows.
  `lem-polynomial-reductions-compose` and `thm-verifier-and-nondeterministic-definitions-of-np-agree` also carry the required Alpha high-risk `risk_review` rows.
- Refuter obligations: `2` total, both `confirmed_fatal` and repaired.
  `thm-busy-beaver-dominates-every-total-computable-function`: the old theorem silently switched to canonical binary numerals; the current statement and fact `[L1]` now fix that encoding hypothesis explicitly.
  `thm-halting-is-recognizable-and-undecidable`: the old fact `[L2]` overstated the universal-machine theorem; the current proof now recognizes `HALT_{TM}` by explicit one-step simulation and accepts on either halting state.
- Mathematical disposition: Reader 11's four touched repairs stand on reread, and the only additional live defects I confirmed were the two refuter findings above.
- Risk review: ran `tools/risk-report.mjs` without `--require-reviewed`, reread every current HIGH/CRITICAL item against the proof and dependency evidence, and wrote complete `alpha-6b-d` `risk_review` records for:
  `thm-machine-acceptance-is-recognizable`, `lem-diagonal-self-application-machine`, `thm-machine-acceptance-is-undecidable`, `thm-halting-is-recognizable-and-undecidable`, `thm-busy-beaver-dominates-every-total-computable-function`, `thm-totality-is-not-recognizable`, `thm-machine-equivalence-is-undecidable`, `thm-verifier-and-nondeterministic-definitions-of-np-agree`, `prop-p-is-contained-in-np-intersection-conp`, `lem-polynomial-reductions-compose`, `thm-polynomial-reductions-transfer-p-np-and-conp-membership`, `thm-sat-search-reduces-to-sat-decision`, and `prop-np-is-contained-in-pspace-and-pspace-in-exp`.

## Repairs

- `items/thm-halting-is-recognizable-and-undecidable.md`
  Replaced the inaccurate universal-machine recognizability route with the step-interpreter route, added the required machine-decider and step-interpreter dependencies, and repaired the stale degenerate boundary evidence in the batch-11 proof contract.

- `items/thm-busy-beaver-dominates-every-total-computable-function.md`
  Added the missing canonical-binary-encoding hypothesis to the Statement and Given line, cited `def-partial-function-computed-by-a-machine`, and synchronized step `1.1` to the exact encoded input/output behavior it uses.

- `research/frontier-28-batch-11.pages.json`
  Synced the repaired dependency rows for `def-halting-problem`, `thm-halting-is-recognizable-and-undecidable`, `thm-busy-beaver-dominates-every-total-computable-function`, `thm-verifier-and-nondeterministic-definitions-of-np-agree`, and `prop-an-np-complete-language-in-p-implies-p-equals-np`.

- `research/frontier-28-batch-9.proof-contracts.json` and `research/frontier-28-batch-11.proof-contracts.json`
  Added the required `risk_review` records across all owned HIGH/CRITICAL items, and regenerated the batch-11 downstream row for `cor-busy-beaver-is-not-computable` after the theorem statement changed.

- `research/frontier-28-alpha-d-6b-ledger-rows.json` and `research/frontier-28-alpha-d-6b-decisions.json`
  Wrote the exact Step 6 durable rows and routed decisions for all `11` owned obligations.

## Checks

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-halting-is-recognizable-and-undecidable.md items/thm-busy-beaver-dominates-every-total-computable-function.md`
  Result: pass, `2 checked, 0 failing`.

- `node tools/regen-contract-entries.mjs research/frontier-28-batch-11.proof-contracts.json thm-halting-is-recognizable-and-undecidable thm-busy-beaver-dominates-every-total-computable-function`
  Result: regenerated `2`, skipped `0`.

- `node tools/regen-contract-entries.mjs research/frontier-28-batch-11.proof-contracts.json cor-busy-beaver-is-not-computable`
  Result: regenerated `1`, skipped `0`.

- `node tools/proof-contract.mjs research/frontier-28-batch-9.proof-contracts.json --strict`
  Result: pass, `8/8 item(s) checked`, `0 error(s)`, `0 warning(s)`.

- `node tools/proof-contract.mjs research/frontier-28-batch-11.proof-contracts.json --strict`
  Result: pass, `27/27 item(s) checked`, `0 error(s)`, `0 warning(s)`.

- `node tools/citation-fidelity.mjs research/frontier-28-batch-9.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: pass; `27` citations, no quote misses, no widening candidates.

- `node tools/citation-fidelity.mjs research/frontier-28-batch-11.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: pass; `83` citations, no quote misses, no widening candidates.

- `node tools/boundary-audit.mjs research/frontier-28-batch-9.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: pass; no contradicted boundary dispositions.

- `node tools/boundary-audit.mjs research/frontier-28-batch-11.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: pass; no contradicted boundary dispositions.

- `node tools/content-policy.mjs research/frontier-28-batch-9.pages.json`
  Result: pass, `9 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs research/frontier-28-batch-11.pages.json`
  Result: pass, `38 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/risk-report.mjs research/frontier-28-batch-9.proof-contracts.json --require-reviewed --json`
  Result: pass; every required batch-9 HIGH/CRITICAL item now carries a complete `alpha-6b-d` `risk_review`.

- `node tools/risk-report.mjs research/frontier-28-batch-11.proof-contracts.json --require-reviewed --json`
  Result: pass; every required batch-11 HIGH/CRITICAL item now carries a complete `alpha-6b-d` `risk_review`.

- `node tools/step6-scope.mjs check --run frontier-28 --phase split --batch 9`
  Result: pass, `9 item(s) routed, 5 adjudication obligation(s), 0 error(s)`.

- `node tools/step6-scope.mjs check --run frontier-28 --phase split --batch 11`
  Result: pass, `38 item(s) routed, 6 adjudication obligation(s), 0 error(s)`.

- `node tools/defect-ledger.mjs append --file research/frontier-28-alpha-d-6b-ledger-rows.json`
  Result: pass; appended `11` rows and re-rendered `research/DEFECT-LEDGER.md`.

- `node tools/defect-ledger.mjs validate --run frontier-28`
  Result: pass, `11 defect row(s) checked, 0 error(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: exit `0`; only the repository's standing `redundant-prereq` advisories remain.

- `node tools/rendercheck.mjs items/thm-halting-is-recognizable-and-undecidable.md items/thm-busy-beaver-dominates-every-total-computable-function.md`
  Result: pass, `OK — 2 file(s)`.

- `git diff --check -- items/thm-halting-is-recognizable-and-undecidable.md items/thm-busy-beaver-dominates-every-total-computable-function.md research/frontier-28-batch-9.proof-contracts.json research/frontier-28-batch-11.proof-contracts.json research/frontier-28-batch-11.pages.json research/frontier-28-alpha-d-6b-ledger-rows.json research/frontier-28-alpha-d-6b-decisions.json research/frontier-28-alpha-d-6b.md research/defect-ledger.jsonl research/DEFECT-LEDGER.md`
  Result: clean.

## Stage-owned follow-up

- I did not run `node tools/step6-scope.mjs stamp --run frontier-28 --group d` or any `--phase adjudicate` check. The live Step-6 brief says the stage stamps `subject_sha256`, and this dispatch explicitly reserves stamping to the stage rather than to the Alpha writeup.

## Blockers

- None in the live batch-`9` / batch-`11` scope.
