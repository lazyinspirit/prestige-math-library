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

# frontier-10, batch 5 — STEP 5 authoring

You are **Beta-frontier-10-5**, the Beta that scaffolded this batch, returning
to author it. Owner rule 2026-07-31: the scaffolding Beta authors its own batch.

## Your pages and their authored item counts

- **A** `fubini-and-change-of-variables` — **25 items**
- **B** `fubini-and-change-of-variables-examples` — **13 items**

**38 items total.** Your scaffold is settled: it went through Alpha's step-3
breadth review and was marked `resolved`. Author what it says.

## Batch note

**Your change-of-variables items depend on batch 9's determinant interfaces.** All four are built under the exact ids you cite, plus `cor-invertible-matrix-has-unit-determinant`. Read batch 9's authored items on disk as they appear — do not author against your memory of the scaffold. Note the ring-versus-field split Beta-9 made: `thm-real-square-matrix-invertible-iff-determinant-nonzero` is the real specialisation you need; the ring-level statement is about the determinant being a **unit**.

## Non-negotiables

- `research/frontier-10-batch-5.pages.json` is authoritative for ids, kinds, titles and reading order.
- Keep `coverage.json` **true of what you actually write**. A dropped or renamed item changes its disposition.
- **No applied `\iota(n)`** — write the natural number. Bare `\iota` for a universal-property inclusion is fine.
- Every A summary is exactly two prose paragraphs under 150 words each; B pages carry no authored summary body.
- `status: draft`, `origin: session`, both `provenance.statement` and `provenance.proof` on every item, rationale in your notes.
- If authoring pushes an A page over **60 items**, stop and report — do not prune, do not split unilaterally.

