# Beta FIX brief for run `frontier-12` (step 3 → 4)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's wording: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, web search permissions,
> git permissions, or any permissions whatsoever."* It binds a **compound command
> as a whole — no segment of an `&&` chain may raise a prompt either.** Use
> command forms already allowed inside the workspace sandbox, choose
> non-escalated forms, and pass `dangerouslyDisableSandbox: true` on every Bash
> call where your runtime exposes it. Web search is part of your job and you never
> ask before searching. If an indispensable operation has no escalation-free form,
> **record a blocker in your notes** — that is the escape hatch, not a prompt.

You already scaffolded this batch on run `frontier-12`. The orchestrator has
settled the step-3 decisions and one of them changes your batch. This dispatch is
that change and **nothing else**.

**Read first:** `research/frontier-12-step3-decisions.md` — the full decision
record, including the reasoning behind the change to your batch. Then
`CLAUDE.md`, `SCHEMA.md` and `briefs/beta-scaffold.md` remain your standing
contract, and your own
`research/frontier-12-batch-6.{pages.json,notes.md,coverage.json,proof-contracts.json}`
are still your only writable outputs.

## Rules for a fix round

1. **Change only what the dispatch names.** Everything else in your scaffold was
   accepted. Do not re-litigate a decline the orchestrator did not raise, and do
   not take the opportunity to restructure a page that was not challenged.
2. **Keep all four artifacts consistent.** A change to `pages.json` that does not
   reach `coverage.json` and `proof-contracts.json` will fail the step-4 gates,
   and a coverage entry whose disposition still says `deferred` for a result you
   have now scaffolded is a false record.
3. **Item ids you already scaffolded stay stable** unless the dispatch explicitly
   reassigns them. Downstream artifacts already reference them.
4. **Leave the gates green:**
   ```
   node tools/coverage-checklist.mjs research/frontier-12-batch-6.coverage.json
   node tools/validate-plan.mjs research/plan-spec.json
   ```
   Do **not** run `tools/gates.mjs`; it fails `EPERM` in this sandbox. You may not
   edit `plan-spec.json` — the orchestrator has already made the page-level edits
   your dispatch depends on, so read it, never write it.
5. **Report** what changed, item by item, and anything you could not do.


---

# This dispatch

## Batch 6 — plan reconciliation (11 items)

`level-coverage --verify-current-context` reports
`audit-receipt-plan-reconciliation-missing` for **127** items across the run.
Alpha filled one — its own. **11 of the remaining 126 are yours.**

These are **authorship records, not adjudications**. You authored these items, so
you are the one who knows why the `deps` you wrote differ from the `deps` your
own step-2 scaffold planned. Alpha explicitly declined to fabricate them.

### What to write

`research/frontier-12-batch-6.plan-reconciliation.json` — a JSON array, one
object per item:

```json
[
  {
    "id": "...",
    "planned_deps": ["...", "..."],
    "actual_deps":  ["...", "..."],
    "reason": "..."
  }
]
```

`planned_deps` is the `deps` array in
`research/frontier-12-batch-6.pages.json`; `actual_deps` is the `deps`
frontmatter in `items/<id>.md` **as it stands now**. Copy both exactly — do not
re-sort or normalise them, and do not edit either file.

### The standard for `reason`

Alpha's single filled row is the model, in
`research/frontier-12-audit-coverage.json` under `plan_reconciliation`. It names
each added dependency, says **what the proof needed it for**, and confirms the
dependency is published and earlier in reading order.

A reason must be **specific to that item**. "Authoring revealed additional
dependencies" pasted across thirty rows is a non-answer and will be rejected. For
each added dep, say which step or Fact required it. For each removed dep, say why
the planned route was not taken — a shorter proof, a stronger published result, a
strategy change at step 5, or a step-6/8 repair.

Where a change came from an audit repair rather than your own authoring, say so
and name the stage.

### Your items

- `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann` — added: `lem-complex-conjugation-and-modulus-laws`; removed: none
- `cor-complex-differentiability-implies-continuity` — added: `def-complex-metric-convergence-and-continuity`; removed: `rem-complex-plane-euclidean-dictionary`
- `thm-derivative-of-a-continuous-complex-local-inverse` — added: none; removed: `cor-complex-differentiability-implies-continuity`
- `thm-complex-polynomials-and-rational-functions-are-holomorphic` — added: `cor-complex-differentiability-implies-continuity`, `lem-complex-conjugation-and-modulus-laws`; removed: none
- `thm-complex-exponential-is-entire-with-derivative-itself` — added: `cor-differentiable-implies-continuous`, `lem-algebra-of-continuous-real-maps-on-a-space`, `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`; removed: none
- `thm-zero-complex-derivative-on-a-domain-implies-constant` — added: `cor-complex-differentiability-implies-continuity`; removed: none
- `cor-c2-holomorphic-components-have-nonpositive-hessian-determinant` — added: `thm-clairaut-schwarz-mixed-partials`; removed: none
- `ex-square-function-from-the-complex-difference-quotient` — added: `thm-c2-holomorphic-components-are-harmonic`; removed: none
- `ex-complex-exponential-cauchy-riemann-in-cartesian-and-polar-form` — added: `def-complex-exponential`, `thm-complex-exponential-addition-and-real-extension`; removed: none
- `fs-real-differentiability-implies-complex-differentiability` — added: `def-complex-conjugate-real-imaginary-part-and-modulus`; removed: none
- `fs-cauchy-riemann-on-an-open-set-without-regularity-implies-holomorphy` — added: `cor-complex-differentiability-implies-continuity`; removed: none

### Rules

- Write **only** `research/frontier-12-batch-6.plan-reconciliation.json`.
- Do **not** edit `items/`, `library/`, `plan-spec.json`, the audit receipt, or
  any other batch's files. The orchestrator merges the seven files into
  `research/frontier-12-audit-coverage.json`.
- Do **not** change any item's `deps` to make it match the plan. The authored
  deps are correct; the record of *why* is what is missing.
- Report the count you wrote and anything you could not explain.
