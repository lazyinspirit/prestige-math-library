# Contract-rework certification, run `frontier-17`

A Beta has rewritten a batch's generated boundary worksheets. The ledger row
is in `research/defect-ledger.jsonl` for this run; the Beta's report is the
newest `beta-contract-rework-*.result.json` in `research/frontier-17-dispatch/` —
read both first. No author certifies its own repair: you are the
certification.

1. **Sample-read for substance, not presence.** Pick at least 12 of the
   rewritten items across theorem/lemma/example kinds, including several the
   Beta changed between `checked` and `not_applicable`. For each sampled row,
   open the ITEM and verify the row is true of its text: a `checked` row's
   cited step actually discharges that case; a `not_applicable` reason is
   about the mathematics of that axis, not a restatement of the title. The
   defeated shape was `"<title>: <stock clause> for <statement>"` — if any
   rewritten row still reads as generated, the rework failed: say so and leave
   the ledger row open with why.
2. Re-run the gates the rework must satisfy (repo root): the merge,
   `boundary-audit --fail-on-contradicted --fail-on-template`, and
   `proof-contract --strict`. All must exit 0.
3. If the Beta's report escalated a case its honest row could not cover, read
   that item yourself: a real gap in a proof is a fatal finding — record it in
   your report and in `research/defect-ledger.jsonl` (new row, one act); do
   NOT edit item text at this stage.
4. **On a pass: close the ledger row IN PLACE** — one defect, one row: set its
   `disposition` to `fixed`, add closing evidence naming your sample size and
   the gate receipts, then run `node tools/defect-ledger.mjs render` (a hand
   edit stales the view fingerprint). In the same act, close any matching
   obligation row with `node tools/obligations.mjs close --run frontier-17 --id
   <id> --evidence "<sample size, gate receipts, certifying result file>"`.
   On a fail: leave both open, with your reason appended to the ledger row's
   `subclass_note`.

Your report: the sample list, per-item verdicts, gate outputs, and the row's
final state.

**No permission prompts of any kind**, including inside an `&&` chain.
