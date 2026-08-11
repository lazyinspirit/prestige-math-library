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

# This dispatch — Stage 3, step 8: adjudicate the paired-judge rejections

The step-7 sweep is complete: **1,182 verdicts, both lanes on all 591 items,
zero nulls**. Ledger `research/frontier-10-judge.jsonl`.

| | count |
|---|---|
| items with a live rejection | **322** |
| rejected by Terra | 295 |
| rejected by DeepSeek | 143 |
| rejected by **both** lanes | 116 |

**You are the sole adjudicator.** The orchestrator runs gates and keeps ledgers
and does not substitute its judgment for yours.

## R1 — step 8 is FATAL-ONLY, and this is the rule that matters most here

With 322 rejections in front of you, the temptation to tidy is the exact failure
R1 exists to prevent.

- Only **`confirmed_fatal`** licenses an edit to an item.
- **`confirmed_nonfatal`** and **`false_positive`** close the rejection on its
  exact-hash ledger row with **no content, page, frontmatter, contract, impact or
  judge mutation of any kind.** Not a word.
- Cosmetic polish and 30-second-gap tidying belonged at step 6 and are now
  withdrawn. Any edit is a material rewrite under SCHEMA §3: it voids
  `verification.judge`, forces a rejudge, and resamples a refuter that will find
  a fresh nitpick on each stochastic run — an unbounded loop costing two judge
  calls a turn and converging on nothing.
- **Fatal repairs are deliberately uncapped.** A proof that keeps yielding real
  fatal defects is either converging on correctness or is actually false, and
  both must run to conclusion.

## Every row needs `item_sha256`

Write `research/frontier-10-judge-adjudications.jsonl`, one row per rejection:

```json
{"id": "...", "model": "deepseek-v4-pro|gpt-5.6-terra",
 "context_sha256": "...", "item_sha256": "...",
 "outcome": "confirmed_fatal|confirmed_nonfatal|false_positive",
 "defect_type": "logic|dependency_citation|other"}
```

`item_sha256` is the sha256 of the normalized item text (verification block
excluded) **at adjudication time**, i.e. the pre-edit state. `tools/step8-guard.mjs`
checks every item changed since the `pre-step8` baseline against a
`confirmed_fatal` row recorded on that hash. Error codes `nonfatal-edit` and
`judge-adjudication-unhashed`.

The baseline snapshot `pre-step8` is taken. It noted **36 items repaired more
than once** — the twice-touched escalation is advisory, but read those with extra
suspicion: a proof touched repeatedly is either converging or false.

## What the lane split is telling you

Terra rejects at twice DeepSeek's rate while sharing the GPT family with the
authoring Betas; DeepSeek is the only cross-family screen. Weight same-family
agreement accordingly. **The 116 both-lane rejections are where real defects most
likely concentrate — start there.** A Terra-only rejection on citation precision
deserves the 30-second rule before anything else.

From the sample I read, many rejections are of the form "[L1] claims slightly
more than the cited item states". Judge each on its merits: an inflated
restatement that the proof actually leans on is `dependency_citation` **fatal**;
one where the proof only uses the weaker true content is nonfatal.

## Then

Select the exact changed items for rejudge — only what you actually edited — and
report them to the orchestrator. Keep
`research/frontier-10-alpha-report.md` current, and record blockers rather than
prompting.
