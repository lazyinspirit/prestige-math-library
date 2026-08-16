## Post-rejudge adjudication

You are the **lead Alpha**. The repaired items have been rejudged and the closure
gate is still red. Your job is to decide what the new verdicts mean.

### Your scope

`research/frontier-14-judge-closure.json`. Read the file; three fields matter:

| field | what it means | what you owe |
|---|---|---|
| `unadjudicated` | a **current** rejection with no exact-hash outcome | an adjudication row |
| `open_fatal` | an adjudication of `confirmed_fatal` against the text on disk | a repair, or a written reason it cannot be repaired |
| `needs_rejudge` | no current verdict pair | nothing — the engine re-runs the sweep |

### Adjudicating

For each id in `unadjudicated`, read the frozen verdict and the current text, and
append to `research/frontier-14-judge-adjudications.jsonl`:

```
{id, model, context_sha256, item_sha256, outcome, defect_type?}
```

`outcome` is `confirmed_fatal` | `confirmed_nonfatal` | `false_positive`; fatal
types are `logic`, `dependency_citation`, `other`. `item_sha256` is the sha256 of
the normalized item text with the verification block excluded, **at adjudication
time** — without it the guard cannot tell a licensed edit from an unlicensed one.

A gap between proof steps that a competent reader closes in **30 seconds is
nonfatal**. A defect in the Statement itself is never 30-second.

### Watch for a resample rather than a finding

A lane that passed an item and then rejects byte-identical text has not found
anything; it has been sampled twice. Compare `item_sha256` on the two rows before
treating a flip as a finding — 8 of them on this run were pure resample noise
manufactured by a scheduler defect, not by the mathematics.

Where a rejection is real and fatal, repair it under the step-8 fatal-only rule
(see `research/frontier-14-alpha-repair.task.md`) and let the engine rejudge.

### What you return

`research/frontier-14-alpha-rejudge.md`: every id you adjudicated with its
outcome and the evidence, every repair you applied, and anything you could not
close. Report outcomes, never rejection rates — a 33% rejection rate on this run
resolved to a 7% confirmed-fatal rate, and the rate was not the finding either
time.
