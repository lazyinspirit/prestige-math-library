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


---

# This dispatch

## Step 8b — two items rejected by BOTH lanes after their step-8 repair

Your step-8 repairs were rejudged. Four converged to both-lane keeps, seven are
single-lane splits — and **two are rejected by both families after repair**.
Both-lane agreement converted at 10% in the main sweep versus 3.1% for splits, so
these two carry real probability of a residual defect.

**Baseline `pre-step8b` is recorded.** The fatal-only rule still binds: only a
`confirmed_fatal` row licenses an edit, every row carries `item_sha256` of the
pre-repair text, and `step8-guard --baseline pre-step8b` must pass.

### The two items, with what each judge actually says

**`thm-counting-lemma-for-a-fixed-graph`** — the item you repaired for the
candidate-set/host-set bookkeeping error.

- **terra:** "Step 1.1 assumes $h\ge1$, but the statement permits the empty finite
  graph $H$ on $[0]$; its choice of $\gamma$ divides by $2h$, so that stated case
  is not covered." → **division by zero at $h=0$.**
- **deepseek:** "`[L1]` misstates the typical-degree lemma as a uniform
  expected-degree bound over all large candidate sets; the lemma gives only
  separate per-candidate bounds."

**`cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field`** — the item
you repaired for false uniqueness.

- **terra:** "for every $n\ge1$ the evaluated equality alone does not determine
  $Q$ — false for the zero ring."
- **deepseek:** "Final sentence is false for $n=0$ when $R\to S$ is not
  injective: with $R=\mathbb Z$, $S=\mathbb Z/2$, $f=1$, $P=0$, $Q=2$ the
  evaluated equality holds but the conclusion fails." → **an explicit
  counterexample with concrete witnesses. Check it first; if it stands, the
  Statement is false as written.**

### What the pattern says, and what to do about it

Both repairs fixed the main argument and **neither re-checked the boundary
cases** — $h=0$, $n=0$, the zero ring, a non-injective structure map. That is the
`boundaries` row of the proof contract, and it exists precisely for this.

So: adjudicate these two, and then **check the boundary dispositions of the other
eleven items you repaired at step 8**. If the same gap is there, it is a defect
whether or not a judge happened to name it.

DeepSeek's counterexample is concrete. Verify it by computation before deciding
anything — if $P=0$ and $Q=2$ really do satisfy the evaluated equality over
$\mathbb Z\to\mathbb Z/2$, no repair to the proof will save the Statement and it
must be narrowed.

### Report

`research/frontier-13-alpha-a-step8b.md`: adjudications with evidence, repairs,
the boundary re-check across all thirteen step-8 items, and `step8-guard
--baseline pre-step8b` output verbatim. Name the rejudge targets.
