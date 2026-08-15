## Batch 3 of run `frontier-14` — step-3 fix pass

Group Alpha **a** reviewed batches 1–3. Your findings are the ones numbered
`B3-*` in its report:

`research/frontier-14-alpha-a-step3-scaffold-review.md`

Read them **in that file**. Do not work from a summary and **do not renumber**.
Finding ids are stable by construction. On an earlier run, fix briefs were
written from an agent's closing message instead of its report, eleven findings
were silently dropped, and renumbering made the losses look like completions —
two were real mathematics.

If the report contains no `B3-*` findings, say so in your notes and exit; a
clean batch is a valid outcome and costs nothing.

### What to do

1. Locate each of your findings by id.
2. Apply the fix, or push back **with the reason**, per finding.
3. The report's severity table says what each costs if left.
   `blocks \`sufficient\`` means the pair cannot proceed to step 4 unresolved.
4. Re-run your gates:

```
node tools/coverage-checklist.mjs research/frontier-14-batch-3.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-14-batch-3.pages.json
node tools/validate-plan.mjs research/plan-spec.json
```

5. Append `## Step-3 fix pass` to `research/frontier-14-batch-3.notes.md`,
   one entry per finding id: `applied` / `pushed back` (+ reason) /
   `already correct` (+ evidence).

Alpha re-checks every finding from disk before the splice, so an `applied`
entry that changed nothing will be caught.

### Scope

Scaffold files for **your batch only**. Not `plan-spec.json`, not another
batch, not `items/`, not `library/`. Nothing is authored yet.

**No permission prompts of any kind**, including inside an `&&` chain.
