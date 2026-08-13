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
`research/frontier-12-batch-1.{pages.json,notes.md,coverage.json,proof-contracts.json}`
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
   node tools/coverage-checklist.mjs research/frontier-12-batch-1.coverage.json
   node tools/validate-plan.mjs research/plan-spec.json
   ```
   Do **not** run `tools/gates.mjs`; it fails `EPERM` in this sandbox. You may not
   edit `plan-spec.json` — the orchestrator has already made the page-level edits
   your dispatch depends on, so read it, never write it.
5. **Report** what changed, item by item, and anything you could not do.


---

# This dispatch

## Batch 1 — plan reconciliation (18 items)

`level-coverage --verify-current-context` reports
`audit-receipt-plan-reconciliation-missing` for **127** items across the run.
Alpha filled one — its own. **18 of the remaining 126 are yours.**

These are **authorship records, not adjudications**. You authored these items, so
you are the one who knows why the `deps` you wrote differ from the `deps` your
own step-2 scaffold planned. Alpha explicitly declined to fabricate them.

### What to write

`research/frontier-12-batch-1.plan-reconciliation.json` — a JSON array, one
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
`research/frontier-12-batch-1.pages.json`; `actual_deps` is the `deps`
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

- `cor-rational-function-field-as-a-fraction-field` — added: `lem-field-is-a-commutative-ring`; removed: `def-field`, `def-zero-divisor-and-integral-domain`
- `def-local-ring` — added: `thm-quotient-is-field-iff-ideal-maximal`; removed: none
- `ex-fraction-field-of-the-integers-is-the-rationals` — added: `def-rationals`, `thm-int-comm-ring`, `lem-int-cancellation`, `lem-nat-embeds-int`, `def-natural-numbers`, `def-zero-divisor-and-integral-domain`; removed: none
- `ex-inverting-six-in-the-integers` — added: `prop-localisation-zero-equality-and-kernel-criteria`, `cor-prime-iff-euclid-property`; removed: none
- `ex-the-local-ring-z-at-p-and-its-residue-field` — added: `def-localisation-at-a-prime-ideal`, `lem-field-is-a-commutative-ring`, `thm-universal-property-of-localisation`, `prop-localisation-zero-equality-and-kernel-criteria`; removed: none
- `ex-the-local-ring-of-polynomials-at-x` — added: `def-localisation-at-a-prime-ideal`, `cor-maximal-ideals-are-prime`, `cor-factor-theorem-over-a-commutative-ring`, `thm-universal-property-of-localisation`, `prop-localisation-zero-equality-and-kernel-criteria`; removed: none
- `cex-total-quotient-ring-of-a-nondomain-need-not-be-a-field` — added: none; removed: `prop-localisation-zero-equality-and-kernel-criteria`
- `lem-adjoining-one-root-reduces-the-unsplit-degree` — added: `lem-field-is-a-commutative-ring`; removed: none
- `cor-splitting-fields-exist-for-finite-families` — added: `thm-polynomial-ring-over-a-field-is-a-ufd`; removed: none
- `thm-isomorphisms-extend-to-splitting-fields` — added: `cor-factor-theorem-over-a-commutative-ring`, `thm-evaluation-kernel-and-minimal-polynomial`, `thm-polynomial-ring-over-a-field-is-a-ufd`; removed: `lem-adjoining-one-root-reduces-the-unsplit-degree`
- `thm-factorial-coordinate-bound-for-a-splitting-field` — added: `lem-adjoining-one-root-reduces-the-unsplit-degree`, `thm-strong-induction`, `def-factorial-and-falling-factorial`, `def-polynomials-that-split-and-splitting-fields`; removed: `thm-splitting-fields-exist-for-nonzero-polynomials`
- `prop-splitting-field-of-x-n-minus-a` — added: `def-group-power`, `lem-group-power-laws`; removed: `def-integer-power`
- `prop-endomorphisms-of-a-splitting-field-permute-its-roots` — added: `thm-root-bound-for-polynomials-over-a-domain`, `thm-subset-of-a-finite-set`; removed: none
- `ex-splitting-field-of-x-squared-minus-two` — added: `thm-evaluation-kernel-and-minimal-polynomial`; removed: none
- `ex-splitting-field-of-x-cubed-minus-two` — added: `cor-splitting-fields-are-unique-up-to-base-isomorphism`; removed: none
- `ex-splitting-field-of-two-quadratics` — added: `def-polynomials-that-split-and-splitting-fields`; removed: none
- `ex-repeated-root-polynomial-over-f-two` — added: `thm-polynomial-ring-over-a-field-is-a-ufd`; removed: none
- `fs-isomorphism-between-splitting-fields-is-unique` — added: `lem-an-isomorphism-extends-across-a-simple-root-adjunction`, `thm-eisenstein-irreducibility-criterion`; removed: `prop-endomorphisms-of-a-splitting-field-permute-its-roots`

### Rules

- Write **only** `research/frontier-12-batch-1.plan-reconciliation.json`.
- Do **not** edit `items/`, `library/`, `plan-spec.json`, the audit receipt, or
  any other batch's files. The orchestrator merges the seven files into
  `research/frontier-12-audit-coverage.json`.
- Do **not** change any item's `deps` to make it match the plan. The authored
  deps are correct; the record of *why* is what is missing.
- Report the count you wrote and anything you could not explain.
