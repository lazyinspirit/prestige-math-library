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
3. Your own `research/frontier-11-batch-4.notes.md` — you wrote it; stay
   consistent with it or say why you changed your mind.
4. `briefs/beta-scaffold.md` — your base contract, still binding.

## What you change

Only your own four artifacts:

- `research/frontier-11-batch-4.pages.json`
- `research/frontier-11-batch-4.notes.md`
- `research/frontier-11-batch-4.coverage.json`
- `research/frontier-11-batch-4.proof-contracts.json`

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
node tools/coverage-checklist.mjs research/frontier-11-batch-4.coverage.json
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

# frontier-11, batch 4 — step-3 fixes

You are **Beta-frontier-11-4**. Artifacts: `research/frontier-11-batch-4.*`.

Read `research/frontier-11-alpha-step3-scaffold-review.md` **§7** and **§8**.

## `the-determinant-of-a-linear-operator` (84) — INSUFFICIENT — §7

- **D1, D2** — §7 names both. D2 is the **alternating top-form
  characterisation**: the basis-free statement that the determinant is the scalar
  by which the operator acts on alternating top-degree forms. Scaffold it only as
  far as you can honestly state and prove from what the library has — if the
  exterior-algebra machinery is not there, §7 tells you what the honest version
  is. Do not state a characterisation you cannot prove.
- **Two B-page boundary items** — your B page is 6 items against an 18-item A
  page.
- **R-D** — add a **commutative-ring** source to the harvest. Cramer's rule and
  the adjugate behave differently over a ring than over a field, and the pair's
  present sourcing does not carry that distinction. Record the exact range and
  enumerate that source's own headings.

Your recommendations D6 (build the missing cofactor/Laplace/adjugate/Cramer
machinery locally, since order 82 genuinely lacks it) and D7 (the rank-one route
to similarity-equivariance, avoiding the nonexistent fraction field) were both
**approved**. Keep them. Per Alpha §0, do not build a field of fractions.

## `the-integral-logarithm-and-its-characterisations` (178.1) — SUFFICIENT — §8

Read §8; change nothing unless it names something. This pair is an **owner
standing scope obligation** and your scaffold closes all three required gaps —
the integral-first `L(x) := \int_1^x dt/t` developed with no `exp` in its proofs,
the functional-equation characterisation, and the equivalence theorem with its
roadmap remark. Preserve that structure exactly; in particular keep the
identification to the **single** citation of `thm-exponential-ivp-uniqueness`.

Your D8 substitution — citing `thm-log-one-plus-x-power-series` on the A page
instead of the published B-page example — was approved and stands.
