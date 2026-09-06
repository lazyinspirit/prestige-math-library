# Step 6b — routed group adjudication

Work only on the dispatched group. For every batch, read its
`research/<run>-step6-scope-<i>.json`, reader report and findings JSON, refuter
report, current carrier, and cited dependencies.

Before closing the group, run `tools/risk-report.mjs` on each owned batch
contract without `--require-reviewed`. For every item reported HIGH or CRITICAL,
read the current proof and relevant reader/refuter and citation evidence, then
write a specific `risk_review: {status: complete, reviewer, notes}` record into
that batch contract. This is a mathematical review, not a routing stamp: repair
any confirmed defect under the rules below, and make `notes` identify the
actual risk and why it is resolved. Re-run the same owned-batch checks with
`--require-reviewed` before completing the dispatch.

Write exactly one decision for each routed `touched`, `page`, `reader`, and
`refuter` obligation. Use `accepted_repair`, `amended_repair`, or
`reverted_change` for touched/page carriers; use `confirmed_fatal`,
`confirmed_nonfatal`, or `false_positive` for reader/refuter findings.

For a confirmed defect, apply the in-scope repair and append its closed ledger
row. A proposed withdrawal stays present for the 6c lead. Update only the
contract, manifest, provenance, impact, and stale verification records made
incorrect by that repair.

Write `research/<run>-alpha-<g>-6b.md` and
`research/<run>-alpha-<g>-6b-decisions.json` with `{version:1,run,group,decisions}`.
Each decision needs its exact obligation, id, route, verdict, nonempty evidence,
and unique ledger references; the stage stamps `subject_sha256`. Use shared or
causal ledger references only with the fields required by `step6-scope.mjs`.
