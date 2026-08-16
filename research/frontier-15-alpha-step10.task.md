# Step 10 — the owner report, run `frontier-15`

Draft the complete account of this run for the owner. Nothing in this run is
`status: published`; flipping status is the owner's action alone.

Model it on `research/frontier-14-step10-report.md` and
`research/frontier-13-step10-report.md`, both owner-accepted.

**You author no defect-ledger rows.** Every earlier stage wrote its rows in
the act of disposing; you run `node tools/defect-ledger.mjs stats` and
`render`, and the `check` gate holds if a stage deferred its duty here.

## Required content

**Every fatal error found and fixed**, grouped two ways:

- by **defect type**: invalid inference, incorrect dependency citation,
  false or overstrong statement, missing hypothesis or choice scope,
  invalid witness
- by **location**: title/Statement, proof, Facts, Remark, page prose

Each naming the item id and its disposition. Evidence is the Beta, Alpha
and judge ledgers. Concision must not omit a fatal defect.

## Also required

- what was built: pairs, items, pages, judge verdicts, nulls
- **items repaired more than once** — the twice-touched escalation — with
  your reading of whether each converged or is suspect
- findings about the machinery rather than the mathematics, which outlive
  the run. This run is the engine's first: its step-0 findings (the
  never-dispatched drift review; the silent stale-ledger path in `plan
  --force`; the §II.8 route drift that removed a pair from scope) belong in
  this section with whatever the run adds to them.
- the verification state, as a gate table
- **every caveat**: a gate whose scope was thin, a receipt whose baseline
  was taken late, anything you could not verify. A report that hides a weak
  gate is worse than one that names it.
- what you recommend the owner read personally before publishing

## Report outcomes, never rates

A 41% judge rejection rate yielded a 2.7% confirmed-fatal rate on
frontier-13. A rate reads as a quality signal and is not one. Report
confirmed outcomes and what changed on disk.

## Output

`research/frontier-15-step10-report.md`.

**No permission prompts of any kind**, including inside an `&&` chain.
