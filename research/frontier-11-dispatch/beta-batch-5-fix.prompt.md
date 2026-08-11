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
3. Your own `research/frontier-11-batch-5.notes.md` — you wrote it; stay
   consistent with it or say why you changed your mind.
4. `briefs/beta-scaffold.md` — your base contract, still binding.

## What you change

Only your own four artifacts:

- `research/frontier-11-batch-5.pages.json`
- `research/frontier-11-batch-5.notes.md`
- `research/frontier-11-batch-5.coverage.json`
- `research/frontier-11-batch-5.proof-contracts.json`

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
node tools/coverage-checklist.mjs research/frontier-11-batch-5.coverage.json
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

# frontier-11, batch 5 — step-3 fixes

You are **Beta-frontier-11-5**. Artifacts: `research/frontier-11-batch-5.*`.

`universal-properties-and-the-yoneda-lemma` (361) came back **SUFFICIENT with one
required correction**. Read `research/frontier-11-alpha-step3-scaffold-review.md`
**§9** in full, including Alpha's ruling on challenge 5.

## Required

**Y1 — re-enumerate the Riehl and Leinster harvests over their stated ranges.**
Alpha could not open your sources: its runtime had no web access, so it could not
perform the faithfulness check as written and explicitly declined to allege any
omission inside a stated range. What it *could* check raised a concern about
these two harvests specifically.

So do this properly: go back to Riehl and Leinster at the exact
chapter/section ranges your `coverage.json` records, and enumerate **that
source's own** section and named-result headings across those ranges — what the
source actually contains, not a reconstruction from memory of what such a chapter
usually contains. Give every heading a disposition. If the enumeration you now
produce differs from what you recorded, the new one is the truth and the row gets
retagged; say so plainly in your notes rather than quietly overwriting.

If a range you recorded turns out not to be what you actually read, correct the
`locator` too. An inaccurate locator is worse than a short one, because it makes
the harvest uncheckable.

## Keep

Your D9 amendments to `research/plan-combinatorics-and-categories.md` §CT-2 were
**approved** — including replacing the clause asserting `Nat(F,G)` is a set for
arbitrary functors between locally small categories, which is **false as
written**. Alpha applies those to the prose scaffold at step 4; you do not edit
it yourself.

Alpha confirmed the size handling and the naturality requirement. Make sure
Yoneda naturality **in both variables** remains scaffolded as its own obligation,
not folded into the bijection item — a page that proves the bijection and skips
naturality has skipped the hard half.
