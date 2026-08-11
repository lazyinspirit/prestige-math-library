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

# This dispatch — step 9: the scope-denial sweep

Steps 0–8 are complete and every gate is green. This step finds a defect class no
gate can see: a **claim that was true when written and that this run has since
falsified**.

## Why this exists

A scope-denial claim — "the library does not develop X", "no result here
establishes Y", "this is the only page treating Z" — changes no file when it
becomes false. Every gate passes forever. Only this sweep finds it, and this run
is unusually likely to have created some: it added **583 items across 14 A/B
pairs**, spanning determinants, category theory, Ramsey theory, plane graphs,
polynomial rings, change of variables and Riemann–Stieltjes integration, plus a
**re-home** that moved two items from order 203 to order 46.

## Method — grep is the ENTRY POINT, never the sweep

Negation is carried by many words: *neither, no item, lacks, absent from, silent
on, nowhere, not developed, does not appear, only page, first, unique to, beyond
scope, not available, we do not*. Grep to find candidates, then **read each in
context and judge it against the current corpus**, because grep cannot see a
false claim phrased in words you did not search for.

Check in particular:

1. **Published pages that predate this run** claiming the library lacks something
   this run has now built. Determinants and category theory are the highest risk:
   both were entirely absent before today.
2. **Order-relative claims** — "the earliest page to…", "not available at this
   point in the reading order". The re-home moved
   `def-finite-sum-in-a-commutative-monoid` and
   `lem-finite-sum-reindexing-and-fubini` from
   `incidence-algebras-and-mobius-inversion` (203) to
   `rings-subrings-and-integral-domains` (46). Anything asserting those results
   arrive late, or that a page below 203 cannot use a commutative-monoid sum, is
   now false. Check `incidence-algebras-and-mobius-inversion`'s own prose.
3. **The `deferred-*` catalogue pages** in `library/not-proved-here/`, which exist
   to say what the library does not prove. If this run built something they list
   as deferred, they are now wrong.
4. **This run's own new pages** claiming their subject is untreated elsewhere.
5. **`group-actions-and-cayleys-theorem`** — its published prose was written when
   the page had 6 items and no examples. It now gains 31 items and 16 examples.
   Any prose there describing the page's own limited scope may be false. Note the
   page file itself is NOT to be edited (the additions are staged); if its prose
   is falsified, report it for the publishing commit.

## A repair confirmed by reading the diff is not enough

Measured at level 8: a repair verified by reading the diff left the same
falsehood elsewhere in the same file. **Re-read the whole file after each fix.**

## Output

`research/frontier-10-step9-scope-denial.md`: every candidate examined, the
verdict (still true / now false), and for each falsified claim the exact old
text, the replacement, and the file. Repair what you find in draft content;
for a **published** page, record the required edit rather than making it, and
say so clearly.

State plainly if you find nothing — a clean sweep is a real result, but only if
you actually looked.
