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

# frontier-11, batch 1 — add the ℝ² bridge item (one item)

You are **Beta-frontier-11-1**. Artifacts: `research/frontier-11-batch-1.*`.
Your pairs are already `sufficient`; this is one required addition, nothing else.

## Why

The owner has approved (2026-08-12) that order 54 builds ℂ as the stem field
$\mathbb{R}[x]/(x^2+1)$, materially rewriting four previously published items
whose construction was the coordinate plane. Alpha's re-check
(`research/frontier-11-alpha-recheck.md` §4.5a) found a consequence:

Published `def-complex-metric-convergence-and-continuity`, which stays at order
189, contains the load-bearing sentence

> Under the identification $\mathbb{C}=\mathbb{R}^2$, this is exactly the metric
> $d_2$ induced by the Euclidean norm of [[def-p-norms-on-rn]].

Today that identification comes from `def-complex-numbers-and-arithmetic`'s
"Set $\mathbb{C}=\mathbb{R}^2$". Once ℂ is the quotient, that sentence cites
nothing. Three consumers rest on the plane model directly or transitively:
`def-complex-metric-convergence-and-continuity`, `thm-complex-plane-is-complete`,
and `lem-complex-polynomial-growth-and-minimum-modulus`.

## What to add

One theorem on `field-extensions-and-the-complex-numbers`, placed **immediately
after `thm-complex-numbers-form-a-field`**:

**`thm-complex-numbers-are-the-real-coordinate-plane`** — the map
$a+bi \mapsto (a,b)$ is a bijection $\mathbb{C} \to \mathbb{R}^2$ carrying the
field operations to the coordinate formulas
$(a,b)+(u,v) = (a+u, b+v)$ and $(a,b)(u,v) = (au-bv, av+bu)$, and
$|a+bi| = \sqrt{a^2+b^2}$.

Source: **Srivastava §1.1**, already in your coverage ledger as the $\mathbb{R}^2$
treatment — retag the relevant harvested heading from its current disposition to
`included` naming this id, so the harvest stays true of disk.

## The boundary — this matters

State the coordinate bijection and the arithmetic **only**. Do **not** state the
norm identification with the Euclidean metric $d_2$: that needs `def-p-norms-on-rn`
at **order 167**, which from order 54 is a load-bearing forward reference that
hard-fails `forward-ref`. The metric identification stays at order 189, where
`def-complex-metric-convergence-and-continuity` already cites the p-norm items
directly. Writing $|a+bi|=\sqrt{a^2+b^2}$ is fine — that is your own modulus
definition unfolded, not the $\mathbb{R}^2$ norm.

Every dependency of this item must sit at order ≤ 54. Give it
`provenance.statement` and `provenance.proof` with a rationale in your notes, and
add its proof-contract entry.

## Leave everything else alone

Do not touch any other item, any other page, `plan-spec.json`, `items/`, or
`library/`. Re-run:

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/coverage-checklist.mjs research/frontier-11-batch-1.coverage.json
```
