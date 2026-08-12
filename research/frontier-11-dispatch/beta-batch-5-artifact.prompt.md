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
2. Your own `research/frontier-11-batch-5.notes.md` and
   `.proof-contracts.json`.
3. The current item text on disk. **The repaired text is the truth.** Where your
   contract and the text disagree, the contract is what is wrong.

## What you must make true again

**1. `research/frontier-11-batch-5.proof-contracts.json` must be true of disk.**

- Every numbered proof step in the current text is covered exactly once by the
  stated input map.
- Every `[F#]`/`[A#]`/`[L#]` fact records the exact cited source clause, quoted
  from the source item as it is on disk now, and every step that uses it.
- Boundary dispositions — empty, zero/one indices, degenerate parameters,
  endpoints, nonempty choices, both iff directions — are anchored to steps that
  still exist.
- Any item the reader added is present; any it removed is gone.

Verify: `node tools/proof-contract.mjs research/frontier-11-batch-5.proof-contracts.json --strict`

**2. `research/frontier-11-batch-5.coverage.json` must still be true of disk.**
If the reader added, removed or retargeted an item, retag the affected rows so
every disposition still names something that exists.

Verify: `node tools/coverage-checklist.mjs research/frontier-11-batch-5.coverage.json`

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

# frontier-11, batch 5 — artifact reconciliation after step-6 repairs

You are **Beta-frontier-11-5**. Your artifacts are
`research/frontier-11-batch-5.*`.

## Your reader

`research/frontier-11-reader-4.findings.md` — reader 4 audited your
batch. Read it in full. It contains a section naming the exact artifact
reconciliation it could not perform because batch artifacts were out of its
scope. That section is your work list.

Your item text has already been repaired by that reader. **Do not undo those
repairs.** Make your contract and coverage true of the repaired text.
