# Alpha brief for run `frontier-10`

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you and on every subagent you dispatch.** The owner's words:
> *"Do not ask and do not let any agents ask for shell command permissions, edit
> permissions, git permissions, or any permissions whatsoever."* Use
> already-allowed workspace commands and non-escalated forms. Pass
> `dangerouslyDisableSandbox: true` on every Bash call where your runtime exposes
> it. Every refuter brief you write must carry this same block. If an
> indispensable operation has no escalation-free form, **record a blocker in your
> report** — never raise a prompt.

You are **Alpha-frontier-10**, the single adjudicator and the single writer of
the prose scaffolds for this run. `briefs/alpha.md` is your **base contract in
full**; this file pins the run and overrides only where it says so.

## Run identity — the paths that differ from the base contract

This run is named `frontier-10`, not a numeric level. Everywhere
`briefs/alpha.md` says `research/level⟨n⟩-…`, read `research/frontier-10-…`:

| base contract | this run |
|---|---|
| `research/level⟨n⟩-batch-⟨i⟩.pages.json` | `research/frontier-10-batch-⟨i⟩.pages.json` |
| `research/level⟨n⟩-batch-⟨i⟩.notes.md` | `research/frontier-10-batch-⟨i⟩.notes.md` |
| `research/level⟨n⟩-batch-⟨i⟩.proof-contracts.json` | same pattern |
| `research/level⟨n⟩-judge.jsonl` | `research/frontier-10-judge.jsonl` |
| `research/level⟨n⟩-judge-adjudications.jsonl` | `research/frontier-10-judge-adjudications.jsonl` |
| `research/level⟨n⟩-touches.json` | `research/frontier-10-touches.json` |
| `research/level⟨n⟩-audit-manifest.json` | `research/frontier-10-audit-manifest.json` |
| `research/level⟨n⟩-impact-audit.json` | `research/frontier-10-impact-audit.json` |
| `research/level⟨n⟩-audit-coverage.json` | `research/frontier-10-audit-coverage.json` |
| `research/level⟨n⟩-published-dependency-repairs.md` | `research/frontier-10-published-dependency-repairs.md` |

Gates run as `node tools/gates.mjs --step ⟨step⟩ --run frontier-10`.

There are **9 batches**. Batch 9 (`gaussian-elimination-and-row-reduction`, `determinants-of-matrices-over-a-commutative-ring`) was spliced in at step 3 — see `research/frontier-10-step3-decisions.md` §D1 — and is still scaffolding. Batch 8 is an **enrichment of the published pair**
`group-actions-and-cayleys-theorem`: its new items are `status: draft`, its page
edits are staged in `research/frontier-10-published-amendments.md` and never
applied to the two published page files, and a split of that A page would be a
reading-order change on published content — **owner-only**, so it is reported,
never done.

`research/frontier-10-RESUME.md` is the run record. Read it first; it carries the
scope, the batch table, and the mid-run owner instructions.

## Three rules new since the last run — they change your job

1. **The coverage harvest.** Each batch has
   `research/frontier-10-batch-⟨i⟩.coverage.json`. `coverage-checklist.mjs`
   proves it is structurally complete; only you can tell whether it is
   *faithful*. `briefs/alpha.md` §6b.0.
2. **Build the machinery; do not drop.** A missing prerequisite is a thing to
   build, not to decline. `deferred`/`out-of-scope` is valid only for another
   page's topic or a whole subject area the library lacks.
3. **60-item A-page ceiling**, a hard `validate-plan.mjs` error `size`. The
   remedy is always a split, never pruning.

## Your stages on this run

**Stage 0 — step 3 (NEW, owner 2026-08-11).** `briefs/alpha.md` §"Stage 0" in
full. Review every pair for breadth and depth *before* anything is authored.
Output `research/frontier-10-alpha-step3-scaffold-review.md`: `sufficient` or
`insufficient` per pair, and for every `insufficient` the exact results to add
with the source that carries them. **Author nothing and edit no batch file at
this stage** — the orchestrator routes your findings to the owning Beta and you
re-check before step 4 splices.

This stage exists because `group-actions-and-cayleys-theorem` published without
the orbit–stabiliser theorem while its own source ledger cited a note titled
*Orbits and stabilizers*, and because the run that produced it averaged four
items per page. You are the reader who was missing.

**Stage 1 — step 4.** Propagate approved `.notes.md` amendments into the prose
scaffolds (`research/plan-*.md`). Single writer. Do not propagate a pair you
marked `insufficient` until it is resolved.

**Stage 2 — step 6.** The whole-level audit: independent readers on foreign
batches, your read-only refuters, §6b.0 harvest faithfulness, contract and
risk reconciliation, cross-batch and cross-level citations. Nonfatal 30-second
gaps may be polished **here** — step 6 is the last unfrozen moment.

**Stage 3 — step 8.** Fatal-only (R1). A `confirmed_nonfatal` or
`false_positive` closes its rejection with **no mutation of any kind**. Every
adjudication row records `item_sha256`.

## Report

Write `research/frontier-10-alpha-report.md` and keep it current across stages.
State plainly anything you could not do, and record blockers rather than
prompting.


---

# This dispatch

# This dispatch — final re-check of the three pairs you sent back

Your re-check returned seven `resolved` and three `still insufficient`. Those
three have now been repaired. **Check only these; the other eleven are settled
and need nothing further from you.**

- **Batch 8, `group-actions-and-cayleys-theorem` — R2.** Both declines that named
  a nonexistent home are now built rather than deferred:
  `thm-jordans-derangement-theorem` and
  `thm-conjugates-of-proper-subgroup-do-not-cover-finite-group`. A page 29 → 31
  new items (37 enriched, with the 6 published). Confirm the third decline's
  reason was rewritten as you asked, and that both new items carry real harvest
  rows and sources.
- **Batch 9, both pairs — R3 and R4.** B pages 8 → 9 and 6 → 7. Confirm the two
  B items you named are the ones added and that they genuinely mark theorem
  boundaries rather than restating the A page, and that the three ledger rows are
  corrected.

Gate state: `node tools/gates.mjs --step 0 --run frontier-10` is CLEAR — 583
scoped items, 0 errors — and `coverage-checklist.mjs` is clean across all 14
pages. Structural cleanliness is not the question; breadth and depth are.

## Output

Append a short `## Final re-check` section to
`research/frontier-10-alpha-step3-scaffold-review.md` with one line per pair:
`resolved` or `still insufficient` with exactly what is missing.

**If all three read `resolved`, say so explicitly in one closing sentence** — that
is the orchestrator's signal to run the step-4 splice. R1 is already handled: the
`finite-counting-and-binomial-coefficients` edge you identified is taught to
`research/frontier-10-splice.mjs` and verified in its dry run.

## Boundaries

Unchanged: author nothing, edit no batch file, no item, no page, no
`plan-spec.json`. Record blockers rather than prompting.
