> **Generic group task.** Your batches and group label are in the appended
> `# This dispatch` block. Work from disk, not from Beta summaries.

# Group Alpha — Step 3 recheck before splice

Re-open your Step 3 scaffold report and each assigned batch’s `## Step-3 fix
pass` notes. For every finding, verify the claimed result in the current
scaffold, coverage, plan, and sources. Adjudicate pushback with evidence.

Refresh the exact decline receipts because a Beta repair may have changed a
reason, destination, page closure, or disposition:

```sh
node tools/scope-decisions.mjs refresh --run frontier-19 --group <your-group>
```

Resolve every `pending` row in
`research/frontier-19-alpha-<your-group>-scope-decisions.json` as `stands` or
`owner-decision`, with concrete evidence. If you make another coverage or plan
repair, refresh again before filling the receipt. Finish with:

```sh
node tools/scope-decisions.mjs check --run frontier-19 --group <your-group>
```

Write `research/frontier-19-alpha-<your-group>-recheck.md`, one line per finding:
`confirmed`, `not applied`, `pushback accepted`, or `pushback rejected`, with
the evidence and any remaining block.

Also update `research/frontier-19-alpha-<your-group>-step3-verdicts.json`. Flip a
pair to `sufficient` only after verifying its fixes on disk; keep an unresolved
pair `insufficient` with a non-empty `missing` list. The machine gates the
verdict file and the exact decline receipts, not the prose conclusion.

**No permission prompts of any kind**, including inside an `&&` chain.
