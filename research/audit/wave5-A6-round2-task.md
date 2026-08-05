# Wave 5, A6 round 2 — three duties left undone

You are Alpha for **wave 5**. Your A6 dispatch exited 0 after 37 minutes and your
report is substantial, but A6's own gate table refuses the step: **11 of 14 pass,
3 fail**, and all three are A6 duties of yours. Nothing here disputes the
mathematics you did — the refuter lanes ran, and 27 finished. What is missing is
the recording.

Verified from disk, not from a truncated halt record.

## 1. `risk-report --require-reviewed`: 131 items lack a `risk_review`

**101 CRITICAL + 30 HIGH.** Every high/critical item needs a complete Alpha
`risk_review` before A7; the gate requires `status: "complete"`, a non-empty
`reviewer` and non-empty `notes`.

This is routine, not a new bar: **wave 3 recorded 174/174 and wave 4 recorded
77/77. Wave 5 currently has 0/155.** The shape wave 4 used, per item:

```json
"risk_review": {
  "status": "complete",
  "reviewer": "Audit-Alpha (claude-opus-5), wave 5 A6, 2026-08-05; independent read-only DeepSeek V4 Pro refuter lanes",
  "notes": "<what was actually read, by which lane, and what adjudication concluded>"
}
```

Write it into each item's entry in the **batch** contract files
(`research/audit/wave5-<batch>.proof-contracts.json`); the orchestrator re-merges.

**The notes must describe what you actually did.** You dispatched 27 refuter
lanes, not 131. Where an item was read by a named lane, say which and what the
adjudication concluded. Where it was covered by your own reading rather than a
refuter, say that instead. Do not write a uniform sentence across 131 items that
implies refuter coverage you did not commission — an inaccurate reviewer note is
worse than a missing one, because it survives as evidence. If some of the 131
genuinely still need a refuter reading, dispatch more (`--role audit-refuter`,
DeepSeek, tool-less — assemble context into a `--task` file) and say so.

## 2. `depcheck`: 11 items published carrying no verification stamp

    cex-nested-open-intervals-empty
    cor-components-of-open-subsets-of-rn-are-polygonally-connected
    ex-countability-profile-of-omega-one
    ex-nested-intervals-single-point
    ex-the-particular-point-topology-in-the-separation-hierarchy
    fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets
    lem-ordinal-order-topology-is-t3
    lem-uniform-metric-on-a-function-space
    rem-function-space-conventions
    thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma
    thm-the-exponential-law

These are repairs made this wave whose stale stamps were correctly deleted and
never replaced. `gates.mjs` is explicit that A4-created unaudited repairs are
**A6's to certify** — that is this step, and it is why A6 runs plain `depcheck`
while A4 runs it with `--pending-audit-ok`.

**This is exactly what left wave 4 broken**: the same class, unresolved at the
terminal step, blocked wave 5's A0 and cost a whole extra Alpha cycle to clear.
Do not leave it a second time.

For each: dispatch a **certifier** (read-only `claude-sonnet-5`, has web) to read
the current text independently — you authored these repairs and may not certify
your own. Where your reading and the certifier's agree, write
`verification.verified` with `scope: published-audit` and `delegated_by: owner`.
Never write `verification.audited`. **Do not write `verification.judge`** — report
the exact rejudge list and its frozen contexts, and the orchestrator runs the
sweep and `apply-judge-stamps`.

## 3. `genrisk`: 3 load-bearing ai-generated seeds lack a disposition

    cex-strictly-decreasing-gaps-no-limit
    cex-unbounded-with-convergent-subsequence
    ex-contractive-sequence-fixed-point

Disposition each in the order the workflow gives: retag → restate → unfold →
narrow → verified-generated (counterexample-searched, refuter-read, judged). A
seed needing a deletion, id change or reading-order change is `owner-queue` with
evidence, not a repair you make.

## Also outstanding from your own round-1 report

- `rem-euclidean-topology-dictionary` cites Munkres' *Topology* but links his
  Wikipedia **biography**. You flagged it; nothing has repaired it. Decide whether
  a citation-precision repair is licensed here and act or record why not.
- You noted the five well-definedness lemmas carry `ai-generated` proofs and sit
  in the CRITICAL set needing refuter readings before A7. Fold that into item 1.

## Report

Append a "Round 2" section to `research/audit/wave5-alpha.md`. Take a `touchlog`
baseline before your first edit. When you are done the orchestrator re-merges the
contracts and re-runs the whole A6 gate table, so a partial pass will surface.
