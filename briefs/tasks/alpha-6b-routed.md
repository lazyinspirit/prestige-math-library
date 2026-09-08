# Step 6b — routed group adjudication

Work only on the dispatched group. For every batch, read its
`research/<run>-step6-scope-<i>.json`, reader report and findings JSON, refuter
report, current carrier, and cited dependencies. Apply the Step 6b
accept/repair/escalate and authoritative-source rules in `briefs/alpha-step6.md`.

Compare each post-reader hash snapshot with `research/<run>-step6-hash-<i>-pre-6b.json`.
The latter freezes repairs made by the full gate battery before this adjudication.
For a changed carrier already routed as touched/page, decide its complete current
state and use `amended_repair` when it differs from the reader result.
For each other changed carrier, write `post-reader:<i>:<id>` with route `touched`
(item) or `page`; compare against the post-reader and pre-6b snapshots for the
accepted/amended/reverted verdict. Read these repairs independently and record
the same evidence and ledger accountability as other repair obligations.

Before closing the group, run `tools/risk-report.mjs` on each owned batch
contract without `--require-reviewed`. For every item reported HIGH or CRITICAL,
read the current proof and relevant reader/refuter and citation evidence, then
if the risk is resolved, write a specific `risk_review: {status: complete, reviewer, notes}` record into
that batch contract. This is a mathematical review, not a routing stamp: repair
any confirmed defect under the rules below, and make `notes` identify the
actual risk and why it is resolved. Re-run the same owned-batch checks with
`--require-reviewed` before completing the dispatch.

Write exactly one decision for each routed `touched`, `page`, `reader`, and
`refuter` obligation. Use `accepted_repair`, `amended_repair`, or
`reverted_change` for touched/page carriers; use `confirmed_fatal`,
`confirmed_nonfatal`, or `false_positive` for reader/refuter findings.

For a touched/page change consisting only of metadata normalization or audit
enrichment, independently read the complete current carrier. If sound and no
mathematical defect was repaired, use `reviewed_no_defect`, `defect_ids: []`,
and `change_kind: "metadata"` or `"audit_enrichment"`. Explain the exact
change and why it needs no defect row. Current-carrier hashing still applies.
This disposition cannot close a reader/refuter/gate defect or an open ledger
row. Do not invent a repaired defect to account for a sound change.

For a confirmed defect you are 100% confident you can repair, apply the in-scope repair and append its closed ledger
row. A proposed withdrawal stays present for the 6c lead. Update only the
contract, manifest, provenance, impact, and stale verification records made
incorrect by that repair.

Otherwise record `escalated` as specified in the brief. Leave the unresolved
defect and risk review open; report failing checks rather than claiming closure.

Write `research/<run>-alpha-<g>-6b.md` and
`research/<run>-alpha-<g>-6b-decisions.json` with `{version:1,run,group,decisions}`.
Each decision needs its exact obligation, id, route, verdict, nonempty evidence,
and unique ledger references; the stage stamps `subject_sha256`. Use shared or
causal ledger references only with the fields required by `step6-scope.mjs`.
