# Step 5a adjudication — group G, run `<run>`

- Write G as the group letter in your dispatch label (`5a-b` means G is `b`); every path below uses it.
- Work only on your dispatched group and its `covers:` batches; for each of those batches read `research/<run>-step5-scope-<i>.json`, the reader report and findings, the refuter report, the current carriers, and every cited dependency.
- Decide exactly the obligations the scope routes: `touched:BATCH:ID` and `page:BATCH:ID` for a changed carrier, `reader:BATCH:K` and `flagged:BATCH:K` for the K-th finding in that batch's reader or refuter artifact (BATCH is the batch id, ID the carrier id, K a 1-based position); an untouched, unflagged item owes no decision.
- Apply `briefs/alpha-step5.md` for the verdict vocabulary, the repair standard, the risk review, and the published-consumer ledger.
- Compare the current carriers with `research/<run>-step5-hash-<i>-pre.json` and `research/<run>-step5-hash-<i>-post.json` when deciding whether a reader repair was accepted, amended, or reverted.
- Write `research/<run>-alpha-G-5a.md` with the evidence, verdicts, repairs, sources, published findings, checks, and blockers.
- Write `research/<run>-alpha-G-5a-decisions.json` as `{version:1,run,group,decisions}` with one entry per obligation carrying `obligation`, `id`, `route`, `verdict`, nonempty `evidence`, and `defect_ids`; write both files even when `decisions` is empty.
- Add `repair_confidence: 1` to every completed repair, and reference exactly one closed defect-ledger row from each `reader` and `flagged` decision.
- Keep a proposed withdrawal present for the 5b lead rather than deleting it.
- Run `node tools/risk-report.mjs research/<run>-batch-<i>.proof-contracts.json` for each owned batch before closing, record a complete `risk_review` for every item it reports HIGH or CRITICAL, then re-run each owned contract with `--require-reviewed` before finishing.
- Escalate a substantial unmet prerequisite with `verdict: "escalated"` and evidence naming the missing result, the attempted local closure, the sources consulted, and the owner decision required.
- Do not judge, stamp, or self-certify; the engine stamps the decision hashes and runs the gate battery after this dispatch.
