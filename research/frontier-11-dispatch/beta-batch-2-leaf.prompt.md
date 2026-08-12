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
3. Your own `research/frontier-11-batch-2.notes.md` — you wrote it; stay
   consistent with it or say why you changed your mind.
4. `briefs/beta-scaffold.md` — your base contract, still binding.

## What you change

Only your own four artifacts:

- `research/frontier-11-batch-2.pages.json`
- `research/frontier-11-batch-2.notes.md`
- `research/frontier-11-batch-2.coverage.json`
- `research/frontier-11-batch-2.proof-contracts.json`

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
node tools/coverage-checklist.mjs research/frontier-11-batch-2.coverage.json
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

# frontier-11, batch 2 — B-page leaf and undeclared-prereq failures

You are **Beta-frontier-11-2**. Artifacts: `research/frontier-11-batch-2.*`.

Your step-3 fixes were accepted on breadth and depth — both pairs are
`sufficient`. But the step-4 splice made `validate-plan.mjs` **FAIL**, and every
failure is yours. Ten errors, no other batch contributes any.

## 1. `b-leaf` — four items depend on B pages (hard error)

**A B page must be a leaf: nothing may depend on an item homed on an examples
page.** Four of your new items break this:

| your item | depends on | homed on |
|---|---|---|
| `cex-graph-of-x-sin-one-over-x-is-not-rectifiable` | `ex-harmonic-series-diverges` | `series-and-nonnegative-tests-examples` |
| `ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous` | `ex-cantor-function-bv-not-absolutely-continuous` | `bounded-variation-and-riemann-stieltjes-examples` |
| `ex-dense-jump-integrand-with-dense-nondifferentiability` | `ex-monotone-function-discontinuous-exactly-at-the-rationals` | `monotone-functions-and-discontinuities-examples` |
| `ex-thomae-integral-function-differentiates-through-dense-discontinuities` | `ex-thomae-is-riemann-integrable-with-integral-zero` | `the-riemann-integral-examples` |

**The fix is the one batch 4 already used and had approved as D8:** cite the
**A-page theorem** that carries the mathematics you actually need, and prove the
specialisation you want inline. The published example may still be *mentioned* in
reader-facing prose — it just cannot be a formal `deps` entry.

Do this per item, not mechanically:

- For the harmonic series, cite the A-page divergence theorem on
  `series-and-nonnegative-tests`, not the example.
- For the Cantor function, cite the A-page bounded-variation/absolute-continuity
  results on `bounded-variation-and-riemann-stieltjes`.
- For the dense-discontinuity monotone function, cite the A-page results on
  `monotone-functions-and-discontinuities`.
- For Thomae, cite the A-page integrability results on `the-riemann-integral`.

If the A page genuinely does **not** carry what you need, say so explicitly in
your notes with the disk evidence — do not invent a citation, and do not quietly
drop the example. Re-deriving a short step inline is fine and expected.

## 2. `undeclared-prereq` — six edges not in the declared closure

- `the-fundamental-theorems-of-calculus` → `the-total-derivative` (order 229)
- `the-fundamental-theorems-of-calculus` → `uniform-convergence-of-functions` (order 169)
- `the-fundamental-theorems-of-calculus-examples` → `monotone-functions-and-discontinuities-examples`
- `the-fundamental-theorems-of-calculus-examples` → `the-riemann-integral-examples`
- `arc-length-and-rectifiable-curves-examples` → `series-and-nonnegative-tests-examples`
- `arc-length-and-rectifiable-curves-examples` → `bounded-variation-and-riemann-stieltjes-examples`

The four `*-examples` edges disappear when you fix §1 — they exist only because
of the B-page dependencies.

The two on the A page are a real decision: **either declare them in that page's
`requires`, or drop the dependency.** Both targets are published and both sit
below order 239, so declaring is legal. Declare only if the dependency is
genuine — if `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`
really needs the total derivative, say so and declare it; if the item can be
stated for a one-variable parameter without it, drop the edge instead. Do not
declare a dependency you do not use, and do not use one you have not declared.

## Do not

Touch any other batch, `plan-spec.json`, `items/`, or `library/`. The
orchestrator re-runs the splice after you — it is idempotent, so your corrected
manifest simply supersedes.

## Verify before reporting

```
node tools/coverage-checklist.mjs research/frontier-11-batch-2.coverage.json
```

`validate-plan` runs against the spliced spec, which you cannot regenerate; the
orchestrator runs it. Report exactly which of the ten errors each change is
meant to clear.
