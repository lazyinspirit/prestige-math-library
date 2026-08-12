# frontier-11 — Alpha step 8, round 2: two items still split after rejudge

You are **Alpha on run `frontier-11`**. Your four step-8 fatal repairs were
rejudged. **Two now pass both lanes and are closed:**
`def-path-polygonal-length-and-rectifiability-in-rn` and
`thm-arc-length-is-invariant-under-monotone-reparametrization`.

**Two are still split — Terra rejects, DeepSeek passes — on the REPAIRED text:**

1. `thm-rectifiable-iff-coordinate-functions-have-bounded-variation`
   (`item_sha256` d76f377c3a…)
   > Step 1.2 invokes `Var(gamma_j)` before assuming or proving that `gamma_j`
   > has bounded variation. The cited definition…

2. `thm-extremal-graph-supersaturation` (`item_sha256` 05bca753de…)
   > Step 2.1 concludes that more than `ex(m,H)` edges forces a copy of `H`, but
   > it cites only step 1.1 and given. This…

## What is required

**A paired pass needs BOTH lanes.** DeepSeek passing does not refute Terra — the
passing lane may simply have missed it. Adjudicate each from disk against the
current text, not against the pre-repair text.

**R1 still governs, and fatal repairs are deliberately uncapped.** A proof that
keeps yielding real fatal defects is either converging toward correctness or is
actually false, and both must run to conclusion. So:

- `confirmed_fatal` → repair, and the item rejudges again. That is expected and
  permitted. **Do not trim or weaken a claim merely to satisfy a lane** — if the
  honest resolution is that the Statement is too strong, narrow it deliberately
  and say so.
- `confirmed_nonfatal` or `false_positive` → **change nothing at all.** The
  30-second rule applies: if a competent reader closes the gap in 30 seconds it
  is nonfatal, even though Terra rejected it.

Both complaints have the same shape — *a step using something its cited facts
have not established*. That is the citation-licensing class: **fatal** when the
citation is genuinely false or the step truly has no licence, **nonfatal** when
the fact is faithful and the reader must connect it. Rule on which each is, with
the disk evidence.

## Twice-touched

Both items have already been repaired once at step 8, and `touchlog` now reports
**4 items repaired more than once** in this run. A second repair puts these in
the twice-touched escalation. It is **advisory, not blocking** — but state
explicitly in your report if you repair either again, so it reaches the step-10
rundown.

## Ledger

Append to `research/frontier-11-judge-adjudications.jsonl`, same schema:
`{id, model, context_sha256, outcome, defect_type?, item_sha256}`. `item_sha256`
is mandatory and must be the **pre-edit** hash. A fresh `pre-step8b` touchlog
baseline is already taken and `step8-guard` will be run against it.

## Output

`research/frontier-11-alpha-step8b.md`: your ruling on each with evidence, what
you changed if anything, whether either is now twice-touched, and the rejudge
list. If you rule both nonfatal, say plainly that the level closes with two
Terra-only rejections standing, adjudicated — that is a legitimate outcome under
the 30-second rule and it belongs in the step-10 report.

No permission prompts. You have web access.
