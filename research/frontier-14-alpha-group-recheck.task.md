> **Generic group task.** No group-specific file existed for this group, so the
> engine fell back to this one. Your batches are named in the "This dispatch"
> section appended below — work from that, and write your report to the
> `research/frontier-14-alpha-<your-group>-...` path for your own group label.

## Group Alpha (this group) — re-check before the step-4 splice

You reviewed the batches named in your dispatch at step 3 and returned numbered findings. The owning
Betas have now applied, pushed back on, or declared already-correct each one.

Re-check **from disk**, not from what they reported.

### Why this stage exists

An `applied` entry that changed nothing is the failure this catches, and it is
the only reason the fix pass can be trusted without a person reading it. A Beta
that reports a fix it did not make produces exactly the same result file as one
that did.

### What to do

1. Read your own report: `research/frontier-14-alpha-<your-group>-step3-scaffold-review.md`
2. Read each Beta's `## Step-3 fix pass` section in
   `research/frontier-14-batch-<i>.notes.md`
3. For every finding id, open the scaffold and confirm the disposition is true
   of the file as it now stands.
4. Where a Beta pushed back, adjudicate: is the pushback right? A disagreement
   resolved with evidence is a legitimate outcome; an unexamined one is not.

### What to return

`research/frontier-14-alpha-<your-group>-recheck.md`, with one line per finding id:

- `confirmed` — the fix is on disk and correct
- `not applied` — the notes claim a fix the file does not carry (name the file)
- `pushback accepted` — with your reasoning
- `pushback rejected` — with the evidence, and what must still change

Close with a per-pair verdict: `ready for splice` or `not ready` naming what
blocks it.

**No permission prompts of any kind**, including inside an `&&` chain.
