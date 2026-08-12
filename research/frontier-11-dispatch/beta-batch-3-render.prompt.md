# Beta artifact-reconciliation brief — run `frontier-11` (step 6)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** *"Do not ask and do not let any agents ask for shell command
> permissions, edit permissions, web search permissions, git permissions, or any
> permissions whatsoever."* It binds a compound command as a whole, so **no
> segment of an `&&` chain may raise a prompt either** — one command per
> invocation, absolute paths over `cd`. Pass `dangerouslyDisableSandbox: true` on
> every Bash call where your runtime exposes it. If an indispensable operation has
> no escalation-free form, **record a blocker**; that is the escape hatch, never a
> prompt.

You are the **Beta that scaffolded and authored your batch on run `frontier-11`**.
An independent step-6 reader has audited your batch and repaired defects in your
item text. Your **durable artifacts are now stale against that repaired text**,
and readers were forbidden from touching them — that is why this dispatch exists.

## Read first

1. The reader findings file named in your dispatch — in full, including the
   sections listing artifact reconciliation it says you must perform.
2. Your own `research/frontier-11-batch-3.notes.md` and
   `.proof-contracts.json`.
3. The current item text on disk. **The repaired text is the truth.** Where your
   contract and the text disagree, the contract is what is wrong.

## What you must make true again

**1. `research/frontier-11-batch-3.proof-contracts.json` must be true of disk.**

- Every numbered proof step in the current text is covered exactly once by the
  stated input map.
- Every `[F#]`/`[A#]`/`[L#]` fact records the exact cited source clause, quoted
  from the source item as it is on disk now, and every step that uses it.
- Boundary dispositions — empty, zero/one indices, degenerate parameters,
  endpoints, nonempty choices, both iff directions — are anchored to steps that
  still exist.
- Any item the reader added is present; any it removed is gone.

Verify: `node tools/proof-contract.mjs research/frontier-11-batch-3.proof-contracts.json --strict`

**2. `research/frontier-11-batch-3.coverage.json` must still be true of disk.**
If the reader added, removed or retargeted an item, retag the affected rows so
every disposition still names something that exists.

Verify: `node tools/coverage-checklist.mjs research/frontier-11-batch-3.coverage.json`

**3. Your `.notes.md`** gets a short appended section recording what changed and
why — not a rewrite of your earlier account.

## Do not

- **Do not undo a reader's repair.** If you believe one is mathematically wrong,
  say so in your notes with the disk evidence and leave the text alone. Alpha
  adjudicates at 6b; you do not overrule an independent reader.
- Do not edit `items/` or `library/` **unless your dispatch explicitly assigns
  it**. This dispatch is about artifacts.
- Do not touch another batch, `plan-spec.json`, any normative doc, or
  `library/real-analysis/the-complex-exponential-and-eulers-formula.md`.
- Do not re-add `verification.audited` anywhere, and do not add
  `verification.judge`. Judging is step 7.
- **Do not run `tools/gates.mjs`** — its `spawnSync` of `node` is refused in this
  sandbox. Run the individual scripts.

## Report

A short report: every contract entry you changed and why, every coverage row you
retagged, any reader repair you believe is wrong (with evidence, unchanged), and
any blocker. State plainly anything you could not make true.


---

# This dispatch

# frontier-11, batch 3 — rendercheck failures from your labeled-fact insertion

You are **Beta-frontier-11-3**. Your artifact reconciliation introduced labeled
facts into proofs — correct and required — but it broke inline math in the
process. `rendercheck` now reports **8 errors**, code
`blank-line-in-inline-math`, in `items/thm-erdos-stone-for-balanced-blowups.md`
and possibly others.

**A blank line inside `$…$` ends the paragraph and orphans the delimiter**, so the
page renders as broken TeX. Two reported instances:

- `$-uniform hypergraph. [given, F1, F2] 2.1 Hypergraph KST says that, for large $`
- `$. [step 1.2, given, F3, F4] 3.1 Step 2.1 gives the density upper bound $`

Both look like a step boundary landed inside a math span while you were inserting
the fact labels. Repair so each inline span opens and closes within one
paragraph, and each numbered step begins outside math.

Run `node tools/rendercheck.mjs` and fix **every** error it reports, not only the
two quoted — it reports 8. Read each repaired line character by character; a
delimiter fix can mask a second defect on the same line.

Then re-run, in this order:

```
node tools/tsx-run.mjs tools/precheck.mts <changed item files>
node tools/proof-contract.mjs research/frontier-11-batch-3.proof-contracts.json --strict
node tools/rendercheck.mjs
```

Keep `verification.precheck` truthful. Do not change any Statement, title,
hypothesis or claim — this is a rendering repair. Do not touch another batch,
`plan-spec.json`, `library/real-analysis/the-complex-exponential-and-eulers-formula.md`,
or any normative doc. Do not run `tools/gates.mjs`.
