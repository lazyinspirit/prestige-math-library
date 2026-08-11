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

# This dispatch — final round. Close, repair once, or park. Then attest one item.

The owner has authorised publication and is waiting. Two items remain, **both
rejected by Terra only — DeepSeek cleared both.**

## 1. `cor-planar-simple-graph-edge-bound`

> Terra: *"Step 1.1 uses the uncited fact that a tree on n vertices has n minus 1
> edges. Neither L1 nor L2 establishes this, so the tree case is not licensed."*

**`cor-tree-edge-count` exists in the library.** If step 1.1 genuinely uses that
fact, this is `dependency_citation` fatal and the repair is to cite it. If the
tree case is not actually load-bearing, close it.

## 2. `rem-riemann-stieltjes-conventions-and-scope`

> Terra: *"The finite-step claim omits continuity at each jump: the companion
> common-jump counterexample is a one-step integrator for which the integral does
> not exist."*

**`cex-common-jump-prevents-riemann-stieltjes-integrability` exists.** Read it. If
it really is a one-step integrator that refutes the finite-step claim as written,
the claim needs its missing hypothesis and this is fatal. If the claim already
excludes that case, close it.

## Choose per item

1. **Close** — `confirmed_nonfatal` or `false_positive`, no mutation, no rejudge.
   Terra-only findings closed as nonfatal repeatedly in this run and DeepSeek
   cleared both of these; do not repair to be safe.
2. **Repair once** — only with a concrete fatal defect named.
3. **Park** — drop from publish scope and report what would finish it.

**No further round.** A repair rejected again parks automatically.

## Then: attest one item for the audit receipt

`research/frontier-10-audit-coverage.new.json` is the regenerated template. Its
only delta from the receipt you already issued is **one added item in both
`item_scope` and `proof_scope`: `lem-plane-triangulation-is-connected`**, the
connectedness lemma built after the pause at the owner's direction.

**That item has never been reader-audited or refuted** — it is the one piece of
this run outside the audited scope. Read it properly: proof steps, dependency
citations, boundary cases (exactly three vertices, the outer face), title against
content. Then fill the template's reviewer and attestation fields, carrying your
prior dispositions forward for the unchanged 584, and write it to
`research/frontier-10-audit-coverage.json`.

If that lemma does not survive your reading, say so — it is better to hear it now
than after publication.

Baseline `pre-step8e`; every adjudication row needs `item_sha256`. Report changed
items so I rejudge exactly those.
