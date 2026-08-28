# Step 10 readiness recovery — group b re-attestation adjudication

The Step 10 readiness gate exposed that every run-owned artifact must remain
`status: draft`. Batch 2 had been authored as `published`; the supervising
session corrected only those status scalars and added the missing invariant to
`briefs/authoring.md`. No mathematical body changed.

That metadata correction invalidated the frozen judge hashes for the batch-2
A/B pair. A targeted replay through the pair's existing persistent Terra
session has now produced current verdicts for all 45 items. Its exact pending
set is recorded in:

- `research/frontier-22-readiness-rejudge-closure.json`

The receipt has 23 `unadjudicated_rows`, all owned by batch 2/group b. For each
exact `(id, model, context_sha256)` tuple, find the matching rejection row in
`research/frontier-22-judge.jsonl`, open the current item and every cited item
needed to decide the objection, and append one exact outcome to
`research/frontier-22-judge-adjudications.jsonl` with the current pre-edit
`item_sha256` guard.

Use the normal Step-8 standard: only `confirmed_fatal` licenses a repair;
`confirmed_nonfatal` and `false_positive` close the tuple without content or
contract changes. Preserve `status: draft` on every run-owned file. Repair only
batch-2 items, make the smallest mathematically complete corrections, update
the matching proof-contract records when a statement/dependency/boundary
contract changes, and append required defect-ledger evidence. Do not alter the
canonical `research/frontier-22-judge-closure.json`: existing terminal receipts
hash-bind it. Do not rejudge; the supervising session will run the targeted
post-repair sweep.

Pay special attention to the two repeated clusters, but decide them from the
files rather than this note:

- whether annihilator idealhood/module-localization facts are genuinely absent
  from the cited dependency contracts;
- whether Choice/Dependent Choice provisos are already part of the library's
  ambient convention or are omitted hypotheses that the item must state.

The empty-family objections and the undefined localization map are concrete
boundary/notation claims and still require direct verification.

Run focused validators for every changed item plus `git diff --check`. Write a
concise recovery report to
`research/frontier-22-alpha-b-readiness-rejudge.md` listing all 23 outcomes,
all repairs, and the exact ids that now need rejudging. Do not overwrite the
earlier group-b report.
