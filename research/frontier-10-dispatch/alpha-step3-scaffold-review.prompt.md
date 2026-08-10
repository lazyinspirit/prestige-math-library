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

# This dispatch — Stage 0, step 3: scaffold breadth and depth review

Review **batches 1 through 8** (12 A/B pairs). Batch 9 was spliced in at step 3
and is still scaffolding; it gets its own review when it lands, so ignore it.

`briefs/alpha.md` §"Stage 0" is your instruction set in full. Output
`research/frontier-10-alpha-step3-scaffold-review.md`.

## Read first

- `research/frontier-10-RESUME.md` — the run record
- `research/frontier-10-step3-decisions.md` — my adjudications, below
- per batch: `research/frontier-10-batch-<i>.{pages.json,notes.md,coverage.json}`

## What step 1–2 produced

12 A pages, **508 items to author**, 39 sources, 720 harvested headings all
disposed: 508 `included`, 115 `inline`, 26 `already-published`, 40 `deferred`,
31 `out-of-scope`. Step 2 gates clean.

For calibration: the previous run shipped 83 items across 20 pages and produced
the two thin pairs that caused this stage to exist. This one is far denser. Your
job is not to celebrate that — it is to find what is *still* missing.

## Things I am routing to you specifically

1. **`categories-functors-and-natural-transformations` sits at exactly 60
   items** — the ceiling, to the item. Beta-7 states unprompted that "no
   harvested result was removed merely to hit that number" and pre-specifies a
   contingency split after `prop-fully-faithful-functors-reflect-isomorphisms`
   into `categories-morphisms-and-functors` + `natural-transformations-
   equivalences-and-two-categories`. **Verify the claim, do not accept it.** If
   your review adds even one A item to that pair, the split fires — say so
   explicitly, with the cut.
2. **The 71 declines** (40 `deferred` + 31 `out-of-scope`) are where the old
   failure would hide. Since 2026-08-11 a missing prerequisite must be *built*,
   not declined, so a decline is only valid for another page's topic or a whole
   subject area the library lacks. Batch 3 flags its own most-challengeable
   declines; check those first, then the rest.
3. **Batch 8 is the enrichment** of the published `group-actions-and-cayleys-theorem`
   pair, the page the owner flagged. It adds 27 A + 12 B items to a pair that had
   6 + 0, including `thm-orbit-stabilizer`, `thm-class-equation`,
   `thm-cauchys-theorem-for-finite-groups` and `thm-cauchy-frobenius-orbit-counting`.
   The owner asked for "the orbit stabilizer theorem and its important
   consequences and examples" — judge whether the consequences are actually
   complete, and whether the 12 B items really mark the theorems' boundaries.
4. **Batch 1's `symmetric-groups-and-the-sign-homomorphism` has only 13 A
   items**, the smallest A page in the run, and batch 9 now depends on it for the
   Leibniz determinant. Check it carries enough: parity well-definedness, sign as
   a homomorphism, transpositions generating, cycle structure, conjugacy by cycle
   type.
5. **Batch 5 authored no scaffold for its change-of-variables material** pending
   batch 9's determinant interfaces. Review what it *did* scaffold; treat the
   determinant-dependent items as deferred-to-batch-9, not as missing.

## Boundaries

Author nothing. Edit no batch file, no item, no page, no `plan-spec.json`. You
return findings; the orchestrator routes them to the owning Beta and you
re-check before step 4 splices. A `sufficient` verdict on a pair is a statement
that you would be content to see it published.
