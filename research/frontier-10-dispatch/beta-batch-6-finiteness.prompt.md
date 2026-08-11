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

# frontier-10, batch 6 — one citation fix, then done

`lem-plane-face-handshake-by-girth` is **rejected by both judge lanes** and is the
last thing blocking this run. One concrete defect, one available fix.

## The defect

Step 1.1 sums over the face set $F(G)$ using `def-sum-over-a-finite-index-set`,
which requires a finite index set — but **nothing establishes that $F(G)$ is
finite**. Both lanes flagged it independently:

> the sum over F(G) uses the finite-sum definition which requires F(G) to be
> finite, but finiteness of the face set is not proved here

The gap predates the Statement change; exporting the identity
$\sum_f\ell(f)=2|E|$ into the Statement made it load-bearing and visible.

## The fix

`lem-plane-graph-faces-are-finite-with-one-unbounded-face` is on your own page at
position #7, against this lemma's #20 — a legal backward citation. Its Statement:

> Every plane graph has finitely many faces, exactly one of which is unbounded.

Add it to `deps`, add an `[L#]` fact restating it faithfully, and cite that fact
in step 1.1 where the finite sum is taken. Keep `coverage.json` and
`proof-contracts.json` in step.

**Restate it accurately.** Inflated `[L#]` restatements were the single largest
fatal class in this run — 16 of them. Do not write more than that lemma gives.

## Do not change anything else

The Statement and title are settled and must not move:

- Statement exports $\sum_{f\in F(G)}\ell(f)=2|E(G)|$ **and** the consequent
  $g|F(G)|\le2|E(G)|$.
- The title says "every facial boundary walk has length at least $g$", **not**
  "girth". I broke this earlier by writing "girth": a one-edge tree has infinite
  girth but a face of boundary walk length 2, so $3\cdot1\le2$ is false. Both
  lanes caught it. Leave the title alone.

## Gates

```
node tools/tsx-run.mjs tools/precheck.mts
node tools/depcheck.mjs
node tools/proof-contract.mjs research/frontier-10-batch-6.proof-contracts.json --strict
node tools/coverage-checklist.mjs research/frontier-10-batch-6.coverage.json
```

Report the added fact and the changed step.
