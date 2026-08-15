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
