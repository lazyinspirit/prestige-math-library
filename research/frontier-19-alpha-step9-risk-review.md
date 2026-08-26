# frontier-19 step9 risk review

Reviewed the current post-Step-8 item `fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice` against:

- its current batch-7 proof-contract row
- `rem-solovay-model`
- `rem-shelah-inaccessible-and-the-baire-property`
- `research/frontier-19-step8-terminal-resolutions.jsonl`
- the relevant Step-8 defect-ledger and adjudication history
- `research/frontier-19-step8-cutover.json`

Conclusion: the current item is sound on the frozen post-Step-8 bytes. The repaired title and Statement now match what steps 1.1-2.1 actually prove: assuming `Con(ZFC + "there exists an inaccessible cardinal")`, Solovay yields a model of `ZF + DC` in which every set of reals is Lebesgue measurable, so `ZF + DC` does not prove the existence of a nonmeasurable subset of `R`. Shelah's converse consistency implication confirms that the inaccessible-cardinal qualifier is essential for the measurability half, while the Baire-property half is weaker and does not change this refutation.

Applied a fresh `risk_review` to the owning batch contract with `tools/apply-risk-reviews.mjs`, re-merged the run contract, and verified:

- `node tools/risk-report.mjs research/frontier-19-proof-contracts.json --items fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice --require-reviewed`
- `node tools/proof-contract.mjs research/frontier-19-proof-contracts.json --items fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice`
- `node tools/step8-cutover.mjs check --run frontier-19`

All three checks passed on Wednesday, August 26, 2026. No item, page, ledger, terminal-resolution, or cutover edits were made.
