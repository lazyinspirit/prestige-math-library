# Step 9 terminal contract-gap repair, run `frontier-19`

The `9-receipt` gate is blocked on exactly one current proof-bearing item:

`lem-symmetric-groups-up-to-four-are-solvable`

It is present in `research/frontier-19-batch-3.pages.json` and cited by the
following corollary. The final generic receipt-repair pass has now generated an
owning entry in `research/frontier-19-batch-3.proof-contracts.json`, but that
entry still fails the required current Alpha review: `risk-report` routes the
lemma as critical and reports `risk-review-missing`. This is a focused
lead-Alpha mathematical contract audit and completion.

Read the current item completely, all four dependencies named in its current
frontmatter/Facts, the owning batch manifest and nearby batch-3 contract rows.
Verify the actual group-theoretic argument, including the `S_0`, `S_1`, `S_2`,
`S_3`, and `S_4` cases; normality of `A_3`, `A_4`, and `V_4`; the factor orders;
and the claim that each factor is abelian. Use reputable sources if any local
dependency or convention leaves doubt.

If and only if the current lemma is sound, audit and complete its generated
entry in the owning batch-3 proof-contract file. It must include faithful
citation rows, all numbered derivations, honest dispositions for every required
boundary, finite-smoke only if a registered check genuinely applies, and the
substantive current Alpha `risk_review` that `risk-report` requires. Do not copy
generic boundary or review prose from another item. Re-merge all ten batch
contracts into `research/frontier-19-proof-contracts.json`.

Run at least:

```sh
node tools/proof-contract.mjs research/frontier-19-proof-contracts.json \
  --items lem-symmetric-groups-up-to-four-are-solvable --strict
node tools/boundary-audit.mjs research/frontier-19-proof-contracts.json \
  --fail-on-contradicted --fail-on-template
node tools/citation-fidelity.mjs research/frontier-19-proof-contracts.json \
  --fail-on-missing-quote
node tools/risk-report.mjs research/frontier-19-proof-contracts.json \
  --items lem-symmetric-groups-up-to-four-are-solvable --require-reviewed
node tools/level-coverage.mjs \
  --contracts research/frontier-19-proof-contracts.json \
  --judge-ledger research/frontier-19-judge.jsonl \
  --judge-adjudications research/frontier-19-judge-adjudications.jsonl \
  --spine-receipt research/frontier-19-spine-audit.json \
  --audit-receipt research/frontier-19-audit-coverage.json \
  --verify-current-context research/frontier-19-batch-*.pages.json
node tools/step8-cutover.mjs check --run frontier-19
```

Write a concise repair record to
`research/frontier-19-alpha-receipt-contract-repair.md`.

The item tree is frozen. Do not edit any item, page, manifest, coverage file,
judge/adjudication/terminal-resolution record, receipt, defect ledger, or
workflow state. Do not launch a judge or refuter and do not transition the
workflow. If the lemma is unsound, leave the contract absent and report the
exact mathematical blocker. No permission prompts.
