## Batch 7 of run `frontier-14` — step-3 fix pass

Group Alpha **c** reviewed your batch and marked **both pages `insufficient`**.

Your findings are numbered **`C1` … `C11`** in its report:

`research/frontier-14-alpha-c-step3-scaffold-review.md`

Read them **in that file**. Do not work from a summary and **do not renumber**.
Finding ids are stable by construction. On an earlier run, fix briefs were built
from an agent's closing message instead of its report, eleven findings were
silently dropped, and renumbering made the losses look like completions — two
were real mathematics.

The verdicts to clear:

| page | findings |
|---|---|
| `stone-weierstrass-general` (287) | C1, C2, C4, C5, C6, C7, C9 |
| `stone-weierstrass-general-examples` (288) | C1, C2, C3, C9, C11 |

### What to do

1. Locate each finding by id in Alpha c's report.
2. Apply the fix, or push back **with the reason**, per finding.
3. Alpha c re-checks every finding from disk before the splice, so an `applied`
   entry that changed nothing will be caught.
4. Re-run your gates:

```
node tools/coverage-checklist.mjs research/frontier-14-batch-7.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-14-batch-7.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/manifest-integrity.mjs --run frontier-14
```

5. Append `## Step-3 fix pass` to `research/frontier-14-batch-7.notes.md`, one
   entry per finding id: `applied` / `pushed back` (+ reason) / `already
   correct` (+ evidence).

### Keep the D1 decision

You correctly cited the published complex numbers rather than re-minting them —
`def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`,
`thm-complex-numbers-are-the-real-coordinate-plane` and `cor-sum-of-roots-of-unity`
are all in your `deps`. **Do not undo that** while fixing anything else. The
whole pair was lost once over this question.

### Scope

Scaffold files for batch 7 only. Not `plan-spec.json`, not another batch, not
`items/`, not `library/`. Nothing is authored yet.

**No permission prompts of any kind**, including inside an `&&` chain.
