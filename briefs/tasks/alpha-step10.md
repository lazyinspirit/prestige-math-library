# Step 10 — the owner report, run `{{run}}`

Draft the complete account of this run for the owner. Nothing in this run is
`status: published`; flipping status is the owner's action alone.

Model it on `research/frontier-14-step10-report.md` and
`research/frontier-13-step10-report.md`, both owner-accepted, and on the
previous run's report for what the machinery section should look like.

**You author no defect-ledger rows.** Every earlier stage wrote its rows in
the act of disposing; you run `node tools/defect-ledger.mjs stats` and
`render`, and the `check` gate holds if a stage deferred its duty here.

## Required content

**Every fatal error found and fixed**, grouped two ways:

- by **defect type**: invalid inference, incorrect dependency citation, false
  or overstrong statement, missing hypothesis or choice scope, invalid witness
- by **location**: title/Statement, proof, Facts, Remark, page prose

Each naming the item id and its disposition. Evidence is the Beta, Alpha and
judge ledgers. Concision must not omit a fatal defect.

## Also required

- what was built: pairs, items, pages, judge verdicts, nulls
- **the judge comparison**: agreement, model-only rejections, nulls, and
  owner-confirmed fatal findings. Report what each lane found *alone*.
  DeepSeek is the only cross-family reader in this run — Terra shares a family
  with the authors and with the Alpha that adjudicated it, so Terra/Alpha
  agreement is not corroboration and must not be reported as if it were.
- **items repaired more than once** — the twice-touched escalation — with your
  reading of whether each converged or is suspect
- findings about the machinery rather than the mathematics, which outlive the
  run: gates that fired late, a stage that could not say no, a receipt whose
  baseline was defaulted, a repair loop that did not converge
- the verification state, as a gate table
- **every caveat**: a gate whose scope was thin, a receipt whose baseline was
  taken late, anything you could not verify. A report that hides a weak gate is
  worse than one that names it.
- what you recommend the owner read personally before publishing

## Report outcomes, never rates

A 41% judge rejection rate yielded a 2.7% confirmed-fatal rate on one run. A
rate reads as a quality signal and is not one. Report confirmed outcomes and
what changed on disk.

## Output

`research/{{run}}-step10-report.md`.

**No permission prompts of any kind**, including inside an `&&` chain.
