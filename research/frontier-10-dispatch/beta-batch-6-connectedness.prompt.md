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

# frontier-10, batch 6 — owner-directed addition after step 10

The owner reviewed the step-10 rundown and directed one addition to your batch.

## What and why

`cor-planar-simple-graph-edge-bound` currently states equality for a
**connected** plane triangulation. That hypothesis is **redundant** — every plane
triangulation of order at least three is connected — but Alpha narrowed the
Statement at step 8 rather than assert it, because proving connectedness needs a
lemma and step 8 permits only fatal repairs. The owner has authorised building
that lemma now.

## Author the lemma

Add to `plane-graphs-euler-and-the-five-colour-theorem`:

**Every plane triangulation with at least three vertices is connected.**

Alpha named the argument: *a face meeting two components has a disconnected
boundary subgraph*, contradicting the triangulation condition that every face is
bounded by a 3-cycle. Work it out properly from your page's own toolkit — do not
take that sketch as a proof. Mind the boundary cases: exactly three vertices, and
the outer face.

Suggested id `lem-plane-triangulation-is-connected`, but follow the page's
naming. Source it: this is standard (Diestel ch. 4 is already in your ledger) —
find the exact statement rather than inventing one, and give it a real harvest
row in `coverage.json` with its source.

## Then update the two consumers

1. **`cor-planar-simple-graph-edge-bound`** — drop "connected" from the equality
   clause, cite the new lemma, and adjust the surrounding sentence, which
   currently explains that two-connectivity supplies the connectedness the
   equality case assumes. That explanation becomes unnecessary.
2. **`prop-maximally-planar-edge-characterisation`** — its `[L1]` was corrected
   an hour ago to read "with equality for a connected plane triangulation", to
   match the source exactly. Once the source drops "connected", bring `[L1]` back
   into exact agreement.

Keep `pages.json`, `coverage.json` and `proof-contracts.json` in step with all
three items.

## A warning from the last hour

I edited that lemma's *title* myself and introduced a false one: I wrote "girth
at least $g$" where the Statement says "every facial boundary walk has length at
least $g$". Both judges rejected it with the same counterexample — a one-edge
tree has infinite girth but a face of boundary length 2. **Girth and facial
boundary walk length are not interchangeable.** Do not repeat that in your new
lemma's title or Statement.

## Gates

```
node tools/tsx-run.mjs tools/precheck.mts
node tools/depcheck.mjs
node tools/rendercheck.mjs
node tools/content-policy.mjs research/frontier-10-batch-6.pages.json --rehomed research/frontier-10-rehomed.json
node tools/coverage-checklist.mjs research/frontier-10-batch-6.coverage.json
node tools/proof-contract.mjs research/frontier-10-batch-6.proof-contracts.json --strict
```

Do not run `tools/gates.mjs` (EPERM in this sandbox). Author `status: draft` with
both provenance components. Report the three items and their new/changed text.
