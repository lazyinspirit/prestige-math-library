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
`research/frontier-12-batch-5.{pages.json,notes.md,coverage.json,proof-contracts.json}`
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
   node tools/coverage-checklist.mjs research/frontier-12-batch-5.coverage.json
   node tools/validate-plan.mjs research/plan-spec.json
   ```
   Do **not** run `tools/gates.mjs`; it fails `EPERM` in this sandbox. You may not
   edit `plan-spec.json` — the orchestrator has already made the page-level edits
   your dispatch depends on, so read it, never write it.
5. **Report** what changed, item by item, and anything you could not do.


---

# This dispatch

## Batch 5 — plan reconciliation (29 items)

`level-coverage --verify-current-context` reports
`audit-receipt-plan-reconciliation-missing` for **127** items across the run.
Alpha filled one — its own. **29 of the remaining 126 are yours.**

These are **authorship records, not adjudications**. You authored these items, so
you are the one who knows why the `deps` you wrote differ from the `deps` your
own step-2 scaffold planned. Alpha explicitly declined to fabricate them.

### What to write

`research/frontier-12-batch-5.plan-reconciliation.json` — a JSON array, one
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
`research/frontier-12-batch-5.pages.json`; `actual_deps` is the `deps`
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

- `thm-conditional-probability-multiplication-and-chain-rules` — added: none; removed: `thm-finite-additivity-of-probability`
- `thm-finite-law-of-total-probability` — added: `lem-finite-probability-basic-laws`; removed: none
- `def-finite-real-random-variable-and-distribution` — added: `thm-finite-additivity-of-probability`; removed: none
- `def-variance-and-covariance` — added: `thm-of-square-roots`; removed: none
- `lem-cauchy-schwarz-for-finite-random-variables` — added: `def-expectation-on-a-finite-probability-space`; removed: none
- `thm-finite-second-moment-lower-bound` — added: `def-expectation-on-a-finite-probability-space`; removed: none
- `cor-relative-variance-positive-probability-bound` — added: none; removed: `lem-variance-and-covariance-identities`
- `ex-bayes-theorem-for-two-urns` — added: `def-conditional-probability`; removed: none
- `fs-linearity-of-expectation-requires-independence` — added: `def-uniform-finite-probability-space`, `def-independence-of-finite-random-variables`; removed: `cex-dependent-variables-need-not-factor-expectation`
- `thm-first-moment-method` — added: `lem-finite-probability-basic-laws`; removed: none
- `lem-exponential-dominates-one-plus-x` — added: `cor-exponential-reciprocal-and-positivity`, `thm-exponential-addition-formula`; removed: none
- `def-erdos-renyi-random-graph` — added: `def-bernoulli-and-binomial-random-variables`; removed: none
- `lem-mgf-of-independent-finite-sum` — added: `def-independence-of-finite-random-variables`, `thm-finite-additivity-of-probability`, `lem-finite-sum-reindexing-and-fubini`; removed: none
- `thm-chernoff-bound-for-independent-random-signs` — added: `def-independence-of-finite-random-variables`; removed: none
- `lem-local-lemma-conditional-probability-bound` — added: none; removed: `lem-mutual-independence-under-subfamilies-and-complements`
- `thm-asymmetric-lovasz-local-lemma` — added: `lem-of-sign-rules`; removed: none
- `thm-hypergraph-two-colouring-by-first-moment` — added: `thm-linearity-of-expectation`; removed: none
- `thm-hypergraph-two-colouring-by-local-lemma` — added: `def-product-of-finite-probability-spaces`, `lem-finite-sum-reindexing-and-fubini`, `def-dependency-digraph-for-finite-events`, `lem-exponential-dominates-one-plus-x`, `thm-positive-probability-existence-principle`; removed: `thm-product-probability-has-independent-coordinate-events`
- `thm-szele-many-hamilton-paths-in-a-tournament` — added: `def-directed-walk-trail-path-cycle-and-strong-connectivity`; removed: `def-hamilton-path-cycle-and-hamilton-connected`
- `thm-tournament-property-s-k-existence` — added: `lem-finite-probability-basic-laws`; removed: none
- `lem-arbitrarily-large-primes-congruent-to-two-modulo-three` — added: `def-monoid-finite-product`; removed: `lem-every-integer-above-one-has-a-prime-divisor`, `def-finite-sum`
- `lem-random-graph-short-cycle-expectation` — added: `def-graph-walk-trail-path-and-cycle`, `thm-number-of-injections`; removed: none
- `lem-random-graph-independence-number-bound` — added: `thm-binomial-closed-formula`; removed: none
- `thm-erdos-high-girth-and-high-chromatic-number` — added: `def-standard-complete-bipartite-path-and-cycle-graphs`, `lem-finite-probability-basic-laws`, `lem-exponential-dominates-one-plus-x`, `cor-exponential-reciprocal-and-positivity`, `thm-exponential-is-strictly-increasing`; removed: none
- `ex-triangle-count-in-the-erdos-renyi-random-graph` — added: `thm-variance-of-a-finite-sum`; removed: none
- `ex-second-moment-bound-for-a-nonempty-random-subset` — added: `def-independence-of-finite-random-variables`, `lem-variance-and-covariance-identities`; removed: none
- `ex-diagonal-ramsey-lower-bound-by-the-union-bound` — added: `lem-finite-probability-basic-laws`; removed: none
- `ex-local-lemma-hypergraph-parameter-check` — added: `def-real-exponential-function-and-e`, `lem-exponential-factorial-tail-bound`; removed: none
- `ex-high-girth-high-chromatic-parameter-ledger` — added: `def-real-exponential-function-and-e`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `lem-exponential-dominates-one-plus-x`, `cor-exponential-reciprocal-and-positivity`, `thm-exponential-is-strictly-increasing`, `lem-finite-probability-basic-laws`, `thm-markov-inequality`, `thm-finite-union-bound`, `thm-positive-probability-existence-principle`; removed: none

### Rules

- Write **only** `research/frontier-12-batch-5.plan-reconciliation.json`.
- Do **not** edit `items/`, `library/`, `plan-spec.json`, the audit receipt, or
  any other batch's files. The orchestrator merges the seven files into
  `research/frontier-12-audit-coverage.json`.
- Do **not** change any item's `deps` to make it match the plan. The authored
  deps are correct; the record of *why* is what is missing.
- Report the count you wrote and anything you could not explain.
