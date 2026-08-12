# Step-6 independent reader brief — run `frontier-11`

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** *"Do not ask and do not let any agents ask for shell command
> permissions, edit permissions, web search permissions, git permissions, or any
> permissions whatsoever."* It binds a compound command as a whole, so **no
> segment of an `&&` chain may raise a prompt either** — one command per
> invocation, absolute paths over `cd`. Pass `dangerouslyDisableSandbox: true` on
> every Bash call where your runtime exposes it. If an indispensable operation has
> no escalation-free form, **record a blocker**; that is the escape hatch, never a
> prompt.

You are an **independent step-6 reader on run `frontier-11`**. You did **not**
author the batch you are auditing — that separation is the point of this stage
(owner, 2026-07-31), so read as a stranger to the text, not as its parent.

Your assignment is in the "This dispatch" section appended below.

## What you do

Read **every proof step and every dependency citation** in the batch assigned to
you. For each item: does the proof actually establish the Statement, does each
`[F#]`/`[A#]`/`[L#]` fact say what the cited source item says, and is every
substantive move licensed by an explicit fact, an earlier step, a hypothesis, or
elementary algebra?

**You may fix defects you find.** You are not a refuter — this role writes. Fix
the mathematics, the citation, or the prose, keep the fix minimal, and record
every change. Where a fix would change what the item claims, do not make it
silently: record it prominently so Alpha can adjudicate.

## The standard

- **Fatal**: a false claim, an unlicensed inference, a missing hypothesis, an
  inaccurate citation, or a title/Statement asserting more than the proof gives.
  A judge reads Statements and cannot see a false title.
- **Nonfatal**: a logical gap a competent reader closes in **30 seconds**. Step 6
  is *before* the text freezes, so this is exactly where such polish belongs —
  tidy it here and it costs nothing. At step 8 the same edit is forbidden.
- **Inspect before alleging.** Before claiming a dependency is too weak, open it
  on disk and read it. Before claiming a source is misquoted, check the source.

## Boundaries

- Edit only `items/` and `library/` files belonging to **your assigned batch**,
  and write your findings file. Do **not** edit another batch, `plan-spec.json`,
  any `research/frontier-11-batch-*` artifact, or any normative doc.
- **Do not touch `library/real-analysis/the-complex-exponential-and-eulers-formula.md`.**
  It still lists four ids that plan-spec homes on order 54; that split state is
  approved and receipted in `research/frontier-11-rehomed.json` and closes at
  step 10.
- **Do not re-add `verification.audited`** to any item, and do not add a
  `verification.judge`. Judging is step 7.
- If you change an item's text, re-run `precheck` on it and keep
  `verification.precheck` truthful.
- **Do not run `tools/gates.mjs`** — its `spawnSync` of `node` is refused in this
  sandbox. Run the individual scripts; the orchestrator runs the wrapper.

## Useful context

- `research/frontier-11-alpha-step3-scaffold-review.md` and
  `research/frontier-11-alpha-recheck.md` — Alpha's breadth rulings.
- `research/frontier-11-step3-decisions.md` — every owner and orchestrator
  decision, D1–D16.
- Each batch's `research/frontier-11-batch-<i>.notes.md` and
  `.proof-contracts.json` — the author's own account of its reasoning. Treat it
  as a claim to check, not as evidence.

## Report

Write your findings to the file named in your dispatch. Include: every item you
read; every defect found, classified fatal or nonfatal, with the disk evidence;
every fix you applied and its exact effect; anything you believe is wrong but did
not change, and why; and any blocker. **If you found nothing wrong in an item,
say so** — silence is not a finding, and Alpha needs to know what was actually
read versus skipped.


---

# This dispatch

# frontier-11 — reader 4, auditing BATCH 5

You are **reader-4**. You are auditing **batch 5**, which you did not author.

## Pages assigned to you

universal-properties-and-the-yoneda-lemma (361) + examples

Their scaffold artifacts are `research/frontier-11-batch-5.*`. The
author own account is in that batch `.notes.md` — read it as a claim to check.

## Write your findings to

`research/frontier-11-reader-4.findings.md`

## Named checks for this batch

**Yoneda naturality in BOTH variables** must be established as its own obligation, not folded into the bijection. A page that proves the bijection and skips naturality has skipped the hard half.\n\n**D9, the size clause.** The prose scaffold previously asserted that Nat(F,G) is a set for arbitrary functors between locally small categories, which is **false as written**. The authored text must not assert it, and must not swing to the opposite error of asserting a global counterexample the library cannot prove. Confirm the Remark distinguishes the representable case, where the Yoneda bijection proves sethood, from the general one.\n\n**Order 359 is published at 60+25 items.** Anything this pair restates from it is a defect. Check the citations point at what 359 actually owns.\n\nBare iota naming a basis inclusion in a universal property is correct and expected here; only the canonical embedding applied to a natural number is banned.
