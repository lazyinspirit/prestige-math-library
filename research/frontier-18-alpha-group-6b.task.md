> **Generic group task.** Your batches are named in the "This dispatch"
> section appended below — work from that, and write your report to the
> `research/frontier-18-alpha-<your-group>-…` path for your own group label.

# Group Alpha — step 6b adjudication, the batches named in your dispatch

The independent readers have reported. You adjudicate every finding they
raised for your batches, and you own the repairs.

## Inputs

- the reader report for each of your batches (findings `R<i>-…`, in the
  reader's output file under `research/frontier-18-dispatch/`)
- the items themselves, on disk
- `research/frontier-18-batch-<i>.proof-contracts.json`

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

## Output — TWO artifacts, and the machine half is what the ledger is audited against

1. **The prose report**, `research/frontier-18-alpha-<your-group>-6b.md`: per finding
   id, the adjudication and what you changed; the refuter findings and their
   dispositions; the risk reviews; and anything you could not check.

2. **`research/frontier-18-alpha-<your-group>-6b-findings.json`** — a JSON array,
   one row per adjudicated reader or refuter finding:

```json
{"id": "<item-id>", "verdict": "confirmed_fatal" | "confirmed_nonfatal" | "false_positive", "source": "<the finding's reference, e.g. R2-17>"}
```

   **Write it even if every verdict is `false_positive`.** `defect-ledger check`
   compares the confirmed-fatal count asserted here against the ledger rows
   caught at 6a/6b/6c, and the clause is adoption-triggered: if *no* group in
   the run writes this file the gate degrades to a note and the run's fatal
   count becomes unauditable — which is exactly how one group Alpha accepted 58
   fatal reader findings, wrote 13 ledger rows, satisfied every gate, and left
   the run's headline understating its own fatal count threefold. Once any group
   writes one, every group must.

   This file does not replace the ledger. A `confirmed_fatal` row here and its
   `research/defect-ledger.jsonl` row are still one act; this is what makes that
   act checkable.

**No permission prompts of any kind**, including inside an `&&` chain.
