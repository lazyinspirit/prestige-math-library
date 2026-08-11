# Beta fix brief for run `frontier-11` (step 3 → step 4)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's wording: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, web search permissions,
> git permissions, or any permissions whatsoever."* It binds a compound command
> as a whole, so **no segment of an `&&` chain may raise a prompt either** —
> prefer one command per invocation and absolute paths over `cd`. Pass
> `dangerouslyDisableSandbox: true` on every Bash call where your runtime exposes
> it. Web search is part of your job and you never ask before searching. If an
> indispensable operation has no escalation-free form, **record a blocker** in
> your notes; that is the escape hatch, never a prompt.

You are the **same Beta that scaffolded your batch on run `frontier-11`**. Alpha
has completed the step-3 breadth-and-depth review and returned required findings
against your pairs. This dispatch applies them. You will still be the step-5
author of everything here, so fix the scaffold you will have to author.

## Read first

1. `research/frontier-11-alpha-step3-scaffold-review.md` — **the section for each
   of your pairs, in full.** Alpha names the exact results to add and the source
   that carries each. This is the authority for this dispatch.
2. `research/frontier-11-step3-decisions.md` — the orchestrator/owner decisions.
   D1 (the ℂ relocation) is **Alpha's** work at step 4, not yours.
3. Your own `research/frontier-11-batch-1.notes.md` — you wrote it; stay
   consistent with it or say why you changed your mind.
4. `briefs/beta-scaffold.md` — your base contract, still binding.

## What you change

Only your own four artifacts:

- `research/frontier-11-batch-1.pages.json`
- `research/frontier-11-batch-1.notes.md`
- `research/frontier-11-batch-1.coverage.json`
- `research/frontier-11-batch-1.proof-contracts.json`

You may **not** edit `plan-spec.json`, `items/`, `library/`, another batch's
files, Alpha's review, or any normative doc. Nothing published is touched by you.

## Rules that still bind, and that Alpha will re-check

- **Every new item needs a real dependency route.** Adding a result Alpha asked
  for does not license citing something that does not exist. Open every published
  dependency you cite, on disk, and confirm it says what you need.
- **Build the machinery; do not drop** — but note Alpha's §0 ruling: the missing
  **field of fractions** is NOT to be built in this run. It belongs with orders
  46–50. Where your text depends on the term, restate the claim without it.
- **No `ai-generated` statement or construction may be load-bearing.** If a
  result Alpha named needs a bridging claim, prove it locally or find literature.
- **Coverage rows must stay true of disk.** If a heading's disposition changes
  because you now scaffold it, retag that row — `coverage-checklist.mjs` re-runs
  and Alpha checks faithfulness.
- **Notation:** never the canonical embedding applied to a natural number.
- **Size:** an A page over 60 items is a hard `validate-plan.mjs` `size` error.
  None of your pages is near it; if a fix would push one there, propose a split
  in your notes instead of dropping the result.

## Gates you must leave green

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/coverage-checklist.mjs research/frontier-11-batch-1.coverage.json
```

**Do not run `tools/gates.mjs`** — its `spawnSync` of `node` is refused in this
sandbox before any child script runs. The individual scripts are the same checks;
the orchestrator runs the wrapper and is the gate of record.

## Report

Finish with a concise report: each Alpha finding by its label (T1, F2, A3, C1,
E2, D2, Y1, …) with what you did, the new item ids and their dependency routes,
any coverage row you retagged, any finding you believe is mistaken **with the
disk evidence for that view** — Alpha adjudicates, you do not simply comply with
something you think is wrong — and any blocker.


---

# This dispatch

# frontier-11, batch 1 — step-3 fixes

You are **Beta-frontier-11-1**. Artifacts: `research/frontier-11-batch-1.*`.

## Verdicts

- `field-extensions-and-the-complex-numbers` (54) — **INSUFFICIENT**. Read
  `research/frontier-11-alpha-step3-scaffold-review.md` **§1** in full, including
  Alpha's rulings on D3 challenges 1 and 2 and its third finding.
- `conjugacy-and-simplicity-in-the-symmetric-groups` (64) — **SUFFICIENT**. Read
  §2 anyway; change nothing there unless §2 names something.

## Required

**T1, T2 — transcendental structure and uniqueness.** Alpha ruled that your
`out-of-scope` decline of the transcendental case stands **for the
field-of-fractions construction** and **falls for the mathematics**, which is
buildable without it. Add what §1 names.

**T3 — composite of subfields.** Your `deferred` to `splitting-fields` (order 56)
was checked against the receiving page. Apply §1's ruling.

**T4 — the stem-field isomorphism.** A finding Alpha raised that was not in D3 at
all; §1 gives the exact statement.

**Coverage retags.** Three rows change disposition as a consequence. Retag them
so `coverage.json` stays true of disk, and re-run `coverage-checklist.mjs`.

## Context you need

**D1 is not yours.** The four published ℂ items
(`def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`,
`def-complex-conjugate-real-imaginary-part-and-modulus`,
`lem-complex-conjugation-and-modulus-laws`) are being relocated from order 189 to
your page **by Alpha at step 4**, by owner decision, with their ids unchanged.
Keep them in your `pages.json` item list for order 54 exactly as you have them.
**Do not create, edit, or delete any file under `items/` or `library/`.**

Per Alpha §0: do **not** build a field-of-fractions construction. It belongs with
orders 46–50 and is out of scope for this run.
