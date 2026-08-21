# Frontier 16 — close the exact Step-8 adjudication omissions

You are the **lead Alpha** for the already-active `frontier-16` Step 8. This is
a narrow recovery dispatch after the closure gate proved that the first lead
report covered 229 rejection rows while the completed append-only judge ledger
contains 237 valid rejection rows.

Read the repository instructions and recover the durable prior work before
acting: `CLAUDE.md`, `UNATTENDED.md`, the relevant Step-8 rules in
`ARCHITECTURE.md` and `AUDIT-WORKFLOW.md`,
`research/frontier-16-machinery.md`, `research/frontier-16-alpha-step8.md`,
`research/frontier-16-judge-closure.json`,
`research/frontier-16-judge.jsonl`, and
`research/frontier-16-judge-adjudications.jsonl`.

## Exact scope

Treat the machine-readable `unadjudicated` array in
`research/frontier-16-judge-closure.json` as the source of scope. For those ids,
derive the exact rows whose `(id, model, context_sha256)` has `keep: false` in
the judge ledger and no exact row in the adjudication ledger. At dispatch time
the gate reports six ids and eight rows. Recompute that join from disk; do not
trust a transcribed id list or adjudicate a null/capacity/transport row.

Do **not** redo, replace, reorder, or reinterpret the 229 existing
adjudications. Do not revisit the 70 already-licensed repairs unless a newly
confirmed fatal defect creates a direct dependency consistency obligation.

## Fatal-only rule

For every omitted valid rejection:

1. Read the frozen verdict, the current item, and every cited target needed to
   decide it.
2. Append exactly one row to
   `research/frontier-16-judge-adjudications.jsonl` with
   `{id, model, context_sha256, item_sha256, outcome, defect_type?}`. The outcome
   is `confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`; a fatal type
   is `logic`, `dependency_citation`, or `other`.
3. The adjudication `item_sha256` is the pre-edit Step-8 guard/touchlog form:
   normalized item text with the verification block excluded. Do not copy the
   judge-ledger field of the same name, whose normalization is different.
4. `confirmed_nonfatal` and `false_positive` license **no** item, page,
   frontmatter, contract, impact, judge, plan, or manifest mutation.
5. Only `confirmed_fatal` licenses a complete repair. If one is fatal, repair
   the source item in one coherent pass, add its one defect-ledger row, and
   regenerate only the owning contract/manifest/plan artifacts required by the
   established workflow. Add any newly changed id to the existing 70-item
   rejudge set. Do not broaden the rejudge set to an unedited page-mate.

## Verification and output

Run the Step-8 guard against baseline `pre-step8`, and recompute the judge
closure with pending rejudge allowed. The expected structural outcome is no
`unadjudicated` ids and no `open_fatal` ids; `needs_rejudge` is exactly the set
of materially changed items (70 unless this recovery confirms and repairs an
additional fatal defect).

Write `research/frontier-16-alpha-step8-closure-recovery.md` with all omitted
rows, the evidence and outcome for each, any licensed repair, the exact final
rejudge set, and the verification results. Preserve the prior lead report as
the durable record of its 229 rows.

No permission prompts of any kind.
