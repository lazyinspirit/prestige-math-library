# Step-5 authoring brief for run `frontier-10`

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's words: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, git permissions, or any
> permissions whatsoever."* Use already-allowed workspace commands and
> non-escalated forms; pass `dangerouslyDisableSandbox: true` on every Bash call
> where your runtime exposes it. If an indispensable operation has no
> escalation-free form, **record a blocker in your notes** — never raise a prompt.

You are the **Beta who scaffolded this batch, returning as its step-5 author**
(owner, 2026-07-31: the scaffolding Beta personally authors its own batch).
`briefs/authoring.md` is your **base contract in full**; this file pins the run.

## Run identity

Everywhere the base contract says `research/level⟨n⟩-…`, read
`research/frontier-10-…`. Your batch number is in the dispatch section below.
Gates run as `node tools/gates.mjs --step 5 --run frontier-10`.

Your writable artifacts, and nothing else:

- `items/<id>.md` — the items your own manifest declares, and only those
- `library/<category>/<page-id>.md` — your own pages (**batch 8: see below**)
- `research/frontier-10-batch-⟨i⟩.notes.md`
- `research/frontier-10-batch-⟨i⟩.coverage.json`
- `research/frontier-10-batch-⟨i⟩.proof-contracts.json`

## Author exactly what step 3 and 4 settled

`research/frontier-10-batch-⟨i⟩.pages.json` is authoritative for ids, kinds,
titles, reading order and the baseline dependency list — it has been spliced into
`research/plan-spec.json` and adjudicated. Alpha's
`research/frontier-10-alpha-step3-scaffold-review.md` may have added required
results to your pair; **those are not optional**, and Alpha re-checks them at
step 6.

## The four rules that will fail your batch if you ignore them

1. **Keep `coverage.json` true of what you actually wrote.** Authoring
   legitimately drops, renames or merges an item; when it does, that heading's
   disposition changes with it. An `included` row naming an item you did not
   write is a step-6 gate failure. Re-run
   `node tools/coverage-checklist.mjs research/frontier-10-batch-⟨i⟩.coverage.json`.
2. **Build the machinery, do not drop.** A missing prerequisite is a thing to
   write. If that pushes the A page over **60 items**, you may not prune — stop
   and report, because a split at this stage is an orchestrator decision.
3. **No applied `\iota(n)`.** Write the natural number.
   `content-policy.mjs` fails the batch with `notation-iota-applied`. Bare
   `\iota` for a universal-property inclusion is unaffected; legacy items you
   cite still use the old form and are not your scope.
4. **Page summaries.** Every A summary is exactly two nonempty prose paragraphs
   under 150 words each: background and used declared dependencies first; the
   page's own definitions, theorems and their logical progression second. B pages
   carry no authored summary body.

Everything is `status: draft`, `origin: session`, with both `provenance.statement`
and `provenance.proof` on every mathematical-content item and a rationale for each
in your notes.

## Batch 8 only — enriching a published pair

`group-actions-and-cayleys-theorem` and its companion are **published**. Do
**not** edit those two page files. Author every new item as `status: draft` and
stage the additions to their `items:`/`examples:` lists in
`research/frontier-10-published-amendments.md`. The orchestrator applies them in
the single publishing commit, after the owner audit. `depcheck` raises
`draft-on-published-page` if you list a draft item on a published page.

## Finish

Leave these green, then report:

```
node tools/tsx-run.mjs tools/precheck.mts
node tools/depcheck.mjs
node tools/rendercheck.mjs
node tools/prosecheck.mjs
node tools/content-policy.mjs research/frontier-10-batch-⟨i⟩.pages.json
node tools/coverage-checklist.mjs research/frontier-10-batch-⟨i⟩.coverage.json
node tools/proof-contract.mjs research/frontier-10-batch-⟨i⟩.proof-contracts.json --strict
```

**Do not run `tools/gates.mjs`.** Beta-4 and Beta-7 both found it fails `EPERM`
inside this sandbox: the wrapper's `spawnSync` of `node` is refused before any
child script runs. The individual scripts above are the same checks and they
work. The orchestrator runs the aggregate wrapper and is the gate of record.

Report:
items authored, harvest yield against your checklist, every boundary case
disposed, and any blocker stated plainly.


---

# This dispatch

# frontier-10, batch 5 — citation-quote repair

`proof-contract.mjs --strict` fails step 5 with **11 `citation-quote-mismatch`
errors, all yours**. Every one is a quote of a batch-9 Statement that does not
occur in that item's authored text.

## Why this happened — it is not your mistake

You and batch 9 authored **in parallel**. Your brief told you to read batch 9's
items on disk rather than the scaffold, but batch 9 was still writing them, so
the text you quoted was the scaffold's. The orchestrator should have sequenced
batch 9 ahead of you. Batch 9 is now finished and its Statements are final.

## The 11 edges

`thm-linear-images-scale-jordan-content-by-absolute-determinant` — L-facts quoting
`thm-gaussian-elimination-produces-row-echelon-form`,
`cor-a-row-reduction-is-a-product-of-elementary-matrices`,
`cor-elementary-matrices-are-invertible`,
`thm-invertible-matrices-factor-into-elementary-matrices`,
`thm-invertible-matrix-theorem`,
`thm-determinant-under-elementary-row-operations`,
`thm-real-square-matrix-invertible-iff-determinant-nonzero`

`thm-change-of-variables-for-compact-jordan-sets` — L1 quoting
`cor-determinant-is-a-polynomial-in-the-matrix-entries`, L4 quoting
`thm-determinant-multiplicative`

`ex-parallelepiped-content-from-a-matrix` — L2 quoting `def-determinant-of-a-square-matrix`

`ex-hyperspherical-coordinate-jacobian` — L2 quoting `thm-determinant-multiplicative`

## What to do

For each: **open the target item in `items/` and read its authored Statement**,
then correct both

1. the `[L#]` fact text in your own item, and
2. the recorded source clause in
   `research/frontier-10-batch-5.proof-contracts.json`,

so the quote is exact, or a faithful shortening preserving domain, quantifiers,
hypotheses, conclusion and direction.

**This is a correctness check, not a copy-paste job.** If a batch-9 Statement
turns out to be *weaker* than what your proof needs — in particular the
ring-versus-field split, where `thm-real-square-matrix-invertible-iff-determinant-nonzero`
is the real specialisation and the ring-level statement is about the determinant
being a **unit** — then your proof step is not licensed and must be repaired, not
just requoted. Say so in your notes if you hit that.

## Scope

Your own `items/` items and your own four `research/frontier-10-batch-5.*`
artifacts. Do not edit batch 9's items.

## Gate

```
node tools/proof-contract.mjs research/frontier-10-batch-5.proof-contracts.json --strict
```

Must be clean of `citation-quote-mismatch` for your items.
