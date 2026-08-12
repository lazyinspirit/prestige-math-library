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

# frontier-11 — spine audit: 60 high-fan-out proofs

You are an **independent spine reviewer on run `frontier-11`**. You did not author
any of this run's content.

## Why this exists

`level-coverage --verify-current-context` requires a **current** `spine-audit`
receipt for the proof-bearing items among the library's 100 largest transitive
dependency cones. The receipt lapses on any mathematical-content change. It is
what stops a level silently resting on an unreviewed high-fan-out proof — a
defect in one of these propagates to thousands of items.

The template is already generated at
`research/frontier-11-spine-audit.json`: **60 items in `scope`, 60 matching
`attestations`, each currently `"status": "pending"`.**

Scale to be blunt about: `thm-the-empty-set-exists-and-is-unique` has **3,482
transitive consumers**. Most of these are long-published spine items, not this
run's new content.

## What to do

For each of the 60 ids:

1. **Open the item on disk** and read its Statement and its proof.
2. Read the dependencies it cites — enough to judge whether each cited fact says
   what the proof uses it for.
3. Set that attestation's `status` and write a real `notes` line.

Use these `status` values:

- `reviewed` — you read it and found no defect. `notes` says what you checked,
  not "ok".
- `defect` — you found a concrete false claim, unlicensed inference, missing
  hypothesis, or inaccurate citation. `notes` states it precisely with the
  evidence. **Do not repair it** — these are high-fan-out published items and a
  repair there has a blast radius that Alpha and the owner must weigh. Report it.
- `not-assessed` — you genuinely could not judge it. `notes` says why. **This is
  permitted and is far better than a false `reviewed`.** A receipt whose
  attestations are optimistic is worse than one that admits a gap, because the
  whole point is to know what has actually been read.

Also set `"reviewer"` at the top of the receipt to a short identifier for
yourself, e.g. `sol-spine-frontier-11`.

## The standard

Same as a step-6 reader: report only a **concrete** defect — a false claim, an
unlicensed inference, a missing hypothesis, or an inaccurate citation. Inspect
the supplied dependency before alleging it is too weak. A stylistic preference is
not a defect. A gap a competent reader closes in 30 seconds is not a defect.

Be honest about depth. If you read 60 proofs carefully, say so. If you read some
closely and skimmed others, **say which** — the value of this receipt is that it
records what was actually read.

## Boundaries

- **Write only `research/frontier-11-spine-audit.json`** and your report.
- **Do not edit any `items/` or `library/` file**, even to fix something obvious.
  These are the library's most-depended-upon items; changes there are Alpha's and
  the owner's call.
- Do not touch `plan-spec.json`, any batch artifact, or any normative doc.
- Do not run `tools/gates.mjs` — its `spawnSync` of `node` is refused in this
  sandbox. Run individual scripts.

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11).**
> Shell, edit, web-search and git permissions alike, and no segment of an `&&`
> chain may prompt. Pass `dangerouslyDisableSandbox: true` on every Bash call
> where your runtime exposes it. Record a blocker rather than asking.

## Verify and report

```
node tools/spine-audit.mjs --receipt research/frontier-11-spine-audit.json
```

Write `research/frontier-11-spine-findings.md`: how many you read at what depth,
every `defect` with its evidence, every `not-assessed` with its reason, and any
blocker.
