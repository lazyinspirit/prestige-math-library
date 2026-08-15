# frontier-13 — Step 6b: Alpha adjudicates the independent readers' findings

Seven independent readers audited content they did not author and returned **~19
fatal findings**. You adjudicate the ones in your batches, from disk.

## Hard rules

- **No permission prompts of ANY kind**, from you or any subagent; no segment of
  an `&&` chain may raise one. If blocked, **record a blocker**.
- You **may** repair items in your own batches — this is the step where Alpha
  applies fixes. Do not touch another group's batches, `research/plan-spec.json`,
  or any published item outside the narrow obvious-published-dependency
  delegation.
- Write `research/frontier-13-alpha-<g>-6b.md`.

## Adjudicate each finding: confirmed / refuted / nonfatal

**A reader finding is not a defect until you confirm it.** This run has already
produced two confident findings that were wrong — a source reported 404 that
returns 200 and 9.4 MB, and a group's own hereditary-dependency finding that it
withdrew after checking the batch instead of its prior sentence. Open the cited
item and the cited dependency and read both.

For each finding record:

- `confirmed_fatal` — a concrete false claim, unlicensed inference, missing
  hypothesis, or inaccurate citation. **Repair it**, then state exactly what
  changed.
- `confirmed_nonfatal` — real but closable by a competent reader in 30 seconds.
  Polish it here if cheap; step 8 will not permit it later.
- `false_positive` — the reader is wrong. Say why, with the evidence.

## The dominant class this run produced

Ten of the nineteen are **an inflated dependency restatement**: the `[F#]`/`[L#]`
text claims more than the cited item's Statement says — an enlarged domain, a
dropped hypothesis, a strengthened conclusion — and a numbered step then leans on
the inflated version.

The repair is **never** to inflate the citation further or add an unused dep.
It is one of: restate the dependency faithfully and add the inline steps that
close the gap; change the proof strategy; or narrow the claim. If the honest
restatement does not license the step and no inline derivation closes it, **the
Statement is wrong and must be narrowed** — say so plainly rather than patching.

## Also yours

- **Titles and Statements against proofs.** Readers flagged false statements and
  false titles. The judges read Statements and cannot see a false title, so
  anything surviving here reaches step 7 intact.
- **`risk_review` dispositions.** `risk-report` routed CRITICAL and HIGH tier
  items in your batches; each needs your recorded disposition before the level
  can close.

## Report

Per finding: reader id, item, verdict, evidence, and what you changed. Close with
a per-page verdict and the count you adjudicated. Re-run the batch-scoped gates
after any repair and give their output.
