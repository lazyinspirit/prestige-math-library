# Step 5a adjudication — adjudicator G, run `<run>`

- Set `G` to the suffix of your dispatch label: `5a-batch-13` means `G` is `batch-13`; a retained legacy dispatch `5a-b` means `G` is `b`. Use that suffix in every path and in the decisions file's `group` field below. The scope file's original assignment group stays unchanged.
- Work only on your `covers:` batches. New dispatches cover exactly one batch. For each batch, read `research/<run>-step5-scope-<i>.json`, its reader report and findings, refuter report, current carriers, and every cited dependency.
- Follow `research/<run>-alpha-G-5a-order.task.md` within your dispatched batches. Adjudicate routed items from lowest to highest in-run dependency level, complete each item's risk review before moving higher, and keep all findings for one item together. Page-only obligations retain their own scope. Route affected consumers outside your dispatched batches to Step 5b rather than editing another adjudicator's files.
- Decide exactly the routed obligations: `touched:BATCH:ID` and `page:BATCH:ID` for a changed carrier; `reader:BATCH:K` and `flagged:BATCH:K` for the K-th finding in that batch's reader or refuter artifact. `BATCH` is the batch ID, `ID` the carrier ID, and `K` a 1-based position. An untouched, unflagged item owes no decision.
- Apply `briefs/alpha-step5.md` for review, verdict, repair, risk, ledger, and evidence rules.
- Compare current carriers with `research/<run>-step5-hash-<i>-pre.json` and `research/<run>-step5-hash-<i>-post.json` to decide whether reader repairs were accepted, amended, or reverted.
- Write `research/<run>-alpha-G-5a.md` with evidence, verdicts, repairs, sources, published findings, checks, and blockers.
- Write `research/<run>-alpha-G-5a-decisions.json` as `{version:1,run,group,decisions}`. Include one entry per owed obligation with `obligation`, `id`, `route`, `verdict`, nonempty `evidence`, and `defect_ids`. Write both files even when `decisions` is empty.
- Set `repair_confidence: 1` on every completed repair. Each `reader` and `flagged` decision must reference exactly one closed defect-ledger row.
- Keep a proposed withdrawal present for the Step 5b lead; do not delete it.
- Before closing, run `node tools/physics-support/risk-report.mjs research/<run>-batch-<i>.proof-contracts.json` for each owned batch. Record a complete `risk_review` for every HIGH or CRITICAL item it reports, then rerun each owned contract with `--require-reviewed`.
- If a substantial unmet prerequisite blocks sound local repair, use `verdict: "escalated"`. Evidence must name the missing result, attempted local closure, sources consulted, and required owner decision.
- Do not judge, stamp, or self-certify. The engine stamps decision hashes and runs the gate battery after this dispatch.
