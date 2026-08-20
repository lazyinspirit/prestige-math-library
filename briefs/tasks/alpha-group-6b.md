> **Generic group task.** Your batches are named in the "This dispatch"
> section appended below — work from that, and write your report to the
> `research/{{run}}-alpha-<your-group>-…` path for your own group label.

# Group Alpha — step 6b adjudication, the batches named in your dispatch

The independent readers have reported. You adjudicate every finding they
raised for your batches, and you own the repairs.

## Inputs

- the reader report for each of your batches (findings `R<i>-…`, in the
  reader's output file under `research/{{run}}-dispatch/`)
- the items themselves, on disk
- `research/{{run}}-batch-<i>.proof-contracts.json`

## What to do

1. For each reader finding, adjudicate from disk: **confirmed fatal**,
   **confirmed nonfatal**, or **false positive**, with evidence.
2. Apply repairs for confirmed findings. Your full repair licence is open here
   (owner, 2026-08-16): rewrite part of a proof, write a whole proof whose
   construction rather than its wording is wrong, correct a false
   Statement/Definition/title, or add intermediate lemmas. If none closes a
   defect honestly, narrow or withdraw the claim; never inflate a dependency.
   This is step 6 — cosmetic polish and 30-second-gap tidying belong here,
   before the text freezes. After step 7 they do not.
3. Dispatch read-only proof-refuter subagents for the proof-bearing items in
   your batches, held to the judges' skeptical standard: report only a
   concrete false claim, unlicensed inference, missing hypothesis, or
   inaccurate citation, and inspect the supplied dependency before alleging it
   is too weak. **A refuter never writes content.** You adjudicate every
   finding.
4. Write a `risk_review` disposition for every high/critical item that
   `risk-report.mjs` routes. Alpha alone may write these, and 6b is where they
   are written.
5. Re-check the harvest for **faithfulness** — `coverage-checklist.mjs` is
   structural. Open sources and verify locators by extracting text, never by
   an HTTP status.
6. **Retag provenance on anything you materially altered**, and independently
   probe an AI-generated claim, witness or refutation for counterexamples when
   its truthfulness is in doubt. Repairing a proof does not establish the
   Statement.
7. **Ledger duty:** every confirmed-fatal disposition writes its row in
   `research/defect-ledger.jsonl` in the same act, via
   `node tools/defect-ledger.mjs append`. Disposition and row are one act, and
   the `check` gate enforces it later.

## Output

`research/{{run}}-alpha-<your-group>-6b.md`: per finding id, the adjudication
and what you changed; the refuter findings and their dispositions; the risk
reviews; and anything you could not check.

**No permission prompts of any kind**, including inside an `&&` chain.
