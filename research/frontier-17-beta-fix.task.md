> **Generic task.** Your batch number is in the "This dispatch" section
> appended below; substitute it wherever `<i>` appears.

# Batch `<i>` of run `frontier-17` — step-3 fix pass

The group Alpha that reviewed your batch returned numbered findings. **Find
which Alpha reviewed you**: check each
`research/frontier-17-alpha-<group>-step3-scaffold-review.md` for your batch
number, and work from that report.

Read the findings **in that file**. Do not work from a summary, and **do not
renumber** — finding ids are stable by construction. On an earlier run, fix
briefs were written from an agent's closing message instead of its report,
eleven findings were silently dropped, and renumbering made the losses look
like completions. Two of them were real mathematics.

If the report contains no findings for your batch (it states the id prefix it
used), say so in your notes and exit. A clean batch is a valid outcome and
costs nothing.

## What to do

1. Locate each of your findings by id.
2. Apply the fix, or push back **with the reason**, per finding.
3. The report's severity table says what each costs if left.
   ``blocks `sufficient` `` means the pair cannot proceed to step 4 unresolved.
4. Re-run your checks:

```
node tools/coverage-checklist.mjs research/frontier-17-batch-<i>.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-17-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
```

The policy check is deliberately whole-run: legal dependencies on earlier
pages owned by another live batch must resolve against that batch's manifest.
It still enforces the two-pair capacity separately for each batch. Do not
remove, inline, or duplicate a necessary cross-batch edge merely to make an
isolated one-manifest invocation pass.

5. Append `## Step-3 fix pass` to `research/frontier-17-batch-<i>.notes.md`, one
   entry per finding id: `applied` / `pushed back` (+ reason) /
   `already correct` (+ evidence).

Alpha re-checks every finding from disk before the splice, so an `applied`
entry that changed nothing will be caught.

## Scope

Scaffold files for **your batch only**. Not `plan-spec.json`, not another
batch, not `items/`, not `library/`. Nothing is authored yet.

**No permission prompts of any kind**, including inside an `&&` chain.
