# Wave 4, A8 round 2 — close the tail

You are Alpha for **wave 4**, resuming at **A8**. Wave 4 reached A10 and paused
for the owner with two things unfinished. The owner has now asked for both to be
closed before wave 5 may start. Everything below is measured from disk at
`fcc99b5`; verify it yourself rather than trusting this summary.

**Your model changed.** You are `claude-opus-5`, as before, but the lanes you
dispatch are new (owner, 2026-08-05) — read your brief's routing rule. In short:
`--role certifier` is read-only `claude-sonnet-5`; `--role audit-refuter` is
read-only **DeepSeek V4 Pro and is tool-less**, so you must assemble the item
text and its cited dependencies into a `--task` file or the dispatch is refused.
Audit-Beta is now `claude-opus-5` — the same model as you — so your agreement
with a Beta determination is weak corroboration. The DeepSeek refuter is the only
cross-family reader you have; use it more than feels necessary.

## Job 1 — adjudicate 10 outstanding judge rejections

These are the current-verdict rejections in `research/audit/wave4-judge.jsonl`
with no matching row in `research/audit/wave4-judge-adjudications.jsonl`. They
hold wave 4's coverage receipt open. Adjudication is per `(id, model)`: a second
model's rejection on an already-adjudicated item is still open.

| model | id |
|---|---|
| claude-sonnet-5 | `cor-cardinal-absorption` |
| claude-sonnet-5 | `def-cardinal-arithmetic` |
| claude-sonnet-5 | `thm-cardinal-arithmetic-agrees-with-finite-counting` |
| claude-sonnet-5 | `thm-konig` |
| claude-sonnet-5 | `thm-cardinal-power-set-and-cantor` |
| claude-sonnet-5 | `def-infinite-cardinal-sum-and-product` |
| claude-sonnet-5 | `thm-compact-iff-fip` |
| claude-sonnet-5 | `def-locally-compact-space` |
| deepseek-v4-pro | `fs-local-compactness-is-hereditary` |
| deepseek-v4-pro | `ex-compactness-in-the-standard-topologies` |

For each: read the frozen verdict and its `reason`, read the **current** disk
text, and record exactly one row in
`research/audit/wave4-judge-adjudications.jsonl`:

    {"id", "model", "context_sha256", "outcome", "item_sha256", "at", "defect_type"?}

`outcome` is `confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`;
`defect_type` is `logic`, `dependency_citation`, or `other` when fatal.
`item_sha256` is required (R1) — the sha256 of the normalized item text with the
verification block excluded, **as it stands before any edit you make**.

**A8 is fatal-only (R1).** Only `confirmed_fatal` licenses touching an item.
A `confirmed_nonfatal` or `false_positive` closes on the ledger row with **no**
content, frontmatter, contract, impact or judge mutation. Your 30-second rule
applies to the classification; the polish it would once have permitted is
withdrawn at A8. Fatal repairs are uncapped.

Six of these ten allege a **dependency-citation** defect — a cited item not
supporting the step that leans on it. That is one of the two classes that
accounts for nearly every real defect in this library. Open the cited target and
read its actual Statement before deciding; do not adjudicate from the reason text.

## Job 2 — five items are published carrying NO verification stamp

    def-cofinality
    ex-compactness-in-the-standard-topologies
    ex-the-alexander-subbase-lemma-applied-to-a-closed-interval
    lem-successor-cardinal-exists
    thm-locally-compact-hausdorff-basics

Each had exactly one `confirmed_fatal` adjudication in wave 4's first A8 round.
You repaired them and correctly deleted the stale `verification.verified` and
`verification.judge` stamps. The replacements were never written: wave 4's A8
gate caught this and halted, the wave was resumed at A9 by owner instruction, and
no step after A8 runs `depcheck`. `depcheck.mjs` now reports
`published-unaudited` on all five, which is a hard error and is what blocks
wave 5's A0.

For each, from disk:

1. Confirm the repair is complete and correct as it now stands. If it is not,
   finish it — the original `confirmed_fatal` licenses the edit.
2. Dispatch a **certifier** (`--role certifier`) to read it independently. You
   authored these repairs, so you may not certify them yourself. The certifier
   has web access and must check any source-backed claim against its source.
3. Report which items are ready for a targeted paired rejudge, and the exact
   frozen context each needs. **Do not write `verification.judge` yourself** —
   the orchestrator runs the rejudge and `apply-judge-stamps`.
4. Where your reading and the certifier's agree the item is sound, record
   `verification.verified` with `scope: published-audit` and
   `delegated_by: owner`. Never write `verification.audited`.

If a repair needs a debatable restatement, a new theorem, a deletion, an id
change, or a reading-order change, it is not delegated: leave it and report it
for the owner queue with evidence.

## Report

Write `research/audit/wave4-A8-round2.md`: every adjudication with its outcome
and the evidence, every repair with its before/after, the certifier verdicts,
the exact rejudge list, and anything for the owner queue. Take a `touchlog`
baseline before your first edit. Be concise and factual.
