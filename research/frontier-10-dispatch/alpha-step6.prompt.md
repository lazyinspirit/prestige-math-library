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

# This dispatch — Stage 2, step 6: the whole-run audit

All nine independent readers have reported and repaired. **You adjudicate every
one of their findings from disk** — not from their reports. You are the only role
that can confirm, refute, amend or extend a reader's repair, and no author
certifies its own work.

## What the readers found

| batch | fatal families | nonfatal |
|---|---|---|
| 1 symmetric groups, matrices | 0 | 13 |
| 2 finite abelian, free products | 0 | 6 |
| 3 polynomial rings | 0 | 21 |
| 4 bounded variation, improper integrals | **2** | several |
| 5 Fubini, change of variables | **4** | several |
| 6 Ramsey, plane graphs | **2 proposed** | 4+ |
| 7 categories, functors | **7** | 20 |
| 8 group-actions enrichment | 0 | 22 |
| 9 Gaussian elimination, determinants | 0 | 10 |

**15 fatal families.** Their findings files are
`research/frontier-10-reader-<i>.findings.md`.

Ones to weigh hardest:

- **Batch 5 F1** — `lem-finite-jordan-cover-sum-bounds` was a **false Statement**,
  with an explicit counterexample ($E=E_1=[0,1]$, $h=0$, $M_1=0$, $E_2=[2,3]$,
  $M_2=-1$ giving $0\le-1$). Repairing a proof does not establish an altered
  Statement — verify the new one is true, not merely licensed.
- **Batch 5 F2** — Cavalieri invoked before its Jordan-measurability hypothesis,
  i.e. circular. Check the repair is not circular by a longer route.
- **Batch 7** — seven fatal defects at the foundations: an ill-typed
  large-category definition, an over-large functor-category construction, a
  set/class domain mismatch, loop-only results applied to arbitrary endpoint
  paths, and a reversed automorphism multiplication. Size and class hygiene is
  where a category page fails; no gate can see it. The reader states plainly that
  its label describes the pre-repair text and **does not certify the repair**.
- **Batch 6 F1** — a **false title** claiming a "first exact Ramsey number". The
  paired judges read Statements and cannot see a title, so this class is yours
  alone. Check every title in the run against what its proof delivers.
- **Batch 4 F2** — three failures in one item, including a Cauchy **net** treated
  as a Cauchy **sequence**.

## Your other Stage-2 obligations

1. **§6b.0 harvest faithfulness.** Open the sources at their stated locators and
   judge whether each `coverage.json` reflects what the range contains. This is
   the check no script can make, and it is why the artifact exists.
2. **Read-only proof refuters.** Dispatch them on the highest-risk proofs —
   `risk-report.mjs` tiers, plus the 15 repaired fatal items. Every refuter brief
   must carry the no-permission-prompt block.
3. **Contracts and risk.** Reconcile
   `research/frontier-10-proof-contracts.json` (474 items) after the repairs and
   write a `risk_review` for every high/critical item — step 6 is where
   `--require-reviewed` binds.
4. **L1 and L2**, carried from your re-check: batch 4's MIT-syllabus ledger row
   should cite Rudin ch. 6 directly, and batch 8's Theorem 6.9 home should be
   `cosets-and-lagranges-theorem`.
5. **Cross-batch and cross-level citations** from disk, against
   `research/frontier-10-audit-manifest.json`.
6. **Page summaries** — exactly two prose paragraphs under 150 words each on
   every A page; no authored summary body on a B page.
7. **The re-home follow-ups** you flagged: the two moved items' own wikilinks and
   any positional prose. The move is now APPLIED (both `library/` pages and
   `plan-spec.json`), so check them in their new home at order 46.
8. **Audit receipt** `research/frontier-10-audit-coverage.json` and the
   **spine receipt** `research/frontier-10-spine-audit.json`.

## Boundaries

Step 6 is the **last unfrozen moment** — nonfatal polish is allowed here and
forbidden after step 7 under R1. Batch 8 enriches a **published** pair: do not
edit the two group-actions page files, do not flip any status, and leave the
additions staged in `research/frontier-10-published-amendments.md`.

Record blockers rather than prompting. Keep
`research/frontier-10-alpha-report.md` current.
