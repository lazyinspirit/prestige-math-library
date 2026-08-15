## Batch 5 of run `frontier-14` — step-3 fix pass

Group Alpha b reviewed your scaffold and returned findings. **Your findings are
B5-1 B5-2 B5-3 .**

Read them **in the report file itself**:
`research/frontier-14-alpha-b-step3-scaffold-review.md`

Do not work from a summary, and **do not renumber anything**. Finding ids are
stable by construction. On an earlier run, fix briefs were written from an
agent's closing message instead of its report, eleven findings were silently
dropped, and renumbering made the losses look like completions — two of them
were real mathematics.

### What to do

1. Open the report and locate each of your findings by id.
2. For each: apply the fix, or push back **in your notes with the reason**, in
   the finding's own numbered section. A disagreement recorded with evidence is
   a legitimate outcome; a silent skip is not.
3. The severity table near the end of the report says what each finding costs if
   left. `blocks \`sufficient\`` means the pair cannot proceed to step 4 until it
   is resolved.
4. Re-run your own gates before reporting done:

```
node tools/coverage-checklist.mjs research/frontier-14-batch-5.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-14-batch-5.pages.json
node tools/validate-plan.mjs research/plan-spec.json
```

5. Append a section to `research/frontier-14-batch-5.notes.md` titled
   `## Step-3 fix pass`, with one entry per finding id and its disposition:
   `applied` / `pushed back` (+ reason) / `already correct` (+ evidence).

Alpha b re-checks every finding from disk before the step-4 splice, so an entry
that says `applied` when nothing changed will be caught.

### Scope

Scaffold files only — `.pages.json`, `.notes.md`, `.coverage.json`,
`.proof-contracts.json` for **your batch**. You may not edit `plan-spec.json`,
another batch's files, `items/`, `library/`, or any normative doc. Nothing is
authored yet; this is still step 3.

**No permission prompts of any kind**, including inside an `&&` chain. Record a
blocker in your notes if something truly cannot proceed.
