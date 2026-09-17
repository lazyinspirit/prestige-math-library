# Repair invalid reader findings — batches 5, 11, 14, 15

Run `phase-2-remaining-27`, stage `5a-split`. The split tool refuses four
batches because their reader findings files use free-form subjects instead of
the required shape. Reproduce each error with:

```
node tools/step5-scope.mjs post-reader --run phase-2-remaining-27 --batch <b>
```

Current errors:

- batch 5: `finding 1 names unopened or out-of-scope item
  reader-5-examples-page-nilpotent-i-over-2` (and the two follow-on complaints).
- batch 11: `reader-11-f1`, `reader-11-f2`, `reader-11-f3`.
- batch 14: `reader14-N1`, `reader14-N2`, `reader14-N3`.
- batch 15: `F-1-shelah-union-level-homogeneity`.

## What to do

1. Read the reader's report (`research/phase-2-remaining-27-reader-<b>.md`) and
   its findings file (`research/phase-2-remaining-27-reader-findings-<b>.json`)
   for each batch. The labels above are placeholders the reader invented; its
   report names the real item(s) and the concern.
2. For each offending finding, rewrite the entry so it is valid:
   - a finding about an item the reader actually opened keeps that item's real
     id in the finding subject;
   - a finding about a PUBLISHED supplier must use
     `subject_type: "published-dependency"` and name the assigned consumer item
     that reaches it (the tool requires exactly this);
   - keep the finding's substance (severity, evidence, recommendation) as the
     reader wrote it — this is a metadata repair, not a re-review. If a label
     cannot be mapped to a real item, say so in your report and mark the finding
     `severity: "escalation"` with the reader's own wording.
3. Iterate until, for every one of the four batches,
   `node tools/step5-scope.mjs post-reader --run phase-2-remaining-27 --batch <b>`
   exits zero and writes `research/phase-2-remaining-27-step5-scope-<b>.json`.
4. Do not touch any other batch, item file, manifest, coverage or contract.

## Rules

- Edit only the four `reader-findings-<b>.json` files (and, only if a placeholder
  cannot be resolved, add the reader's exact wording as an escalation entry).
- Mathematical integrity: you are repairing subjects, not verdicts. Never
  invent a finding the reader did not make and never delete one's substance.
- Report to `research/phase-2-remaining-27-reader-findings-repair-report.md`:
  each finding, the label the reader used, the real subject you mapped it to,
  and the final tool output for the four batches.
