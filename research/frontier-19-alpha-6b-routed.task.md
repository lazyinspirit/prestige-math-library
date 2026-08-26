# Step 6b — routed group adjudication

Work only on this dispatch's batches. Open each
`research/<run>-step6-scope-<i>.json`, reader report, refuter report, named
carrier, and dependencies needed to verify it.

## Exact queue

Write exactly one decision for every:

- `touched:<batch>:<id>` item, including contract/manifest-only changes and
  additions;
- `page:<batch>:<page-id>` page prose, metadata, or relative-order change;
- `reader:<batch>:<number>` uneditable reader finding;
- `refuter:<batch>:<number>` refuter finding.

Do not re-audit untouched, unflagged ordinary-risk items. The refuter already
opened all unchanged items/pages and every high/critical item.

For changed work, accept, amend, or revert the reader repair. For a finding,
confirm fatal/nonfatal or reject it as a false positive. Apply every confirmed
repair, including contract, manifest, provenance, and stale-stamp updates. If
withdrawal is necessary, leave the item and manifest entry present, record the
recommendation, and let the 6c lead inspect and apply it.

## Artifacts

Write:

1. `research/<run>-alpha-<g>-6b.md` with evidence and disposition for every
   obligation, repair, risk review, structural change, and blocker.
2. `research/<run>-alpha-<g>-6b-decisions.json`:

```json
{
  "version": 1,
  "run": "<run>",
  "group": "<g>",
  "decisions": [
    {
      "obligation": "touched:2:thm-example",
      "id": "thm-example",
      "route": "touched",
      "verdict": "accepted_repair",
      "defect_ids": ["<run>-S6-<g>-touched-2-thm-example"],
      "evidence": "The corrected Statement retains the cited theorem's nonempty hypothesis."
    },
    {
      "obligation": "refuter:2:3",
      "id": "lem-example",
      "route": "flagged",
      "verdict": "false_positive",
      "defect_ids": ["<run>-S6-<g>-refuter-2-3"],
      "evidence": "[F2] states the required implication in items/dep.md."
    }
  ]
}
```

Touched/page verdicts are `accepted_repair`, `amended_repair`, or
`reverted_change`. Reader/refuter verdicts are `confirmed_fatal`,
`confirmed_nonfatal`, or `false_positive`. The engine stamps every decision
with its current composite carrier hash before validation; do not invent that
hash.

Use deterministic defect ids namespaced by run, Step 6, group, and obligation
so concurrent groups cannot collide. Append rows with
`node tools/defect-ledger.mjs append --file <rows.json>`. Each finding owns one
closed row; a touched carrier may own several.

When reader and refuter found the same defect, both decisions may cite one row
only if subject, class, severity, exact location, and verdict match. The later
decision sets `same_defect_as` and `same_defect_evidence`. Different defects on
one item need different rows.

An added repair lemma may cite its repaired consumer's row. Set
`causal_subject`, `same_defect_as`, and `same_defect_evidence`; do not fabricate
a defect on the lemma. Read existing results before retrying and extend them;
never redo completed analysis.
