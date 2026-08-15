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

## Step 8c — one remaining split rejection on `thm-counting-lemma-for-a-fixed-graph`

Third round on this item. Rounds 1 and 2 fixed the candidate/host bookkeeping,
the $h=0$ division by zero, and the inflated `[L1]` restatement. Terra now keeps
it. **DeepSeek still rejects, on a defect neither earlier round touched:**

> "The statement never introduces or quantifies a host graph $G$, yet the
> conclusion maps into $V(G)$ and requires edges of $G$; $G$ is used outside it."

**The orchestrator verified this from the Statement and it is correct.** The text
reads:

> "Let $H$ be a finite simple graph on labelled vertices $[h]$, and let
> $0<\eta<1$. … Let $W_1,\ldots,W_h$ be nonempty vertex sets, not necessarily
> distinct, with $|W_i|\ge N$. … Then at least $c\prod|W_i|$ maps
> $\phi:[h]\to V(G)$ with $\phi(i)\in W_i$ carry every edge of $H$ to an edge of
> $G$."

$G$ occurs twice in the conclusion and is introduced nowhere. "Vertex sets" names
no graph, and $\gamma$-regularity of $(W_i,W_j)$ presupposes a graph in which
density is measured. This is an **unbound variable in a Statement**, not a proof
gap — the judges read Statements, and this one refers to an object outside its own
scope.

This is a single-lane rejection, and splits converted at only 3.1% in the main
sweep — but adjudicate it on the mathematics, not the rate. If you agree it is
`confirmed_fatal`, the repair is to bind $G$: introduce a finite simple graph $G$
and place the $W_i$ inside $V(G)$, so regularity, the codomain and the edge
condition all refer to it.

**Check the consumers before you edit.** `thm-graph-removal-lemma` and
`thm-induced-counting-lemma-for-regular-pairs` both cite this item; last round the
obvious narrowing would have exported a hole into them. Confirm the bound form
still gives them exactly what they cite.

**Baseline `pre-step8c` is recorded.** Fatal-only still binds: only a
`confirmed_fatal` row licenses an edit, the row carries `item_sha256` of the
pre-repair text, and `step8-guard --baseline pre-step8c` must pass. If you judge
it `false_positive` or `confirmed_nonfatal`, **close the row and change nothing.**

Report: `research/frontier-13-alpha-a-step8c.md` — verdict, evidence, any repair,
consumer check, guard output, rejudge target.
