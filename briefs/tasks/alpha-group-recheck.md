> **Generic group task.** Your batches are named in the "This dispatch"
> section appended below — work from that, and write your report to the
> `research/{{run}}-alpha-<your-group>-…` path for your own group label.

# Group Alpha — re-check before the step-4 splice

You reviewed the batches named in your dispatch at step 3 and returned
numbered findings. The owning Betas have now applied, pushed back on, or
declared already-correct each one.

Re-check **from disk**, not from what they reported.

## Why this stage exists

An `applied` entry that changed nothing is the failure this catches, and it is
the only reason the fix pass can be trusted without a person reading it. A
Beta that reports a fix it did not make produces exactly the same result file
as one that did.

## What to do

1. Read your own report:
   `research/{{run}}-alpha-<your-group>-step3-scaffold-review.md`
2. Read each Beta's `## Step-3 fix pass` section in
   `research/{{run}}-batch-<i>.notes.md`
3. For every finding id, open the scaffold and confirm the disposition is true
   of the file as it now stands.
4. Where a Beta pushed back, adjudicate: is the pushback right? A disagreement
   resolved with evidence is a legitimate outcome; an unexamined one is not.

## What to return — BOTH halves, and the machine half is what gates

1. **The prose report** — `research/{{run}}-alpha-<your-group>-recheck.md`,
   one line per finding id:
   - `confirmed` — the fix is on disk and correct
   - `not applied` — the notes claim a fix the file does not carry (name the file)
   - `pushback accepted` — with your reasoning
   - `pushback rejected` — with the evidence, and what must still change

   Close with a per-pair verdict: `ready for splice` or `not ready`, naming
   what blocks it.

2. **UPDATE YOUR GROUP'S VERDICT FILE** —
   `research/{{run}}-alpha-<your-group>-step3-verdicts.json`. This is the ONLY
   artifact the closure gate reads (`tools/scaffold-verdicts.mjs
   --require-sufficient`); a prose "ready for splice" over a stale
   `insufficient` row holds the stage shut forever. That has happened: two
   groups confirmed every fix in prose, left their JSON at the review-time
   verdicts, and the gate re-raised findings that had been fixed for an hour.
   Per pair: flip the verdict to `sufficient` when you confirm it; keep it
   `insufficient` with the still-open `missing[]` rows when you do not. The
   file is your attestation — update it only to what you have verified from
   disk in THIS dispatch.

**No permission prompts of any kind**, including inside an `&&` chain.
